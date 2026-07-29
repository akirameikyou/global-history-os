// History OS — Aikido History OS (independent instance)
// soccer/soccerMode.js と同じ「モードアダプタ」形式で書く。
// 目的：のちに統合シェル（modeRegistry）へ this のまま差し込めるようにする。
// 現時点では aikido/index.html が単独でこのモードだけを読み込む。

import { aikidoPersonFocus, aikidoChronology } from '../data/aikido_person.js';
import { aikidoEvents } from '../data/aikido_events.js';
import { aikidoDojos } from '../data/aikido_dojos.js';
import { aikidoWorldEvents } from '../data/aikido_world_events.js';

const START_YEAR = 1880; // 植芝盛平生誕(1883)の少し手前。切りの良い年として採用。
const CURRENT_YEAR = new Date().getFullYear(); // 「現在まで」を都度評価する。

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

  // 地球儀上の点：生涯拠点は年に到達したら累積表示。
  // 道場分布は創立年データが揃わないため、最終年（現在）に到達して初めて
  // 象徴的に一括表示する。
  pointsUpTo(year) {
    const lifePoints = aikidoEvents
      .filter(e => eventYear(e) <= year)
      .map(e => ({
        id: e.id,
        kind: 'life',
        lat: e.lat,
        lng: e.lng,
        label: `${e.year}  ${e.title}`,
        raw: e,
      }));

    const dojoPoints =
      year >= aikidoTimeline.max
        ? aikidoDojos.map(d => ({
            id: d.id,
            kind: 'dojo',
            lat: d.lat,
            lng: d.lng,
            label: `${d.country} / ${d.city}`,
            raw: d,
          }))
        : [];

    return [...lifePoints, ...dojoPoints];
  },

  // 年代バーの目盛り：生涯年表の年
  markerYears() {
    return aikidoChronology.map(c => c.year);
  },

  // FOCUS: overview（Focus Person 本体）
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

  // FOCUS: life（生涯拠点をクリックしたとき）
  lifeFocus(point) {
    const related = aikidoChronology.filter(c => c.eventId === point.id);
    return {
      state: 'life',
      kicker: 'FOCUS / LIFE EVENT',
      title: point.title,
      subtitle: `${point.year}  /  ${point.placeName}`,
      body: point.description,
      related,
    };
  },

  // FOCUS: dojo（道場分布の光点をクリックしたとき）
  dojoFocus(point) {
    return {
      state: 'dojo',
      kicker: 'FOCUS / DOJO NETWORK',
      title: point.country,
      subtitle: point.city,
      body:
        '公益財団法人合気会 公式サイト「海外組織」に掲載された加盟組織が存在する国。' +
        '座標は代表都市であり、個別団体の所在地を示すものではない（要出典：個別団体の詳細）。',
    };
  },

  // FOCUS: world（左欄の世界史的出来事をクリックしたとき）
  worldFocus(item) {
    return {
      state: 'world',
      kicker: 'FOCUS / WORLD EVENT',
      title: item.title,
      subtitle: item.endYear ? `${item.year} – ${item.endYear}` : `${item.year}`,
      body: item.description,
    };
  },
};

export function getMode() {
  return aikidoMode;
}
