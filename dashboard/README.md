# Amala — Trader Strategy Library

**Amala** (अमला — the amla fruit; "pure/clean" in Nepali) — a data-driven study
dashboard for prop-firm traders (Denny, D-Money, Lucas, Zarb) built from research into
their public blogs and YouTube channels — 100+ articles and 45+ videos analyzed.

## Run it

```bash
cd dashboard
npm install     # first time only
npm run dev     # dev server at http://localhost:4321
npm run build   # static site in dist/
npm run preview # serve the built site
```

Requires Node 18+.

## Pages

| Route | What it is |
|---|---|
| `/` | Home dashboard — trader cards, side-by-side comparison, shared DNA |
| `/traders/<slug>` | Per-trader study page — overview, key rules, strategy/rules/psychology playbooks, videos, source articles |
| `/videos` | Video library — every analyzed video grouped by trader |

## How to add a trader (no code changes)

1. **Metadata** — copy any file in `src/data/traders/` and save as `src/data/traders/<slug>.json`:
   - `slug` (used in the URL), `name`, `show`, `streamSlot`
   - `accent` / `accentSoft` — the theme colors for their page (hex + rgba)
   - `tagline`, `summary`, `oneLiner`, `keyQuote`, `keyQuoteSource`
   - `stats` — array of `{ "label", "value" }` chips shown in the hero
   - `highlights` — array of short strings (their most important rules, shown as cards)
   - `sections` — array of `{ "id", "title", "file", "lead" }`; `file` points to a markdown file (no extension)
     - a section with `"id": "rules"` automatically gets the numbered rule-card styling
   - `videos` — array of `{ "title", "url", "date", "type", "takeaway" }` (`type`: `live` | `video` | `short`)
   - `articles` — array of `{ "title", "url", "date", "takeaway" }`
   - `sources` — `{ "category", "notes" }`
2. **Content** — add markdown files in `src/markdown/traders/<slug>/` named after each section's `file`
   (e.g. `strategy.md`, `rules.md`, `psychology.md`).
   - No frontmatter, no top-level `#` title — start at `## ` subsections
   - Standard markdown works: blockquotes (`>`), tables, lists, bold, `code`
   - In `rules.md`, keep each rule as **one item in a top-level ordered list** so the rule-card styling applies
3. **Rebuild** — `npm run build`. The trader page, home card, comparison row, and video library section
   are all generated automatically from the JSON + markdown.

## Where the research lives

The raw research (markdown, per-article notes, crawl logs) sits next to this folder — one folder per trader:

- `../denny/` — Denny's Trading Desk (34 articles)
- `../dmoney/` — D-Money's Trading FAQ (35 articles, 50 hard rules)
- `../lucas/` — Lucas's Trading Playbook (20 articles)
- `../zarb/` — Zarb / iamzarb.com (blog + YouTube)
- `../youtube/` — BDH Trading video index + RSS extraction

Study files: `STRATEGY.md`, `RULES.md`, `PSYCHOLOGY.md`, `ARTICLES.md`, `YOUTUBE-VIDEOS.md`, `SOURCES.md` in each folder.

> Educational study material only — not financial advice.
