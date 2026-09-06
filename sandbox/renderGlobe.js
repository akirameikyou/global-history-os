import Globe from 'https://esm.sh/globe.gl';
import * as THREE from 'https://esm.sh/three';

import { events } from '../data/events.js';
import { loadGeoJsonLayer } from './geoJsonLayer.js';
import {
  setHistoryLayer,
  setBordersVisible,
  getCountryPolygons
} from './polygonLayerManager.js';

export let currentYear = 1850;
export let currentChapter = 'all';

const container = document.getElementById('globeViz');

export const world = Globe()(container)
  .globeImageUrl(
    'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
  )
  .backgroundColor('black')
  .width(window.innerWidth)
  .height(window.innerHeight);

loadGeoJsonLayer(world);

world.pointOfView({
  lat: 30,
  lng: 160,
  altitude: 2.15
});

// Presentation Mode: auto rotation
const controls = world.controls();

controls.autoRotate = true;
controls.autoRotateSpeed = 0.35;

let autoRotateResumeTimer = null;

controls.addEventListener('start', () => {
  controls.autoRotate = false;

  clearTimeout(autoRotateResumeTimer);
});

controls.addEventListener('end', () => {
  clearTimeout(autoRotateResumeTimer);

  autoRotateResumeTimer = setTimeout(() => {
    controls.autoRotate = true;
  }, 4200);
});

const camera = world.camera();
const labelEls = [];

export let bordersVisible = false;

export function toggleBorders() {
  bordersVisible = !bordersVisible;
  setBordersVisible(world, bordersVisible);
}

let gridVisible = false;

function buildGridLines() {
  const paths = [];

  for (let lat = -60; lat <= 60; lat += 15) {

    const points = [];

    for (let lng = -180; lng <= 180; lng += 5) {
      points.push([lat, lng]);
    }

    paths.push({
  points,
  color:
    lat === 0
      ? 'rgba(255,120,120,0.46)'
      : 'rgba(255,255,255,0.35)'
});
  }

  for (let lng = -180; lng <= 180; lng += 15) {

    const points = [];

    for (let lat = -80; lat <= 80; lat += 5) {
      points.push([lat, lng]);
    }

    paths.push({
      points,
      color:
        lng === 0
          ? 'rgba(102,224,255,0.42)'
          : 'rgba(255,255,255,0.25)'
    });
  }

  return paths;
}

export function toggleGrid() {

  gridVisible = !gridVisible;

  world
    .pathsData(
      gridVisible
        ? buildGridLines()
        : []
    )
    .pathPoints('points')
    .pathPointLat(point => point[0])
    .pathPointLng(point => point[1])
    .pathColor('color')
    .pathStroke(0.35)
  }

function isActive(event, year) {
  if (event.endYear) {
    return event.startYear <= year && year <= event.endYear;
  }
  return event.startYear <= year;
}

function clearLabels() {
  labelEls.forEach(l => l.el.remove());
  labelEls.length = 0;
}

export function createLabels(filtered) {
  clearLabels();

  const uniqueLabels = [];

  filtered.forEach(event => {
    if (!event.placeName) return;
    if (uniqueLabels.find(label => label.name === event.placeName)) return;

    uniqueLabels.push({
      name: event.placeName,
      lat: event.labelLat || event.lat,
      lng: event.labelLng || event.lng
    });
  });

  uniqueLabels.forEach(label => {
    const div = document.createElement('div');
    div.className = 'city-label';
    div.innerText = label.name;

    document.body.appendChild(div);

    labelEls.push({
      el: div,
      lat: label.lat,
      lng: label.lng
    });
  });
}

function showRoutePointCard(point) {
  let card = document.getElementById('route-point-card');

  if (!card) {
    card = document.createElement('div');
    card.id = 'route-point-card';

    card.style.position = 'fixed';
    card.style.left = '50%';
    card.style.bottom = '90px';
    card.style.transform = 'translateX(-50%)';
    card.style.width = '320px';
    card.style.padding = '14px 16px';
    card.style.background = 'rgba(5, 12, 22, 0.88)';
    card.style.border = '1px solid rgba(102, 224, 255, 0.65)';

    // 角丸を少し弱める
    card.style.borderRadius = '6px';

    card.style.color = '#ffffff';
    card.style.fontFamily = 'sans-serif';
    card.style.zIndex = '30';
    card.style.boxShadow = '0 0 18px rgba(102, 224, 255, 0.35)';

    document.body.appendChild(card);
  }

  card.style.display = 'block';

  card.innerHTML = `
    <button
      id="route-point-card-close"
      style="
        position:absolute;
        top:8px;
        right:10px;
        background:transparent;
        border:none;
        color:#d8e8ff;
        font-size:18px;
        cursor:pointer;
        line-height:1;
      "
    >
      ×
    </button>

    <div style="font-size:12px; color:#66e0ff; letter-spacing:0.08em; padding-right:24px;">
      ROUTE POINT
    </div>

    <div style="font-size:20px; margin-top:4px; padding-right:24px;">
      ${point.name}
    </div>

    <div style="font-size:13px; color:#ffd95e; margin-top:4px;">
      ${point.year}
    </div>

    <div style="font-size:14px; line-height:1.6; margin-top:10px;">
      ${point.title || ''}
    </div>

    <div style="font-size:13px; line-height:1.7; margin-top:8px; color:#d8e8ff; white-space:pre-line;">
  ${point.cardText || point.description || ''}
</div>
  `;

  const closeButton = document.getElementById('route-point-card-close');

  closeButton.addEventListener('click', () => {
    card.style.display = 'none';
    clearLabels();
  });
}

