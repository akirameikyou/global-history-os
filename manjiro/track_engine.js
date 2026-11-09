// manjiro/track_engine.js — 航路の時刻づけと「時刻 t までの線・船の位置」の計算（画面に依存しない）。
// 設計: docs/manjiro_monthly/DESIGN_v0.1.md §3
//
// 二つの確かさを混ぜない：
//   routeStatus … どこを通ったか（events.js の segmentStatusToNext ＞ defaultSegmentStatus ＞ 'default'）。線の種類で示す。
//   timing      … いつそこにいたか（'anchor' = 日付の記録がある月 / 'interpolated' = アンカー間を距離で割り振った推測）。船の印で示す。
//
// 時刻 t は小数の年。月の初め = year + (month-1)/12。

const D = Math.PI / 180;

// ── 時刻 ──────────────────────────────────────────
export function tOf(year, month = 1, day = 1) {
  const dim = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return year + (month - 1 + (day - 1) / dim) / 12;
}
// 'YYYY' | 'YYYY-MM' | 'YYYY-MM-DD' → { t, precision }
export function parseDate(s) {
  const m = String(s).trim().match(/^(\d{4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?$/);
  if (!m) return null;
  const y = +m[1], mo = m[2] ? +m[2] : 1, d = m[3] ? +m[3] : 1;
  return { t: tOf(y, mo, d), precision: m[3] ? 'day' : m[2] ? 'month' : 'year', year: y, month: m[2] ? mo : null, day: m[3] ? d : null };
}
// events.js の year 欄（'1841.06' / '1846' / '1848.11 — 1849.08'）の先頭 → { t, precision }
function parseEventYear(s) {
  const m = String(s || '').match(/(\d{4})(?:\.(\d{1,2}))?/);
  if (!m) return null;
  return { t: tOf(+m[1], m[2] ? +m[2] : 1), precision: m[2] ? 'month' : 'year' };
}
export function ymOf(t) { // t → { year, month }（月の初めに丸める）
  const k = Math.floor(t * 12 + 1e-6);
  return { year: Math.floor(k / 12), month: (k % 12) + 1 };
}
export function ymLabel(t) { const { year, month } = ymOf(t); return year + '年' + month + '月'; }
export function dateJa(s) { const p = parseDate(s); if (!p) return String(s || ''); return p.year + '年' + (p.month ? p.month + '月' : '') + (p.day ? p.day + '日' : ''); }
export function snapMonth(t) { return Math.round(t * 12) / 12; }

// ── 球面 ──────────────────────────────────────────
const toV = p => { const la = p.lat * D, lo = p.lng * D; return [Math.cos(la) * Math.cos(lo), Math.cos(la) * Math.sin(lo), Math.sin(la)]; };
const toLL = v => ({ lat: Math.asin(Math.max(-1, Math.min(1, v[2]))) / D, lng: Math.atan2(v[1], v[0]) / D });
export function gcDistKm(a, b) {
  const va = toV(a), vb = toV(b);
  const d = Math.max(-1, Math.min(1, va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2]));
  return Math.acos(d) * 6371;
}
export function slerp(a, b, f) {
  const va = toV(a), vb = toV(b);
  const d = Math.max(-1, Math.min(1, va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2]));
  const om = Math.acos(d);
  if (om < 1e-9) return { lat: a.lat, lng: a.lng };
  const s = Math.sin(om), k1 = Math.sin((1 - f) * om) / s, k2 = Math.sin(f * om) / s;
  return toLL([va[0] * k1 + vb[0] * k2, va[1] * k1 + vb[1] * k2, va[2] * k1 + vb[2] * k2]);
}

// ── 航路を組む ────────────────────────────────────
function segStatus(p, ev) { return p.segmentStatusToNext || ev.defaultSegmentStatus || 'default'; }

