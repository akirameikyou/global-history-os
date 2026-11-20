// assets/geobase/geobase_globe.js — geoBase@1 の地の層を、どの Focus の地球（globe.gl）にも敷く部品。
// 使い方：
//   ・画面ごと任せる：mountGeoBase(world, { attribEl })                 … 上の中央に小さな「地」の枠を出す（万次郎の試験）
//   ・画面は自前で：  mountGeoBase(world, { attribEl, ui: false, onChange }) … 焼き物 Focus のように、光源と連動する自前の枠から set() を呼ぶ
// 地のデータ（data/geobase_v1.js・data/geobase_current_v1.js）は読むだけで変えない。
// 決まり（焼き物 Focus の DECISIONS_001）：
//   ・地は「地面」：地球の表面の絵を替える（なし／高さ・水深／岩）。流れ（海流）は1種
//   ・流れは静止した矢羽が基本。「流す」を on にした間だけ、流線の上を光が走る（off で止まる）
//   ・解像度の上限より寄ったら外して理由を出す。時間の性質（不変・現在の観測）を一行で出す
//   ・出典の一行を地球の出典欄に足す
// 呼ぶ側の Focus の処理を壊さないための約束：
//   ・world.onZoom は置き換えになるので使わない（controls の 'change' を足して聞く）
//   ・pathsData は呼ぶ側も使うことがある（万次郎のガイド線）。呼ぶ側が渡した線の後ろに、地の矢羽を足して渡す
//   ・矢羽の色は d.color と d.col の両方に入れる（呼ぶ側の pathColor の書き方に合わせる）
//   ・素材のパス（'../assets/...'）はページから見た相対。ページは1段下のフォルダ（/<focus>/focusShell.html）に置く前提
import { geoBase as GEO } from '../../data/geobase_v1.js?v=20261121f';
import { currentArrows as CUR, currentMeta as CUR_META } from '../../data/geobase_current_v1.js?v=20261120d';

export const TIME_JA = { invariant: 'この層は年代で変わりません', present_observation: '現在の観測です。過去の状態ではありません', time_varying: '年代とともに変わります' };
export const STATUS_JA = { ready: '表示中', pending_download: 'データ未取得', pending_license: 'ライセンス確認待ち' };
export { GEO as geoBase, CUR_META as currentMeta };

