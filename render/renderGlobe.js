import Globe from 'https://unpkg.com/globe.gl?module';

export function createGlobe(container) {
    // Globe() を呼び出してインスタンスを生成
    return Globe()(container)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .backgroundColor('rgba(0,0,0,0)')
        .atmosphereColor('#46dfff')
        .atmosphereAltitude(0.14);
}

export function renderWorld(globe, state) {
    if (!globe) return;
    console.log("Rendering data:", state);
}
