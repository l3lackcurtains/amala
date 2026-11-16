---
description: Research a trader from their YouTube channel (and website) and add them to the Gurans/Amala strategy dashboard
argument-hint: <youtube-handle-or-channel-id> [optional website url]
---

# Add a trader to the strategy dashboard

You are adding a new trader to the Amala strategy dashboard. The trader source is: **$ARGUMENTS**

Follow this pipeline exactly, in two phases. Use the webfetch tool for all fetching.
Batch independent fetches in parallel. Retry failures once, then log as failed and continue.

## PHASE 1 — Research

1. **Resolve the channel ID**: fetch the channel/about page (format `html`), extract the canonical
   `channel/UC...` ID and channel name. The about page also contains the channel description and links.
2. **Enumerate videos**: fetch `https://www.youtube.com/feeds/videos.xml?channel_id=<ID>` —
   the RSS returns the latest ~15 videos (IDs, titles, dates, views, types, descriptions).
3. **Extract full descriptions**: for every video ID, fetch the watch page
   `https://www.youtube.com/watch?v=<ID>` (format `html`) and extract the `shortDescription`
   JSON field — full descriptions contain the strategy content and chapter timestamps.
4. **Crawl their website** if one is linked (check channel description/links; try obvious domains).
   Fetch main page + blog/strategy/about pages, format `markdown`; follow blog pagination until 404.
5. **Fill gaps** with websearch (`<name> strategy`, `<name> prop firm`) only if needed.
6. If they have blog articles, fetch and read EVERY article.

### Research output → `C:\Users\oled\Desktop\faltu\trading\<slug>\`
- `STRATEGY.md` — markets, setups, timeframes, sessions, indicators, checklist, trade management
- `RULES.md` — every explicit rule (risk, stops, sizing, prop-firm tactics, payouts, routines)
- `PSYCHOLOGY.md` — mindset, lessons, failures
- `YOUTUBE-VIDEOS.md` — every video: ID, URL, title, date, views, type, strategy content from description
- `ARTICLES.md` — every blog article found (or document site sections if landing page only)
- `SOURCES.md` — every URL fetched, success/fail log, researched date

## PHASE 1.5 — Study the actual video content (transcripts when available)

Descriptions and titles are the floor, not the ceiling. For every video that looks like a
teaching video (strategy/setup/how-to/explained/course/review), pull what is ACTUALLY SAID:

1. **Try the transcript tool first:**
   `node C:\Users\oled\Desktop\faltu\trading\tools\yt-transcript.cjs <videoId> [<videoId> ...]`
   It writes `transcript-<id>.txt` files with `[MM:SS]` timestamps. On success, distill the
   real taught material from the transcript into the playbook (this is what the user reads as
   "deep content").
2. **If it fails or returns nothing** (rate-limit 429, no caption tracks, empty timedtext — common
   from datacenter IPs): do NOT retry more than once. Fall back to the description chapters/titles/
   keywords already captured, plus websearch for interviews/podcasts/articles about the trader.
   Never block the whole pipeline on transcripts.
3. In the playbook md, cite transcript-derived points with `[MM:SS]` timestamps and the video
   link, exactly like other sources.

## PHASE 1.6 — Content-depth check (fast) — do NOT skip

Before writing PHASE 2 files, grade the extracted material per trader topic:
- **Rich enough** (specific steps/numbers/quotes): proceed straight to writing.
- **Thin** (mostly link-only descriptions, live streams, promo text): run ONE targeted
  websearch set (`"<name> trading strategy"`, `"<name> interview OR podcast OR mentorship"`)
  and fetch the 1–3 best sources (interview/blog/reel pages) to fill the gaps — then proceed.
- The goal: every playbook section must teach something concrete, or state honestly that the
  public record doesn't document it.

## PHASE 2 — Dashboard data

Write these files (paths + schema below). This makes the trader appear on the live dashboard
automatically — no code changes needed.

### 1. `C:\Users\oled\Desktop\faltu\trading\dashboard\src\data\traders\<slug>.json`
Keys, exactly: `slug`, `name`, `show`, `streamSlot`, `accent`, `accentSoft`, `tagline`, `summary`,
`oneLiner`, `keyQuote`, `keyQuoteSource`, `stats` (array of {label,value}), `highlights` (6 strings),
`sections` (array of {id,title,file,lead} — ids/files: strategy, rules, psychology),
`videos` (array of {title,url,date,type: live|video|short,takeaway}),
`articles` (array of {title,url,date,takeaway}), `links` ({youtube,site,siteLabel}),
`profile` (normalized block — see below), `sources` ({category,notes}).

**`profile` is required** (normalized vocabulary, per STANDARD.md):

```json
"profile": {
  "instruments": ["NQ", ...],
  "style": "one-line description of the model",
  "sessions": ["Globex open 6:00 PM", "NY open 9:30 AM", ...],
  "firms": ["Apex", "Tradeify", ...],
  "niche": "what makes their system distinctive"
}
```

### 2. Markdown content → `dashboard\src\markdown\traders\<slug>\`
- Every file **STARTS with YAML frontmatter** (per STANDARD.md):

```yaml
---
title: <Strategy Playbook | Trading Rules | Psychology & Mindset>
trader: <slug>
topics:
  - <3-5 topics from the controlled vocabulary in STANDARD.md>
---
```

- After frontmatter: NO top-level `#` title — start directly with `## ` subsections,
  preserve all details/numbers/quotes.
- In `rules.md` every rule must be ONE item in a TOP-LEVEL ordered list
  (`1. **Rule title.** evidence`); quotes as `> blockquote` indented 3 spaces inside list items.

## QUALITY BAR
- Nothing invented. Undocumented = say so honestly, mark gaps. Stated vs inferred distinguished.
- Quote actual words with sources. Capture specific numbers (points, dollars, R:R, times).
- Valid JSON (node-parse it to verify before finishing). Frontmatter required on all md files.
- Follow `trading/STANDARD.md` for the full spec (file layout, frontmatter, profile, topics).

## FINISH
1. `npm.cmd run build` in `dashboard/` — must succeed (7→8 pages, new trader page appears).
2. Verify `fetch('http://localhost:6789/traders/<slug>/')` if the dev server is running.
3. `git add -A && git commit -m "Add trader: <name>" && git push` from `trading/` — push auto-deploys to Vercel.
4. Report: videos processed, rules count, articles count, their niche, top 3 strategy points.