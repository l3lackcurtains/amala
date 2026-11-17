---
title: The Data Layer — What Funded Traders Actually Check
topics:
  - tools
  - market-regime
  - sessions
  - prop-firm
---

The public secret of the desk traders in this library is that several of them trade off a statistics platform rather than intuition: the analytics tool showing up in live-stream descriptions and "my preferred trading data" notes across the dashboard channels is Edgeful, and the pattern it encodes — *measure the tape before sizing the trade* — is the difference between this guide's survivor and the funnel's denominator. This page is the data layer: what gets measured, what the current numbers actually say, and where the marketing ends and the method begins.

## What a statistics platform measures (and why it's prop-specific)

The reports that matter for the game in this dashboard are small and boring:

| Report | The question it answers | Prop use |
|---|---|---|
| **Gap fill** | Does today's gap back to yesterday's close usually fill — by direction, weekday, size? | Pre-market bias; "don't fight the gap without data" |
| **Initial Balance (60-min)** | Single break / double break / no break, plus extension and retracement depth | The IB systems on this dashboard are literally "statistically validated" versions of these reports; retracement stats = data-backed stop placement |
| **Opening Range Breakout (15/30-min)** | Which side breaks, does it hold to the close | The ORB-vs-fade regime switch |
| **Session ATR by hour** | Where the day actually lives (open vs lunch vs power hour) | Session filters and expected daily points |
| **Power-hour breakout** | How often a new high/low forms after 3 PM | Exit management, not entry chasing |
| **Day-of-week ranges** | Which weekdays are compressed vs extended | Size modulation, "no-aggression days" |

The platforms package this as a live pre-market scan — filter reports by probability threshold, see what's "in play" today with bias and target attached. The habit it replaces is the expensive one: picking yesterday's favorite setup regardless of what the tape is currently rewarding.

## The numbers, as published (with their windows attached)

Measured over recent 6-month windows on the platform's own data pages, NQ-side:

- **IB (60-min, NY): single break ~79.5%** of days (double break ~15.8%, no break ~4.7%). ES runs lower (~74%). The initial balance is not a range to escape — it is a *coin with 80% memory*, and the failed-auction trade is the minority game.
- **15-min ORB by close: ~77% of days close outside the opening range** (≈45% above, ≈32% below; only ~23% close back inside). Direction commitment at the close is the norm — which is why close-confirmation entries dominate the NQ setup menu.
- **Gap fills: NQ ~53% up / ~59% down over the same window; ES ~67% both directions — and ES down-gap fills measured 63% on a Jan–July window but only 38% on the most recent six months.** That swing is the whole page in one number: these statistics *move*, and a strategy keyed to last quarter's fill rate is a position in yesterday's regime. Large gaps down filled only ~19% — size and direction change the base rate entirely.
- **Session ATR (last 6 months): NY ~$449 vs overnight ~$394, with the overnight range exceeding its ATR only ~12% of the time vs ~38% intraday.** The overnight session is a reference-level generator, not an opportunity venue — Asia/London levels exist to be reacted to from NY.
- **Power hour: a new high of day forms after 3 PM on only ~21% of days (new low ~13%).** Four out of five days, your afternoon long is holding a peak that already happened — the report is an *exit* tool, and it says bank before 3.
- **Day of week: ranges build Monday→Friday** (N: ~$296 Mon → ~$366 Fri, ~23% compression difference). Note the weekday stats *contradict across sources and windows* on which day leads — which is the actual lesson: treat any published base rate as current-only, re-verify before it enters a sizing decision.

## What this changes about the playbook's rules

Every rule on the twelve-rules page has a data-layer twin:

1. **Size modulation from range regimes** — compressed days (Mondays, overnight) get smaller size or fewer trades because reward-to-risk *is* the range, not the opinion. The dollar-range drift cuts the other way too: a stop sized for the last regime is silently over- or under-risking every session of this one.
2. **Setup-by-regime selection** — fade on balance/inside-day statistics, breakout on extension days, *and the single biggest kill statistic in the research: ~60% of first breaks of the opening range fail on NQ*, which means the default trade around a break is the fakeout. That number was measured, and it is why "wait for the close" appears on almost every serious page of this dashboard.
3. **Stops and targets from distribution, not hope** — IB retracement stats are stop-placement data; extension stats are target data. The firms' best-day consistency limits become trivial when your target comes from a median rather than a feeling.
4. **The pass-rate simulation connection** — risk-per-trade is the dominant variable on a trailing floor; the data layer's job is deciding *which trades deserve the risk*. Both are required: cheap risk on a statistically live setup, nothing on a dead regime.
5. **No-trade lists get calendar teeth** — power-hour and day-of-week numbers convert "sit out more" into "sit out *today*, here's the percentage."

## The honest caveats

- **Window sensitivity is the product and the trap.** The 63→38% ES gap-fill swing is not malfunction, it is regime — which means every number on these platforms is a *weather report, not a climate law*, and any page (including marketing pages) that shows a single number without its date range is advertising. Re-check before every sizing decision.
- **Small samples mislead by weekday.** A "87% break rate on Tuesdays" that is 13 of 15 events is noise in costume. Filter depth is how the platforms sell specificity; specificity from thin samples is exactly what the overfitting critics already say about prop-friendly strategies. Use the broad-base numbers for structure, the filtered ones for hypotheses to test in sim.
- **Vendor incentives run the other direction from yours.** A platform selling probability scores is rewarded for making setups look actionable; prop firms selling evaluations are rewarded for making passes look common. One platform's tuned-ORB case study (a 5-minute ORB variant with explicit parameter tuning, filters, and caps) reported 108% over six months — the honest reading of any tuned result is that the un-tuned default "won't perform like this," as the vendor's own copy admits.
- **The stats platforms cannot measure the thing that kills most accounts:** execution under drawdown pressure. Every behavioral dataset in this repo's research points the other way — the second and third trades, the revenge sizing, the hero day taxed by the consistency rule. The data layer makes good decisions cheap; it does not make them for you.

## The free version of the method

None of this requires a subscription. The discipline the platforms formalize is: count your own outcomes by condition (setup, weekday, gap state, session, size), update monthly, and let the counts pick which trades get risk. A spreadsheet and a month of honest journaling reproduces 80% of the value and 100% of the habit. That habit is also, not coincidentally, the exact thing the survivorship-filtered top of the funnel sells courses *after* having built.
