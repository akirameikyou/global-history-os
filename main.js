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
