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

/* =========================
RENDER
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

/* year */

yearLabel.innerHTML =
year;

/* left panel */

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

/* rotate pause */

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
