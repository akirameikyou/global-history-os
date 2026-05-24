import { setBaseGeoLayer } from './polygonLayerManager.js';

export async function loadGeoJsonLayer(world) {
  const res = await fetch('../data/geo/countries.geojson');
  const geojson = await res.json();

  console.log('GeoJSON loaded:', geojson);

  setBaseGeoLayer(world, geojson);
}
