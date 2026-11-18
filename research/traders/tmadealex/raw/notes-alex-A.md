# TMade Alex: Batch A notes (13 oldest streams)

Streams covered: WMKQNfq5DiA, 6WQg_3ZWiV8, DRHZYqPZ3vQ (NY AM, "ICT ORDERFLOW / NEW STRATEGY" era, mid/late September), IsdqCc0cdhg, Cm5O075GC8Y, 0LZeoBF6kQk, E6x-AiXBxp0, -kf7KmKAxak (NY AM, late Oct to early Nov), UMLYsb11ad8, R7YkqakQePQ, RfEKBQV8cUU, EhuYu1Y0GNI, JyLeJ91Gyvs (Asia session).

**Who is speaking.** Many of these streams have more than one host, so a quote is only attributed to Alex when the context shows it is him.
- WMKQ, 6WQg and DRHZ are Alex alone.
- IsdqCc0 and Cm5O are Alex with guests.
- UMLY is Alex with co-host Drew.
- In 0LZe Alex is absent for the first ~2 hours. A chat reply at [69:20] says "No Alex today". He arrives at about [122:40].
- E6x is Alex with Zach "Zarb" (the "Waso liquidity" / Liquidity Lab guy), then Clay (Top One Futures) and Forex Ike.
- -kf7 is Alex with Zach.
- R7Yk, RfEK, EhuYu and JyLe (the Asia streams) are run by other TMade hosts ("Air-Con", Drew and others), not Alex. They are summarised separately at the end (section 9) and are not counted as Alex's rules.

---

## 0. How his approach changes across the batch (read this first)

- **Phase 1 (WMKQ): pure ICT, many timeframes.**
  - His trade zones combine the midnight open, an hourly FVG, an hourly breaker and the "8:30 data wick low" (WMKQ [10:00]-[10:20]).
  - He triggers with 3-minute, 1-minute or 30-second inversions (IFVG) (WMKQ [52:40], [101:00]).
  - He checks for 15-minute ES/NQ SMT/divergence (WMKQ [21:40]) and reads 4-hour highs/lows and 4-hour equilibrium (WMKQ [87:40]-[88:20]).
  - He frames the market in premium and discount (WMKQ [75:00]-[75:40]).
  - He calls himself "an ICT trader" who uses VWAP only to see where retail traders get in (WMKQ [75:40]).
- **Phase 2 (6WQg, DRHZ): the "NEW STRATEGY", a backtested 15-minute + 1-minute one-to-one model.**
  - He drops the 4-hour PO3, ES, and hourly/4-hour gaps. He uses only the NQ 1-minute and 15-minute charts (6WQg [03:20], [17:20]).
  - The 15-minute chart sets the bias. The 1-minute change in state of delivery (CISD) gives the entry. He targets a fixed 1:1 or the 15-minute gap (6WQg [17:00]-[17:20]).
  - The "A+" version is a 15-minute sweep, then a 1-minute CISD, then a retest, aimed at an unfilled 15-minute gap (6WQg [58:40]; DRHZ [30:20]).
  - In backtests it won 65-70% of trades and made "up 10K in one week of trading on that back testing session" (6WQg [29:20]).
  - He calls it "very different from how I've traded in the past" (6WQg [01:40]).
- **Phase 3 (IsdqCc0 onward): order flow, volume profile and dealer gamma.**
  - He moves to delta/footprint "aggressive buyers and sellers", absorption, weekly and overnight value areas, POC, LVNs (low-volume nodes) and single prints (IsdqCc0 [71:00]-[75:00]; -kf7 [59:00]-[60:40]).
  - He uses dealer gamma levels (put wall, call wall, zero gamma) from GexLabs, a tool he co-owns with Yush (E6x [230:20]-[230:40]).
  - He keeps ICT pieces only as context: the 15-minute FVG as a magnet, midnight open, hourly/4-hour sweeps and SMT (E6x [245:00]; -kf7 [126:40]).
  - Quotes from this period: "every day I come to the charts and I realize more and more throw away ICT. Throw away IB. Throw away all the noise and just order flow it up" (IsdqCc0 [101:00]); "I'm done trading IB" (E6x [153:00]).
  - He builds his own Deep Charts indicator suite, plus "box" session ranges: breakfast box, lunchbox, sushi box and midnight snack (-kf7 [40:00]-[40:20]).
- **The thread through all three phases** is patience, waiting for the new candle (hourly or 15-minute), refusing to chase, and reading ES against NQ.

---

## 1. Method & concepts

