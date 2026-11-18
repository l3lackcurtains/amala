# Yush — Sources & fetch log

Researched **2026-11-18**. Slug `yush`.

## Fetched — success

| URL | Method | Notes |
|---|---|---|
| https://www.youtube.com/@TraderYush/about | curl | Channel ID `UCHP5qcFij5q4P4Q2aaMExMQ`, "Futures Trader - Helping you become a more profitable trader with order flow", joined Nov 14 2020, 54 videos, ~425K views |
| https://www.youtube.com/feeds/videos.xml?channel_id=UCHP5qcFij5q4P4Q2aaMExMQ | curl | RSS, latest 15 |
| https://www.youtube.com/@TraderYush/videos · /shorts · /streams | curl (ytInitialData) | Full list: 8 videos, 27 shorts, 19 streams = 54 |
| https://www.youtube.com/watch?v=<id> × 54 | curl | `shortDescription`, `publishDate`, `viewCount` for all 54 |
| YouTube auto-captions × 53 | yt-dlp (json3, en-orig) | ~209K words. `eT-HIzQOA7k` (short) had no captions (429 + none available) |
| YouTube auto-captions × 4 interviews | yt-dlp | hvyf6frvCcA, 3SoMtHNUeNU, 29HfHgBQQmA, ps5In64-2So (~76K words) |
| https://yushcapital.co/ | curl + JS bundles | Course, membership, FAQ, reviews; story/rules/interviews/setup walkthroughs from `/_next/static/chunks/*.js` |
| https://yushcapital.co/legal/disclaimer | curl | Risk disclaimer only |
| https://www.chartfanatics.com/strategies/order-flow-strategy | curl | Full strategy write-up + 2 trade breakdowns |

## Fetched — failed / empty

| URL | Result |
|---|---|
| `tools/yt-transcript.cjs` on 8 long-form videos | "caption url returned empty" for all — fell back to yt-dlp, which worked |
| https://yushcapital.co/about · /story · /my-story · /blog · /faq | 404 (single-page site) |

## Not fetched (out of scope / gated)

- X (@TraderYush) and Instagram (@traderyush_) — payout posts referenced on stream; not crawled (login walls).
- Whop reviews page — excerpts already quoted on yushcapital.co.
- Course dashboard lessons (`/dashboard/learn/...`) — paid, login required.

## Method

- 19 live streams split into 3 batches, each read in full by a sub-agent and distilled with `(videoId [MM:SS])`
  citations → `raw/notes-streams-A.md`, `-B.md`, `-C.md`.
- 4 interviews distilled the same way → `raw/notes-interviews.md`.
- 8 long-form teaching videos + 26 shorts + site + Chart Fanatics read directly.
- Caption text is auto-generated; quotes lightly corrected for obvious mis-hearings only.
