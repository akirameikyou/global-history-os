import Globe from 'https://esm.sh/globe.gl';

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
.labelsData(state.labels)
.labelText(d=>d.text)

.labelLat(d=>d.lat)

.labelLng(d=>d.lng)

.labelColor(()=>'#ffffff')

.labelSize(1.4)

.labelResolution(6)

.labelDotRadius(0.3)
.labelText(d=>d.text)

.labelLat(d=>d.lat)

.labelLng(d=>d.lng)

.labelSize(1.2)

.labelColor(()=>'#ffffff')

.labelResolution(2)

.arcsData(state.arcs)

.arcStroke(0.4)

.arcDashLength(1)

.arcDashGap(0.4)

.arcDashAnimateTime(4000)
.pointLat(d=>d.lat)

.pointLng(d=>d.lng)

.pointColor(()=>'#46dfff')

.pointAltitude(0.02)

.pointRadius(0.12);

}
