// assets/geobase/geobase_globe.js — geoBase@1 の地の層を、どの Focus の地球（globe.gl）にも敷く部品。
// 使い方：
//   ・画面ごと任せる：mountGeoBase(world, { attribEl })                 … 上の中央に小さな「地」の枠を出す（万次郎の試験）
//   ・画面は自前で：  mountGeoBase(world, { attribEl, ui: false, onChange }) … 焼き物 Focus のように、光源と連動する自前の枠から set() を呼ぶ
// 地のデータ（data/geobase_v1.js・data/geobase_current_v1.js）は読むだけで変えない。
// 決まり（焼き物 Focus の DECISIONS_001）：
//   ・地は「地面」：地球の表面の絵を替える（なし／高さ・水深／岩）。流れ（海流）は1種
//   ・流れは静止した矢羽。「流す」で3秒だけ動かす
//   ・解像度の上限より寄ったら外して理由を出す。時間の性質（不変・現在の観測）を一行で出す
//   ・出典の一行を地球の出典欄に足す
// 呼ぶ側の Focus の処理を壊さないための約束：
//   ・world.onZoom は置き換えになるので使わない（controls の 'change' を足して聞く）
//   ・pathsData は呼ぶ側も使うことがある（万次郎のガイド線）。呼ぶ側が渡した線の後ろに、地の矢羽を足して渡す
//   ・矢羽の色は d.color と d.col の両方に入れる（呼ぶ側の pathColor の書き方に合わせる）
//   ・素材のパス（'../assets/...'）はページから見た相対。ページは1段下のフォルダ（/<focus>/focusShell.html）に置く前提
import { geoBase as GEO } from '../../data/geobase_v1.js?v=20261120d';
import { currentArrows as CUR, currentMeta as CUR_META } from '../../data/geobase_current_v1.js?v=20261120d';

export const TIME_JA = { invariant: 'この層は年代で変わりません', present_observation: '現在の観測です。過去の状態ではありません', time_varying: '年代とともに変わります' };
export const STATUS_JA = { ready: '表示中', pending_download: 'データ未取得', pending_license: 'ライセンス確認待ち' };
export { GEO as geoBase, CUR_META as currentMeta };

export function mountGeoBase(world, { attribEl = null, ui = true, onChange = null } = {}) {
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
      'background:rgba(7,14,24,.72);border:1px solid rgba(255,255,255,.12);border-radius:6px;padding:4px 8px;font:11px/1.4 "Noto Sans JP",sans-serif;color:#eef3f8;max-width:92vw;backdrop-filter:blur(8px)';
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
    mine = S.flow === 'current' && G.current.status === 'ready' ? arrows : [];
    push();
    const shown = shownLayers().filter(x => x.status === 'ready');
    if (attribEl) attribEl.textContent = (baseAttrib + (shown.length ? (baseAttrib ? '　' : '') + '地: ' + shown.map(x => x.provenance.source.citation).join(' / ') : '')).trim();
    if (ui) draw();
    if (onChange) onChange(S);
  }
  function draw() {
    box.innerHTML = '<span style="color:rgba(238,243,248,.55);font-size:10px;letter-spacing:.1em">地 geoBase@1</span>';
    [['none', 'なし'], ['relief', '高さ・水深'], ['rock', '岩']].forEach(([id, n]) => box.appendChild(btn(n, S.ground === id, () => { S.ground = id; apply(); })));
    box.appendChild(btn('海流', S.flow === 'current', () => { S.flow = S.flow ? null : 'current'; apply(); }));
    if (S.flow) box.appendChild(btn('流す ▸', false, run));
    note.textContent = shownLayers().map(g => `${g.name_ja}：${TIME_JA[g.provenance.time]}` + (g.id === 'current' ? `（${CUR_META.period.join('〜')}の平均）` : '')).join('　') +
      (S.tooClose ? '　寄りすぎたので岩の層を外しています（0.5°の格子）' : '');
    if (note.textContent) box.appendChild(note);
  }
  // 流す：3秒だけ。呼ぶ側の破線の決まりは終わったら元に戻す
  let timer = 0;
  const saved = { len: world.pathDashLength(), gap: world.pathDashGap(), anim: world.pathDashAnimateTime() };
  function run() {
    clearTimeout(timer);
    world.pathDashLength(d => d.geobase ? 0.35 : (typeof saved.len === 'function' ? saved.len(d) : saved.len))
      .pathDashGap(d => d.geobase ? 0.15 : (typeof saved.gap === 'function' ? saved.gap(d) : saved.gap)).pathDashAnimateTime(900);
    timer = setTimeout(() => { world.pathDashLength(saved.len).pathDashGap(saved.gap).pathDashAnimateTime(saved.anim); }, 3000);
  }
  world.controls().addEventListener('change', () => { const g = S.ground !== 'none' && G[S.ground]; const lim = g && g.provenance.resolution.max_altitude;
    if (lim && (world.pointOfView().altitude < lim) !== S.tooClose) apply(); });
  apply();
  return {
    state: S, layers: G, apply, run, rockAt, currentAt,
    set(ground, flow) { if (ground === S.ground && flow === S.flow) return; S.ground = ground; S.flow = flow; apply(); },
    count: () => ({ host: host.length, mine: mine.length, drawn: (origPaths() || []).length, image: world.globeImageUrl() }), // 確認用
  };
}
