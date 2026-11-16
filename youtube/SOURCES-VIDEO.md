Source: BDH Trading YouTube channel (UCWngZTnuJGdrf3SVQycKZww) + linked videos, researched 2026-11-16

# SOURCES-VIDEO.md — URLs fetched, successes/failures

## Pre-existing context (done by earlier session, not refetched)
- RSS feed: https://www.youtube.com/feeds/videos.xml?channel_id=UCWngZTnuJGdrf3SVQycKZww → saved at youtube\bdh-rss-latest.xml (15 videos, 2026-11-12 to 2026-11-16, full descriptions). SUCCESS (read first).

## Category listing pages (onlypropfirms.com) — all SUCCESS
- https://onlypropfirms.com/bdh/dennys-trading-desk (html) — SUCCESS; yielded 10 article slugs, pagination to /page/2..4
- https://onlypropfirms.com/bdh/d-moneys-trading-faq (html) — SUCCESS; yielded 10 article slugs
- https://onlypropfirms.com/bdh/lucas-trading-playbook (html) — SUCCESS; yielded 9 article slugs

## Patrick Wieland channel — SUCCESS
- https://www.youtube.com/@PatrickWieland (html) — SUCCESS; channel ID extracted: UCTovmBbgOEgi4iXqSH3IxjQ (created 2017-01-16)
- https://www.youtube.com/feeds/videos.xml?channel_id=UCTovmBbgOEgi4iXqSH3IxjQ (text) — SUCCESS; 15 entries captured 2026-11-09 → 2026-11-16 (all live streams, boilerplate descriptions; no per-video strategy detail)

## Denny article pages (onlypropfirms.com) — all SUCCESS, each embedded exactly one video iframe
- https://onlypropfirms.com/bdh/dont-start-scalping-until-you-watch-this → video ID 0qf0GCSgbx8 (published 2026-11-04, author "Denny Jones")
- https://onlypropfirms.com/bdh/i-broke-every-rule-i-have-today → CTIsmXZhHhs (2026-10-23)
- https://onlypropfirms.com/bdh/how-i-trade-chop-and-when-i-just-dont → D_jk9FsMb-8 (2026-10-20)
- https://onlypropfirms.com/bdh/i-lost-my-live-account-and-my-own-3000 → 8ZFcYwbknZo (2026-11-07)
- https://onlypropfirms.com/bdh/why-i-shouldnt-have-traded-election-night → 3rImsvS8mgA (2026-11-09)
- https://onlypropfirms.com/bdh/i-took-4-payouts-in-one-day-on-vest-markets → tR10ta35ILc (2026-10-16)

## D-Money article pages — all SUCCESS
- https://onlypropfirms.com/bdh/everyone-says-emas-dont-work → video ID j8EI1XCFN0g (2026-10-23, author "D Money")
- https://onlypropfirms.com/bdh/nq-dropped-780-points-heres-how-i-traded-it → r2L8QdiQ2NM (2026-10-19)
- https://onlypropfirms.com/bdh/the-trend-is-your-friend-heres-what-it-means → CoO5V0d9mNQ (2026-10-14)
- https://onlypropfirms.com/bdh/the-double-bottom-was-the-low-all-day → CoRVhjwkqJY (2026-10-09)
- https://onlypropfirms.com/bdh/why-you-cant-pick-the-top-on-nasdaq-futures → TRMEFV6KeEE (2026-09-30)
- https://onlypropfirms.com/bdh/what-a-90-point-bottom-wick-tells-you → 46asbCG1S8s (2026-10-11)

