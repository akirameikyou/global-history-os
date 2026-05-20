import Globe from 'https://unpkg.com/globe.gl?module';

export function createGlobe(container){

  const globe = Globe()(container)

    .globeImageUrl(
'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
)

.bumpImageUrl(
'https://unpkg.com/three-globe/example/img/earth-topology.png'
)

    .backgroundColor('#000')

    .pointAltitude(0.01)

    .pointRadius('size')

    .pointColor('color')

    .labelText('text')

    .labelSize(1.2)

    .labelColor('color')

    .labelResolution(2)

    .arcStroke(0.5)

    .arcDashLength(0.4)

    .arcDashGap(0.2)

    .arcDashAnimateTime(4000);

  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.4;

  return globe;
}

export function renderState(globe, state){

  globe.pointsData(state.points);

  globe.labelsData(state.labels);

  globe.arcsData(state.arcs);

  globe.pointOfView(state.camera, 1000);
}
