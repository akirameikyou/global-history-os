// hokusai/geometry_guide.js — 幾何ガイド（構図観察の補助線）の描画部品
// 本体 focusShell.html の拡大表示と、作業用ページ tools/hokusai_geometry/ の両方で使う。
// ガイドはすべて「絵の四隅」と縦横比だけから計算する（46図共通・個別作図なし）。
// 観察のための補助線であり、北斎の作図法を示すものではない。

// 線の種類（表示順）。def=最初から表示するもの。
export const GUIDE_TYPES = [
  { key:'diag',   label:'対角線',              def:true  },
  { key:'center', label:'中心線',              def:true  },
  { key:'arcH',   label:'角の円弧(半径=短辺)', def:true  },
  { key:'arcW',   label:'角の円弧(半径=長辺)', def:false },
  { key:'sq',     label:'辺の正方形',          def:false },
  { key:'sqdiag', label:'正方形の対角線',      def:false },
  { key:'thirds', label:'三分割',              def:false },
  { key:'golden', label:'黄金比',              def:false },
  { key:'grid',   label:'格子',                def:false },
];
export const GUIDE_NOTE = '観察のための補助線です。北斎の作図法を示すものではありません。';
export const FULL_QUAD = [[0,1],[1,1],[1,0],[0,0]]; // A(左下) B(右下) C(右上) D(左上)、画像の幅・高さに対する割合

// 単位正方形 (0,0)左上 (1,0)右上 (1,1)右下 (0,1)左下 → 画像上の四隅 への射影変換
function homography(P){
  const [x0,y0]=P[3],[x1,y1]=P[2],[x2,y2]=P[1],[x3,y3]=P[0];
  const dx1=x1-x2,dx2=x3-x2,dy1=y1-y2,dy2=y3-y2,sx=x0-x1+x2-x3,sy=y0-y1+y2-y3,den=dx1*dy2-dx2*dy1;
  const g=(sx*dy2-dx2*sy)/den,h=(dx1*sy-sx*dy1)/den;
  const a=x1-x0+g*x1,b=x3-x0+h*x3,d=y1-y0+g*y1,e=y3-y0+h*y3;
  return (u,v)=>{const z=g*u+h*v+1;return[(a*u+b*v+x0)/z,(d*u+e*v+y0)/z];};
}

let clipSeq=0;
// W,H=画像の実寸(px)。quad=四隅(割合)。opts: on{key:bool}, grid(分割数), opacity(0-1), letters, frame(枠の点線), handles(手直し用の丸), big(太さの基準)
export function guideSVG(W,H,quad,opts={}){
  const on=k=>!!(opts.on&&opts.on[k]);
  const P=(quad||FULL_QUAD).map(([u,v])=>[u*W,v*H]), map=homography(P);
  const len=(p,q)=>Math.hypot(q[0]-p[0],q[1]-p[1]);
  const w=(len(P[0],P[1])+len(P[3],P[2]))/2, h=(len(P[0],P[3])+len(P[1],P[2]))/2; // 絵の幅・高さ
  const T=(x,y)=>map(x/w,y/h), f=p=>p[0].toFixed(1)+','+p[1].toFixed(1);
  const sw=Math.max(W,H)/(opts.big===false?320:650);
  const L=(a,b,c,d,col)=>{const p=T(a,b),q=T(c,d);return `<line x1="${p[0].toFixed(1)}" y1="${p[1].toFixed(1)}" x2="${q[0].toFixed(1)}" y2="${q[1].toFixed(1)}" stroke="${col}"/>`;};
  const C=(cx,cy,r,col)=>{const pts=[];for(let i=0;i<=160;i++){const t=i/160*Math.PI*2;pts.push(f(T(cx+r*Math.cos(t),cy+r*Math.sin(t))));}return `<polyline points="${pts.join(' ')}" stroke="${col}"/>`;};
  const red='#e8432e',blu='#2a7fff',grn='#19a974',yel='#f2b705',mag='#c23bd4',wht='#ffffff';
  const id='hkgclip'+(++clipSeq), poly=P.map(f).join(' ');
  let s=`<defs><clipPath id="${id}"><polygon points="${poly}"/></clipPath></defs>`;
  s+=`<g fill="none" stroke-width="${sw.toFixed(2)}" opacity="${opts.opacity??.8}" clip-path="url(#${id})">`;
  if(on('grid')){const k=opts.grid||8;for(let i=1;i<k;i++)s+=L(w*i/k,0,w*i/k,h,wht)+L(0,h*i/k,w,h*i/k,wht);}
  if(on('thirds'))[1,2].forEach(i=>s+=L(w*i/3,0,w*i/3,h,yel)+L(0,h*i/3,w,h*i/3,yel));
  if(on('golden')){const p=1/1.618034;[p,1-p].forEach(t=>s+=L(w*t,0,w*t,h,mag)+L(0,h*t,w,h*t,mag));}
  if(on('center'))s+=L(w/2,0,w/2,h,grn)+L(0,h/2,w,h/2,grn);
  if(on('diag'))s+=L(0,0,w,h,red)+L(w,0,0,h,red);
  const m=Math.min(w,h),M=Math.max(w,h),port=h>w;
  if(on('sq'))s+=port?L(0,m,w,m,blu)+L(0,h-m,w,h-m,blu):L(m,0,m,h,blu)+L(w-m,0,w-m,h,blu);
  if(on('sqdiag'))s+=port?L(0,0,w,m,blu)+L(w,0,0,m,blu)+L(0,h,w,h-m,blu)+L(w,h,0,h-m,blu)
                         :L(0,h,m,0,blu)+L(0,0,m,h,blu)+L(w,h,w-m,0,blu)+L(w,0,w-m,h,blu);
  const cs=[[0,h],[w,h],[w,0],[0,0]];
  if(on('arcH'))cs.forEach(([x,y])=>s+=C(x,y,m,blu));
  if(on('arcW'))cs.forEach(([x,y])=>s+=C(x,y,M,mag));
  s+='</g>';
  if(opts.frame)s+=`<polygon points="${poly}" fill="none" stroke="#ffd400" stroke-width="${sw.toFixed(2)}" stroke-dasharray="${(sw*4).toFixed(1)} ${(sw*3).toFixed(1)}" opacity=".9"/>`;
  if(opts.letters){const fs=Math.max(W,H)/42;s+=`<g font-size="${fs.toFixed(1)}" fill="#fff" stroke="#000" stroke-width="${(fs/10).toFixed(1)}" paint-order="stroke" font-family="serif">`+
    ['A','B','C','D'].map((t,i)=>{const[x,y]=P[i];const ox=i===1||i===2?-fs*1.1:fs*.3, oy=i<2?-fs*.3:fs;return `<text x="${(x+ox).toFixed(1)}" y="${(y+oy).toFixed(1)}">${t}</text>`;}).join('')+'</g>';}
  if(opts.handles)P.forEach(([x,y],i)=>s+=`<circle class="h" data-i="${i}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(Math.max(W,H)/70).toFixed(1)}" fill="rgba(102,224,255,.35)" stroke="#66e0ff" stroke-width="${sw.toFixed(2)}"/>`);
  return s;
}

