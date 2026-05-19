// render/renderGlobe.js

export function createGlobe(container) {
    // window.Globe とすることで読み込みエラーを防ぎます
    const globe = window.Globe()
        (container)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .atmosphereColor("#ffffff")
        .atmosphereAltitude(0.15);

    // 明るさを確保するためのライティング設定
    const scene = globe.scene();
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); 
    scene.add(ambientLight);

    return globe;
}

export function renderWorld(globe, state) {
    if (!state) return;

    // イベント（点）の描画
    globe.pointsData(state.visibleEvents || [])
        .pointLat('lat')
        .pointLng('lng')
        .pointColor(() => '#ff4b2b')
        .pointRadius(0.5);

    // 因果関係（線）の描画
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
