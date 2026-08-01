// History OS — Aikido History OS (independent instance)
// 2026-07 改修：
//  - クリック詳細は「右パネル差し替え」→「浮遊カード（項目の横に出現・× / ▶ で操作）」へ。
//  - 右パネルは常時 overview（人物＋年表）。年表は中央バー到達で 薄グレー→白。
//  - 世界史イベント（特に戦争）クリックで参照地域を薄く領域ハイライト。
//  - 年表・カード本文中の用語（起倒流 等）はクリック可能リンク→語釈カード。

import { getMode } from './aikidoMode.js';
import {
  createGlobe, renderState, flyTo,
  highlightRegions, clearRegions, loadCountries,
} from './renderAikidoGlobe.js';
import { aikidoEvents } from '../data/aikido_events.js';
import { aikidoGlossary } from '../data/aikido_person.js';

const globeViz  = document.getElementById('globeViz');
const listEl    = document.getElementById('worldEventList');
const slider    = document.getElementById('eraSlider');
const yearLabel = document.getElementById('yearLabel');
const markersEl = document.getElementById('yearMarkers');
const focusEl   = document.getElementById('focusPanel');
const cardLayer = document.getElementById('cardLayer');

const globe = createGlobe(globeViz);
const mode  = getMode();
loadCountries(globe); // 領域ハイライト用に先読み

let currentYear = mode.timeline.start;
let selectedId  = null;
let cardSeq     = 0;

// カード折りたたみ時にも種別が分かる短いタグ
const KIND_TAG = {
  life:         '人物',
  world:        'WORLD',
  dojoFound:    '道場設立',
  firstContact: '初到達',
  dojo:         '加盟分布',
  term:         '用語',
};

/* ── 用語リンク化 ───────────────────────────────── */
const glossaryKeys = Object.keys(aikidoGlossary).sort((a, b) => b.length - a.length);
const termRegex = glossaryKeys.length
  ? new RegExp('(' + glossaryKeys.map(escapeRegExp).join('|') + ')', 'g')
  : null;

// seen: Set を渡すと「初出のみ」リンク化（同じ語の2回目以降はプレーン表示）。
// 省略時はその呼び出し（テキスト）内での初出のみをリンク化する。
function linkifyTerms(text, seen) {
  const safe = escapeHtml(text).replace(/\n/g, '<br>');
  if (!termRegex) return safe;
  const set = seen || new Set();
  return safe.replace(termRegex, (m) => {
    if (set.has(m)) return m;
    set.add(m);
    return `<span class="term" data-term="${m}">${m}</span>`;
  });
}

/* ── 地球儀 ───────────────────────────────────── */
function renderGlobe() {
  const points = mode.pointsUpTo(currentYear);
  if (selectedId && !points.some(p => p.id === selectedId)) selectedId = null;
  renderState(globe, { points, selectedId }, onPointClick);
}

