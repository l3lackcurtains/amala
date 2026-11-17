---
title: The ES Clock, the Gap, and the Instrument Choice
topics:
  - sessions
  - prop-firm
  - market-regime
  - sizing
---

## The exchange clock (it is not what the platform shows)

CME equity-index futures trade Sunday 6:00 PM through Friday 5:00 PM ET, with two daily interruptions that bite prop accounts: an equity-index halt at **4:15–4:30 PM ET** (after the 4:00 cash close) and a **5:00–6:00 PM maintenance break**. The trade date rolls at the 6:00 PM reopen — which means *daily* drawdown, daily loss limits, and EOD floor steps all key off the session break, not midnight. The platform's "RTH" is 9:30–4:15; the exchange's settlement window is the 3:59:30–4:00 VWAP. Sunday evening does the weekend's repricing in one move, and Monday's full session prints ~29 points wider than its own cash session — the gap is Monday's real opening bell.

## Your firm's close is earlier than the market's

| Firm | Flat-by time (ET) | The fine print |
|---|---|---|
| Topstep | 4:10 PM | Overnight holds prohibited; the 4:15–4:30 halt sits just after the flatten |
| MyFundedFutures | 4:10 PM | Auto-close documented as **skipped on half-days** — an account-death footgun that has ended runs on holiday shortened sessions |
| Tradeify / Lucid | 4:45 PM | Lucid's daily products run separate intraday-trail mechanics from EOD |
| Apex | 4:59 PM | Intraday-trail accounts track *unrealized* peaks all session; EOD accounts lock the floor at initial balance on funded |

The pattern the community keeps rediscovering: **"the market closes at 5:00 — your account closed at 4:10."** Every ES plan that "holds until the close" is actually a plan that holds until the firm's flatten, and a 4:09 position in a fast close is a stop-market order at the price someone else chose. Half-session calendars belong in the plan beside the news calendar.

## The gap, the limits, and a worked example

- Overnight sessions carry **7% price-limit bands** (raised from the older 5%); a 49-hour weekend gap is the real risk window of the week, and thin overnight books slip stops inside quiet-looking ranges.
- The anatomy from the analytics platforms: cash session takes out the overnight high ~60% of days / the low ~55%; gap-fill base rates sit near coin-flip on the standard windows — but they *regime-shift*, with one dataset showing big down gaps at 63% fill across one seven-month window and 38% across a recent six. The right use is pre-market marking: **ONH/ONL levels plus the prior day's extremes, then trade the open's reaction** — the educators' own line is "do not use a historical fill percentage as a rule."
- A live worked example, from a recent election night: ES fell ~106 points overnight (≈$5,300 per contract), then gapped ~86 points *above* the prior close by the cash open. Both sides of that one weekend were untradeable for sim accounts — the entire overnight exposure of an ES plan is the flatten rule plus the gap you did not hold.

## Why firms' news rules cluster around this clock

8:30 AM and 10:00 AM ET releases land adjacent to the open's own volatility spike, which is why nearly every firm's ES/NQ news policy is a *timing* policy: block new mini positions for a few minutes each side of Tier-1 prints, allow micros at reduced counts, allow trading outright (the "full news trading allowed" plans market it as a feature). A trader's three options are the same three the education content names — flat through the window, fade with lottery sizing (don't), or trade the second move after liquidity returns — but on ES, unlike gold, the release *minute* is usually the open's already-dominant candle, so "flat until 9:35/9:40" costs almost no opportunity and deletes the slippage tail entirely.

## Choosing: ES vs NQ vs Gold, the documented decision

| If you are... | The sources' instrument answer | The reason that repeats |
|---|---|---|
| Starting a prop plan at $200–400/day risk | **MES (or MNQ at half size)** | Losing-streak headroom: dozens of $30-risk stops vs 4–7 $300–500 ones before the floor |
| A levels/structure/auction trader | **ES** | Smaller retracements, reliable fills, deepest book — "ES respects levels" is forum-universal and cost-on backtests don't contradict it (the strategies still need close-confirmation) |
| A momentum/macro-tech reader | **NQ at micro size** | Dollar range ~2.3× ES per contract; half the trades to the same dollars; identical tape at 1/10 the cost per mistake on MNQ |
| A second-book candidate | **MGC, 1–2 contracts, news calendar mandatory** | Different behavior (trend + macro burst vs index noise) — with caps, suspensions, and 1-in-10 sessions >$6,200/GC as the tax |
| Holding both index longs | **Stop — it's one bet** | The correlation warning every independent guide and most firms' hedging rules repeat: long ES + long NQ ≈ double the same position, and across accounts it flirts with prohibited hedging |

The meta-rule from the consistent earners' own words is cheaper than any of this: **start narrow.** Pick one of the three, trade it until the payout history exists, then — and only then — expand one book at a time, checking the firm's correlation and cap tables first. The instrument decision is a risk decision wearing a preference costume; the account that survives three stages is almost always the one that made the boring choice early.
