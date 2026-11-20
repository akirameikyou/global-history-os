// assets/geobase/geobase_globe.js — geoBase@1 の地の層を、どの Focus の地球（globe.gl）にも敷く部品。
// 使い方：mountGeoBase(world, { attribEl })。地のデータ（data/geobase_v1.js・data/geobase_current_v1.js）は読むだけで変えない。
// 決まり（焼き物 Focus の DECISIONS_001）：
//   ・地は「地面」：地球の表面の絵を替える（なし／高さ・水深／岩）。流れ（海流）は1種
//   ・流れは静止した矢羽。「流す」で3秒だけ動かす
//   ・解像度の上限より寄ったら外して理由を出す。時間の性質（不変・現在の観測）を一行で出す
//   ・出典の一行を地球の出典欄に足す
// 呼ぶ側の Focus の処理を壊さないための約束：
//   ・world.onZoom は置き換えになるので使わない（controls の 'change' を足して聞く）
//   ・pathsData は呼ぶ側も使うことがある（万次郎のガイド線）。呼ぶ側が渡した線の後ろに、地の矢羽を足して渡す
//   ・素材のパス（'../assets/...'）はページから見た相対。ページは1段下のフォルダ（/<focus>/focusShell.html）に置く前提
import { geoBase as GEO } from '../../data/geobase_v1.js?v=20261120d';
import { currentArrows as CUR, currentMeta as CUR_META } from '../../data/geobase_current_v1.js?v=20261120d';

const TIME_JA = { invariant: 'この層は年代で変わりません', present_observation: '現在の観測です。過去の状態ではありません', time_varying: '年代とともに変わります' };

export function mountGeoBase(world, { attribEl = null } = {}) {
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

  // 小さな枠：地のダイヤル
  const box = document.createElement('div');
  box.id = 'geobaseBox';
  box.style.cssText = 'position:fixed;left:50%;top:92px;transform:translateX(-50%);z-index:60;display:flex;gap:4px;align-items:center;flex-wrap:wrap;justify-content:center;' +
    'background:rgba(7,14,24,.72);border:1px solid rgba(255,255,255,.12);border-radius:6px;padding:4px 8px;font:11px/1.4 "Noto Sans JP",sans-serif;color:#eef3f8;max-width:92vw;backdrop-filter:blur(8px)';
  const note = document.createElement('div');
  note.style.cssText = 'flex-basis:100%;text-align:center;font-size:10px;color:rgba(238,243,248,.6)';
  document.body.appendChild(box);
  const btn = (label, on, fn) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = label;
    b.style.cssText = `background:${on ? 'rgba(102,209,201,.18)' : 'rgba(7,14,24,.55)'};border:1px solid ${on ? '#66d1c9' : 'rgba(238,243,248,.25)'};color:${on ? '#eef3f8' : '#9db4c8'};border-radius:4px;padding:2px 8px;font:inherit;cursor:pointer`;
    b.onclick = fn; return b; };

  function apply() {
    const g = S.ground !== 'none' && G[S.ground];
    const lim = g && g.provenance.resolution.max_altitude;
    S.tooClose = !!(g && lim && world.pointOfView().altitude < lim);
    const url = g && g.status === 'ready' && g.asset && !S.tooClose ? g.asset.file : BASE;
    if (world.globeImageUrl() !== url) world.globeImageUrl(url);
    mine = S.flow === 'current' && G.current.status === 'ready' ? arrows : [];
    push();
    const shown = [g, S.flow && G[S.flow]].filter(Boolean);
    if (attribEl) attribEl.textContent = baseAttrib + (shown.length ? '　地: ' + shown.map(x => x.provenance.source.citation).join(' / ') : '');
    draw(shown);
  }
  function draw(shown) {
    box.innerHTML = '<span style="color:rgba(238,243,248,.55);font-size:10px;letter-spacing:.1em">地 geoBase@1</span>';
    [['none', 'なし'], ['relief', '高さ・水深'], ['rock', '岩']].forEach(([id, n]) => box.appendChild(btn(n, S.ground === id, () => { S.ground = id; apply(); })));
    box.appendChild(btn('海流', S.flow === 'current', () => { S.flow = S.flow ? null : 'current'; apply(); }));
    if (S.flow) box.appendChild(btn('流す ▸', false, run));
    note.textContent = shown.map(g => `${g.name_ja}：${TIME_JA[g.provenance.time]}` + (g.id === 'current' ? `（${CUR_META.period.join('〜')}の平均）` : '')).join('　') +
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
  world.controls().addEventListener('change', () => { const was = S.tooClose; const g = S.ground !== 'none' && G[S.ground]; const lim = g && g.provenance.resolution.max_altitude;
    if (lim && (world.pointOfView().altitude < lim) !== was) apply(); });
  apply();
  return { state: S, apply, set(ground, flow) { S.ground = ground; S.flow = flow; apply(); },
    count: () => ({ host: host.length, mine: mine.length, drawn: (origPaths() || []).length, image: world.globeImageUrl() }) }; // 確認用
}
