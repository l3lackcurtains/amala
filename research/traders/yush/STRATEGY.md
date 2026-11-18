# Yush — STRATEGY

> Research copy of the dashboard page. Every point here is sourced with `(videoId [MM:SS])` citations in
> `raw/notes-streams-A.md`, `raw/notes-streams-B.md`, `raw/notes-streams-C.md`, `raw/notes-interviews.md`,
> the teaching-video transcripts in `raw/tr/`, `ARTICLES.md` (site + Chart Fanatics). Researched 2026-11-18.


## Who Yush Is

Yush is a **former software engineer turned full-time order-flow scalper of NQ and ES futures**, trading mostly through prop firms (Lucid, Tradeify, Take Profit Trader, Apex, FundedNext and others) plus a personal futures account. He started in 2019 with options on SPY/QQQ names, moved to futures roughly two and a half years in, spent the first prop years "learning and failing", and says things began to compound in 2023. His whole method is **Auction Market Theory + volume profile for location, order flow for timing**:

> "Most traders don't need another indicator. They need a read on who's trapped and a setup they can repeat."

He trades the **same two models every day** — one for balance, one for trend — and calls the method deliberately boring: *"I trade the same exact way for years. It's so boring, but there's no reason to change it cuz it works."*

## 1. The Core Idea — The Market Is an Auction

- **Price moves to find the other side.** Price goes up to look for buyers and down to look for sellers, "and it keeps going until the other side stops showing up."
- **Excess = the auction ended.** A long wick or a thin profile tail at a high/low means one side found the price unfair — big moves often start there.
- **Poor high/low = unfinished business.** A flat high touched two or three times with no rejection is an incomplete auction; the market tends to come back to finish it.
- **Two moods, two playbooks.** *Balance* — bell-shaped profile, edges get rejected, breakouts fail, fading works. *Imbalance* — long thin profile, one side in control, fading gets you run over, you go with it. "Most traders have one playbook for both moods. That was me."
- **Acceptance vs rejection is the only question.** When price leaves value it either pokes out on thin volume and snaps back (rejection) or stays, builds time and volume, and grows a new cluster (acceptance). "You don't need to predict anything. You wait and you watch."
- **Auction theory is the map, order flow is the fight.** "The map without order flow, you know where, but you're guessing when. Order flow without the map, you're watching fights everywhere with no idea which one matters."

## 2. What Delta Actually Measures

- **Every contract has a buyer and a seller** — "there is no such thing as more buyers than sellers." Price moves because one side is more **urgent**, not more numerous.
- **Aggressive vs passive.** Market orders cross the spread (aggressive, impatient); limit orders wait (passive, patient). Every print is an impatient trader meeting a patient one.
- **Delta = volume at the ask − volume at the bid.** It only tells you who was willing to cross the spread.
- **A candle is a summary, not the market.** It squashes thousands of trades into four numbers; order-flow tools "unsquash" it. He keeps candles on screen "like a clock" — for time, structure and trailing stops, never for the read.

## 3. The Four Tools That Build an Area of Interest (AOI)

Every trade starts at an **AOI**. A level is valid only when **at least two of these four line up**; three or four is an **A+** zone.

1. **Market-generated levels** — RTH previous-day high/low, previous-day close, overnight high/low (9:00 PM–9:29 AM ET), and the **30-second opening-range** high/low. "These levels without a reaction don't mean anything."
2. **Volume profile** — the developing **RTH** session profile anchored at the 9:30 open: POC, value area (≈70% of volume), VAH/VAL, high-volume nodes (battlegrounds, chop) and low-volume nodes (where one side won).
3. **Big trades** — prints filtered at **NQ 75+ lots / ES 200+ lots** (lowered to roughly 50 / 100 when the book is thin), aggregated by order over **100 ms**. Big size at a level = someone with intent.
4. **Delta profile** — delta stacked by price, on a **30-minute rolling window**, to spot absorption and trapped traders. Roughly **500+ at a level** is what he considers "a lot".

> "If price never comes back, guess what? I don't trade."

- **Absorption and trapped traders are what create support and resistance.** A level that held through heavy big-trade activity is support; once it breaks and gets rejected from below, it flips to resistance.
- **Highs and lows are trap zones.** "A lot of traps happen near overnight highs and lows" — stops and breakout chasers sit there.
- **Not every FVG is an LVN.** A real LVN is a significant thin pocket left by one side's aggression after leaving a high-volume area — not a tiny gap between two HVNs.

## 4. Reading the Order Flow at the Level

Once price reaches an AOI he is watching for only two things:

