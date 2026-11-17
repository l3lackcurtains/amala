# NQ Prop Trading Research

Raw research log (agent output, never shipped in the app). Compiled 2026-11-17 from 14 searches / 12 page
fetches. Evidence tags: **[V]** vendor/prop-education marketing, **[I]** independent/quantified dataset or
backtest, **[A]** anecdotal (trader-reported). Contradictions flagged inline; missing data stated.

## 1. Setup menu

### ORB / Initial Balance
- 16-year study (1-min NQ, Apr 2017–Sep 2026, $20/trade costs): ~60% of first breaks of the 15-min range
  fail (40% hold, 26% reverse, 25% whipsaw). Textbook far-side-stop ORB: avg loss −$1,335/contract.
  "88% win-rate" tight-target variant: wins 8/9 but the single −$2,797 loss erases 8 × +$347 → net negative.
  Surviving variant: **stop at range midpoint, no target, exit 15:55** — avg win +$2,395 / avg loss −$745
  (~3R/−1R), win ~1 in 4, max losing streak 18; profit concentrated in high-vol years (2022), negative in 2026 YTD.
  https://tradingdecisionslab.com/research/opening-range-breakout-nq (Trading Decisions Lab, Oct 2026) [I]
- Contradiction: Quantified Strategies reports an NQ ORB config at 65% WR / 198 trades / PF ~2.0 (site
  bot-walled; cited from search excerpt). Parameters/window differ from TDL → the finding is that ORB
  results are parameter- and decade-sensitive. https://quantifiedstrategies.com/opening-range-breakout-strategy [I?]
- Trader-run: r/FuturesTradingNQ 3-month ORB: 76 trades, 53.9% WR, PF 1.36, +$4,041 on 50K. [A]
- 5-min ORB tested separately (NQ/ES 2024–26): https://cemarketsolutions.com/research/strategies/opening-range-breakout-5-minutes [I]
- IB (9:30–10:30) break statistics: Edgeful reports ~72% single-break probability NQ (last 6 mo);
  Reddit cites >90% for wider definitions. NinjaTrader statistical study (Aug 2024–Feb 2025).
  https://www.edgeful.com/blog/posts/nq-futures-trading [V] · https://ninjatrader.com/futures/blogs/the-statistical-analysis-of-trading-patterns [V-quant]
- Prop fit: IB failure/fade = "good" fit for trailing DD + consistency rules (risk = failed extreme,
  target = opposite side). https://propfirmapp.com/learn/futures-trading/strategies [V]
- Consistency trap: one clean trend-day ORB win = outsized session = consistency-rule penalty. [V]

### EMA pullback (9/21/14/50)
- Mechanics: stack + slope filter, pullback into 9/21, enter on resumption evidence, stop beyond swing,
  1.5–2R targets. https://futureshive.com/blog/moving-average-strategies-futures-2025 [V]
- **No independent win-rate data exists for discretionary NQ EMA pullbacks.** Mechanical EMA *crossovers*
  on intraday NQ measured poorly after costs: https://cemarketsolutions.com/research/families/moving-averages [I]
- YouTube "100-trade tests" unaudited. [A/V]
- Trailing-DD fit good (structural stops, intraday exits). Danger: mean-reverting at EMAs on trend days.

### Liquidity sweeps / ICT-lite
- Mechanics: sweep of prior-day/session extremes → displacement → FVG retest entry, stop beyond extreme.
  https://tradingedgejournal.com/blog/do-liquidity-sweeps-work (Nov 2, 2026) [I]
- TEJ 16-year measured: "A+ IFVG" claimed 75% WR (12 hand-counted trades) → measured **48.4% WR over
  1,540 trades, −0.102R/trade**; ICT-2022 model 47.2% WR, −0.193R. Every sweep variant beat a matched
  random control (z ≈ 2–2.9) → the sweep *moment* carries information, taught models don't pay costs.
  "Draw on liquidity" ≈ distance (nearest pool taken first ~92%). **Viral sweep model passed simulated
  50K evals at 18.3% vs coin-flip 35.3%** — geometry is negative-EV. Tighter ICT stops made it worse
  (−0.145R → −0.557R as risk shrank): the trade needs room that daily caps don't allow. [I]
