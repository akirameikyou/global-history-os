// assets/geobase/geobase_globe.js — geoBase@1 の地の層を、どの Focus の地球（globe.gl）にも敷く部品。
// 使い方：
//   ・画面ごと任せる：mountGeoBase(world, { attribEl, flows:['current','wind'], getMonth })  … 小さな「地」の枠を出す（万次郎）
//   ・画面は自前で：  mountGeoBase(world, { attribEl, ui: false, onChange }) … 焼き物 Focus のように、光源と連動する自前の枠から set() を呼ぶ
// 地のデータ（data/geobase_v1.js・geobase_current_v1.js・geobase_wind_v1.js）は読むだけで変えない。
// 決まり（焼き物 Focus の DECISIONS_001）：
//   ・地は「地面」：地球の表面の絵を替える（なし／高さ・水深／岩相）
//   ・流れは2種（海流・風）。見た目を分ける：海流＝海面の青緑の矢羽、風＝少し浮かせた白く細い流線
//   ・「流す」を on にした間だけ光が走る。動かすのは最後に選んだ流れ一つだけ。両方出す時はそれぞれ間引く（2026-11-22 清水さん「煩雑にならない工夫」）
//   ・風は月ごとの平均。呼ぶ側の月（getMonth）に合わせて描き直す
//   ・解像度の上限より寄ったら外して理由を出す。時間の性質（不変・現在の観測）を一行で出す。出典の一行を地球の出典欄に足す
// 呼ぶ側の Focus の処理を壊さないための約束：
//   ・world.onZoom は置き換えになるので使わない（controls の 'change' を足して聞く）
//   ・pathsData は呼ぶ側も使う（万次郎のガイド線・焼き物の結びの線）。呼ぶ側が渡した線の後ろに、地の線を足して渡す
//   ・破線・太さ・高さの決まりは、地の線（d.geobase）だけ部品が決め、それ以外は呼ぶ側の決まりをそのまま使う
//   ・線の色は d.color と d.col の両方に入れる（呼ぶ側の pathColor の書き方に合わせる）
//   ・素材のパス（'../assets/...'）はページから見た相対。ページは1段下のフォルダ（/<focus>/focusShell.html）に置く前提
import { geoBase as GEO } from '../../data/geobase_v1.js?v=20261122c';
import { currentArrows as CUR, currentMeta as CUR_META } from '../../data/geobase_current_v1.js?v=20261120d';
import { windGrid as WG, windMeta as WIND_META } from '../../data/geobase_wind_v1.js?v=20261122a';

export const TIME_JA = { invariant: 'この層は年代で変わりません', present_observation: '現在の観測です。過去の状態ではありません', time_varying: '年代とともに変わります' };
export const STATUS_JA = { ready: '表示中', pending_download: 'データ未取得', pending_license: 'ライセンス確認待ち' };
export { GEO as geoBase, CUR_META as currentMeta, WIND_META as windMeta };
const DIR8 = ['北', '北東', '東', '南東', '南', '南西', '西', '北西'];
const dirOf = (u, v) => DIR8[Math.round(((Math.atan2(u, v) * 180 / Math.PI + 360) % 360) / 45) % 8];   // 流れていく向き（風は「どこへ吹くか」）

