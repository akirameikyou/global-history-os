export const events = [

{

id:'manjiro_birth',

title:'中浜万次郎 誕生',

placeName:'Cape Ashizuri',

label_en:'John Manjiro',

placeType:'person',

year:1827,

lat:32.78,
lng:132.95,

importance:70,

lineColor:'#8affc1',

relatedEvents:[

'manjiro_shipwreck'

]

},

{

id:'manjiro_shipwreck',

title:'漂流・無人島',

placeName:'Torishima',

label_en:'Shipwreck',

placeType:'event',

year:1841,

lat:30.48,
lng:140.30,

importance:95,

lineColor:'#63f5ff',

relatedEvents:[

'manjiro_america',
'manjiro_return'

]

},

{

id:'manjiro_america',

title:'アメリカ渡航',

placeName:'America',

label_en:'America',

placeType:'civilization',

year:1843,

lat:41.63,
lng:-70.93,

importance:100,

lineColor:'#63d8ff',

relatedEvents:[

'manjiro_return'

]

},

{

id:'manjiro_return',

title:'日本帰国',

placeName:'Naha',

label_en:'Return',

placeType:'event',

year:1851,

lat:26.21,
lng:127.68,

importance:98,

lineColor:'#7dffcf',

relatedEvents:[

'kaikoku'

]

},

{

id:'kaikoku',

title:'日本開国',

placeName:'Japan',

label_en:'Japan',

placeType:'nation',

year:1854,

lat:35.68,
lng:139.76,

importance:100,

lineColor:'#b5ff6b',

relatedEvents:[

'meiji_restoration'

]

},

{

id:'meiji_restoration',

title:'明治維新',

placeName:'Tokyo',

label_en:'Tokyo',

placeType:'city',

year:1868,

lat:35.68,
lng:139.76,

importance:100,

lineColor:'#ffe66b',

relatedEvents:[]

}

];
