// manjiro/play_steps.js — 再生（▶）と自動鑑賞の「次の年月」と「止まる所」の求め方（画面に依存しない）。
// manjiro/focusShell.html が読む。画面から切り離したのは、1841〜1898 年を最後まで送って
// 「1回ごとに年月が必ず変わるか」を node で機械的に確かめられるようにするため（2026-11-10）。
//
// 時刻 t は小数の年（track_engine.js と同じ。月の初め = year + (month-1)/12）。

import { trackAt, snapMonth, tOf } from './track_engine.js?v=20261109e';

const EPS = 1e-6;
export const monthFloor = t => Math.floor(t * 12 + EPS) / 12; // t を含む月の初め
export const monthCeil = t => Math.ceil(t * 12 - EPS) / 12;   // t 以後で最初の月の初め

// その月の初めに、どれかの航路で船が出ているか（'sailing'）。'before'（出港前）・'gap'（記録の無い空白）・'after' は出ていない
export const sailingAt = (tracks, t) => tracks.some(tr => trackAt(tr, t).state === 'sailing');

/**
 * nextStep(tracks, t, lim) → { t, kind }
 *   航海中（今の月か次の月に船が出ている）なら 1 か月：kind 'month'
 *   航海の無い期間（記録の無い空白を含む）は 1 年：kind 'year'
 *   ただし 1 年の間に「次の航海の始まり」「空白の終わり」「lim（自動鑑賞の次の出来事・章の終わり）」があれば、そこへ寄せる：kind 'align'
 *   寄せる先が航海の始まり・空白の終わりで、その月の初めにはまだ船が出ていない時（出港が月の途中）は、翌月の初めへ寄せる
 *   （その月の初めでは船も線も出ず、画面が何も変わらない一歩になっていた。2026-11-10 の不具合の調べ）。
 *   戻り値の t は必ず t より後の月の初め（同じ年月が続かない）。lim を越える時は lim（lim が t より後の時）。
 *   kind 'year' の一歩は、画面の見出しを「○年」だけにする（月の数字が同じまま年だけ変わると、月が止まって見えた）。
 */
export function nextStep(tracks, t, lim = Infinity) {
  const n = snapMonth(t + 1 / 12);
  const cap = x => (lim > t + EPS ? Math.min(x, lim) : x);
  if (sailingAt(tracks, t) || sailingAt(tracks, n)) return { t: cap(n), kind: 'month' };
  let nxtTrack = Infinity;
  tracks.forEach(tr => {
    if (tr.tStart != null && tr.tStart > t + 1e-9) nxtTrack = Math.min(nxtTrack, tr.tStart);
    tr.points.forEach((p, i) => { const q = tr.points[i + 1]; if (p.gapToNext && q && q.t > t + 1e-9) nxtTrack = Math.min(nxtTrack, q.t); });
  });
  const j = snapMonth(t + 1);
  const limOk = lim > t + EPS ? lim : Infinity;
  const target = Math.min(nxtTrack, limOk);
  // 1年送った先で船が出ている（その月に出港の記録がある等）なら、月も見せる（'align'）
  if (target >= j - EPS) return { t: j, kind: sailingAt(tracks, j) ? 'align' : 'year' };
  let m = monthFloor(target);
  if (target === nxtTrack && nxtTrack < limOk - EPS && !sailingAt(tracks, m)) {
    const c = monthCeil(target);
    if (c <= limOk + EPS && c < j - EPS) m = c;
  }
  return { t: Math.max(n, m), kind: Math.max(n, m) >= j - EPS ? 'year' : 'align' };
}

// ---------- 年譜（events.js の person）----------
// events.js の year 欄 → 時刻（月が書いてあればその月、無ければ startYear の1月）
export function evTime(e, fallbackYear = 1820) {
  const m = String(e.year || '').match(/^(\d{4})(?:\.(\d{1,2}))?/);
  if (m && +m[1] === e.startYear) return tOf(+m[1], m[2] ? +m[2] : 1);
  return tOf(e.startYear || fallbackYear, 1);
}
export const evMonthKnown = e => /^\d{4}\.\d{1,2}/.test(String(e.year || ''));
export const evApprox = e => { const s = String(e.year || ''); return /年代|未確定/.test(s) ? '年は確かでない' : /頃/.test(s) ? '頃' : ''; };
export function lifeFromEvents(events, fallbackYear) {
  return events.filter(e => e.type === 'person')
    .map(e => ({ ...e, t: evTime(e, fallbackYear), monthKnown: evMonthKnown(e), approx: evApprox(e) }))
    .sort((a, b) => a.t - b.t);
}

