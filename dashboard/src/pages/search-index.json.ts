import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import { slugify, toText } from '../utils/text';

// Build-time search index over every trader: overview, playbook subsections,
// rules, videos, and articles. Consumed by the client-side global search.
export async function GET() {
  const mods = import.meta.glob('../data/traders/*.json', { eager: true }) as Record<string, any>;
  const traders = Object.values(mods)
    .map((m) => m.default ?? m)
    .sort((a, b) => (a.name || '').localeCompare(b.name || ''));

  const docs: any[] = [];

  for (const t of traders) {
    const base = {
      trader: t.name,
      color: t.accent,
      slug: t.slug,
    };

    // Overview
    docs.push({
      ...base,
      section: 'overview',
      title: `${t.name} — overview`,
      text: [t.summary, t.oneLiner, t.keyQuote, ...(t.highlights || [])].filter(Boolean).join(' · '),
      url: `/traders/${t.slug}`,
      anchor: 'overview',
    });

    // Playbook sections, one doc per "## " subsection (fold)
    for (const s of t.sections || []) {
      try {
        const p = path.join(process.cwd(), 'src', 'markdown', 'traders', t.slug, `${s.file}.md`);
        const raw = fs.readFileSync(p, 'utf8');
        const html = marked.parse(raw, { gfm: true }) as string;
        const re = /<h2[^>]*>([\s\S]*?)<\/h2>/g;
        const parts: { title: string; body: string }[] = [];
        let rest = html;
        let m: RegExpExecArray | null;
        const first = rest.match(re);
        if (first && first.index && first.index > 0) {
          parts.push({ title: '', body: toText(rest.slice(0, first.index)) });
          rest = rest.slice(first.index);
        }
        while ((m = re.exec(rest)) !== null) {
          const start = m.index + m[0].length;
          const nextMatch = rest.slice(start).match(re);
          const end = nextMatch && nextMatch.index !== undefined ? start + nextMatch.index : rest.length;
          parts.push({ title: toText(m[1]), body: toText(rest.slice(start, end)) });
          re.lastIndex = end;
        }
        const tail = toText(rest.slice(re.lastIndex || 0));
        if (tail) parts.push({ title: '', body: tail });

        for (const part of parts) {
          if (!part.body || part.body.length < 20) continue;
          docs.push({
            ...base,
            section: s.id,
            title: part.title || `${t.name} — ${s.title}`,
            text: part.body,
            url: `/traders/${t.slug}`,
            anchor: part.title ? `${s.id}-${slugify(part.title)}` : s.id,
          });
        }
      } catch {
        // markdown file missing — skip
      }
    }

    // Videos
    for (const v of t.videos || []) {
      const id = (v.url || '').match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/)?.[1] ?? '';
      docs.push({
        ...base,
        section: 'video',
        title: v.title,
        text: v.takeaway || '',
        url: id ? `/watch?v=${id}` : v.url,
        anchor: '',
      });
    }

    // Articles
    for (const a of t.articles || []) {
      docs.push({
        ...base,
        section: 'article',
        title: a.title,
        text: a.takeaway || '',
        url: `/traders/${t.slug}`,
        anchor: 'articles',
      });
    }
  }

  return new Response(JSON.stringify(docs), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
