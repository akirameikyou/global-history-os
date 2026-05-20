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
"./data/data.json",
{
cache:"no-store"
}
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
0.35;

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

/* =========================
INITIAL YEAR
========================= */

let currentYear = 1841;

/* =========================
RENDER APP
========================= */

function renderApp(year){

const state =
generateWorldState(
data,
year
);

/* globe */

renderState(
globe,
state
);

/* labels */

updateLabels(
globe,
state
);

/* year */

if(yearLabel){

yearLabel.innerHTML =
year;

}

/* events panel */

if(eventsList){

eventsList.innerHTML = '';

state.visibleEvents.forEach(
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

}

}

/* =========================
INITIAL RENDER
========================= */

renderApp(
currentYear
);

/* =========================
SLIDER
========================= */

if(slider){

slider.addEventListener(
"input",
e=>{

currentYear =
parseInt(
e.target.value
);

renderApp(
currentYear
);

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

}

/* =========================
LABELS
========================= */

let animationStarted =
false;

function updateLabels(
globe,
state
){

const layer =
document.getElementById(
'labelsLayer'
);

if(!layer) return;

/* clear */

layer.innerHTML = '';

const labels = [];

/* create */

state.visibleEvents.forEach(
event=>{

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

}
);

/* single animation loop */

if(animationStarted) return;

animationStarted = true;

function animate(){

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

/* softer bounds */

if(
pos.x < -200 ||
pos.x > window.innerWidth + 200 ||
pos.y < -200 ||
pos.y > window.innerHeight + 200
){

label.el.style.display =
'none';

return;

}

label.el.style.display =
'block';

label.el.style.left =
pos.x + 'px';

label.el.style.top =
pos.y + 'px';

});

/* next frame */

requestAnimationFrame(
animate
);

}

animate();

}
