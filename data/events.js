export const events = [

{

id:'manjiro_birth',

type:'person_event',

title:'ジョン万次郎 誕生',

placeName:'Cape Ashizuri',

year:1827,

lat:32.78,
lng:132.95,

description:
'土佐国中浜村に生まれる。',

portrait:
'https://upload.wikimedia.org/wikipedia/commons/0/0b/Nakahama_Manjirō.jpg',

relatedEvents:[

'manjiro_shipwreck'

]

},

{

id:'manjiro_shipwreck',

type:'person_event',

title:'漂流・鳥島',

placeName:'Torishima',

year:1841,

lat:30.48,
lng:140.30,

description:
'漂流し鳥島へ漂着。人生最大の転換点。',

portrait:
'https://upload.wikimedia.org/wikipedia/commons/0/0b/Nakahama_Manjirō.jpg',

relatedEvents:[

'manjiro_america'

]

},

{

id:'manjiro_america',

type:'person_event',

title:'アメリカ渡航',

placeName:'New Bedford',

year:1843,

lat:41.63,
lng:-70.93,

description:
'航海術・英語・民主主義思想を学ぶ。',

portrait:
'https://upload.wikimedia.org/wikipedia/commons/0/0b/Nakahama_Manjirō.jpg',

relatedEvents:[

'manjiro_return'

]

},

{

id:'manjiro_return',

type:'person_event',

title:'日本帰国',

placeName:'Naha',

year:1851,

lat:26.21,
lng:127.68,

description:
'帰国後、幕末日本へ海外知識を伝える。',

portrait:
'https://upload.wikimedia.org/wikipedia/commons/0/0b/Nakahama_Manjirō.jpg',

relatedEvents:[

'kaikoku'

]

},

{

id:'kaikoku',

type:'national_event',

title:'日本開国',

placeName:'Tokyo',

year:1854,

lat:35.68,
lng:139.76,

description:
'日米和親条約締結。日本は鎖国を終える。',

relatedEvents:[

'meiji_restoration'

]

},

{

id:'meiji_restoration',

type:'national_event',

title:'明治維新',

placeName:'Tokyo',

year:1868,

lat:35.68,
lng:139.76,

description:
'近代国家建設開始。',

relatedEvents:[]

}

];
