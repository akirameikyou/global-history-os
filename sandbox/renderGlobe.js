import Globe
from 'https://esm.sh/globe.gl@2.32.0';

import { events }
from '../data/events.js';

export let currentYear = 1850;

const container =
document.getElementById('globeViz');

export const world = Globe()(container)

.globeImageUrl(
'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
)

.backgroundColor('black')

.width(window.innerWidth)

.height(window.innerHeight);

world.pointOfView({
lat:30,
lng:160,
altitude:2.15
});

const labelEls = [];

function clearLabels(){

labelEls.forEach(label=>{
label.el.remove();
});

labelEls.length = 0;

}

function createLabels(filtered){

clearLabels();

const uniqueLabels = [];

filtered.forEach(event=>{

if(
uniqueLabels.find(
label=>label.name===event.placeName
)
) return;

uniqueLabels.push({
name:event.placeName,
lat:event.lat,
lng:event.lng
});

});

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

}

function buildArcs(filtered){

const arcs = [];

filtered.forEach(event=>{

if(!event.relatedEvents) return;

event.relatedEvents.forEach(id=>{

const target =
filtered.find(e=>e.id===id);

if(!target) return;

const distance =
Math.sqrt(
Math.pow(event.lat-target.lat,2)
+
Math.pow(event.lng-target.lng,2)
);

let altitude = 0.05;

if(distance > 80){

altitude = 0.24;

}else if(distance > 40){

altitude = 0.14;

}

arcs.push({
startLat:event.lat,
startLng:event.lng,
endLat:target.lat,
endLng:target.lng,
color:event.lineColor || '#66e0ff',
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

}

function buildRings(filtered){

const rings = [];

filtered.forEach(event=>{

if(event.id === 'kaikoku'){

rings.push({
lat:35.68,
lng:139.76,
color:'#ffd95e',
maxR:8
});

}

if(event.id === 'civil_war'){

rings.push({
lat:38.90,
lng:-77.03,
color:'#ff5e5e',
maxR:13
});

}

});

world.ringsData(rings)

.ringColor('color')

.ringMaxRadius('maxR')

.ringPropagationSpeed(1.2)

.ringRepeatPeriod(1800);

}

function buildAreas(filtered){

const areas = [];

filtered.forEach(event=>{

if(!event.area) return;

areas.push({
type:'Feature',
properties:{
color:event.areaColor || 'rgba(255,255,255,0.18)'
},
geometry:{
type:'Polygon',
coordinates:[
event.area
]
}
});

});

world.polygonsData(areas)

.polygonCapColor(
d=>d.properties.color
)

.polygonSideColor(
d=>d.properties.color
)

.polygonStrokeColor(
()=> 'rgba(255,255,255,0.22)'
)

.polygonAltitude(0.012)

.polygonsTransitionDuration(500);

}

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

const len =
Math.sqrt(
(pos.x*pos.x)
+
(pos.y*pos.y)
+
(pos.z*pos.z)
);

const nx = pos.x / len;
const ny = pos.y / len;
const nz = pos.z / len;

const dot =
(nx * camPos.x)
+
(ny * camPos.y)
+
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

requestAnimationFrame(updateLabels);

}

export function renderYear(year){

currentYear = year;

const filtered =
events.filter(
event=>event.startYear <= year
);

createLabels(filtered);

buildArcs(filtered);

buildRings(filtered);

buildAreas(filtered);

}

renderYear(currentYear);

updateLabels();

window.addEventListener('resize',()=>{

world
.width(window.innerWidth)
.height(window.innerHeight);

});
