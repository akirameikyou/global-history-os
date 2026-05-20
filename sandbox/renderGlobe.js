import Globe
from 'https://cdn.jsdelivr.net/npm/globe.gl/+esm';

export function createGlobe(container){

const globe = Globe()(container)

.globeImageUrl(
'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
)

.bumpImageUrl(
'https://unpkg.com/three-globe/example/img/earth-topology.png'
)

.backgroundColor('#000')

.showAtmosphere(true)

.atmosphereColor('#46dfff')

.atmosphereAltitude(0.15);

return globe;

}

export function renderScene(
globe,
events
){

globe

.pointsData(events)

.pointLat(d=>d.lat)

.pointLng(d=>d.lng)

.pointColor(()=>'#46dfff')

.pointAltitude(0.02)

.pointRadius(0.12);

createLabels(
globe,
events
);

}

/* =========================
DOM LABELS
========================= */

function createLabels(
globe,
events
){

const layer =
document.createElement('div');

layer.id = 'labelsLayer';

document.body.appendChild(layer);

events.forEach(event=>{

const el =
document.createElement('div');

el.className =
'city-label';

el.innerHTML =
event.title;

layer.appendChild(el);

event.el = el;

});

function animate(){

events.forEach(event=>{

const pos =
globe.getScreenCoords(
event.lat,
event.lng
);

if(!pos){

event.el.style.display =
'none';

return;

}

const camera =
globe.camera();

const camPos =
camera.position;

const camLength =
Math.sqrt(
camPos.x * camPos.x +
camPos.y * camPos.y +
camPos.z * camPos.z
);

const camX =
camPos.x / camLength;

const camY =
camPos.y / camLength;

const camZ =
camPos.z / camLength;

const lat =
event.lat * Math.PI / 180;

const lng =
-event.lng * Math.PI / 180;

const x =
Math.cos(lat) *
Math.cos(lng);

const y =
Math.sin(lat);

const z =
Math.cos(lat) *
Math.sin(lng);

const dot =
(x * camX) +
(y * camY) +
(z * camZ);

if(dot < 0.15){

event.el.style.display =
'none';

return;

}

event.el.style.display =
'block';

event.el.style.left =
pos.x + 'px';

event.el.style.top =
pos.y + 'px';

});

requestAnimationFrame(
animate
);

}

animate();

}
