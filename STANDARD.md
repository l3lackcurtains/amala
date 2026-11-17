# Amala Data Standard

How trader data is stored, structured, and queried. Follow this when adding or editing traders.
A reusable pipeline exists: run **`/add-trader <youtube-handle>`** in OpenCode (see
`.opencode/command/add-trader.md`) — it implements everything below automatically.

## Design principles (from research)

1. **Markdown bodies + small typed YAML frontmatter** — the "Open Knowledge Format" pattern.
   Bodies stay readable and agent-writable; frontmatter carries the small set of structured,
   queryable fields (title, trader, topics).
2. **One normalized `profile` block per trader** — fixed keys so "what does X trade?" is answerable
   across all traders without parsing prose.
3. **Rules are first-class data** — each rule gets a stable ID (`<slug>-r<N>`), a group, an
   auto-computed topic tag, and a deep link. This is what powers "ask about trading" queries.
4. **Build-time normalization, not authoring constraints** — agents write natural markdown; a
   build step (`src/lib/normalize.ts`) extracts, IDs, and tags everything. No databases.

## File layout

```
trading/                       ← repo root (GitHub: amala)
  amala/                       ← THE APP — Astro dashboard (Vercel project "amala")
    src/data/traders/<slug>.json         ← metadata + profile + videos + articles
    src/markdown/traders/<slug>/
      strategy.md  rules.md  psychology.md   ← frontmatter + "## " sections
  research/                    ← supporting research (agent output, never rendered)
    traders/<slug>/
      STRATEGY.md RULES.md PSYCHOLOGY.md ARTICLES.md YOUTUBE-VIDEOS.md SOURCES.md
    youtube/                   ← BDH Trading master video index + RSS extraction
  tools/                       ← scripts (yt-transcript.cjs)
  .opencode/command/           ← agent files (/add-trader, /ask, /enrich-trader)
  STANDARD.md                  ← this spec
```

## 1. Trader metadata — `src/data/traders/<slug>.json`

Required keys (exact names):

| Key | Type | Notes |
|---|---|---|
| `slug` | string | URL id, lowercase, no spaces |
| `name` / `show` | string | Display name / show or brand name |
| `streamSlot` | string | e.g. `Mon–Fri · 6:00–9:00 AM` |
| `accent` / `accentSoft` | string | Theme colors, hex + rgba (must be unique per trader) |
| `tagline` / `summary` / `oneLiner` | string | Hero copy |
| `keyQuote` / `keyQuoteSource` | string | Defining quote + where it came from |
| `stats` | array | `{ label, value }` chips for the hero |
| `highlights` | array of strings | Their 6 most important rules |
| `sections` | array | `{ id, title, file, lead }` — `file` maps to markdown |
| `videos` | array | `{ title, url, date, type: live\|video\|short, takeaway }` |
| `articles` | array | `{ title, url, date, takeaway }` |
| `links` | object | `{ youtube, site, siteLabel }` — clickable source links |
| `sources` | object | `{ category, notes }` |
| `profile` | object | **Normalized profile** — see below |

### The normalized `profile` block

Fixed keys, fixed vocabulary — this is what cross-trader questions run against:

```json
"profile": {
  "instruments": ["NQ", "ES", "Perps"],
  "style": "one-line description of the model",
  "sessions": ["Globex open 6:00 PM", "NY open 9:30 AM", "PM Kill Zone 2–4 PM"],
  "firms": ["Apex", "Tradeify", "Lucid"],
  "niche": "what makes their system distinctive"
}
```

## 2. Markdown content — `src/markdown/traders/<slug>/{strategy,rules,psychology}.md`

Every file **starts with frontmatter**:

```yaml
---
title: Trading Rules
trader: dmoney
topics:
  - risk
  - entries
  - market-regime
---
```

- No `#` top-level title; content is `## ` subsections.
- Standard markdown: `**bold**`, `> quotes`, tables, lists.
- **rules.md**: every rule is ONE item in a top-level ordered list:
  `1. **Rule title.** evidence + numbers`. Quotes go inside the item as indented `>` blockquotes.

### Build-time normalization

`src/lib/normalize.ts` (used by `search-index.json.ts` and the trader page):

- `parseFrontmatter` — reads the typed fields
- `extractRules(html)` — turns top-level `ol > li` items into structured rules
  (`{ index, group, title, text, topics, anchor }`)
- `injectRuleIds(html, prefix)` — writes `id="rules-r<N>"` onto every rule for deep linking
- `tagTopics(text)` — assigns topics from the controlled vocabulary below

## 3. Topic vocabulary (controlled list)

`risk · entries · exits · sizing · sessions · market-regime · indicators · payouts ·
prop-firm · psychology · discipline · setups · tools · news`

The `/ask` page filters on these. Keep new topics in `normalize.ts` `TOPICS` only.

## 4. Query layer

- `search-index.json.ts` builds one document per: profile, playbook subsection,
  **individual rule** (with topics + stable id), video, and article.
- `Ctrl K` global search on the dashboard reads that index.
- To **ask questions across all traders**, run the **`/ask <question>`** command in OpenCode
  (`.opencode/command/ask.md`, global copy in `~/.config/opencode/command/ask.md`).
  It retrieves matching rules/sections from these files and answers per trader —
  with exact quotes, common threads, contrasts, and sources.

## 5. Adding a trader

Run `/add-trader <youtube-handle> [site]` — or follow this file manually.
Then: `npm.cmd run build` (must pass), verify the page, `git push` (auto-deploys to Vercel).