### Phase 1: ICT orderflow (Sept)
- His long zone is where several levels overlap: "we have midnight open, we have an hourly fair value gap, and we have an hourly breaker. So if price wants to hold, it's going to be in this area" (WMKQ [10:00]).
- He uses liquidity taken from the news candle: "We've also taken that data wick low, the 830 low" (WMKQ [10:20]).
- VWAP is a hurdle to clear: "We need to break above VWAP here" (WMKQ [10:20]).
- He needs inversions to enter: "Problem is there's no inversions or anything guys. So got to be careful here" (WMKQ [11:20]).
- "there's no three-minute inversion here, and that's what I need for my trades. So that's kind of why I got out" (WMKQ [52:40]).
- Example of stacked context: a 1-minute inversion closed above gives the entry, with the stop at the protected low. "You had a 15-minute sweep, hourly sweep. The 4 hour is the only thing we don't have" (WMKQ [23:20]).
- He uses 15-minute ES/NQ divergence (SMT) as a trigger for a small-risk long (WMKQ [21:40]).
- On bias against risk-to-reward: "my bias is bullish. I can't really be shorting this. Even if the risk reward is really good, I can't short this" (WMKQ [30:40]). He then took the short anyway because "I'm someone that likes really good deals" and lost (WMKQ [31:40], [36:20]).
- He doesn't like shorting after a high is taken (WMKQ [35:40]). The exception is a minor high: "I don't care about this high because that high is not a higher time frame high" (WMKQ [37:00]).
- He reads FVG quality by its overlap: "the only part of that gap I care about, which is the overlapping part" (WMKQ [38:40]).
- 15-minute closes show intent: closing in "the upper part of the 50% of that wick" is bullish intent (WMKQ [36:40]).
- Premium and discount: "You're going to take the low to the high of the move... midpoint... Anything below midpoint discount. Anything above is premium" (WMKQ [99:00]).
- "you're going to look for the first PDA as you get into discount because buyers should be defending discount" (WMKQ [75:20]).
- If that first PDA fails, the next area is the lower quadrant of discount (Fibonacci), which lined up with VWAP (WMKQ [75:20]-[75:40]).
- "I'm not a VWAP trader. I'm an ICT trader, but I use it to see where our lovely retail traders are getting into the trades" (WMKQ [75:40]).
- Daily-chart idea (gold): price failed to get above 50% of the previous daily wick. Entry was a 1-minute inversion with the stop above the wick (WMKQ [61:40], [77:20]).
- On timeframes: "if I'm using a daily candle to get into a short... I don't want to catch the falling knife on a daily move, especially when I'm trading on a three or one minute". He waits for a retest of a nearby PDA (WMKQ [76:00]-[76:20]).
- 4-hour structure: "a lot of times 4-hour candles will just take out previous 4hour highs and then pull back into 50%". In a bull market you can "draw out your 4hour discount and premium" (WMKQ [88:00]-[88:20]).
- New candles carry information: "Usually hourly candle open will give us more information" (WMKQ [90:00]). He also reads ES's hourly closure to set the NQ direction (WMKQ [90:00]-[90:20]).
- Fast-timeframe rule: "a 15-minute sweep unlocks a 30-second inversion" (WMKQ [101:00]). He would have bought after the 15-minute low was taken, with 1-minute SMT, at the new 11 a.m. hour (WMKQ [101:00]-[101:20]).
- Direction after sweeps: "I want to be short after an hourly high taken, not after hourly low taken" (WMKQ [116:00]).
- A 3-minute inversion that "held many times, no bodies closed below it" shows buyers are present. The retest is the entry (WMKQ [98:20]).
- Alternative long: "wait for price to close above here, tap into this fair value gap, pull back into the breaker... get long off this breaker" (closure and retest) (WMKQ [123:00]).
- A clean confluence long: 4-hour lows swept (also London low) into an hourly FVG (WMKQ [124:40]).

### Phase 2: the "new strategy" (15m + 1m, one-to-ones)
- "this strategy doesn't care about the 4 hour PO3. It doesn't care about ES... it just cares about the one minute chart on NQ... and the 15-minute chart" (6WQg [03:20]).
- "It is looking for one:one trades using the one minute and the 15-minute. The 15-minute gives us our higher time frame bias and the one minute gives us our entries. That's all it is... No hourly gaps, 4hour gaps, none of that stuff" (6WQg [17:00]-[17:20]).
- Why 1:1: "it is much easier to find areas in the chart where price should at least do a one one than... one to three, one to four, one to five without you taking some draw down, being in some heat" (6WQg [26:40]-[27:00]).
- He backtested it with community members (2Gen, Michael). "even with a 65 to 70% win rate, we're up 10K in one week... I've traded the PO3. I've traded so many things... this is one of the most rewarding strategies" (6WQg [29:20]-[29:40]).
- He says red days were "very rare" in the backtest, so he keeps taking the trades while down on the day (6WQg [64:40]).
- The core entry structure is the 1-minute change in state of delivery (CISD), entered on its retest. "There was no retest of this change state delivery here" means no trade (6WQg [05:20]-[05:40]).
- Requirement: "the strategy requires really the 15-minute sweep, but also it requires the 15-minute gaps" (6WQg [112:40]).
- The 15-minute gap is the target: "Remember guys, we want to target gaps" (DRHZ [89:20]).
- With no new 15-minute gap, "the strategy just tells us to sit and wait. We have to wait for more structure on the 15-minute chart" (6WQg [22:40]).
- "you really can't do anything until you get your gaps" (DRHZ [61:20]).
- He scouts 1:1s off order blocks: "you could take the order block entry, order block stop, and you could look for a one to one". Stacked order blocks add confidence (6WQg [84:00]-[84:40]).
- He uses breakers for scalps: "if this candle here would have taken this low, then coming up here would make this a breaker... a stop below that breaker... looking for a one to one. But without that breaker there, I can't be certain" (6WQg [31:00]-[31:20]).
- He also marks the previous daily wick's 0.5 (consequent encroachment). Holding above a big wick's midpoint means "showing signs that we are bullish" (6WQg [18:40]-[19:20]).
- All-time highs are harder for the model because there are few 15-minute gaps. He wanted to backtest ATH conditions specifically (6WQg [88:00], [98:40]).
- Model language in DRHZ: "15-minute reversal TMade models" (DRHZ [139:40]), "This model is way, way too good" (DRHZ [15:40]).
- He spots a 15-minute bearish breaker plus 15-minute gap ("your 15-minute unicorn") holding price down (DRHZ [62:00]-[63:00]).
- AMD (accumulation, manipulation, distribution) framing: a stalled breakout "makes me think, is this an accumulation for a manipulation and a distribution back down?" (DRHZ [81:20]).
- New candle opens: "I would much rather open up here than open down here because that candle needs to have an open, has to have a wick" (DRHZ [112:00]).
- The open is a liquidity event: "open sweeps the previous 15-minute low tapping into that 15-minute gap and then continues higher" (DRHZ [100:40]).

