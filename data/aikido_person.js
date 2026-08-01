// History OS — Focus Person Prototype (experimental layer)
// John Manjiro Mode とは独立した Focus Person 実験データ。
// events.js / persons.js には依存しない。
//
// 2026-07 更新：デスクトップ「年表写真」由来の確定年表（植芝盛平年譜 U01–U33）を
// フル反映。ネット照合済み。用語辞典（glossary）を併設し、年表本文中の
// 該当語は UI 側でクリック可能なリンクとして描画される。

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
    '合氣道の創始者。武術修行、北海道開拓、大本での精神的探求を経て、独自の武道「合氣道」を体系化した人物。和歌山県田辺に生まれ、大東流合気柔術と大本の思想を土台に「合気」の理念を確立した。',
};

// 年表（Focus Person 独自レンジ：1883–1969）
// 各 item は aikido_events.js の id と対応させ、右欄年表クリックで
// 地球上の該当地点へフォーカスできるようにする。eventId を持たない項目は
// 地理的に確定できない／単一地点に還元しないエピソードのため、
// 地球上へのフォーカス連動を持たない。
export const aikidoChronology = [
  { year: 1883, age: '出生', text: '和歌山県田辺（現・田辺市元町）に、植芝与六の長男として生まれる。', eventId: 'ueshiba_birth_tanabe' },
  { year: 1890, age: 7,  text: '真言宗地蔵寺に日参し、四書五経に親しむ。' },
  { year: 1893, age: 10, text: '宝万寺で参禅する。この頃から武道に関心を抱く。' },
  { year: 1897, age: 14, text: '珠算の講師となる。田辺中学に入学するも病気で退学し、各流武道の遍歴が始まる。' },
  { year: 1901, age: 18, text: '大商人を志して上京し、起倒流の戸張滝三郎に師事する。' },
  { year: 1902, age: 19, text: '糸川はつと結婚する。' },
  { year: 1903, age: 20, text: '和歌山連隊に入隊する（日露戦争期）。' },
  { year: 1908, age: 25, text: '後藤派柳生流柔術の免許を坪井政之輔より受ける。' },
  { year: 1912, age: 29, text: '北海道・紋別郡白滝原野へ、開拓移住民の団長として入植する。', eventId: 'ueshiba_hokkaido_shirataki' },
  { year: 1915, age: 32, text: '北海道遠軽で武田惣角に出会い、大東流合気柔術を学ぶ。', eventId: 'ueshiba_hokkaido_shirataki' },
  { year: 1919, age: 36, text: '父の病を機に帰郷する途中、綾部に立ち寄り出口王仁三郎と出会う。', eventId: 'ueshiba_ayabe_omoto' },
  { year: 1920, age: 37, text: '父・与六死去。綾部へ移住し、大本のもとで植芝塾を開設する。', eventId: 'ueshiba_ayabe_omoto' },
  { year: 1922, age: 39, text: '武道の神髄を「合気」と呼称し、主唱するようになる。', eventId: 'ueshiba_ayabe_omoto' },
  { year: 1924, age: 41, text: '出口王仁三郎に随行し、モンゴルへ渡る。', eventId: 'ueshiba_mongolia' },
  { year: 1927, age: 44, text: '一家をあげて上京し、東京で道場（本部道場の前身）を開く。', eventId: 'ueshiba_tokyo' },
  { year: 1931, age: 48, text: '東京・新宿区若松町に専門道場「皇武館」が完成する。', eventId: 'ueshiba_tokyo' },
  { year: 1938, age: 55, text: '賀陽宮殿下が皇武館道場に御台臨、植芝の演武を御高覧する。', eventId: 'ueshiba_tokyo' },
  { year: 1940, age: 57, text: '財団法人皇武会が発足する（初代会長・竹下勇）。', eventId: 'ueshiba_tokyo' },
  { year: 1942, age: 59, text: '茨城県岩間へ移り、武道研究と農耕を続ける。この頃「合気道」の名称が用いられ始める。', eventId: 'ueshiba_iwama' },
  { year: 1943, age: 60, text: '茨城県岩間町に合気神社を建立する。', eventId: 'ueshiba_iwama' },
  { year: 1947, age: 64, text: '皇武会を改組・再編成し、「財団法人合気会」とする。', eventId: 'ueshiba_tokyo' },
  { year: 1948, age: 65, text: '財団法人合気会が正式に設立され、戦後の普及活動が本格化する。', eventId: 'ueshiba_tokyo' },
  { year: 1960, age: 77, text: '合気道創始の功績により、紫綬褒章を受章する。', eventId: 'ueshiba_tokyo' },
  { year: 1961, age: 78, text: 'ハワイ合気会に招かれて渡布し、第1回演武大会を行う。', eventId: 'ueshiba_hawaii' },
  { year: 1964, age: 81, text: '勲四等旭日小綬章を受章する。', eventId: 'ueshiba_tokyo' },
  { year: 1967, age: 84, text: '財団法人合気会理事長に就任する。', eventId: 'ueshiba_tokyo' },
  { year: 1969, age: 86, text: '4月26日、東京にて死去。正五位勲三等瑞宝章を贈られる。', eventId: 'ueshiba_tokyo' },
];

