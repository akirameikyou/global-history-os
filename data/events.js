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
relatedEvents:['manjiro_torishima_rescue']
},

{
id:'manjiro_torishima_rescue',
type:'person',
startYear:1841,
routeLabel:'RESCUE',
title:'ジョン・ハウランド号に救助される',
year:'1841.06',
description:'鳥島でアメリカ捕鯨船ジョン・ハウランド号に救助される。',
lat:30.48,
lng:140.30,
placeName:'Torishima',
lineColor:'#66e0ff',
nodeType:'encounter',
historicalStatus:'documented',
transport:'sailing',
voyageId:'john_howland_voyage_1841_1843',
chapterId:'howland',
routeType:'voyage',
routeName:'TORISHIMA TO HONOLULU',

routePoints:[

{
label:'Torishima',
lat:30.48,
lng:140.30,
nodeType:'port',
historicalStatus:'documented'
},

{
label:'North Pacific Whaling Grounds',
lat:42.0,
lng:165.0,
nodeType:'routeControl',
historicalStatus:'control'
},

{
label:'Central Pacific Whaling Grounds',
lat:28.0,
lng:-170.0,
nodeType:'routeControl',
historicalStatus:'control'
},

{
label:'Hawaii Approach',
lat:23.5,
lng:-160.0,
nodeType:'routeControl',
historicalStatus:'control'
},

{
label:'Honolulu',
lat:21.3069,
lng:-157.8583,
nodeType:'port',
historicalStatus:'documented'
}

],

arcVisible:false,
relatedEvents:['manjiro_howland_honolulu_arrival']
},

{
id:'manjiro_howland_honolulu_arrival',
type:'person',
startYear:1841,
routeLabel:'HONOLULU',
title:'ホノルル入港',
year:'1841.12',
description:'救助後も捕鯨を続けたのち、ホノルル港に入港する。漂流仲間4名はハワイに残る。',
lat:21.3069,
lng:-157.8583,
placeName:'Honolulu',
lineColor:'#66e0ff',
nodeType:'port',
historicalStatus:'documented',
transport:'sailing',
voyageId:'john_howland_voyage_1841_1843', 
relatedEvents:['manjiro_honolulu_decision']
},

{
id:'manjiro_honolulu_decision',
type:'person',
startYear:1842,
routeLabel:'DECISION',
title:'万次郎だけが乗船を続ける',
year:'1842.01',
description:'仲間たちはハワイに残り、万次郎だけがホイットフィールド船長とともにジョン・ハウランド号へ乗り続ける。',
lat:21.3069,
lng:-157.8583,
placeName:'Honolulu',
lineColor:'#66e0ff',
nodeType:'thought',
historicalStatus:'documented',
transport:'sailing',
voyageId:'john_howland_voyage_1841_1843',
routeType:'voyage',
routeName:'HONOLULU TO JAPAN WATERS LOOP',
routePoints:[
  {
    label:'Honolulu',
    lat:21.3069,
    lng:-157.8583,
    nodeType:'port',
    historicalStatus:'documented',
    transport:'sailing'
  },

  {
    label:'South Pacific Departure Arc',
    lat:8.0,
    lng:-165.0,
    nodeType:'routeControl',
    historicalStatus:'control',
    transport:'sailing'
  },

  {
    label:'Gilbert Islands Arc',
    lat:1.8,
    lng:173.0,
    nodeType:'routeControl',
    historicalStatus:'control',
    transport:'sailing'
  },

  {
    label:'Guam Approach',
    lat:13.44,
    lng:144.65,
    nodeType:'port',
    historicalStatus:'documented',
    transport:'sailing'
  },

  {
    label:'East China Sea Arc',
    lat:25.5,
    lng:124.0,
    nodeType:'routeControl',
    historicalStatus:'control',
    transport:'sailing'
  },

  {
    label:'Torishima Waters',
    lat:30.48,
    lng:140.30,
    nodeType:'voyagePoint',
    historicalStatus:'estimated',
    transport:'sailing'
  },

  {
    label:'Japan Offshore Arc',
    lat:37.0,
    lng:150.0,
    nodeType:'routeControl',
    historicalStatus:'control',
    transport:'sailing'
  },

  {
label:'North Pacific Return Arc',
lat:34.0,
lng:170.0,
nodeType:'routeControl',
historicalStatus:'control',
transport:'sailing'
},

{
label:'Central North Pacific Arc',
lat:28.0,
lng:-175.0,
nodeType:'routeControl',
historicalStatus:'control',
transport:'sailing'
},
  
  {
    label:'Honolulu Offshore',
    lat:22.0,
    lng:-157.5,
    nodeType:'naturePoint',
    historicalStatus:'documented',
    transport:'sailing'
  }
],
arcVisible:false,  
relatedEvents:['manjiro_guam_first']
},