### Phase 3: order flow, volume profile, gamma (late Oct onward)
- Late-October routine, before IB was dropped: "I usually wait for the bounce and then a retest of value area and then we take it long" (IsdqCc0 [19:00]).
- In the same stream he blends in IB: "combining order flow right now with the IB data cuz obviously at 10:21, we should be going higher" (IsdqCc0 [37:00]).
- Value-area rotation rule: "if you open outside of a value area and you go explore into it, you very easily can rotate into the point of control of it" (IsdqCc0 [74:40]-[75:00]).
- Holding inside previous-week value means "we should run towards point of control of the previous week" (IsdqCc0 [71:00]-[71:20]).
- Low-volume areas: "We ran straight through all the low volume... Now we're getting to a high volume area" (IsdqCc0 [73:40]-[74:00]). Low-volume nodes on the weekly mean price "would move quickly through this whole area" (IsdqCc0 [111:20]-[112:00]).
- "Volume is money" (IsdqCc0 [111:00]).
- "if you're not looking at weekly, monthly, previous volume profiles, you're literally trading blind" (IsdqCc0 [74:20]).
- Delta and absorption: "Aggressive sellers got involved here. They couldn't push it back below previous weekly value area low. So they are accepting value inside of previous week" (IsdqCc0 [71:00]).
- On a failed short: "we don't have any aggressive sellers here. You see on the delta, there's no aggressive selling" (IsdqCc0 [19:40]).
- ICT versus order flow, his own lesson: he waited for an untouched 15-minute FVG "because I understand ICT", yet "from an order flow perspective... Aggressive sellers at the open got absorbed. There's buyers already here. We don't really need to go into that 15-minute gap" (IsdqCc0 [100:20]-[101:00]).
- IB (initial balance): "even though I hate trading it now because I feel like it's way too manipulated" (IsdqCc0 [74:20]-[74:40]).
- "I know successful IB traders, guys. I made 100K trading IB... it's actual trash now. The market has shifted" (E6x [155:00]). "since August... August killed the IB. The data on it... the IB is literally dead" (E6x [155:20]).
- "I'm done trading IB. IB's [trash]... If I would have just traded value and I would have just traded my order flow, I would have been long" (E6x [153:00]-[153:20]).
- "I'm a continuation trader. That's how I made 200K" (E6x [153:40]).
- Profile shapes:
  - A "P" profile is "made to trap sellers"; if price comes down aggressively and gets back inside, that is a cue to trade higher. A flat or even profile means chop (0LZe [110:40]-[111:00]) (speaker likely Alex, but it falls in the window where Alex was said to be absent; partly unclear).
  - "For the b, it's the long tail with a b down here... you look for the push higher, a fail, and then you can take it to continue lower" (E6x [68:20]).
- POC position: "when point of control is at the high of the range... if we're holding above it, we're pretty bullish" (Cm5O [96:00]-[96:20]).
- Overnight session is defined as "6:00 p.m. open to 9:30". "A lot of times we'll open and manipulate to value area high or value area low or even point of control of the overnight and then rip" (his take on the "Judas swing") (-kf7 [22:40]-[23:20]).
- 10 a.m. manipulation: "I'm almost always going to be looking for shorts here at this time because into 10:00 a.m. we usually manipulate. That new 4-hour candle opens and it manipulates. And if we're going to go higher, the manipulation should be lower" (-kf7 [47:40]-[48:00]).
- He names the ICT macro: "like 9:50 to 10:10... the ICT macro, I like to take this pullback" (-kf7 [48:40]).
- FVG = LVN: "a fair value gap... It's basically a low volume area... more aggression from the buyers or from the sellers" (-kf7 [59:20]-[59:40]).
- "Sometimes you don't reach it because the low volume node is actually below 50% of the gap" (-kf7 [60:00]). "Single prints is pretty much the same thing" (-kf7 [60:20]).
- In a big gap he waits for the actual LVN rather than the first touch: "some people might try to take the hourly as soon as it taps. I would wait for us to... get down to the actual low volume" (E6x [28:20]-[28:40]).
- An LVN called pre-market produced "a 60 point move, 70 point move right off that low volume" (E6x [39:00]-[39:20]).
- The 15-minute FVG stays a magnet: "That 15-minute value gap is sort of a magnet for price a lot of times" (E6x [245:00]). "If that 15-minute gap wasn't there, I would take the short" (E6x [240:00]).
- "I don't mind like a 5minute but a 15-minute is annoying cuz we might want to take that high" (E6x [257:40]).
- Gamma (dealer) levels:
  - Put wall: "a market maker level where market makers are going to get long" (E6x [154:20]).
  - "this is called a put wall because they're going to buy into this move... because the way that they hedge their positions" (E6x [230:20]-[230:40]).
  - Below zero gamma on both ES and NQ, "the shorts are in play" (E6x [154:20]).
  - Call wall: "I'm not going to try the longs here because the call wall is right above" (Cm5O [20:40]).
  - "I cannot short anything into a put wall... you'll make more money over time trading with the put [wall]" (E6x [201:20]).
  - Zero gamma as support: "there's a zero gamma level there where market makers should try to hold it as support" (-kf7 [47:20]).
  - He also notes gamma levels "move around" intraday but big positioning stays a level (Cm5O [38:20]-[38:40]).
- Fade the obvious gap: "every time there's a new week opening gap that hasn't been taken... before New York session, we go against it" (E6x [45:00]).
- "If my grandmother could spot an opening gap... I can't take that trade... too many people are shorting into it. And I've been that guy early in my career... getting completely destroyed" (E6x [246:00]-[246:20]).
- "if you're strictly ICT, you're gullible... into that new week opening gap or into some gap" (E6x [246:40]).
- On news: "Anytime news comes out that's bearish... the market just goes higher. It just goes to show you how much they try to mess with us with our psychology" (E6x [73:00]).
- VWAP placement: "I don't like it when the VWAP is sitting at the low of the range... I like it when the VWAPs are sitting in the middle of the range" (0LZe [161:40]).
- "How do you trade the VWAP? Well, the VWAP is just there as support and resistance" (-kf7 [162:20]).
- ES versus NQ:
  - SMT at the IB: "A failure to take IB high while ES already did is an SMT on the IB side" (-kf7 [102:00]).
  - "ES is stronger, man. And I don't know why I'm not just long today... if I'm long biased, ES is the stronger instrument" (-kf7 [83:20]).
  - On a rangy day ES respected gamma levels while NQ chopped at zero gamma: "It's just way easier to trade" (0LZe [111:20]-[112:00]) (speaker unclear; this is before Alex appears).
