// ueshiba/life_steps.js — 植芝盛平Focus の計算（画面に依存しない）。ueshiba/focusShell.html が読む。
// 万次郎版の play_steps.js（航路と月の送り）にあたるが、植芝盛平には航路が無いので、年を単位にする。
// 時刻 t は小数の年（万次郎版の track_engine.js と同じ約束：月の初め = year + (month-1)/12）。
// 試験は ueshiba/test.html（ブラウザ）。

export const tOfDate = (y, m = 1, d = 1) => y + (m - 1) / 12 + (d - 1) / 365;

/** 出来事の時刻。日付があればその日、無ければその年の初め（年だけの出来事。カードでそう書く） */
export function evTime(e) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e.date || '');
  return m ? tOfDate(+m[1], +m[2], +m[3]) : e.year;
}

/** 年の表示。食い違う年は「1911 / 1912」、時代の札があればその札（例「北海道時代」）を添えるのは画面側 */
export const yearText = e => e.yearAlt ? `${e.year} / ${e.yearAlt}` : String(e.year);

/** 日付の表示（"1883-12-14" → 12月14日）。無ければ空 */
export function dayJa(e) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e.date || '');
  return m ? `${+m[2]}月${+m[3]}日` : '';
}

/** 年の順（同じ時刻はデータの並び）に並べ、t を付けた写しを返す */
export function lifeFromData(events) {
  return events.map((e, i) => ({ ...e, t: evTime(e), order: i }))
    .sort((a, b) => a.t - b.t || a.order - b.order);
}

/** その年がどの章か */
export const chapterOf = (year, chapters) => chapters.find(c => year >= c.from && year <= c.to) || null;

/** t までの最後の出来事（kind を指定すればその種類だけ。場所の要る時は withPlace） */
export function lastBefore(life, t, { kind = null, withPlace = false } = {}) {
  let best = null;
  for (const e of life) {
    if (e.t > t + 1e-9) break;
    if (kind && e.kind !== kind) continue;
    if (withPlace && !e.place) continue;
    best = e;
  }
  return best;
}

/** 地球に出す印：t までに起きた、場所のある出来事。場所ごとに一つ（その場所の最後の出来事を代表に） */
export function placeMarksUpTo(life, places, t) {
  const m = new Map();
  for (const e of life) {
    if (e.t > t + 1e-9 || !e.place || !places[e.place]) continue;
    const p = places[e.place];
    const cur = m.get(e.place) || { place: e.place, lat: p.lat, lng: p.lng, ids: [], kinds: new Set() };
    cur.ids.push(e.id); cur.kinds.add(e.kind); cur.last = e.id;
    m.set(e.place, cur);
  }
  return [...m.values()];
}

/** 再生の次の年（1年ずつ。最後は max で止まる） */
export const nextYear = (t, max) => Math.min(max, Math.floor(t + 1e-9) + 1);
export const prevYear = (t, min) => Math.max(min, Math.ceil(t - 1e-9) - 1);

/** データの決まりを確かめる。問題の一覧（空なら合格） */
export function validate(D) {
  const errs = [], srcIds = new Set(Object.keys(D.sources || {}));
  for (const [id, s] of Object.entries(D.sources || {})) {
    if (!/^https:\/\//.test(s.url || '')) errs.push(`出典 ${id}: URL が https でない`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(s.checked_on || '')) errs.push(`出典 ${id}: 確認日がない`);
  }
  const ids = new Set();
  for (const e of D.events || []) {
    if (ids.has(e.id)) errs.push(`${e.id}: id が重複`); ids.add(e.id);
    if (!Number.isInteger(e.year)) errs.push(`${e.id}: 年がない`);
    if (!['confirmed', 'split', 'partial'].includes(e.status)) errs.push(`${e.id}: status が不明`);
    if (!['life', 'org'].includes(e.kind)) errs.push(`${e.id}: kind が不明`);
    if (!e.sources || !e.sources.length) errs.push(`${e.id}: 出典がない`);
    (e.sources || []).forEach(s => { if (!srcIds.has(s)) errs.push(`${e.id}: 出典 ${s} が一覧にない`); });
    if (e.place && !(D.places || {})[e.place]) errs.push(`${e.id}: 場所 ${e.place} が一覧にない`);
    if (!e.text || !e.text.ja) errs.push(`${e.id}: 本文がない`);
    if (e.date && !e.date.startsWith(String(e.year))) errs.push(`${e.id}: 日付と年が合わない`);
    if (e.status === 'split' && (!e.yearAlt || !e.split || e.split.length < 2)) errs.push(`${e.id}: 食い違いの内訳がない`);
    if (e.yearAlt && e.status !== 'split') errs.push(`${e.id}: 二つの年があるのに split でない`);
    if (e.status === 'partial' && !(e.note && e.note.ja)) errs.push(`${e.id}: 一部未確認なのに注記がない`);
  }
  for (const u of D.unverified || []) if (u.sources || u.place) errs.push(`未確認 ${u.year}: 出典・場所を持たせない（確かめたら本編へ）`);
  for (const f of D.figures || []) if (!f.sources || !f.sources.length || !/\d{4}-\d{2}-\d{2}/.test((f.note || {}).ja || '')) errs.push(`数 ${f.id}: 出典か確認日がない`);
  return errs;
}
