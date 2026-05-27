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

const camera = world.camera();
const labelEls = [];

export let bordersVisible = false;

export function toggleBorders() {
  bordersVisible = !bordersVisible;
  setBordersVisible(world, bordersVisible);
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

function createLabels(filtered) {
  clearLabels();

  const uniqueLabels = [];

  filtered.forEach(event => {
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

function buildArcs(filtered) {
  const arcs = [];

  filtered.forEach(event => {
    if (!event.relatedEvents) return;

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
        color: event.lineColor || '#66e0ff',
        altitude
      });
    });
  });

  world
    .arcsData(arcs)
    .arcColor('color')
    .arcAltitude('altitude')
    .arcStroke(0.08)
    .arcDashLength(1)
    .arcDashGap(0)
    .arcDashAnimateTime(0);
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

    // 正式GeoJSON国家表示
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

export function renderYear(year) {
  currentYear = year;

  const filtered = events.filter(e => isActive(e, year));

  const routeHistory = events.filter(e =>
    e.type === 'person' &&
    e.startYear <= year
  );

  createLabels(filtered);
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
