---
title: Strategy Playbook
trader: dmoney
topics:
  - risk
  - entries
  - exits
  - sizing
  - sessions
---

## Who D-Money Is

D-Money is a **momentum day trader of NQ (Nasdaq-100 E-mini) futures**, trading primarily on prop-firm eval/funded accounts (Apex, Tradeify, Lucid, Tradovate execution). He trades the US session (often the 9:30 AM open and/or the 12:00–4:00 PM afternoon window) and describes himself as a trader of 10+ years (stocks, options, forex, futures). Core identity quote: *"I am a momentum trader"* — his job is *"not to pick the top. Your job is to join the momentum in whatever direction the market decides to go"* (why-you-cant-pick-the-top-on-nasdaq-futures).

## 1. Chart Setup & Tools (TradingView)

From `my-tradingview-setup-emas-boxes-and-tools-explained`:

- **Indicators:** the 14, 50, and 200 EMAs — "the backbone of this trading strategy."
- **Pinned tools:**
  - **Rectangle tool** → support/resistance *zones* (transparent boxes so candles are visible inside).
  - **Horizontal line** (colored strictly black) → exclusively for mapping ORB highs/lows.
  - **Price Range tool** → measuring exact point drops / candle sizes (e.g. "710 points").
  - **Arrows** → marking engulfing candles and rejection points.
- Execution happens directly on TradingView charts via broker connection (e.g., Tradovate).

## 2. The EMA System (14 / 50 / 200)

From `everyone-says-emas-dont-work`, `how-i-use-the-14-50-and-200-ema-to-trade-nq-futures`, `how-i-find-a-entries-using-the-emas-nq-futures`, `how-to-identify-a-trend-day-before-it-happens`:

- **EMAs are trend indicators, not entry signals.** "EMAs are not magic lines you trade blindly—they are pure trend indicators." They are *lagging* indicators used for **confluence** with price action, momentum, and higher-time-frame analysis.
- **They work in trends, fail in chop:** "The EMAs don't work in a choppy market, but on a trend day, they are the best tool in your arsenal."
- **Setup:** add Moving Average Exponential three times, lengths **14, 50, 200**.
- **The 14 EMA is the momentum magnet.** In a strong trend the repeating pattern is: *"Drop, retracement to the 14 EMA, rejection, and another drop. Every single time price pulled back to tap the 14 EMA on the 5-minute chart, it gave us a flawless entry for another short."* Same pattern long-side: push → retrace to 14 EMA → rejection wick → continuation.
- **EMA crosses set the directional bias:** wait for a **bearish EMA cross** (14 crossing below 50) before hunting shorts; bullish cross for longs. A clean cross e.g. "right at 9:20 AM" preceded his short sequence.
- **EMA spread = momentum intensity.** "Notice how far apart the EMAs spread after that cross? That massive gap tells you there is intense selling pressure in the market. You should not even be thinking about longs!"
- **Higher time frame conviction:** when price trades entirely *below* the 14/50/200 EMAs on the 1-hour chart (and there is a bearish cross on the 4-hour), longs are "financial suicide" except for quick scalp retracement bounces to the 14 EMA. Rule of thumb: if the 1-hour is bullish, look for bullish EMA crosses on entry time frames; if bearish, hunt bearish crosses.
- **On a strong trend day, EMAs are a line in the sand:** "On a strong bullish trend day, once the price pushes above all three EMAs in the morning, it will likely *never drop below them* for the rest of the session."
- **EMAs = stop-loss anchor:** "You want to enter a trade as close to the EMA as possible, allowing you to use the EMA as your stop-loss placement." Typical EMA-retracement stop is **10–20 points**.

## 3. Trend vs. Range/Chop Identification

### The inside-range rule (his #1 pre-open tell)

From `inside-yesterdays-range-means-chop-heres-why`, `i-knew-it-would-chop-before-the-open`, `the-nasdaq-ran-200-points-heres-how-i-traded-it`, `one-loss-all-day-on-nasdaq-futures`:

- **First action every morning:** map yesterday's daily candle high and low on the daily chart.
- **Rule:** *"When we are stuck inside yesterday's range, we get consolidation and chop. When we break above yesterday's high, it is an expansion day."* Inside the prior day's range → expect "a choppy, consolidating, range-bound market." Outside/breaking it → "Look for higher highs, higher lows, and a trend day."

