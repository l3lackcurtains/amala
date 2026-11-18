# TMade Alex — STRATEGY

> Research copy of the dashboard page. Sources with `(videoId [MM:SS])` citations: `raw/notes-alex-A.md` (Aug–Oct: ICT → new strategy → order flow),
> `raw/notes-alex-B.md` (early Nov), `raw/notes-alex-C.md` (Nov 6–17), `raw/notes-alex-pfm.md` (PropFirmMatch segments). Researched 2026-11-18.


## Who TMade Alex Is

Alex ("TMade Alex", founder of the **TraderMade / TMADE** community) is a New York–based **NQ scalper** who trades a stack of prop-firm accounts (Topstep, Lucid, Tradeify, Top One, Futures Elite, Funded Next, Apex) plus **Vest** perpetual-futures ("perps") accounts, and streams almost every session live — New York AM, lunch and Asia. He came from forex, passed his first Topstep account in 2020, went full-time at the start of 2025, and was a regular co-host on PropFirmMatch's daily stream (the "lunchbox" slot) before going independent.

His method has evolved in public, in three stages:

1. **ICT, multi-timeframe** — midnight open, hourly FVGs and breakers, 3-minute/1-minute/30-second inversions, ES/NQ SMT, premium and discount.
2. **The "new strategy"** — a stripped-down, backtested model using only the NQ **15-minute and 1-minute** charts, aiming for 1:1s.
3. **Today: volume profile + order flow + gamma**, with ICT kept only as the entry trigger and liquidity map.

> "It's like a mixture of my ICT liquidity stuff that I know very well and then all of the order flow volume profile stuff that I like."

> "Volume profile confirms it. Now the trigger is the inversion fair value gap."

## 1. Context Comes From Volume Profile

- **Value is where the market agreed.** The value area is where about 70% of volume traded — "we trade inside of value about 70% of the time." Price outside value is either accepted (it stays) or rejected (it rotates back in).
- **The rotation rule.** "If price can't hold above value, it's going to rotate to the other side of value." A failed auction back into value usually means a **full rotation**: value area low → VWAP → POC → value area high (and the mirror).
- **Weekly beats daily.** He reads the **weekly and previous-week profiles** first, then the previous-day and overnight (ETH) profiles. "If you're not looking at weekly, monthly, previous volume profiles, you're literally trading blind." Daily FVGs in the path don't matter when the weekly profile shows no volume there.
- **High-volume nodes are destinations, low-volume nodes are runways.** "High volume nodes are where prices go to and low volume node is where we run through." Hold one HVN and price travels to the next; an LVN left by aggression can be defended by the side that created it — or run straight through.
- **"The gap doesn't matter — it's the low volume node in the gap."** His favourite fair value gap is a **15-minute FVG that contains an LVN**; the LVN pinpoints where inside a big gap price should react. Not every FVG is an LVN.
- **Value stacking.** Value-area highs/lows from different sessions that line up form a key box — stacked VAH/VAL matter more to him than stacked POCs.
- **POC tells you who's in control.** POCs shifting lower for several sessions = bearish continuation; a POC climbing after big buying keeps him in a long. (His co-host's "golden rule", which he endorses for newer traders: above the previous day's POC, only look for longs.)
- **Profile shapes.** A P-shape is "made to trap sellers"; a b-shape with a long tail sets up a push higher that fails and continues lower; a flat, balanced profile means chop — no IB trades, no continuation trades.

## 2. Order Flow Decides Who's Winning

- **Aggression must be rewarded.** "If this low is going to get taken, those sellers have to get aggressive. They have to be rewarded for that aggression." Heavy selling with no new lows and long wicks = absorption → look long.
- **Absorption, read with delta.** "We have a ton of selling pressure and we're not going lower" — that's how he uses delta. A strong close above the sellers' level then squeezes them.
- **Trade with the big orders.** He watches for big buyers/sellers on the tape and enters with them, stop just beyond the big order: "Stop's going to be below this big boy, this big buyer."
- **Somebody has to be trapped.** "Somebody has to feel pain for someone else to win… somebody has to be manipulated for me to want to get into the trade." He wants to see one side squeezed before he joins the other.
- **Chop is when nobody gets paid.** Buyers and sellers both aggressive at opposite ends with no reward = no direction; trading it "is a bit more gambling."
- **Resting liquidity is a magnet.** His liquidity tool shows the largest resting bids/offers within roughly 100–200 points; the more aggressively size sits somewhere, the more he targets it. Orders being pulled from the book make a level easy to run through.

## 3. Dealer Gamma as Confluence

He adds gamma (GEX) levels — call wall, put wall, zero gamma and the G1–G7 levels — as an extra filter, entered by hand from his GEX tool.

- **Put wall:** market makers buy there — "I cannot short anything into a put wall."
- **Call wall:** "I'm not going to try the longs here because the call wall is right above."
- **Zero gamma:** below it, moves to the downside intensify; holding it can act as support. He won't long back into a range below it.
- Gamma is context, never the trigger — it decides which ideas to skip.

