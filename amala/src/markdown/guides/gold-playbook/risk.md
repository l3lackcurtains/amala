---
title: Gold Sizing & the Seven Documented Ways It Kills
topics:
  - sizing
  - risk
  - prop-firm
  - psychology
---

## The sizing table — $200 of risk against the floor

The formula first, then the table: **MGC contracts = risk ÷ (stop in dollars × 10). CFD lots = risk ÷ (stop in dollars × 100).** Gold risk is stop-driven in a way indices rarely are, because gold's *stop distances* carry the news-burst tail: the same $200 budget that buys a 25-point NQ micro structure buys a $10–20 band on gold.

| Stop | 1 MGC risks | Contracts at $200 | CFD equivalent |
|---|---|---|---|
| $5/oz | $50 | 4 | 0.40 lots |
| $10/oz | $100 | **2** | 0.20 lots |
| $20/oz | $200 | **1** | 0.10 lots |
| $30/oz (an ordinary session median) | $300 | 0.67 → 1 with $60 of slack | 0.067 lots |

The three sizing facts the independent trackers converge on:

1. **"Half of index risk."** A $20–30 gold stop at the same dollar risk needs half the size the same % would allow on MES/MNQ — gold's normal stop is structurally 2–3× an index stop in dollars, so the rule of thumb is: whatever the risk calculator says on the indices, cut the notional in half before the burst cuts it for you.
2. **One GC is a whole strategy decision.** A median futures session (~$31.6 high-low) is ~$3,164 on one GC — 1.5× a $2,000 drawdown, moved by the market simply existing. The funded-community line: "a single GC with a $10 stop is already half the drawdown." MGC at 1–2 contracts per 50K is the ladder every independent guide ends at: 25K → 1; 50K → 1–3; 100K → 2–4.
3. **The firms' caps are for scaling, not loading.** Micro limits published at 150+ contracts per account describe a firm's risk ceiling, not a recommended position; the drawdown floor arrives two orders of magnitude earlier. Ten MGC and a $40 swing = $4,000 = the entire account died twice over before your stop logic fired.

## The seven documented death modes

These are drawn from the failure records — firm rule pages, event statistics, and the forum's own post-mortems — because gold's failure distribution is narrow and repeatable.

1. **News-window technical breaches on fills you didn't initiate.** The strictest rules treat *any* execution inside ±2 minutes of a listed event as a violation on funded accounts — a take-profit filled in-window is confiscated, a stop-market filled in-window still charges the daily number. The evaluations are frequently more permissive than the funded stages; plans built on "news trading worked in the challenge" fail on funded.
2. **Dollar-range drift.** Yesterday's fixed stop is inside today's noise (see the tripled ADR). This is the silent one: it doesn't announce itself, it just raises your stop-out rate for a month before anyone re-measures. ATR-scaled stops are the documented fix.
3. **The revenge trade after the sweep.** The canonical post-mortem, verbatim from a prop trader's worst day: two fakeouts, an oversized re-entry to get it back, daily-limit breaches across four accounts, one blown, weeks of small-day progress erased by one afternoon. Gold's sweep frequency *manufactures* this sequence; the setups page's "no counter-trend fades without trend agreement" and the lockout rule are the two vaccines.
4. **Slippage and feed disputes.** Break-even stops filled far from price, 60-pip slips that terminated funded accounts, and the unverifiable-but-recurrent "the prop chart differs from my broker" complaints. Label honestly: the individual rigging claims are accusations, not evidence. What *is* evidenced: gold's thin-book burst minutes slip stops by design; the mitigation is windows and size, because the dispute-resolution channel is slow and rarely wins you money.
5. **Spread widening at the wrong hour.** The 5 PM rollover and late-Asian windows are warned about by the firms themselves and by every session-breakout educator — the same minutes where a "breakout" is often just the spread jumping. Entries belong inside liquid windows, not against the calendar.
6. **Venue/session traps.** Futures props forbid the overnight gold hold (auto-flat 4:10–4:59 ET), CFDs technically allow weekend exposure with a Friday-flatten rule on standard funded accounts, and Monday's gap is gold's largest untradeable move of the week. A "swing" gold position on a prop account is, structurally, a position you hold only at the firm's permission — know which clock your venue runs.
7. **Availability and cap changes.** The metals suspension episode: positions flattened by notice, months without listings, caps (GC 3 per 50K, metal-micro limits) appearing mid-year without press releases. The portfolio-level fix is the same one every multi-account operator converges on: gold is *a* book, never *the* book, and the strategy must survive the instrument being off the menu for a quarter.

## The positive list — a gold plan that fits the game

- 1–2 MGC (or CFD equivalent) per 50K until a paid history exists, stops ATR-scaled, never widened post-entry.
- News calendar taped to the desk; no new entries within ±15 minutes of Tier-1 prints; the release minute is for watching.
- Skip windows: overnight range > ½ ATR, pre-data hour, rollover hour, half-days.
- Targets from the range structure, banked in partials — consistency-rule friendly by construction.
- A one-page per-firm sheet: window rules, caps, flat time — re-read whenever the product table updates.
- Same discipline layer as everything else: personal daily stop, two-loss rule, walk away. Gold doesn't need more conviction than the indices; it needs more *calendar*.