// 章の時間の範囲（年譜と航海から）。'all' は持たない
export function chapterRanges(chapters, life, tracks) {
  const out = {};
  chapters.forEach(c => {
    if (c.id === 'all') return;
    const ts = [];
    life.filter(e => e.chapterId === c.id).forEach(e => ts.push(e.t));
    tracks.filter(t => t.chapterId === c.id && t.tStart != null).forEach(t => { ts.push(t.tStart); ts.push(t.tEnd); });
    if (ts.length) out[c.id] = { from: Math.min(...ts), to: Math.max(...ts) };
  });
  return out;
}
// 自動鑑賞の章に年譜を割り当てる（e.autoChapter）。章の無い年譜は、時刻が範囲に入る最初の章へ
export function assignAutoChapters(life, autoChapters, ranges) {
  life.forEach(e => {
    if (e.chapterId) { e.autoChapter = e.chapterId; return; }
    const c = autoChapters.find(c => e.t >= ranges[c.id].from - 1e-9 && e.t <= ranges[c.id].to + 1e-9);
    e.autoChapter = c ? c.id : null;
  });
}

/**
 * autoSegments(autoChapters, ranges, tracks, stopsOf) → 自動鑑賞で回る区間（年代順）
 *   章の範囲が他の章の範囲を丸ごと含む時（例：晩年 1864〜1898 が 欧州へ 1870〜1871 を含む）は、含まれる章の前後で分ける
 *   （「晩年（1）」1864〜欧州の前、「晩年（2）」欧州から戻った後〜1898）。分けた後の区間を、始まりの時刻の順に並べる。
 *   止まる出来事（stopsOf(cid) の戻り）は時刻でその区間へ。含まれる章の期間の中にある出来事は、近い方の区間の端に寄せる
 *   （寄せた時は s.moved＝{ dir:'after'|'before', chapter } を付ける。タイムラインの年月は変えない）。
 *   区間 { key, chapterId, part, parts, from, to, startT, endT, tracks, stops, afterChapter, beforeChapter }
 *   startT・endT は月の初め。分けた区間は、含まれる章と重ならないように内側へ丸める（年月が後戻りしないように）。
 */
export function autoSegments(autoChapters, ranges, tracks, stopsOf) {
  const segs = [];
  autoChapters.forEach(c => {
    const rg = ranges[c.id];
    const ctracks = tracks.filter(tr => tr.chapterId === c.id && tr.tStart != null);
    const stops = stopsOf(c.id);
    // 含まれる章（範囲が同じものは含むとみなさない）。重なり合うものはまとめる
    const inner = autoChapters.filter(d => d.id !== c.id && ranges[d.id] && ranges[d.id].from >= rg.from - 1e-9 && ranges[d.id].to <= rg.to + 1e-9 &&
      !(Math.abs(ranges[d.id].from - rg.from) < 1e-9 && Math.abs(ranges[d.id].to - rg.to) < 1e-9))
      .map(d => ({ d, from: ranges[d.id].from, to: ranges[d.id].to })).sort((a, b) => a.from - b.from);
    const holes = [];
    inner.forEach(h => { const last = holes[holes.length - 1]; if (last && h.from <= last.to + 1e-9) { last.to = Math.max(last.to, h.to); last.last = h.d; } else holes.push({ from: h.from, to: h.to, first: h.d, last: h.d }); });
    let pieces = [];
    let cur = { from: rg.from, startT: monthFloor(rg.from), afterChapter: null };
    holes.forEach(h => { pieces.push({ ...cur, to: h.from, endT: monthFloor(h.from), beforeChapter: h.first }); cur = { from: h.to, startT: monthCeil(h.to), afterChapter: h.last }; });
    pieces.push({ ...cur, to: rg.to, endT: monthCeil(rg.to), beforeChapter: null });
    // 長さの無い区間は、出来事が入らなければ捨てる（下で振り分けた後に判断）
    if (pieces.length > 1) pieces = pieces.filter(p => p.endT >= p.startT - 1e-9);
    if (!pieces.length) pieces = [{ from: rg.from, to: rg.to, startT: monthFloor(rg.from), endT: monthCeil(rg.to), afterChapter: null, beforeChapter: null }];
    pieces.forEach(p => { p.stops = []; p.tracks = []; });
    const nearest = t => { let best = pieces[0], bd = Infinity; pieces.forEach(p => { const d = t < p.startT ? p.startT - t : t > p.endT ? t - p.endT : 0; if (d < bd - 1e-9) { bd = d; best = p; } }); return best; };
    stops.forEach(s => {
      const p = nearest(s.t);
      if (s.t < p.startT - 1e-9) { s = { ...s, t: p.startT, moved: { dir: 'after', chapter: p.afterChapter } }; }
      else if (s.t > p.endT + 1e-9) { s = { ...s, t: p.endT, moved: { dir: 'before', chapter: p.beforeChapter } }; }
      p.stops.push(s);
    });
    ctracks.forEach(tr => nearest(tr.tStart).tracks.push(tr));
    const keep = pieces.length > 1 ? pieces.filter(p => p.endT > p.startT + 1e-9 || p.stops.length || p.tracks.length) : pieces;
    keep.forEach((p, k) => {
      p.stops.sort((a, b) => a.t - b.t || a.i - b.i);
      segs.push({ key: c.id + (keep.length > 1 ? '#' + (k + 1) : ''), chapterId: c.id, part: keep.length > 1 ? k + 1 : null, parts: keep.length, ...p });
    });
  });
  return segs.map((s, i) => ({ s, i })).sort((a, b) => a.s.startT - b.s.startT || a.i - b.i).map(x => x.s);
}

