import {
createGlobe,
renderScene
}
from "./renderGlobe.js";

const globe =
createGlobe(
document.getElementById(
'globeViz'
)
);

const events = [

{
title:'東京',
lat:35.68,
lng:139.69
},

{
title:'ハワイ',
lat:21.30,
lng:-157.85
}

];

renderScene(
globe,
events
);
