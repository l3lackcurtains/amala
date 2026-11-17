# ES & Gold Prop Trading Research

Raw research log (agent output, never shipped). Compiled 2026-11-17. Tags: [vendor], [independent],
[quantified], [forum], [exchange]. Corrections to earlier assumptions: MES = $1.25/tick, $5/pt ($2 was
MNQ's point value); there is no prop-traded "SGD micro gold" — the CME gold ladder is GC (100oz), QO
(50oz), MGC (10oz), 1OZ, SGU (dead: 3 contracts traded Nov 16, 2026 per CME daily bulletin
https://www.cmegroup.com/daily_bulletin/current/Section02B_Summary_Volume_And_Open_Interest_Metals_Futures_And_Options.pdf).

## 1. ES for prop accounts

### Contract & liquidity
- ES 0.25pt tick = $12.50, $50/pt; MES $1.25/tick, $5/pt. CME specs via
  https://smartmoneyfutures.com/post/how-to-pass-a-prop-firm-challenge [independent, Oct 2026];
  https://help.myfundedfutures.com/en/articles/9735811-futures-instrument-list [vendor];
  https://www.futuresfunded.com/blog/es-vs-nq-prop-firm-challenges [independent, Nov 2026]
- ES ~1.19M contracts avg RTH volume 2026 (0.96–1.34M monthly range); MES ADV +35% to 1.2M (CME record
  2025 ADV 28.1M; Equity Index 7.4M). https://juselltradingacademy.com/es-futures-statistics-2026
  [quantified/independent]; https://investor.cmegroup.com/news-releases/.../cme-group-reports-record-annual-adv-281-million-contracts-2025 [exchange]
- Deepest liquidity / tightest spreads = the core prop argument (daytraders.com review).

### Daily ranges 2025–26 (best dataset: Jusell, 209 sessions Jan–Oct 2026, method published)
- RTH avg range 69.91 pts (median 64.75); full Globex 91.61; Aug 63.13 vs Mar 137.57 — "a stop that fit
  March was badly oversized in August." First hour = 55.2% of RTH range; first 30min 44.7%; 9:30–10 bar
  20.6 pts vs 9.89 at 14:30. Only 3.8% of sessions stayed inside the first hour; ONH taken out 60.3% /
  ONL 55.0%; gap fills ≈ coin flip (54.8/51.1). 54.5% of sessions crossed the open once or never — ES is
  not whipsaw chop most days (true two-way chop 1.4%).
- Cross-checks: Perfiltrade long-run ADR 43.7 (stale, https://www.perfiltrade.com/en/learn/es-vs-nq-statistical-differences);
  Barchart 20-day ATR ~117 after Oct/Nov 2026 expansion; STS ~$1,815/day per ES over 15yr vs $2,750 NQ.
- Quote as: "roughly 50–100 pts regime-dependent, ~70 average 2026 ≈ $3,500/contract."

### Setups
- ORB taught widely (Apex resources; futures-trader-hub claims 45–55% WR at 1:2–1:3R [vendor]).
  Quantified: QuantifiedStrategies ES ORB best variant 0.04%/trade, "nothing close to tradeable" without
  filters; Thinridge 1-min 2008–2026 costs-on: textbook 15-min ORB FAILED on ES (−$39,593/4,796 trades;
  break-retest variant also failed −$21,144); CE Market Solutions 2024–26 gross: ES 15-min +503.75pts,
  5-min negative. TradingStats 6,142 days: ES 5-min range broken 100% of days; continuation rises 58.6%
  (5-min wick confirm) → 70.7% (30-min ORB + 5-min close confirm). Edgeful's "108% in 6 months, 72% WR"
  5-min ORB = explicitly tuned/marketing. proppasscheck synthetic Apex sim 69% pass = disclosed model.
  URLs: quantifiedstrategies.com/opening-range-breakout-strategy; thinridge.io/orb;
  cemarketsolutions.com/research/compare/opening-range-breakout-5-15-30-minutes-nq-es;
  tradingstats.net/orb-breakout-strategy-guide; edgeful.com/blog/posts/5-minute-opening-range-breakout-es-strategy;
  futurespropdesk.com/strategies/opening-range-breakout; algolift-style rule sims.
- Mean reversion / VWAP: Apex + futures-trader-hub teach 55–65% WR claims [vendor, unbacked];
  thetradingplaybook.com rates 7/10 Apex-compatible; NO published method-documented ES mean-reversion
  backtest found — gap. Base-rate support = Jusell rotation stats above.

### Trailing-DD suitability
- 1 ES @10pt stop = $500 = 20–25% of a $2K–2.5K trail; ES 6pt stop $300 → ~7 losers to fail; MES 6pt =
  $30 → ~67 losers (SmartMoneyFutures). Kathy Lien (investing.com, Aug 2025): $2,500 DD → "even one ES
  too risky, trade MES; consistent earners never risk >15% of DD in a day; typical 1–2%/trade."
- Whipsaw: ES retraces smaller (futuresfury [vendor]); Apex intraday trail "hits NQ traders harder";
  wickiness = forum consensus only ("ES respects levels, less wicky" r/TopStepX Nov 2025; elitetrader
  "ES trades its technicals better") — no quantified wick study (gap).

### Realistic income
- Veteran benchmark: "5–10 pts/day is a great day" (MicrosTrader, microstrader.com, Jul 2026) =
  $250–500/day on 1 ES = the audience's target band; $25–50 on 1 MES.
- Topstep math framing: $3K/20 days = $150/day ≈ 3 ES pts on 1 contract (tradedisciple [vendor-ish]).
- 100K accounts: $250–500/day = 0.25–0.5% (tttmarkets [vendor], "a $5K month = three great days, ten
  breakeven, two controlled losing days"). Skeptic: ~2.5 pts/day = top 5% (elitetrader 2012).

### ES vs NQ criteria table (FuturesFunded + Edgeful + Propfy + DayTraders)
Range$/contract: ES $3,500 vs NQ $8,100 (2026); stops: 4–12pt ES $200–600 vs 25–50pt NQ $500–1,000;
losers-to-fail ~5–7 ES vs ~3–4 NQ; speed to violation slower ES; style: levels/auction ES, momentum NQ;
correlation: "long ES + long NQ ≈ doubling one bet — treat as one position"; micros near-automatic on 50K.

### Clock quirks
Globex Sun 6PM→Fri 5PM; equity halt 4:15–4:30; maintenance 5:00–6:00 break; trade date rolls at 6PM
reopen; RTH = 9:30–4:15. Firm closes: Topstep/MFFU 4:10, Lucid/Tradeify 4:45, Apex 4:59 ET (MFFU
auto-close skipped on half-sessions = footgun). Overnight 7% limits; 49-hour weekend gap; live example
Nov 3, 2026: ES −106 overnight on midterm results then +86 gap (blueville.capital). Settlement VWAP
3:59:30–4:00. Sunday reopen does weekend repricing; Monday session ~29pts wider than cash session.

## 2. Gold for prop accounts

### Instruments
| Instrument | Size | Tick value | Per $1 move | Venue |
| XAUUSD CFD | 100oz/lot (0.01=1oz) | 1 lot=$100 | $100/lot | forex props |
| GC | 100oz | $0.10=$10 | $100 | futures props |
| MGC | 10oz | $0.10=$1 | $10 | futures props — THE prop sizing unit |
| QO | 50oz | $0.25=$12.50 | $50 | listed at Apex/Tradeify, thin (2,235/day) |
| SGU | 32.15oz | $3.215/tick | $32.15 | dead — 3 contracts Nov 16, 2026; offered nowhere |
| 1OZ | 1oz | $0.25 | $1 | broker market only |
Sources: cmegroup specs pages; propdesknews.com/contracts/mgc; fundingtraders.com/blog/best-prop-firm-for-gold-xauusd;
frontmonth.trade/mgc/margin; propfirmpal.com/futures/contracts/mgc; puravidaedge.com/instruments/mgc.
- Volume Nov 16, 2026: MGC 336,469 vs GC 196,494 — MGC is the bigger book by count.
- Margin: CME moved metals to %-of-notional Jan 13, 2026 (5% → raised 8.8% Feb 2 → 9.9% Feb 6; GC maint
  ~$20.7–21.6K/mo; MGC exchange init ~$2,218, broker intraday ~$50). SIM props don't post margin —
  drawdown + contract caps are the risk engine.

### Volatility (the headline fact)
- XAUUSD ADR: $31 (2020) → $33 (2024) → $60.7 (2025) → $120.5 2026 YTD (2.63% of price; median $100).
  MQL5/IC Markets study, method published (Oct 28, 2026). Cross-checks: MidasGrid 2026 avg $122/median
  $100.5, widest $771, 1-in-10 days >$152; XAU Meter median $98 (2026 year); ATR14 ~$88–97; GC vol 29.9%
  annualized, days >2% range: 0% (2017) → 31% (2025) → 64% (2026); Quantex: 1.5× avg range on 12.7% of
  days, 2× on 4%. FondeoReal measured MGC NY sessions median $31.6 high-low = $316/MGC / $3,164/GC;
  1-in-10 >$6,200/GC — one ordinary GC session can exceed a whole $2K 50K drawdown.
- URLs: mql5.com/en/blogs/post/778649; midasgrid.com/tools/gold-daily-range.html; xaumeter.com/gold-volatility;
  quantex.com.sg/research/2026-10-18-xauusd-average-daily-range/; fondeoreal.com/en/lab/prop-firms-that-allow-gold-futures.

### News sensitivity (quantified)
- Median 5-min move at release: NFP $9–22, CPI $9–17, FOMC $6–22 (two datasets, different bases) vs
  $4–6 ordinary 5-min. First move "held" at 60min 68–83%. ≥$20 run from pre-release on 90–95% of release
  days vs 23–73% ordinary; whole-day range only ×1.14–1.27 — "ordinary days with a burst." CPI release
  hour ×1.94; first move reversed by close ~29%; day after CPI went against CPI-day direction 61%;
  next-session drift +0.14% median, +0.86% at 20 sessions (+1.87% risk-off).
  URLs: xaumeter.com/gold-news-reaction; midasgrid.com/blog/gold-news-days-nfp-cpi-fomc.html;
  xauusdglobal.com/blog/gold-on-cpi-days-study/; chartriaai.com/trading-tools/news-reaction-archive/;
  regimic.com/cpi-market-reaction/gold.
- FTMO ±2-min XAUUSD/DXY execution window (Dec 2023 rule post; TP profits in-window confiscated;
  leverage 1:50 gold Std since Feb 2, 2026): ftmo.com/en/blog/updated-trading-conditions-for-the-dollar-index-dxy-and-xauusd/.

### Setups
- London/session breakout: Asia range $10–25 compresses; 15-min close beyond boundary w/ ≥1.5× volume;
  skip when overnight range >50% of 14-day ADR; never straddle both sides ("resolves one side, reverses,
  resolves the other — reliably two losses"). goldhunts.com/gold-strategies/xau-session-breakout;
  propjournal.net/strategies/london-breakout; session quality 07:00–08:00 UTC best, avoid 12:00–13:00
  pre-data, never 21:00–23:00 rollover (spread). EA marketing claims (PF 1.38–1.61, "73% vs 51%") = vendor.
- Break-and-retest: gold notorious for false breaks → require close beyond ≥0.25×ATR; wick-through-close-back
  = grab. xauusdglobal.com/strategies/gold-breakout-retest-strategy; xauusdlivechart.com/blog/break-and-retest-gold.
- Supply/demand ZONES: scripted bare-rule test (103 H4 zones 2024–26, 2R target) hit 2R on only 26% of
  first touches — BELOW the ~33% breakeven → mechanical zones are not an edge without filters; demand>supply
  55/32% confounded by bull tape; includes published correction for roll-gap contamination (good critique
  example). xauusdglobal.com/strategies/supply-demand-zones-xauusd/.
- Wick reversals / Judas Swing: London almost always sweeps one side first; fade only after CHoCH close;
  double sweeps common (buffer stops); counter-trend sweep inside H4 trend = continuation. xauproacademy.com.
  GC↔XAUUSD levels: convert via live basis; gap not constant (akorderflow.com).

### Sizing on $2K DD @ $200 risk
- MGC contracts = risk ÷ (stop$ × 10); XAUUSD lots = risk ÷ (stop$ × 100).
- Stops: $5→1 MGC risks $50 (4 allowed); $10→$100 (2); $20→$200 (1); $30→$300 (0.67). FondeoReal:
  $2,000÷10 losers=$200 → $10 stop → 2 MGC; "single GC with $10 stop = half the drawdown."
- PropFirmPal: 1 MGC = $200/oz room; 5 MGC = $40/oz = less than ⅓ of a median day. Puravida ladder:
  25K→1 MGC, 50K→1–3, 100K→2–4, 150K→3–4 (firm caps of 150 micros are "for scaling, not loading");
  FundedTruth example: 10 MGC × $40 move = $4,000 > most full drawdowns.
- CFD: FundingTraders demo 1.25 lots @ $8 stop on 100K = $1,000 risk; −$15 slip = $1,875 = 62.5% of 3%
  daily allowance before slippage. Rule of thumb: SIZE GOLD ~HALF what same % risk allows on index futures.

### Failure modes (documented)
1. News-window technical breaches (fills, not intent) — FTMO rule; MFFU ±2-min funded windows; The5ers
   HighStakes bans executions ±2min in ALL phases.
2. Dollar-range drift: 2024-sized stops sit inside 2026 ordinary days; ATR-scaled bands held ~89%
   containment vs fixed-$ failing silently (MQL5).
3. Revenge/oversizing after sweep — r/propfirm Aug 2026 gold fakeout → 4 accounts at DLL, 1 blown.
4. Slippage/feed disputes — BE stops filled far away (FundingPips case r/propfirm Mar 2026); 60-pip slip
   account termination (Maven r/Trading Sep 2025); "rigged chart" claims unverifiable — label as claims.
5. Spread widening at 17:00 NY rollover + Monday open (warned by firms themselves).
6. Futures intraday-only rules forbid overnight gold holds (close 4:10–4:59 PM ET); CFD weekend-gap
   exposure; FTMO Friday flatten vs Swing.
7. Hedging across metals complex: long GC + short MGC across accounts = closure at Apex/Tradeify; MFFU
   bans opposite same-underlying.

### Availability (a regime risk)
- All 7 futures firms checked list gold (Apex, Lucid, Topstep, Tradeify, MFFU, Bulenox, Earn2Trade) but:
  Apex + Topstep HALTED ALL METALS ~Feb 4, 2026 (volatility/margin), restored ~May 1, 2026; no official
  dates ever (FondeoReal archive forensics Feb 18–Apr 2 notice window; TradEdgePulse "restored May 2026");
  one Sep 2026 page still claims permanent suspension — CONFLICT resolved to restored-but-cap-laden.
  Current caps: Apex 6 minis/60 micros eval (funded 2–4); Topstep volatile-metals GC 3 / MGC 30 (Live MGC 5);
  MFFU 5 metal micros per 50K since "April 17", SI/HG/PL/NG/QG restricted since "February 7"; Lucid 4/40,
  LucidDaily ±1min news ban. r/ApexTraderFunding threads Feb/May 2026; help.topstep.com risk-adjustments;
  myfundedfutures instrument list.
- Forex props: FTMO XAUUSD 1:50 Std, Swing 1:15–1:30 news/weekend OK; The5ers HighStakes ±2min ALL phases;
  FundingTraders 1:20 metals + 30% profit cap on news-window funded profits; FundingPips XAUUSD. No firm
  publishes XAUUSD max-lot tables or gold pass rates — gap; third-party lot ladders = modeled.
- No ES-vs-gold pass-rate comparison exists anywhere — say so.

## 3. Market selection by consistent earners
- "One contract until it pays": QuantCrawler, SmartMoneyFutures ("every switch resets what you know"),
  Propfy ("finish the attempt on one instrument"), Indie Investor, JP Trading Capital (1–2 contracts,
  RTH), Earn2Trade specialize-vs-diversify (hybrid: master one → expand one at a time → monitor
  correlations); Asymmetrist essay: "start narrow, grow wide" + honest note that "stick to one market"
  is "regurgitation of misapplied meta-game." Forum: r/FuturesTrading Jul 2024 most-upvoted = "focused
  completely on ES first, now also NQ/YM/GC."
- OneUpTrader funded interview (Mar 2025): NQ specialist, $10,750 withdrawn, 90% win rate with 1:8
  win/loss — survives only in one familiar tape [vendor story].
- Correlation rules police multi-instrument books (FondeoReal): Apex/Tradeify group correlated products
  for hedging; Lucid bans opposite positions across correlated instruments on different accounts.
- Switch-to-ES triggers: trailing DD binding, wide stops vs account, real-money margin pressure
  (r/FuturesTrading Dec 2022 sizing thread top answer). Stay-NQ trigger: positive expectancy AT MICRO
  SIZE in your journal. Cost-per-dollar contrarian keep-NQ argument (EliteTrader): NQ ~2× ES dollar
  range ≈ half the costs per dollar gained — Jusell confirms ~2.3× not 4×.
- Gold as second book: behavior-diversifying (trends low-noise then bursts vs NQ noisy/mean-reverting —
  Puravida), 1–3 MGC/50K max, check today's caps; EliteTape (vendor, own-user aggregate) shows gold among
  consistent-loss instruments — honest framing: reputation vs own-book results conflict.