- Double break of the IB high and low is rare: "a double break is so rare. We shouldn't be seeing that" (E6x [117:40]).
- Session "boxes": "It's basically just the hourly, the first hourly candle of all those sessions. So 9:30 to 10:30 [breakfast box], 12 to 1 [lunchbox], and then 8 to 9 [sushi box]... midnight snack... 12 to 1" (-kf7 [40:00]-[40:20]).
- He plots a box mid and a box VWAP, e.g. "breakfast mid and breakfast VWAP", "lunchbox VWAP at 50% of the range" (Cm5O [26:00], [30:20]).
- Lunchbox behaviour:
  - "that's also how the lunchbox works, right? You should trade back into 50% and the VWAP before taking the low" (E6x [212:00]).
  - "Usually the way the lunchbox works is I can get a retracement up to the VWAP or just a real retracement... somewhere in this box" (E6x [219:40]).
  - "Lunchbox doesn't really work out for a good trade until like 12:45... I look at the last 20 minutes of lunchbox really for the idea of where we're going" (-kf7 [44:40]-[45:00]).
  - He also reads a "high to low formation" on the lunchbox (E6x [201:20], [258:00]).

---

## 2. Setup & entry criteria

### "New strategy" checklist (Phase 2, as he states it)
1. Bias comes from the 15-minute chart (6WQg [17:20]).
2. Look for a 15-minute liquidity sweep: a previous 15-minute high or low is taken (6WQg [45:40], [58:40]).
3. Find an unfilled 15-minute gap in the trade direction to target (6WQg [58:40]; DRHZ [89:20]).
4. Wait for a 1-minute CISD (change in state of delivery) (6WQg [81:20]-[82:00]).
5. Enter on the retest of that CISD or the 1-minute gap. Do not chase: "chasing it here skews your stop. You don't get a one to one anymore. So we had to wait for that pullback" (6WQg [82:00]).
6. Target a 1:1 and hold a runner to the 15-minute gap (6WQg [58:40]).

More detail on these steps:
- A+ definition: "15-minute sweep with a gap below. This is the A+ strategy" (6WQg [58:40]). "that A+ setup is that 15-minute sweep. It just adds another confident leg to this move" (6WQg [61:40]).
- "the A+ setup is... a change of state delivery... but then some sort of retest of it to continue to this gap" (DRHZ [30:20]-[30:40]).
- The 1-minute low is not enough. "for me personally, taking these lows, this one minute low, isn't enough. I want to see that 15-minute low get taken... That's A+. Without that, it becomes... harder for me to take this trade" (DRHZ [138:20]-[139:00]).
- Skip when liquidity sits the other way: "We don't want to take trades when there's a draw in the opposite direction that we're trying to go in" (equal highs untaken) (6WQg [12:20]).
- Skip shorting into a fresh sweep of lows: "I tried to short into after a sweep, which is completely the wrong idea" (6WQg [92:40]).
- Invalidation while in a trade: if the new 15-minute candle takes out the previous 15-minute high against a short, "we're out of the trade" (6WQg [53:40]).
- 30-second inversion add-on: "we didn't get a change of state, but we did get a 15-minute sweep and a 30-second inversion. And we have this 15-minute gap that should be filled" (6WQg [47:40]).
- He confirms with the 15-minute close; timing entries "right around this time" as the 15-minute candle closes (6WQg [52:00]).
- He splits accounts by setup quality: trades that are "not the model" go only on evals, never on funded accounts. "That's why I did this on an eval only, not on my funded accounts because it's not part of the strategy and is not A+" (DRHZ [41:00]; also [39:00], [44:40]).
- Funded accounts only get the model: "as soon as we get a nice movement, nice displacement somewhere, I will be probably trading multiple contracts on the funded accounts" (DRHZ [48:00]).

### Phase 1 entry triggers
- 1-minute or 3-minute IFVG closure with the stop at the protected low (WMKQ [23:20], [98:20]-[98:40]).
- 15-minute ES/NQ divergence for a cheap shot before 10 a.m. (WMKQ [21:20]-[21:40]).
- After a 15-minute sweep, a 30-second inversion plus 1-minute SMT at the new hour (WMKQ [101:00]-[101:20]).
- Close above, tap of the FVG, retest of the breaker (WMKQ [123:00]).

### Phase 3 entry logic
- Wait for aggression that fails: "I'm looking for aggressiveness into these areas that gets actually stopped in their path" (E6x [150:20]). "I don't want to see a slowly going there. I hate that" (E6x [239:00]).
- Sweep, fail, reclaim: "I really shouldn't have entered unless we saw a sweep of 660s, a fail, and then a push back into the range, and then I would have taken the long" (E6x [139:40]).
- The best trade of the E6x day: "Failure to go lower... value area low there... a failure to go lower with a push back inside after the IB take, ES couldn't take the IB. That is a beautiful trade" (E6x [181:00]).
- At a value-area edge: "I want to see aggression into this value area low, slightly sweep under and then a reclaim and we can go long. If not, I'm gonna have to take a breakout again... I've got clapped twice" (-kf7 [96:00]-[96:20]).
- Short-side conditions at the highs: "it would have to be a push above the value area high. And I would like to see us tap 15-minute gap, fail to go higher, and then we could short it back to VWAP or point of control" (Cm5O [95:40]-[96:00]).
- Needs a level underneath before going long: "because there's no level for me to use with that value area low there, I'm going to stay out of it" (Cm5O [66:20]-[66:40]).
- Sweep-indicator rule: "I don't want to short after we sweep an hourly low or after we sweep an hourly or 4 hour low or after we sweep a 15-minute low... I want to wait for retracements" (-kf7 [126:40]-[127:00]).
- After an hourly high sweep he takes a quick short (-kf7 [125:40]-[126:00]).
- Wait for the new candle: "I'm waiting for that new 15-minute candle. See what happens" (E6x [131:00]).
- "I want to see that new 15-minute candle open though. That's the only thing why I'm kind of hesitating" (E6x [128:40]).
- Longs below the midnight open: "if I want to get long, ideally I want to get long below the midnight open" (E6x [36:40]).
- His overnight long thesis (Alex): "we had a gamma level literally at previous day low... where the market makers are supposed to be positioning... we bounced right off of it" (-kf7 [12:00]).
- Things that make him skip:
  - A 15-minute FVG on the other side acting as a draw (E6x [240:00], [257:40]).
  - A put wall underneath a short (E6x [201:20]).
  - A call wall above a long (Cm5O [20:40]).
  - The IB still intact on the side he would trade into (E6x [140:40], [154:40]).
  - An obvious gap that "my grandmother could spot" (E6x [246:00]).
  - Buying in premium (Cm5O [96:00]).