// 用語辞典（今後の仕様：説明を要する語を色分け→クリックで詳細カード）
// key の文字列が年表・カード本文に現れたら、UI 側がクリック可能なリンクに変換する。
// term カードの配色は「知識レイヤー」を示す紫寄りのニュートラルとする。
export const aikidoGlossary = {
  '起倒流': {
    title: '起倒流（きとうりゅう）',
    reading: 'Kitō-ryū',
    text: '江戸時代初期に寺田勘右衛門正重が完成させたと伝わる、伝統的な柔術（組討・投げ技）の流派。天神真楊流とともに講道館柔道の基盤となった、歴史ある武術。植芝盛平は上京した1901年、戸張滝三郎に師事してこれを学んだ。',
  },
  '大東流合気柔術': {
    title: '大東流合気柔術（だいとうりゅうあいきじゅうじゅつ）',
    reading: 'Daitō-ryū Aiki-jūjutsu',
    text: '会津藩に伝わったとされる武術を、武田惣角が再興・普及した柔術。関節技・投げ技と「合気」を特徴とし、植芝盛平が体系化した合気道の技術的源流の一つ。',
  },
  '武田惣角': {
    title: '武田惣角（たけだ そうかく）',
    reading: '1859–1943',
    text: '大東流合気柔術を全国に広めた武術家。1915年、北海道遠軽で植芝盛平に大東流を伝授し、盛平の武術形成に決定的な影響を与えた。',
  },
  '大本': {
    title: '大本（おおもと）',
    reading: 'Ōmoto',
    text: '出口なお・出口王仁三郎を中心とする神道系の新宗教。植芝盛平は綾部で深く関わり、その精神性・宇宙観が合気道の思想的背景となった。',
  },
  '出口王仁三郎': {
    title: '出口王仁三郎（でぐち おにさぶろう）',
    reading: '1871–1948',
    text: '大本の指導者で、植芝盛平の精神的な師。盛平の綾部移住や道場開設を後押しし、1924年のモンゴル行にも同行した。',
  },
  '皇武館': {
    title: '皇武館（こうぶかん）',
    reading: 'Kōbukan',
    text: '1931年、東京・新宿区若松町に開かれた植芝盛平の専門道場。多くの武道家が集い「地獄道場」とも呼ばれた。戦後は合気会本部道場となり現在に至る。',
  },
  '合気神社': {
    title: '合気神社（あいきじんじゃ）',
    reading: 'Aiki-jinja',
    text: '1943年、茨城県岩間町（現・笠間市）に植芝盛平が建立した神社。合気道の守護神を祀り、岩間はのちに合気道の聖地の一つとされる。',
  },
  '紫綬褒章': {
    title: '紫綬褒章（しじゅほうしょう）',
    reading: 'Shijuhōshō',
    text: '学術・芸術・スポーツなどで顕著な功績を挙げた人に国が贈る褒章。植芝盛平は1960年、合気道創始の功績によりこれを受章した。',
  },
};
