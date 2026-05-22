export const events = [

{

id:'manjiro_birth',

type:'person',

title:'ジョン万次郎 誕生',

placeName:'Cape Ashizuri',

year:1827,

lat:32.78,
lng:132.95,

importance:70,

description:
'土佐国中浜村に生まれる。後に日本とアメリカ文明を結ぶ象徴的人物となる。',

portrait:
'https://upload.wikimedia.org/wikipedia/commons/0/0b/Nakahama_Manjirō.jpg',

relatedEvents:[

'manjiro_shipwreck'

]

},

{

id:'manjiro_shipwreck',

type:'event',

title:'漂流・鳥島',

placeName:'Torishima',

year:1841,

lat:30.48,
lng:140.30,

importance:95,

description:
'漁中に遭難。無人島・鳥島へ漂着。万次郎の人生と日本史を変える転換点となる。',

portrait:
'https://upload.wikimedia.org/wikipedia/commons/0/0b/Nakahama_Manjirō.jpg',

relatedEvents:[

'manjiro_america',
'manjiro_return'

]

},

{

id:'manjiro_america',

type:'civilization_contact',

title:'アメリカ渡航',

placeName:'New Bedford',

year:1843,

lat:41.63,
lng:-70.93,

importance:100,

description:
'アメリカ本土へ渡航。英語、航海術、民主主義思想を学ぶ。',

portrait:
'https://upload.wikimedia.org/wikipedia/commons/0/0b/Nakahama_Manjirō.jpg',

relatedEvents:[

'manjiro_return'

]

},

{

id:'manjiro_return',

type:'event',

title:'日本帰国',

placeName:'Naha',

year:1851,

lat:26.21,
lng:127.68,

importance:98,

description:
'鎖国下の日本へ帰国。幕府へ海外知識を伝え、開国前夜の日本へ影響を与える。',

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

importance:100,

description:
'黒船来航後、日米和親条約締結。日本は長い鎖国体制を終える。',

portrait:
'https://upload.wikimedia.org/wikipedia/commons/6/6c/Commodore_Matthew_Calbraith_Perry.jpg',

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

importance:100,

description:
'近代国家建設開始。日本社会が封建体制から近代国家へ大転換する。',

portrait:
'https://upload.wikimedia.org/wikipedia/commons/2/2f/Emperor_Meiji.jpg',

relatedEvents:[]

}

];
