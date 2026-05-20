import Globe
from 'https://unpkg.com/globe.gl?module';

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

.pointRadius(0.12);

}
