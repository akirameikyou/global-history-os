import Globe from 'https://esm.sh/globe.gl';
import * as THREE from 'https://esm.sh/three';

export function createGlobe(container){

const globe = Globe()(container)

.globeImageUrl(
'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
)

.bumpImageUrl(
'https://unpkg.com/three-globe/example/img/earth-topology.png'
)

.backgroundColor('#000');

const ambient = new THREE.AmbientLight(0xffffff, 1.2);
globe.scene().add(ambient);

const directional = new THREE.DirectionalLight(0xffffff, 1.4);
directional.position.set(1,1,1);

globe.scene().add(directional);

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
