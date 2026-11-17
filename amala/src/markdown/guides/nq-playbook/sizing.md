---
title: NQ Contract Math & Sizing
topics:
  - sizing
  - risk
  - prop-firm
  - tools
---

## The two numbers that decide everything

The entire NQ sizing problem reduces to two facts:

**NQ point value: $20 per point ($5 per tick). MNQ: $2 per point ($0.50 per tick). Ten micros equal one mini's exposure.**

| Contract | $ / point | $ / tick | 10 micros = |
|---|---|---|---|
| NQ (E-mini Nasdaq-100) | $20 | $5 at 0.25 | — |
| MNQ (Micro E-mini) | $2 | $0.50 at 0.25 | 1 NQ |

Firms convert micro caps by that ratio: a four-contract limit is four NQ, forty MNQ, or any mix.

## The $2,000 floor table

A standard NQ pullback or sweep stop is 25–50 points; 30 is the common working number. At a 30-point stop, one contract risks:

| Size | Dollars at risk | Share of $2,000 eval floor |
|---|---|---|
| 1 MNQ | $60 | 3% |
| 5 MNQ | $300 | 15% |
| 1 NQ | $600 | **30%** |
| 2 NQ | $1,200 | **60%** |

On a 50K account the only full-size options are "30% of the account per trade" or "60%." That is why 1–2 MNQ is the documented community default, the independent guides' recommendation, and the reason experienced eval traders say the real choice on a small trail is micros or nothing. Five losses in a row at that size ends an evaluation — which is exactly how it's meant to be read: size so that the *planned* worst streak, not the next trade, is what kills you.

## The micro fee tax

Micros are the safe answer with a price: commissions per unit of exposure run roughly 2.6–3.4× higher in MNQ blocks than in one NQ (firm fee sheets show three-digit-per-day gaps for identical risk). Over a hundred full-size trades that tax approaches a third of the drawdown. Two consequences:

1. Fewer, larger-conviction micro trades beat a high-frequency micro scalping habit — fee drag is a real expectancy term on NQ, not a rounding error.
2. Once a funded account has real cushion, the sizing question flips: micros remain correct until the buffer can absorb a mid-size structure stop.

## Why prop traders overwhelmingly pick NQ

Documented reasons, in the sources' own order:

1. **The target math.** A 50K eval wants roughly $3,000. That is 150 NQ points; with a single contract, 150 points is about a typical *week* of the daily 200–350-point range — a sane $200–600/day plan reaches it. On ES the same dollars need the same patience spread across a market that moves one-half to one-third as many points most days.
2. **Micro granularity.** The 10:1 micro conversion lets NQ's beta be taken in steps small enough for a $2,000 trailing floor — the contract structure fits the risk constraint.
3. **Cap compliance.** Contract caps (3–5 per 50K account is typical) make a $3,000 target *reachable* within the caps on NQ in a way slower instruments struggle to be at 1–2 contracts.

The honest counterweight: forum veterans picking one instrument for a career lean **ES** — "slower, cleaner, more forgiving," with NQ singled out for punishing identical mistakes faster. No simulation of eval mechanics prefers one symbol; they prefer an R-profile. NQ's dominance in the prop world is target arithmetic plus temperament, not a measured win-rate advantage. Choose NQ if you can hold 1–2 MNQ through an 18-loss streak without flinching; choose ES if you can't.

## Wick risk is the contract's design flaw

NQ's defining hazard at prop scale, stated as parameters rather than anecdotes:

- The open minute runs ~3.25× the median minute; standard pullback wicks of 20–35 points are routine. A stop inside those wicks is not a risk plan, it is a donation.
- The community's operational fix is structural: stop **beyond** the sweep/wick extreme, size down so that distance fits the cap. The same fix expressed as WASL — the wide stop as philosophy — is that if a trade gets wicked out before it plays, the stop was the mistake, not the market.
- The same feature makes NQ the instrument that punishes tight-stop systems (see the liquidity sweep evidence in the setup menu): the trade needs room, so size is the only honest risk dial.

## Practical sizing checklist for a 50K NQ eval

Before every session, in order:

1. Locate the floor (balance minus max loss, ratcheted), not the balance.
2. Measure the setup's structural stop in points — before choosing size, never after.
3. Compute risk at 1 MNQ for that stop; keep it in the 2–5% of the floor band.
4. Confirm five consecutive identical losses would still leave the account alive.
5. Log the trade against the rule, not the outcome — the P&L is a lagging indicator here.
