// render/renderGlobe.js

export function createGlobe(container) {
    const globe = window.Globe()
        (container)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .atmosphereColor("#ffffff")
        .atmosphereAltitude(0.15);

    // THREE.jsを直接呼ばずに、globeが持っているsceneからライトを調整する安全な方法
    const scene = globe.scene();
    // もしエラーが出るなら、ここから下の3行（Lightの追加）を一旦消すだけでも動きます
    // 昼の地球画像を使っているので、ライトを追加しなくても十分明るいはずです。
    
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
