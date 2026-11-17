---
title: Strategy Playbook
trader: denny
topics:
 - risk
 - entries
 - exits
 - sizing
 - sessions
---

## Who / What He Trades

- **Market:** Nasdaq futures (**NQ**) almost exclusively. He originally found his signature setup trading silver; when silver lost volatility he moved the strategy to NQ — where he briefly returns when NQ gets too choppy.
- **Vehicle:** Prop firm futures accounts (Apex, Tradeify, Lucid, My Funded Futures, IQ Capital, Blue Sky, Vest, etc.), mostly 50K accounts, copied across many accounts with a **trade copier** — or traded **one account at a time** (see Scaling & The Multi-Account Business Model).
- **Contract sizing:** typically 1–3 contracts per account, occasionally up to 5–6 on his highest-conviction trades — which he himself flags as *"Probably a bit too much size."*

## Timeframes

- **5-minute chart** = the main decision timeframe: ranges/chop boxes, bull/bear flags, "Two in the Chamber," Globex first-candle, EMA trend reads.
- **1-minute chart** = execution/micro-entry only: *"dropping down to the 1-minute time frame is the absolute best way to see the micro-touches and actually execute the scalps"*.
- **4-hour chart** = macro context, e.g. spotting an overnight channel before the NY open.
- Explicit rule: ranges are drawn on the **5-minute only** — *"I map out my ranges on the 5-minute time frame, and the 5-minute only. I do not mark my ranges on the 1-minute chart"*.

## Indicators & Chart Setup

- **9 EMA** (red line) — short-term momentum / pullback retest level.
- **21 EMA** (blue line) — secondary trend filter. Key read: **9 EMA crossing below/above 21 EMA = trend shift**.
- **VWAP** (purple line) — magnet/target and bias filter ("price refused to close above the VWAP" = downtrend intact).
- **Kill Zones & Pivots by Trade for OP** (TradingView) — draws session boxes (Asia, London, NY AM, NY PM — only these four enabled) and auto-plots **Asia High/Low, London High/Low, NY AM High/Low, PDH/PDL, PWH/PWL, midlines** with statistical **hit-rate percentages** he trusts.
- **Round/psychological numbers:** *"Big, round numbers like 500 are massive psychological levels"*.
- Tools: Long/Short Position overlay to map SL/TP before entry, on-chart text notes stating the risk/reward of the pending trade, rectangles for consolidation boxes, horizontal lines, trendlines/channels.

## Sessions & Timing Habits

- Trades multiple sessions live on stream: **Asia/Globex open (~5:45–10:00 PM ET), London (6:00–9:00 AM ET), NY open (9:30 AM ET)** — and often only trades ~1–2 hours a day: *"Before coming to the BDH, I traded maybe one to two hours a day, max, and then I was completely done"*.
- Kill Zones indicator limited to the four main sessions; those are "the only sessions I look for trades in."
- **Avoid Globex 6:00–8:00 PM for the reversal setup:** *"Do not trade this strategy during Globex… it's notoriously choppy… I avoid it entirely"*.
- London chop zones repeatedly caused losses; he marks session highs/lows as targets when trending.
- Known no-trade windows: **news releases (CPI 8:30 AM)** and **election/major-event nights** — see the Rules section.

## Core Setups

### A. "Two in the Chamber" (2ITC) — signature reversal setup

The setup he says he "actually trades":

1. **Long:** two consecutive 5-min candles each making a **new session low** (more = higher probability). The next candle sweeps yet another new session low but **flips and closes green** → enter long at the open of the next candle.
2. **Short:** mirror image — consecutive new session highs, trigger candle makes a new high but **closes red** → short.
3. **Stop:** exactly **one tick below/above the trigger candle's wick**. *"Sometimes the next candle will wick down and miss your stop by a single tick before ripping upward."*
4. **Target:** strict **1:1 risk-to-reward** — *"on NQ, a 1:1 trade is often already a solid profit. Going for more than that is just getting greedy."*
5. Difference vs a plain 3-bar reversal: the trigger candle **MUST sweep** the session extreme before reversing — *"That sweep is the secret sauce."*

### B. Bull / Bear Flags (trend continuation)

- Establish macro trend first ("the macro trend was clearly moving down").
- Flag forms after an impulse; **confirmation = price fails to take out the prior high/low**, then **breaks and closes outside the flag structure**.
- Enter on the break or on a pullback; ride **10–20 points** ("base hits"); drop to 1-min for flags and use a **VWAP break as confirmation**.
- Bigger consolidation inside the flag = bigger breakout expected.
- In strong trends (price entirely below 9 EMA + 21 EMA + VWAP): *"your job is simply to trade the flags and let the momentum work for you"*.

### C. Chop Box / Range Scalping

1. **Identify the range on the 5-min chart:** multiple touches required — "when price touches the top of a range five times and refuses to break out… it is going to keep consolidating."
2. **Execute on the 1-min chart:** buy the bottom line, sell the top line.
3. **Strict small target** on every scalp (about 10 points); bank the base hits.
4. **Stop:** right outside the wick/boundary; if price breaks and closes outside the box, take the loss and stop.
5. Repeat until the range fails. In chop he'd rather not trade at all: *"The absolute easiest way to trade chop is to not touch a button"*.

