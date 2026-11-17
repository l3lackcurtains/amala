// Normalization layer for the Amala data standard.
// Turns the markdown authoring format (frontmatter + sectioned bodies + rule lists)
// into structured, queryable objects at build time.

import { slugify, toText } from '../utils/text';
export { slugify, toText };

/** Minimal YAML frontmatter parser: `key: value`, `key: [a, b]` and `- item` lists. */
export function parseFrontmatter(raw: string): { data: Record<string, any>; body: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {}, body: raw };
  const data: Record<string, any> = {};
  let currentKey: string | null = null;
  for (const line of m[1].split(/\r?\n/)) {
    if (!line.trim()) continue;
    const listItem = line.match(/^\s*-\s+(.+)$/);
    if (listItem && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(listItem[1].trim().replace(/^["']|["']$/g, ''));
      continue;
    }
    const kv = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (kv) {
      currentKey = kv[1];
      const v = kv[2].trim();
      if (!v) { data[currentKey] = []; continue; }
      if (v.startsWith('[')) {
        data[currentKey] = v.slice(1, v.lastIndexOf(']')).split(',').map((x) => x.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
      } else {
        data[currentKey] = v.replace(/^["']|["']$/g, '');
      }
    }
  }
  return { data, body: raw.slice(m[0].length) };
}

/** Controlled topic vocabulary for tagging + the Ask page. */
export const TOPICS: Record<string, string[]> = {
  'risk': ['risk', 'stop', 'stop loss', 'drawdown', 'max loss', 'blow', 'protect'],
  'entries': ['entry', 'enter', 'trigger', 'confirmation', 'rejection', 'retrace', 'pullback', 'breakout'],
  'exits': ['exit', 'take profit', 'target', 'trail', 'tp', 'scale out', 'runner'],
  'sizing': ['size', 'sizing', 'contract', 'micro', 'position', 'leverage'],
  'sessions': ['session', 'kill zone', 'asia', 'london', 'open', 'globex', 'power hour', 'pre-market', '9:30'],
  'market-regime': ['chop', 'range', 'trend day', 'regime', 'consolidat', 'expansion', 'inside', 'volatil'],
  'indicators': ['ema', 'vwap', 'indicator', 'moving average', 'volume profile'],
  'payouts': ['payout', 'withdraw', 'profit split'],
  'prop-firm': ['prop firm', 'eval', 'evaluation', 'apex', 'tradeify', 'lucid', 'vest', 'blusky', 'topstep', 'funded', 'mffu', 'myfunded'],
  'psychology': ['mindset', 'psycholog', 'tilt', 'revenge', 'fomo', 'confidence', 'fear', 'greed', 'emotion'],
  'discipline': ['discipline', 'walk away', 'overtrading', 'rule break', 'consistency', 'routine', 'patience'],
  'setups': ['setup', 'pattern', 'double bottom', 'double top', 'flag', 'sweep', 'liquidity', 'order block', 'fvg', 'wick', 'structure', 'orb'],
  'tools': ['tradingview', 'tool', 'chart', 'software', 'platform', 'tradovate'],
  'news': ['news', 'cpi', 'fomc', 'fed', 'nfp', 'earnings', 'election'],
};

/** Auto-tag a piece of text with topics from the controlled vocabulary. */
export function tagTopics(text: string, extra: string[] = []): string[] {
  const t = text.toLowerCase();
  const tags = new Set<string>();
  for (const [topic, words] of Object.entries(TOPICS)) {
    if (words.some((w) => t.includes(w))) tags.add(topic);
  }
  for (const e of extra) tags.add(e);
  return [...tags];
}

export interface ExtractedRule {
  index: number;        // continuous across the whole rules file
  group: string;        // "## " group header it belongs to
  title: string;        // bold lead of the item, if present
  text: string;         // full plain text
  topics: string[];     // auto-tagged topics
  anchor: string;       // id used on the rendered <li>
}

/**
 * Inject stable ids onto top-level <li> items of a rendered rules section.
 * Returns the new html and the number of rules found.
 */
export function injectRuleIds(html: string, prefix: string): { html: string; count: number } {
  let n = 0;
  const stack: string[] = [];
  const out = html.replace(
    /<(ol|ul)[^>]*>|<\/(ol|ul)>|<li([^>]*)>/gi,
    (full: string, open?: string, close?: string, attrs?: string) => {
      if (open) { stack.push(open); return full; }
      if (close) { stack.pop(); return full; }
      const topOl = stack[stack.length - 1] === 'ol';
      const nested = stack.slice(0, -1).some((s) => s === 'ol' || s === 'ul');
      if (!topOl || nested) return full;
      n += 1;
      return `<li${attrs || ''} id="${prefix}${n}">`;
    }
  );
  return { html: out, count: n };
}

/**
 * Extract structured rules from a rules.md body (rendered to HTML).
 * Top-level <ol><li> items become rules; <h2> headers set the group;
 * <ul> sub-lists inside items are ignored.
 */
export function extractRules(html: string): ExtractedRule[] {
  const rules: ExtractedRule[] = [];
  let group = 'general';
  let index = 0;
  const tokenRe = /<h2[^>]*>([\s\S]*?)<\/h2>|<(ol|ul)[^>]*>|<\/(ol|ul)>|<li[^>]*>([\s\S]*?)<\/li>/gi;
  const stack: string[] = []; // 'ol' | 'ul'
  let m: RegExpExecArray | null;
  while ((m = tokenRe.exec(html)) !== null) {
    if (m[1] !== undefined) { group = toText(m[1]) || group; stack.length = 0; continue; }
    if (m[2]) { stack.push(m[2]); continue; }
    if (m[3]) { stack.pop(); continue; }
    if (m[4] !== undefined) {
      const topOl = stack[stack.length - 1] === 'ol';
      const nested = stack.slice(0, -1).some((s) => s === 'ol' || s === 'ul');
      if (!topOl || nested) continue;
      index += 1;
      const raw = m[4];
      const boldMatch = raw.match(/<(?:strong|b)[^>]*>([\s\S]*?)<\/(?:strong|b)>/);
      const title = boldMatch ? toText(boldMatch[1]).replace(/[.:]\s*$/, '') : `Rule ${index}`;
      const text = toText(raw);
      rules.push({
        index,
        group,
        title: title.length > 90 ? title.slice(0, 90) + '…' : title,
        text,
        topics: tagTopics(text),
        anchor: `rule-${index}`,
      });
    }
  }
  return rules;
}
