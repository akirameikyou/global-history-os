import { generateWorldState }
from "./engine/historyEngine.js";

import {
createGlobe,
renderState
}
from "./render/renderGlobe.js";

/* =========================
LOAD DATA
========================= */

const response =
await fetch(
"./data/data.json"
);

const data =
await response.json();

/* =========================
CREATE GLOBE
========================= */

const globe =
createGlobe(
document.getElementById(
"globeViz"
)
);

/* auto rotate */

globe.controls().autoRotate =
true;

globe.controls().autoRotateSpeed =
0.4;

/* =========================
UI
========================= */

const slider =
document.getElementById(
"eraSlider"
);

const yearLabel =
document.getElementById(
"yearLabel"
);

const eventsList =
document.getElementById(
"eventsList"
);

const labelsLayer =
document.getElementById(
"labelsLayer"
);

/* =========================
STATE
========================= */

let currentState = null;

let labels = [];

/* =========================
RENDER
========================= */

function renderApp(year){

/* state */

currentState =
generateWorldState(
data,
year
);

/* globe */

renderState(
globe,
currentState
);

/* year */

yearLabel.innerHTML =
year;

/* =========================
LEFT PANEL
========================= */

eventsList.innerHTML = '';

currentState.visibleEvents.forEach(
event=>{

const div =
document.createElement('div');

div.className =
'event-item';

div.innerHTML = `

<div class="event-year">
${event.year}
</div>

<div class="event-title">
${event.title}
</div>

`;

eventsList.appendChild(div);

}
);

/* =========================
LABELS
========================= */

updateLabels();

}

/* =========================
UPDATE LABELS
========================= */

function updateLabels(){

labelsLayer.innerHTML = '';

labels = [];

currentState.visibleEvents.forEach(
event=>{

const div =
document.createElement('div');

div.className =
'city-label';

div.innerHTML =
event.title;

labelsLayer.appendChild(div);

labels.push({

el:div,

lat:event.lat,

lng:event.lng

});

}
);

}

/* =========================
ANIMATE LABELS
========================= */

function animateLabels(){

labels.forEach(label=>{

const pos =
globe.getScreenCoords(
label.lat,
label.lng
);

if(!pos){

label.el.style.display =
'none';

return;

}

/* =========================
CAMERA CHECK
========================= */

const cam =
globe.camera().position;

/* lat lng → sphere */

const phi =
(90 - label.lat) *
Math.PI / 180;

const theta =
(label.lng) *
Math.PI / 180;

/* sphere normal */

const x =
Math.sin(phi) *
Math.cos(theta);

const y =
Math.cos(phi);

const z =
-Math.sin(phi) *
Math.sin(theta);

/* camera normalize */

const camLen =
Math.sqrt(

(cam.x * cam.x) +
(cam.y * cam.y) +
(cam.z * cam.z)

);

const nx =
cam.x / camLen;

const ny =
cam.y / camLen;

const nz =
cam.z / camLen;

/* dot */

const dot =

(x * nx) +
(y * ny) +
(z * nz);

/* =========================
FRONT ONLY
========================= */

if(dot < 0.18){

label.el.style.display =
'none';

return;

}

/* =========================
POSITION
========================= */

label.el.style.display =
'block';

/* optional offsets */

let offsetX = 0;
let offsetY = 0;

/* Japan side */

if(label.lng > 120){

offsetX = -20;

}

/* Hawaii side */

if(label.lng < -100){

offsetX = 30;

}

label.el.style.left =
(pos.x + offsetX) + 'px';

label.el.style.top =
(pos.y + offsetY) + 'px';

});

/* next frame */

requestAnimationFrame(
animateLabels
);

}

/* start loop */

animateLabels();

/* =========================
INITIAL
========================= */

renderApp(1841);

/* =========================
SLIDER
========================= */

slider.addEventListener(
"input",
e=>{

const year =
parseInt(
e.target.value
);

renderApp(year);

/* pause rotate */

globe.controls().autoRotate =
false;

clearTimeout(
window.rotateTimer
);

window.rotateTimer =
setTimeout(()=>{

globe.controls().autoRotate =
true;

},1500);

}
);
