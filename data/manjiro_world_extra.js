// data/manjiro_world_extra.js — 新装版（manjiro/focusShell.html）だけの World Events（左上の枠・地球の地名）
// World Events は data/events.js の type:'world' から作る。events.js に足すと公開版（sandbox）にも出るので、新装版の分はここに置く。
// 形は events.js の world と同じ（id・startYear・endYear・title・year・description・cardText・meaning・manjiroRelation・placeJa・color・lat・lng・placeName）。
//
// 2026-11-12 清水さん「普仏戦争をワールドイベントにいれたい」（欧州への旅＝普仏戦争視察団の背景）。
//   戦争の日付は広く確かめられている事柄（開戦 1870年7月19日、セダン 9月1〜2日、第三共和政 9月4日、パリ包囲 9月〜1871年1月、
//   ドイツ帝国の成立宣言 1871年1月18日、講和＝フランクフルト条約 1871年5月10日）。万次郎との関わりは events.js の本文（中浜明『中浜万次郎の生涯』による）の範囲だけ。
export const WORLD_EXTRA_EVENTS = [
  {
    id: 'franco_prussian_war',
    type: 'world',
    startYear: 1870,
    endYear: 1871,
    title: '普仏戦争',
    year: '1870 — 1871',
    description: 'フランスとプロイセンを中心とするドイツ諸国の戦争。フランスが敗れ、ドイツ帝国が成立した。',
    cardText: '1870年7月、フランスがプロイセンに宣戦して戦争が始まった。9月のセダンの戦いで皇帝ナポレオン3世が捕らえられ、パリでは共和政が宣言される。プロイセン軍は9月からパリを包囲し、1871年1月、ヴェルサイユ宮殿でドイツ帝国の成立が宣言された。同年5月のフランクフルト条約で、フランスはアルザスの大部分（ベルフォールを除く）とロレーヌの一部を割譲した。',
    meaning: '成立したばかりの明治政府は、この戦争に視察団を送った。万次郎はその一員として、アメリカを経てヨーロッパへ渡った。',
    manjiroRelation: '1870年、万次郎はこの戦争を視察する一行の一員として横浜を出帆し、アメリカを経てロンドンまで行った。帰りは一人、スエズ運河を通って東回りで帰国したと伝わる（年譜の「スエズ運河経由で帰国の途へ」による）。',
    placeJa: 'フランス・ドイツ',
    color: '#ff5e5e',
    lat: 48.86,
    lng: 2.35,
    placeName: 'Paris / France',
    relatedEvents: ['manjiro_europe_outbound_1870'],
  },
];