// 枠の形（ui: true の時）：
//   grounds … 出す地の層（既定 ['relief','rock']）。labels … ボタンの名（例 { relief: '水深' }）
//   style   … 枠の置き場所の CSS（既定は地球の上の中央。万次郎は CHAPTER の下＝地球の上を避ける）
//   compact … 説明の一行を枠に置かず、出典の行の後ろに付ける（置き場所が低い時）
// 地の層は「なし」のボタンを置かず、選んでいる層をもう一度押すと消える（2026-11-21 清水さん）
export function mountGeoBase(world, { attribEl = null, ui = true, onChange = null, grounds = ['relief', 'rock'], labels = {}, style = '', compact = false } = {}) {
  const G = Object.fromEntries(GEO.map(g => [g.id, g]));
  const BASE = world.globeImageUrl();
  const baseAttrib = attribEl ? attribEl.textContent : '';
  const S = { ground: 'none', flow: null, tooClose: false };

  // 流れの矢羽（4°おき。尾が淡く頭が明るい短い線）
  const arrows = CUR.filter(a => Math.round(a[0]) % 4 === 0 && Math.round(a[1]) % 4 === 0).map(([la, lo, u, v]) => {
    const s = Math.hypot(u, v), k = Math.min(3.2, 0.6 + s * 3.2) / Math.max(s, 1e-6);
    const dla = v * k, dlo = u * k / Math.max(0.25, Math.cos(la * Math.PI / 180)), a = Math.min(0.85, 0.3 + s * 0.9);
    const col = ['rgba(102,209,201,0)', `rgba(140,225,215,${a * 0.6})`, `rgba(190,245,238,${a})`];
    return { geobase: true, pts: [[la, lo], [la + dla / 2, lo + dlo / 2], [la + dla, lo + dlo]], color: col, col };
  });
  // pathsData を包む：呼ぶ側の線（host）＋地の矢羽（mine）
  const origPaths = world.pathsData.bind(world);
  let host = origPaths() || [], mine = [];
  world.pathsData = function (d) { if (arguments.length === 0) return origPaths(); host = d || []; return origPaths([...host, ...mine]); };
  const push = () => origPaths([...host, ...mine]);

  // 岩の値：画像の画素の色から分類を引く（地球に見えている色と食い違わない）
  const rockCanvas = document.createElement('canvas'); let rockReady = false;
  if (G.rock && G.rock.status === 'ready') { const im = new Image(); im.onload = () => { rockCanvas.width = im.width; rockCanvas.height = im.height; rockCanvas.getContext('2d').drawImage(im, 0, 0); rockReady = true; }; im.src = G.rock.asset.file; }
  function rockAt(lat, lng) {
    if (!rockReady) return null;
    const x = Math.min(rockCanvas.width - 1, Math.floor((lng + 180) / 360 * rockCanvas.width)), y = Math.min(rockCanvas.height - 1, Math.floor((90 - lat) / 180 * rockCanvas.height));
    const [r, g, b] = rockCanvas.getContext('2d').getImageData(x, y, 1, 1).data;
    const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
    return G.rock.classes.find(c => c.color === hex) || { name_ja: '海', color: hex };
  }
  // 海流の値：いちばん近い2°の升目（そばに値がなければ null）
  function currentAt(lat, lng) {
    let best = null, bd = 1e9;
    for (const a of CUR) { const d = (a[0] - lat) ** 2 + ((a[1] - lng) * Math.cos(lat * Math.PI / 180)) ** 2; if (d < bd) { bd = d; best = a; } }
    if (!best || bd > 2.2 ** 2) return null;
    const [, , u, v, n] = best, s = Math.hypot(u, v), deg = (Math.atan2(u, v) * 180 / Math.PI + 360) % 360;
    return { s, dir: ['北', '北東', '東', '南東', '南', '南西', '西', '北西'][Math.round(deg / 45) % 8], n, at: best };
  }

  // 小さな枠（ui: true の時だけ）
  let box = null, note = null;
  if (ui) {
    box = document.createElement('div'); box.id = 'geobaseBox';
    box.style.cssText = 'position:fixed;left:50%;top:92px;transform:translateX(-50%);z-index:60;display:flex;gap:4px;align-items:center;flex-wrap:wrap;justify-content:center;' +
      'background:rgba(7,14,24,.72);border:1px solid rgba(255,255,255,.12);border-radius:6px;padding:4px 8px;font:11px/1.4 "Noto Sans JP",sans-serif;color:#eef3f8;max-width:92vw;backdrop-filter:blur(8px);' + style;
    note = document.createElement('div'); note.style.cssText = 'flex-basis:100%;text-align:center;font-size:10px;color:rgba(238,243,248,.6)';
    document.body.appendChild(box);
  }
  const btn = (label, on, fn) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = label;
    b.style.cssText = `background:${on ? 'rgba(102,209,201,.18)' : 'rgba(7,14,24,.55)'};border:1px solid ${on ? '#66d1c9' : 'rgba(238,243,248,.25)'};color:${on ? '#eef3f8' : '#9db4c8'};border-radius:4px;padding:2px 8px;font:inherit;cursor:pointer`;
    b.onclick = fn; return b; };
  const shownLayers = () => [S.ground !== 'none' && G[S.ground], S.flow && G[S.flow]].filter(Boolean);

  function apply() {
    const g = S.ground !== 'none' && G[S.ground];
    const lim = g && g.provenance.resolution.max_altitude;
    S.tooClose = !!(g && lim && world.pointOfView().altitude < lim);
    const url = g && g.status === 'ready' && g.asset && !S.tooClose ? g.asset.file : BASE;
    if (world.globeImageUrl() !== url) world.globeImageUrl(url);
    mine = S.flow === 'current' && G.current.status === 'ready' ? (S.running && streams ? streams : arrows) : [];
    push();
    const shown = shownLayers().filter(x => x.status === 'ready');
    const tail = compact ? noteText() : '';
    if (attribEl) attribEl.textContent = (baseAttrib + (shown.length ? (baseAttrib ? '　' : '') + '地: ' + shown.map(x => x.provenance.source.citation).join(' / ') : '') + (tail ? '　（' + tail + '）' : '')).trim();
    if (ui) draw();
    if (onChange) onChange(S);
  }
  function noteText(short = compact) {
    return shownLayers().map(g => short
      ? (g.id === 'current' ? `海流は${CUR_META.period.map(d => d.slice(0, 4)).join('〜')}年の平均で、過去の海流ではありません` : `${g.name_ja}は年代で変わりません`)
      : `${g.name_ja}：${TIME_JA[g.provenance.time]}` + (g.id === 'current' ? `（${CUR_META.period.join('〜')}の平均）` : '')).join('。') +
      (S.tooClose ? '。寄りすぎたので岩相の層を外しています（0.5°の格子）' : '');
  }
  function draw() {
    box.innerHTML = compact ? '' : '<span style="color:rgba(238,243,248,.55);font-size:10px;letter-spacing:.1em">地 geoBase@1</span>';
    grounds.forEach(id => box.appendChild(btn(labels[id] || G[id].name_ja, S.ground === id, () => { S.ground = S.ground === id ? 'none' : id; apply(); })));
    box.appendChild(btn(labels.current || '海流', S.flow === 'current', () => { if (S.flow) stopFlow(); S.flow = S.flow ? null : 'current'; apply(); }));
    if (S.flow) box.appendChild(btn(S.running ? '流れを止める ■' : '流す ▸', S.running, toggleFlow));
    if (compact) { box.title = '地 geoBase@1：' + noteText(false); return; }
    note.textContent = noteText(false);
    if (note.textContent) box.appendChild(note);
  }
  // 流線：短い矢羽の上で光らせても「ちらつき」にしか見えなかった（2026-11-21 清水さん「流れはまだ動いていない？」）ので、
  // 平均の流れの場をたどった長い流線を描き、その上を光が走るようにする
  const grid = new Map(CUR.map(a => [`${a[0]},${a[1]}`, a]));
  const at2 = (la, lo) => grid.get(`${la},${(((lo + 180) % 360) + 360) % 360 - 180}`);
  function sample(la, lo) {   // 2°の升目の4隅から重みをつけて混ぜる（値のない隅は使わない）
    const la0 = Math.floor(la / 2) * 2, lo0 = Math.floor(lo / 2) * 2, fy = (la - la0) / 2, fx = (lo - lo0) / 2;
    let u = 0, v = 0, w = 0;
    for (const [dy, dx, k] of [[0, 0, (1 - fy) * (1 - fx)], [0, 2, (1 - fy) * fx], [2, 0, fy * (1 - fx)], [2, 2, fy * fx]]) {
      const a = at2(la0 + dy, lo0 + dx); if (a && k > 0) { u += a[2] * k; v += a[3] * k; w += k; }
    }
    return w > 0.5 ? [u / w, v / w] : null;
  }
  let streams = null;
  function buildStreams() {
    const out = [];
    for (let la = -66; la <= 66; la += 4) for (let lo = -180; lo < 180; lo += 4) {
      let p = [la + 1, lo + 1], s0 = sample(p[0], p[1]); if (!s0 || Math.hypot(...s0) < 0.08) continue;
      const pts = [p], h = 0.8;
      for (let i = 0; i < 16; i++) {
        const s = sample(p[0], p[1]); if (!s) break; const sp = Math.hypot(s[0], s[1]); if (sp < 0.03) break;
        p = [p[0] + s[1] / sp * h, p[1] + s[0] / sp * h / Math.max(0.3, Math.cos(p[0] * Math.PI / 180))]; pts.push(p);
      }
      if (pts.length < 5) continue;
      const sp = Math.hypot(...s0), a = Math.min(1, 0.6 + sp * 0.8);
      const col = `rgba(205,250,244,${a})`;
      out.push({ geobase: true, stream: true, pts, color: col, col });
    }
    return out;
  }
  // 流す：on にしたら off にするまで流し続ける（2026-11-21 清水さんの希望。最初は「押した時だけ6秒」だった）。
  // 観測者が自分で動きを選ぶので「常に動かさない」の趣旨は守られる。off（または海流を消す）で矢羽と、呼ぶ側の破線・太さの決まりに戻す
  const saved = { len: world.pathDashLength(), gap: world.pathDashGap(), anim: world.pathDashAnimateTime() };
  let savedStroke = null;
  function startFlow() {
    if (S.running || !(S.flow === 'current' && G.current.status === 'ready')) return;
    streams = streams || buildStreams();
    S.running = true; mine = streams; push();
    savedStroke = world.pathStroke();   // 呼ぶ側の太さ（万次郎は寄ると細くする）。流す間だけ流線を太く
    world.pathStroke(d => d.stream ? 1.4 : (typeof savedStroke === 'function' ? savedStroke(d) : savedStroke));
    world.pathDashLength(d => d.geobase ? 0.18 : (typeof saved.len === 'function' ? saved.len(d) : saved.len))
      .pathDashGap(d => d.geobase ? 0.82 : (typeof saved.gap === 'function' ? saved.gap(d) : saved.gap))
      .pathDashInitialGap(d => d.geobase ? Math.random() : 0)
      .pathDashAnimateTime(d => d.geobase ? 2600 : (typeof saved.anim === 'function' ? saved.anim(d) : saved.anim));   // 呼ぶ側の破線（万次郎の回帰線）は動かさない
    if (ui) draw(); if (onChange) onChange(S);
  }
  function stopFlow() {
    if (!S.running) return;
    S.running = false;
    world.pathDashLength(saved.len).pathDashGap(saved.gap).pathDashInitialGap(0).pathDashAnimateTime(saved.anim);
    if (savedStroke !== null) world.pathStroke(savedStroke);
    mine = S.flow === 'current' ? arrows : []; push();
    if (ui) draw(); if (onChange) onChange(S);
  }
  const toggleFlow = () => (S.running ? stopFlow() : startFlow());
  world.controls().addEventListener('change', () => { const g = S.ground !== 'none' && G[S.ground]; const lim = g && g.provenance.resolution.max_altitude;
    if (lim && (world.pointOfView().altitude < lim) !== S.tooClose) apply(); });
  apply();
  return {
    state: S, layers: G, apply, rockAt, currentAt, startFlow, stopFlow, toggleFlow, run: toggleFlow,
    set(ground, flow) { if (ground === S.ground && flow === S.flow) return; if (flow !== 'current') stopFlow(); S.ground = ground; S.flow = flow; apply(); },
    count: () => ({ host: host.length, mine: mine.length, drawn: (origPaths() || []).length, image: world.globeImageUrl() }), // 確認用
  };
}