- **Absorption** — heavy aggression with no result. "A lot of positive delta coming in, but price is just not going up… there's a passive seller there absorbing all those buy orders." Mirror image at lows: negative delta stacking, price refusing to fall.
- **Trapped traders** — one side gets aggressive, then price reverses through them. "If there's trapped buying or selling, the other side is going to cause max pain and stop them out." Their stop-outs become fuel for the move the other way.
- **Delta and price in alignment = the aggressive side is getting paid.** Positive delta on a breakout *and* price holding above the level is real; positive delta on a breakout that falls straight back inside value is a trap.
- **Repeated attempts strengthen the read.** He doesn't take the first sign of absorption — the second failed push is confirmation, a third attempt that sweeps the highs and fails is the entry.
- **Delta without big trades is still valid.** Size can reload in small pieces under the big-trade filter; the delta profile catches it.
- **Tape speed matters.** He watches the DOM for how fast price skips ticks — never steps in front of fast momentum.

## 5. Model 1 — Look Above / Look Below and Fail (Balance)

His own mean-reversion model, built for **range/balance days**. If he could keep only one setup, it would be this one.

**Context:** price is rotating inside value; the profile is a bell; breakouts lack follow-through. The middle of the range is a no-trade zone — "I'm not interested in the middle."

**The LBF long (mirror for LAF short):**
1. Profile drawn — VAH, VAL, POC marked.
2. Price **sweeps** below VAL — trades well through it, not just a tag.
3. **Aggression visible** — big sell prints and heavy negative delta below the edge.
4. **Absorption on the tape** — sellers keep hitting, price stops paying them; long lower wick.
5. **Reclaim close** — a candle closes back above VAL. Breakout sellers are now trapped.

> "Look below, reclaim, other side of balance."

- **Entry:** on the close back inside value — not into the sweep ("nothing has proven the low yet") and not chasing into POC (that gives up a large part of the rotation and stretches the stop).
- **Stop:** just below the edge (the reclaim failed) or below the sweep low (the trap idea is dead).
- **Targets:** TP1 the range midpoint / POC, TP2 the **opposite side of value** for the full rotation.
- **Only in balance.** "LBF and LAF on this type of day don't work because it's trending."
- **Real breakouts don't come back.** After compression a true breakout should be strong, leave LVNs, and not return inside value; a move up followed straight back down is the failure signature.

## 6. Model 2 — LVN Pullback (Trend)

Built for **imbalance/trend days**. "I look for breakouts from value and a retest of the low volume nodes."

1. **Cluster mapped** — a balance area/volume cluster forms.
2. **Breakdown/breakout** — a strong body closes out of balance and runs, leaving a thin **LVN** behind.
3. **Don't chase.** "Let it break out, it creates a low volume pocket, and we try to enter in those low volume pockets."
4. **Shallow retest into the LVN** — the pullback stays inside the thin area, short of the old cluster.
5. **Failed counter-push** — the opposite side gets aggressive (a big print, delta against the trend) and goes nowhere. "When low volume nodes get tested, I want to see if that side that created the aggression comes back in, defends those areas."

- **Entry:** on the failed push inside the LVN — not shorting the hole before the retest (you go offside first) and not selling the break of the low after the move.
- **Stop:** inside the cluster, just past its edge / beyond the swing that invalidates the trend.
- **Targets:** T1 the breakout extreme / prior high-low, T2 the next HVN; trail on structure (lower highs in a downtrend, higher lows in an uptrend).
- **Strong trends can skip the retest.** Very aggressive sides (new buyers + squeezed shorts = "double the fuel") may never pull back deep — that's where patience comes in.

## 7. Aggressive vs Confirmation Entries

| | Aggressive | Confirmation |
|---|---|---|
| Where | At the edge, on the first absorption / look-under | After the reclaim, retest, or higher-low / lower-high |
| Size | **Smaller** — "a higher chance I'm going to be wrong here" | Normal |
| Stop | Very tight — you know quickly if you're wrong | Beyond the structure |
| Typical result | ~3–4R | ~2R |
| When | High-probability zones, or momentum reclaims that may never retest | Counter-trend ideas — "if I'm going super against the trend, I likely will wait for a retest" |

- **Never enter into momentum.** "I never go long a momentum move." Wait for slowdown, reaction, confirmation — "I don't want to get in front of a moving train."
- **No breakout trading.** "I hate trading breakouts or breakdowns… I want to sell into these type of moves." NQ breakouts are where he lost the most money starting out.
- **First touch is not an entry.** "It doesn't necessarily mean the first time this area gets tested I'm looking for a long. It's all based on reaction."
- **Decisions take seconds.** The criteria are simple so execution is a 1–5 second window; overthink it and the optimal entry is gone.

## 8. Pre-Market Plan

Built before 9:30 (in his Discord, on stream, or written):

1. **Read the recent RTH ranges.** Trend day → consolidation → follow-through → inside day? After an inside day, watch for follow-through out of its RTH high or low. Then switch overnight data on — did Globex already break out?
2. **Find the balance range** (multi-day / multi-week) and anchor a volume profile over it. After a breakout, anchor a new profile from where the move started. A new range is only confirmed after a daily close outside and a few days of consolidation. "There is no right way to anchor the profile."
3. **Mark the larger-timeframe levels:** D-1/D-2 VAH/VAL, weekly POC/VAH, prior range extremes and midpoint, prior day open/close, overnight high/low, overnight LVNs, and round numbers that have reacted repeatedly.
4. **Validate each level:** count reactions on the 30-minute chart (RTH only, then with overnight), look for big-trade activity there; drop levels with no activity; discount big trades near the close (position squaring). Volume from an expired contract carries less weight.
5. **Write if/then scenarios** per level — break-retest-lower-high to short, or look-below-and-reclaim to long.
6. **Three questions every morning:** Where is value? Are we opening inside or outside it? Is the new price being accepted or rejected?
   - Open **inside** yesterday's value → expect balance.
   - Open **outside** and pulled back inside → rejection; price tends to travel through value to the other side.
   - Open **outside** and stays → acceptance; don't fade it.

