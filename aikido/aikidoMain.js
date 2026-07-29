// History OS — Aikido History OS (independent instance)
// soccer/soccerMain.js の配線方式を踏襲。データ/ロジックは aikidoMode.js 経由のみで触る。

import { getMode } from './aikidoMode.js';
import { createGlobe, renderState, flyTo } from './renderAikidoGlobe.js';
import { aikidoEvents } from '../data/aikido_events.js';

const globeViz  = document.getElementById('globeViz');
const listEl    = document.getElementById('worldEventList');
const slider    = document.getElementById('eraSlider');
const yearLabel = document.getElementById('yearLabel');
const markersEl = document.getElementById('yearMarkers');
const focusEl   = document.getElementById('focusPanel');

const globe = createGlobe(globeViz);
const mode = getMode();

let currentYear = mode.timeline.start;
let selectedId = null;

function renderGlobe() {
  const points = mode.pointsUpTo(currentYear);
  if (selectedId && !points.some(p => p.id === selectedId)) selectedId = null;
  renderState(globe, { points, selectedId }, onPointClick);
}

function renderList() {
  const items = mode.listItems();
  listEl.innerHTML = '';
  items.forEach(it => {
    const reached = it.year <= currentYear;
    const div = document.createElement('div');
    div.className = 'we-item' + (reached ? '' : ' dim') + (it.id === selectedId ? ' active' : '');
    div.innerHTML = `
      <div class="we-year">${it.raw.endYear ? it.year + '–' + it.raw.endYear : it.year}</div>
      <div class="we-title">${it.raw.title}</div>
      <div class="we-desc">${it.raw.description}</div>
    `;
    div.addEventListener('click', () => selectWorldEvent(it.raw));
    listEl.appendChild(div);
  });
}

function renderMarkers() {
  const { min, max } = mode.timeline;
  const span = max - min || 1;
  markersEl.innerHTML = '';
  [...new Set(mode.markerYears())].forEach(y => {
    const tick = document.createElement('div');
    tick.className = 'marker' + (y <= currentYear ? ' reached' : '');
    tick.style.left = ((y - min) / span * 100) + '%';
    tick.title = String(y);
    tick.addEventListener('click', () => {
      currentYear = y;
      slider.value = String(y);
      syncYear();
    });
    markersEl.appendChild(tick);
  });
}

function renderFocus(focus) {
  if (!focus) return;

  let html = `<div class="focus-kicker">${focus.kicker}</div>`;

  if (focus.state === 'overview') {
    html += `
      <div class="focus-portrait-wrap">
        <img class="focus-portrait" src="${focus.portrait}" alt="${focus.title}">
      </div>
      <div class="focus-title">${focus.title}</div>
      <div class="focus-sub">${focus.subtitle}</div>
      <div class="focus-body">${focus.body}</div>
      <div class="focus-chrono-title">CHRONOLOGY</div>
      <div class="focus-chrono" id="focusChrono"></div>
    `;
  } else {
    html += `
      <div class="focus-title">${focus.title}</div>
      <div class="focus-sub">${focus.subtitle}</div>
      <div class="focus-body">${focus.body}</div>
      <div class="focus-back" id="focusBack">← FOCUS / PERSON へ戻る</div>
    `;
  }

  focusEl.innerHTML = html;

  if (focus.state === 'overview') {
    const chronoEl = document.getElementById('focusChrono');
    focus.chronology.forEach(item => {
      const row = document.createElement('div');
      row.className = 'chrono-item' + (item.eventId ? '' : ' inert');
      row.innerHTML = `
        <div class="chrono-year">${item.year}</div>
        <div class="chrono-text">${item.text}</div>
      `;
      if (item.eventId) {
        row.addEventListener('click', () => {
          const point = aikidoEvents.find(e => e.id === item.eventId);
          if (point) selectLifeEvent(point);
        });
      }
      chronoEl.appendChild(row);
    });
  } else {
    document.getElementById('focusBack').addEventListener('click', () => {
      selectedId = null;
      renderGlobe();
      renderList();
      renderFocus(mode.overviewFocus());
    });
  }
}

function selectLifeEvent(point) {
  selectedId = point.id;
  const y = parseInt(String(point.year), 10);
  if (y > currentYear) {
    currentYear = y;
    slider.value = String(y);
    yearLabel.textContent = String(y);
  }
  flyTo(globe, point);
  renderGlobe();
  renderMarkers();
  renderFocus(mode.lifeFocus(point));
}

function selectWorldEvent(item) {
  selectedId = item.id;
  if (item.year > currentYear) {
    currentYear = item.year;
    slider.value = String(item.year);
    yearLabel.textContent = String(item.year);
  }
  flyTo(globe, item);
  renderGlobe();
  renderList();
  renderMarkers();
  renderFocus(mode.worldFocus(item));
}

function onPointClick(p) {
  if (p.kind === 'life') selectLifeEvent(p.raw);
  else if (p.kind === 'dojo') {
    selectedId = p.id;
    flyTo(globe, p);
    renderGlobe();
    renderFocus(mode.dojoFocus(p.raw));
  }
}

function syncYear() {
  yearLabel.textContent = String(currentYear);
  renderGlobe();
  renderList();
  renderMarkers();
}

slider.addEventListener('input', e => {
  currentYear = parseInt(e.target.value, 10);
  syncYear();
});

/* INIT */
slider.min = String(mode.timeline.min);
slider.max = String(mode.timeline.max);
slider.value = String(currentYear);
yearLabel.textContent = String(currentYear);
renderGlobe();
renderList();
renderMarkers();
renderFocus(mode.overviewFocus());