- Phidias: swept prior-day high → lower next close only 46.9% vs 43.6% base rate (10 yr).
  https://phidiaspropfirm.com/education/liquidity-sweep [I]
- Lunefi marketing claims 65–75% WR: https://lunefi.com/blog/ict-trading-strategy-2026-65-75-win-rates-prop-firm [V] — contradicted above.
- Community verdict: edge lives in which sweeps you skip. [A]

### VWAP fade / continuation
- CE backtest (2024–26, pre-costs): 15-min 2SD fade 358 trades 65.1% WR PF 1.148; 1-hr 62.7% WR PF 1.428;
  5-min **PF 0.972 — negative after light costs** (64% WR, avg −1.38 pts).
  https://cemarketsolutions.com/research/strategies/vwap-2-standard-deviation-fade [I]
- PinescriptForge (unaudited): 53.5% WR PF 1.71 over 570 trades. [I-mixed]
- Fit: **poor for equity-trailing DD** (grind raises floor, one bad fade gives back a week); needs hard
  max-attempts/session rule; regime gate — steeply sloping VWAP = fades off the table. [V, reasoning sound]

### Break & retest
- TradeZella mechanics (body-close break, retest rejection, stop above retest wick, close-through invalidates):
  https://tradezella.com/strategies/break-retest [V-educ]; ATAS adds order-flow absorption on retest [V].
- **No independent NQ stats exist.** Reddit consensus: "enter on the retest, not the break — on the initial
  break you're volunteering to be the liquidity." [A] Retest entries shorten stop vs raw break → prop-compatible.

### Flags / momentum
- No published quantified NQ flag statistics found. Time-of-day study: momentum clusters are volatility
  events, not directional ("no 15-min slot drifts consistently"). [I] Frequency trap vs daily caps. [A]

## 2. Session & timing
- Master dataset: https://tradingedgejournal.com/blog/best-time-to-trade-es-nq-futures (16 yr, 1-min) [I]
  — NQ wakes ~09:05; half-hour after 09:25 ≈ 3× prior half-hour; 09:30 minute = 3.25× median; 10:00 = 2.34×;
  15:50 MOC ≈ 2× (second-biggest minute), 15:59 close-out. Lunch: barely-above-average spike minutes.
  Quiet: 16:00–16:30, ~18:30 after Globex reopen. No consistently directional 15-min slot across periods;
  the one surviving cell (15:55 big move continues) flagged as pre-registration candidate, not finding.
  Regime warning: ES 15:30–15:50 continuation flipped sign 2025–26.
- Vendor session maps: Edgeful (bulk of range in NY, heaviest 9:30–11:30 + final hour) [V];
  MyTradingBuddy (11:00–13:30 "mostly no") [V]; Way of the Trader (3 AM London leg; 8:30 data window) [V].
- Firm clock overrides chart: Topstep trade 18:00–16:10 ET, no overnight holds, new mini entries blocked
  ±5 min around CPI/NFP/FOMC (MNQ capped ~3 per 50K); Apex intraday accounts flat 17:00 ET;
  Apex bans straddle entries into news; Tradeify markets full news trading.
  https://algolift.ai/prop-firms/topstep [I] · https://wayofthetrader.com/education/futures/trading-news-events-nq [V]
- News anatomy: volume dries ~10 min pre-release; surprise = 50–100 pts in seconds into pulled book;
  first bar widest/least informative; second move (min 2–15) is tradeable. Reversal rates (unaudited Reddit
  analysis): FOMC ~30% vs CPI ~14.7%, NFP ~15.6%, GDP 12.5%.
  https://reddit.com/r/technicalanalysis/comments/1w9xdph/ [A/I-mixed]
