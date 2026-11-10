// manjiro/play_steps.js — 再生（▶）と自動鑑賞の「次の年月」と「止まる所」の求め方（画面に依存しない）。
// manjiro/focusShell.html が読む。画面から切り離したのは、1841〜1898 年を最後まで送って
// 「1回ごとに年月が必ず変わるか」を node で機械的に確かめられるようにするため（2026-11-10）。
//
// 時刻 t は小数の年（track_engine.js と同じ。月の初め = year + (month-1)/12）。

import { trackAt, snapMonth, tOf, gcDistKm } from './track_engine.js?v=20261109e';

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
 *   t・lim は月の途中でもよい（2026-11-10：航路の上の止まる所を、船がその場所にいる時刻そのものに置いた）。
 *   t が月の途中なら、次は翌月の初め。行き先と lim が同じ月で lim の方が後なら、月の初めに寄らずに lim へ（同じ見出しが続かないように）。
 */
export function nextStep(tracks, t, lim = Infinity) {
  const k0 = Math.floor(t * 12 + EPS);
  const n = (k0 + 1) / 12, j = (k0 + 12) / 12;
  const limOk = lim > t + EPS ? lim : Infinity;
  const fin = (x, kind) => {
    if (x > limOk) x = limOk;
    if (limOk < Infinity && x < limOk - EPS && Math.floor(x * 12 + EPS) === Math.floor(limOk * 12 + EPS)) { x = limOk; if (kind === 'year') kind = 'align'; }
    return { t: x, kind };
  };
  if (sailingAt(tracks, t) || sailingAt(tracks, n)) return fin(n, 'month');
  let nxtTrack = Infinity;
  tracks.forEach(tr => {
    if (tr.tStart != null && tr.tStart > t + 1e-9) nxtTrack = Math.min(nxtTrack, tr.tStart);
    tr.points.forEach((p, i) => { const q = tr.points[i + 1]; if (p.gapToNext && q && q.t > t + 1e-9) nxtTrack = Math.min(nxtTrack, q.t); });
  });
  const target = Math.min(nxtTrack, limOk);
  // 1年送った先で船が出ている（その月に出港の記録がある等）なら、月も見せる（'align'）
  if (target >= j - EPS) return fin(j, sailingAt(tracks, j) ? 'align' : 'year');
  let m = monthFloor(target);
  if (target === nxtTrack && nxtTrack < limOk - EPS && !sailingAt(tracks, m)) {
    const c = monthCeil(target);
    if (c <= limOk + EPS && c < j - EPS) m = c;
  }
  return fin(Math.max(n, m), Math.max(n, m) >= j - EPS ? 'year' : 'align');
}
export const isMonthStart = t => Math.abs(t * 12 - Math.round(t * 12)) < 1e-6;

// ---------- 年譜（events.js の person）----------
// events.js の year 欄 → 時刻（月が書いてあればその月、無ければ startYear の1月）
export function evTime(e, fallbackYear = 1820) {
  const m = String(e.year || '').match(/^(\d{4})(?:\.(\d{1,2}))?/);
  if (m && +m[1] === e.startYear) return tOf(+m[1], m[2] ? +m[2] : 1);
  return tOf(e.startYear || fallbackYear, 1);
}
// 月が分かるのは、year 欄に月があり、その年が startYear と同じ時だけ（例「1848.11 — 1849.09」で startYear 1849 は、
// evTime が 1849年1月に置くので月は記録ではない＝年だけの出来事として扱う。監査 r6 中1）
export const evMonthKnown = e => { const m = String(e.year || '').match(/^(\d{4})\.\d{1,2}/); return !!m && +m[1] === e.startYear; };
export const evApprox = e => { const s = String(e.year || ''); return /年代|未確定/.test(s) ? '年は確かでない' : /頃/.test(s) ? '頃' : ''; };
export function lifeFromEvents(events, fallbackYear) {
  return events.filter(e => e.type === 'person')
    .map(e => ({ ...e, t: evTime(e, fallbackYear), monthKnown: evMonthKnown(e), approx: evApprox(e) }))
    .sort((a, b) => a.t - b.t);
}

