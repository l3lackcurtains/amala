# Amala

Workspace for **Amala** — a study dashboard of prop-firm traders' playbooks (Denny, D-Money,
Lucas, Zarb, Daniel Holmes, FitMomTrader), built from their public blogs and YouTube channels.

## Layout

```
amala/        ← the app (Astro static dashboard) — this is the main thing you run
research/     ← supporting research, never shipped to the app
  traders/<slug>/   raw per-trader research (STRATEGY / RULES / PSYCHOLOGY / ARTICLES /
                    YOUTUBE-VIDEOS / SOURCES .md, plus early standalone .html pages)
  youtube/          BDH Trading master video index + RSS extraction
tools/        ← scripts (yt-transcript.cjs — pulls YouTube transcripts)
.opencode/    ← agent files: /add-trader, /ask, /enrich-trader commands
STANDARD.md   ← data spec: how trader data is stored, normalized, and queried
```

## Working here

- **Run the app**: `cd amala && npm install && npm run dev` — details in [`amala/README.md`](amala/README.md).
- **Add a trader**: run `/add-trader <youtube-handle>` (see [STANDARD.md](STANDARD.md)).
- **Ask the library**: run `/ask <trading question>`.
- **Deploy**: `git push` auto-deploys `amala/` to Vercel (project name `amala`).

Educational study material only — not financial advice.