- A+ versus "question-mark" trades: "I took maybe eight trades today... maybe one or two of them were where I was like, 'All right, this is a beautiful'... a lot of the ones I'm like, 'This could work. This could not work'". He took those on evals and "wouldn't have touched it on a funded today" (E6x [284:40]-[285:00]).

---

## 3. Stops, targets, management

- Example from Phase 1: "920, stop at 910, 10 points" on NQ (WMKQ [09:40]).
- On the same trade he scaled out: "I'm going to take five off just because my entry was not good... sell three more here" (WMKQ [10:40], [11:40]).
- He then trailed the stop to 920: "Your stop loss is going to be 920". The trade ran from 920 to 951, "30 points of profit" (WMKQ [12:00], [13:40]).
- Risk-dollar framing:
  - "$240 risk for a potential $2,000 worth of profit. I would do that all day, every day" (WMKQ [06:20]-[06:40]).
  - "100 bucks to make 400" (WMKQ [21:20]).
  - "another 150 to 200 bucks of risk for maybe $1,000 plus" (WMKQ [38:20]).
- Minimum R:R he wants: "almost a one one, it's not really worth it... a $150 to $200 risk for a $400 profit... a little over 2R" (WMKQ [93:20]-[93:40]).
- He takes small losses: "we take it as a paper cut" (WMKQ [21:40]-[22:00]).
- "What I've already made in this trade is probably what I would lose. So I'm not really worried" (house-money logic) (WMKQ [18:00]).
- Phase 2 targets:
  - A fixed 1:1, e.g. "a four point risk or five point risk for a five point profit" (6WQg [30:00]-[30:20]).
  - "130 to 130", "160 to 160" (6WQg [11:40], [31:00]).
  - "That was a 904 to 908. That was a four-point risk" (6WQg [92:20]).
  - A tighter-stop alternative of "a four point stop, five point stop" at a better entry (6WQg [53:00]).
- Phase 2 partials: "took one off there. We hold the other one all the way down to fill this gap". That trade became "a one to two" (6WQg [58:40], [60:20]).
- Mistake from not banking the 1:1: "I didn't take off the one:1. I actually let it come back and take me out. That's my mistake. I told you guys to break even if you're in this" (6WQg [81:40]).
- Stop discipline: "I just don't want to move my stop anymore. I'll just take the loss if it happens" (6WQg [52:40]).
- Adds:
  - He adds at better prices: "I'm going to add into this position because it's really good risk-to-reward... sell one more there if we tap into that 30 second gap" (6WQg [47:00]-[47:20]).
  - He adds at the order block (DRHZ [10:00]-[10:20], [15:00]).
  - He adds at the low: "I added right here at the low... gives us a better risk-to-reward" (DRHZ [93:40]).
- Daily goal (Phase 2): "one more trade. That's a $200 trade. That puts me at 300 for the day per account and I'll be happy with that" (6WQg [93:20]).
- Planned scaling: "I can't wait to just size up like five cons on these one-to-ones" (6WQg [97:40]).
- Example R: "risk-to-reward is... 1.37. Not bad" (DRHZ [92:40]).
- Breakeven: "At this point, I'll go break even" once moving toward target (DRHZ [101:00]). "I'm going to go break even as we get close to my TP" (Cm5O [29:00]).
- Phase 3 sizing:
  - Micros are the norm. "We're in five micro long off 50% of the range" (Cm5O [26:00]). He added to "seven micros" and readjusted the TP to value area high (Cm5O [27:00]-[27:20]).
  - "five micro position... risk about 200 bucks" (0LZe [162:40]).
  - "I was in five micros. I love small size" (0LZe [169:40]).
  - "four micros. Nothing. Super lightweight" (E6x [406:20]).
- Bigger size for shorter moves: "That's why I put on size, bro, and I go for smaller moves, because when I try to put on smaller size and hold for the move, it just does this" (-kf7 [105:40]).
- TP placement: he takes profit before the gap. "I've seen us not take the gap so many times" (-kf7 [126:00]-[126:20]).
- If the LVN is tagged with a 15-minute FVG just above, "I'll just get out at the low volume node. I won't hold it for the 15-minute" (E6x [365:00]-[365:20]).
- Holding for an exact level can backfire: "Call me a dick for a tick... It violated me by a tick. It's at my TP... never hit" (0LZe [327:00]-[328:20]). He also missed by half a point (Cm5O [29:20]).
- Mis-sizing fix: he accidentally entered 5 minis instead of micros. "Risk management first. If I make a mistake like that, I like to fix it immediately" (E6x [332:00]-[338:00]).
- Accepting losses: "Just be a man of my loss. Take it. Take another $540 loss" (E6x [258:00]).
- On holding through lunch: "I like the idea of like 220 for like a 900 or 1,000... Give it like a $250 risk. Try to go for $1,000 and just let it play out. Kind of walk away" (DRHZ [142:20]-[142:40]).

---

## 4. Sessions & timing

