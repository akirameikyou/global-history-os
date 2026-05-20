import Globe from 'globe.gl';

/**
 * 地球儀の土台を作成する
 */
export function createGlobe(container) {
    const globe = Globe()(container)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundColor('rgba(0,0,0,0)')
        .atmosphereColor('#46dfff')
        .atmosphereAltitude(0.14);

    return globe;
}

/**
 * 世界の状態を描画する
 */
export function renderWorld(globe, state) {
    if (!globe) return;

    // stateに基づいた描画ロジックをここに記述
    // 例: globe.labelsData(state.labels)...
    
    console.log("Rendering state:", state);
}
