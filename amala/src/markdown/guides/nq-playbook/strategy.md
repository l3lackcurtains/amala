---
title: NQ Setup Menu
topics:
  - setups
  - entries
  - exits
  - market-regime
  - risk
---

The menu below is ordered by evidence strength, not popularity. "Measured" means a published, method-stated backtest over years of data; "vendor" means a firm or platform explaining its own product; "folklore" means trader consensus with no dataset behind it.

## Opening range breakout — the most tested, the most misquoted

Mechanics: mark the high/low of the first 15, 30, or 60 minutes from 9:30 ET. The prop-viable rule is entry on a 5-minute **body close** beyond the range, never a wick touch — wicks poke through the open constantly. Stop at the **range midpoint**, not the far side; the far-side stop is too wide for a funded account's daily allowance. Take partials at 1R and let a runner go.

What measurement adds:

- ~60% of first breaks of the 15-minute range **fail** (reverse or whipsaw) across an 18-year minute-data study. The textbook far-side-stop version loses on average; the popular tight-target "88% win rate" version wins ~8 of 9 trades and hands the whole week back on the ninth.
- The only surviving variant in that study: midpoint stop, no fixed target, exit near the close. It pays roughly 3R on winners against 1R losers but hits only ~1 in 4 — with measured losing streaks of 18. Profit concentrated in high-volatility years and went negative in a low-vol year. This is a trend-day capture, sized for cold streaks, or not run at all.
- A second backtester reports a 65% win-rate configuration on a different parameter set and window. Both cannot be the market's default; the disagreement itself is the finding — **ORB performance is parameter- and regime-dependent. Test your own window before sizing.**
- Initial Balance (60-minute range) statistics from platform and analytics vendors: a single IB break occurs on roughly 7 in 10 recent sessions. The prop-relevant trade derived from it is the **IB failure/fade** — the break that doesn't follow through and runs to the measured opposite extreme — because risk is defined by the failed extreme and it sidesteps the 9:30–10:00 chaos.
- Interaction with prop rules: one clean trend-day ORB win books an outsized session — exactly what a consistency rule taxes. Smooth partials beat maximum extension when a percentage of your best day is being audited.

## EMA pullback — the workhorse nobody has measured

Mechanics: trend filter of 9 > 21 > 50 EMAs, stacked and sloping, price holding above the 21 for the prior hour; wait for a pullback into the 9/21 zone; enter on **resumption evidence** (close reclaim, rejection wick), not on touch; stop beyond the pullback swing; targets 1.5–2R or prior-session levels.

Evidence state, stated honestly: no independent statistic exists for the discretionary version. What does exist — mechanical EMA **crossover** systems measured poorly on intraday NQ after costs, and unaudited "100-trade" self-reports from video content. The framework is widely treated as prop-compatible because stops sit beyond structure and trades resolve within the session; its documented failure mode is entering the *reverse* idea by touching the EMA against a trend day. Treat it as a good scaffolding that still requires your own journal, not as a proven edge.

## Liquidity sweeps — real information, negative expectancy

Mechanics: price pushes a tick or two past an obvious stop pool (prior-day or session highs/lows), snaps back inside, leaves a displacement candle; entry on the retest of the gap it forms, stop beyond the sweep extreme.

The starkest contradiction in the research:

- Taught versions claimed 65–75% win rates. Measured across sixteen years: 47–48% and **negative expectancy after costs** (−0.1 to −0.2R per trade) for the standard definitions.
- The sweep *moment* genuinely matters — every variant beat a random-entry control built with identical stops and targets. Information is real; the packaged system is not enough.
- A model test of the viral "pass a prop firm with sweeps" version passed simulated 50K evaluations at **half the rate of a coin flip** — its stop/target geometry loses money even when the entries signal something.
- Tightening the stop made results worse, not better: the trade needs room that a $200–400 daily cap does not comfortably give. Widening it collides with the cap instead. Both directions of the squeeze lose — the edge, to the extent it exists, lives in **which sweeps you skip**, a discretionary judgment no backtest or stream replicates.
- Vendor rule docs still ban straddle entries into these extremes; the "draw" toward the next liquidity pool is mostly explained by plain distance (nearer pool taken first the large majority of the time).

## VWAP fade & continuation — the profile that kills ratchets

Mechanics: session VWAP with ±2 standard-deviation bands. Balanced day: fade a band touch back toward VWAP. Trend day: VWAP is a continuation reference — buy pullbacks that hold above it. The regime gate before either: if VWAP slopes steeply and price holds one side, fading is off the table.

Measured: the 15-minute band fade runs at ~65% win rate but profit factor near 1.1 before costs; the 5-minute version flips negative once costs are applied. That signature — many small wins, rare large losers — is the **worst fit for equity-trailing drawdown**: a slow grind raises the floor, and one failed fade surrenders a week of buffer at once. If run anyway, attach a hard maximum-attempts-per-session rule, because the strategy's natural instinct is to try again. The continuation-side version inherits the EMA pullback's better fit.

## Break & retest — the entry pattern that makes everything fundable

Mechanics: level breaks with a body close, retests as flipped support/resistance, entry on the rejection of the retest, stop just beyond the retest wick; a close back through the level invalidates. Order-flow tools (delta absorption at the retest) are the advanced confirmation.

No independent NQ statistics exist for this pattern — but it is the mechanism by which the other setups become prop-compatible: the retest entry shortens the stop relative to chasing the raw break, which is exactly what a $2,000 trailing floor and a fixed daily cap demand. The community phrasing: on the initial break you are volunteering to be the liquidity.

## Flags & momentum continuation — the least evidenced

Mechanics: enter flag break after a strong push, stop beyond the flag extreme, measured-move target.

No published quantified flag statistics on NQ surfaced in any source class. The adjacent measurement is a warning: intraday momentum clusters proved to be volatility events, not directional ones — no 15-minute slot drifts reliably either way across periods. Flags also invite the five-plus-trades-a-day frequency that breaks daily caps. Trade them only if your journal proves the expectancy; they earn the least confidence on this menu.

## Choosing between them — the cross-source agreement

- Body-close confirmations beat touch entries in every source class that tested it — vendors, backtests, and forums all converge.
- High win rate is not passability. The fade profile and the "88% ORB" both lose to a ratcheting floor because their losers are fat.
- Lower frequency, partials, and a smoother equity curve pass trailing-drawdown evals measurably more often than maximum-extension holds.
- The silent killer is regime mismatch: running breakout logic on the ~60% of days first breaks fail, or fading on trend days. Read balance versus imbalance — where price sits relative to the prior day's range — before selecting the setup for the day.
- Sitting out is a position. It is also the only one with zero drawdown.