- "do not trade the open, guys. The open is not for you... If you're not profitable, if you're not taking and milking prop firms, don't trade the open" (WMKQ [120:20]).
- "The probability is in our favor at 10:00 a.m., at 11:00, and at 2. Those are the three hours that you want to be trading" (WMKQ [120:40]).
- "You don't even really want to touch Asia unless you're trading gold" (WMKQ [120:40]).
- Why the hour opens matter: "We're waiting for the new hour to open so that we can... get into a trade with some movement" (WMKQ [121:00]).
- "It's the 10:00 a.m. hour. This is supposed to be the best hour of trading the New York session" (WMKQ [51:00]).
- "Don't really want to get into this until 10:00 a.m." (WMKQ [21:20]).
- "We can't just hop into the first 15 minutes... We wait and see" (WMKQ [03:00]).
- News at 10: "don't want to be in this trade at 10 a.m. That's for sure" (DRHZ [10:00]). He watched the 10 a.m. release live (DRHZ [26:20]-[27:40]).
- "Jolts used to do something. These days, it doesn't do much... Unless it's Trump" (-kf7 [49:20]; the second line is said by co-host Zach).
- Noon: "I usually don't like to trade at 12" (6WQg [113:40]).
- Phase-2 schedule: AM, a break at 12, and an afternoon session 1-3 p.m. "the strategy... pretty much only works if you trade both the morning and afternoon" (6WQg [126:00]-[126:40]; DRHZ [137:20]-[137:40]).
- Later he prefers AM:
  - "I will take AM over any session... out of the 200k I've made so far in the last 11-13 months, I would say 150 of it was probably all AM session, the other 50 came from PM and Asia" (-kf7 [45:20]).
  - "I hate the fact that I was forced to be on in the afternoon to keep trading" (-kf7 [45:40]). This refers to his earlier lunchbox/PM streams for PropFirmMatch.
  - Co-host Zach: "Nothing great ever happens after 11:30", and Alex agrees lunchbox isn't good "until like 12:45" (-kf7 [44:40]-[45:00]).
- Lunchbox: "I went 3 months on PFM where we just didn't lose. We would just win every trade on Lunchbox" (E6x [257:20]). This fits the review that says he makes money "during lunch".
- Fridays: "because it's Friday and this market is doing this, why mess with a good thing" (0LZe [217:20]).
- Overnight session runs 6 p.m. to 9:30 a.m. ET. He holds overnight positions ("I am one to put on trades overnight") (-kf7 [12:00], [22:40]).
- Opening 30 minutes have recently been one-minute chop: "This has been pretty common for the first 30 minutes of market open lately" (E6x [66:00]-[66:20]).
- Gold as a side market when NQ is choppy: "Let's go look at gold" (WMKQ [61:00]-[62:00]).

---

## 5. Risk & prop-firm practice

- **Copy trading** across many accounts is central:
  - Early on he had problems with Apex PA accounts in the copier: "the way that these Apex accounts keep [messing] up in the copier" (WMKQ [12:20]-[12:40]).
  - He ran small "test trades" to check that the copier works (WMKQ [16:40]-[17:00]).
  - "I love copy trading, dude. My Topstep accounts are up $800 because of that one trade" (6WQg [29:00]).
  - He removes accounts once their day is done: "We're going to take off the Topstep Express accounts here because they've already gotten their day in" (WMKQ [78:40]-[79:00]).
  - He waits before switching the copier on: "I'm in one account... waiting for 10 a.m. to fully copy trade this thing" (E6x [52:20], [60:40]).
- **Topstep**: he runs 5 challenge accounts at a time copied together, needs $3,000 per account for payouts, and then activates the next 5. "You can have five in the payout round at a time" (0LZe [217:40]-[221:00]).
- **Account management lesson**: "I used to just go all in on 20 accounts and blow it". Now, in poor conditions, he lowers risk "by only having one or two accounts instead of 10 or 15" (E6x [265:00]-[265:20]).
- **Why funded accounts get blown** (Alex): "it's fear and greed. You either have fear because you don't want to lose it or you're too greedy and you just want to get a payout quickly" (E6x [264:40]).
- **Evals vs funded**: experimental or non-model trades go on evals (DRHZ [41:00]; E6x [284:40]). He describes being "in eval jail" while rebuilding (Cm5O [41:00]).
- **Firms mentioned by Alex**:
  - Topstep (Express/combine), Apex (PA), Lucid, Tradeify, Futures Elite, Top One Futures, Funded Next, Take Profit Trader (TPT), Vest (perps), E8, MyFundedPerps, ProPer (WMKQ; 0LZe [232:00]-[232:20]; -kf7 [16:20]-[25:00]).
  - Lucid: "the only firm that I have not made money with... I'm down like four or five grand over time... I'm going to crack the Lucid death grip" (Cm5O [41:00]-[41:20]). He likes Lucid's new end-of-day drawdown and no-daily-loss-limit accounts (E6x [157:20]; -kf7 [24:00]).
  - Consistency rules: "I just don't like 40%. I can't handle 40% of things" (E6x [157:40]).
  - TPT: "locked in a $3,000 TPT daily payout... 2,400 after the 20% split" in about seven hours of trading. He left a pro account unused "for a month without a trade" and then took a daily payout on a clean day (-kf7 [16:20]-[17:00], [53:20]-[53:40]).
  - Vest negative-R:R custom evals: "I just bought one of those 50k negative RR accounts... $2,000 account... you get $4,000 worth of drawdown to make 2500" (E6x [37:20]-[37:40]). "I'm always going to have Vest accounts while I'm trading my funded accounts" (E6x [37:20]).
  - Vest slippage: "TP was 1,200. How I continue to get slipped I have no idea" (Cm5O [47:20], [58:20]). "When you don't have any rules, sadly, no rules, you get slippage" (E6x [145:40]).
- **Perps** (crypto-style perpetual NQ via Vest/Hyperliquid): "my strategy works very well with futures contracts because I can scalp, I can be aggressive... I get slipped a bit on perps... if I'm looking for a liquidity target... perps don't run like that... I'm green but... not up 20 grand" (E6x [247:40]-[248:20]).
- **Micros**:
  - "Why didn't anybody tell me to just trade micros, bro? $839 today on micros. You know when I made 100K in 100 days? I was just trading three to five micros" (Cm5O [57:40]).
  - Plan: "buy 20 50K instant funded accounts from all different firms. Copy trade three micros" (Cm5O [58:00]).
  - "Since I've sized down, I've been eating" (0LZe [175:20]; speaker likely Alex).