{
id:'manjiro_guam_first',
type:'person',
timelineVisible:false,
startYear:1842,
routeLabel:'GUAM',
title:'グアム・アプラ港寄港',
year:'1842',
description:'グアムのアプラ港に寄港する。捕鯨船員たちの情報交換の場でもあり、万次郎も紹介される。',
lat:13.44,
lng:144.65,
placeName:'Apra Harbor, Guam',
lineColor:'#66e0ff',
nodeType:'port',
historicalStatus:'documented',
transport:'sailing',
voyageId:'john_howland_voyage_1841_1843',
arcVisible:false,  
relatedEvents:['manjiro_torishima_revisit']
},

{
id:'manjiro_torishima_revisit',
type:'person',
timelineVisible:false,
startYear:1842,
routeLabel:'TORISHIMA',
title:'鳥島海域へ再接近',
year:'1842',
description:'救助から約1年後、ジョン・ハウランド号は鳥島付近の海域へ再び近づく。',
lat:30.48,
lng:140.30,
placeName:'Torishima Waters',
lineColor:'#66e0ff',
nodeType:'voyagePoint',
historicalStatus:'estimated',
transport:'sailing',
voyageId:'john_howland_voyage_1841_1843',
arcVisible:false,  
relatedEvents:['manjiro_honolulu_wind_failure']
},

{
id:'manjiro_honolulu_wind_failure',
type:'person',
timelineVisible:false,
startYear:1842,
routeLabel:'WIND',
title:'ホノルル入港できず',
year:'1842',
description:'ホノルルに接近するが、北北東の激しい風により入港できず、ふたたび遠洋へ向かう。',
lat:22.0,
lng:-157.5,
placeName:'Honolulu Offshore',
lineColor:'#66e0ff',
nodeType:'naturePoint',
historicalStatus:'documented',
transport:'sailing',
voyageId:'john_howland_voyage_1841_1843',
routeType:'voyage',
routeName:'HONOLULU OFFSHORE TO GUAM SECOND',
routePoints:[
  {label:'Honolulu Offshore', lat:22.0, lng:-157.5, nodeType:'naturePoint', historicalStatus:'documented', transport:'sailing'},

  {label:'Equatorial South Pacific Arc', lat:0.0, lng:-165.0, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},

  {label:'Samoa', lat:-13.83, lng:-171.75, nodeType:'port', historicalStatus:'documented', transport:'sailing'},

  {label:'Tahiti', lat:-17.65, lng:-149.42, nodeType:'port', historicalStatus:'documented', transport:'sailing'},

  {label:'Fiji Arc', lat:-18.0, lng:178.0, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},

  {label:'Solomon Arc', lat:-9.5, lng:160.0, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},

  {label:'Guam', lat:13.44, lng:144.65, nodeType:'port', historicalStatus:'documented', transport:'sailing'}
],  
arcVisible:false,  
relatedEvents:['manjiro_samoa']
},

{
id:'manjiro_samoa',
type:'person',
timelineVisible:false,
startYear:1842,
routeLabel:'SAMOA',
title:'サモア寄港',
year:'1842',
description:'ナビゲーター諸島（後のサモア諸島）へ寄港し、補給を行う。',
lat:-13.83,
lng:-171.75,
placeName:'Samoa',
lineColor:'#66e0ff',
nodeType:'port',
historicalStatus:'documented',
transport:'sailing',
voyageId:'john_howland_voyage_1841_1843',
arcVisible:false,
relatedEvents:['manjiro_tahiti']
},

{
id:'manjiro_tahiti',
type:'person',
timelineVisible:false,
startYear:1843,
routeLabel:'TAHITI',
title:'タヒチ寄港',
year:'1843',
description:'タヒチ島で食料と水を補給する。',
lat:-17.65,
lng:-149.42,
placeName:'Tahiti',
lineColor:'#66e0ff',
nodeType:'port',
historicalStatus:'documented',
transport:'sailing',
voyageId:'john_howland_voyage_1841_1843',
arcVisible:false,
relatedEvents:['manjiro_guam_second']
},
  