### Trend-day clues

From `how-to-identify-a-trend-day-before-it-happens`, `what-is-momentum-trading-my-full-breakdown`:

- Large momentum candles early (5-min candles of **80–130 points** right after the open; he "routinely" sees 100–130 point candles in the first hour).
- Higher highs + higher lows (uptrend) or lower highs + lower lows (downtrend).
- Price holds above (or below) all three EMAs for the session.
- Bearish trend day additionally: bearish EMA cross + ORB breakout to the downside with big red candles.
- **Trend shift warning:** after a huge move (e.g. "a 500+ point drop"), watch for the HH/LL pattern to break — double/triple bottoms or new higher highs/higher lows = trend likely over; "the market will eventually exhaust itself."
- **Lunchtime trap:** momentum dies around lunch; candle bodies shrink; shift from momentum trading to range trading.

### Range/chop trading

From `how-i-trade-a-range-when-nq-is-stuck-in-chop`, `the-market-is-ranging-more-than-you-think`, `trading-psychology-why-i-stayed-flat-on-a-difficult-day`:

- Map the range with rectangle boxes: ceiling over top wicks, floor over bottom wicks. "A range can be as small as 30 points or as large as 85+ points depending on the time of day."
- **Strategy:** "Buy the absolute bottom of the range. Short the absolute top of the range."
- Long entry at the floor: check that price bounced here last time ("look left"), wait for a bottom wick, enter as close to the bottom as possible; **stop 10–15 points below the range floor**; target the top.
- Short at the ceiling: stall + top wicks, enter at the top line, stop just above, target the floor.
- Expect fake-outs ("ping-pong"): price pokes a level and reverses — take base hits of **10, 15, or 20 points tops**.
- "Every range eventually breaks." When volume returns and the box breaks, stop gets hit or you flip back to momentum-breakout trading on the retest.
- After a big expansion (e.g. an 84-point W-pattern pop), price usually gets "stuck back inside a tight consolidation range."

## 4. Key Price Action Patterns

### Wicks ("Embrace the wicks")

From `what-a-90-point-bottom-wick-tells-you`, `the-secret-to-finding-reversals-wick-analysis-101`:

- Wicks "tell a story. They don't lie" — they show where price tried to go but couldn't hold.
- **Support wick (bullish):** long bottom wick = buyers stepped in aggressively. His flagship example: a 30-minute open candle with a **90-point bottom wick that still closed green** → "heavy buyers sitting lower down." Execution: buy the *next* candle as it digs back down into that wick zone (e.g. down to ~31,192), ride the reversal for 50 points. He admits "you never know exactly how deep the retracement is going to dig into that previous wick."
- **Rejection wick (bearish):** candle taps the 14 EMA, rejects, closes red with long top wick = bulls failed → short the continuation. Stop just beyond the 14 EMA ("usually a tight 20-point stop"); example yielded a "100+ point melt."
- **"Swipe and Go":** price flushes below a prior low (liquidity swipe) and immediately rejects back up, closing bullish → get long; stop strictly below the bottom of that rejection wick → "an incredibly tight stop and a massive risk-to-reward ratio."
- **Reactionary levels:** "looking left and finding where massive wicks previously printed" — a big wick from Oct 30 at 7:00 AM becomes the bounce zone when price returns Oct 31 at 11:00 AM. Works for tops too.
- **Golden rule:** "If you get a crazy rejection wick on a 1-hour chart, it is significantly stronger than a wick on a 1-minute chart." Higher time frame wicks carry more weight; a first-15-minute-candle long bottom wick = "institutional buyers are willing to step in and absorb the selling pressure."

### Equal highs / equal lows

From `how-i-spot-equal-highs-and-equal-lows-for-reversals`:

- Definition: two consecutive (or clustered) candles topping/bottoming out **within one point** of each other (e.g. highs 29,905.25 vs 29,905.50).
- Equal High = bulls stalling → first clue of bearish reversal. Equal Low = hard floor → look for longs while it holds.
- Entry confirmation for the long: "Wait for a candle to close bullish above your 14 EMA." Stop "just a few points below the Equal Low"; an Equal Low "is the launchpad for a massive 100+ point 'bazooka candle' to the upside."
- Beware the swipe: often the next candle momentarily *sweeps* just below the equal low to trap breakout sellers before reversing.
- Also from `why-most-traders-miss-the-reversal-and-how-i-spot-it`: an equal low after a **300+ point drop** with a stop a few points beneath gives tiny risk vs "70 to 100 points" of reward back to the EMAs.