// events を航海（voyageId、無ければ event.id）ごとに束ね、点を順につなぐ。
function rawTracks(events) {
  const byKey = new Map();
  events.forEach(ev => {
    if (ev.routeType !== 'voyage' || !Array.isArray(ev.routePoints) || ev.routePoints.length < 2) return;
    const key = ev.voyageId || ev.id;
    if (!byKey.has(key)) byKey.set(key, { key, chapterId: ev.chapterId || null, events: [], points: [] });
    const tr = byKey.get(key); tr.events.push(ev);
    ev.routePoints.forEach((p, i) => {
      const last = tr.points[tr.points.length - 1];
      const same = last && Math.abs(last.lat - p.lat) < 1e-6 && Math.abs(last.lng - p.lng) < 1e-6;
      // 前の event の終点と、この event の始点が違う場所なら、その間は記録の無い空白（線を引かない・船を出さない）
      if (i === 0 && last && !same) { last.routeStatus = 'control'; last.gapToNext = true; }
      const pt = {
        lat: p.lat, lng: p.lng, label: p.label || '', eventId: ev.id, indexInEvent: i,
        pointStatus: p.historicalStatus || ev.historicalStatus || 'default',
        routeStatus: segStatus(p, ev), // この点から次の点までの区間の来歴
        transport: p.transport || ev.transport || 'sailing',
        color: ev.lineColor || '#66e0ff',
      };
      if (same) { Object.assign(last, { routeStatus: pt.routeStatus, transport: pt.transport, eventId: last.eventId, alsoEvent: ev.id }); return; }
      tr.points.push(pt);
    });
  });
  return [...byKey.values()];
}

// アンカーの ref → 点の番号。ref: { event, label } か { event, index } か { lat, lng }（最寄りの点）
function resolveRef(tr, ref) {
  if (!ref) return -1;
  if (ref.event != null) {
    const idx = tr.points.findIndex(p => (p.eventId === ref.event || p.alsoEvent === ref.event) &&
      (ref.label != null ? p.label === ref.label : ref.index != null ? p.indexInEvent === ref.index : true));
    if (idx >= 0) return idx;
  }
  if (ref.lat != null && ref.lng != null) {
    let best = -1, bd = Infinity;
    tr.points.forEach((p, i) => { const d = gcDistKm(p, ref); if (d < bd) { bd = d; best = i; } });
    return best;
  }
  return -1;
}

/**
 * buildTracks(events, voyageTimings)
 * voyageTimings: data/manjiro_track.js の voyageTimings（航海 key ごとの anchors・dwell）
 * 戻り: tracks[] { key, chapterId, label, ship, color, points[{lat,lng,label,t,tDep,routeStatus,transport,timing,anchor}], tStart, tEnd, anchors[], warnings[] }
 */