/* ── 左：世界史イベント一覧 ───────────────────────── */
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
      <div class="we-desc">${it.raw.brief || it.raw.description}</div>
    `;
    div.addEventListener('click', () => selectWorldEvent(it.raw, div));
    listEl.appendChild(div);
  });
}

/* ── 目盛り ───────────────────────────────────── */
function renderMarkers() {
  const { min, max } = mode.timeline;
  const span = max - min || 1;
  markersEl.innerHTML = '';
  [...new Set(mode.markerYears())].forEach(y => {
    const tick = document.createElement('div');
    tick.className = 'marker' + (y <= currentYear ? ' reached' : '');
    tick.style.left = ((y - min) / span * 100) + '%';
    tick.title = String(y);
    tick.addEventListener('click', () => { currentYear = y; slider.value = String(y); syncYear(); });
    markersEl.appendChild(tick);
  });
}

/* ── 右：FOCUS（常時 overview） ───────────────────── */
let chronoRows = [];
function renderFocusOverview() {
  const focus = mode.overviewFocus();
  // 右パネル全体（本文＋年表）で「初出のみ」色分けするため、seen を共有する
  const seen = new Set();
  focusEl.innerHTML = `
    <div class="focus-kicker">${focus.kicker}</div>
    <div class="focus-portrait-wrap"><img class="focus-portrait" src="${focus.portrait}" alt="${focus.title}"></div>
    <div class="focus-title">${focus.title}</div>
    <div class="focus-sub">${focus.subtitle}</div>
    <div class="focus-body">${linkifyTerms(focus.body, seen)}</div>
    <div class="focus-chrono-title">CHRONOLOGY</div>
    <div class="focus-chrono" id="focusChrono"></div>
  `;
  const chronoEl = document.getElementById('focusChrono');
  chronoRows = [];
  focus.chronology.forEach(item => {
    const row = document.createElement('div');
    row.className = 'chrono-item' + (item.eventId ? '' : ' inert');
    row.innerHTML = `
      <div class="chrono-year">${item.year}<span class="chrono-age">${item.age != null ? (typeof item.age === 'number' ? item.age + '歳' : item.age) : ''}</span></div>
      <div class="chrono-text">${linkifyTerms(item.text, seen)}</div>
    `;
    row.addEventListener('click', (e) => {
      if (e.target.classList.contains('term')) return; // 用語クリックは別処理
      if (item.eventId) {
        const point = aikidoEvents.find(ev => ev.id === item.eventId);
        if (point) selectLifeEvent(point, row);
      } else {
        openCard(mode.lifeCard({ title: `${item.year}`, year: item.year, placeName: '', description: item.text }), row);
      }
    });
    chronoEl.appendChild(row);
    chronoRows.push({ el: row, year: item.year });
  });
  bindTerms(focusEl);
  updateChronologyReached();
}

function updateChronologyReached() {
  chronoRows.forEach(r => {
    r.el.classList.toggle('dim', r.year > currentYear);
    r.el.classList.toggle('active', r.year <= currentYear);
  });
}

/* ── 浮遊カード ───────────────────────────────── */
function openCard(data, anchorEl) {
  // 同一 id のカードがあれば作らず前面へ
  const key = data.key || (data.kicker + '|' + data.title);
  const existing = cardLayer.querySelector(`[data-key="${cssEscape(key)}"]`);
  if (existing) { bringToFront(existing); return existing; }

  const card = document.createElement('div');
  card.className = 'detail-card';
  card.dataset.kind = data.kind || 'life';
  card.dataset.key = key;
  card.style.zIndex = String(1000 + (++cardSeq));
  // ヘッダーに「種別タグ＋名称」を常時表示 → 折りたたんでも見分けられる
  card.innerHTML = `
    <div class="dc-head">
      <span class="dc-tag">${escapeHtml(KIND_TAG[data.kind] || 'INFO')}</span>
      <span class="dc-headtitle">${escapeHtml(data.title || '')}</span>
      <span class="dc-spacer"></span>
      <button class="dc-btn dc-collapse" title="畳む/開く">▶</button>
      <button class="dc-btn dc-close" title="閉じる">✕</button>
    </div>
    <div class="dc-body">
      ${data.subtitle ? `<div class="dc-sub">${escapeHtml(data.subtitle)}</div>` : ''}
      <div class="dc-text">${linkifyTerms(data.body || '')}</div>
    </div>
  `;
  cardLayer.appendChild(card);
  positionCard(card, anchorEl);

  // 操作
  card.querySelector('.dc-close').addEventListener('click', () => closeCard(card, data));
  const collapseBtn = card.querySelector('.dc-collapse');
  collapseBtn.addEventListener('click', () => {
    card.classList.toggle('collapsed');
    collapseBtn.textContent = card.classList.contains('collapsed') ? '▷' : '▶';
  });
  makeDraggable(card, card.querySelector('.dc-head'));
  card.addEventListener('mousedown', () => bringToFront(card));
  bindTerms(card);

  // 世界史イベントは領域ハイライトを連動
  if (data.kind === 'world') highlightRegions(globe, data.regions || []);
  return card;
}

function closeCard(card, data) {
  card.remove();
  if (data && data.kind === 'world') {
    // 他に世界史カードが残っていなければ領域を消す
    if (!cardLayer.querySelector('.detail-card[data-kind="world"]')) clearRegions(globe);
  }
}

function positionCard(card, anchorEl) {
  const w = card.offsetWidth || 330;
  const h = card.offsetHeight || 220;
  const pad = 12;
  let x, y;
  const lp = document.querySelector('.left-panel');
  if (card.dataset.kind === 'world' && lp) {
    // ワールドイベントは「左欄の右横・地球の左上」に出す。
    // 複数開いたら少しずつずらして重ならないようにカスケードする。
    const idx = cardLayer.querySelectorAll('.detail-card[data-kind="world"]').length - 1;
    const r = lp.getBoundingClientRect();
    x = r.right + 14 + idx * 22;  // 左欄の右隣に置き、以降ずらす
    y = r.top + idx * 22;         // 左欄の上端に揃え、以降下げる
  } else if (anchorEl && anchorEl.getBoundingClientRect) {
    const r = anchorEl.getBoundingClientRect();
    const onLeft = r.left < window.innerWidth / 2;
    x = onLeft ? r.right + 14 : r.left - w - 14;
    y = r.top - 6;
  } else {
    x = window.innerWidth / 2 - w / 2 - 40;
    y = 150;
  }
  x = Math.max(pad, Math.min(x, window.innerWidth - w - pad));
  y = Math.max(pad, Math.min(y, window.innerHeight - h - pad));
  card.style.left = x + 'px';
  card.style.top  = y + 'px';
}

function bringToFront(card) { card.style.zIndex = String(1000 + (++cardSeq)); }

function makeDraggable(card, handle) {
  let sx, sy, ox, oy, dragging = false;
  handle.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('dc-btn')) return;
    dragging = true;
    sx = e.clientX; sy = e.clientY;
    ox = parseFloat(card.style.left) || 0; oy = parseFloat(card.style.top) || 0;
    e.preventDefault();
  });
  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    card.style.left = (ox + e.clientX - sx) + 'px';
    card.style.top  = (oy + e.clientY - sy) + 'px';
  });
  window.addEventListener('mouseup', () => { dragging = false; });
}

/* 用語クリック → 語釈カード */
function bindTerms(scope) {
  scope.querySelectorAll('.term').forEach(el => {
    if (el.__bound) return;
    el.__bound = true;
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const g = aikidoGlossary[el.dataset.term];
      if (!g) return;
      openCard({
        kind: 'term', kicker: 'TERM / 用語',
        key: 'term|' + el.dataset.term,
        title: g.title, subtitle: g.reading || '', body: g.text,
      }, el);
    });
  });
}

/* ── 選択ハンドラ ─────────────────────────────── */
function selectLifeEvent(point, anchorEl) {
  selectedId = point.id;
  const y = parseInt(String(point.year), 10);
  if (y > currentYear) { currentYear = y; slider.value = String(y); }
  flyTo(globe, point);
  syncYear();
  openCard(mode.lifeCard(point), anchorEl);
}

function selectWorldEvent(item, anchorEl) {
  selectedId = item.id;
  if (item.year > currentYear) { currentYear = item.year; slider.value = String(item.year); }
  flyTo(globe, item, 1.8);
  syncYear();
  openCard(mode.worldCard(item), anchorEl);
}

function onPointClick(p) {
  selectedId = p.id;
  flyTo(globe, p);
  renderGlobe();
  if (p.kind === 'life')              openCard(mode.lifeCard(p.raw));
  else if (p.kind === 'dojoFound')    openCard(mode.dojoFoundCard(p.raw));
  else if (p.kind === 'firstContact') openCard(mode.firstContactCard(p.raw));
  else if (p.kind === 'dojo')         openCard(mode.dojoCard(p.raw));
}

/* ── 同期 ─────────────────────────────────────── */
function syncYear() {
  yearLabel.textContent = String(currentYear);
  renderGlobe();
  renderList();
  renderMarkers();
  updateChronologyReached();
}

slider.addEventListener('input', e => { currentYear = parseInt(e.target.value, 10); syncYear(); });

/* ── INIT ─────────────────────────────────────── */
slider.min = String(mode.timeline.min);
slider.max = String(mode.timeline.max);
slider.value = String(currentYear);
yearLabel.textContent = String(currentYear);
renderFocusOverview();
renderGlobe();
renderList();
renderMarkers();

/* ── utils ────────────────────────────────────── */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function cssEscape(s) { return String(s).replace(/["\\]/g, '\\$&'); }
