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
description:'アメリカで航海術・英語・民主主義思想を学ぶ。',
lat:41.63,
lng:-70.93,
placeName:'New Bedford',
lineColor:'#66e0ff',
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
labelLat:32.95,
labelLng:128.95,
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
placeName:'Edo',
lineColor:'#66e0ff',
relatedEvents:['kaikoku']
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
relatedEvents:['civil_war']
},

{
id:'kaikoku',
type:'world',
startYear:1854,
endYear:1868,
title:'日本開国',
year:'1854',
description:'日米和親条約締結。日本は開国へ向かう。',
color:'#ffd95e',
lat:35.68,
lng:139.76,
placeName:'Tokyo',
geoCountry:'Japan',
areaColor:'rgba(255,217,94,0.24)',
strokeColor:'rgba(255,217,94,0.75)',
relatedEvents:[]
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
placeName:'Tokyo',
relatedEvents:[]
}

];