{
id:'manjiro_guam_second',
type:'person',
timelineVisible:false,
startYear:1843,
routeLabel:'GUAM',
title:'グアム再寄港',
year:'1843',
description:'帰航前に再びグアムのアプラ港へ寄港し、約1か月停泊する。',
lat:13.44,
lng:144.65,
placeName:'Apra Harbor, Guam',
lineColor:'#66e0ff',
nodeType:'port',
historicalStatus:'documented',
transport:'sailing',
voyageId:'john_howland_voyage_1841_1843',
routeType:'voyage',
routeName:'GUAM TO FAIRHAVEN RETURN ROUTE',
routePoints:[
  {label:'Guam', lat:13.44, lng:144.65, nodeType:'port', historicalStatus:'documented', transport:'sailing'},

  {label:'Solomon Return Arc', lat:-8.0, lng:160.0, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},

  {label:'South Pacific Return Arc', lat:-25.0, lng:175.0, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},

  {label:'Southern Ocean West Arc', lat:-45.0, lng:-165.0, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},

  {label:'Southern Ocean Central Arc', lat:-58.0, lng:-120.0, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},

  {label:'Drake Passage Arc', lat:-60.0, lng:-85.0, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},

  {label:'Cape Horn Offshore', lat:-60.0, lng:-68.0, nodeType:'voyagePoint', historicalStatus:'documented', transport:'sailing'},

  {label:'South Atlantic Arc', lat:-40.0, lng:-40.0, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},

  {label:'Brazil Offshore Arc', lat:-8.0, lng:-32.0, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},
  
  {label:'North Atlantic Return Arc', lat:22.0, lng:-50.0, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},

  {label:'Fairhaven', lat:41.6376, lng:-70.9036, nodeType:'port', historicalStatus:'documented', transport:'sailing'}
],
arcVisible:false,  
relatedEvents:['manjiro_howland_cape_horn']
},

{
id:'manjiro_howland_cape_horn',
type:'person',
timelineVisible:false,
startYear:1843,
routeLabel:'CAPE HORN',
title:'ホーン岬沖を回る',
year:'1843',
description:'南緯60度付近まで下がり、ホーン岬沖を大きく回って大西洋へ入る。',
lat:-56.0,
lng:-67.0,
placeName:'Cape Horn Offshore',
lineColor:'#66e0ff',
nodeType:'voyagePoint',
historicalStatus:'documented',
transport:'sailing',
voyageId:'john_howland_voyage_1841_1843',
arcVisible:false,
relatedEvents:['manjiro_america']
},

{
id:'manjiro_america',
type:'person',
startYear:1843,
routeLabel:'FAIRHAVEN',
title:'フェアヘーブン到着',
year:'1843.05',
description:'ジョン・ハウランド号がフェアヘーブンへ帰港。万次郎はニューイングランドでの生活へ入る。',
lat:41.63,
lng:-70.93,
placeName:'New Bedford / Fairhaven',
lineColor:'#66e0ff',
nodeType:'port',
historicalStatus:'documented',
transport:'sailing',
voyageId:'john_howland_voyage_1841_1843',
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
nodeType:'port',
historicalStatus:'documented',
transport:'sailing',
voyageId:'franklin_voyage_1846_1849',
chapterId:'franklin',
arcVisible:false,

routeType:'voyage',
routeName:'FRANKLIN WHALING VOYAGE',

routePoints:[
  {label:'Fairhaven', lat:41.6376, lng:-70.9036, nodeType:'port', historicalStatus:'documented', transport:'sailing'},

  {label:'Boston', lat:42.3601, lng:-71.0589, nodeType:'port', historicalStatus:'documented', transport:'sailing'},

  {label:'North Atlantic Arc', lat:34.0, lng:-45.0, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},

  {label:'Faial Azores', lat:38.57, lng:-28.70, nodeType:'port', historicalStatus:'documented', transport:'sailing'},

  {label:'Santiago Cape Verde', lat:14.93, lng:-23.51, nodeType:'port', historicalStatus:'documented', transport:'sailing'},

  {label:'Equator Crossing', lat:0.0, lng:-20.0, nodeType:'voyagePoint', historicalStatus:'estimated', transport:'sailing'},

  {label:'St Helena Offshore Arc', lat:-15.0, lng:-4.0, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},

  {label:'Cape of Good Hope Offshore', lat:-36.8, lng:20.0, nodeType:'naturePoint', historicalStatus:'documented', transport:'sailing'},

  {label:'New Amsterdam Island',lat:-37.84,lng:77.53,nodeType:'voyagePoint',historicalStatus:'documented',transport:'sailing'},
  
  {label:'Sunda Strait Arc', lat:-4.80, lng:106.60, nodeType:'naturePoint', historicalStatus:'documented', transport:'sailing'},

  {label:'Kupang', lat:-10.17, lng:123.60, nodeType:'port', historicalStatus:'documented', transport:'sailing'},

  ],
relatedEvents:['manjiro_franklin_1847_guam']
},
  
