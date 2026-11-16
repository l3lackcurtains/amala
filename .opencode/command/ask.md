---
description: Answer a trading question using every trader in the Amala library (quotes + sources per trader)
argument-hint: <trading question>
---

# Ask the library

Question: **$ARGUMENTS**

You are answering from the Amala research library — the accumulated playbooks of every trader
in `trading/dashboard/src/markdown/traders/` and `trading/dashboard/src/data/traders/*.json`.
This is retrieval + synthesis from local files, not general knowledge.

## 1. Gather evidence

1. Pick **5–8 search terms** from the question, including synonyms
   (e.g. "stops" → also search `stop loss`, `risk`, `drawdown`; "when to quit" → `walk away`, `stop trading`, `overtrading`).
2. Use the grep tool over `trading/dashboard/src/markdown/traders/` with each term
   (case-insensitive, `-i`). Read the strongest hits with enough surrounding lines for context.
3. Read `trading/dashboard/src/data/traders/*.json` — the `profile` block answers
   "what/when/how does X trade" style questions instantly.
4. If a trader's hits are dense, read their full `rules.md` (rules are ordered items with
   `**bold titles**` — quote them directly).

## 2. Answer format

Answer in this exact structure:

### Per trader
One short block per trader (Denny, D-Money, Lucas, Zarb, …all traders in the library):
- What **they** specifically do/say about the question — 1–3 sentences
- A **direct quote** in italics with its source file noted
- Skip a trader only if the library truly has nothing from them on this — then say so

### Common threads
What all (or most) traders agree on — bullets.

### Where they differ
Explicit contrasts (e.g. "Denny never adds to losers; Lucas adds in drawdown under strict conditions").

### Sources
File paths + the video/article URLs from the trader JSONs where the best quotes came from.

## 3. Rules

- **Quote exactly** — never paraphrase a quote into something they didn't say.
- **Never invent.** If the library doesn't cover the question, say so plainly and suggest
  what could be researched to fill the gap.
- Cite like: (`dmoney/rules.md — Trend-Day Rules`) or (`lucas.json — videos`).
- Compare across traders — the value of this command is the side-by-side, not one trader's view.