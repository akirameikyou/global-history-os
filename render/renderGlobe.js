export function createGlobe(container) {
    const globe = Globe()
        (container)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png');

    return globe;
}

export function renderWorld(globe, state) {
    // イベント（点）の描画
    globe.pointsData(state.visibleEvents)
        .pointLat('lat')
        .pointLng('lng')
        .pointColor(d => d.category === 'politics' ? '#ff4444' : '#00ffcc')
        .pointLabel('title')
        .pointRadius(0.5);

    // 因果関係（弧）の描画
    globe.arcsData(state.arcs)
        .arcStartLat('startLat')
        .arcStartLng('startLng')
        .arcEndLat('endLat')
        .arcEndLng('endLng')
        .arcColor('color')
        .arcDashLength(0.4)
        .arcDashGap(0.2)
        .arcDashAnimateTime(2000)
        .arcAltitude('altitude')
        .arcLabel('title');
    
    // カメラ位置を最初のイベントへ
    if (state.visibleEvents.length > 0) {
        const first = state.visibleEvents[0];
        globe.pointOfView({ lat: first.lat, lng: first.lng, altitude: 2 }, 1000);
    }
}
