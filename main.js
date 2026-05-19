import { generateWorldState } from './engine/historyEngine.js';
import { createGlobe, renderWorld } from './render/renderGlobe.js';


const DATA_URL = './data/data.json';

let globalData = null;
let globe = null;

/**
 * 初期化処理
 */
async function init() {
    try {
        // データの読み込み
        const response = await fetch(DATA_URL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const json = await response.json();
        globalData = json.events; // data.jsonの "events" 配列を取得

        // 地球儀の土台を作成
        const container = document.getElementById('globeViz');
        if (!container) return;
        
        globe = createGlobe(container);

        // 初期表示 (1830年)
        update(1830);

        // スライダー操作イベントの登録
        const slider = document.getElementById('time-slider');
        if (slider) {
            slider.addEventListener('input', (e) => {
                const year = parseInt(e.target.value);
                update(year);
            });
        }

    } catch(error) {
        console.error('History OS Initialization Failed:', error);
        const log = document.getElementById('event-log');
        if (log) log.innerText = "Error: " + error.message;
    }
}

/**
 * 年代が変わるたびに実行される更新処理
 */
function update(year) {
    // UIの年表示を更新
    const yearDisplay = document.getElementById('year-display');
    if (yearDisplay) yearDisplay.innerText = year;
    
    // エンジン（historyEngine.js）でその年の状態を計算
    const state = generateWorldState(globalData, year);
    
    // 描画（renderGlobe.js）を実行
    renderWorld(globe, state);
}

// OS起動！
init();
