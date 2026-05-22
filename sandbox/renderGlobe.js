import Globe
from 'https://esm.sh/globe.gl';

import * as THREE
from 'https://esm.sh/three';

import { events }
from '../data/events.js';

export let currentYear = 1850;

const container =
document.getElementById(
'globeViz'
);

export const world = Globe()(container)

.globeImageUrl(
'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
)

.backgroundColor('black');

world.pointOfView({

lat:30,
lng:140,
altitude:2.2

});

const camera =
world.camera();

const labelEls = [];

function clearLabels(){

labelEls.forEach(
l=>l.el.remove()
);

labelEls.length = 0;

}

function createLabels(filtered){

clearLabels();

filtered.forEach(event=>{

const div =
document.createElement('div');

div.className =
'city-label';

div.innerText =
event.placeName;

document.body.appendChild(div);

labelEls.push({

el:div,

lat:event.lat,
lng:event.lng

});

});

}

function updateLabels(){

labelEls.forEach(label=>{

const pos =
world.getCoords(

label.lat,
label.lng,
0.02

);

const cameraDir =
camera.position.clone().normalize();

const pointDir =
new THREE.Vector3(

pos.x,
pos.y,
pos.z

).normalize();

const dot =
cameraDir.dot(pointDir);

if(dot < 0.12){

label.el.style.display =
'none';

return;

}

const screen =
world.getScreenCoords(

label.lat,
label.lng,
0.02

);

if(!screen){

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

function buildArcs(filtered){

const arcs = [];

filtered.forEach(event=>{

if(!event.relatedEvents) return;

event.relatedEvents.forEach(targetId=>{

const target =
filtered.find(
e=>e.id === targetId
);

if(!target) return;

const dx =
event.lng - target.lng;

const dy =
event.lat - target.lat;

const distance =
Math.sqrt(dx*dx + dy*dy);

let altitude = 0.05;

if(distance > 120)
altitude = 0.24;

else if(distance > 40)
altitude = 0.14;

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

.arcStroke(0.08)

.arcDashLength(1)

.arcDashGap(0)

.arcDashAnimateTime(0);

}

export function renderYear(year){

currentYear = year;

const filtered =
events.filter(
e=>e.startYear <= year
);

createLabels(filtered);

buildArcs(filtered);

}

renderYear(currentYear);

updateLabels();

window.addEventListener(

'resize',

()=>{

world

.width(window.innerWidth)

.height(window.innerHeight);

}

);
