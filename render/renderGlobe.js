// 読み込み方法を「名前付きインポート」ではなく「すべてをまとめて読み込む」形式に変更します
import * as GlobeModule from 'globe.gl';

// 読み込み先が GlobeModule.default にある場合と、GlobeModule 自体にある場合の両方に対応します
const Globe = GlobeModule.default || GlobeModule;

export function createGlobe(container) {
    return Globe(container)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .backgroundColor('rgba(0,0,0,0)')
        .atmosphereColor('#46dfff')
        .atmosphereAltitude(0.14);
}

export function renderWorld(globe, state) {
    console.log("Current Rendering State:", state);
}
