// History OS — Focus Person Prototype (experimental layer)
// 世界の合氣道普及分布（代表地点データ）。
//
// 出典：公益財団法人合気会（Aikikai Foundation）公式サイト
//   https://aikikai.or.jp/eng/about/overseasorganization/
// 上記ページに掲載されている「海外加盟組織」の国・地域一覧（2026年7月時点で取得）
// を基に、日本（合気会本部道場）を加えた国・地域を列挙している。
//
// 注意：
// - 個々の道場・団体の正確な所在地（住所）を検証したものではない。
//   lat/lng は各国の首都（一部、通称的に用いられる主要都市）の座標であり、
//   「その国に加盟組織が存在する」という事実を国単位で可視化するための
//   代表地点にすぎない。
// - 一国内に複数の加盟組織が存在する場合も、光点としては国単位で1点にまとめている
//   （組織名の列挙は行わない。詳細は上記出典ページを参照）。
// - 上記ページ自体が示すのは「合気会（Aikikai）系列の加盟組織」であり、
//   合気道全体（他系統・独立道場等を含む）の普及状況を網羅するものではない。
//
// events.js / persons.js / aikido_person.js / aikido_events.js とは独立。

export const aikidoDojos = [
  { id: 'dojo_jp', country: '日本（合気会本部道場）', city: 'Tokyo', lat: 35.6895, lng: 139.6917 },
  { id: 'dojo_ar', country: 'アルゼンチン', city: 'Buenos Aires', lat: -34.6037, lng: -58.3816 },
  { id: 'dojo_am', country: 'アルメニア', city: 'Yerevan', lat: 40.1792, lng: 44.4991 },
  { id: 'dojo_au', country: 'オーストラリア', city: 'Canberra', lat: -35.2809, lng: 149.1300 },
  { id: 'dojo_at', country: 'オーストリア', city: 'Vienna', lat: 48.2082, lng: 16.3738 },
  { id: 'dojo_az', country: 'アゼルバイジャン', city: 'Baku', lat: 40.4093, lng: 49.8671 },
  { id: 'dojo_by', country: 'ベラルーシ', city: 'Minsk', lat: 53.9006, lng: 27.5590 },
  { id: 'dojo_be', country: 'ベルギー', city: 'Brussels', lat: 50.8503, lng: 4.3517 },
  { id: 'dojo_bj', country: 'ベナン', city: 'Porto-Novo', lat: 6.4969, lng: 2.6289 },
  { id: 'dojo_br', country: 'ブラジル', city: 'Brasília', lat: -15.7939, lng: -47.8828 },
  { id: 'dojo_bo', country: 'ボリビア', city: 'La Paz', lat: -16.5000, lng: -68.1500 },
  { id: 'dojo_bg', country: 'ブルガリア', city: 'Sofia', lat: 42.6977, lng: 23.3219 },
  { id: 'dojo_ca', country: 'カナダ', city: 'Ottawa', lat: 45.4215, lng: -75.6972 },
  { id: 'dojo_cl', country: 'チリ', city: 'Santiago', lat: -33.4489, lng: -70.6693 },
  { id: 'dojo_cn', country: '中国', city: 'Beijing', lat: 39.9042, lng: 116.4074 },
  { id: 'dojo_co', country: 'コロンビア', city: 'Bogotá', lat: 4.7110, lng: -74.0721 },
  { id: 'dojo_cg', country: 'コンゴ共和国', city: 'Brazzaville', lat: -4.2634, lng: 15.2429 },
  { id: 'dojo_hr', country: 'クロアチア', city: 'Zagreb', lat: 45.8150, lng: 15.9819 },
  { id: 'dojo_cu', country: 'キューバ', city: 'Havana', lat: 23.1136, lng: -82.3666 },
  { id: 'dojo_cz', country: 'チェコ', city: 'Prague', lat: 50.0755, lng: 14.4378 },
  { id: 'dojo_dk', country: 'デンマーク', city: 'Copenhagen', lat: 55.6761, lng: 12.5683 },
  { id: 'dojo_eg', country: 'エジプト', city: 'Cairo', lat: 30.0444, lng: 31.2357 },
  { id: 'dojo_ee', country: 'エストニア', city: 'Tallinn', lat: 59.4370, lng: 24.7536 },
  { id: 'dojo_fi', country: 'フィンランド', city: 'Helsinki', lat: 60.1699, lng: 24.9384 },
  { id: 'dojo_fr', country: 'フランス', city: 'Paris', lat: 48.8566, lng: 2.3522 },
  { id: 'dojo_de', country: 'ドイツ', city: 'Berlin', lat: 52.5200, lng: 13.4050 },
  { id: 'dojo_gr', country: 'ギリシャ', city: 'Athens', lat: 37.9838, lng: 23.7275 },
  { id: 'dojo_gu', country: 'グアム', city: 'Hagåtña', lat: 13.4745, lng: 144.7504 },
  { id: 'dojo_hu', country: 'ハンガリー', city: 'Budapest', lat: 47.4979, lng: 19.0402 },
  { id: 'dojo_in', country: 'インド', city: 'New Delhi', lat: 28.6139, lng: 77.2090 },
  { id: 'dojo_id', country: 'インドネシア', city: 'Jakarta', lat: -6.2088, lng: 106.8456 },
  { id: 'dojo_ir', country: 'イラン', city: 'Tehran', lat: 35.6892, lng: 51.3890 },
  { id: 'dojo_ie', country: 'アイルランド', city: 'Dublin', lat: 53.3498, lng: -6.2603 },
  { id: 'dojo_il', country: 'イスラエル', city: 'Tel Aviv', lat: 32.0853, lng: 34.7818 },
  { id: 'dojo_it', country: 'イタリア', city: 'Rome', lat: 41.9028, lng: 12.4964 },
  { id: 'dojo_kz', country: 'カザフスタン', city: 'Astana', lat: 51.1605, lng: 71.4704 },
  { id: 'dojo_kr', country: '韓国', city: 'Seoul', lat: 37.5665, lng: 126.9780 },
  { id: 'dojo_kg', country: 'キルギス', city: 'Bishkek', lat: 42.8746, lng: 74.5698 },
  { id: 'dojo_lv', country: 'ラトビア', city: 'Riga', lat: 56.9496, lng: 24.1052 },
  { id: 'dojo_lb', country: 'レバノン', city: 'Beirut', lat: 33.8938, lng: 35.5018 },
  { id: 'dojo_li', country: 'リヒテンシュタイン', city: 'Vaduz', lat: 47.1410, lng: 9.5209 },
  { id: 'dojo_lt', country: 'リトアニア', city: 'Vilnius', lat: 54.6872, lng: 25.2797 },
  { id: 'dojo_lu', country: 'ルクセンブルク', city: 'Luxembourg', lat: 49.6116, lng: 6.1319 },
  { id: 'dojo_my', country: 'マレーシア', city: 'Kuala Lumpur', lat: 3.1390, lng: 101.6869 },
  { id: 'dojo_mt', country: 'マルタ', city: 'Valletta', lat: 35.8989, lng: 14.5146 },
  { id: 'dojo_mx', country: 'メキシコ', city: 'Mexico City', lat: 19.4326, lng: -99.1332 },
  { id: 'dojo_md', country: 'モルドバ', city: 'Chișinău', lat: 47.0105, lng: 28.8638 },
  { id: 'dojo_mc', country: 'モナコ', city: 'Monaco', lat: 43.7384, lng: 7.4246 },
  { id: 'dojo_me', country: 'モンテネグロ', city: 'Podgorica', lat: 42.4304, lng: 19.2594 },
  { id: 'dojo_ma', country: 'モロッコ', city: 'Rabat', lat: 34.0209, lng: -6.8416 },
  { id: 'dojo_mm', country: 'ミャンマー', city: 'Naypyidaw', lat: 19.7633, lng: 96.0785 },
  { id: 'dojo_np', country: 'ネパール', city: 'Kathmandu', lat: 27.7172, lng: 85.3240 },
  { id: 'dojo_nl', country: 'オランダ', city: 'Amsterdam', lat: 52.3676, lng: 4.9041 },
  { id: 'dojo_nz', country: 'ニュージーランド', city: 'Wellington', lat: -41.2865, lng: 174.7762 },
  { id: 'dojo_mk', country: '北マケドニア', city: 'Skopje', lat: 41.9981, lng: 21.4254 },
  { id: 'dojo_no', country: 'ノルウェー', city: 'Oslo', lat: 59.9139, lng: 10.7522 },
  { id: 'dojo_pa', country: 'パナマ', city: 'Panama City', lat: 8.9824, lng: -79.5199 },
  { id: 'dojo_py', country: 'パラグアイ', city: 'Asunción', lat: -25.2637, lng: -57.5759 },
  { id: 'dojo_pe', country: 'ペルー', city: 'Lima', lat: -12.0464, lng: -77.0428 },
  { id: 'dojo_ph', country: 'フィリピン', city: 'Manila', lat: 14.5995, lng: 120.9842 },
  { id: 'dojo_pl', country: 'ポーランド', city: 'Warsaw', lat: 52.2297, lng: 21.0122 },
  { id: 'dojo_pt', country: 'ポルトガル', city: 'Lisbon', lat: 38.7223, lng: -9.1393 },
  { id: 'dojo_ro', country: 'ルーマニア', city: 'Bucharest', lat: 44.4268, lng: 26.1025 },
  { id: 'dojo_ru', country: 'ロシア', city: 'Moscow', lat: 55.7558, lng: 37.6173 },
  { id: 'dojo_sm', country: 'サンマリノ', city: 'San Marino', lat: 43.9424, lng: 12.4578 },
  { id: 'dojo_sa', country: 'サウジアラビア', city: 'Riyadh', lat: 24.7136, lng: 46.6753 },
  { id: 'dojo_rs', country: 'セルビア', city: 'Belgrade', lat: 44.7866, lng: 20.4489 },
  { id: 'dojo_sg', country: 'シンガポール', city: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { id: 'dojo_sk', country: 'スロバキア', city: 'Bratislava', lat: 48.1486, lng: 17.1077 },
  { id: 'dojo_si', country: 'スロベニア', city: 'Ljubljana', lat: 46.0569, lng: 14.5058 },
  { id: 'dojo_za', country: '南アフリカ', city: 'Pretoria', lat: -25.7479, lng: 28.2293 },
  { id: 'dojo_es', country: 'スペイン', city: 'Madrid', lat: 40.4168, lng: -3.7038 },
  { id: 'dojo_lk', country: 'スリランカ', city: 'Colombo', lat: 6.9271, lng: 79.8612 },
  { id: 'dojo_se', country: 'スウェーデン', city: 'Stockholm', lat: 59.3293, lng: 18.0686 },
  { id: 'dojo_ch', country: 'スイス', city: 'Bern', lat: 46.9480, lng: 7.4474 },
  { id: 'dojo_tw', country: '台湾', city: 'Taipei', lat: 25.0330, lng: 121.5654 },
  { id: 'dojo_th', country: 'タイ', city: 'Bangkok', lat: 13.7563, lng: 100.5018 },
  { id: 'dojo_tr', country: 'トルコ', city: 'Ankara', lat: 39.9334, lng: 32.8597 },
  { id: 'dojo_ua', country: 'ウクライナ', city: 'Kyiv', lat: 50.4501, lng: 30.5234 },
  { id: 'dojo_ae', country: 'アラブ首長国連邦', city: 'Abu Dhabi', lat: 24.4539, lng: 54.3773 },
  { id: 'dojo_gb', country: 'イギリス', city: 'London', lat: 51.5074, lng: -0.1278 },
  { id: 'dojo_us', country: 'アメリカ', city: 'Washington, D.C.', lat: 38.9072, lng: -77.0369 },
  { id: 'dojo_uy', country: 'ウルグアイ', city: 'Montevideo', lat: -34.9011, lng: -56.1645 },
  { id: 'dojo_uz', country: 'ウズベキスタン', city: 'Tashkent', lat: 41.2995, lng: 69.2401 },
  { id: 'dojo_ve', country: 'ベネズエラ', city: 'Caracas', lat: 10.4806, lng: -66.9036 },
];
