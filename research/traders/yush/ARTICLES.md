# Yush — Articles, site sections & interviews

Yush has **no blog**. His written/public teaching lives in four places, all read in full:

## 1. yushcapital.co (course + membership site) — fetched 2026-11-18

Single-page Next.js site; `/about`, `/story`, `/blog`, `/faq` all 404. Story, rules and the interactive
setup walkthroughs are embedded in the page's JS bundles and were extracted from them.

| Section | What it documents |
|---|---|
| Hero / thesis | "Most traders don't need another indicator. They need a read on who's trapped and a setup they can repeat." Order-flow course for NQ and ES. |
| Course outline (Levels 1–5) | L1 Building the framework (auction market theory, volume profile concepts); L2 Understanding the tools (delta profile, big trades, market-generated levels, volume profile); L3 Template (Deepcharts + MotiveWave setup guides); L4 The models (LBF/LAF framework, LAF, LBF, when to avoid; LVN framework, LVN model, when to avoid); L5 Live trade recaps (LBF reclaim, Nasdaq put-wall trade, absorption short, LVN short); Bonus: GEX Playbook (false breakouts with gamma levels, GEX + retest of distribution) and Psychology & Risk (prop trading rules and scaling). 19 lessons + 3 bonus, 6 assignments. |
| "A setup counts only when all five boxes are ticked" | Five-box checklist for LBF and LVN models (see below). |
| Interactive LBF walkthrough | Boxes: Profile drawn (VAH/VAL/POC marked) · Swept, not touched (traded well below VAL, not a tag) · Aggression visible (big sell prints + heavy negative delta) · Absorption on the tape (long lower wick: sellers trapped) · Reclaim close (candle closes back above VAL). Entry: close back above VAL. Stop A just below VAL ("the reclaim failed"); Stop B below sweep low ("the trap idea is dead"). Target VAH ("full rotation of value"). Wrong answers: buying into the sweep ("nothing has proven the low yet"); chasing into POC ("gives up about 40% of the rotation"). |
| Interactive LVN walkthrough | Boxes: Cluster mapped (VAH/VAL of the balance) · Breakdown body close below balance, straight down (creates LVN) · Shallow retest that stays inside the LVN · Big print at the retest that goes nowhere · One-sided (never got back into the cluster). Entry: sell the failed push inside the LVN; stop inside the cluster just above its lower edge; T1 swing/breakdown low, T2 next HVN below, trail above lower highs. Wrong answers: shorting the hole before the retest (goes offside first); selling the break of the low after the move (stop too far). |
| "7 years of trading, 11 lessons" | 1 Every day is a new day · 2 Consistency over big days · 3 Most traders fail from overconfidence and over-leverage · 4 Markets change, your risk has to change with them · 5 You will lose, cap the damage · 6 The market reflects your habits · 7 When you think it's time to scale up, you're probably wrong · 8 Respect the small wins · 9 Money won't fix your life, people will · 10 "I need to make $X today" is when you've lost · 11 If you can't accept losing, quit trading. |
| About / story | Ex-software engineer at a top U.S. tech firm. 2019 "The spark" (manager: "use your 20s to build wealth outside of work"); 2020–2023 "The expensive years" (blown accounts trading hope instead of structure; options first, futures from ~2022); Apr 2024 "The Reset" (stopped forcing trades in illiquid markets, aligned strategy with his personality); 2026 "Sim to live" (goal: 5+ live accounts across top firms). Method "built on Auction Market Theory and Volume Profile". |
| Personal rules | 01 Detachment — "P&L is a byproduct of execution." 02 Consistency — "Results only show up in hindsight." 03 Defined Risk — "Set before the open. Never renegotiated." (max daily loss and size fixed before the session) 04 Full Transparency — wins and losses in public. |
| Quotes | "Sim farming is dying. 2026 is about building foundations that transfer to live markets." · "The second you tell yourself 'I just need $500 in the next 5 days' that's when the spiral begins." |
| Pricing | Course $499.99 one-time (list $624.99), lifetime, 30-min 1-on-1 after week one. Membership add-on $149.99/mo: free 50K eval each renewal (2 partner firms), real-time GEX web app (ES/NQ/GC call wall, put wall, zero gamma — "context, not signals"), Discord with daily live trading, weekly giveaways. 5.0 on Whop, 54 reviews. |

## 2. Chart Fanatics strategy page — "Yush's Strategy: Trading Trapped Buyers & Sellers with Order Flow"

https://www.chartfanatics.com/strategies/order-flow-strategy — scalping strategy, NQ futures, day trading.
- **AOI framework:** four tools, ≥2 must align (A+ = 3–4): market-generated levels (PDH/PDL, overnight H/L, prior close, 32-second ORB); volume profile (value area ≈70% of volume, LVNs); big trades (NQ 75+, ES 200+ lots, adjusted for liquidity); delta profile (absorption, trapped traders). "If the price does not return to the AOI, there is no trade."
- **Model 1 Range (balanced):** trade only the edges (VAH/VAL), never the middle. Aggressive entry at the edge on absorption (smaller size, tight stop) or confirmation entry after a failed breakout re-enters the range. T1 range midpoint, T2 opposite side of value; stop to breakeven at T1; stops just outside the edge; never let a winner go negative.
- **Model 2 Trend (imbalanced):** aggressive move leaves an LVN → pull back into it → opposing aggression fails. Aggressive entry inside the pullback zone or confirmation entry on reclaim / higher low (lower high). Partials at prior highs/lows, trail on structure, add to winners: "scale into strength, not weakness".
- **Execution rules:** don't anticipate; minimum confluence 2; patience; 2–3 trades per day; scalping mindset; define risk before entry; never let winners turn negative; accept losses quickly; avoid entries directly into strong momentum — wait for slowdown, reaction, confirmation.
- Two trade breakdowns (Model 2 short below overnight low after a liquidation drive with a ~300-lot print; Model 1 ES short: DOM positive delta ~800/1,800/1,900+ with no progress = absorption, sweep of overnight high, LAF).

## 3. Interviews (linked from his own site)

| Title | Channel | Date | Length |
|---|---|---|---|
| [74% Win Rate Trader Shares His EXACT OrderFlow Strategy ($2M+ Payouts)](https://www.youtube.com/watch?v=hvyf6frvCcA) | Chart Fanatics | 2026-05-03 | 1:31:32 |
| [He Switched ICT Concepts For OrderFlow And Made $2M+ in Payouts](https://www.youtube.com/watch?v=3SoMtHNUeNU) | PropFirmTrader | 2026-03-16 | 46:11 |
| [TOP Ranked Futures Prop Trader with $2+ Million in Payouts (Orderflow Trading)](https://www.youtube.com/watch?v=29HfHgBQQmA) | Words of Rizdom | 2026-04-02 | 1:08:50 |
| [The $17M+ Prop Firm Roundtable](https://www.youtube.com/watch?v=ps5In64-2So) | Words of Rizdom | 2026-04-23 | 2:27:10 |

Transcripts: `raw/tr/interview-<id>.txt`; distilled in `raw/notes-interviews.md`.