// 画像から絵の四隅を自動検出する（作業用ページで使う。本体では使わない）。
// 台紙・余白があれば外周1pxが均一な色になる→外から内へ、台紙色と違う画素が行の6割を超えた所を絵の始まりとする。
// 外周が均一でなければ「余白なし」とみなし画像の端を絵の端とする。img は画素を読める（同一オリジンかCORS許可の）画像。
export function detectFrame(img){
  const S=400,w=S,h=Math.round(S*img.naturalHeight/img.naturalWidth);
  const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');x.drawImage(img,0,0,w,h);
  const d=x.getImageData(0,0,w,h).data, px=(X,Y)=>{const o=(Y*w+X)*4;return[d[o],d[o+1],d[o+2]];};
  const dist=(p,q)=>Math.hypot(p[0]-q[0],p[1]-q[1],p[2]-q[2]);
  const O=3; // 最外周1〜2pxは走査の縁(灰色の線)が多いので避ける
  const ring=[];for(let i=O;i<w-O;i+=2){ring.push(px(i,O),px(i,h-1-O));}for(let j=O;j<h-O;j+=2){ring.push(px(O,j),px(w-1-O,j));}
  const med=k=>{const a=ring.map(p=>p[k]).sort((a,b)=>a-b);return a[a.length>>1];}, bg=[med(0),med(1),med(2)];
  if(ring.filter(p=>dist(p,bg)<30).length/ring.length<.8) return {quad:FULL_QUAD.map(p=>p.slice()),note:'余白なし'};
  function scan(N,len,get){const lim=Math.floor(N*.12),a=Math.floor(len*.1),b=Math.ceil(len*.9);
    for(let r=O;r<lim;r++){let n=0;for(let k=a;k<b;k++)if(dist(get(r,k),bg)>30)n++;if(n/(b-a)>.6)return r;}return -1;}
  const sides=[scan(h,w,(r,k)=>px(k,r)),scan(h,w,(r,k)=>px(k,h-1-r)),scan(w,h,(r,k)=>px(r,k)),scan(w,h,(r,k)=>px(w-1-r,k))];
  const miss=sides.some(s=>s<0),[t,b,l,r]=sides.map(s=>Math.max(0,s));
  return {quad:[[l/w,1-b/h],[1-r/w,1-b/h],[1-r/w,t/h],[l/w,t/h]],note:miss?'一部の辺は検出できず':'台紙あり'};
}