export function buildTracks(events, voyageTimings = []) {
  const timingByKey = new Map(voyageTimings.map(v => [v.key, v]));
  return rawTracks(events).map(tr => {
    const vt = timingByKey.get(tr.key) || {};
    const warnings = [];
    const n = tr.points.length;
    // 1) アンカー（研究で確かめた日付）を点へ
    const anchorAt = new Array(n).fill(null);
    (vt.anchors || []).forEach(a => {
      const i = resolveRef(tr, a.ref); const pd = parseDate(a.date);
      if (i < 0 || !pd) { warnings.push('anchor を点に結べない: ' + JSON.stringify(a.ref) + ' ' + a.date); return; }
      anchorAt[i] = { ...a, t: pd.t, precision: pd.precision };
    });
    // 2) 端にアンカーが無ければ events.js の年（月）で補う（確かさ: estimated, 出典: events.js）
    const fallbackFromEvent = (i, ev) => {
      const py = ev && parseEventYear(ev.year);
      if (!py) return null;
      return { t: py.t, precision: py.precision, status: 'estimated', fromEventData: true, label: tr.points[i].label,
        sources: [{ title: 'data/events.js の year 欄（' + ev.year + '）', kind: 'project_data' }], note: '研究で確かめた日付ではない。既存データの年（月）。' };
    };
    // events.js の年月を弱いアンカーとして、その event の「出来事の場所」（ev.lat/lng）に最も近い点に置く（監査 H5：最初の点に置くと、
    //   例えばグアム着の月がクパンに付いて 7,000 km を 12 日で走る時刻になった）。vt.dropWeak に挙げた event は使わない（記録と食い違うと判断したもの）。
    const dropWeak = new Set(vt.dropWeak || []);
    tr.events.forEach(ev => {
      if (dropWeak.has(ev.id)) { warnings.push('events.js の年月を使わない（記録と食い違う）: ' + ev.id); return; }
      const cand = tr.points.map((p, i) => ({ p, i })).filter(({ p }) => p.eventId === ev.id || p.alsoEvent === ev.id);
      if (!cand.length) return;
      let best = cand[0];
      if (ev.lat != null && ev.lng != null) { let bd = Infinity; cand.forEach(c => { const d = gcDistKm(c.p, ev); if (d < bd) { bd = d; best = c; } }); }
      if (!anchorAt[best.i]) { const fb = fallbackFromEvent(best.i, ev); if (fb) anchorAt[best.i] = fb; }
    });
    // 最後の点：vt.end（研究）が無ければ、次に「最初の点」より後で最大の時刻を待つ（下で補う）
    // 順序の検査：時刻が後戻りする弱いアンカーは捨てる
    // 研究のアンカーを優先：弱いアンカー（events.js の年月）は、前後の研究のアンカーの時刻の間に入る時だけ残す
    let lastT = -Infinity;
    for (let i = 0; i < n; i++) {
      const a = anchorAt[i]; if (!a || a.fromEventData) continue;
      if (a.t < lastT - 1e-9) warnings.push('アンカーの時刻が後戻り: ' + (a.label || i) + ' ' + (a.date || ''));
      lastT = Math.max(lastT, a.t);
    }
    for (let i = 0; i < n; i++) {
      const a = anchorAt[i]; if (!a || !a.fromEventData) continue;
      let lo = -Infinity, hi = Infinity;
      for (let j = i - 1; j >= 0; j--) if (anchorAt[j] && !anchorAt[j].fromEventData) { lo = anchorAt[j].t; break; }
      for (let j = i + 1; j < n; j++) if (anchorAt[j] && !anchorAt[j].fromEventData) { hi = anchorAt[j].t; break; }
      // 前の弱いアンカーより後であることも要る
      let loWeak = -Infinity; for (let j = i - 1; j >= 0; j--) if (anchorAt[j]) { loWeak = anchorAt[j].t; break; }
      if (!(a.t > lo && a.t < hi && a.t >= loWeak)) { anchorAt[i] = null; warnings.push('events.js の年月を使わなかった（記録の日付と合わない）: ' + (a.label || i)); }
    }
    // 速さの検査：前後のアンカーまでの航路の距離を、時刻の差で割って 1日 MAX_KM_PER_DAY を超える弱いアンカーは捨てる
    const routeKm = (i, j) => { let s = 0; for (let k = i; k < j; k++) if (!tr.points[k].gapToNext) s += gcDistKm(tr.points[k], tr.points[k + 1]); return s; };
    for (let pass = 0; pass < 3; pass++) {
      const idx = anchorAt.map((a, i) => a ? i : -1).filter(i => i >= 0);
      for (let k = 0; k < idx.length - 1; k++) {
        const i = idx[k], j = idx[k + 1]; if (!anchorAt[i] || !anchorAt[j]) continue;
        const days = (anchorAt[j].t - anchorAt[i].t) * 365.25, km = routeKm(i, j);
        if (days > 0 && km / days <= MAX_KM_PER_DAY) continue;
        const weak = anchorAt[j].fromEventData ? j : anchorAt[i].fromEventData ? i : -1;
        if (weak >= 0) { warnings.push('events.js の年月を使わなかった（1日 ' + Math.round(km / Math.max(days, 0.1)) + ' km になる）: ' + anchorAt[weak].label); anchorAt[weak] = null; }
        else warnings.push('記録のアンカーどうしで 1日 ' + Math.round(km / Math.max(days, 0.1)) + ' km になる: ' + anchorAt[i].label + '→' + anchorAt[j].label);
      }
    }
    // 3) 滞在（漁場など）。アンカーに depart（出港日）があれば、その点の滞在は記録の日数
    const dwellAt = new Array(n).fill(0);
    (vt.dwell || []).forEach(dw => { const i = resolveRef(tr, dw.ref); if (i >= 0) dwellAt[i] = (dw.months || 0) / 12; else warnings.push('dwell を点に結べない: ' + JSON.stringify(dw.ref)); });
    const fixedDwell = new Array(n).fill(false);
    anchorAt.forEach((a, i) => { if (a && a.depart) { const pd = parseDate(a.depart); if (pd && pd.t >= a.t) { dwellAt[i] = pd.t - a.t; fixedDwell[i] = true; } else warnings.push('depart が読めない: ' + a.depart); } });
    // 4) 終点の時刻：アンカーが無ければ、平均の速さ（vt.speedKmPerDay か既定）で外挿
    const speed = vt.speedKmPerDay || DEFAULT_SPEED_KM_PER_DAY;
    const idxs = anchorAt.map((a, i) => a ? i : -1).filter(i => i >= 0);
    if (!idxs.length) { warnings.push('時刻の手がかりが無い'); }
    const tAt = new Array(n).fill(null);
    idxs.forEach(i => tAt[i] = anchorAt[i].t);
    if (idxs.length) {
      const first = idxs[0], last = idxs[idxs.length - 1];
      // 先頭より前・末尾より後は速さで外挿
      for (let i = first - 1; i >= 0; i--) tAt[i] = tAt[i + 1] - dwellAt[i] - gcDistKm(tr.points[i], tr.points[i + 1]) / speed / 365.25;
      for (let i = last + 1; i < n; i++) tAt[i] = tAt[i - 1] + dwellAt[i - 1] + gcDistKm(tr.points[i - 1], tr.points[i]) / speed / 365.25;
      // アンカーの間は、滞在を先に引き、残りを距離に比例して配る
      for (let k = 0; k < idxs.length - 1; k++) {
        const a = idxs[k], b = idxs[k + 1], span = tAt[b] - tAt[a];
        let dwellSum = 0, fixedSum = 0; for (let i = a; i < b; i++) { if (fixedDwell[i]) fixedSum += dwellAt[i]; else dwellSum += dwellAt[i]; }
        if (fixedSum > span + 1e-9) warnings.push('出港日が次のアンカーより後: ' + tr.points[a].label);
        const room = Math.max(0, span - fixedSum);
        const scale = dwellSum > room * 0.85 ? (room * 0.85) / dwellSum : 1; // 推測の滞在が区間を食い尽くさないように（記録の滞在は縮めない）
        if (scale < 1) warnings.push('推測の滞在が区間より長いので縮めた: ' + tr.points[a].label + '→' + tr.points[b].label);
        const move = room - dwellSum * scale;
        let distSum = 0; const seg = []; let gaps = 0;
        for (let i = a; i < b; i++) { const g = !!tr.points[i].gapToNext; const d = g ? 0 : gcDistKm(tr.points[i], tr.points[i + 1]); seg.push(d); distSum += d; if (g) gaps++; }
        // 空白（陸にいた期間など）を含む時は、航走の区間に目安の速さの時間だけを渡し、残りを空白に吸わせる（監査 M3）
        let travel = move;
        if (gaps) travel = Math.min(move, distSum / speed / 365.25);
        const gapTime = gaps ? (move - travel) / gaps : 0;
        let acc = tAt[a];
        for (let i = a; i < b; i++) {
          if (i > a) tAt[i] = acc;
          if (!fixedDwell[i]) dwellAt[i] *= scale;
          const dt = tr.points[i].gapToNext ? gapTime : (distSum > 0 ? travel * seg[i - a] / distSum : travel / Math.max(1, b - a - gaps));
          acc += dwellAt[i] + dt;
        }
      }
    }
    const points = tr.points.map((p, i) => {
      const a = anchorAt[i];
      return { ...p, t: tAt[i], tDep: tAt[i] + (i < n - 1 ? dwellAt[i] : 0), dwellMonths: Math.round(dwellAt[i] * 12 * 10) / 10,
        timing: a && !a.fromEventData && a.status !== 'estimated' ? 'anchor' : 'interpolated', anchor: a || null };
    });
    // 滞在がアンカー点にある場合は tDep を次の点の t を超えないよう丸める
    for (let i = 0; i < n - 1; i++) if (points[i].tDep > points[i + 1].t) points[i].tDep = points[i + 1].t;
    const anchors = points.filter(p => p.anchor).map(p => ({ ...p.anchor, lat: p.lat, lng: p.lng, label: p.anchor.label || p.label, t: p.t }));
    return { key: tr.key, chapterId: tr.chapterId, label: vt.label || tr.events[0].routeName || tr.key, ship: vt.ship || null,
      color: tr.points[0] ? tr.points[0].color : '#66e0ff', eventIds: tr.events.map(e => e.id),
      points, tStart: points[0] ? points[0].t : null, tEnd: points[n - 1] ? points[n - 1].t : null, anchors, warnings,
      method: vt.method || null,
      // 航路の点に結べない記録の位置（他船との会合など）。航路の順序と食い違う記録もここに置き、画面で別の印にする
      observations: (vt.observations || []).map(o => { const a = parseDate(o.date), b = o.dateEnd ? parseDate(o.dateEnd) : a; return a ? { ...o, t: a.t, tEnd: b ? b.t : a.t } : null; }).filter(Boolean),
      conflicts: vt.conflicts || [] };
  });
}