## 4. The Entry Trigger: ICT Inversions

- **Volume profile says where; the IFVG says when.** An inverted fair value gap (price closes through an FVG) shows "buyers are getting wrecked… pushed with aggression, saw no continuation."
- **Location sets the timeframe.** At a strong location (50% of a higher-timeframe wick, a value edge) a **1-minute** inversion is enough; at a weaker one (25%) he wants a **5-minute** inversion. "When we get to 50%, I'll take a 1-minute IFVG… 50% should just hold if you're a buyer."
- **Sweep first.** A higher-timeframe liquidity sweep (hourly, 4-hour, session high/low, previous-day high/low) followed quickly by an inversion or a change in state of delivery (CISD). A sweep with no inversion afterwards does not qualify.
- **Second sweeps.** The first inversion right off a previous-day high is rare — "a lot of times you get a second sweep."
- **Premium and discount still matter.** Longs from discount of the leg, shorts from premium; "below midnight" is discount for longs.
- **Higher-timeframe wicks get a fib.** When an hourly/4-hour/daily wick sticks out, he trades its 50% and quarters.

## 5. The Session "Boxes" — His Named Models

He maps each session's opening range as a "box" with its own high, low, midpoint and VWAP, and trades the box's behaviour. The boxes also frame the day as accumulation → manipulation → distribution (AMD).

| Box | Time (ET) | Role |
|---|---|---|
| **Bento box** | 6:00–8:00 PM | Accumulation range before Asia opens |
| **Sushi box** | 8:00–9:00 PM | Asia open — the manipulation |
| **Midnight snack** | 12:00 AM | Midnight open |
| **Breakfast box** | 9:30–10:30 AM | First hour of New York (the initial balance) |
| **Lunch box** | 12:00–1:00 PM | Midday range |

### Bento → Sushi (Asia)
> "Wait for the bento box to form the high and the low. As soon as the bento box closes, look for the sushi box to take out the bento box high or low and retrace it back towards the bento box VWAP."

- Target: Bento VWAP, then 50% of the range, then the far side if liquidity sits there.
- Skip it when something blocks the path (e.g. a gamma level sits between price and Bento VWAP) or when there's "accumulation and no manipulation."
- **Sushi formation:** in a low-to-high formation, look for a pullback (15-minute FVG + Sushi VWAP + 50% of the range) that then sweeps the Sushi high.

### Lunch box (New York midday)
- **"You should trade back into 50% and the VWAP before taking the low."** In a range, price tags the lunch-box high, rejects, and moves back to lunch-box VWAP.
- **High-to-low formation** (the box made its high first, then its low) → the lows are likely to be taken.
- **The real move comes late** — he reads the last ~20 minutes of the box (from about 12:45) for direction.
- **"PM session goes back to VWAP, lunchbox VWAP, 75% of the time."** He watches ES and NQ together at the box VWAP — one tagging it while the other doesn't is a powerful SMT.
- He describes lunch box as the setup that has paid him "with the least amount of stress" — he went months without a losing lunch-box trade on the PropFirmMatch stream.

### Breakfast box & the open
- The breakfast box is the New York initial balance. He traded IB continuation heavily (and says he made a large part of his income on it) but now calls the IB unreliable since late summer — he uses the IB high/low as levels, not as a standalone strategy.

## 6. Session Timing

- **Don't trade the open.** "Do not trade the open, guys. The open is not for you." The first 15–30 minutes are frequent one-minute chop; scalp it on one account at a time if at all.
- **New hourly opens manipulate.** "Into 10:00 a.m. we usually manipulate. That new 4-hour candle opens and it manipulates. If we're going to go higher, the manipulation should be lower." Same idea at the 2 PM open.
- **Best hours:** 10, 11 and 2 — "the probability is in our favor." He watches the 9:50–10:10 macro and the 10 AM power-of-three (accumulation → 10 AM manipulation into a 15-minute FVG → distribution).
- **Avoid holding into a new hourly open** — the hourly will manipulate first.
- **Late morning slows down;** 12–3 PM is choppy unless a box sets up.
- **Asia has office hours.** "The more you stay at the casino, the more you'll lose. So with Asia session, you need to have office hours." Often one trade and done. No perps in Asia.
- **Fridays and news:** Fridays "always mess around"; the 8:30 news candle's high/low ("data wick") becomes a liquidity target; weekly opening gaps that everyone can see get faded rather than traded into.

## 7. Models From the PropFirmMatch Era

He taught these on PropFirmMatch's daily stream before the order-flow shift. They still show up in his reads.

