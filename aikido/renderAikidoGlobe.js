// History OS — Aikido History OS (independent instance)
// render/renderGlobe.js の思想、および soccer/renderSoccerGlobe.js の実装形式を踏襲。
// globe.gl を用いる（sandbox/index.html の手動スクリーン座標計算とは異なり、
// このページは Three.js を単一箇所でのみ読み込むため、標準の
// pointsData/labelsData がそのまま使える）。

import Globe
  from 'https://cdn.jsdelivr.net/npm/globe.gl/+esm';

const ACCENT = '#a8d694';

export function createGlobe(container) {
  const globe = Globe()(container)
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
    .backgroundColor('#07110b')
    .showAtmosphere(true)
    .atmosphereColor(ACCENT)
    .atmosphereAltitude(0.18);

  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.3;

  return globe;
}

// state: { points: [...{lat,lng,id,kind,label}], selectedId }
// kind: 'life' (生涯拠点, 大きめ) | 'dojo' (世界道場分布, 小さめ・控えめ)
export function renderState(globe, state, onPointClick) {
  const points = state.points || [];
  const selectedId = state.selectedId || null;

  globe
    .pointsData(points)
    .pointLat(d => d.lat)
    .pointLng(d => d.lng)
    .pointColor(d => (d.id === selectedId ? '#ffffff' : ACCENT))
    .pointAltitude(d => (d.kind === 'life' ? 0.02 : 0.008))
    .pointRadius(d => {
      if (d.id === selectedId) return 0.32;
      return d.kind === 'life' ? 0.28 : 0.12;
    })
    .pointLabel(d => d.label || '')
    .onPointClick(d => { if (onPointClick) onPointClick(d); });

  const selected = points.find(p => p.id === selectedId);
  globe
    .ringsData(selected ? [selected] : [])
    .ringLat(d => d.lat)
    .ringLng(d => d.lng)
    .ringColor(() => (t => `rgba(168,214,148,${1 - t})`))
    .ringMaxRadius(4)
    .ringPropagationSpeed(2)
    .ringRepeatPeriod(1200);
}

export function flyTo(globe, point) {
  globe.controls().autoRotate = false;
  globe.pointOfView({ lat: point.lat, lng: point.lng, altitude: 1.5 }, 1200);
  clearTimeout(window.__aikidoRotateTimer);
  window.__aikidoRotateTimer = setTimeout(() => {
    globe.controls().autoRotate = true;
  }, 4000);
}
