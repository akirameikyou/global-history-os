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
.labelsData(
state.labels.map(d=>({

lat:d.lat,
lng:d.lng,

text:
unescape(
encodeURIComponent(d.text)
)

}))
)

.labelsData(state.labels)

.labelText(d=>d.text)

.labelSize(1.8)

.labelDotRadius(0.25)

.labelColor(()=>'#ffffff')

.labelResolution(8)

.labelIncludeDot(true)

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
