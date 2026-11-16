# Fit Mom Trader — Sources Log

Researched: 2026-11-16 · All fetches by webfetch / Code Mode fetch / curl.

## Successfully fetched

| # | URL | What it provided | Status |
|---|-----|------------------|--------|
| 1 | https://www.youtube.com/feeds/videos.xml?channel_id=UCQVPFO5plv20WVSQjDgyHZw | Latest 15 videos: IDs, titles, dates, views, types, full descriptions | OK |
| 2 | https://www.youtube.com/@FitMomTrader/about | Channel description, keywords, external links (Mentorship → go.fitmomtrader.com/youtube), 45.4K subs | OK |
| 3–17 | Watch pages for the 15 RSS videos (1S8azVXiKGg, Lrn8wBhOQ8c, tV-LIqcr4FM, -8-27CdzaGw, 8mvlzx7K3Jw, aL1dx15zpBQ, Yywjou3IcsI, -zZzTjnIx-w, tDkYJd7s6Yo, CRtMdaK0qbg, KHnT6PEOirw, rgXbye2SK2I, 5l_GaLPM1To, 5RSIRmnbtXE, ueZ-bJGbrQk) | shortDescription, lengthSeconds, isLiveContent, like counts, chapters (KHnT6PEOirw: 8 chapters) | OK ×15 (all HTTP 200) |
| 18 | https://fitmomtrader.com/ (→ https://fitmomtrader.com/waitlist-vsl) | FMT Academy landing: headline, $28K/week claim, student results | OK (via curl + webfetch) |
| 19 | https://go.fitmomtrader.com/youtube (→ waitlist-vsl?utm_source=yt) | Confirms funnel redirect | OK (curl) |
| 20 | https://fitmomtrader.com/free-course | Free 7+ hr course page: 5 course bullets, Krista's $10K Lucid payout certificate | OK |
| 21 | https://podscan.fm/podcasts/the-day-trading-show/episodes/mom-of-3-breaks-down-her-165k-in-prop-firm-payouts | Podcast episode: full description, all 19 chapter titles, first ~9 min of transcript + preview clips | OK (partial — full transcript registration-gated) |
| 22 | https://www.youtube.com/watch?v=LfSeAMzKjwM | "my trading strategy is boring..." — 755,760 views, 7 chapters | OK |
| 23 | https://www.youtube.com/watch?v=pNihvRxPUR0 | "Initial Balance Breakdown" — full IB description + 4 chapters | OK |
| 24 | https://www.youtube.com/watch?v=NU2ZBb0Db9Q | "15 min OR + vwap strategy" live VOD description | OK |
| 25 | https://www.youtube.com/watch?v=lOnEKIWj0S8 | "Initial Balance Masterclass: 3 Ways to Trade It" — 6 chapters | OK |
| 26 | https://www.youtube.com/watch?v=as3aN2faLxo | "The ORB Strategy Every Trader Should Know" — 6 chapters | OK |
| 27 | https://www.youtube.com/watch?v=yrgMYe1P7fI | "This Initial Balance Setup Has a Statistical Edge" — 5 chapters | OK |
| 28 | https://www.youtube.com/watch?v=Bt8jkLp6JDA | "The ONLY Setup I Need to Trade Futures (Initial Balance)" — 7 chapters | OK |
| 29 | https://www.youtube.com/watch?v=UuARZLd0aVM | "Futures Prop Firms Explained for Beginners" — date/views/chapters | OK |
| 30 | https://www.youtube.com/watch?v=IYfOI0O5Fck | "My Honest Opinion on FUNDEDNEXT" — date/views | OK |
| 31 | https://www.youtube.com/watch?v=c1tvzE_i6_U | "Is Lucid Trading Legit?" — date/views/chapters | OK |
| 32 | https://www.youtube.com/@FitMomTrader/videos | Total video count: 739 videos | OK |
| 33 | Redirect traces: go.fitmomtrader.com/54d5a280, /09692d1a, /a0446b76, /caa76b19, /3fb61dda, /3262baf2 | All resolve to /free-course or /waitlist-vsl | OK (curl) |
| 34 | Site probes: fitmomtrader.com/blog (404), /about (404), /mentorship (404), /free-course (200), /waitlist (200) | Confirms no blog; two-page funnel | OK |

## Gaps / failures

- **Full podcast transcript** (after ~08:54): Podscan requires registration. Captured via websearch snippets instead (ES/NQ split, $165K total). Not a fetch failure — a hard gate.
- **www.fitmomtrader.com** webfetch transport error; recovered via curl on apex domain (fitmomtrader.com → 200, redirects to /waitlist-vsl).
- **Shorts descriptions**: all 7 RSS shorts have empty descriptions — evidence is title-level only (marked as such in files).
- **Publish dates for 9 older videos**: captured from player-response publishDate fields (second pass after first regex missed).
- **Video/audio content itself** (live streams, shorts, course videos): not transcribed — strategy content documented here comes from descriptions, chapters, titles, the site, and the podcast transcript excerpts.

## Search queries used

- "Fit Mom Trader Krista trading strategy 15 min ORB initial balance" → found LfSeAMzKjwM coverage (Active Edge PREREG), IB Breakdown video, masterclass videos, podcast.
- "Fit Mom Trader Krista futures prop firm interview" → found The Day Trading Show episode (Podscan), FundedNext review, Prop Firms Explained, Lucid review, Linktree (Krista Fudge), channel about snippet.

## Method notes

- Watch pages fetched via Code Mode `fetch` with desktop UA, parsing ytInitialPlayerResponse (`videoDetails.shortDescription`, `lengthSeconds`, `viewCount`, `publishDate`, `chapterRenderer` blocks).
- Nothing invented: claims sourced to specific videos/pages/timestamps; her stated claims labeled as claims; quant's mechanization choices (★ items on PREREG page) explicitly excluded from her rules.
