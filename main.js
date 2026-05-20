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
        // キャッシュを無視して最新のデータを取得
        const response = await fetch(DATA_URL, { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        // テキストとして読み込み
        const text = await response.text();
        const json = JSON.parse(text);
        
        globalData = json.events;

        // 地球儀の土台を作成
        const container = document.getElementById('globeViz');
        if (!container) return;
        
        // renderGlobe.js からインポートした関数を使用
        globe = createGlobe(container);

        // 初期表示
        update(1830);

        // スライダー操作イベントの登録
        const slider = document.getElementById('time-slider');
        if (slider) {
            slider.addEventListener('input', (e) => {
                update(parseInt(e.target.value));
            });
        }

    } catch(error) {
        console.error('History OS Initialization Failed:', error);
        const log = document.getElementById('event-log');
        if (log) log.innerText = "Error: " + error.message;
    }
}

/**
 * 年代更新処理
 */
function update(year) {
    const yearDisplay = document.getElementById('year-display');
    if (yearDisplay) yearDisplay.innerText = year;
    
    // 状態計算と描画
    const state = generateWorldState(globalData, year);
    renderWorld(globe, state);
}

// OS起動！
init();
