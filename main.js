import { generateWorldState }
from "./engine/historyEngine.js";

import {
createGlobe,
renderState
}
from "./render/renderGlobe.js";

/* =========================
DATA LOAD
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
GLOBE
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
INITIAL YEAR
========================= */

let currentYear = 1841;

/* =========================
INITIAL STATE
========================= */

let state =
generateWorldState(
data,
currentYear
);

renderState(
globe,
state
);

updateLabels(
globe,
state
);

/* =========================
YEAR LABEL
========================= */

const yearLabel =
document.getElementById(
"yearLabel"
);

if(yearLabel){

yearLabel.innerHTML =
currentYear;

}

/* =========================
SLIDER
========================= */

const slider =
document.getElementById(
"eraSlider"
);

if(slider){

slider.addEventListener(
"input",
e=>{

currentYear =
parseInt(e.target.value);

if(yearLabel){

yearLabel.innerHTML =
currentYear;

}

state =
generateWorldState(
data,
currentYear
);

renderState(
globe,
state
);

updateLabels(
globe,
state
);

/* rotate stop */

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

function updateLabels(
globe,
state
){

const layer =
document.getElementById(
'labelsLayer'
);

if(!layer) return;

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

if(
!pos ||
pos.x < 0 ||
pos.x > window.innerWidth ||
pos.y < 0 ||
pos.y > window.innerHeight
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

}