function getNodeSize(event) {
  if (event.historicalStatus === 'control') return 0.08;

  if (event.nodeType === 'port') return 0.30;
  if (event.nodeType === 'transportChange') return 0.18;
  if (event.nodeType === 'voyagePoint') return 0.20;
  if (event.nodeType === 'thought') return 0.22;
  if (event.nodeType === 'document') return 0.22;

  return 0.24;
}
function buildRoutePoints(routeHistory) {
  const points = [];
  const uniquePoints = [];

  routeHistory.forEach(event => {
    // Chapter選択時は、その章で使う地点ポイントのみ表示（ALLでは全地点表示）。
    // これにより地点クリック時のカードも、その章のイベント（例：KANRIN選択中の
    // San Francisco＝1860年咸臨丸）が優先される。
    if (!isForeground(event)) return;
    if (!event.placeName) return;
    // 識別単位は placeName 単独ではなく chapterId + placeName。
    // 同じ地名でも章が異なれば別の地点カードとして扱う（例：San Francisco が
    // 1850 gold_rush / 1860 kanrin / 1870 europe_1870 でそれぞれ正しいカードを示す）。
    // ALL表示時も章別に区別され、先頭イベント（1850）へ固定されない。
    const pointKey = (event.chapterId || '') + '|' + event.placeName;
    if (uniquePoints.find(p => p.key === pointKey)) return;

    uniquePoints.push({
  key: pointKey,
  name: event.placeName,
  title: event.title,
  description: event.description,
  cardText: event.cardText,
  year: event.year || event.startYear,
  lat: event.lat,
  lng: event.lng,
  color: event.color || '#66e0ff',
  size: getNodeSize(event)
});
  });

  uniquePoints.forEach(point => points.push(point));

  world
    .pointsData(points)
    .pointLat('lat')
    .pointLng('lng')
    .pointColor('color')
    .pointRadius('size')
    .pointAltitude(0.012)
    .pointResolution(24)
    .onPointClick(point => {
      createLabels([
        {
          placeName: point.name,
          lat: point.lat,
          lng: point.lng
        }
      ]);

      showRoutePointCard(point);
    });
}

// ── 史料航路の描き分けスタイル（区間の来歴＝segment status 別）──────────
// documented    … 本文・日誌で確認できる区間 ＝ 明瞭な実線
// source_traced … 掲載史料の航海図から航跡を復元した区間 ＝ 通常明度の細い短破線
// estimated     … 資料の空白を一般的航路等から推定した区間 ＝ 低明度の細い破線
// default       … 状態未指定（既存航路の見た目を維持）
// link          … relatedEvents の意味リンク（既存の見た目を維持）
// control       … 描画制御のみ ＝ その区間は描かない（下の buildArcs で除外）
const ARC_STYLE = {
  documented:    { alpha: 0.98, stroke: 0.12,  dash: 0.95, gap: 0.03 },
  source_traced: { alpha: 0.82, stroke: 0.055, dash: 0.30, gap: 0.10 },
  estimated:     { alpha: 0.60, stroke: 0.06,  dash: 0.18, gap: 0.20 },
  default:       { alpha: 0.90, stroke: 0.08,  dash: 0.55, gap: 0.18 },
  link:          { alpha: 0.85, stroke: 0.08,  dash: 0.55, gap: 0.18 },
};
function arcStyleFor(status) { return ARC_STYLE[status] || ARC_STYLE.default; }
function hexToRgba(hex, alpha) {
  const h = (hex || '#66e0ff').replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}
// 区間の状態：point.segmentStatusToNext ＞ event.defaultSegmentStatus ＞ 'default'
function segmentStatus(startPoint, event) {
  return startPoint.segmentStatusToNext || event.defaultSegmentStatus || 'default';
}

