import Globe
from 'https://cdn.jsdelivr.net/npm/globe.gl/+esm';

/* =========================
CREATE GLOBE
========================= */

export function createGlobe(container){

const globe = Globe()(container)

.globeImageUrl(
'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
)

.bumpImageUrl(
'https://unpkg.com/three-globe/example/img/earth-topology.png'
)

.backgroundColor('#000')

.showAtmosphere(true)

.atmosphereColor('#46dfff')

.atmosphereAltitude(0.18);

return globe;

}

/* =========================
RENDER
========================= */

export function renderState(
globe,
state
){

/* =========================
POINTS
========================= */

globe

.pointsData(
state.visibleEvents
)

.pointLat(d=>d.lat)

.pointLng(d=>d.lng)

.pointColor(()=>'#46dfff')

.pointAltitude(0.02)

.pointRadius(0.12);

/* =========================
ARCS
========================= */

globe

.arcsData(
state.arcs || []
)

.arcStartLat(d=>d.startLat)

.arcStartLng(d=>d.startLng)

.arcEndLat(d=>d.endLat)

.arcEndLng(d=>d.endLng)

.arcColor(()=>'#46dfff')

.arcStroke(0.8)

.arcDashLength(0.4)

.arcDashGap(0.2)

.arcDashAnimateTime(2500);

/* =========================
HTML LABELS
========================= */

globe

.htmlElementsData(
state.visibleEvents
)

.htmlLat(d=>d.lat)

.htmlLng(d=>d.lng)

.htmlAltitude(0.03)

.htmlElement(d=>{

/* wrapper */

const wrapper =
document.createElement('div');

/* label */

const el =
document.createElement('div');

el.innerText =
d.title;

el.style.color =
'white';

el.style.fontSize =
'18px';

el.style.fontWeight =
'700';

el.style.whiteSpace =
'nowrap';

el.style.pointerEvents =
'none';

el.style.textShadow =
`
0 0 10px #000,
0 0 20px #000
`;

el.style.transform =
'translate(-50%,-50%)';

/* append */

wrapper.appendChild(el);

return wrapper;

});

}