- **Payout claims**:
  - "$767 on the Vest payout... That puts us over 10K on the month here for payouts" (Cm5O [49:20]).
  - He listed Vest payouts over one month (Oct 2-30), "over 3K all time on their payouts" (0LZe [278:00]-[278:20]).
  - Combined payouts with Zach: "We're probably at over 20-30k" (E6x [42:40]; partly unclear who says which figure).
- **CPI buy-stop/sell-stop "edge"** and "TP 100 / SL 350 on Vest" belong to guest Forex Ike, not Alex (0LZe [226:40]-[238:00]).
- **Daily accounts and instant fundeds**: in a reply, Alex calls himself "a kind of a mixed man" on instant funded versus evals (E6x [266:20]; the next sentence about 150K instant fundeds may be Clay, unclear in captions).

---

## 6. Psychology, background, community

- **Patience speech** (WMKQ [121:20]-[122:00]):
  - "You don't have to get into every trade. You don't have to wake up and trade... That's one of the biggest reasons why most of you are going to fail... because you have no patience."
  - "Patience will change your life. It's that simple."
- "Patience avoided a catastrophe" (after declining a short after an hourly low was taken) (WMKQ [116:20]).
- He mantra-chants "I don't chase it. I let it come" (UMLY [92:40]; 0LZe [132:20]).
- Confidence from backtesting: "It feels nice being so confident in the strategy that you're just like, okay, whatever. We're down, but we're going to continue to take those trades because we know the backtesting shows... we end up in the green" (6WQg [64:40]).
- Journaling: "that is a learning lesson... I think we all need to journal that" (6WQg [61:40]).
- Simplicity: "I like the idea of just using the 15-minute chart and the one minute chart and not having to look at so many damn things that I was looking at before" (6WQg [127:20]).
- Admitting changes: "I have been changing the way I trade for a bit. I'm always trying to get better... I'm not afraid to admit it" (UMLY [47:00]; speaker likely Alex).
- Adapting: "I'm trying to adapt, right? Like trying to always get better" (0LZe [111:20]; speaker unclear).
- Risk appetite: "I love danger. When there's danger in the market, there's pain in the market, that means there's gain for others" (DRHZ [143:20]).
- Self-critique:
  - "patience is causing me to take a loss here" (E6x [140:00]).
  - "Slightly tilted after this stupid move lower" (E6x [212:00]).
  - "Why do I not just take trades like Ike and just take my money and walk away?" (0LZe [327:20]).
- Resilience and streaming persona:
  - "We blow one account and we come back and we do it again" (0LZe [328:20]).
  - "I will not leave until we get this" (0LZe [295:40]).
  - "throw me to the wolves. I'll trade any session in front of everybody... Most people come on a stream and they won't take a damn trade" (E6x [258:20]).
- He accepts losses on stream: "I'm very transparent. People see me blow accounts, evals and funded, on stream sometimes" (E6x [265:00]).
- Order flow learning curve (Alex replying to Zach): "the first two months of it I struggled... Worth it in the end because now I can read it really well" (E6x [82:20]-[82:40]).
- **Background claims** (Alex unless noted):
  - "I've been trading prop firms since 2020, but full-time since 2025, like beginning of 2025. I lost a lot of money at first... I had spent $27,000 before I started making profits" (UMLY [78:20]-[78:40]; speaker very likely Alex, the host running the giveaway).
  - "Out of the 200k I've made so far in the last... 11 months" (-kf7 [45:20]).
  - "I made 100K trading IB" (E6x [155:00]).
  - "I made 100K in 100 days... three to five micros" (Cm5O [57:40]).
  - "I'm a continuation trader. That's how I made 200K" (E6x [153:40]).
  - Lives in New York City ("Live from New York City", -kf7 [08:40]). Mentions his girlfriend, mom and brother (E6x [151:40], [258:40]).
  - Note: the "trading since 2015 / former heroin addict / turning 40" story in E6x [253:00]-[276:00] is guest Clay (Top One Futures), not Alex.
- **Community / business**:
  - TMade Discord (free), YouTube giveaways channel, daily account giveaways (Lucid, Top One, Futures Elite, Vest, Blue Guardian) (0LZe [363:00]-[374:20]; -kf7 [32:40]).
  - A new VIP experience is in progress: "we're not opening it yet. I'm working on a brand new VIP experience" (E6x [294:40]).
  - Wants YouTube to be "the channel where you learn about order flow. You learn about TMade education... all things data" (0LZe [124:40]).
  - Brand vision with partners: TMade order flow plus Zach's Liquidity Lab plus Drewie's IB, "three different styles of trading... all of them proven to make money" (-kf7 [50:00]-[50:20]).
  - PropFirmMatch: he was streaming on PFM. In late October there was unexplained PFM turmoil: "whether I'm at PFM or not, this place will always be my home" (0LZe [117:40]-[118:00], [158:00]). After it he says he can now trade the morning session live on his own channel (-kf7 [45:00]).
  - Community wins are shouted out (Matt $3,000 Funded Next payout, Perez up $3,000 across two accounts, Electric Kate $10,000 Futures Elite) (DRHZ [16:40], [88:00]; -kf7 [15:40]).
  - Snag: "That is exactly what we taught you yesterday" (DRHZ [14:00]).

---

## 7. Tools / platform

- Phase 1/2 used TradingView (he calls it "Trading View"), including:
  - A custom "candle equilibrium" / previous 4-hour equilibrium indicator: "15 minute, 4 hour... previous equilibrium should be yellow" with black dots for 4-hour highs and lows (WMKQ [86:20]-[87:40]).
  - An all-in-one ICT indicator he stripped down to show only SMT: "No labels. No T-spot. No CISD. SMT. Yes... set to the five minute... 5 minute, 1 hour" (WMKQ [103:40]-[104:40]).
- Phase 3 uses Deep Charts (order flow), with indicators he built himself (with AI help; "Claude's taking over my computer", Cm5O [55:00]). The suite shows:
  - Multi-timeframe FVGs (15m, 1h, 4h, daily), resting big orders on the book, volume profile and LVNs.
  - Session-high/low taken flags (Asia, London), previous-day POC/VAH/VAL with "naked" status since the 6 p.m. open, and an hourly/4-hour sweep alert (E6x [25:20]-[28:00]; -kf7 [12:40]-[14:00]).
  - Gamma levels, where the nearest level lights up (UMLY [89:00]).
