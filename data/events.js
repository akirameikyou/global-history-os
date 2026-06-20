export const events = [

{
id:'manjiro_birth',
type:'person',
startYear:1827,
title:'中浜万次郎 誕生',
year:'1827',
description:'土佐国中浜村に生まれる。',
lat:32.78,
lng:132.95,
labelLat:32.45,
labelLng:133.35,
placeName:'Ashizuri',
lineColor:'#66e0ff',
relatedEvents:['manjiro_shipwreck']
},

{
id:'manjiro_shipwreck',
type:'person',
startYear:1841,
endYear:1841,
timelineType:'duration',
durationLabel:'鳥島143日サバイバル',
routeLabel:'TORISHIMA',
title:'漂流・鳥島',
year:'1841',
description:'漂流し、鳥島へ漂着する。',
lat:30.48,
lng:140.30,
placeName:'Torishima',
lineColor:'#66e0ff',
relatedEvents:['manjiro_hawaii']
},

{
id:'manjiro_hawaii',
type:'person',
startYear:1841,
routeLabel:'HAWAII',
title:'ハワイへ',
year:'1841',
description:'救助後、ハワイへ渡る。',
lat:21.31,
lng:-157.86,
placeName:'Hawaii',
lineColor:'#66e0ff',
relatedEvents:['manjiro_america']
},

{
id:'manjiro_america',
type:'person',
startYear:1843,
routeLabel:'NEW BEDFORD',
title:'アメリカ渡航',
year:'1843',
description:'フェアヘーブンで教育を受け、航海術・英語・民主主義思想を学ぶ。',
lat:41.63,
lng:-70.93,
placeName:'New Bedford / Fairhaven',
lineColor:'#66e0ff',
relatedEvents:['manjiro_franklin']
},

{
id:'manjiro_franklin',
type:'person',
startYear:1846,
routeLabel:'WHALING',
title:'フランクリン号捕鯨航海',
year:'1846',
description:'捕鯨船フランクリン号に乗船し、世界の海へ向かう。',
lat:41.63,
lng:-70.93,
placeName:'Fairhaven',
lineColor:'#66e0ff',

routeType:'voyage',
routeName:'FRANKLIN WHALING VOYAGE',
routePoints:[
  {
    label:'Fairhaven',
    lat:41.6376,
    lng:-70.9036
  },
  {
    label:'Cape Horn',
    lat:-55.98,
    lng:-67.29
  },
  {
    label:'Pacific Whaling Grounds',
    lat:-10,
    lng:-145
  },
  {
    label:'Cape of Good Hope',
    lat:-34.36,
    lng:18.47
  },
  {
    label:'Fairhaven',
    lat:41.6376,
    lng:-70.9036
  }
],

relatedEvents:['manjiro_pacific_whaling_grounds']
},

{
id:'manjiro_pacific_whaling_grounds',
type:'person',
timelineVisible:false,
startYear:1846,
routeLabel:'PACIFIC WHALING',
title:'太平洋捕鯨海域',
year:'1846 — 1849',
description:'フランクリン号の捕鯨航海で、万次郎は太平洋の捕鯨海域を経験する。都市ではなく、海そのものが学びと労働の場となった。',
lat:-10,
lng:-145,
placeName:'Pacific Whaling Grounds',
lineColor:'#66e0ff',
relatedEvents:['manjiro_fairhaven_return']
},
  
{
id:'manjiro_fairhaven_return',
type:'person',
startYear:1849,
routeLabel:'FAIRHAVEN',
title:'捕鯨航海を終え帰還',
year:'1849',
description:'3年4ヶ月の捕鯨航海を終え、フェアヘーブンへ帰還する。',
lat:41.6376,
lng:-70.9036,
placeName:'Fairhaven',
lineColor:'#66e0ff',
relatedEvents:['manjiro_goldrush_departure']
},

{
id:'manjiro_goldrush_departure',
type:'person',
startYear:1849,
routeLabel:'GOLD RUSH',
title:'ゴールドラッシュへ出航',
year:'1849.10',
description:'友人テレとともに、サンフランシスコ行きの材木帆船に便乗し、ニューベッドフォードを出航する。',
lat:41.6376,
lng:-70.9036,
placeName:'Fairhaven / New Bedford',
lineColor:'#66e0ff',
nodeType:'port',
historicalStatus:'documented',
transport:'sailing',
voyageId:'goldrush_voyage_1850',
routeType:'voyage',
routeName:'GOLD RUSH VOYAGE',
routePoints:[
  {label:'Fairhaven', lat:41.6376, lng:-70.9036, transport:'sailing', nodeType:'port', historicalStatus:'documented'},

  {label:'North Atlantic Arc', lat:25.0, lng:-58.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'Equatorial Atlantic Arc', lat:3.0, lng:-42.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'Brazil Offshore Arc', lat:-18.0, lng:-38.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'South Atlantic Arc', lat:-38.0, lng:-42.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'Cape Horn Sea Route', lat:-58.5, lng:-74.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'Valparaiso', lat:-33.0472, lng:-71.6127, transport:'sailing', nodeType:'port', historicalStatus:'documented'},

  {label:'South Pacific Northbound Arc', lat:-25.0, lng:-86.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'Eastern Pacific Arc', lat:-5.0, lng:-103.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'California Offshore Arc', lat:25.0, lng:-123.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'San Francisco', lat:37.7749, lng:-122.4194, transport:'sailing', nodeType:'port', historicalStatus:'documented'}
],
relatedEvents:['manjiro_cape_horn']
},

{
id:'manjiro_cape_horn',
type:'person',
timelineVisible:false,
startYear:1850,
routeLabel:'CAPE HORN',
title:'ケープホーンを回る',
year:'1849 — 1850',
description:'材木帆船は南大西洋を下り、南米南端のケープホーンを回って太平洋へ出る。',
lat:-55.98,
lng:-67.29,
placeName:'Cape Horn',
lineColor:'#66e0ff',
nodeType:'voyagePoint',
historicalStatus:'estimated',
transport:'sailing',
voyageId:'goldrush_voyage_1850',
relatedEvents:['manjiro_valparaiso']
},

{
id:'manjiro_valparaiso',
type:'person',
startYear:1850,
routeLabel:'VALPARAISO',
title:'バルパライソ寄港',
year:'1850.04',
description:'チリの港町バルパライソに寄港し、約80日停泊する。',
lat:-33.0472,
lng:-71.6127,
placeName:'Valparaiso',
lineColor:'#66e0ff',
nodeType:'port',
historicalStatus:'documented',
transport:'sailing',
voyageId:'goldrush_voyage_1850',
relatedEvents:['manjiro_sanfrancisco_arrival']
},

{
id:'manjiro_sanfrancisco_arrival',
type:'person',
startYear:1850,
routeLabel:'SAN FRANCISCO',
title:'サンフランシスコ到着',
year:'1850.05',
description:'サンフランシスコ湾に到着。万次郎はその地勢を見て、すばらしく上等な港だと感じる。',
lat:37.7749,
lng:-122.4194,
placeName:'San Francisco',
lineColor:'#66e0ff',
nodeType:'port',
historicalStatus:'documented',
transport:'sailing',
voyageId:'goldrush_voyage_1850',
relatedEvents:['manjiro_sacramento_steamship']
},

{
id:'manjiro_sacramento_steamship',
type:'person',
startYear:1850,
routeLabel:'STEAMSHIP',
title:'蒸気船でサクラメントへ',
year:'1850',
description:'サンフランシスコから蒸気船で河をさかのぼり、サクラメントへ向かう。万次郎にとって初めての蒸気船体験となる。',
lat:38.5816,
lng:-121.4944,
placeName:'Sacramento',
lineColor:'#ffffff',
nodeType:'transportChange',
historicalStatus:'documented',
transport:'steamship',
voyageId:'goldrush_voyage_1850',
relatedEvents:['manjiro_wagon_route']
},

{
id:'manjiro_wagon_route',
type:'person',
timelineVisible:false,
startYear:1850,
routeLabel:'WAGON',
title:'馬車で山道へ',
year:'1850',
description:'サクラメントから馬車に乗り換え、金山へ向かって山道を進む。',
lat:38.75,
lng:-120.85,
placeName:'Sierra Nevada Route',
lineColor:'#ffd95e',
nodeType:'transportChange',
historicalStatus:'estimated',
transport:'wagon',
voyageId:'goldrush_voyage_1850',
relatedEvents:['manjiro_goldfield']
},

{
id:'manjiro_goldfield',
type:'person',
startYear:1850,
routeLabel:'GOLD FIELD',
title:'カリフォルニア金山',
year:'1850',
description:'徒歩で金山へ入り、採掘組に加わる。のち自力採掘に移り、帰国資金を得る。',
lat:38.8026,
lng:-120.8947,
placeName:'California Gold Fields',
lineColor:'#ffd95e',
nodeType:'voyagePoint',
historicalStatus:'estimated',
transport:'walking',
voyageId:'goldrush_voyage_1850',
relatedEvents:['manjiro_sanfrancisco_return']
},

{
id:'manjiro_sanfrancisco_return',
type:'person',
timelineVisible:false,
startYear:1850,
routeLabel:'SAN FRANCISCO',
title:'サンフランシスコへ戻る',
year:'1850.08',
description:'帰国資金を得た万次郎は、道具を友人に譲り、サンフランシスコへ戻る。',
lat:37.7749,
lng:-122.4194,
placeName:'San Francisco',
lineColor:'#ffd95e',
nodeType:'port',
historicalStatus:'documented',
transport:'wagon',
voyageId:'goldrush_voyage_1850',
relatedEvents:['manjiro_elysia']
},

{
id:'manjiro_elysia',
type:'person',
timelineVisible:false,
startYear:1850,
routeLabel:'ELYSIA',
title:'エリシア号でホノルルへ',
year:'1850.08',
description:'ホノルル行きの商船エリシア号に、初めて正式な船客として乗り込む。',
lat:21.3069,
lng:-157.8583,
placeName:'Honolulu',
lineColor:'#66e0ff',
nodeType:'port',
historicalStatus:'documented',
transport:'sailing',
voyageId:'goldrush_voyage_1850',
relatedEvents:['manjiro_honolulu_return_prepare']
},

{
id:'manjiro_honolulu_return_prepare',
type:'person',
startYear:1850,
routeLabel:'HONOLULU',
title:'ホノルルで帰国準備',
year:'1850.08',
description:'ホノルルに戻り、伝蔵たちと帰国を相談する。デーモン牧師の支援を受け、琉球上陸に向けた物資と船の準備を進める。',
lat:21.3069,
lng:-157.8583,
placeName:'Honolulu',
lineColor:'#66e0ff',
nodeType:'thought',
historicalStatus:'documented',
transport:'preparation',
voyageId:'return_voyage_1851',
relatedEvents:['manjiro_return_ryukyu']
},
  
{
id:'manjiro_return_ryukyu',
type:'person',
startYear:1851,
routeLabel:'RYUKYU',
title:'琉球上陸',
year:'1851',
description:'琉球へ上陸し、日本帰国への道が開かれる。',
lat:26.21,
lng:127.68,
placeName:'Naha',
lineColor:'#66e0ff',
relatedEvents:['manjiro_satsuma']
},

{
id:'manjiro_satsuma',
type:'person',
startYear:1851,
routeLabel:'SATSUMA',
title:'薩摩で取り調べ',
year:'1851',
description:'薩摩で取り調べを受け、西洋事情や航海術を伝える。',
lat:31.5966,
lng:130.5571,
placeName:'Kagoshima',
lineColor:'#66e0ff',
relatedEvents:['manjiro_nagasaki']
},

{
id:'manjiro_nagasaki',
type:'person',
startYear:1851,
routeLabel:'NAGASAKI',
title:'長崎で取り調べ',
year:'1851',
description:'長崎で取り調べを受ける。',
lat:32.75,
lng:129.88,
labelLat:33.15,
labelLng:128.55,
placeName:'Nagasaki',
lineColor:'#66e0ff',
relatedEvents:['manjiro_tosa_return']
},

{
id:'manjiro_tosa_return',
type:'person',
startYear:1852,
routeLabel:'TOSA',
title:'土佐へ帰郷',
year:'1852',
description:'土佐へ戻り、故郷へ帰る。',
lat:32.78,
lng:132.95,
placeName:'Ashizuri',
lineColor:'#66e0ff',
relatedEvents:['manjiro_edo']
},

{
id:'manjiro_edo',
type:'person',
startYear:1853,
routeLabel:'EDO',
title:'幕府に登用',
year:'1853',
description:'幕府に登用され、海外知識を日本へ伝える。',
lat:35.68,
lng:139.76,
labelLat:35.78,
labelLng:138.95,
placeName:'Edo',
lineColor:'#66e0ff',
relatedEvents:['black_ships','treaty_kanagawa']
},

{
id:'manjiro_treaty_support',
type:'person',
startYear:1854,
routeLabel:'TREATY',
title:'開国交渉期の支援',
year:'1854',
description:'日米交渉期、英文翻訳や海外事情の知識で幕府を支援する。',
lat:35.44,
lng:139.64,
labelLat:35.05,
labelLng:140.45,
placeName:'Kanagawa / Yokohama',
lineColor:'#66e0ff',
relatedEvents:['treaty_kanagawa']
},

{
id:'manjiro_kanrin',
type:'person',
startYear:1860,
routeLabel:'SAN FRANCISCO',
title:'咸臨丸で再渡米',
year:'1860',
description:'咸臨丸に通訳として乗船し、再び太平洋を渡る。',
lat:37.77,
lng:-122.42,
placeName:'San Francisco',
lineColor:'#66e0ff',
relatedEvents:['civil_war','manjiro_ogasawara']
},

{
id:'manjiro_ogasawara',
type:'person',
startYear:1861,
routeLabel:'OGASAWARA',
title:'小笠原調査',
year:'1861',
description:'小笠原諸島調査に参加し、領土保全と捕鯨政策に関わる。',
lat:27.075,
lng:142.213,
placeName:'Chichijima',
lineColor:'#66e0ff',
relatedEvents:['manjiro_satsuma_nagasaki']
},

{
id:'manjiro_satsuma_nagasaki',
type:'person',
startYear:1864,
routeLabel:'SATSUMA / NAGASAKI',
title:'薩摩・長崎で教授',
year:'1864',
description:'薩摩・長崎などで航海術・測量・英語・造船を教える。',
lat:32.75,
lng:129.88,
placeName:'Nagasaki / Kagoshima',
lineColor:'#66e0ff',
relatedEvents:['meiji','manjiro_second_america']
},

{
id:'manjiro_second_america',
type:'person',
startYear:1870,
routeLabel:'NEW YORK',
title:'再渡米・欧州視察',
year:'1870',
description:'普仏戦争視察のため再渡米し、ニューヨークから英国へ向かう。',
lat:40.7128,
lng:-74.0060,
placeName:'New York',
lineColor:'#66e0ff',
relatedEvents:['manjiro_fairhaven_revisit']
},

{
id:'manjiro_fairhaven_revisit',
type:'person',
startYear:1870,
routeLabel:'FAIRHAVEN',
title:'フェアヘーブン再訪',
year:'1870',
description:'21年ぶりにホイットフィールド船長を訪問する。',
lat:41.6376,
lng:-70.9036,
placeName:'Fairhaven',
lineColor:'#66e0ff',
relatedEvents:['manjiro_suez']
},

{
id:'manjiro_suez',
type:'person',
startYear:1870,
routeLabel:'SUEZ',
title:'スエズ運河経由で帰国',
year:'1870',
description:'欧州視察の帰路、開通間もないスエズ運河を通り東回りで帰国する。',
lat:30.0444,
lng:32.5498,
placeName:'Suez Canal',
lineColor:'#66e0ff',
relatedEvents:['manjiro_death']
},

{
id:'manjiro_death',
type:'person',
startYear:1898,
routeLabel:'TOKYO',
title:'死去',
year:'1898',
description:'東京で死去。',
lat:35.68,
lng:139.76,
placeName:'Tokyo',
lineColor:'#66e0ff',
relatedEvents:[]
},

{
id:'opium_war',
type:'world',
startYear:1839,
endYear:1842,
title:'アヘン戦争',
year:'1839 — 1842',
description:'清とイギリスの戦争。東アジア秩序に大きな衝撃を与えた。',
cardText:'アヘン戦争は中国とイギリスの戦争である。しかしHistory OSの視点では、その影響は中国だけに留まらない。清の敗北によって東アジアの秩序は大きく変化し、列強はアジアへの進出を加速させた。この変化はやがて日本にも及び、黒船来航と開国へつながっていく。万次郎が帰国した1851年、日本はすでにアヘン戦争後の世界の中に存在していた。',
meaning:'東アジア秩序の転換点',
color:'#ff5e5e',
lat:22.3,
lng:114.1,
placeName:'Pearl River Delta / Hong Kong',
geoCountry:'China',
areaColor:'rgba(255,94,94,0.18)',
strokeColor:'rgba(255,94,94,0.65)',
relatedEvents:['black_ships','treaty_kanagawa','manjiro_return_ryukyu']
},
  
{
id:'mexican_american_war',
type:'world',
startYear:1846,
endYear:1848,
title:'米墨戦争',
year:'1846 — 1848',
description:'アメリカとメキシコの戦争。カリフォルニアを含む西部領土の帰属を大きく変えた。',
cardText:'万次郎がフランクリン号で捕鯨航海に出た1846年、北米大陸では米墨戦争が始まっていた。この戦争はカリフォルニアの帰属を変え、のちのゴールドラッシュ、サンフランシスコの急成長、万次郎の帰国資金形成につながる背景となった。',
meaning:'California Connection の前提',
color:'#ff5e5e',
lat:29.42,
lng:-98.49,
placeName:'Texas / Mexico Border',
geoCountry:'United States of America',
areaColor:'rgba(255,94,94,0.18)',
strokeColor:'rgba(255,94,94,0.65)',
relatedEvents:['gold_rush','manjiro_franklin','manjiro_gold_rush']
},
  
{
id:'gold_rush',
type:'world',
startYear:1848,
endYear:1855,
title:'カリフォルニア・ゴールドラッシュ',
year:'1848 — 1855',
description:'金鉱発見を契機に世界中から人々が流入した。',
cardText:'1848年の金発見は、太平洋世界の重心を大きく動かした。サンフランシスコは小さな港町から国際都市へ変貌し、移民、交易、情報、人の移動が集中する Pacific Gateway となった。万次郎もこの変化の中で帰国資金を得る機会をつかんだ。',
meaning:'Pacific Gateway の誕生',
color:'#ffd95e',
lat:37.77,
lng:-122.42,
placeName:'San Francisco / California',
geoCountry:'United States of America',
areaColor:'rgba(255,217,94,0.18)',
strokeColor:'rgba(255,217,94,0.65)',
relatedEvents:['manjiro_gold_rush','manjiro_goldfield']
},

{
id:'black_ships',
type:'world',
startYear:1853,
endYear:1853,
title:'黒船来航',
year:'1853',
description:'ペリー率いる黒船艦隊が浦賀沖へ来航した。',
cardText:'黒船来航は、一人の提督や一つの国家だけで説明できる出来事ではない。その背後には、中国貿易、太平洋捕鯨、蒸気船革命、アヘン戦争後の東アジア再編が存在していた。世界海洋ネットワークが日本へ到達し、開国への扉が開かれた接続点である。',
meaning:'World Maritime Network Connection',
color:'#b58cff',
lat:35.24,
lng:139.72,
labelLat:34.95,
labelLng:140.65,
placeName:'Uraga',
geoCountry:'Japan',
areaColor:'rgba(181,140,255,0.18)',
strokeColor:'rgba(181,140,255,0.70)',
relatedEvents:['treaty_kanagawa','manjiro_edo']
},

{
id:'treaty_kanagawa',
type:'world',
startYear:1854,
endYear:1854,
title:'日米和親条約',
year:'1854',
description:'日米和親条約締結。黒船来航を経て、日本は開国へ向かう制度的接続点を迎えた。',
color:'#66e0ff',
lat:35.44,
lng:139.64,
labelLat:35.05,
labelLng:140.45,
placeName:'Kanagawa / Yokohama',
geoCountry:'Japan',
areaColor:'rgba(102,224,255,0.16)',
strokeColor:'rgba(102,224,255,0.65)',
relatedEvents:['black_ships','manjiro_edo','manjiro_treaty_support']
},

{
id:'civil_war',
type:'world',
startYear:1861,
endYear:1865,
title:'南北戦争',
year:'1861 — 1865',
description:'アメリカ国家構造を再定義した内戦。',
color:'#ff5e5e',
lat:38.0,
lng:-78.5,
placeName:'Virginia / Shenandoah',
geoCountry:'United States of America',
areaColor:'rgba(255,94,94,0.22)',
strokeColor:'rgba(255,94,94,0.75)',
relatedEvents:[]
},

{
id:'meiji',
type:'world',
startYear:1868,
title:'明治維新',
year:'1868',
description:'近代国家建設開始。',
color:'#7dff7a',
lat:35.68,
lng:139.76,
labelLat:35.15,
labelLng:140.85,
placeName:'Tokyo',
relatedEvents:['manjiro_second_america']
}

];
