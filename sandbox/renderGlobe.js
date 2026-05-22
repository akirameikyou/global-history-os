import Globe
from 'https://esm.sh/globe.gl@2.32.0';

import { events }
from '../data/events.js';

export const world = Globe()(

document.getElementById(
'globeViz'
)

)

.globeImageUrl(
'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
)

.backgroundColor(
'black'
)

.width(window.innerWidth)

.height(window.innerHeight);

world.pointOfView({

lat:30,
lng:160,
altitude:2.15

});

const arcs = [];

events.forEach(event=>{

if(!event.relatedEvents) return;

event.relatedEvents.forEach(id=>{

const target =
events.find(
e=>e.id===id
);

if(!target) return;

const distance = Math.sqrt(

Math.pow(
event.lat-target.lat,
2
)

+

Math.pow(
event.lng-target.lng,
2
)

);

let altitude = 0.06;

if(distance > 80){

altitude = 0.24;

}else if(distance > 40){

altitude = 0.14;

}else{

altitude = 0.05;

}

arcs.push({

startLat:event.lat,
startLng:event.lng,

endLat:target.lat,
endLng:target.lng,

color:
event.lineColor
|| '#66e0ff',

altitude

});

});

});

world.arcsData(arcs)

.arcColor('color')

.arcAltitude('altitude')

.arcStroke(0.04)

.arcDashLength(1)

.arcDashGap(0)

.arcDashAnimateTime(0);

const uniqueLabels = [];

events.forEach(event=>{

const exists =
uniqueLabels.find(
e=>e.name===event.placeName
);

if(exists) return;

uniqueLabels.push({

name:event.placeName,

lat:event.lat,
lng:event.lng

});

});

const labelEls = [];

uniqueLabels.forEach(label=>{

const div =
document.createElement('div');

div.className =
'city-label';

div.innerText =
label.name;

document.body.appendChild(div);

labelEls.push({

el:div,

lat:label.lat,
lng:label.lng

});

});

function updateLabels(){

const camPos =

world.camera()
.position
.clone()
.normalize();

labelEls.forEach(label=>{

const screen =

world.getScreenCoords(

label.lat,
label.lng

);

if(

!screen
||

screen.x===undefined
||

screen.y===undefined

){

label.el.style.display =
'none';

return;

}

const pos =

world.getCoords(

label.lat,
label.lng,
0.02

);

const len = Math.sqrt(

(pos.x * pos.x) +

(pos.y * pos.y) +

(pos.z * pos.z)

);

const nx = pos.x / len;
const ny = pos.y / len;
const nz = pos.z / len;

const dot =

(nx * camPos.x) +

(ny * camPos.y) +

(nz * camPos.z);

if(dot < 0.22){

label.el.style.display =
'none';

return;

}

label.el.style.display =
'block';

label.el.style.left =
`${screen.x}px`;

label.el.style.top =
`${screen.y}px`;

});

requestAnimationFrame(
updateLabels
);

}

updateLabels();

window.addEventListener(

'resize',

()=>{

world

.width(window.innerWidth)

.height(window.innerHeight);

}

);
