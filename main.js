import {
  generateWorldState
}
from './engine/historyEngine.js';

import {
  createGlobe,
  renderWorld
}
from './render/renderGlobe.js';


// =====================================
// DATA SOURCE
// 後から自由に変更可能
// =====================================

const DATA_URL =
  './data/data.json';


// =====================================
// INITIAL YEAR
// =====================================

const INITIAL_YEAR = 1854;


// =====================================
// APP INITIALIZE
// =====================================

async function init() {

  try {

    // JSONロード
    const response =
      await fetch(DATA_URL);

    const data =
      await response.json();

    // Globe生成
    const container =
      document.getElementById('globeViz');

    const globe =
      createGlobe(container);

    // World State生成
    const state =
      generateWorldState(
        data,
        INITIAL_YEAR
      );

    // 描画
    renderWorld(globe, state);

    console.log(
      'History OS Initialized',
      state
    );

  } catch(error) {

    console.error(
      'Failed to load history data:',
      error
    );

  }

}

init();