### Double bottoms / tops, W-patterns, pin bars

From `the-double-bottom-was-the-low-all-day`, `the-market-is-ranging-more-than-you-think`, `why-most-traders-miss-the-reversal-and-how-i-spot-it`:

- Double bottom: price sets a low (e.g. ~31,144), pushes up, swipes the low once more, rejects heavily — "that level remained the absolute low for the *entire* rest of the day." After the double bottom, expect a "slow, grinding stair-step pattern: push up, retracement, push up."
- W-pattern (drop, push, drop, push) on the 5-minute → completion ignites expansion (e.g. an **84-point** pop at 11:55 AM).
- Double/triple top on the 1-hour with "selling pressure creeping in" = red flag before a down day.
- Pin bar/hammer: "a massive 20-to-30 point bottom wick after a long downtrend... a very strong warning sign for bears that a bullish reversal is likely beginning." A daily bearish pin bar with a "400-point long bottom wick" showed "extreme reaction from the bulls."
- Context rule: "A reversal pattern is only as strong as its context" — a bottom wick after only a 20-point drop means little; after a 370-point melt "the rubber band is stretched thin" and it's an A+ setup.

### Momentum candles ("Bazooka Candles")

From `what-is-momentum-trading-my-full-breakdown`:

- Consolidation = cluster of small candles with long wicks (indecision). Breakout = a "massive, solid candle bursts out of the range... If you see a 5-minute candle with an 80+ or 100+ point range that completely engulfs the previous candles, that is your signal. Institutional money has picked a direction."
- Bearish engulfing: "If a red candle body is 2 to 3 times the size of the previous green candles, the bears are in full control."
- **Never fight heavy momentum.** Never buy the top of a huge green candle or short the bottom of a huge red candle — wait for the retracement.

### Structure shifts

From `one-loss-all-day-on-nasdaq-futures`, `why-most-traders-miss-the-reversal-and-how-i-spot-it`:

- "One bullish candle doesn't mean a reversal. What confirmed the reversal was what happened next: **we started putting in higher lows.**" "When the market stops making lower lows and starts stacking higher lows, the momentum is shifting."
- Bullish reversal build: low → higher low → another higher low after a big drop ("the market was clearly building up pressure to go higher").
- Bearish: series of "a high, a lower high, and another lower high" = short the 14 EMA rejections.

## 5. Support & Resistance Mapping

From `how-i-map-out-support-and-resistance-levels-nq-futures`, `how-i-frame-quality-setups-on-nasdaq-futures`:

- **Draw zones, not lines**, on the **1-hour and 4-hour charts** ("The higher the time frame, the stronger the support or resistance level"). Rectangle from **wick to candle body** at historic turning points, extended right.
- Look **immediately to the left**: where did price previously reject or bounce? Long-wick rejections mark the zones.
- Price travels "zone to zone" — mapped zones are the logical **take-profit targets** (e.g. he pre-called the 30,794–30,813 box as the "ultimate bull target" and price rejected exactly there).
- **Gap fills** act as immediate S/R and often spark a reversal reaction.
- At a zone: wait for the reaction — double/triple bottoms or bullish engulfing at support; wick-sweeps rejecting at resistance. **Breakout rule:** consolidation at a box + explosive candle through it = "that previous resistance now becomes support" → trade the continuation.
- **Psychological round numbers** matter as targets: e.g. 31,000 ("the 31,000 psychological level"), 31,400 (cracked "at 3:50 PM").
- Previous daily high/low and old daily resistance blocks (e.g. "31,040") are primary targets on expansion days.

## 6. Entry Logic (The A+ Setup)

From `how-i-find-a-entries-using-the-emas-nq-futures`, `how-i-trade-price-action-and-momentum-together`, `the-trend-is-your-friend-heres-what-it-means`, `dont-let-greed-kill-your-trade-cut-early`:

1. **Establish the trend** (macro: 1H/4H + EMAs + EMA cross). E.g. "Only look for short setups" when the 1-hour shows heavy red candles and price closes below the 50 EMA.
2. **Wait for the push**, then **the retracement** — never chase breakouts: "Every time the market makes an explosive push higher, a retracement usually follows. If you buy right at the top of the breakout, you're going to sit through immediate drawdown."
3. **Confirmation at the level:** price rejects the EMA/zone with an **exhaustion wick** or a double top against the EMA line.
4. **Entry** as close to the level as possible, in the trend direction.
5. **Stop** just beyond the level (other side of EMA / below the wick) — typically **10–20 points**.
6. **Target** the prior push extreme (previous low/high), HTF zone, or psychological number — typically **50+ points**, sometimes 100+.
7. **The math he teaches:** "You are risking ~10-20 points to make 50+ points. That is exceptional risk management." His worked example: "If you enter near a low with an **11-point stop** and target the top of the range for a **55-point gain**, you're setting up a massive 1:5 risk-to-reward ratio... clean trades with practically no drawdown!"

- **Best entry = failed retracement, not breakout:** "The safest trades are *never* breakouts at the bottom or top of a range. The safest trades are **failed retracements.**" Wait for green candles to push back up to the EMAs, fail (lower high with top wicks), then enter — stop only ~10 points from the wick.
- **"Trade the wave":** in a real trend this setup prints repeatedly — "Push, retracement to the EMA, rejection wick, continuation." He re-enters on every 14 EMA respect (e.g. he rode a "300+ point afternoon pump" with repeated EMA-retracement longs).
- After a consolidation breakout: expect "a massive continuation move" when price breaks out of a tight range with momentum (consolidation → momentum is his cycle: "the market is consolidating right now. What usually comes after consolidation? Momentum.").

## 7. Exits & Trade Management

From `dont-let-greed-kill-your-trade-cut-early`, `the-nasdaq-ran-200-points-heres-how-i-traded-it`, `surviving-the-nq-chop-my-live-trading-breakdown`:

