import { createGlobe, renderWorld } from './render/renderGlobe.js';
import { generateWorldState } from './engine/historyEngine.js';

const DATA_URL = './data/data.json';

async function init() {
    try {
        const response = await fetch(DATA_URL, { cache: "no-store" });
        const json = await response.json();
        const container = document.getElementById('globeViz');
        const globe = createGlobe(container);
        
        const slider = document.getElementById('time-slider');
        slider.addEventListener('input', (e) => {
            const year = e.target.value;
            document.getElementById('year-display').innerText = year;
            const state = generateWorldState(json.events, year);
            renderWorld(globe, state);
        });

        const initialState = generateWorldState(json.events, 1830);
        renderWorld(globe, initialState);
    } catch(err) {
        console.error("Initialization Error:", err);
    }
}
init();