- One-screen philosophy: "I never have to look at TradingView again. I never have to look at Bookmap... I have my gamma level, my orders, the big orders that I only care about, my fair value gaps, my low volume nodes, my single prints, my sushi box" (UMLY [129:00]-[129:40]).
- Custom "deep delta" on 30-minute candles that shows who is winning (UMLY [89:20]-[89:40]; E6x [424:20]-[424:40]).
- "TMade" indicator name (Cm5O [66:00]). He is building "a Deep Charts TMade suite" (-kf7 [13:00]).
- Gamma source: GexLabs ("Yush's GexLabs"). "It's just taking all of the option contract volume and putting it in areas where market makers will buy into your shorts" (E6x [230:20]). He references 0DTE ("zero DTE is what I normally trade", E6x [230:00]).
- Charts: NQ 1-minute for execution and 15-minute for bias in Phase 2 (6WQg [03:20]). "I'm way better at trading on the 3-minute... with order flow, it's super clear" (IsdqCc0 [30:40]; likely Alex).
- Light vs dark theme: "I think I'm a better trader with the light charts... that's what I learned it on" (UMLY [72:20]-[73:00]). He likes a "readable like a book" chart over a "futuristic" one (0LZe [255:20]).
- Copier: a free "Trader Made Vest" copier ("best copier ever... It has everything... stop orders") (0LZe [278:00]; E6x [93:20]).
- TradingView indicators "TMade VP" and "TMade VD" (volume profile and volume delta) are published free. This was answered by co-host Drew ("go to my profile"), so authorship is unclear in captions (0LZe [62:00]-[62:20]).

---

## 8. Best verbatim quotes

1. "The 15-minute gives us our higher time frame bias and the one minute gives us our entries. That's all it is." (6WQg [17:20])
2. "It is much easier to find areas in the chart where price should at least do a one one than... one to three, one to four, one to five." (6WQg [26:40])
3. "15-minute sweep with a gap below. This is the A+ strategy." (6WQg [58:40])
4. "Chasing it here skews your stop. You don't get a one to one anymore." (6WQg [82:00])
5. "We don't want to take trades when there's a draw in the opposite direction that we're trying to go in." (6WQg [12:20])
6. "A 15-minute sweep unlocks a 30-second inversion." (WMKQ [101:00])
7. "I want to be short after an hourly high taken, not after hourly low taken." (WMKQ [116:00])
8. "I'm not a VWAP trader. I'm an ICT trader." (WMKQ [75:40])
9. "Do not trade the open, guys. The open is not for you." (WMKQ [120:20])
10. "The probability is in our favor at 10:00 a.m., at 11:00, and at 2." (WMKQ [120:40])
11. "Patience will change your life. It's that simple." (WMKQ [121:40])
12. "Throw away ICT. Throw away IB. Throw away all the noise and just order flow it up." (IsdqCc0 [101:00])
13. "Volume is money." (IsdqCc0 [111:00])
14. "If you're not looking at weekly, monthly, previous volume profiles, you're literally trading blind." (IsdqCc0 [74:20])
15. "I made 100K trading IB... it's actual trash now. The market has shifted." (E6x [155:00])
16. "I'm a continuation trader. That's how I made 200K." (E6x [153:40])
17. "If my grandmother could spot an opening gap... I can't take that trade." (E6x [246:00])
18. "If you're strictly ICT, you're gullible." (E6x [246:40])
19. "You should trade back into 50% and the VWAP before taking the low." (E6x [212:00], on lunchbox)
20. "Into 10:00 a.m. we usually manipulate. That new 4-hour candle opens and it manipulates." (-kf7 [48:00])
21. "Why didn't anybody tell me to just trade micros?... When I made 100K in 100 days, I was just trading three to five micros." (Cm5O [57:40])
22. "I don't chase it. I let it come." (0LZe [132:20])

---

## 9. Asia-stream co-host material (NOT Alex; context only)

These hosts (e.g. "Air-Con", Drew) share TMade concepts, so their material is kept here for reference only.

- Asia host's style: "more mean reversion style and also inversion style. It's very New York session vibes" (RfEK [139:40]-[140:00]). A co-host on UMLY says he and Alex "trade very similar... he definitely trades more order flow... We have very similar foundational concepts" (UMLY [73:40]-[74:00]).
- Sushi box use: they target "sushi box low/high", the 50% of the sushi range, sushi VWAP, and 5-minute gaps inside it. "When we're trading above 50% of sushi and above this 15-minute gap, then I would be comfortable with the longs" (R7Yk [78:00]; RfEK [55:20]-[61:20]).
- "We don't like inverting 5-minute gaps in premium for the longs" (RfEK [52:40]).
- An A+ example: "Retesting Asia low and taking it to the new week opening gap" (EhuYu [15:20]). He notes he broke his own rule of waiting for a candle closure after a session sweep (EhuYu [14:40]-[15:20]).
- Measured moves, 50% of swing ranges, and an AMD read on the hourly. "This was the trade location to be in... in premium of this leg" (JyLe [10:40], [122:40]-[123:20]).
- Small-account plan (E8 10K: $800 target, $250 daily loss): "I would do a loss of $100 per trade... two to one... two stabs at it in the day" (R7Yk [145:20]-[146:00]).
- Discipline advice: "you got to have office hours... a trade limit... done after two trades... maximum loss per day... or just a timer" (EhuYu [80:20]-[80:40]). "Healthy losses are dubs" (RfEK [160:00]).
- Guest Forex Ike's "30-minute flip" (stop orders two ticks beyond a 30-minute candle that closes through a profile level, aiming for 0.5-2R, with a claimed 72% win rate) is his strategy, not Alex's (E6x [324:40]-[343:00]).
- Zach's "80% setup" (previous-day POC/value rotation) and "low cortisol" holding style are Zach's, not Alex's (-kf7 [11:20]-[11:40], [113:40]).
