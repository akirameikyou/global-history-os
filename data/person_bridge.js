// data/person_bridge.js — 人物 ID 対応表（Focus の人物 ↔ 人物地球の基本人物 ↔ Wikidata）と、人物地球への URL。
// 設計: docs/manjiro_monthly/DESIGN_v0.1.md §5
// 受け渡すのは「人物 ID」と「年」だけ。人物年鑑由来のデータはここに入れない。
//
// baseId の確認（2026-11-09, Claude Code）：feature/person-focus-base の data/base_persons.js で
//   名前（ja/en）と QID が一致することを読んで確かめた。QID はその行の値をそのまま写した。
// baseId=null の人は基本人物 644 人に含まれない。QID は未照合なので書かない（推測で埋めない）。

export const PERSON_GLOBE_PATH = '../person/';

export const personBridge = [
  { focusId: 'manjiro',   baseId: null,    qid: null,        note: '基本人物にいない（特化の Focus のみ）。人物地球側の「特化がある人の入口」は次回。' },
  { focusId: 'whitfield', baseId: null,    qid: null,        note: '基本人物にいない。' },
  { focusId: 'perry',     baseId: null,    qid: null,        note: '基本人物にいない。' },
  { focusId: 'katsu',     baseId: 'b0431', qid: 'Q700470',   note: '勝海舟 Katsu Kaishū 1823–1899' },
  { focusId: 'ryoma',     baseId: 'b0446', qid: 'Q378450',   note: '坂本龍馬 Sakamoto Ryōma 1836–1867' },
  { focusId: 'yodo',      baseId: null,    qid: null,        note: '基本人物にいない。' },
  { focusId: 'nariakira', baseId: 'b0417', qid: 'Q1143856',  note: '島津斉彬 Shimazu Nariakira 1809–1858' },
];

export const bridgeFor = focusId => personBridge.find(b => b.focusId === focusId) || null;

// 人物地球は年単位。t（小数の年）は切り捨てて渡す。
export function personGlobeHref(baseId, t, base = PERSON_GLOBE_PATH) {
  if (!baseId) return null;
  return base + '?p=' + encodeURIComponent(baseId) + '&y=' + Math.floor(t);
}

// 試験用：?pg=<URL> は localhost / 127.0.0.1 から開いている時だけ、しかも行き先も localhost / 127.0.0.1 の時だけ受ける。
export function personGlobeBase(loc = location) {
  try {
    const pg = new URLSearchParams(loc.search).get('pg');
    const localHost = h => h === 'localhost' || h === '127.0.0.1';
    if (pg && localHost(loc.hostname)) { const u = new URL(pg); if (localHost(u.hostname) && /^https?:$/.test(u.protocol)) return u.href.endsWith('/') ? u.href : u.href + '/'; }
  } catch (e) { /* 既定へ */ }
  return PERSON_GLOBE_PATH;
}

// 人物地球が置かれているか（main にはまだ無い）。無ければ画面はリンクを押せない表示にする。
export async function personGlobeAvailable(base = PERSON_GLOBE_PATH) {
  try {
    const u = new URL(base + 'index.html', location.href);
    if (u.origin !== location.origin) { // 試験用の ?pg（localhost 同士の別ポート）：CORS で中身は読めないので、応答が返れば「ある」とみなす
      await fetch(u.href, { mode: 'no-cors', cache: 'no-store' }); return true;
    }
    const r = await fetch(u.href, { method: 'HEAD', cache: 'no-store' }); return r.ok;
  } catch (e) { return false; }
}
