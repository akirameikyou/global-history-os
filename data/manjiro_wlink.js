// data/manjiro_wlink.js — W-LINK（同時代の世界）。万次郎 Focus 新装版（manjiro/focusShell.html）が読む。
// 中身は sandbox/index.html の worldLinks（期間・場所・色）と WORLD_EXTRA（本文）を 2026-11-09 にそのまま写したもの（文は変えていない）。
// 公開中の sandbox は自分の写しを使い続ける。二つを一本にするのは sandbox を直す時（別の工程）。

export const worldLinks = [
 {
  id:'rezanov_arrival',
  label:'REZANOV ARRIVAL',
  startYear:1804,
  endYear:1804,
  color:'#ffb36b',
  lat:32.75,
  lng:129.88,
  altitude:1.55,
  placeName:'Nagasaki / Japan',
  placeShort:'NAGASAKI'
 },
 {
  id:'steam_revolution',
  label:'STEAM REVOLUTION',
  startYear:1807,
  endYear:1807,
  color:'#aaaaaa',
  lat:40.71,
  lng:-74.0,
  altitude:1.65,
  placeName:'Hudson River / New York',
  placeShort:'HUDSON RIVER'
 },
 {
  id:'napoleonic_end',
  label:'NAPOLEONIC END',
  startYear:1815,
  endYear:1815,
  color:'#d0d0ff',
  lat:50.68,
  lng:4.41,
  altitude:1.65,
  placeName:'Waterloo / Europe',
  placeShort:'WATERLOO'
 },
 {
  id:'ikokusen_order',
  label:'IKOKUSEN ORDER',
  startYear:1825,
  endYear:1825,
  color:'#ffcc66',
  lat:35.68,
  lng:139.76,
  altitude:1.5,
  placeName:'Edo / Japan',
  placeShort:'EDO'
 },
 {
  id:'pacific_whaling',
  label:'PACIFIC WHALING',
  startYear:1840,
  endYear:1855,
  color:'#66e0ff',
  barType:'process',
  lat:30.0,
  lng:160.0,
  altitude:1.75,
  placeName:'North Pacific Ocean',
  placeShort:'NORTH PACIFIC'
 },
 {
  id:'perry_expedition',
  label:'PERRY EXPEDITION',
  startYear:1852,
  endYear:1853,
  color:'#b58cff',
  lat:26.21,
  lng:127.68,
  altitude:1.55,
  placeName:'Ryukyu / East Asia',
  placeShort:'RYUKYU'
 },
 {
  id:'opening_of_japan',
  label:'OPENING OF JAPAN',
  startYear:1854,
  endYear:1868,
  color:'#7dff7a',
  lat:35.68,
  lng:139.76,
  altitude:1.55,
  placeName:'Japan',
  placeShort:'JAPAN'
 }
];

