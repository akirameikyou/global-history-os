import Globe from 'globe.gl';

export function createGlobe(container) {
    return Globe()(container)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .backgroundColor('rgba(0,0,0,0)')
        .atmosphereColor('#46dfff')
        .atmosphereAltitude(0.14);
}

export function renderWorld(globe, state) {
    // データポイントやラベルの描画処理をここに追加します
    console.log("Current Rendering State:", state);
}
