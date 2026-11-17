---
title: Gold Volatility & the News Burst
topics:
  - market-regime
  - news
  - risk
---

## The number that rewrites every old gold plan

Three independent datasets, same finding: gold's *dollar* range tripled in two years. Average daily range ran ~$31–33 from 2020–2024, ~$61 in 2025, and ~$120 in the current sample — with a median around $100 and the widest recent day over $700. One-in-ten sessions now move more than $150. At 2026 prices that's ~2.5% of spot — the highest in the last five years, versus ~1.2–1.4% in 2021–23. Gold's volatility isn't elevated relative to its own history; its history has moved.

The futures-side measurement matches: days where gold futures move more than 2% went from 0% of sessions (2017) to 31% (2025) to **64% (2026)**. And the fat-tail arithmetic matters for stop design: a session exceeds 1.5× its own recent average range on ~12.7% of days, 2× on ~4% — one-in-eight days "over-range" is *normal* on gold.

**The sizing consequence, stated plainly:** the same nominal stop distance that fit 2024 sits inside a single ordinary 2026 hour. The published fix is structural — band stops off the current ATR rather than fixed dollars; the measured containment of ATR-scaled bands (~89% across 2024–26 vs silent failure of fixed distances) is the strongest anti-oversize argument in the gold data. Re-check the range regime monthly; it's a state variable, not a constant.

## News days: ordinary days with a burst inside them

Gold's release-window behavior is heavily quantified, and every dataset agrees on the shape:

| Measure | Ordinary day | CPI day | NFP day | FOMC day |
|---|---|---|---|---|
| First-5-min range (median) | $4–6 | ~$9–17 | ~$9–22 | ~$6–22 |
| Whole-day range vs 20-day avg | 1.0× | ~1.02–1.27× | ~1.1–1.3× | ~1.2× |
| Move ≥$20 from pre-release (any time) | 23–73% of days | 90–95% | 90–95% | 90–95% |
| First move held at 60 min | — | ~68–75% | ~70–83% | lowest (~68%) |

Read the columns together and the plan writes itself: gold *days* are only mildly wider than average — all of the violence lives in a 5–15 minute window — and the direction statistics are coin-flips with a slight continuation lean (release-day direction up on ~56%, a wash). FOMC's initial move is the least likely to hold; CPI days reverse a third of the time at the close, and the day *after* leans against the CPI-day move 61% of the time. The follow-the-release traders' own best advice is also the most conservative: trade the **second** move after liquidity returns, never the release minute, with the understanding that a 3–5×-an-hour burst into a thin book means your stop location is a suggestion the venue fills somewhere else.

## Session windows where the range actually lives

- **Asia (overnight):** the compression — typically $10–25 between the Asian hours; the range *material*, not a trade venue. A rule that shows up in every London-breakout treatment: if the overnight range is already more than half of the 14-day ATR, **the range is the day** — stand down, the resolution already spent itself.
- **London open:** the step-change — liquidity arrives, the compression resolves (and, by the sweep statistics below, usually *sweeps* one side first).
- **NY overlap:** continuation plus the 8:30 ET data window — the US-release side of the burst.
- **Two windows the sources call toxic for entries:** the pre-US-data compression hour and the daily rollover/late Asian hours, where spot-liquidity thinning widens spreads — warned about by the firms' own trading-conditions pages as well as the educators.

## The availability overlay

One more volatility statistic belongs on this page because it's prop-specific: when gold's realized vol printed its 2026 spike, margin models repriced, caps appeared at multiple firms, and the metals complexes went dark at two majors for ~3 months. The practical position-sizing question for a gold prop plan is not "how many MGC fit the drawdown" (next page answers it) but "what fraction of my plan survives if the instrument is unavailable or capped for a quarter?" — and the traders who pass through that episode with accounts intact are the ones whose strategy never *was* the instrument.