export const WORLD_EXTRA = {
  rezanov_arrival: {
    id:'rezanov_arrival', title:'レザノフ来航', subtitleEn:'REZANOV ARRIVAL',
    startYear:1804, endYear:1804, year:'1804',
    description:'ロシア使節レザノフが長崎に来航し、江戸幕府に通商を求めた。幕府は長期にわたって回答を保留した後、要求を拒否した。',
    cardText:'1804年、ロシア皇帝の使節ニコライ・レザノフが長崎に来航し、日本との通商を求めた。幕府はレザノフ一行を長崎に留め、翌年、通商を認めない方針を伝えた。北方から接近するロシアへの警戒は、その後の幕府の海防政策にも影響を与えていく。',
    manjiroRelation:'万次郎誕生以前の出来事。万次郎が帰国する頃まで続く、幕府の対外警戒と海防政策の前史として位置づける。',
    meaning:'鎖国下の日本にも、周辺諸国から通商と外交を求める動きが繰り返し届いていた。日本が外の世界と無関係だったのではなく、接触を制限しながら国際関係に対応していたことを示す出来事である。',
    placeJa:'長崎', placeName:'Nagasaki / Japan', color:'#ffb36b'
  },
  steam_revolution: {
    id:'steam_revolution', title:'蒸気船革命', subtitleEn:'STEAM REVOLUTION',
    startYear:1807, endYear:1807, year:'1807',
    description:'蒸気機関を動力とする船が商業運航に入り、風に左右されていた海上移動に新しい時代が始まった。',
    cardText:'1807年、ロバート・フルトンの蒸気船がハドソン川で商業運航を成功させた。蒸気船は帆船と異なり、風向きだけに頼らず航行できる。19世紀を通して船体と機関が改良され、河川・沿岸・大洋を結ぶ定期航路が発達していった。',
    manjiroRelation:'万次郎は帆船による捕鯨航海を経験した一方、帰国や咸臨丸渡米後の移動、1870年の再渡米などでは蒸気船が結ぶ新しい交通網の中を移動した。',
    meaning:'蒸気船は、人・物資・郵便・情報が移動する速度と安定性を大きく変えた。万次郎が生きた時代は、帆船中心の海から蒸気船中心の海へ移り変わる時期でもあった。',
    placeJa:'ハドソン川・ニューヨーク', placeName:'Hudson River / New York', color:'#aaaaaa'
  },
  napoleonic_end: {
    id:'napoleonic_end', title:'ナポレオン戦争の終結', subtitleEn:'NAPOLEONIC END',
    startYear:1815, endYear:1815, year:'1815',
    description:'ヨーロッパを揺るがしたナポレオン戦争が終結し、イギリスの海上での優位がいっそう強まった。',
    cardText:'1815年、ワーテルローの戦いでナポレオンが敗れ、長く続いた戦争が終結した。戦後の国際秩序が再編されるなか、強力な海軍と商船隊を持つイギリスは、世界各地を結ぶ海上交通と貿易に大きな影響力を持つようになった。',
    manjiroRelation:'万次郎との直接の関与はない。万次郎を救助した捕鯨船や、その後の国際航路が活動した世界的背景として表示する。',
    meaning:'19世紀の世界は、ヨーロッパ諸国の海軍力、通商、植民地活動によって急速に結び直された。万次郎が漂流後に入った太平洋も、この世界規模の海上ネットワークの一部だった。',
    placeJa:'ワーテルロー・ヨーロッパ', placeName:'Waterloo / Europe', color:'#d0d0ff'
  },
  ikokusen_order: {
    id:'ikokusen_order', title:'異国船打払令', subtitleEn:'IKOKUSEN ORDER',
    startYear:1825, endYear:1825, year:'1825',
    description:'江戸幕府は、日本沿岸へ接近する外国船を追い払うよう命じ、海防政策を強化した。',
    cardText:'1825年、幕府は異国船打払令を出し、日本沿岸に接近した外国船を、理由を問わず退去させる方針を示した。ロシア船や欧米船の接近が増えるなか、幕府が海岸防備への警戒を強めたことを示している。この命令はアヘン戦争後の1842年に緩和された。',
    manjiroRelation:'万次郎が1841年に漂流した時点でも、外国との接触は強く制限されていた。帰国を決断する際の危険と困難を理解するための背景となる。',
    meaning:'漂流民が外国船に救助されても、帰国すれば厳しい取り調べを受けた時代背景を示す。海は人を世界へ運ぶ道である一方、幕府にとっては外からの脅威が到来する境界でもあった。',
    placeJa:'江戸・日本沿岸', placeName:'Edo / Japan', color:'#ffcc66'
  },
  pacific_whaling: {
    id:'pacific_whaling', title:'太平洋捕鯨', subtitleEn:'PACIFIC WHALING',
    startYear:1840, endYear:1855, year:'1840 — 1855',
    description:'19世紀の太平洋捕鯨は、港・島・船を結ぶ広域的な海上ネットワークを形成した。万次郎はその中で救助され、航海技術と英語を学び、世界を経験した。',
    cardText:'19世紀前半、アメリカの捕鯨船は大西洋からケープホーンを回り、太平洋各地へ進出した。捕鯨船は鯨を追うだけでなく、食料や水の補給、船の修理、乗組員の交代を通して、北米・南米・ハワイ・太平洋諸島を結んでいた。\n\n1841年、鳥島に漂着していた万次郎たちは、アメリカ捕鯨船ジョン・ハウランド号に救助された。万次郎はこの海上ネットワークを通じてアメリカへ渡り、教育を受け、さらに捕鯨航海へ参加した。',
    manjiroRelation:'万次郎の人生と直接結びつく世界史イベント。救助、渡米、教育、捕鯨航海、帰国資金の獲得へと続く出発点になった。',
    meaning:'太平洋捕鯨を単なる産業史としてではなく、人・知識・技術・言語が海を越えて移動した交流網として捉える。万次郎の生涯は、この網との偶然の接触から大きく展開した。',
    placeJa:'北太平洋', placeName:'North Pacific Ocean', color:'#66e0ff'
  },
  perry_expedition: {
    id:'perry_expedition', title:'ペリー遠征', subtitleEn:'PERRY EXPEDITION',
    startYear:1852, endYear:1853, year:'1852 — 1853',
    description:'アメリカ東インド艦隊司令長官ペリーは、日本との交渉を目的とする艦隊を率いて東アジアへ向かった。',
    cardText:'1852年、マシュー・ペリーはアメリカ大統領の国書を携え、艦隊を率いてアメリカを出発した。大西洋からインド洋を経て東アジアへ進み、1853年には琉球を訪れた後、日本へ向かった。この航海は、日本来航に至るまでの遠征全体を示している。',
    manjiroRelation:'帰国後の万次郎は、アメリカ事情と英語を知る人物として幕府に召し出された。ペリー来航への対応を考えるうえで、その知識が求められた。',
    meaning:'ペリー来航は浦賀だけで突然起きた出来事ではない。アメリカの捕鯨活動、中国貿易、蒸気船の燃料補給地確保などを背景に計画された、世界規模の海上遠征だった。',
    placeJa:'大西洋・インド洋・琉球', placeName:'Ryukyu / East Asia', color:'#b58cff'
  },
  opening_of_japan: {
    id:'opening_of_japan', title:'開国への移行', subtitleEn:'OPENING OF JAPAN',
    startYear:1854, endYear:1868, year:'1854 — 1868',
    description:'条約締結と港の開放を起点として、日本の政治・経済・社会が国際関係の中へ組み込まれていった。',
    cardText:'1854年の日米和親条約以後、日本は欧米諸国と相次いで条約を結び、1858年の通商条約を経て外国との貿易を本格化させた。外国人の居留、海外渡航、海軍や造船技術の導入が進む一方、条約や開港をめぐる国内対立も激しくなった。\n\n開国は一日の出来事ではなく、幕末の社会全体を変えていった長い過程だった。',
    manjiroRelation:'万次郎は幕府の直参となり、翻訳、航海教育、造船・捕鯨、小笠原調査、咸臨丸渡米などに関わった。開国期の実務を支えた人物の一人として位置づける。',
    meaning:'海の外を知ることが例外だった時代から、外国との交渉、交易、留学、航海が国家の課題となる時代への移行を示す。万次郎の経験は、この変化の中で個人的な漂流体験から社会的な知識へ変わった。',
    placeJa:'日本', placeName:'Japan', color:'#7dff7a'
  }
};
