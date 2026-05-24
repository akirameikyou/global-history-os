export const geoLayers = {

japan_1854:{
type:'Feature',
properties:{
color:'rgba(255,217,94,0.24)'
},
geometry:{
type:'Polygon',
coordinates:[[
[129,31],
[132,34],
[136,35],
[140,41],
[145,43],
[146,39],
[143,35],
[139,33],
[135,31],
[131,30],
[129,31]
]]
}
},

usa_civil_war:{
type:'Feature',
properties:{
color:'rgba(255,94,94,0.22)'
},
geometry:{
type:'Polygon',
coordinates:[[
[-98,37],
[-92,37],
[-84,36],
[-76,34],
[-78,29],
[-86,27],
[-95,29],
[-102,32],
[-98,37]
]]
}
},

modern_borders:{
type:'FeatureCollection',
features:[

{
type:'Feature',
properties:{
stroke:'rgba(255,255,255,0.22)'
},
geometry:{
type:'Polygon',
coordinates:[[
[129,31],
[132,34],
[136,35],
[140,41],
[145,43]
]]
}
},

{
type:'Feature',
properties:{
stroke:'rgba(255,255,255,0.22)'
},
geometry:{
type:'Polygon',
coordinates:[[
[-102,32],
[-95,29],
[-76,34],
[-84,36]
]]
}
}

]
}

};