/**
 * autoStops(lifePrimary, cid, evOrder) → [{ e, t, after, i }]
 *   その章の主な年譜（timelineVisible!==false）を events.js の並び（＝起きた順）で。年だけの出来事（月は不明）は1月に置かれているので、
 *   同じ年の月の分かる出来事より並びが後なら、その後に出す（タイムラインの位置は変えない。カードに「月は記録ではない」と書く）。
 */
export function autoStops(lifePrimary, cid, evOrder) {
  const list = lifePrimary.filter(e => e.autoChapter === cid).sort((a, b) => evOrder.get(a.id) - evOrder.get(b.id));
  const knownByYear = new Map(); // 年 → それまでに出た、月の分かる出来事のうち最も遅いもの
  return list.map((e, i) => {
    const y = Math.floor(e.t + 1e-9), k = knownByYear.get(y);
    let t = e.t, after = null;
    if (e.monthKnown) { if (!k || e.t > k.t) knownByYear.set(y, e); }
    else if (k && k.t > e.t) { t = k.t; after = k; }
    return { e, t, after, i };
  }).sort((a, b) => a.t - b.t || a.i - b.i);
}

/**
 * holdYearOnlyAfterTracks(segs, life, evOrder) → segs（各区間の stops を直したもの。元の区間は変えない）
 *   航路のある区間で、年だけが分かる出来事（monthKnown でない）のカードを、その区間の航路を描き終えた後に出す（監査 r4 L7）。
 *   例：欧州へ（1870〜1871）の「スエズ運河経由で帰国」（1870）・「帰国（神戸・横浜）」（1871）は、年の1月や11月に置くと、航路（〜1871年4月）より先にカードが出ていた。
 *   寄せるのは次の時だけ（航海の始まりを告げる出来事、例「フランクリン号捕鯨航海」（1846）・「咸臨丸で再渡米」（1860）を後ろへ送らないため）：
 *     ・出来事の年が、区間の航路の期間（最初の出港〜最後の終点）に重なる
 *     ・events.js の並び（＝起きた順）で、同じ章の月の分かる出来事のうち航路の期間の中にあるもの（主でない出来事も含む）の、どれよりも後
 *     ・いまの止まる時刻が、航路の終わりより前
 *   寄せた時は s.t を航路の終わりの月の初め（区間の終わりを越えない）にし、s.afterTracks＝true（s.after は外す）。タイムラインの年月は変えない。
 */
export function holdYearOnlyAfterTracks(segs, life, evOrder) {
  return segs.map(g => {
    const trs = (g.tracks || []).filter(tr => tr.tStart != null && tr.tEnd != null);
    if (!trs.length || !g.stops || !g.stops.length) return g;
    const from = Math.min(...trs.map(tr => tr.tStart)), to = Math.max(...trs.map(tr => tr.tEnd));
    const endM = Math.min(monthCeil(to), g.endT ?? Infinity);
    const known = life.filter(e => e.autoChapter === g.chapterId && e.monthKnown && e.t >= from - EPS && e.t <= to + EPS);
    if (!known.length) return g; // 比べる相手（航路の期間の中の、月の分かる出来事）が無い章では寄せない（監査 r5 中1）
    const lastKnown = Math.max(...known.map(e => evOrder.get(e.id) ?? -1));
    const startIds = new Set(trs.map(tr => tr.eventIds && tr.eventIds[0]).filter(Boolean)); // 航路を作る最初の出来事（航海の始まり）は送らない
    let changed = false;
    const stops = g.stops.map(s => {
      if (s.e.monthKnown || s.moved || startIds.has(s.e.id)) return s;
      const y = Math.floor(s.e.t + EPS);
      if (!(y + 1 > from + EPS && y <= to + EPS)) return s;
      if ((evOrder.get(s.e.id) ?? -1) <= lastKnown) return s;
      if (s.t >= endM - EPS) return s;
      changed = true;
      return { ...s, t: endM, after: null, afterTracks: true };
    });
    if (!changed) return g;
    stops.sort((a, b) => a.t - b.t || a.i - b.i);
    return { ...g, stops };
  });
}