### The 10 AM continuation (morning)
- **No trades before 10:00–10:15.** The trading window was 10–11 ET.
- **Trade the pullback after the 10 AM candle** in the direction of the move, with **VWAP as the bias filter**.
- **Two trades a day, and the second one is the edge.** He framed the second trade as the higher-probability one.
- **Continuation, not reversal:** "I'm a continuation trader." FVG inversions and V-shaped recoveries mean someone is trapped, and that's what he trades with.

### The 9 AM sweep
- **9:00 sweeps the 8 AM hour's high or low,** then a 1- or 3-minute inversion the other way.

### The 15-minute setup (how he passed a Topstep Combine on stream)
- **A 15-minute candle sweeps liquidity,** and the **inversion forms inside that candle's wick.** Enter there and **target the 15-minute gap.**
- **Wait for the 15-minute close** to confirm before committing.

### The initial balance as direction
- **"The IB gives me direction."** The IB is the first hour, 9:30–10:30. When **both NQ and ES take the IB high,** he cites only about a 10% chance of then taking the range lows.
- He now uses the IB as levels and context, not as a standalone strategy.

### Lunch box details
- The lunch box is **12:00–1:00 PM ET with a VWAP anchored at 12:00.**
- After a sweep of the box high or low, **trade back to the lunch-box VWAP.** He cites a 70–75% return rate, which gives "two stabs" at the idea.
- He compares **ES vs NQ to pick the stronger index,** then adds gamma and order-flow confirmation.

### Gold at the Asia open
- **"8 PM gold is the new 9:30 NQ."** At the 8 PM open, wait for a **sweep of the previous 15-minute candle,** then a **30-second or 1-minute inversion** the other way.
- **Target 2R.**

## 8. The Earlier "New Strategy" (15m + 1m)

Before order flow, he ran a stripped-down model he backtested with his community (reported 65–70% win rate):

1. Bias from the **15-minute** chart only — no 4-hour PO3, no ES, no hourly gaps.
2. A **15-minute liquidity sweep** (a prior 15m high/low taken).
3. An unfilled **15-minute gap** in the trade direction as the target.
4. A **1-minute change in state of delivery**, entered on its retest — chasing "skews your stop. You don't get a one to one anymore."
5. Target a **1:1**, hold a runner to the 15-minute gap.

> "15-minute sweep with a gap below. This is the A+ strategy."

- **Skip** when liquidity sits in the opposite direction, and never short into a fresh sweep of lows. Without a new 15-minute gap, "the strategy just tells us to sit and wait."
- The 15-minute chart is still his invalidation: "for me invalidation is the 15-minute gap," and a 15-minute gap against the trade is a magnet price may go back to fill.

## 9. Tools

- **Deep Charts** (Rithmic, own data feed) — "If you're a scalper and you're trading on TradingView, you are hurting yourself." Charts NQ minis, executes MNQ from the same chart.
- **His TMade indicator suite** (built with AI help): multi-timeframe FVGs, 15m FVG + LVN detector, LVN/HVN (current, previous-day, weekly), value-stacking boxes, single prints, session-split (ETH/RTH) volume profile, liquidity levels (Asia/London/PDH/PDL/previous-day value/10 AM & 2 PM opens), higher-timeframe sweep alerts, wick fibs, resting-liquidity map, devil's marks, and the box indicators (high/mid/VWAP/low).
- **Devil's marks:** a 10-minute or 200-second candle with no upper wick, only valid within ~20 points of an x20/x80 handle; removed once touched. "It is a magnet for price. But you have to have a reason for price to go here. You can't just short into it."
- **Delta** on the chart (a 30-minute delta profile), session/weekly/monthly VWAPs, GEX levels.
- **On TradingView**, use the 1- or 15-minute chart for the most accurate volume profile — the others drift from tick data.

## Gaps & conflicts (not on the dashboard)

- **Co-hosted streams:** most streams have co-hosts (Zarb/Zach, Druby, Luna, Drew, guests Forex Ike, Clay, Yush). The "golden rule" (above previous-day POC = bullish), the "80% setup" and Ike's "30-minute flip" belong to others — Alex only endorses them. The four Asia streams R7Yk/RfEK/EhuYu/JyLe are run by co-hosts.
- **Birthday:** "turning 40 on Nov 20" in one stream, "Nov 22" in another.
- **Background:** described as Latino, grew up in a poor neighbourhood; PFM notes say Miami-born NY photographer — not reconciled.
- **Results:** "$200K in 11 months", "100K in 100 days on 3–5 micros", ~$80K lifetime Topstep payouts, ~$60K in 2025 payouts (PFM) — self-reported, not verified.
- **Win rates:** "new strategy" 65–70% (community backtest), second morning trade ~80% (PFM), IB-tweak backtest 78% over ~45–50 days — backtests, not live stats.
- **Lunch-box VWAP return:** quoted as 75% (own stream) and 70–75% (PFM).
- **Coverage:** 30 of 78 own streams transcribed (the rest blocked by YouTube rate limits); the PFM 12-hour streams were read only for his lunch/PM slot.