> "Wait for the extreme points… that is where your A+ setups are going to come."

## 9. Session Timing

- **Window: NY morning, roughly 9:30–12:00 ET** — "AM is king." Most of his day is done within the first one to two hours.
- **First 30 minutes:** only trade the pre-marked higher-timeframe areas, and never change the plan. After 30 minutes there's enough intraday data to build an intraday plan. He usually skips the first five minutes, especially when volatile.
- **If his pivots aren't tested by ~11:00** he gives it about 30 more minutes, then stops.
- **No Asia** ("too light volume… I don't think you really have an edge"), **no London**, very rarely pre-market, rarely the afternoon (Friday afternoons and power hour are the worst). He has a slower PM model still in forward-testing.
- **No positions into news, ever,** and out before the 3:50 PM market-on-close imbalance.

## 10. Regime Filters

- **ES and NQ must agree.** "You want ES and NQ to align. You're going to get the best follow-through moves when that aligns." When they diverge he stays out or trades smaller — and goes **long the stronger index / short the weaker one**.
- **Higher timeframe always wins.** If a lower-timeframe entry conflicts with a higher-timeframe level, skip it or size down.
- **No shorting all-time highs.** In ATH grinds pullbacks are shallow and setups rare — be selective or stand aside.
- **Grinding markets are not his market.** Slow one-directional grinds offer no edge for a scalper; he'd rather not trade.
- **Chop diagnostics:** a tight developing value area (too narrow to make 2R), gap-downs that rotate, a value area stuck in the middle of yesterday's range. "If you look at chop for too long, it starts to look good."
- **Volatility sets stops and size.** VIX above ~20 means wider stops and fewer contracts; low VIX means tighter stops are fine.

## 11. Gamma (GEX) as Confluence

Added to his process in 2026 and built into his own real-time GEX web app.

- **Three levels only:** call wall, put wall, zero gamma.
- **Never trade the level alone.** "If you're just trading off GEX, you're doing it wrong." Walls shift intraday; you need an order-flow model to confirm.
- **Call wall in positive gamma** = dealers sell into it (rejection); if gamma exposure keeps building higher it can instead become fuel on a trend day.
- **Put walls** = good profit-taking areas and bounce zones (dealers forced to buy); in a strong negative regime below major put walls they're forced to sell.
- **Below zero gamma, volatility expands.** He won't go long back into a range until price clears zero gamma and holds on a retest.
- Best use: a gamma level stacked on a value edge — e.g. an LAF at VAH that is also the call wall.

## 12. Tools & Platform

- **Platform:** Deepcharts (since mid-2026; previously MotiveWave on Mac). Any platform with **tick data** works; TradingView's volume profile and big-trade readings are wrong without tick data.
- **Charts:** NQ 2-minute, ES 3-minute; 30-minute/hourly for levels; candles only for structure and trailing.
- **On the chart:** RTH volume profile (default settings), delta profile, big-trades bubbles, an important-levels indicator (overnight H/L, 30-second ORB, prior close, PDH/PDL).
- **DOM:** bid/ask, a stacking/pulling column to spot spoofed size, a fills column, and **session delta** to compare with the 30-minute chart delta.
- **Dropped:** Bookmap, footprint, cumulative delta, heatmaps — "too many indicators… you will always have conflicting things."
- **Instruments:** ES and NQ minis and micros only — no gold, crypto or single-stock futures.

## Gaps & conflicts (not on the dashboard)

- **Opening range length:** Chart Fanatics' write-up says "32-second ORB"; he says "30-second" in the interview and on stream — used 30.
- **Platform:** MotiveWave through ~May 2026, Deepcharts after (interviews predate the switch).
- **First hour:** he says both "trade the first 2–3 hours" and "I don't like to trade the first hour"; streams show he skips the first ~5 minutes and only trades pre-marked HTF areas in the first 30.
- **Win rate:** "74%" appears only in a Chart Fanatics video title; on stream he said ~70% "this year" (May 2026).
- **Payout totals** differ by date/source: $1.5M (early 2026 interview), "over $2M" (spring), "over $3 million" (Nov 2026 videos).
- **Bench-a-firm rule:** "a week" in one interview, "2 days" in another.
- **PM model:** mentioned as in forward-testing (~75% win rate claimed) — never documented.
- **Course content (Levels 1–5)** is paywalled; only the public outline and the two interactive demo setups were read.
