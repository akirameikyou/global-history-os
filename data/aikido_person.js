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
// 地球上の該当地点へフォーカスできるようにする。
export const aikidoChronology = [
  {
    year: 1883,
    text: '和歌山県田辺に生まれる。',
    eventId: 'ueshiba_birth_tanabe',
  },
  {
    year: 1912,
    text: '北海道・白滝へ入植。',
    eventId: 'ueshiba_hokkaido_shirataki',
  },
  {
    year: 1920,
    text: '綾部で大本と関わりを持つ。',
    eventId: 'ueshiba_ayabe_omoto',
  },
  {
    year: 1942,
    text: '岩間へ移り、武道研究を続ける。',
    eventId: 'ueshiba_iwama',
  },
  {
    year: 1969,
    text: '東京にて死去。',
    eventId: 'ueshiba_tokyo',
  },
];