// 1日の進みの上限（これを超える弱いアンカーは捨てる）と、外挿・空白の区間に使う航走の目安。出典は data/manjiro_track.js の trackMethod.speed。
// 278 km ≒ 150 海里（AOWL の日ごとの距離の上位 10% の値 142 海里を少し上回る）。160 km ≒ 86 海里は「回航の目安」（推測。中央値 55 海里・平均 68 海里より速い）。
export const MAX_KM_PER_DAY = 278;
export const DEFAULT_SPEED_KM_PER_DAY = 160;

const isMonthStart = t => Math.abs(t * 12 - Math.round(t * 12)) < 1e-6;
// その暦月を代表する時刻：月の中に記録のアンカー（強いもの）があれば、その日付。無ければ月の初め（監査 H1・Codex 1）。
export function representativeT(track, t) {
  if (!isMonthStart(t)) return { t, anchor: null };
  const m1 = t + 1 / 12 - 1e-9;
  const a = track.anchors.find(x => isStrong(x) && x.t >= t - 1e-9 && x.t < m1);
  return a ? { t: a.t, anchor: a } : { t, anchor: null };
}

/**
 * trackAt(track, t) → { state, path:[{a,b,routeStatus,transport,partial}], head, tEff }
 *   state: 'before' | 'sailing' | 'gap' | 'after'
 *   t が月の初めで、その月に記録のアンカーがあれば、その日付の位置を返す（tEff）。
 *   head.timing: 'anchor' は「船がその時刻に記録の地点にいる」時だけ（記録の日付ちょうど、または記録の滞在中）。それ以外は 'interpolated'。
 *   head.secondary: 記録が二次資料だけ（evidence REPORTED）の時 true。
 */
