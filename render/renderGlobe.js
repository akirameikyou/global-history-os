// render/renderGlobe.js

export function createGlobe(container) {
    const globe = window.Globe()
        (container)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .atmosphereColor("#ffffff")
        .atmosphereAltitude(0.15);

    return globe;
}

export function renderWorld(globe, state) {
    if (!state) return;

    // 1. 点（イベント場所）の描画
    globe.pointsData(state.visibleEvents || [])
        .pointLat('lat')
        .pointLng('lng')
        .pointColor(() => '#ff4b2b')
        .pointRadius(0.6);

    // 2. ラベル（文字情報）の描画 ★ここを追加！
    globe.labelsData(state.visibleEvents || [])
        .labelLat('lat')
        .labelLng('lng')
        .labelText('title')     // data.json の "title" を表示
        .labelSize(1.5)         // 文字の大きさ
        .labelDotRadius(0)      // 文字の横の点は不要なので0に
        .labelColor(() => 'rgba(255, 255, 255, 0.9)') // 白文字
        .labelResolution(2);    // 文字をクッキリさせる

    // 3. 因果関係（線）の描画
    globe.arcsData(state.arcs || [])
        .arcStartLat('startLat')
        .arcStartLng('startLng')
        .arcEndLat('endLat')
        .arcEndLng('endLng')
        .arcColor(() => '#ffb400')
        .arcDashLength(0.4)
        .arcDashGap(0.2)
        .arcDashAnimateTime(1500);
}
