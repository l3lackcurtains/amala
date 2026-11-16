---
description: Enrich a trader's dashboard content — mine video descriptions/interviews/social, fix thin playbook, optimize and organize sections, then rebuild + deploy
argument-hint: <slug>
---

# Enrich a trader

Target trader slug: **$ARGUMENTS** — files live under
`dashboard/src/data/traders/<slug>.json` and `dashboard/src/markdown/traders/<slug>/`.

Goal: take a trader whose playbook is thin (often because the public text is link-only
promos or lives inside videos) and make the content **deep, specific, readable, and organized**
using evidence only — never invented.

## 1. Read current state
- Read the trader's JSON + strategy/rules/psychology md files.
- Note weak sections, missing specifics, filler (video-title trivia, view counts, promo text).

## 2. Mine the content — in this order (stop when you have enough)
1. **Video descriptions** already fetched (`videos[]` + research `YOUTUBE-VIDEOS.md`):
   titles + descriptions + keywords.
2. **Podcast / interview / blog pages** about the trader: websearch
   `"<trader>" strategy interview OR podcast OR mentorship`. These often contain the
   real taught material with timestamps (e.g. Trading Nut, Day Trading Show). Fetch the pages.
3. **Short-form social** (Instagram/TikTok reels): websearch
   `"<trader name>" "<strategy term>"` — reels quote their rules directly.
4. **Transcript tool (optional, last resort)**:
   `node tools/yt-transcript.cjs <videoId> [more ids]`
   It writes `transcript-<id>.txt` files with `[MM:SS]` timestamps. Skip it if it reports
   errors/rate limits (it uses unauthenticated YouTube endpoints and gets 429s).
   Never block the enrichment on the transcript tool.

## 3. Rewrite the playbook (this is the value step)
- **Delete filler**: video-title listings, view counts, promo copy, "documented via keywords"-style
  hedging — keep only what TEACHES.
- **strategy.md**: concrete step-by-step of each model/setup — timeframe, session, trigger,
  confirmation, entry (incl. pending-stop mechanics), stop, target, R:R — every claim with
  a **markdown link** to the source page/video.
- **rules.md**: top-level ordered list, one rule per item, `**bold title.** evidence + numbers`.
- **psychology.md**: mindset lessons with quotes + links.
- Keep `## ` subsections + frontmatter (title/trader/topics).
- Update JSON: `tagline`, `summary`, `oneLiner`, `stats`, `highlights`, `articles` (add the
  mined interview/reel URLs), `sources.notes` (what was mined + date).

## 4. Verify + deploy
1. `npm.cmd run build` in `dashboard/` — must pass.
2. `node -e "JSON.parse(require('fs').readFileSync('src/data/traders/<slug>.json','utf8'))"` — valid.
3. `git add -A && git commit -m "Enrich trader: <name>" && git push` — push auto-deploys to Vercel.
4. Report: sections rewritten, new specifics added, source links added.
