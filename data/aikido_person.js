// History OS — Focus Person Prototype (experimental layer)
// John Manjiro Mode とは独立した Focus Person 実験データ。
// events.js / persons.js には依存しない。

export const aikidoPersonFocus = {
  id: 'ueshiba',
  label: 'UESHIBA',
  displayName: ['MORIHEI', 'UESHIBA'],
  fullName: '植芝盛平 / Morihei Ueshiba',
  birthYear: 1883,
  deathYear: 1969,
  years: '1883 — 1969',
  relationType: 'AIKIDO FOUNDER',
  portrait: '../assets/portraits/morihei-ueshiba-portrait.jpg',
  relation:
    '合氣道の創始者。武術修行、北海道開拓、大本での精神的探求を経て、独自の武道「合氣道」を体系化した人物（要出典：詳細な経歴）。',
};

// 年表（Focus Person 独自レンジ：1883–1969）
// 各 item は aikido_events.js の id と対応させ、右欄年表クリックで
// 地球上の該当地点へフォーカスできるようにする。eventId を持たない項目は
// 地理的に確定できない、または単一地点に還元しないエピソードのため、
// 地球上へのフォーカス連動を持たない（クリックしても地球儀は動かない）。
export const aikidoChronology = [
  {
    year: 1883,
    text: '和歌山県田辺に生まれる。',
    eventId: 'ueshiba_birth_tanabe',
  },
  {
    year: 1901,
    text: '上京。柔術・剣術など武術修行を始める（要出典：詳細な時期・流派）。',
  },
  {
    year: 1904,
    text: '日露戦争に従軍したとされる（要出典：詳細）。',
  },
  {
    year: 1912,
    text: '北海道・白滝へ入植。開拓団を率いる。',
    eventId: 'ueshiba_hokkaido_shirataki',
  },
  {
    year: 1915,
    text: '北海道で武田惣角に出会い、大東流合気柔術を学ぶ（要出典：出会いの詳細）。',
    eventId: 'ueshiba_hokkaido_shirataki',
  },
  {
    year: 1919,
    text: '父の病を機に帰郷する途中、綾部に立ち寄り出口王仁三郎と出会う。',
    eventId: 'ueshiba_ayabe_omoto',
  },
  {
    year: 1920,
    text: '綾部へ移住し、大本のもとで精神的探求を深める。',
    eventId: 'ueshiba_ayabe_omoto',
  },
  {
    year: 1924,
    text: '出口王仁三郎に随行しモンゴルへ渡る（要出典：経緯・詳細な行程）。',
  },
  {
    year: 1927,
    text: '東京へ移り、道場（後の合気会本部道場の前身）を開く。',
    eventId: 'ueshiba_tokyo',
  },
  {
    year: 1931,
    text: '東京・牛込に皇武館道場が完成する（要出典：所在地・名称の詳細）。',
    eventId: 'ueshiba_tokyo',
  },
  {
    year: 1942,
    text: '岩間へ移り、武道研究と農耕を続ける。この頃「合気道」の名称が用いられ始める（要出典：命名の経緯）。',
    eventId: 'ueshiba_iwama',
  },
  {
    year: 1948,
    text: '財団法人合気会が設立され、戦後の普及活動が本格化する（要出典：詳細）。',
    eventId: 'ueshiba_tokyo',
  },
  {
    year: 1969,
    text: '東京にて死去。',
    eventId: 'ueshiba_tokyo',
  },
];