- Day-of-week: Perfiltrade avg range Mon 170 / Tue 172 / Wed 180 / Thu 182 / Fri 169 pts vs Edgeful ranking
  Thu/Fri largest — **contradiction unresolved** (RTH vs 23h definitions). TEJ: no robust weekday effect. Academic
  JFM study: small day-of-week effect, tiny vs intraday noise. "59% of Mondays close green" — 3-yr count, not tradable. [A]

## 3. Microstructure facts
- **Correction to earlier dashboard brief:** NQ = $20/**point** ($5/tick), MNQ = $2/pt ($0.50/tick).
  ES $50/pt ($12.50/tick), MES $5/pt ($1.25/tick).
  https://wayofthetrader.com/education/prop-trading/mnq-or-nq-prop-account [I] · https://propscorer.com/academy/understanding-cme-contracts [V]
- 10 MNQ ≡ 1 NQ exposure; firms count micros into mini caps (Lucid/Apex/Topstep/Tradeify). [I]
- $2,000-DD risk table @ 30-pt stop: 1 MNQ $60 (3%) · 5 MNQ $300 (15%) · 1 NQ $600 (30%) · 2 NQ $1,200 (60%).
  "On NQ the only realistic choices are 30% and 60%" → micro default 1–2 MNQ. [I]
- Fees: MNQ round-turns cost ~2.6–3.4× NQ per unit exposure (Apex $3.98 NQ vs $10.20/10 MNQ; TopstepX
  $3.78 vs $12.20). 100 full-size MNQ trades ≈ $650 ≈ ⅓ of the drawdown. [I]
- Daily ranges 2025–26: sources spread 170–450+ pts by method/window (Perfiltrade long-run 170–182; Nocnoe
  200–350; VolatilityBox 200–300 @ VIX 12–15, 450–700 @ VIX 20–30; Edgeful NY ATR ~449 last 6 mo; Way of the
  Trader VXN model ~280 expected). Disclose the spread. Stops <4–5 pts "get hit by normal market noise."
- Why NQ dominates prop: $200–600 days = 10–30 pts on ONE mini; ES needs 4–12 pts at $50/pt with stops most
  $2K-DD accounts can't size. Counter-evidence (EliteTrader): ES "slower, cleaner, more forgiving."
  Popularity = target-math + personality, not measured superiority.

## 4. Pass speed & expectations
- Published pass rates (Way of the Trader compilation, cross-checked StatWidget/PropDataLab):
  Topstep 16.8% of combines / 51.8% of traders, 33.3% funded paid ≥1×, **0.71% moved to live**;
  Tradeify 17.2% evals / 40.3% traders, 28.5% paid, 3.0% live; MFFU 19.97%, 39.2% paid, 4.2% live;
  TPT 36.22% of tests; Apex published 43.13% (2023) then removed — no current rate; Lucid none.
  Median Tradeify participant bought 3 evals. Pass×paid ≈ 8–17% of starters ever paid.
  https://wayofthetrader.com/education/prop-trading/prop-firm-pass-rate [I]
- FPFX 300K-account dataset: 14% funded, ~7% ever paid, avg ~$800 fees over ~3 attempts.
  PropFunding rounds industry to "5–10% pass" — contradiction = denominators (attempts vs people). [I]/[V]
- **No firm publishes NQ-specific or strategy-specific pass rates / days-to-pass distributions.** [gap]
- Rules that set the clock: Topstep 50K = $3,000 target, min 2 days, no deadline, $2,000 EOD-trailing MLL,
  no DLL in eval, 55% consistency (best-day rec <$1,650 — a $1,900 day raises the target to $3,800);
  Apex intraday trails UNREALIZED peak equity, EOD locks floor at initial balance on funded; 1 min day. [I/V]
- Simulations: LuxAlgo open-source Monte Carlo (developing profile 45% WR/1.4R/4 trades/1% risk):
  pass 38.1%/attempt, expected 2.62 attempts; **100% of 16,219 failures died at trailing MLL**; consistency
  rule −6 pts; payout gate only 40.5% collect. AlgoLift zero-edge coin flip: pass 27% at $300/day swings,
  median 49 days; at $100/day pass odds 14%, median 189 days; "trading small costs time, not much else."
  https://luxalgo.com/mcp/prop-firm-sim/topstep-50k-trading-combine [I] · https://algolift.ai/prop-firms [I]
- Trader reports [A]: consensus 2–5 weeks (r/propfirm); outliers 2 days; 5 months to first pass (r/TopStepX);
  60+ days (r/LucidProp); one year; ~50 failed challenges. Finance Magnates: failures cluster fast (<1 wk),
  successes month+.
- Publishable expectation: 2–5% of floor per trade, $200–400/day → 2–6 weeks per attempt, 2–3 attempts,
  real risk first funded dies pre-payout. 5 consecutive $400 losses = eval over (not exotic at ~48% WR).
- Multi-account: Apex 20 funded/household, evals uncapped; Lucid 10/5; Tradeify 5; Topstep 5 Express,
  copier only TopstepX; Earn2Trade bans copiers; same-direction only (reverse = hedging = closure);
  ratios ≥1.0 to avoid orphaning. Honest quote: "1 MNQ across 10 accounts… end result the same."
  https://copilink.com/articles/trade-multiple-prop-firm-accounts [V-sourced-to-rulebooks]

## 5. Discipline & psychology
- Topstep responsible-trading rule text enumerates killers: max position most trades, letting losers run,
  no stops, "full port/tilt/FOMO/revenge", disrespecting daily limit; DLL now locks out instead of failing —
  discipline device. Journal by rule-followed not outcome. https://help.topstep.com/.../what-is-responsible-trading [V]
- FPFX: failures are 2nd/3rd trades taken "to recover the first", sized larger than plan; sizing against max
  DD not daily limit. https://bit-stat.com/blog/why-traders-fail-prop-challenges [I]
- PropFirmApp: "Revenge trading after a losing scalp ends more evaluations than any market condition";
  "Sitting out is a position… the only one with zero drawdown." [V]
- Simulators: every modeled failure is mechanically a risk/streak event, not a market event. [I]
- [A]: "after 5 trades I go nuts" → trade-count caps; Copilink's calendar-encoded no-trade list
  (no entries on no-news days; no Wed–Fri NFP weeks; done by 11:10). Payout-day psychology: **no study exists**;
  nearest proxies: "passed evals easily, getting paid has been challenging" (r/FuturesTrading) + LuxAlgo's
  pass-vs-collect drop (71% → 40.5%). [A/I]

## 6. Failure patterns (documented eval killers)
1. Trailing-DD whipsaw #1 (100% of simulated failures at MLL; Apex intraday trails unrealized peaks →
   round-tripped winners raise floor; mitigations: BE stops when trade works, treat floor not balance as account). [I/V]
2. Oversizing (1 NQ 30-pt stop = 30% of $2K; consensus 1–2 MNQ + cushion). [I/A]
3. News spike entries (50–100 pts in seconds, slippage counts against DLL; firm blocks ±5 min). [I/V]
4. Recovery/revenge (2nd/3rd trade bigger; fee math: 4-tick targets pay ~8% gross to commissions). [I/V]
5. Consistency self-traps (hero day raises target; "pass 5 accounts in 4 days" genre is exactly the taxed
   lumpy profile). [V/I]
6. Deadline rushing / slow-fee bleed (no-deadline accounts die by monthly fees × 189-day grinds). [I]
7. Setup-regime mismatch (breakouts on 60% fail days; fades on trend days; mechanical sweeps = half coin-flip). [I]
8. Copy errors (fractional ratios orphan; reverse-copied = hedging = closure; news slippage divergence). [V/A]

## Data gaps (explicit)
No NQ-specific or per-strategy pass rates; no days-to-pass distributions; no flag or break-retest
statistics; no payout-day behavioral data; QS numbers cited from excerpt (bot-walled); CME overnight
margin unverified this session (~$500–1,000 treated as folklore); weekday stats contradiction unresolved.