- **Cut a trade early** (before the hard stop) when it stops acting right: "If a trade does not immediately begin acting the way your thesis predicted, there is zero shame in closing it for a 5-to-10 point loss." Having the right direction "with the wrong entry can still cost you a blown account."
- **Exhaustion wick = exit trigger:** up 30 points short and the candle closes with a 35-point bottom wick sweeping a prior low → "Cut the trade... NQ loves to swipe lows, trap breakout traders, and immediately reverse 100 points in the other direction."
- **New macro-candle trap:** "When a new 30-minute or 1-hour candle opens, it almost always pushes in the opposite direction first to create a wick before resuming the trend." Don't enter at the extreme as a new HTF candle opens; if caught, cut and re-enter at the top of the retracement.
- **Momentum dies = exit:** "always cut it if the momentum dies" (he chopped a +15-point long that wouldn't follow through, then took the real short).
- **Take profits early in chop:** 50-point pop in a range → "you take your profit off the table and wait for the next setup."
- **Trailing drawdown awareness:** on funded accounts, "If you are up $500 in an open trade, and you let it pull back to break-even, you did not just lose profit—you actually lost $500 of your trailing draw down limit."
- In trends, let winners run to mapped targets (zone-to-zone); in ranges, exit at the opposite edge of the box.

## 8. Trading Big Moves (How He Rides Expansion Days)

From `nq-dropped-780-points-heres-how-i-traded-it`, `the-nasdaq-ran-200-points-heres-how-i-traded-it`, `how-i-frame-quality-setups-on-nasdaq-futures`:

- **CPI 8:30 AM example (Oct 14, 2026):** news printed a "245-point dump in a single candle"; equal highs at **30,852.75** swept. Open produced a 5-min doji with a 44-point top wick and ~50-point bottom wick (tug-of-war) — his first long continuation attempt got chopped; "you eat the chop, adapt, and move on." After ~an hour in a tight box, price broke lower and he rode repeated 14 EMA rejections through a **~780-point drop** (drop → retrace → continuation, over and over). After 2+ hours of failing to reclaim the 14 EMA, an aggressive candle **closed above it** around 3:00 PM → he flipped long, "riding a 60-point expansion to secure a clean **50-point bag**."
- **200-point up day (Sep 22):** 105-point opening 5-min range (low 30,763 / high 30,868); trading above yesterday's high = expansion brain. Longs off 14 EMA bounces targeting 31,000; one breakout attempt chopped for −10 ("Never sit and hope—cut it if it doesn't go!"); then a consolidation breakout above 30,995 ridden to the daily-chart resistance block at 31,040 (price tagged 31,048).
- **300+ point afternoon rally:** long taken at the 30-min chart bottom with stop "right below that previous 30-minute candle low at 30,502. If it takes that out, I'm out"; price dipped to 30,506.50 (4 points from the stop) before a "bazooka candle"; then re-longed every 14 EMA hold; exited at the 1-hour zone 30,794–30,813.
- **Framework:** momentum news/big range at open → wait out the first indecision → join the first clean EMA-respecting trend → re-enter on every EMA rejection → exit at the HTF zone or when price finally *closes* through the 14 EMA against you (reversal / "ending banger" long).
- **Eval strategy:** "The primary objective today was leveraging CPI momentum to knock out evaluation accounts... Once accounts are passed, **lock them immediately**."

## 9. Opening Range Breakout (ORB)

From `how-i-trade-the-opening-range-breakout-orb-strategy`, `my-full-am-trading-routine-before-i-take-any-trade`:

- Map the high/low of the **first 5-minute candle** (9:30–9:35), wick to wick; if logging on late, map the **15-minute ORB** (9:30–9:45). Horizontal lines only.
- Breakout entry: enter as price pushes through the ORB line — "especially if it breaks below your 14, 50, and 200 EMAs" for shorts.
- **Early entry (advanced):** if the first candle tags the EMAs, prints a long bottom wick and closes near the top, enter *before* the breakout line.
- **Retracement entry (conservative):** if price breaks out, retraces inside and chops — wait for a strong candle to push back through the ORB line using the EMAs as resistance, enter on the rejection.
- Stop: just beyond the EMAs or below the breakout candle's low. Target: nearest support/resistance to the left.
- "The higher the time frame you use for your ORB... the more conservative and reliable the signal tends to be, but it will require a slightly wider stop loss."
- ORB in action: shorts on the ORB-low break at 31,215 (+35 pts); a 126-point drop off a morning downside ORB; ORB-low reclaim ("swiped the ORB low at 29,365 and aggressively pushed back up *inside* the Opening Range") flips him from short to long; a broken ORB top (29,119) then acted as new support for a re-long.

## 10. Timeframe Framework

From `what-timeframes-i-actually-trade-and-why`, `what-a-90-point-bottom-wick-tells-you`, `10-years-in-what-id-do-differently`:

- **Analysis:** 1-hour and 4-hour (plus daily) — macro trend, S/R zones, prior daily high/low. **Execution:** 5-minute and 15-minute charts (also 30-min for wick-based HTF confirmation).
- Don't execute on HTF: a 1-hour-based stop can be "an 80+ point stop!... an unacceptable amount of risk for a day trader."
- **The asymmetry he hunts:** "a trade with a 15-point risk (based on the 5-minute chart) but targeting a massive 150-point profit (based on your 1-hour macro support zone)."
- **Watch the clock:** in the final ~10 minutes of a 1H/4H candle, "market makers will rapidly push price in the opposite direction to form a wick before the candle closes. If you enter right before the hourly close, you will frequently get stopped out."
- **Rubber-band effect:** if price is "extremely far away from the 1-hour EMAs, it acts like a stretched rubber band. Eventually, it will snap back violently toward the EMAs" — even if the 5-min looks perfectly aligned.
- Learned the hard way: "If you are only staring at the 5-minute chart, you are going to get trapped... you might short the bottom of a candle... only to watch it rip 400 points straight back up because you didn't realize you were sitting right on a major 1-hour support level. **You have to wait for the higher time frame candles to develop, form their wicks, and show you the true trend.**"

## 11. Macro Calendar Context

Recurring theme across recaps (`the-double-bottom-was-the-low-all-day`, `i-knew-it-would-chop-before-the-open`, `surviving-the-nq-chop-my-live-trading-breakdown`, `nq-dropped-780-points-heres-how-i-traded-it`):

- Track the calendar: **CPI (8:30 AM), FOMC statement/minutes, NFP Friday, big tech earnings (e.g. Micron 4:00 PM), political speakers (Trump 1:00 PM), geopolitical news.**
- "When there are heavy macro catalysts on the schedule, the market often chops around and waits for the dust to settle before choosing a true direction."
- "The market often consolidates ahead of major jobs data."
- News drops can instantly invalidate a setup (an unexpected 1:00 PM Trump appearance caused a sudden drop and two stop-outs on Aug 27) — adapt and pivot.