export function trackAt(track, tIn) {
  const P = track.points, n = P.length;
  if (!n || track.tStart == null) return { state: 'before', path: [], head: null, tEff: tIn };
  const rep = representativeT(track, tIn), t = rep.t;
  if (t < track.tStart - 1e-9) return { state: 'before', path: [], head: null, tEff: t };
  const segs = [];
  const headAt = (a, b, stay) => {
    const atAnchor = isStrong(a.anchor) && (stay || Math.abs(t - a.t) < 1e-6);
    return { lat: a.lat, lng: a.lng, at: a, prev: a, next: b, f: 0, stay, timing: atAnchor ? 'anchor' : 'interpolated',
      anchor: atAnchor ? a.anchor : null, secondary: atAnchor && a.anchor.evidence === 'REPORTED', date: atAnchor ? (stay ? null : a.anchor.date) : null };
  };
  for (let i = 0; i < n - 1; i++) {
    const a = P[i], b = P[i + 1];
    if (t >= b.t - 1e-9 && !(i === n - 2 && Math.abs(t - b.t) < 1e-6 && isStrong(b.anchor))) { segs.push({ a, b, routeStatus: a.routeStatus, transport: a.transport, partial: false }); continue; }
    if (i === n - 2 && Math.abs(t - b.t) < 1e-6) { // 最後の点に記録の日付ちょうど（帰着の月）＝船を終点に出す
      segs.push({ a, b, routeStatus: a.routeStatus, transport: a.transport, partial: false });
      return { state: 'sailing', path: segs, head: headAt(b, null, false), tEff: t };
    }
    if (t <= a.tDep + 1e-9) { // 点 a に滞在中（入港〜出港）
      const dep = a.anchor && a.anchor.departStatus; // 出港日の確かさ：recorded（記録）／ last_seen（その日まで在港の記録）／ planned（予定）／ reported（二次資料）／ estimated
      const stay = isStrong(a.anchor) && !!a.anchor.depart && t >= a.t - 1e-9 && (dep == null || dep === 'recorded' || dep === 'last_seen');
      return { state: 'sailing', path: segs, head: headAt(a, b, stay), tEff: t };
    }
    if (a.gapToNext) return { state: 'gap', path: segs, head: null, gapFrom: a, gapTo: b, tEff: t }; // 記録の無い空白（陸にいた期間など）
    const f = (t - a.tDep) / Math.max(1e-9, b.t - a.tDep);
    const pos = slerp(a, b, f);
    segs.push({ a, b: { ...b, lat: pos.lat, lng: pos.lng }, routeStatus: a.routeStatus, transport: a.transport, partial: true });
    return { state: 'sailing', path: segs, head: { lat: pos.lat, lng: pos.lng, at: null, prev: a, next: b, f, timing: 'interpolated', anchor: null, secondary: false, date: null }, tEff: t };
  }
  return { state: 'after', path: segs, head: null, tEff: t };
}

