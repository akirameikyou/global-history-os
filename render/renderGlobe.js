import Globe
from 'https://cdn.jsdelivr.net/npm/globe.gl/+esm';

export function createGlobe(container){

const globe = Globe()(container)

.globeImageUrl(
'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
)

.bumpImageUrl(
'https://unpkg.com/three-globe/example/img/earth-topology.png'
)

.backgroundColor('#000');

return globe;

}

export function renderState(
globe,
state
){

globe

.pointsData(
state.visibleEvents
)

.pointLat(d=>d.lat)

.pointLng(d=>d.lng)

.pointColor(()=>'#46dfff')

.pointAltitude(0.02)

.pointRadius(0.12)

.labelsData(state.labels)

.labelText(d=>d.text)

.labelTypeFace('Noto Sans JP')

.labelSize(1.8)

.labelDotRadius(0.25)

.labelColor(()=>'#ffffff')

.labelResolution(8)

.labelIncludeDot(true)

.arcsData(state.arcs)

.arcStartLat(d=>d.startLat)

.arcStartLng(d=>d.startLng)

.arcEndLat(d=>d.endLat)

.arcEndLng(d=>d.endLng)

.arcColor(()=>'#ffe27a')

.arcStroke(0.8)

.arcAltitude(0.18)

.arcDashLength(0.4)

.arcDashGap(0.2)

.arcDashAnimateTime(2500);

}
