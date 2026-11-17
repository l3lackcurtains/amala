---
title: Drawdown Physics
topics:
  - risk
  - prop-firm
  - sizing
---

Every eval dies the same way: something below a line. The line moves, and *how* it moves is the single most exploitable mechanic in the prop game. This is the physics, from the rule docs and the simulations that encode them.

## The four floors

| Drawdown type | When the floor moves | What it punishes | Who should buy it |
|---|---|---|---|
| **Intraday trailing** | live, on **unrealized** peak equity | winning trades that get off the table on paper and round-trip — the floor ratchets on profits you never kept | tight-close, fast-money styles; *not* swingy NQ entries |
| **EOD trailing** | once per day, on the previous close | losing a day *after* a strong close — yesterday's peak sets today's floor | scalpers with flat-by-cash-close routines; still demands profit-taking |
| **Max trailing (capped)** | rises with balance, stops at initial equity | drawdowns after you've already built a cushion — after the cap you own real room | the friendliest common structure for evals |
| **Static** | never | everything you do, plainly | the honest choice: the account *is* the drawdown, no ratchet psychology |

The ratchet is the mechanic the marketing never says: **"winning does not buy room — it lifts the floor."** A simulated funnel that tested this cut a skillless trader's pass geometry from ~44% to ~35% purely by installing the trailing rule; a separate rules-verified simulation found **100% of failed attempts on a major firm's combine ended at the trailing maximum-loss limit**, none at the target being "too far." The eval is not a race to the target. It is a survival walk along a floor that chases you upward.

## The give-back arithmetic

With a floor that ratchets on peak balance, a round trip costs twice:

- Up a winning day +$600: floor rises ~$600.
- Down a losing day −$400: balance +$200 over two days, **buffer −$400**.
- Net: you are 40% closer to death than the P&L line says. Traders who read the balance, not the floor, die believing they were ahead.

Three documented consequences:

1. **Profit-taking is risk management.** The community's standing rule on trailing accounts is to take profits when a trade works, because unrealized equity is the only thing the floor can see. On the intraday version, a paper winner that round-trips raised your floor on the way up *and* hit your stops on the way down — two penalties, one candle.
2. **Break-even mechanics.** Move stops to entry once a trade pays ~1R; a scratch trade costs fees but never the floor. This is the standard documented mitigation in trailing-drawdown survival guides.
3. **Buffers are the currency.** The barrier-model work frames the entire game as buffer management, and the payout mechanics agree: requesting a payout at one major firm **resets your loss allowance to zero** (you rebuild the cushion before more money is claimable); another resets the profitable-day count after each claim; a third requires a safety net before your first three payouts. Money in the account is not yours until it is above a floor that can no longer eat it.

## The floor, in practice — a worked $2,000 trail

Starting floor $48,000 on a $50,000 account. In plan: 30-pt NQ stop, one MNQ = $60 risk.

| Sequence | Balance | Floor | Real buffer |
|---|---|---|---|
| Win +$400 ×5 | $52,000 | $50,000 | $2,000 |
| Reach $53,000 (target) | $53,000 | $51,000 | $2,000 |
| Give back −$600 before request | $52,400 | $51,000 | **$1,400** |

Note what happened: the give-back is fully absorbed because the floor **capped at initial balance + target** on max-trailing products — the same −$600 a day earlier, mid-grind, would have cost a fifth of the entire allowed drawdown. Which product you bought determines whether a bad day is a bruise or a death sentence; the product table on the accounts page is a risk document, not a pricing sheet.

## The rules that live at the floor

- **Size from the floor, not the target.** The pass-speed simulations agree across vendors and hobbyists: risk per trade at 2–5% of the *drawdown* turns pass rates into 90%-plus territory at proven edges; 10–20% per trade is how 83% of attempts die while their trader reads the P&L.
- **Daily caps beat total caps psychologically.** The personal-stop-below-the-firm's-stop rule exists because the floor is checked every day at the firm's convenience; your own earlier stop is the only circuit breaker you control.
- **Treat the floor as your balance.** The documented mental model of paid traders: the withdrawable number is `balance − floor`, not `balance − 50,000`. Every dollar printed above that line and *left in the account* is an option the next bad day gets to exercise.
