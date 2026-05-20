import Globe from 'https://cdn.jsdelivr.net/npm/globe.gl/+esm';

import * as THREE
from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

import { generateWorldState }
from "./engine/historyEngine.js";

import {
createGlobe,
renderState
}
from "./render/renderGlobe.js";

const DATA_URL =
"./data/data.json";

const response =
await fetch(DATA_URL,{
cache:'no-store'
});

const data =
await response.json();

const globe =
createGlobe(
document.getElementById("globeViz")
);

const slider =
document.getElementById("yearSlider");

const yearLabel =
document.getElementById("yearLabel");

const eventsContainer =
document.getElementById("events");

function update(){

const year =
parseInt(slider.value);

yearLabel.innerHTML =
year;

const state =
generateWorldState(
data,
year
);

renderState(
globe,
state
);

updateLabels(
globe,
state
);

eventsContainer.innerHTML =
"";

state.visibleEvents.forEach(event=>{

eventsContainer.innerHTML += `

<div class="event">

<div class="event-year">
${event.year}
</div>

<div class="event-title">
${event.title}
</div>

</div>

`;

});

}

slider.addEventListener(
"input",
update
);

update();
function updateLabels(
globe,
state
){

const layer =
document.getElementById(
'labelsLayer'
);

layer.innerHTML = '';

const labels = [];

state.visibleEvents.forEach(event=>{

const div =
document.createElement('div');

div.className =
'city-label';

div.innerHTML =
event.title;

layer.appendChild(div);

labels.push({

el:div,

lat:event.lat,
lng:event.lng

});

});

function animateLabels(){

labels.forEach(label=>{

const pos =
globe.getScreenCoords(
label.lat,
label.lng
);
const cam =
globe.camera().position;

const phi =
(90 - label.lat) * Math.PI / 180;

const theta =
(label.lng - 12) * Math.PI / 180;

const x =
Math.sin(phi) * Math.cos(theta);

const y =
Math.cos(phi);

const z =
-Math.sin(phi) * Math.sin(theta);

const camLen =
Math.sqrt(
cam.x * cam.x +
cam.y * cam.y +
cam.z * cam.z
);

const nx = cam.x / camLen;
const ny = cam.y / camLen;
const nz = cam.z / camLen;

const dot =
(x * nx) +
(y * ny) +
(z * nz);

if(dot > 0){

label.el.style.display =
'block';

}else{

label.el.style.display =
'none';

}
if(!pos) return;

label.el.style.left =
pos.x + 'px';

label.el.style.top =
pos.y + 'px';

});

requestAnimationFrame(
animateLabels
);

}

animateLabels();

}
