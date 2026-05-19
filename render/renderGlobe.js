import { generateWorldState } from './engine/historyEngine.js';
import { createGlobe, renderWorld } from './render/renderGlobe.js';

const DATA_URL = './data/data.json';
let globalData = null;
let globe = null;

async function init() {
    try {
        const response = await fetch(DATA_URL);
        globalData = await response.json();

        const container = document.getElementById('globeViz');
        globe = createGlobe(container);

        // 初期表示 (1830年から開始)
        update(1830);

        // スライダー操作イベントの登録
        const slider = document.getElementById('time-slider');
        slider.addEventListener('input', (e) => {
            const year = parseInt(e.target.value);
            update(year);
        });

    } catch(error) {
        console.error('History OS Initialization Failed:', error);
    }
}

function update(year) {
    // UIの年表示を更新
    document.getElementById('year-display').innerText = year;
    
    // エンジンで計算
    const state = generateWorldState(globalData, year);
    
    // 描画実行
    renderWorld(globe, state);
}

init();
