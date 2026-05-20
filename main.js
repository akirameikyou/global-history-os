import { createGlobe, renderWorld } from './render/renderGlobe.js';
import { generateWorldState } from './engine/historyEngine.js';

const DATA_URL = './data/data.json';

async function init() {
    try {
        const response = await fetch(DATA_URL, { cache: "no-store" });
        const json = await response.json();
        const globe = createGlobe(document.getElementById('globeViz'));
        
        const slider = document.getElementById('time-slider');
        slider.addEventListener('input', (e) => {
            const year = e.target.value;
            document.getElementById('year-display').innerText = year;
            const state = generateWorldState(json.events, year);
            renderWorld(globe, state);
        });

        // 初回起動
        const initialState = generateWorldState(json.events, 1830);
        renderWorld(globe, initialState);
    } catch(err) {
        console.error("OS Initialization Error:", err);
    }
}
init();