// 枠の形（ui: true の時）：
//   grounds … 出す地の層（既定 ['relief','rock']）。flows … 出す流れ（既定 ['current']）。labels … ボタンの名（例 { relief: '水深' }）
//   style   … 枠の置き場所の CSS。compact … 説明の一行を枠に置かず、出典の行の後ろに付ける
//   getMonth … 呼ぶ側のいまの月（1〜12）を返す関数。風の月を合わせる
//   attribBreak … 出典の行を「地球の元／地の出典／説明」の行に分ける（呼ぶ側が white-space:pre-line と幅を決める）
// 地の層は「なし」のボタンを置かず、選んでいる層をもう一度押すと消える（2026-11-21 清水さん）
export function mountGeoBase(world, { attribEl = null, ui = true, onChange = null, grounds = ['relief', 'rock'], flows = ['current'], labels = {}, style = '', compact = false, getMonth = null, attribBreak = false } = {}) {
  const G = Object.fromEntries(GEO.map(g => [g.id, g]));
  const BASE = world.globeImageUrl();
  const baseAttrib = attribEl ? attribEl.textContent : '';
  const S = { ground: 'none', flow: null, wind: false, month: (getMonth && getMonth()) || 1, tooClose: false, running: false, target: null };

  /* ── 呼ぶ側の線の決まりを包む：地の線（d.geobase）だけ部品が決める ── */
  const caller = { len: world.pathDashLength(), gap: world.pathDashGap(), ig: world.pathDashInitialGap(), anim: world.pathDashAnimateTime(), stroke: world.pathStroke(), alt: world.pathPointAlt() };
  const call = (f, x) => (typeof f === 'function' ? f(x) : f);
  world.pathDashLength(d => d.geobase ? (d.anim ? 0.18 : 1) : call(caller.len, d))
    .pathDashGap(d => d.geobase ? (d.anim ? 0.82 : 0) : call(caller.gap, d))
    .pathDashInitialGap(d => d.geobase ? (d.anim ? d.ig : 0) : call(caller.ig, d) || 0)
    .pathDashAnimateTime(d => d.geobase ? (d.anim ? d.at : 0) : call(caller.anim, d))   // 呼ぶ側の破線（万次郎の回帰線）は動かさない
    .pathStroke(d => d.geobase ? d.w : call(caller.stroke, d))
    .pathPointAlt(p => (p.length > 2 ? p[2] : call(caller.alt, p)));
  const origPaths = world.pathsData.bind(world);
  let host = origPaths() || [], mine = [];
  world.pathsData = function (d) { if (arguments.length === 0) return origPaths(); host = d || []; return origPaths([...host, ...mine]); };
  const push = () => origPaths([...host, ...mine]);

  /* ── 海流：矢羽（4°おき）と、流す時の流線 ── */
  const curArrow = ([la, lo, u, v]) => {
    const s = Math.hypot(u, v), k = Math.min(3.2, 0.6 + s * 3.2) / Math.max(s, 1e-6);
    const dla = v * k, dlo = u * k / Math.max(0.25, Math.cos(la * Math.PI / 180)), a = Math.min(0.85, 0.3 + s * 0.9);
    const col = ['rgba(102,209,201,0)', `rgba(140,225,215,${a * 0.6})`, `rgba(190,245,238,${a})`];
    return { geobase: true, kind: 'current', w: 0.6, pts: [[la, lo], [la + dla / 2, lo + dlo / 2], [la + dla, lo + dlo]], color: col, col };
  };
  const arrowsAll = CUR.filter(a => Math.round(a[0]) % 4 === 0 && Math.round(a[1]) % 4 === 0).map(curArrow);
  const arrowsHalf = CUR.filter(a => Math.round(a[0]) % 8 === 0 && Math.round(a[1]) % 8 === 0).map(curArrow);   // 風と一緒の時は8°おき
  const cgrid = new Map(CUR.map(a => [`${a[0]},${a[1]}`, a]));
  const cat2 = (la, lo) => cgrid.get(`${la},${(((lo + 180) % 360) + 360) % 360 - 180}`);
  function csample(la, lo) {   // 2°の升目の4隅から重みをつけて混ぜる（値のない隅は使わない）
    const la0 = Math.floor(la / 2) * 2, lo0 = Math.floor(lo / 2) * 2, fy = (la - la0) / 2, fx = (lo - lo0) / 2;
    let u = 0, v = 0, w = 0;
    for (const [dy, dx, k] of [[0, 0, (1 - fy) * (1 - fx)], [0, 2, (1 - fy) * fx], [2, 0, fy * (1 - fx)], [2, 2, fy * fx]]) {
      const a = cat2(la0 + dy, lo0 + dx); if (a && k > 0) { u += a[2] * k; v += a[3] * k; w += k; }
    }
    return w > 0.5 ? [u / w, v / w] : null;
  }
  // 流線をたどる（sample は [東向き, 北向き] を返す）。h は1歩の長さ（度）
  function trace(sample, la, lo, steps, h, minSp) {
    let p = [la, lo]; const pts = [p];
    for (let i = 0; i < steps; i++) {
      const s = sample(p[0], p[1]); if (!s) break; const sp = Math.hypot(s[0], s[1]); if (sp < minSp) break;
      p = [p[0] + s[1] / sp * h, p[1] + s[0] / sp * h / Math.max(0.3, Math.cos(p[0] * Math.PI / 180))]; pts.push(p);
    }
    return pts;
  }
  const cstreamCache = {};
  function curStreams(step) {
    if (cstreamCache[step]) return cstreamCache[step];
    const out = [];
    for (let la = -66; la <= 66; la += step) for (let lo = -180; lo < 180; lo += step) {
      const s0 = csample(la + 1, lo + 1); if (!s0 || Math.hypot(...s0) < 0.08) continue;
      const pts = trace(csample, la + 1, lo + 1, 16, 0.8, 0.03); if (pts.length < 5) continue;
      const col = `rgba(205,250,244,${Math.min(1, 0.6 + Math.hypot(...s0) * 0.8)})`;
      out.push({ geobase: true, kind: 'current', stream: true, w: 1.4, ig: Math.random(), at: 2600, pts, color: col, col });
    }
    return (cstreamCache[step] = out);
  }

  /* ── 風：月ごとの平均の流線（白く細く、少し浮かせる） ── */
  function wsample(m) {   // 5°の格子を4隅から混ぜる。経度は回り込む
    const U = WG.u[m - 1], V = WG.v[m - 1];
    return (la, lo) => {
      if (la > 87.5 || la < -87.5) return null;
      const fi = (WG.lat0 - la) / -WG.dlat, i0 = Math.floor(fi), fy = fi - i0;
      const L = ((lo % 360) + 360) % 360, fj = L / WG.dlon, j0 = Math.floor(fj), fx = fj - j0;
      const ix = (i, j) => Math.min(WG.nlat - 1, i) * WG.nlon + (j % WG.nlon);
      const k = [[i0, j0, (1 - fy) * (1 - fx)], [i0, j0 + 1, (1 - fy) * fx], [i0 + 1, j0, fy * (1 - fx)], [i0 + 1, j0 + 1, fy * fx]];
      let u = 0, v = 0; for (const [i, j, w] of k) { u += U[ix(i, j)] * w; v += V[ix(i, j)] * w; }
      return [u, v];
    };
  }
  const wstreamCache = {};
  function windStreams(m, step, anim) {
    const key = `${m}-${step}-${anim}`; if (wstreamCache[key]) return wstreamCache[key];
    const smp = wsample(m), out = [];
    for (let la = -70; la <= 70; la += step) for (let lo = -180; lo < 180; lo += step) {
      const s0 = smp(la, lo); if (!s0 || Math.hypot(...s0) < 1.5) continue;
      const pts = trace(smp, la, lo, 14, 1.1, 0.8); if (pts.length < 5) continue;
      const sp = Math.hypot(...s0), a = anim ? Math.min(0.95, 0.45 + sp / 18) : Math.min(0.55, 0.18 + sp / 30);
      const col = `rgba(255,255,255,${a.toFixed(2)})`;
      out.push({ geobase: true, kind: 'wind', stream: true, anim, w: anim ? 1.1 : 0.45, ig: Math.random(), at: 3400, pts: pts.map(p => [p[0], p[1], 0.018]), color: col, col });
    }
    return (wstreamCache[key] = out);
  }
  function windAt(lat, lng, m = S.month) {
    const s = wsample(m)(lat, lng); if (!s) return null;
    return { s: Math.hypot(...s), dir: dirOf(s[0], s[1]), month: m };
  }

  /* ── 岩相・海流の値 ── */
  const rockCanvas = document.createElement('canvas'); let rockReady = false;
  if (G.rock && G.rock.status === 'ready') { const im = new Image(); im.onload = () => { rockCanvas.width = im.width; rockCanvas.height = im.height; rockCanvas.getContext('2d').drawImage(im, 0, 0); rockReady = true; }; im.src = G.rock.asset.file; }
  function rockAt(lat, lng) {
    if (!rockReady) return null;
    const x = Math.min(rockCanvas.width - 1, Math.floor((lng + 180) / 360 * rockCanvas.width)), y = Math.min(rockCanvas.height - 1, Math.floor((90 - lat) / 180 * rockCanvas.height));
    const [r, g, b] = rockCanvas.getContext('2d').getImageData(x, y, 1, 1).data;
    const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
    return G.rock.classes.find(c => c.color === hex) || { name_ja: '海', color: hex };
  }
  function currentAt(lat, lng) {
    let best = null, bd = 1e9;
    for (const a of CUR) { const d = (a[0] - lat) ** 2 + ((a[1] - lng) * Math.cos(lat * Math.PI / 180)) ** 2; if (d < bd) { bd = d; best = a; } }
    if (!best || bd > 2.2 ** 2) return null;
    const [, , u, v, n] = best;
    return { s: Math.hypot(u, v), dir: dirOf(u, v), n, at: best };
  }

  /* ── 組み立て：いま出す地の線 ── */
  function compose() {
    const both = S.flow === 'current' && S.wind;
    const parts = [];
    if (S.flow === 'current' && G.current.status === 'ready')
      parts.push(...(S.running && S.target === 'current' ? curStreams(both ? 6 : 4).map(d => ({ ...d, anim: true })) : (both ? arrowsHalf : arrowsAll)));
    if (S.wind && G.wind && G.wind.status === 'ready')
      parts.push(...windStreams(S.month, both ? 10 : 7.5, S.running && S.target === 'wind'));
    mine = parts; push();
  }

  /* ── 小さな枠（ui: true の時だけ） ── */
  let box = null, note = null, srcOpen = false, srcPanel = null;
  if (ui) {
    box = document.createElement('div'); box.id = 'geobaseBox';
    box.style.cssText = 'position:fixed;left:50%;top:92px;transform:translateX(-50%);z-index:60;display:flex;gap:4px;align-items:center;flex-wrap:wrap;justify-content:center;' +
      'background:rgba(7,14,24,.72);border:1px solid rgba(255,255,255,.12);border-radius:6px;padding:4px 8px;font:11px/1.4 "Noto Sans JP",sans-serif;color:#eef3f8;max-width:92vw;backdrop-filter:blur(8px);' + style;
    note = document.createElement('div'); note.style.cssText = 'flex-basis:100%;text-align:center;font-size:10px;color:rgba(238,243,248,.6)';
    document.body.appendChild(box);
  }
  const btn = (label, on, fn, tint = '#66d1c9') => { const b = document.createElement('button'); b.type = 'button'; b.textContent = label;
    b.style.cssText = `background:${on ? 'rgba(102,209,201,.18)' : 'rgba(7,14,24,.55)'};border:1px solid ${on ? tint : 'rgba(238,243,248,.25)'};color:${on ? '#eef3f8' : '#9db4c8'};border-radius:4px;padding:2px 8px;font:inherit;cursor:pointer`;
    b.onclick = fn; return b; };
  const shownLayers = () => [S.ground !== 'none' && G[S.ground], S.flow && G[S.flow], S.wind && G.wind].filter(Boolean);
  const flowName = k => (k === 'wind' ? (labels.wind || '風') : (labels.current || '海流'));

  function apply() {
    const g = S.ground !== 'none' && G[S.ground];
    const lim = g && g.provenance.resolution.max_altitude;
    S.tooClose = !!(g && lim && world.pointOfView().altitude < lim);
    const url = g && g.status === 'ready' && g.asset && !S.tooClose ? g.asset.file : BASE;
    if (world.globeImageUrl() !== url) world.globeImageUrl(url);
    // 流す先が消えたら止める。両方出ていて流す先がなければ、最後に選んだ方
    const avail = [S.flow === 'current' && 'current', S.wind && 'wind'].filter(Boolean);
    if (!avail.includes(S.target)) { S.target = avail[avail.length - 1] || null; if (!S.target) S.running = false; }
    compose();
    const shown = shownLayers().filter(x => x.status === 'ready');
    const tail = compact ? noteText() : '';
    const sep = attribBreak ? '\n' : '　';
    const cite = x => (attribBreak && x.provenance.source.citation_short) || x.provenance.source.citation;   // 折り返す時は短い名（素性の欄には正式な名）
    if (attribEl) attribEl.textContent = [baseAttrib, shown.length && '地: ' + shown.map(cite).join(' / '), tail && (attribBreak ? tail : '（' + tail + '）')].filter(Boolean).join(sep).trim();
    if (ui) draw();
    if (onChange) onChange(S);
  }
  function noteText(short = compact) {
    if (short) {   // 短い一文にまとめる：変わらない層／平均の流れ
      const L = shownLayers(), fixed = L.filter(g => g.provenance.time === 'invariant').map(g => g.name_ja);
      const fl = [S.flow === 'current' && `海流は${CUR_META.period.map(d => d.slice(0, 4)).join('〜')}年`, S.wind && `風は${WIND_META.period.join('〜')}年の${S.month}月`].filter(Boolean);
      return [fixed.length && `${fixed.join('・')}は年代で変わりません`, fl.length && `${fl.join('、')}の平均で、当時の値ではありません`].filter(Boolean).join('。') +
        (S.tooClose ? '。寄りすぎたので岩相の層を外しています' : '');
    }
    const one = g => {
      if (g.id === 'current') return short ? `海流は${CUR_META.period.map(d => d.slice(0, 4)).join('〜')}年の平均で、過去の海流ではありません` : `海流：${TIME_JA[g.provenance.time]}（${CUR_META.period.join('〜')}の平均）`;
      if (g.id === 'wind') return `風は${WIND_META.period.join('〜')}年の${S.month}月の平均で、当時の風ではありません`;
      return short ? `${g.name_ja}は年代で変わりません` : `${g.name_ja}：${TIME_JA[g.provenance.time]}`;
    };
    return shownLayers().map(one).join('。') + (S.tooClose ? '。寄りすぎたので岩相の層を外しています（0.5°の格子）' : '');
  }
  function draw() {
    box.innerHTML = compact ? '' : '<span style="color:rgba(238,243,248,.55);font-size:10px;letter-spacing:.1em">地 geoBase@1</span>';
    grounds.forEach(id => box.appendChild(btn(labels[id] || G[id].name_ja, S.ground === id, () => { S.ground = S.ground === id ? 'none' : id; apply(); })));
    if (flows.includes('current')) box.appendChild(btn(flowName('current'), S.flow === 'current', () => { S.flow = S.flow ? null : 'current'; if (S.flow) S.target = 'current'; apply(); }));
    if (flows.includes('wind')) box.appendChild(btn(flowName('wind'), S.wind, () => { S.wind = !S.wind; if (S.wind) { S.month = (getMonth && getMonth()) || S.month; S.target = 'wind'; } apply(); }, '#e8eef5'));
    if (S.target) box.appendChild(btn(S.running ? `止める ■` : `流す（${flowName(S.target)}） ▸`, S.running, toggleFlow));
    if (compact) {   // 枠に説明を置かない代わりに「出典」を押すと、正式な出典名とライセンスを全部出す（公開の時の権利の表示。2026-11-25）
      box.title = '地 geoBase@1：' + noteText(false);
      const sb = btn(srcOpen ? '出典 ▴' : '出典', srcOpen, () => { srcOpen = !srcOpen; draw(); }, '#9db4c8'); sb.title = '地の層の出典とライセンス'; box.appendChild(sb);
      if (srcOpen) {
        const ids = [...grounds, ...flows.filter(f => f === 'current'), ...(flows.includes('wind') ? ['wind'] : [])].filter(id => G[id]);
        const e = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
        // 操作の列の中に入れると列が崩れるので、列のすぐ下に浮かせた別の枠にする（地球の上に操作は置かない：読むだけの枠で、出典をもう一度押すと消える）
        const p = srcPanel || (srcPanel = document.createElement('div'));
        const r = box.getBoundingClientRect(), w = Math.min(330, innerWidth - 16), left = Math.max(8, Math.min(r.left, innerWidth - w - 8));
        p.style.cssText = `position:fixed;left:${left}px;top:${Math.round(r.bottom + 4)}px;width:${w}px;z-index:61;box-sizing:border-box;text-align:left;font:10px/1.55 "Noto Sans JP",sans-serif;color:rgba(238,243,248,.85);` +
          'background:rgba(7,14,24,.94);border:1px solid rgba(255,255,255,.14);border-radius:6px;padding:6px 10px 8px;max-height:45vh;overflow:auto';
        p.innerHTML = ids.map(id => { const g = G[id], v = g.provenance;
          return `<div style="margin-top:3px"><b>${e(labels[id] || g.name_ja)}</b>：<a href="${e(v.source.url)}" target="_blank" rel="noopener" style="color:#9becff">${e(v.source.citation || v.source.title)}</a><br>` +
            `<a href="${e(v.license.url)}" target="_blank" rel="noopener" style="color:#9becff">${e(v.license.name)}</a>・${e(TIME_JA[v.time] || '')}</div>`; }).join('') +
          '<div style="margin-top:3px;color:rgba(238,243,248,.55)">水深の図は色を淡くし、海流・風は矢と流れの線に描き直しています。</div>';
        if (!p.isConnected) document.body.appendChild(p);
      } else if (srcPanel) { srcPanel.remove(); }
      return;
    }
    note.textContent = noteText(false);
    if (note.textContent) box.appendChild(note);
  }

  /* ── 流す：on にしたら off にするまで（2026-11-21 清水さん）。動かすのは S.target の一つだけ ── */
  function startFlow(target = S.target) {
    if (!target) return;
    S.target = target; S.running = true; compose();
    if (ui) draw(); if (onChange) onChange(S);
  }
  function stopFlow() {
    if (!S.running) return;
    S.running = false; compose();
    if (ui) draw(); if (onChange) onChange(S);
  }
  const toggleFlow = () => (S.running ? stopFlow() : startFlow());

  /* ── 月：呼ぶ側の月に合わせて風を描き直す（風を出している間だけ見る） ── */
  function setMonth(m) { m = Math.max(1, Math.min(12, Math.round(m))); if (m === S.month) return; S.month = m; if (S.wind) apply(); }
  if (getMonth) setInterval(() => { if (S.wind) { const m = getMonth(); if (m) setMonth(m); } }, 800);

  world.controls().addEventListener('change', () => { const g = S.ground !== 'none' && G[S.ground]; const lim = g && g.provenance.resolution.max_altitude;
    if (lim && (world.pointOfView().altitude < lim) !== S.tooClose) apply(); });
  apply();
  return {
    state: S, layers: G, apply, rockAt, currentAt, windAt, startFlow, stopFlow, toggleFlow, run: toggleFlow, setMonth,
    set(ground, flow) { if (ground === S.ground && flow === S.flow) return; S.ground = ground; S.flow = flow; if (flow) S.target = 'current'; apply(); },
    setWind(on) { S.wind = !!on; if (S.wind) S.target = 'wind'; apply(); },
    count: () => ({ host: host.length, mine: mine.length, drawn: (origPaths() || []).length, image: world.globeImageUrl(), month: S.month, target: S.target, running: S.running }), // 確認用
  };
}
