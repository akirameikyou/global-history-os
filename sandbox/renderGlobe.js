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
altitude:2.2

});

const arcs = [];

events.forEach(event=>{

event.relatedEvents.forEach(id=>{

const target =
events.find(
e=>e.id===id
);

if(!target) return;

arcs.push({

startLat:event.lat,
startLng:event.lng,

endLat:target.lat,
endLng:target.lng,

color:'#66e0ff'

});

});

});

world.arcsData(arcs)

.arcColor('color')

.arcStroke(0.05)

.arcDashLength(1)

.arcDashGap(0)

.arcDashAnimateTime(0)

.arcAltitude(0.18);

const labels = [];

events.forEach(event=>{

const exists =
labels.find(
l=>l.name===event.placeName
);

if(exists) return;

labels.push({

name:event.placeName,

lat:event.lat,
lng:event.lng

});

});

const labelEls = [];

labels.forEach(label=>{

const div =
document.createElement('div');

div.style.position =
'absolute';

div.style.color =
'white';

div.style.fontSize =
'12px';

div.style.fontWeight =
'500';

div.style.pointerEvents =
'none';

div.style.whiteSpace =
'nowrap';

div.style.transform =
'translate(-50%,-50%)';

div.style.textShadow =
'0 0 6px rgba(0,0,0,1)';

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

if(!screen){

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

if(dot < 0.18){

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