function buildArcs(filtered) {
  const arcs = [];

  filtered.forEach(event => {
    if (event.relatedEvents && event.arcVisible !== false) {
      event.relatedEvents.forEach(targetId => {
        const target = filtered.find(e => e.id === targetId);
        if (!target) return;

        const dx = event.lng - target.lng;
        const dy = event.lat - target.lat;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let altitude = 0.05;
        if (distance > 120) altitude = 0.24;
        else if (distance > 40) altitude = 0.14;

        arcs.push({
          startLat: event.lat,
          startLng: event.lng,
          endLat: target.lat,
          endLng: target.lng,
          baseColor: event.lineColor || '#66e0ff',
          altitude,
          status: 'link',
          fg: isForeground(event)
        });
      });
    }

    if (event.routeType === 'voyage' && event.routePoints) {
      for (let i = 0; i < event.routePoints.length - 1; i++) {
        const start = event.routePoints[i];
        const end = event.routePoints[i + 1];

        const status = segmentStatus(start, event);
        if (status === 'control') continue; // control は非表示

        arcs.push({
          startLat: start.lat,
          startLng: start.lng,
          endLat: end.lat,
          endLng: end.lng,
          baseColor: event.lineColor || '#66e0ff',
          altitude: 0.03,
          transport: start.transport || event.transport || 'sailing',
          status,
          fg: isForeground(event)
        });
      }
      return;
    }
  });

  // 背景（他章）の航路は低明度・細線化して前景を読みやすくする
  const BG_ALPHA = 0.12, BG_STROKE = 0.5;
  world
    .arcsData(arcs)
    .arcColor(d => hexToRgba(d.baseColor, arcStyleFor(d.status).alpha * (d.fg === false ? BG_ALPHA : 1)))
    .arcAltitude('altitude')
    .arcStroke(d => arcStyleFor(d.status).stroke * (d.fg === false ? BG_STROKE : 1))
    .arcDashLength(d => arcStyleFor(d.status).dash)
    .arcDashGap(d => arcStyleFor(d.status).gap)
    .arcDashAnimateTime(4200);
}

function buildRings(filtered) {
  const rings = [];

  filtered.forEach(event => {
    if (event.id === 'kaikoku') {
      rings.push({
        lat: 35.68,
        lng: 139.76,
        color: '#ffd95e',
        maxR: 8
      });
    }

  if (event.id === 'opium_war') {
      rings.push({
        lat: 22.3,
        lng: 114.1,
        color: '#ff5e5e',
        maxR: 7
      });
    }

  if (event.id === 'mexican_american_war') {
  rings.push({
    lat: 29.42,
    lng: -98.49,
    color: '#ff5e5e',
    maxR: 10
  });
}
    
    if (event.id === 'civil_war') {
      rings.push({
        lat: 38.0,
        lng: -78.5,
        color: '#ff5e5e',
        maxR: 14
      });
    }
  });

  world
    .ringsData(rings)
    .ringColor('color')
    .ringMaxRadius('maxR')
    .ringPropagationSpeed(1.8)
    .ringRepeatPeriod(1400);
}

function buildAreas(filtered) {
  const areas = [];

  filtered.forEach(event => {
    if (event.geoCountry) {
      const countryAreas = getCountryPolygons(
        event.geoCountry,
        {
          color:
            event.areaColor ||
            event.color ||
            'rgba(255,217,94,0.24)',

          stroke:
            event.strokeColor ||
            event.color ||
            'rgba(255,217,94,0.75)'
        }
      );

      countryAreas.forEach(area => {
        areas.push(area);
      });

      return;
    }
  });

  setHistoryLayer(world, areas);
}

function updateLabels() {
  labelEls.forEach(label => {
    const pos = world.getCoords(label.lat, label.lng, 0.02);

    const cameraDir = camera.position.clone().normalize();
    const pointDir = new THREE.Vector3(pos.x, pos.y, pos.z).normalize();

    const dot = cameraDir.dot(pointDir);

    if (dot < 0.12) {
      label.el.style.display = 'none';
      return;
    }

    const screen = world.getScreenCoords(label.lat, label.lng, 0.02);

    if (!screen) {
      label.el.style.display = 'none';
      return;
    }

    label.el.style.display = 'block';
    label.el.style.left = `${screen.x}px`;
    label.el.style.top = `${screen.y}px`;
  });

  requestAnimationFrame(updateLabels);
}

export function setRouteChapter(chapterId) {
  currentChapter = chapterId;
  renderYear(currentYear);
}

// CHAPTER選択時の前景/背景判定。
// 'all'は全て前景。特定章選択時は、その章のイベントのみ前景、他は背景(低明度)。
function isForeground(event) {
  if (currentChapter === 'all') return true;
  return event.chapterId === currentChapter;
}

export function renderYear(year) {
  currentYear = year;

  const filtered = events.filter(e => isActive(e, year));

  // 航路は全て累積表示（人生全体の蓄積を残す）。章選択時の前景/背景は
  // buildArcs / buildRoutePoints 側で isForeground により低明度化する。
  const routeHistory = events.filter(e =>
  e.type === 'person' &&
  e.startYear <= year
);
  
  clearLabels();
  
  buildRoutePoints(routeHistory);
  buildArcs(routeHistory);
  buildRings(filtered);
  buildAreas(filtered);
}

renderYear(currentYear);
updateLabels();

window.addEventListener('resize', () => {
  world
    .width(window.innerWidth)
    .height(window.innerHeight);
});
