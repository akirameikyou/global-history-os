// data/ueshiba_places.js — 植芝盛平Focus。以前の合氣道版 data/aikido_events.js を写した（2026-11-14）。
// 2026-11-15：日本の地点の座標を、町や建物の位置に合わせて直した（OSM Nominatim・国土地理院の住所検索・ウィキペディア）。海外の点（モンゴル・ハワイ）は仮置きのまま。
// 植芝盛平 主要地点データ。航路(routePoints)は扱わず、地点表示のみ。
// events.js とは独立した配列。

export const ueshibaPlaces = [
  {
    id: 'ueshiba_birth_tanabe',
    title: '田辺',
    year: '1883',
    placeName: 'Tanabe, Wakayama',
    description: '植芝盛平の生誕地。現在の和歌山県田辺市元町。武術修行の遍歴はここから始まった。',
    lat: 33.7480,
    lng: 135.3633, // 田辺市元町の町域の代表点（OSM・国土地理院。生家そのものの位置ではない）
  },

  {
    id: 'ueshiba_hokkaido_shirataki',
    title: '北海道・白滝',
    year: '1912',
    placeName: 'Shirataki, Hokkaido',
    description: '開拓移住民の団長として入植した土地。1915年、遠軽で武田惣角に出会い大東流合気柔術を学んだ、武術形成の決定的な場。',
    lat: 43.8774,
    lng: 143.1435, // 上白滝（紀州団体が入った白滝原野。顕彰碑「合気道ゆかりの地」は上白滝23番地、OSM の上白滝の点）
  },

  {
    id: 'ueshiba_ayabe_omoto',
    title: '綾部',
    year: '1920',
    placeName: 'Ayabe, Kyoto',
    description: '大本の出口王仁三郎と関わり、精神的探求を深めた土地。植芝塾を開設し、「合気」の理念が育まれた。',
    lat: 35.2937,
    lng: 135.2606, // 綾部の大本本部（長生殿、OSM。植芝塾は大本の地内）
  },

  {
    id: 'ueshiba_mongolia',
    title: '内モンゴル・通遼（パインタラ）',
    year: '1924',
    placeName: 'Tongliao (Baiyintala), Inner Mongolia',
    description: '1924年、出口王仁三郎に随行して満州からモンゴルへ向かった旅（いわゆる「入蒙」）。6月、パインタラ（白音太拉。いまの通遼）付近で中国側に捕らえられ、処刑の直前まで追い込まれたが、日本領事館の交渉で助かった。生死の境をくぐる体験が、後年の武道観に影響したとされる。',
    lat: 43.6203,
    lng: 122.2500, // 通遼市の中心（科尔沁区、OSM）。白音太拉は通遼の旧名とされ、その位置の点は見つからなかった（2026-11-15。清水さんの決定で、ウランバートルから移した）
  },

  {
    id: 'ueshiba_iwama',
    title: '岩間',
    year: '1942',
    placeName: 'Iwama, Ibaraki',
    description: '武道研究と農耕を続けた拠点。1943年に合気神社を建立。「合気道」の名称が用いられ始めた時期と重なる。',
    lat: 36.2942,
    lng: 140.2813, // 合気神社（笠間市吉岡、OSM・ウィキペディア）
  },

  {
    id: 'ueshiba_tokyo_shirogane',
    title: '東京・芝白金',
    year: '1927',
    placeName: 'Shirogane, Minato, Tokyo',
    description: '1927年、竹下勇に招かれて家族と上京し、芝・白金猿町に住んで指導を始めた。仮の道場を移りながら教えた時期の住まい。',
    lat: 35.6375,
    lng: 139.7245, // 芝白金猿町はいまの白金台あたり（目黒通り沿い）とみた、おおよその位置
  },

  {
    id: 'ueshiba_tokyo',
    title: '東京・若松町（皇武館／本部道場）',
    year: '1931',
    placeName: 'Wakamatsu-cho, Shinjuku, Tokyo',
    description: '1931年に皇武館が開かれた地。戦後は合気会の本部道場となり、合気道の普及の拠点となった。開祖は1969年、この敷地内の自宅で亡くなった。',
    lat: 35.6991,
    lng: 139.7144, // 合気会本部道場（新宿区若松町17-18、国土地理院）
  },

  {
    id: 'ueshiba_hawaii',
    title: 'ハワイ',
    year: '1961',
    placeName: 'Honolulu, Hawaii',
    description: '1961年、ハワイ合気会（Hawaii Aiki Kwai）の本部道場・ホノルル合気道場の落成に際して渡布し、ハワイ各地で演武と講習を行った。開祖にとって生涯ただ一度の米国への旅。',
    lat: 21.3069,
    lng: -157.8583,
  },
];

// 滞在の並び（地球の上で「いまいる所」と「去った所」を分け、移動の線を引くため）。2026-11-15。
// 年の区切りはウィキペディア「植芝盛平」（日本語版）と合気会の沿革による。trip は旅（行って戻る）。
// 戦後の拠点：1942年から岩間。1954年頃に合気会の本部を岩間から東京の道場へ移したとされる（ウィキペディア日本語版）。
export const ueshibaStays = [
  { place: 'ueshiba_birth_tanabe', from: 1883, to: 1911 },
  { place: 'ueshiba_hokkaido_shirataki', from: 1912, to: 1918 },
  { place: 'ueshiba_ayabe_omoto', from: 1919, to: 1926 },
  { place: 'ueshiba_mongolia', from: 1924, to: 1924, trip: true },
  { place: 'ueshiba_tokyo_shirogane', from: 1927, to: 1930 },
  { place: 'ueshiba_tokyo', from: 1931, to: 1941 },
  { place: 'ueshiba_iwama', from: 1942, to: 1953 },
  { place: 'ueshiba_tokyo', from: 1954, to: 1969 },
  { place: 'ueshiba_hawaii', from: 1961, to: 1961, trip: true },
];
