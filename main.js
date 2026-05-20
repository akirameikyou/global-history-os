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

/* left panel */

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

/* labels */

updateLabels();

}

/* =========================
LABELS
========================= */

let labels = [];

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
ANIMATION LOOP
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

/* softer visibility */

if(
pos.x < -300 ||
pos.x > window.innerWidth + 300 ||
pos.y < -300 ||
pos.y > window.innerHeight + 300
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

requestAnimationFrame(
animateLabels
);

}

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
