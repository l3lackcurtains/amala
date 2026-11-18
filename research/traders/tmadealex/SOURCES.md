# TMade Alex (TraderMade) — Sources & fetch log

Researched **2026-11-18**. Slug `tmadealex`.

## Fetched — success

| Source | Method | Notes |
|---|---|---|
| https://www.youtube.com/@TMadeAlex/about | curl | Channel `UCVqJMEQgI24B_GTptVqoP7A`, "Trade futures with confidence. Live streams Monday-Friday. Join the community: whop.com/tradermade", joined Mar 19 2025, 79 videos, ~141K views, 3.59K subscribers |
| @TMadeAlex /videos /shorts /streams | yt-dlp `--flat-playlist` | 80 items: 2 videos + 78 live streams (1 upcoming) |
| RSS feed | curl | latest 15 with publish dates |
| https://www.youtube.com/@propfirmmatch | yt-dlp `--flat-playlist` | 990 items; 5 streams titled with "TMadeAlex", 3 shorts about Alex |
| 265 PropFirmMatch stream watch pages | curl | descriptions: **58** daily "London & New York Session" 12-hour streams (Apr–Oct 2026) list "Tmade Alex" as a host |
| Transcripts × 39 | Claude in Chrome (user's logged-in browser; player caption track, json3) | 30 TMade Alex streams + 5 PFM co-hosted streams + 2 PFM 12-hour streams + 2 shorts ≈ 1.18M words → `raw/tr/` |
| https://whop.com/tradermade/ (+ product + reviews pages) | curl | Community bio, products, 18 reviews (5.0) |

## Failed / limited

| What | Result |
|---|---|
| `tools/yt-transcript.cjs` / yt-dlp captions | Blocked — YouTube flagged the IP as a bot ("Sign in to confirm you're not a bot") after ~350 page fetches in one day |
| curl watch pages for @TMadeAlex | Captcha page — no descriptions/publish dates for older streams |
| Captions for GIXcqNZ3hlg, B2irWjZZIGU, Q3MizFFoGUA, Oa1bGwwVa50 | No caption track / player never requested captions |
| Captions for uPikwwnRBzQ, FicKYHaBCMY, WahU7Qd7RGc, ErRxjMX-6Lo, Bl9Au5h8eDA | Empty caption response (throttled) — not retried |
| Web search for interviews/articles ("TMade Alex", "Tradermade Alex") | Nothing found — no external interviews or written content exist |

## Not fetched

- The remaining ~45 TMade Alex streams and 54 PFM 12-hour streams (sampled instead; see coverage in YOUTUBE-VIDEOS.md).
- X @TMadeAlex, Discord content (login walls).

## Method

- Transcripts condensed: PFM 12-hour streams → 11:00–14:00 ET window only (Alex's slot); long own streams → keyword-dense excerpts (full transcript kept for lookup); 352K words read by four sub-agents with `(videoId [MM:SS])` citations → `raw/notes-alex-A.md`, `-B.md`, `-C.md`, `raw/notes-alex-pfm.md`.
