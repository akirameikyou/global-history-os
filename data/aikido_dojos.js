// History OS — Focus Person Prototype (experimental layer)
// 世界の合氣道普及分布（代表地点データ）。
//
// 注意：個々の道場の正確な所在地を検証したものではない。
// 各国・地域における合氣道普及組織（連盟・団体）の存在が広く知られている
// 国・地域について、代表都市（首都または主要都市）の座標を用いて
// 「普及の広がり」を光点として可視化するための概略データである。
// 個別道場名・住所は含めない（要出典：組織名・設立年等の詳細）。
//
// events.js / persons.js / aikido_person.js / aikido_events.js とは独立。

export const aikidoDojos = [
  { id: 'dojo_jp', country: '日本', city: 'Tokyo', lat: 35.6895, lng: 139.6917 },
  { id: 'dojo_fr', country: 'フランス', city: 'Paris', lat: 48.8566, lng: 2.3522 },
  { id: 'dojo_it', country: 'イタリア', city: 'Rome', lat: 41.9028, lng: 12.4964 },
  { id: 'dojo_es', country: 'スペイン', city: 'Madrid', lat: 40.4168, lng: -3.7038 },
  { id: 'dojo_de', country: 'ドイツ', city: 'Berlin', lat: 52.52, lng: 13.405 },
  { id: 'dojo_gb', country: 'イギリス', city: 'London', lat: 51.5074, lng: -0.1278 },
  { id: 'dojo_us_e', country: 'アメリカ（東海岸）', city: 'New York', lat: 40.7128, lng: -74.006 },
  { id: 'dojo_us_w', country: 'アメリカ（西海岸）', city: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
  { id: 'dojo_ca', country: 'カナダ', city: 'Toronto', lat: 43.6532, lng: -79.3832 },
  { id: 'dojo_br', country: 'ブラジル', city: 'São Paulo', lat: -23.5505, lng: -46.6333 },
  { id: 'dojo_ar', country: 'アルゼンチン', city: 'Buenos Aires', lat: -34.6037, lng: -58.3816 },
  { id: 'dojo_mx', country: 'メキシコ', city: 'Mexico City', lat: 19.4326, lng: -99.1332 },
  { id: 'dojo_ru', country: 'ロシア', city: 'Moscow', lat: 55.7558, lng: 37.6173 },
  { id: 'dojo_au', country: 'オーストラリア', city: 'Sydney', lat: -33.8688, lng: 151.2093 },
  { id: 'dojo_nz', country: 'ニュージーランド', city: 'Auckland', lat: -36.8485, lng: 174.7633 },
  { id: 'dojo_za', country: '南アフリカ', city: 'Johannesburg', lat: -26.2041, lng: 28.0473 },
  { id: 'dojo_eg', country: 'エジプト', city: 'Cairo', lat: 30.0444, lng: 31.2357 },
  { id: 'dojo_in', country: 'インド', city: 'New Delhi', lat: 28.6139, lng: 77.209 },
  { id: 'dojo_cn', country: '中国', city: 'Beijing', lat: 39.9042, lng: 116.4074 },
  { id: 'dojo_kr', country: '韓国', city: 'Seoul', lat: 37.5665, lng: 126.978 },
  { id: 'dojo_tw', country: '台湾', city: 'Taipei', lat: 25.033, lng: 121.5654 },
  { id: 'dojo_ph', country: 'フィリピン', city: 'Manila', lat: 14.5995, lng: 120.9842 },
  { id: 'dojo_id', country: 'インドネシア', city: 'Jakarta', lat: -6.2088, lng: 106.8456 },
  { id: 'dojo_th', country: 'タイ', city: 'Bangkok', lat: 13.7563, lng: 100.5018 },
  { id: 'dojo_sg', country: 'シンガポール', city: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { id: 'dojo_nl', country: 'オランダ', city: 'Amsterdam', lat: 52.3676, lng: 4.9041 },
  { id: 'dojo_be', country: 'ベルギー', city: 'Brussels', lat: 50.8503, lng: 4.3517 },
  { id: 'dojo_ch', country: 'スイス', city: 'Zurich', lat: 47.3769, lng: 8.5417 },
  { id: 'dojo_se', country: 'スウェーデン', city: 'Stockholm', lat: 59.3293, lng: 18.0686 },
  { id: 'dojo_no', country: 'ノルウェー', city: 'Oslo', lat: 59.9139, lng: 10.7522 },
  { id: 'dojo_fi', country: 'フィンランド', city: 'Helsinki', lat: 60.1699, lng: 24.9384 },
  { id: 'dojo_pl', country: 'ポーランド', city: 'Warsaw', lat: 52.2297, lng: 21.0122 },
  { id: 'dojo_pt', country: 'ポルトガル', city: 'Lisbon', lat: 38.7223, lng: -9.1393 },
  { id: 'dojo_gr', country: 'ギリシャ', city: 'Athens', lat: 37.9838, lng: 23.7275 },
  { id: 'dojo_tr', country: 'トルコ', city: 'Istanbul', lat: 41.0082, lng: 28.9784 },
  { id: 'dojo_il', country: 'イスラエル', city: 'Tel Aviv', lat: 32.0853, lng: 34.7818 },
  { id: 'dojo_ma', country: 'モロッコ', city: 'Rabat', lat: 34.0209, lng: -6.8416 },
  { id: 'dojo_ke', country: 'ケニア', city: 'Nairobi', lat: -1.2921, lng: 36.8219 },
  { id: 'dojo_co', country: 'コロンビア', city: 'Bogotá', lat: 4.711, lng: -74.0721 },
  { id: 'dojo_cl', country: 'チリ', city: 'Santiago', lat: -33.4489, lng: -70.6693 },
  { id: 'dojo_pe', country: 'ペルー', city: 'Lima', lat: -12.0464, lng: -77.0428 },
  { id: 'dojo_cz', country: 'チェコ', city: 'Prague', lat: 50.0755, lng: 14.4378 },
  { id: 'dojo_at', country: 'オーストリア', city: 'Vienna', lat: 48.2082, lng: 16.3738 },
  { id: 'dojo_ua', country: 'ウクライナ', city: 'Kyiv', lat: 50.4501, lng: 30.5234 },
];
