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
placeName:'Cape Ashizuri',
lineColor:'#66e0ff',
relatedEvents:['manjiro_shipwreck']
},

{
id:'manjiro_shipwreck',
type:'person',
startYear:1841,
title:'漂流・鳥島',
year:'1841',
endYear:1841,
timelineType:'duration',
durationLabel:'鳥島143日サバイバル',
routeLabel:'TORISHIMA',  
description:'漂流し鳥島へ漂着。',
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
title:'ハワイ滞在',
year:'1841',
description:'救助後、ハワイへ渡り、太平洋世界と接続する。',
routeLabel:'HAWAII',
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
title:'アメリカ渡航',
year:'1843',
description:'航海術・英語・民主主義思想を学ぶ。',
routeLabel:'NEW BEDFORD',  
lat:41.63,
lng:-70.93,
placeName:'New Bedford',
lineColor:'#66e0ff',
relatedEvents:['manjiro_return']
},

{
id:'manjiro_return',
type:'person',
startYear:1851,
title:'日本帰国',
year:'1851',
description:'帰国後、海外知識を日本へ伝える。',
routeLabel:'RYUKYU',    
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
title:'長崎で取り調べ',
year:'1851',
description:'長崎で取り調べを受ける。',
routeLabel:'NAGASAKI',
lat:32.75,
lng:129.88,
labelLat:33.25,
labelLng:130.28,
placeName:'Nagasaki',
lineColor:'#66e0ff',
relatedEvents:['kaikoku']
},
  
{
id:'manjiro_america',
type:'person',
startYear:1843,
title:'アメリカ渡航',
year:'1843',
description:'航海術・英語・民主主義思想を学ぶ。',
routeLabel:'NEW BEDFORD',  
lat:41.63,
lng:-70.93,
placeName:'New Bedford',
lineColor:'#66e0ff',
relatedEvents:['manjiro_return']
},

{
id:'manjiro_return',
type:'person',
startYear:1851,
title:'日本帰国',
year:'1851',
description:'帰国後、海外知識を日本へ伝える。',
routeLabel:'RYUKYU',    
lat:26.21,
lng:127.68,
placeName:'Naha',
lineColor:'#66e0ff',
relatedEvents:['kaikoku']
},
{
id:'kaikoku',
type:'world',
startYear:1854,
endYear:1868,
title:'日本開国',
year:'1854',
description:'日米和親条約締結。',
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