// 章の時間の範囲（年譜と航海から）。'all' は持たない
// 年だけの出来事（その年の1月に置く）は、同じ章の時刻の分かるもの（月の分かる出来事・航海）のうち最も早いものと同じ年なら、それより前には置かない
// （2026-11-10 フェアヘーブンの章：到着 1843.05 と「ストーン・スクール 1843」で、章が1843年1月から始まり、ハウランド号の章（〜1843年5月）と重なっていた）
export function chapterRanges(chapters, life, tracks) {
  const out = {};
  chapters.forEach(c => {
    if (c.id === 'all') return;
    const ts = [];
    const evs = life.filter(e => e.chapterId === c.id), trs = tracks.filter(t => t.chapterId === c.id && t.tStart != null);
    const known = [...evs.filter(e => e.monthKnown).map(e => e.t), ...trs.map(t => t.tStart)];
    const kMin = known.length ? Math.min(...known) : null;
    evs.forEach(e => ts.push(!e.monthKnown && kMin != null && e.t < kMin && Math.floor(e.t + EPS) === Math.floor(kMin + EPS) ? kMin : e.t));
    trs.forEach(t => { ts.push(t.tStart); ts.push(t.tEnd); });
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
  const out = segs.map((s, i) => ({ s, i })).sort((a, b) => a.s.startT - b.s.startT || a.i - b.i).map(x => x.s);
  // 続く区間が前の区間の終わりより前に始まる時（ハウランド号は航路の終わりの翌月 1843年6月まで、フェアヘーブンは到着の 1843年5月から）は、
  // 前の区間の最後の止まる所が次の区間の始まり以前なら、前の区間をそこで終える（年月が後戻りしないように）。
  // そうでなければ次の区間の始まりを前の区間の終わりへ送り、それより前の止まる所はそこに寄せる（s.moved）
  for (let k = 1; k < out.length; k++) {
    const p = out[k - 1], c = out[k];
    if (c.startT >= p.endT - EPS) continue;
    const last = Math.max(p.startT, ...p.stops.map(s => s.t));
    if (last <= c.startT + EPS) { out[k - 1] = { ...p, endT: c.startT }; continue; }
    if (Math.floor(last * 12 + EPS) === Math.floor(c.startT * 12 + EPS)) { // 同じ月の中（到着の日がその月の途中）：前の区間をそこで終え、次の区間もそこから
      out[k - 1] = { ...p, endT: last };
      out[k] = { ...c, startT: last, stops: c.stops.map(s => s.t < last - EPS ? { ...s, t: last, joined: last } : s).sort((a, b) => a.t - b.t || a.i - b.i) };
      continue;
    }
    const st = p.endT;
    out[k] = { ...c, startT: st, stops: c.stops.map(s => s.t < st - EPS ? { ...s, t: st, moved: { dir: 'after', chapter: { id: p.chapterId, en: p.key } } } : s).sort((a, b) => a.t - b.t || a.i - b.i) };
  }
  return out;
}

// ---------- 年だけの出来事を、航路の上の「船がその場所を通る時刻」に置く（自動鑑賞だけ。タイムラインの位置は変えない）----------
// maxKm：出来事の場所と航路の点の距離の上限。yearPad：その年の中に点が無い時に、年の前後どこまでの点を見るか（年）。
// endKm：航路の最初・最後の点に結ぶ時の距離の上限（港に着いた後・出る前の陸の出来事、例：サクラメント・金山を、船が通る所にしない）
export const ON_TRACK = { maxKm: 1000, yearPad: 0.5, endKm: 50 };
// 船がその点にいる時刻そのもの（2026-11-10：月の初めでは、船は1か月に数千 km 動くので、止まる時に船の印が場所から遠かった）。
// 滞在のある点（入港〜出港）は滞在の中ほど
export function shipAtPoint(p) { const d = p.tDep ?? p.t; return d > p.t + 1 / 365 ? (p.t + d) / 2 : p.t; }
// 時刻 t を含む月の初め。その月の初めに船がまだ出ていなければ（出港・寄港が月の途中）、翌月の初め
function sailMonth(tr, t) {
  const f = monthFloor(t); if (trackAt(tr, f).state === 'sailing') return f;
  const c = monthCeil(t); return trackAt(tr, c).state === 'sailing' ? c : f;
}
/**
 * onTrackTime(e, tracks, opt) → null | { t, kind:'start'|'pass', how:'start'|'year'|'near', track, point, km }
 *   月の分からない出来事（e.monthKnown でない）だけ。tracks はその章の航路。
 *   ・航海の始まりの出来事（track.eventIds[0]）は、その航路の出発の月（kind 'start'）
 *   ・lat/lng があれば、航路の点のうち出来事の年の中（t が [年, 年+1)）にあって、場所に最も近い点（maxKm 以内）。how 'year'
 *     その年の中に無ければ、年の前後 yearPad 年までの点で最も近い点（maxKm 以内）。how 'near'（例：タヒチ 1843 は航路では 1842年12月）
 *   ・結んだ点が航路の最初・最後の点で、距離が endKm を超える時は結ばない（陸の出来事）。見つからなければ null（今の規則のまま）
 *   t は、kind 'pass' ならその点に船がいる時刻そのもの（shipAtPoint。月の途中のこともある）。kind 'start' は今の通り出発の月の初め（その月の初めに船が出ていなければ翌月の初め）
 */
export function onTrackTime(e, tracks, opt = ON_TRACK) {
  if (!e || e.monthKnown) return null;
  const trs = (tracks || []).filter(tr => tr.tStart != null && tr.points && tr.points.length);
  if (!trs.length) return null;
  const start = trs.find(tr => tr.eventIds && tr.eventIds[0] === e.id);
  if (start) return { t: sailMonth(start, start.tStart), kind: 'start', how: 'start', track: start, point: start.points[0], km: 0 };
  if (e.lat == null || e.lng == null) return null;
  const y = Math.floor(e.t + EPS);
  const cands = [];
  trs.forEach(tr => tr.points.forEach((p, i) => { if (p.t != null && p.lat != null && p.lng != null) cands.push({ tr, p, i, km: gcDistKm(p, e) }); }));
  const pick = list => { let b = null; list.forEach(c => { if (c.km <= opt.maxKm && (!b || c.km < b.km - 1e-9)) b = c; }); return b; };
  let best = pick(cands.filter(c => c.p.t >= y - EPS && c.p.t < y + 1 - EPS)), how = 'year';
  if (!best) { best = pick(cands.filter(c => c.p.t >= y - opt.yearPad - EPS && c.p.t < y + 1 + opt.yearPad - EPS)); how = 'near'; }
  if (!best) return null;
  const end = best.i === 0 || best.i === best.tr.points.length - 1;
  if (end && best.km > opt.endKm) return null;
  const x = shipAtPoint(best.p);
  return { t: trackAt(best.tr, x).state === 'sailing' ? x : sailMonth(best.tr, best.p.t), kind: 'pass', how, track: best.tr, point: best.p, km: best.km };
}

// ---------- 月の分かる出来事を、航路の上で「船がその場所にいる時刻」に合わせる（自動鑑賞だけ。タイムラインの位置は変えない）----------
// 2026-11-10 清水さん「1850.04 バルパライソ寄港のカードは地点はあっているが、自動再生だと、通り過ぎてから出ている」。
// 航路の時刻（研究のアンカーと距離からの推測）と年譜の年月が食い違う所で、カードが船の着く前・通り過ぎた後に出ていた。
// maxKm：出来事の場所と航路の点の距離の上限。maxMonths：年譜の月から動かしてよい幅（か月）。
// samePlaceKm：最も近い点から、この距離の内の点は「同じ場所に寄った別の時」とみなす（例：グアム・ホノルルに二度寄る）
export const SHIP_TIME = { maxKm: 1000, maxMonths: 4, samePlaceKm: 50 };
/**
 * shipTimeFor(e, tracks, opt) → null | { t, track, point, km, shipKm, months }
 *   月の分かる出来事（e.monthKnown）で lat/lng があるものだけ。tracks はその章の航路。動かさない時は null。
 *   ・航海の始まりの出来事（track.eventIds[0]）は動かさない（今の通り、出来事の月）
 *   ・航路の点のうち出来事の場所に最も近い点（maxKm 以内）と、そこから samePlaceKm 以内の点を見る
 *   ・出来事の月が、その点の航路の期間（出港の月〜終点）の外なら見ない（港に着いた後・出る前の陸の出来事。
 *     例：サンフランシスコへ戻る 1850.08・母との再会 1852.11 は、航路の終わりより後）。記録の無い空白（陸にいた期間）の中の出来事も見ない
 *   ・どれかの点で、船がそこにいる期間（入港〜出港）が出来事の月に重なれば、揃っている：その月の中で船がそこにいる時刻（months 0・aligned。注記なし）
 *   ・揃っていなければ、船がその点にいる時刻そのもの（shipAtPoint：滞在があれば中ほど。月の途中のこともある）。
 *     その時刻の月と年譜の月との差が maxMonths か月以内の時だけ（点がいくつかある時は差の小さい方、同じなら近い点）
 *   km は出来事の場所と点の距離、shipKm はその時刻の船の印と出来事の場所の距離、months はその時刻の月 − 年譜の月
 */
export function shipTimeFor(e, tracks, opt = SHIP_TIME) {
  if (!e || !e.monthKnown || e.lat == null || e.lng == null) return null;
  const trs = (tracks || []).filter(tr => tr.tStart != null && tr.points && tr.points.length);
  if (!trs.length || trs.some(tr => tr.eventIds && tr.eventIds[0] === e.id)) return null;
  const cands = [];
  trs.forEach(tr => tr.points.forEach((p, i) => { if (p.t != null && p.lat != null && p.lng != null) { const km = gcDistKm(p, e); if (km <= opt.maxKm) cands.push({ tr, p, i, km }); } }));
  if (!cands.length) return null;
  const minKm = Math.min(...cands.map(c => c.km));
  const e0 = e.t, e1 = e.t + 1 / 12; // 出来事の月 [e0, e1)
  const same = cands.filter(c => c.km <= minKm + opt.samePlaceKm)
    .filter(c => e1 > monthFloor(c.tr.tStart) + EPS && e0 <= c.tr.tEnd + EPS); // 航路の期間に重なる月だけ
  if (!same.length) return null;
  // 船がその月にそこにいる＝揃っている。その月の中で、船がそこにいる時刻（滞在の中ほどを月の中に収めたもの）に置く（months 0。注記は出さない）
  const al = same.filter(c => c.p.t < e1 - EPS && (c.p.tDep ?? c.p.t) >= e0 - EPS)
    .map(c => ({ c, x: Math.min(Math.max(shipAtPoint(c.p), e0), e1 - 1 / 365) })).filter(a => trackAt(a.c.tr, a.x).state === 'sailing')
    .sort((a, b) => a.c.km - b.c.km || a.x - b.x);
  if (al.length) { const a = al[0], r = trackAt(a.c.tr, a.x); return { t: a.x, track: a.c.tr, point: a.c.p, km: a.c.km, shipKm: r.head ? gcDistKm(r.head, e) : a.c.km, months: 0, aligned: true }; }
  if (same.some(c => c.p.t < e1 - EPS && (c.p.tDep ?? c.p.t) >= e0 - EPS)) return null;
  if (same.some(c => trackAt(c.tr, e0).state === 'gap')) return null; // 記録の無い空白（陸にいた期間）の中の出来事
  // 点ごとに：船がその点にいる時刻そのもの（船が出ている時・月の差が maxMonths 以内）
  const perPoint = same.map(c => {
    const x = shipAtPoint(c.p), r = trackAt(c.tr, x);
    if (r.state !== 'sailing' || !r.head) return null;
    const months = Math.round((monthFloor(x) - e0) * 12);
    if (Math.abs(months) > opt.maxMonths) return null;
    return { t: x, track: c.tr, point: c.p, km: c.km, shipKm: gcDistKm(r.head, e), months };
  }).filter(Boolean);
  // 点がいくつかある時は、年譜の月との差の小さい方（同じなら出来事の場所に近い点）
  perPoint.sort((a, b) => Math.abs(a.months) - Math.abs(b.months) || a.km - b.km);
  const best = perPoint[0];
  if (!best || best.months === 0) return null;
  return best;
}

/**
 * autoStops(life, cid, evOrder, tracks) → [{ e, t, after, onTrack, shipTime, i }]
 *   その章の年譜のすべて（主でない出来事も。2026-11-10 清水さん「なるべく人生年譜に配置されているカードは展開していきたい」）を
 *   events.js の並び（＝起きた順）で。
 *   月の分かる出来事は、航路の上で船がその場所にいる時刻が年譜の月から前後4か月以内で食い違う時、その時刻に置く（shipTimeFor。s.shipTime）。
 *   年だけの出来事（月は不明）は、章に航路があれば onTrackTime で「船がその場所を通る月」に置く（s.onTrack。タイムラインの位置は変えない）。
 *   航路に結べない年だけの出来事は1月に置かれているので、同じ年の月の分かる出来事（航路に置いた出来事も含む）より並びが後なら、
 *   その後に出す（s.after）。最後に時刻の順に並べ直す（同じ時刻は events.js の並び）。
 */
export function autoStops(life, cid, evOrder, tracks = []) {
  const list = life.filter(e => e.autoChapter === cid).sort((a, b) => evOrder.get(a.id) - evOrder.get(b.id));
  const ctr = (tracks || []).filter(tr => tr.chapterId === cid && tr.tStart != null);
  const knownByYear = new Map(); // 年 → それまでに出た、時刻の決まった出来事のうち最も遅いもの
  return list.map((e, i) => {
    const y = Math.floor(e.t + 1e-9), k = knownByYear.get(y);
    let t = e.t, after = null, onTrack = null, shipTime = null;
    const on = e.monthKnown ? null : onTrackTime(e, ctr);
    if (on) {
      t = on.t; onTrack = { t: on.t, kind: on.kind, how: on.how, track: on.track.key, point: on.point.label, km: Math.round(on.km) };
      if (!k || t > k.t) knownByYear.set(y, { id: e.id, title: e.title, t });
    } else if (e.monthKnown) {
      const st = shipTimeFor(e, ctr);
      if (st) { t = st.t; shipTime = { t: st.t, track: st.track.key, point: st.point.label, km: Math.round(st.km), shipKm: Math.round(st.shipKm), months: st.months, timing: st.point.timing }; }
      if (!k || t > k.t) knownByYear.set(y, { id: e.id, title: e.title, t });
    }
    else if (k && k.t > e.t) { t = k.t; after = k; }
    return { e, t, after, onTrack, shipTime, i };
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
      if (s.e.monthKnown || s.moved || s.onTrack || startIds.has(s.e.id)) return s; // 航路の上に置いた出来事（onTrackTime）は動かさない
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

/**
 * sameMonthStops(segs) → segs（月の途中に置いた止まる所の前後を整える。元の区間は変えない）
 *   航路の上の止まる所（shipTimeFor・onTrackTime）は月の途中の時刻のことがある。同じ月の初めに置いた別の止まる所があると、
 *   月の初め → 月の途中 の一歩で見出し（年月）が変わらない。そこで、同じ月の、月の初めに置いた止まる所は、その月の最も早い月の途中の時刻へ寄せる
 *   （s.joined＝その時刻。順は時刻、同じなら events.js の並び）。区間の始まり（月の初め）と最初の止まる所が同じ月なら、区間の始まりをその時刻にする。
 *   月の途中の止まる所どうしが同じ月にあり、場所が joinKm 以内（例：琉球近海→冒険号→小渡浜、リバプール→ロンドン）なら、後の方を前の方の時刻へ寄せる（s.joined）。
 *   場所が離れている時（例：ホノルル沖 1842年11月10日 → サモア 11月27日）は、どちらもそのまま（船は大きく動くが、見出しは同じ年月）
 */
export const JOIN_KM = 300;
export function sameMonthStops(segs, joinKm = JOIN_KM) {
  return segs.map(g => {
    if (!g.stops || !g.stops.length || g.stops.every(s => isMonthStart(s.t))) return g;
    const mk = t => Math.floor(t * 12 + EPS);
    let prev = null;
    const near = g.stops.map(s => {
      if (isMonthStart(s.t)) return s;
      if (prev && mk(prev.t) === mk(s.t) && s.t > prev.t && prev.e.lat != null && s.e.lat != null && gcDistKm(prev.e, s.e) <= joinKm) { const j = { ...s, t: prev.t, joined: prev.t }; prev = j; return j; }
      prev = s; return s;
    });
    const firstExact = new Map(); // 月 → その月の最も早い月の途中の時刻
    near.forEach(s => { if (!isMonthStart(s.t)) { const k = Math.floor(s.t * 12 + EPS); if (!firstExact.has(k) || s.t < firstExact.get(k)) firstExact.set(k, s.t); } });
    const stops = near.map(s => {
      if (!isMonthStart(s.t)) return s;
      const x = firstExact.get(Math.floor(s.t * 12 + EPS));
      return x != null && x > s.t ? { ...s, t: x, joined: x } : s;
    }).sort((a, b) => a.t - b.t || a.i - b.i);
    let startT = g.startT;
    if (Math.floor(stops[0].t * 12 + EPS) === Math.floor(startT * 12 + EPS) && stops[0].t > startT) startT = stops[0].t;
    return { ...g, stops, startT };
  });
}

// ---------- 自動鑑賞の追跡（カメラの向きから船がどれだけ離れたら寄せるか）----------
// 2026-11-10 清水さん「自動再生モードでの追跡が効かない（ジョン・ハウランド号がアメリカへ行くと見えなくなる）」。
// 画面に依存しない幾何だけをここに置く（focusShell.html の autoFollow が使う）。
const D2R = Math.PI / 180;
const unit = (lat, lng) => { const p = lat * D2R, l = lng * D2R; return [Math.cos(p) * Math.cos(l), Math.cos(p) * Math.sin(l), Math.sin(p)]; };
/** centralAngleDeg(a, b) → 二点（{lat,lng}）の大圏の角度（度） */
export function centralAngleDeg(a, b) {
  const u = unit(a.lat, a.lng), v = unit(b.lat, b.lng);
  return Math.acos(Math.max(-1, Math.min(1, u[0] * v[0] + u[1] * v[1] + u[2] * v[2]))) / D2R;
}
export const FOLLOW = { maxDeg: 35, frac: 0.6 };
/**
 * followLimitDeg(altitude, fovDeg, aspect, opt) → 度
 *   カメラの向き（画面の中心の地点）から、船がこの角度（大圏）を超えて離れたら、船の方へ寄せる。
 *   opt.maxDeg（35°）と、「船が画面の中心から、縦・横の短い方の半分の opt.frac の所に見える角度」の小さい方。
 *   高い所から見る時（章全体を収めた高さ）は 35°、低い所から見る時は画面の端より内側で寄せる（地球の裏側へ回る前に）。
 */
export function followLimitDeg(altitude, fovDeg = 50, aspect = 1, opt = FOLLOW) {
  const D = 1 + Math.max(0.01, altitude);
  const vh = fovDeg / 2 * D2R, hh = Math.atan(Math.tan(vh) * aspect);
  const beta = Math.min(vh, hh) * opt.frac;
  // 地球の中心から θ 離れた地点の、視線からの角度 = atan(sinθ / (D − cosθ))。θ は 0〜地平線（acos(1/D)）で増えるので二分法
  let lo = 0, hi = Math.acos(1 / D);
  for (let k = 0; k < 40; k++) { const mid = (lo + hi) / 2; if (Math.atan2(Math.sin(mid), D - Math.cos(mid)) < beta) lo = mid; else hi = mid; }
  return Math.min(opt.maxDeg, lo / D2R);
}
/** followNeeded(cam, head, fovDeg, aspect) → true なら船へ寄せる（cam＝{lat,lng,altitude}、head＝{lat,lng}） */
export function followNeeded(cam, head, fovDeg = 50, aspect = 1, opt = FOLLOW) {
  if (!cam || !head || head.lat == null || head.lng == null) return false;
  return centralAngleDeg(cam, head) > followLimitDeg(cam.altitude, fovDeg, aspect, opt);
}