### D. The Globex Strategy (first candle of the Globex session)

- Watch the **very first 5-minute candle of the Globex session**: closes **red → short**, closes **green → long**; *"That is the only confluence you need for this specific setup"* (learned from a mentor).
- **Hard stop on the other side of that initial candle.**
- **Trailing rule:** *"trail your take-profit by two units of risk"* — trail the stop in increments of 2R; in expansion markets that lets the runner develop.
- Held through the NY open on a trend day, the 2R trail turns small initial risk into a large multiple.

### E. EMA-Retest Trend Entries

- In a trend, **wait for the pullback to the 9 EMA** and enter on the rejection with a target at the next liquidity level (Asia Low, London High, PDH/PWH, VWAP).
- Bias flip rule: don't reverse on a single poke — *"You want to see the candle close securely above the 21 EMA and the VWAP to confirm the trend is real"*; entering between the EMAs is "trickery." A 5-min candle **closing** above both EMAs followed by the 9/21 cross = momentum flipped to bulls.
- Targets set at mapped levels: session extremes and the PDH/PWH "liquidity pool."

### F. Level / Liquidity Trading

- Session highs/lows and previous day/week highs/lows act as **"draws on liquidity"** — used as **take-profit magnets** (long into NY AM High, London High, PDH/PWH) and **stop hiders** (*"place my stop loss just below a previously tagged level… if price drops back below that level, the setup is dead"*).
- A level that gets tagged is "dead" — stop watching it. Untagged levels keep extending until hit. He trusts the indicator's session hit-rate statistics when choosing which untagged level to target.
- Chained logic: as each level tags out, price's "draw" shifts to the next untagged level — he rides the sequence.

### G. Three-Bar Reversal (news/panic bottoms)

- At the absolute bottom of a violent dump the three-bar reversal prints — stopping just beyond the panic extreme gives tiny risk against the distance back to the next session level.

### H. MOC (Market-on-Close) Trade

- Unconventional: reads the **3:50 PM candle** and mirrors the direction of the **9:30 AM opening candle** into the close.

## Exits, Profit Taking & Trailing

- **Base hits:** 10–20 points is the standard scalp/flag target.
- **1:1 RR** on reversal setups (2ITC); **2:1** on the Globex setup.
- **Trail by two units of risk** in trending/expansion markets; he had tightened trails during a choppy summer and switched back when expansion returned.
- **"Take the money and walk away"** when momentum stalls: *"if you see momentum stalling and price starting to come back against you, take the money and walk away… Never let a solid green trade turn red out of greed"*.
- Manual cut-downs are acceptable risk management: cutting a wider stop early to save capital; bailing manually when a runner starts pulling back instead of "letting hope take over".
- Secure-payout exits: when a payout is on the line, banking part of a runner early matters more than squeezing every point.

## How He Handles Chop vs Trend Days

- **Chop/range:** (1) best option — don't trade, wait for breakout; (2) if trading, play only the extreme boundaries for small base hits. Consolidation = "building energy for a breakout"; the eventual break direction is the signal: a downtrend that consolidates then **breaks up = reversal**, an uptrend that consolidates then **breaks down = reversal**. Wicks through a level that **don't close** beyond it = still valid support.
- **Trend/expansion days:** trade flags with the trend all session, use 2R trailing, let runners develop.
- His honest self-assessment: *"I hate playing the chop! I know everybody says 'the range is your friend,' but the range is not my friend"*.

## Scaling & The Multi-Account Business Model

- **Trade copier** across 20+ funded accounts multiplies every setup — one good trade compounds across the whole account stack at once.
- **One account at a time** (his default discipline): *"I trade one account at a time. I don't always blast the trade copier across all my accounts at once. I cycle through them to manage risk and keep my focus sharp"*. Copier used selectively, only for the highest-conviction setups.
- With many accounts and the one-trade-per-account rule, he aims for about **five total trades a day**, prioritizing accounts closest to a payout or eval pass.
- Known scale plan: pass evals (often in 1 day where rules allow), build buffer, request payouts, repeat — "Small wins, lots of accounts, and compounding" turns modest eval fees into multiples in payouts.
- Risk isolation: when he wanted to gamble a news release, he **bought a separate single account** instead of copying it, so the main portfolio stayed green.

## Session Playbook (as observed across his content)

| Session | What he does |
|---|---|
| Globex open 6:00 PM | First 5-min candle directional trade; hard stop beyond that candle; trail 2R in trends. Skip 6–8 PM chop for 2ITC. |
| Asia session | 2ITC reversals, EMA/VWAP + round-number shorts/longs, Asia High/Low as targets; fast scalps. |
| London 6–9 AM | Bull/bear flags with VWAP confirmation; often choppy — known loss zone; London High/Low as targets. |
| NY open 9:30 AM | Biggest single trades; VWAP-rejection shorts; avoid trading right before 8:30 news. |
| 3:50 PM | MOC mirror-trade of the 9:30 candle. |

## Honest Limitations Noted in the Articles

The articles are written video recaps, not a formal course. Exact contract counts and stop distances vary by account size and day, and dollar targets shift with volatility. Everything above is only what the articles explicitly state or show; nothing has been invented.
