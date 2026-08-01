// History OS — Aikido History OS (independent instance)
// globe.gl を用いる。2026-07 更新：
//  - 配色を「植芝盛平＝青 / ワールドイベント＝アンバー(金) / 道場設立＝ティール」に刷新。
//  - ワールドイベント（特に戦争）クリック時、参照地域を薄い領域として表示する
//    ポリゴンレイヤーを追加（現在の国境ベース＝大まかな範囲。将来は当時の版図に差し替え想定）。

import Globe
  from 'https://cdn.jsdelivr.net/npm/globe.gl/+esm';

export const BLUE  = '#658CFF'; // 植芝盛平（人物）
export const AMBER = '#e5a93c'; // ワールドイベント
export const TEAL  = '#57c9c0'; // 道場設立(A)
const NETWORK = 'rgba(150,182,255,0.92)'; // 現在の加盟分布（強調）

const POINT_COLOR = {
  life:         BLUE,
  dojoFound:    TEAL,
  firstContact: AMBER,
  dojo:         NETWORK,
};

export function createGlobe(container) {
  const globe = Globe()(container)
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
    .backgroundColor('#060912')
    .showAtmosphere(true)
    .atmosphereColor(BLUE)
    .atmosphereAltitude(0.18)
    // 領域ハイライト（ポリゴン）
    .polygonCapColor(d => d.__cap || 'rgba(232,176,66,0.34)')
    .polygonSideColor(d => d.__side || 'rgba(232,176,66,0.14)')
    .polygonStrokeColor(d => d.__stroke || 'rgba(245,200,96,0.95)')
    .polygonAltitude(0.012)
    .polygonsTransitionDuration(500);

  // 初期表示は日本を中央に置く
  globe.pointOfView({ lat: 36, lng: 138, altitude: 2.5 }, 0);

  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.3;

  // 地球への操作（ドラッグ／クリック）中は自転を数秒止め、点を狙いやすくする
  globe.controls().addEventListener('start', () => pauseRotation(globe));
  globe.onGlobeClick(() => pauseRotation(globe));

  return globe;
}

// 自転を一時停止し、一定時間後に再開する（共通ヘルパ）
export function pauseRotation(globe, ms = 6000) {
  globe.controls().autoRotate = false;
  clearTimeout(window.__aikidoRotateTimer);
  window.__aikidoRotateTimer = setTimeout(() => {
    globe.controls().autoRotate = true;
  }, ms);
}

// state: { points:[...{lat,lng,id,kind,label}], selectedId }
export function renderState(globe, state, onPointClick) {
  const points = state.points || [];
  const selectedId = state.selectedId || null;

  globe
    .pointsData(points)
    .pointLat(d => d.lat)
    .pointLng(d => d.lng)
    .pointColor(d => (d.id === selectedId ? '#ffffff' : (POINT_COLOR[d.kind] || BLUE)))
    .pointAltitude(d => {
      if (d.kind === 'life') return 0.028;
      if (d.kind === 'dojoFound') return 0.020;
      if (d.kind === 'firstContact') return 0.016;
      return 0.012; // network（強調）
    })
    .pointRadius(d => {
      if (d.id === selectedId) return 0.40;
      if (d.kind === 'life') return 0.32;
      if (d.kind === 'dojoFound') return 0.26;
      if (d.kind === 'firstContact') return 0.22;
      return 0.22; // network（強調：クリックもしやすく）
    })
    .pointLabel(d => d.label || '')
    .onPointClick(d => { if (onPointClick) onPointClick(d); });

  const selected = points.find(p => p.id === selectedId);
  const ringColor =
    selected && selected.kind === 'world' ? AMBER
    : selected && selected.kind === 'firstContact' ? AMBER
    : selected && selected.kind === 'dojoFound' ? TEAL
    : BLUE;
  const rc = hexToRgb(ringColor);
  globe
    .ringsData(selected ? [selected] : [])
    .ringLat(d => d.lat)
    .ringLng(d => d.lng)
    .ringColor(() => (t => `rgba(${rc.r},${rc.g},${rc.b},${1 - t})`))
    .ringMaxRadius(4)
    .ringPropagationSpeed(2)
    .ringRepeatPeriod(1200);
}

export function flyTo(globe, point, altitude = 1.5) {
  globe.pointOfView({ lat: point.lat, lng: point.lng, altitude }, 1200);
  pauseRotation(globe);
}

// ── 領域ハイライト ─────────────────────────────────────────
// countries.geojson を一度だけ読み込み、name → feature の索引を作る。
export async function loadCountries(globe) {
  if (globe.__countryIndex) return globe.__countryIndex;
  try {
    const res = await fetch('../data/geo/countries.geojson');
    const geo = await res.json();
    const index = new Map();
    (geo.features || []).forEach(f => {
      const name = f.properties && f.properties.name;
      if (name) index.set(name, f);
    });
    globe.__countryIndex = index;
    return index;
  } catch (e) {
    console.warn('countries.geojson 読み込み失敗:', e);
    globe.__countryIndex = new Map();
    return globe.__countryIndex;
  }
}

// names: geojson "name" の配列。color系はアンバー既定。
export async function highlightRegions(globe, names, opts = {}) {
  const index = await loadCountries(globe);
  const cap    = opts.cap    || 'rgba(232,176,66,0.34)';
  const side   = opts.side   || 'rgba(232,176,66,0.14)';
  const stroke = opts.stroke || 'rgba(245,200,96,0.95)';
  const feats = (names || [])
    .map(n => index.get(n))
    .filter(Boolean)
    .map(f => ({ ...f, __cap: cap, __side: side, __stroke: stroke }));
  globe.polygonsData(feats);
}

export function clearRegions(globe) {
  globe.polygonsData([]);
}

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
