// globe.gl はデフォルトで関数としてエクスポートされています
import Globe from 'globe.gl';

export function createGlobe(container) {
    // Globe() を実行する形で初期化します
    const globe = Globe()(container)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .backgroundColor('rgba(0,0,0,0)')
        .atmosphereColor('#46dfff')
        .atmosphereAltitude(0.14);
    
    return globe;
}

export function renderWorld(globe, state) {
    if (!globe) return;
    console.log("Rendering state:", state);
}
