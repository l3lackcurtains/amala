// Transcript fetcher v3: desktop-UA watch page (captionTracks proven present), depth-safe parse,
// json3 -> XML attempts, then innertube ANDROID/IOS fallbacks. Usage: node yt-transcript.cjs <videoId> [videoId...]
const https = require('https');
const fs = require('fs');

const DESKTOP_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

function request(url, opts = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = https.request(u, {
      method: opts.method || 'GET',
      headers: { 'User-Agent': opts.ua || DESKTOP_UA, 'Accept-Language': 'en-US,en;q=0.9', ...(opts.headers || {}) },
    }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) {
        return resolve(request(new URL(r.headers.location, url).href, { ...opts, redirects: (opts.redirects || 0) + 1 }));
      }
      let d = '';
      r.on('data', (c) => (d += c));
      r.on('end', () => resolve({ status: r.statusCode, body: d }));
    });
    req.on('error', reject);
    if (opts.body) req.write(opts.body);
    req.end();
  });
}
function unwrap(s) { return String(s).replace(/\\u0026/g, '&').replace(/\\\//g, '/').replace(/\\"/g, '"'); }
function extractArray(html, marker) {
  const keyIdx = html.indexOf(marker);
  if (keyIdx === -1) return null;
  const arrStart = html.indexOf('[', keyIdx);
  if (arrStart === -1) return null;
  let depth = 0, inStr = false, esc = false;
  for (let i = arrStart; i < html.length; i++) {
    const c = html[i];
    if (inStr) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === '"') inStr = false; continue; }
    if (c === '"') inStr = true;
    else if (c === '[') depth++;
    else if (c === ']') { depth--; if (depth === 0) return html.slice(arrStart, i + 1); }
  }
  return null;
}

async function getTracks(id) {
  const page = await request(`https://www.youtube.com/watch?v=${id}&hl=en`);
  const arrText = extractArray(page.body, '"captionTracks"');
  if (process.env.TRANS_DEBUG) {
    console.error(`[debug] page status=${page.status} len=${page.body.length} captionTracks@${page.body.indexOf('"captionTracks"')} ytInitialPlayer@${page.body.indexOf('ytInitialPlayerResponse')}`);
  }
  if (arrText) {
    try {
      const tracks = JSON.parse(arrText);
      if (tracks.length) return { tracks, via: 'watch-page' };
    } catch (e) {}
  }
  for (const client of [
    { clientName: 'ANDROID', clientVersion: '19.09.37', androidSdkVersion: 30, osName: 'Android', osVersion: '11' },
    { clientName: 'IOS', clientVersion: '19.29.1', deviceModel: 'iPhone16,2', osName: 'iOS', osVersion: '17.5.1.21F90' },
  ]) {
    try {
      const body = JSON.stringify({ context: { client }, videoId: id, contentCheckOk: true, racyCheckOk: true });
      const resp = await request('https://www.youtube.com/youtubei/v1/player?prettyPrint=false', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        ua: DESKTOP_UA,
        body,
      });
      const j = JSON.parse(resp.body);
      const tracks = j && j.captions && j.captions.playerCaptionsTracklistRenderer && j.captions.playerCaptionsTracklistRenderer.captionTracks;
      if (tracks && tracks.length) return { tracks, via: 'innertube-' + client.clientName };
    } catch (e) {}
  }
  return null;
}

function json3ToLines(j) {
  const lines = [];
  let cur = '';
  for (const ev of j.events || []) {
    if (!ev.segs) continue;
    const t = ev.segs.map((s) => s.utf8).join('').replace(/\n/g, ' ');
    if (!t.trim()) continue;
    const secs = Math.round((ev.tStartMs || 0) / 1000);
    const mm = String(Math.floor(secs / 60)).padStart(2, '0');
    const ss = String(secs % 60).padStart(2, '0');
    cur += ' ' + t;
    if (cur.length > 220) { lines.push(`[${mm}:${ss}] ${cur.trim()}`); cur = ''; }
  }
  if (cur.trim()) lines.push(cur.trim());
  return lines.join('\n');
}

async function fetchTranscript(id) {
  const got = await getTracks(id);
  if (!got) return { error: 'no caption tracks' };
  const track = got.tracks.find((t) => (t.languageCode || '').startsWith('en')) || got.tracks[0];
  const base = unwrap(track.baseUrl);
  // json3
  try {
    const cap = await request(base + '&fmt=json3');
    if (cap.body && cap.body.trimStart().startsWith('{')) {
      const text = json3ToLines(JSON.parse(cap.body));
      if (text.length > 50) return { via: got.via, text };
    }
  } catch (e) {}
  // xml
  try {
    const cap = await request(base);
    if (cap.body && cap.body.length > 100) {
      const texts = [...cap.body.matchAll(/<text[^>]*start="(\d+)"[^>]*>([\s\S]*?)<\/text>/g)].map((m) => {
        const secs = Math.round(Number(m[1]));
        const mm = String(Math.floor(secs / 60)).padStart(2, '0');
        const ss = String(secs % 60).padStart(2, '0');
        return `[${mm}:${ss}] ` + m[2]
          .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
          .replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\n/g, ' ');
      });
      if (texts.length) return { via: got.via + '+xml', text: texts.join('\n') };
    }
  } catch (e) {}
  return { error: 'caption url returned empty' };
}

(async () => {
  const ids = process.argv.slice(2);
  if (!ids.length) ids.push('CPpSOqgi9iI');
  for (const id of ids) {
    const r = await fetchTranscript(id);
    if (r.error) { console.log(id, 'ERROR:', r.error); continue; }
    fs.writeFileSync(`C:/Users/oled/AppData/Local/Temp/opencode/transcript-${id}.txt`, r.text);
    console.log(id, 'OK via', r.via, '| chars:', r.text.length);
  }
})();