const isStrong = a => !!a && !a.fromEventData && a.status !== 'estimated';
function sameMonth(t, year, month) { const m = ymOf(t + 1e-6); return m.year === year && m.month === month; }

/** monthlyPositions(track) → [{ ym, t, lat, lng, timing, anchor, prevAnchor, nextAnchor }] */
export function monthlyPositions(track) {
  if (track.tStart == null) return [];
  const out = [];
  const t0 = Math.floor(track.tStart * 12) / 12, t1 = track.tEnd;
  for (let t = t0; t <= t1 + 1e-9; t = Math.round((t + 1 / 12) * 12) / 12) {
    const tt = Math.max(t, track.tStart);
    // その月に記録のアンカーがあれば、画面と同じく trackAt(t) をそのまま使う（監査 r2 N1：最後の月の表と画面の食い違い）
    const r = representativeT(track, t).anchor ? trackAt(track, t) : trackAt(track, Math.min(tt, t1 - 1e-6));
    const { year, month } = ymOf(t);
    const ym = year + '-' + String(month).padStart(2, '0');
    const obs = observationsAt(track, t);
    if (r.state === 'gap') { out.push({ ym, t, lat: null, lng: null, timing: 'gap', anchor: null, prevAnchor: null, nextAnchor: null, observations: obs }); continue; }
    const pos = r.head || (r.path.length ? r.path[r.path.length - 1].b : track.points[0]);
    const h = r.head;
    const anchor = h && h.timing === 'anchor' ? h.anchor : null; // 位置が記録の地点にある時だけ（監査 H1）
    const te = r.tEff;
    const prevAnchor = [...track.anchors].reverse().find(x => x.t <= te + 1e-9) || null;
    const nextAnchor = track.anchors.find(x => x.t > te + 1e-9) || null;
    out.push({ ym, t, tEff: te, lat: +pos.lat.toFixed(2), lng: +pos.lng.toFixed(2),
      timing: anchor ? 'anchor' : 'interpolated', secondary: !!(h && h.secondary), stay: !!(h && h.stay), anchor, prevAnchor, nextAnchor, observations: obs });
  }
  return out;
}

/** observationsAt(track, t) → その月に重なる「航路の点に結べない記録の位置」 */
export function observationsAt(track, t) {
  const { year, month } = ymOf(t + 1e-6); const m0 = tOf(year, month), m1 = m0 + 1 / 12;
  return (track.observations || []).filter(o => o.t < m1 && o.tEnd >= m0);
}

const srcLine = a => (a && a.sources && a.sources.length) ? a.sources.map(s => s.title).join('／') : '出典なし';
/** timingSourceText(track, head, t) → カードに出す一文 */
export function timingSourceText(track, head, t) {
  if (!head) return '';
  const { year, month } = ymOf(t);
  const kind = a => a.evidence === 'REPORTED' ? '記録（二次資料）' : '記録';
  if (head.timing === 'anchor') {
    const a = head.anchor;
    const depWord = { last_seen: '在港の記録の最後', planned: '出港の予定', reported: '出港（二次資料）', estimated: '出港（推測）' }[a.departStatus] || '出港';
    if (head.stay) return year + '年' + month + '月：' + (a.label || '') + ' に滞在（' + kind(a) + '：入港 ' + dateJa(a.date) + '〜' + depWord + ' ' + dateJa(a.depart) + '。' + srcLine(a) + '）';
    return dateJa(a.date) + '：' + (a.label || '') + '（' + kind(a) + '：' + srcLine(a) + '）';
  }
  const tt = representativeT(track, t).t;
  const before = [...track.anchors].reverse().find(x => x.t <= tt + 1e-9) || null, after = track.anchors.find(x => x.t > tt + 1e-9) || null;
  const when = x => x.fromEventData ? (x.precision === 'year' ? ymOf(x.t).year + '年（月は不明）・既存データの年' : ymLabel(x.t) + '・既存データの年月') : dateJa(x.date) + '・' + srcLine(x);
  const f = x => x ? (x.label || '') + '（' + when(x) + '）' : '—';
  const obs = observationsAt(track, t);
  return '推測：' + f(before) + ' と ' + f(after) + ' の間を、距離と漁場の滞在で割り振った位置。'
    + (obs.length ? ' ／ この月には航路から外れた記録の位置があります（◇の印）：' + obs.map(o => o.label + '（' + srcLine(o) + '）').join('／') : '');
}
