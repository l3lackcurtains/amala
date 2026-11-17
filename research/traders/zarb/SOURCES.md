# Zarb — Source Log (2026-11-16)

## Successfully fetched

| # | URL | Method | Result |
|---|-----|--------|--------|
| 1 | https://iamzarb.com/ | webfetch markdown | OK — full landing page (hero, receipts, who-it's-for, what's included, Under The Hood, philosophy, WASL Gang, pricing, coach bio, FAQ). Raw output saved to opencode tool-output; base64 image payloads stripped for text extraction. |
| 2 | https://www.youtube.com/feeds/videos.xml?channel_id=UCRwKDXA83i6W-D8z6JkNGww | webfetch text | OK — 15 entries: IDs, titles, dates, views, descriptions (5 long-forms/VODs had real descriptions). |
| 3 | https://whop.com/zarbs-liquidity-lab/ | webfetch markdown | OK — group page: 5.0 (10 reviews), NYC, creator zach arbucci (@zarbsta), 35 joined. |
| 4 | https://whop.com/zarbs-liquidity-lab/zarbs-liquidity-lab-premium-membership | webfetch markdown | OK — product page: pricing, description ("Volume Profile x ICT concepts"), 4 quoted reviews (all 5★, 10 total). |
| 5–19 | https://www.youtube.com/watch?v={LTkUju0iGSY, RWyS7fbVzVw, 8_NEAAT5Tyk, XLY3f0VQtBA, ioBIfRbDots, 45UcKOVpgt8, bR0HIdX7byM, ROHw0BkzXT8, IpjDVhBXUxY, 65mqih5hEhg, qIbJHwj4pMM, oeM6tpYBXFI, D0DqmVzUpJw, xWTXD-AP0xM, ICQqePeEt5E} | python urllib scrape of ytInitialPlayerResponse + ytInitialData | ALL 15 OK — extracted title, author, lengthSeconds, viewCount, shortDescription, keywords, publishDate, category, isLiveContent, and auto-chapters where present (8_NEAAT5Tyk: 5 chapters; bR0HIdX7byM: 6; oeM6tpYBXFI: 6 incl. "The WASL theory explained"). Data file: C:\Users\oled\AppData\Local\Temp\opencode\zarb_watch_data.json (script: zarb_watch_scrape.py). |

## Failed fetches (logged, then moved on)

| URL | Status | Note |
|-----|--------|------|
| https://iamzarb.com/blog | 404 | Site is a landing page only. |
| https://iamzarb.com/about | 404 | — |
| https://iamzarb.com/free | 404 | — |
| https://iamzarb.com/wasl | 404 | WASL meaning obtained from landing page instead. |
| websearch "Zarb WASL trading…" | cancelled by environment | Not needed — WASL meaning confirmed from primary sources (landing page + video chapter). |

## Not crawled (exist but out of scope / require auth)

- https://discord.gg/2mQT2gNQ4m (free Discord — invite page, content requires membership)
- https://x.com/iamzarb (X profile, linked in video description)
- asfx.biz/first (ASFX TV network portal)
- Whop reviews page (/zarbs-liquidity-lab/reviews/) — 10-review summary already captured on product page.

## Key research conclusions

1. **WASL = "Wide Ass Stop Loss"** — documented verbatim on iamzarb.com; corroborated by auto-chapter "The WASL theory explained" (5:27) on oeM6tpYBXFI and the coach bio ("Every decision, every WASL, shown as it happens").
2. His framework: liquidity + market structure + Volume Profile through the ICT x Volume Profile blend; futures-first (NQ referenced), plus perp firms; PM Kill Zone session focus; base-hits payout style across multiple prop firms.
3. Video descriptions are mostly affiliate links; strategy substance lives in: the landing page copy, the 3 long-form videos' chapters/keywords, and the WASL-named section. Short descriptions are confirmed empty on watch pages (not just RSS).
4. Everything above was gathered on 2026-11-16; views/dates are point-in-time values.
