// History OS — Aikido History OS (independent instance)
// 「モードアダプタ」形式。データ/ロジックはこのファイル経由でのみ触る。
// 2026-07 更新：
//  - 道場を「設立(A)」「初到達(B)」「現在の分布(network)」の3系統で扱う。
//  - 詳細は右パネル差し替えではなく、浮遊カード（main 側）で表示する。
//    本モードは各クリック対象の「カードデータ」を返すことに専念する。

import { aikidoPersonFocus, aikidoChronology } from '../data/aikido_person.js';
import { aikidoEvents } from '../data/aikido_events.js';
import { aikidoDojos, aikidoDojoFoundings, aikidoFirstContacts } from '../data/aikido_dojos.js';
import { aikidoWorldEvents } from '../data/aikido_world_events.js';

const START_YEAR = 1880;
const CURRENT_YEAR = new Date().getFullYear();

const aikidoTimeline = { min: START_YEAR, max: CURRENT_YEAR, start: START_YEAR };

function eventYear(e) {
  return parseInt(String(e.year), 10);
}

export const aikidoMode = {
  id: 'aikido',
  label: 'Aikido',
  available: true,
  timeline: aikidoTimeline,

  // 左欄リスト：植芝盛平の生涯と重なる世界史的出来事（年代順）
  listItems() {
    return [...aikidoWorldEvents]
      .sort((a, b) => a.year - b.year)
      .map(w => ({
        id: w.id,
        year: w.year,
        label: `${w.year}${w.endYear ? '–' + w.endYear : ''}  ${w.title}`,
        sub: w.description,
        raw: w,
      }));
  },

  // 地球儀上の点：
  //  - life        … 植芝盛平の生涯拠点（到達年で累積、青）
  //  - dojoFound   … 各国の道場設立(A)（到達年で累積、ティール）
  //  - firstContact… 初到達(B)（到達年で累積、アンバー）
  //  - dojo        … 現在の加盟分布(network)（最終年に達したら一括、淡色）
  pointsUpTo(year) {
    const lifePoints = aikidoEvents
      .filter(e => eventYear(e) <= year)
      .map(e => ({
        id: e.id, kind: 'life', lat: e.lat, lng: e.lng,
        label: `${e.year}  ${e.title}`, raw: e,
      }));

    const foundPoints = aikidoDojoFoundings
      .filter(d => d.year <= year)
      .map(d => ({
        id: d.id, kind: 'dojoFound', lat: d.lat, lng: d.lng,
        label: `${d.year}  ${d.country} — ${d.org}`, raw: d,
      }));

    const firstPoints = aikidoFirstContacts
      .filter(d => d.year <= year)
      .map(d => ({
        id: d.id, kind: 'firstContact', lat: d.lat, lng: d.lng,
        label: `${d.year}  ${d.region}（初到達）`, raw: d,
      }));

    const networkPoints =
      year >= aikidoTimeline.max
        ? aikidoDojos.map(d => ({
            id: d.id, kind: 'dojo', lat: d.lat, lng: d.lng,
            label: `${d.country} / ${d.city}`, raw: d,
          }))
        : [];

    return [...networkPoints, ...firstPoints, ...foundPoints, ...lifePoints];
  },

  // 年代バーの目盛り：生涯年表 ＋ 道場設立 ＋ 初到達 ＋ 世界史イベント
  markerYears() {
    return [
      ...aikidoChronology.map(c => c.year),
      ...aikidoDojoFoundings.map(d => d.year),
      ...aikidoFirstContacts.map(d => d.year),
      ...aikidoWorldEvents.map(w => w.year),
    ];
  },

  // 右パネル本体（常時 overview）
  overviewFocus() {
    return {
      state: 'overview',
      kicker: 'FOCUS / PERSON',
      title: aikidoPersonFocus.displayName.join(' '),
      subtitle: aikidoPersonFocus.years,
      portrait: aikidoPersonFocus.portrait,
      body: aikidoPersonFocus.relation,
      chronology: aikidoChronology,
    };
  },

  // ── 以下、クリック対象ごとの「カードデータ」──────────────
  lifeCard(point) {
    return {
      kind: 'life',
      kicker: 'LIFE EVENT',
      title: point.title,
      subtitle: `${point.year}  /  ${point.placeName}`,
      body: point.description,
    };
  },

  worldCard(item) {
    return {
      kind: 'world',
      kicker: 'WORLD EVENT',
      title: item.title,
      subtitle: item.endYear ? `${item.year} – ${item.endYear}` : `${item.year}`,
      body: item.description,
      regions: item.regions || [],
    };
  },

  dojoFoundCard(d) {
    return {
      kind: 'dojoFound',
      kicker: 'DOJO — 設立',
      title: `${d.country}`,
      subtitle: `${d.year}  /  ${d.org}（${d.city}）  ${d.confidence || ''}`,
      body: d.note || '',
    };
  },

  firstContactCard(d) {
    return {
      kind: 'firstContact',
      kicker: 'FIRST CONTACT — 初到達',
      title: `${d.region}`,
      subtitle: `${d.year}  /  ${d.city}`,
      body: d.note || '',
    };
  },

  dojoCard(d) {
    return {
      kind: 'dojo',
      kicker: 'DOJO NETWORK',
      title: d.country,
      subtitle: d.city,
      body:
        '公益財団法人合気会の海外加盟組織が存在する国。座標は代表都市であり、' +
        '個別団体の所在地を示すものではない。',
    };
  },
};

export function getMode() {
  return aikidoMode;
}
