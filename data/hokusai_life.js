// data/hokusai_life.js  —  DRAFT / 葛飾北斎 Focus 代表データ（Phase A+B 観察用）
// ※ 代表・簡略。史実の網羅ではない。画号の遷移年は概略。旅行の経路は史料未確定=推定Connection。
// Core化しない。北斎experiment内のみ。作品(WORKS)の地理/画像は hokusai_views.js を正とし、ここでは扱わない。

export const HOKUSAI = { born:1760, died:1849, name:'葛飾北斎' };

// 画号（representative）: 現在のtimeCursorに応じて右LIFE上部に主要画号を出すためのphase。
export const gagoPhases = [
  { name:'春朗',        from:1779, to:1794, note:'勝川派入門後の号' },
  { name:'宗理',        from:1795, to:1804, note:'俵屋宗理を襲名' },
  { name:'葛飾北斎',    from:1805, to:1810, note:'「北斎」を名乗る' },
  { name:'戴斗',        from:1811, to:1819, note:'北斎漫画期の号' },
  { name:'為一',        from:1820, to:1833, note:'富嶽三十六景期の号' },
  { name:'画狂老人卍',  from:1834, to:1849, note:'富嶽百景以降・晩年の号' },
];

// 生涯イベント（lane: LIFE）
export const lifeEvents = [
  { id:'l_born',   year:1760, title:'誕生（本所割下水）', gago:null },
  { id:'l_katsu',  year:1778, title:'勝川春章に入門',     gago:'春朗' },
  { id:'l_sori',   year:1795, title:'「宗理」を号する',   gago:'宗理' },
  { id:'l_manga',  year:1814, title:'北斎漫画 初編',       gago:'戴斗' },
  { id:'l_iitsu',  year:1820, title:'「為一」を号する',   gago:'為一' },
  { id:'l_36',     year:1831, title:'富嶽三十六景 刊行',   gago:'為一' },
  { id:'l_100',    year:1834, title:'富嶽百景・「画狂老人卍」', gago:'画狂老人卍' },
  { id:'l_obuse',  year:1842, title:'小布施へ（高井鴻山）', gago:'画狂老人卍' },
  { id:'l_die',    year:1849, title:'没（享年90）',         gago:'画狂老人卍' },
];

// 居住地（representative PIN のみ。93回とされる転居は網羅しない）
export const residences = [
  { id:'r_warishita', year:1760, title:'本所割下水（生誕地）', lat:35.6960, lng:139.8020 },
  { id:'r_asakusa',   year:1840, title:'浅草聖天町（晩年の一つ）', lat:35.7160, lng:139.7970 },
];

// 遠方旅行・滞在制作（ROUTE/Connection）。※経路は史料未確定=推定。確定航路(万次郎)とは線種を分ける。
export const travels = [
  { id:'t_obuse',   year:1842, title:'江戸 → 小布施（信州・晩年滞在制作）',
    from:{lat:35.700,lng:139.770}, to:{lat:36.702,lng:138.320}, routeCertainty:'inferred' },
  { id:'t_nagoya',  year:1812, title:'江戸 → 名古屋（滞在・北斎漫画関連）',
    from:{lat:35.700,lng:139.770}, to:{lat:35.181,lng:136.907}, routeCertainty:'inferred' },
];

// 日本側の代表イベント（lane: WORLD, 通常表示・北斎/日本史との関連が比較的高いもの）
export const worldEventsJP = [
  { id:'w_kansei', year:1787, title:'寛政の改革' },
  { id:'w_oshio',  year:1837, title:'大塩平八郎の乱' },
  { id:'w_tenpo',  year:1841, title:'天保の改革' },
  { id:'w_black',  year:1853, title:'黒船来航（没後・時代の転換）' },
];

// 海外の同時代イベント（lane: W-LINK, 二次表示。※「影響」ではなく同時代の並置。押した時だけ展開）
export const wlinkEvents = [
  { id:'x_us1776',  year:1776, title:'アメリカ独立宣言' },
  { id:'x_fr1789',  year:1789, title:'フランス革命' },
  { id:'x_np1804',  year:1804, title:'ナポレオン皇帝即位' },
  { id:'x_paris67', year:1867, title:'パリ万国博（ジャポニスムの舞台・没後）' },
];

// Timeline 設定（Hokusai Focus。Coreに固定しない）
export const timelineConfig = {
  rangeMin:1700, rangeMax:1940,      // 探索可能範囲
  initFrom:1750, initTo:1860,        // 初期viewport
  initCursor:1831,                   // 初期timeCursor（富嶽三十六景）
  nowJump:2026,                      // NOW（現在所蔵地へ飛ぶ将来枠）
};

// 現在の画号を timeCursor から求める
export function gagoAt(year){
  const p = gagoPhases.find(g => year>=g.from && year<=g.to);
  return p ? p.name : (year<1779 ? '（入門前）' : '画狂老人卍');
}
