export const events = [

{
id:'manjiro_birth',

type:'person',

title:'中浜万次郎 誕生',

year:'1827',

description:
'土佐国中浜村に生まれる。',

lat:32.78,
lng:132.95,

placeName:'Cape Ashizuri',

lineColor:'#66e0ff',

relatedEvents:[
'manjiro_shipwreck'
]
},

{
id:'manjiro_shipwreck',

type:'person',

title:'漂流・鳥島',

year:'1841',

description:
'漂流し鳥島へ漂着。人生最大の転換点。',

lat:30.48,
lng:140.30,

placeName:'Torishima',

lineColor:'#66e0ff',

relatedEvents:[
'manjiro_america'
]
},

{
id:'manjiro_america',

type:'person',

title:'アメリカ渡航',

year:'1843',

description:
'航海術・英語・民主主義思想を学ぶ。',

lat:41.63,
lng:-70.93,

placeName:'New Bedford',

lineColor:'#66e0ff',

relatedEvents:[
'manjiro_return'
]
},

{
id:'manjiro_return',

type:'person',

title:'日本帰国',

year:'1851',

description:
'帰国後、幕末日本へ海外知識を伝える。',

lat:26.21,
lng:127.68,

placeName:'Naha',

lineColor:'#66e0ff',

relatedEvents:[
'kaikoku'
]
},

{
id:'kaikoku',

type:'world',

title:'日本開国',

year:'1854',

description:
'日米和親条約締結。日本は鎖国を終える。',

color:'#ffd95e',

lat:35.68,
lng:139.76,

placeName:'Tokyo',

relatedEvents:[]
},

{
id:'civil_war',

type:'world',

title:'南北戦争',

year:'1861',

description:
'アメリカ国家構造を再定義した内戦。',

color:'#ff5e5e',

lat:38.90,
lng:-77.03,

placeName:'Washington',

relatedEvents:[]
},

{
id:'meiji',

type:'world',

title:'明治維新',

year:'1868',

description:
'近代国家建設開始。',

color:'#66e0ff',

lat:35.68,
lng:139.76,

placeName:'Tokyo',

relatedEvents:[]
}

];