## Lucas article pages — all SUCCESS
- https://onlypropfirms.com/bdh/adding-to-a-trade-when-your-in-drawdown-my-exact-strategy → video ID PjvckyPQQ4I (2026-10-08, author "Lucas Kennard")
- https://onlypropfirms.com/bdh/my-pre-market-routine-for-the-new-york-open → 2PvQjWRNRsU (2026-10-02)
- https://onlypropfirms.com/bdh/the-5-trades-that-paid-me-24000-this-week → kAd0WPd9kt0 (2026-09-29)
- https://onlypropfirms.com/bdh/being-right-doesnt-make-you-money → gE1Z_07_LqM (2026-10-25)
- https://onlypropfirms.com/bdh/why-your-pl-is-lying-to-you → EJuIWBD475w (2026-10-22)

## YouTube watch pages (shortDescription extraction) — all 17 SUCCESS
Method: fetch https://www.youtube.com/watch?v=<ID> as raw HTML; extract the JSON field "shortDescription":"…" (plus "title") from ytInitialPlayerResponse using a small node script (escaped-string JSON.parse). Each description was 2,202–4,441 chars — all contained full strategy writeups with quoted trading calls, levels, EMAs, P&L and chapters. No retries and no fallbacks (oembed) were needed.

Denny:
- https://www.youtube.com/watch?v=0qf0GCSgbx8 — SUCCESS (3,253 chars)
- https://www.youtube.com/watch?v=CTIsmXZhHhs — SUCCESS (3,010)
- https://www.youtube.com/watch?v=D_jk9FsMb-8 — SUCCESS (3,529)
- https://www.youtube.com/watch?v=8ZFcYwbknZo — SUCCESS (2,673)
- https://www.youtube.com/watch?v=3rImsvS8mgA — SUCCESS (3,780)
- https://www.youtube.com/watch?v=tR10ta35ILc — SUCCESS (4,441)

D-Money:
- https://www.youtube.com/watch?v=j8EI1XCFN0g — SUCCESS (2,889)
- https://www.youtube.com/watch?v=r2L8QdiQ2NM — SUCCESS (4,305)
- https://www.youtube.com/watch?v=CoO5V0d9mNQ — SUCCESS (3,783)
- https://www.youtube.com/watch?v=CoRVhjwkqJY — SUCCESS (2,966)
- https://www.youtube.com/watch?v=TRMEFV6KeEE — SUCCESS (2,531)
- https://www.youtube.com/watch?v=46asbCG1S8s — SUCCESS (3,233)

Lucas:
- https://www.youtube.com/watch?v=PjvckyPQQ4I — SUCCESS (2,814)
- https://www.youtube.com/watch?v=2PvQjWRNRsU — SUCCESS (2,751)
- https://www.youtube.com/watch?v=kAd0WPd9kt0 — SUCCESS (2,688)
- https://www.youtube.com/watch?v=gE1Z_07_LqM — SUCCESS (2,405)
- https://www.youtube.com/watch?v=EJuIWBD475w — SUCCESS (2,202)

## FAILURES
- None. All 33 HTTP fetches in this session returned usable content (17 category/article pages, PW channel page, PW RSS, 17... count note: 3 category pages + 17 article pages + PW channel + PW RSS = 22; plus 17 watch pages already listed above = 39 total fetch calls; zero failures, zero retries needed).

## Attribution notes
- Blog author fields explicitly named Denny Jones / D Money / Lucas Kennard on their respective articles — trader attributions for the 17 older videos are STATED, not inferred.
- RSS attributions for the 15 newest BDH videos were already established in bdh-rss-latest.xml (D-Money shorts inferred-from-content there per prior session's notes; Lucas/Denny videos named in descriptions or title context).
- PW's 15 feed videos: titles/descriptions contain no trader-specific strategy; marked boilerplate.

## Extraction artifacts (temp, for reference)
- Watch-page raw HTML saved by the fetch tool under C:\Users\oled\.local\share\opencode\tool-output\ (tool_1e508... files)
- Extracted descriptions written to C:\Users\oled\AppData\Local\Temp\opencode\descs\<videoID>.txt (17 files) via C:\Users\oled\AppData\Local\Temp\opencode\extract-desc.js
