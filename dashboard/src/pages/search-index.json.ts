import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import { extractRules, slugify, toText, parseFrontmatter, tagTopics } from '../lib/normalize';

// Build-time search + query index over every trader:
// profile, playbook subsections, individual tagged rules, videos, articles.
// Consumed by the global search (Ctrl K) and the /ask page.
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
    const profile = t.profile || {};

    // Profile — answers "what does X trade?"
    docs.push({
      ...base,
      section: 'profile',
      title: `${t.name} — profile`,
      text: [
        t.summary,
        t.oneLiner,
        profile.instruments ? `Instruments: ${profile.instruments.join(', ')}` : '',
        profile.style ? `Style: ${profile.style}` : '',
        profile.sessions ? `Sessions: ${profile.sessions.join(', ')}` : '',
        profile.firms ? `Firms: ${profile.firms.join(', ')}` : '',
        ...(t.highlights || []),
      ].filter(Boolean).join(' · '),
      topics: tagTopics([t.summary, t.oneLiner, (profile.instruments || []).join(' '), (profile.style || '')].join(' ')),
      url: `/traders/${t.slug}`,
      anchor: 'overview',
    });

    // Playbook sections + individual rules
    for (const s of t.sections || []) {
      try {
        const p = path.join(process.cwd(), 'src', 'markdown', 'traders', t.slug, `${s.file}.md`);
        const raw = fs.readFileSync(p, 'utf8');
        const fm = parseFrontmatter(raw);
        const html = marked.parse(fm.body, { gfm: true }) as string;
        const fmTopics = Array.isArray(fm.data.topics) ? fm.data.topics : [];

        // Individual rules as standalone docs
        if (s.id === 'rules') {
          const rules = extractRules(html);
          for (const r of rules) {
            docs.push({
              ...base,
              section: 'rule',
              group: r.group,
              ruleId: `${t.slug}-r${r.index}`,
              title: `${t.name} rule: ${r.title}`,
              text: r.text,
              topics: r.topics,
              url: `/traders/${t.slug}`,
              anchor: `${s.id}-${r.anchor}`,
            });
          }
          continue;
        }

        // Other sections: one doc per "## " subsection
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
            topics: [...fmTopics, ...tagTopics(part.body)].slice(0, 6),
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
        topics: tagTopics(`${v.title} ${v.takeaway || ''}`),
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
        topics: tagTopics(`${a.title} ${a.takeaway || ''}`),
        url: `/traders/${t.slug}`,
        anchor: 'articles',
      });
    }
  }

  return new Response(JSON.stringify(docs), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
