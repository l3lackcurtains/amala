---
title: Gold's Instruments and Where Prop Firms Actually List It
topics:
  - prop-firm
  - tools
  - sizing
---

## The contract ladder — pick your unit before you pick your trade

| Instrument | Size | $ per $1 move | Tick | Prop venue |
|---|---|---|---|---|
| **XAUUSD spot CFD** | 100 oz per lot | $100/lot (0.01 lot = 1 oz = $1) | broker-quoted | **Forex props only** (FTMO, The5ers, FundingPips, FundingTraders) |
| **GC — COMEX Gold** | 100 oz | $100 | $0.10 = $10 | Futures props — the big book by notional |
| **MGC — Micro Gold** | 10 oz | $10 | $0.10 = **$1** | Futures props — **the prop sizing unit** |
| **QO — E-mini Gold** | 50 oz | $50 | $12.50 | Listed at two firms; thin (~2K contracts/day) |
| **SGU / "Shanghai micro gold"** | 32.15 oz | $32.15 | $3.215 | **Dead** — three contracts in a recent exchange session; offered nowhere; it is not a prop product despite the forum name "SGD" |

Two facts decide the venue choice:

1. **On contract count, the micro is the bigger book.** A recent exchange session printed ~336K MGC against ~196K GC — MGC liquidity is not a consolation size, it's the retail-native market, with intraday broker margins around the cost of a lunch while GC's exchange margin ran into five figures after the volatility repricing.
2. **Futures sim accounts never post margin.** At prop firms the margin question is moot by construction — the risk engine is your **drawdown and the contract cap table**. At forex props, margin/leverage does matter (gold leverage sits around 1:15–1:50 depending on account type), and the instrument trades nearly 23 hours instead of Globex-with-a-break. The venue choice is therefore: futures prop (MGC, tight windows, futures rules) or forex prop (CFD, longer holds, weekend-gap exposure, ±minute execution windows).

## Where gold lives — and what firms did about it in 2026

All seven major futures props tracked by the independent rule auditors list gold — but each polices it differently:

- **Apex** — GC, MGC, and the whole metals complex on the product list, ~6 minis / 60 micros on evals (funded position caps lower); news entries allowed but two-sided straddle orders around releases banned.
- **Topstep** — gold stays listed but moved into a "high-risk/volatile" product table: GC capped at 3 contracts on 50K, MGC capped (30 on sim, far fewer on live), and a short capped-micros window around Tier-1 releases instead of a hard ban.
- **MFFU** — MGC available with metal-micro caps (5 per 50K) that appeared mid-year, ±2-minute windows around red-list events on funded accounts, 4:10 auto-flat.
- **Tradeify / Lucid / Bulenox / Earn2Trade** — GC + MGC listed with various micro caps and news rules; Lucid's daily product adds a ±1-minute window on COMEX metals.
- **Forex props** — FTMO's XAUUSD/DXY ±2-minute window is explicit *because* of gold's seconds-fast data reactions: fills inside it are breaches even when automated, in-window profits are confiscated, in-window stop-outs still count against the daily number; Swing accounts trade around news and weekends on much lower leverage.

The 2026 lesson sits beside all of it. At the peak of the volatility expansion, at least two of the largest futures props **suspended the entire metals complex — GC, MGC, silver, platinum, copper — for months**, flattening open positions, with dates visible only to people digging through archives, and returned it with tighter caps. The honest planning conclusion is on the volatility page: *instrument availability at prop firms is itself a position you hold*, and a gold plan is a plan that can be paused by someone else's risk committee.

## What the venues cost you differently

- **Futures (MGC/GC):** exchange prices, transparent sessions, the auto-flat clock, caps as position law — and spot-vs-futures basis spread that widens into news (cross-reading a spot chart against futures fills will show different levels; the educators' fix is converting via the live basis, never eyeballing).
- **CFD (XAUUSD):** rollover spread-widening windows warned by the firms themselves, weekend halts that become Monday gap exposure, and fine lot granularity (0.01 lot = 1 oz = $1 risked per $1 move of gold) that makes under-sizing *mathematically easy* — the CFD version of "trade micros."
- **The marketing both venues share:** no firm publishes a gold-specific pass rate or per-account gold lot ceiling table; every "gold lot calculator for FTMO/prop" in the world is third-party modeling dressed as guidance.
