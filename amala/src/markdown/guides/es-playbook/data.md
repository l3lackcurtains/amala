---
title: ES Range & Session Data
topics:
  - market-regime
  - sessions
  - sizing
---

ES's reputation — "slower, cleaner, more forgiving" — is folklore. What exists in measured form is better than folklore and funnier than marketing: the numbers say ES is *smaller in points, similar in dollars of risk, and far kinder to a $2,000 floor.* Here is the dataset class, with every window named, because ES's most important property is that its months disagree with each other.

## The ranges (one trader's published 209-session study, front-month, 2026)

- **Regular-session average range: ~70 points, median ~65.** A 6-month spread from ~63 in the calm month to ~138 in the stress month — **a stop that fits March is badly oversized in August**, which is why fixed-dollar stop habits fail on ES exactly as they do on gold.
- **First hour carries 55% of the day; first 30 minutes, 45%.** The open is not a third of the session, it's more than half the day.
- **Only 3.8% of sessions stayed inside the entire first hour** — the IB-break base rate is even more extreme than on NQ, and the corollary is that midday "reversion to the morning" trades are fighting the market's actual structure most days.
- **Rotation, not whipsaw:** 54.5% of sessions crossed the opening price at most once (or never); true two-sided chop appeared on ~1.4% of days. ES's "mean-reverting" reputation overstates it — ES mostly *rotates*, and the base rate for a clean range day is rare.
- Overnight highs/lows get taken out by the cash session ~60%/55% of days; gap fills are coin flips (~55%). The overnight range is a **reference to react to, not a prediction to lean on** — the community's own educators say explicitly: "do not use a historical fill percentage as a rule."
- Older long-run averages (~44 pts) and vendor VIX-regime bands (~40–60 at quiet, ~60–100 at stress) are consistent with the current regime — but a 20-day ATR snapshot in a vol expansion already shows ~117. The takeaway is the spread itself: ES range is a *state variable*, re-measure monthly.

## Volume, liquidity, and fills

ES runs ~1.2 million contracts a day in the cash session (2026 monthly range 0.96–1.34M), the deepest book among the index futures — and the CME complex grew its record again, with **micro ES volume up 35% to 1.2M/day**: the retail migration to micros is visible in the exchange's own statistics, which is the sizing answer of this whole guide set arriving as market data. Spreads are near-minimum and fills on normal size don't slip — the repeated scalper consensus ("ES is the default for tightest spreads and reliable fills") is the honest edge: **what ES takes away in point-range it gives back in execution certainty.**

## Session character for the funded plan

| Window | Behavior | What to do |
|---|---|---|
| 6:00–8:30 PM ET (reopen) | Spike then quiet — overnight's only real event | Mark ONH/ONL; do not trade thin books |
| 8:30 AM / 10:00 AM | Data windows land next to the open | The 8:30 print *is* the open's first trade for many days |
| 9:30–10:30 | 55% of the day's range, the IB forms | The entire working session for most ES plans |
| 11:00–13:30 | Barely-above-average minutes, midday drift | Exits, not entries; or lunch = flat |
| 14:30–16:00 | Slow build to the 15:50/15:59 close spikes | Manage runners toward the close; respect your firm's flat time |

## Dollar translation (the only table that decides instrument choice)

| | ES | MES | NQ | MNQ |
|---|---|---|---|---|
| $ / point | $50 | $5 | $20 | $2 |
| $ / tick | $12.50 | $1.25 | $5 | $0.50 |
| Avg 2026 day in $ (range × value) | ~$3,500 | ~$350 | ~$8,100 | ~$810 |
| Typical structural stop | 4–12 pts = $200–600 | ×0.1 | 25–50 pts = $500–1,000 | ×0.1 |
| Losing streaks to end $2,500 floor | ~5–7 at ES stops | 40+ | ~3–4 | 30+ |

The arithmetic lands on the community's standing answer: at 50K sizes, **MES is the ES version of the "1–2 MNQ" rule** — the same plan at survivable unit risk. One published column of independent sizing guides converges: experienced paid traders risk 1–2% per trade against the *drawdown*, which at $2,500 means $25–50 per MES — not $500 per ES — and a funded ES trader describing their real cadence is describing 5–10 points a day, three to five trades, micros until the cushion says minis.