{
id:'manjiro_franklin_1847_guam',
type:'person',
timelineVisible:false,
startYear:1847,
routeLabel:'GUAM',
title:'フランクリン号・グアム寄港',
year:'1847.03',
description:'フランクリン号は西太平洋を北上し、1847年3月3日にグアム島アプラ港へ入港する。万次郎は3月12日にホイットフィールド宛の手紙を書く。',
lat:13.44,
lng:144.65,
placeName:'Apra Harbor, Guam',
lineColor:'#66e0ff',
nodeType:'port',
historicalStatus:'documented',
transport:'sailing',
voyageId:'franklin_voyage_1846_1849',
chapterId:'franklin',
arcVisible:false,

routeType:'voyage',
routeName:'FRANKLIN 1847 WEST PACIFIC ROUTE',
routePoints:[
  {label:'Kupang', lat:-10.17, lng:123.60, nodeType:'port', historicalStatus:'documented', transport:'sailing'},

  {label:'West New Guinea Waters', lat:2.96, lng:132.71, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},

  {label:'New Ireland Waters', lat:-4.15, lng:152.70, nodeType:'voyagePoint', historicalStatus:'estimated', transport:'sailing'},

  {label:'Solomon Islands Waters', lat:-9.65, lng:160.15, nodeType:'voyagePoint', historicalStatus:'estimated', transport:'sailing'},

  {label:'Guam', lat:13.44, lng:144.65, nodeType:'port', historicalStatus:'documented', transport:'sailing'}
],

relatedEvents:['manjiro_franklin_bonin_1847']
},

{
id:'manjiro_franklin_bonin_1847',
type:'person',
timelineVisible:false,
startYear:1847,
routeLabel:'BONIN',
title:'小笠原・ポートロイド寄港',
year:'1847',
description:'グアム出帆後、ボニン諸島ピール島のポートロイドに約10日停泊する。',
lat:27.08,
lng:142.19,
placeName:'Port Lloyd / Peel Island',
lineColor:'#66e0ff',
nodeType:'port',
historicalStatus:'documented',
transport:'sailing',
voyageId:'franklin_voyage_1846_1849',
chapterId:'franklin',
arcVisible:false,

routeType:'voyage',
routeName:'FRANKLIN 1847 JAPAN WATERS TO HONOLULU',
routePoints:[
  {label:'Guam', lat:13.44, lng:144.65, nodeType:'port', historicalStatus:'documented', transport:'sailing'},

  {label:'Bonin Port Lloyd', lat:27.08, lng:142.19, nodeType:'port', historicalStatus:'documented', transport:'sailing'},

  {label:'Iheya / Manbikomire Waters', lat:27.05, lng:127.95, nodeType:'voyagePoint', historicalStatus:'estimated', transport:'sailing'},

  {label:'Off Sendai Waters', lat:38.5, lng:144.0, nodeType:'encounter', historicalStatus:'estimated', transport:'sailing'},

  {label:'North Pacific Return Arc', lat:32.0, lng:170.0, nodeType:'routeControl', historicalStatus:'control', transport:'sailing'},

  {label:'Honolulu', lat:21.3069, lng:-157.8583, nodeType:'port', historicalStatus:'documented', transport:'sailing'}
],

relatedEvents:['manjiro_franklin_1848_guam']
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
chapterId:'gold_rush',
arcVisible:false,  
routeType:'voyage',
routeName:'GOLD RUSH VOYAGE',
routePoints:[
  {label:'Fairhaven', lat:41.6376, lng:-70.9036, transport:'sailing', nodeType:'port', historicalStatus:'documented'},

  {label:'North Atlantic Arc', lat:22.0, lng:-55.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'Brazil Offshore Arc', lat:-8.0, lng:-32.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'South Atlantic Sailing Arc', lat:-42.0, lng:-44.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'Cape Horn Sea Route', lat:-59.0, lng:-68.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'South Pacific Offshore', lat:-46.0, lng:-92.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'Valparaiso', lat:-33.0472, lng:-71.6127, transport:'sailing', nodeType:'port', historicalStatus:'documented'}
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
arcVisible:false,  
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

routeType:'voyage',
routeName:'GOLD RUSH VOYAGE / VALPARAISO TO SAN FRANCISCO',
routePoints:[
  {label:'Valparaiso', lat:-33.0472, lng:-71.6127, transport:'sailing', nodeType:'port', historicalStatus:'documented'},

  {label:'South Pacific Northbound Arc', lat:-22.0, lng:-88.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'Eastern Pacific Arc', lat:-2.0, lng:-104.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'California Offshore Arc', lat:26.0, lng:-124.0, transport:'sailing', nodeType:'routeControl', historicalStatus:'control'},

  {label:'San Francisco', lat:37.7749, lng:-122.4194, transport:'sailing', nodeType:'port', historicalStatus:'documented'}
],

arcVisible:false,
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
nodeType:'port',
historicalStatus:'documented',
transport:'sailing',
voyageId:'return_voyage_1851',  
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
