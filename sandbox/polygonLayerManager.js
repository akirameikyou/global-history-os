let countryFeatures = [];
let bordersVisible = false;
let historyPolygons = [];
let semanticPolygons = [];

function getCountryName(feature) {
  const p = feature.properties || {};

  return (
    p.ADMIN ||
    p.NAME ||
    p.name ||
    p.NAME_EN ||
    p.SOVEREIGNT ||
    p.country ||
    ''
  );
}

export function getCountryPolygons(countryName, extraProperties = {}) {
  return countryFeatures
    .filter(feature => {
      const name = getCountryName(feature);
      return name === countryName;
    })
    .map(feature => ({
      ...feature,
      properties: {
        ...feature.properties,
        ...extraProperties
      }
    }));
}

export function setBaseGeoLayer(world, geojson) {
  countryFeatures = geojson.features || [];
  applyPolygonLayers(world);
}

export function setBordersVisible(world, visible) {
  bordersVisible = visible;
  applyPolygonLayers(world);
}

export function setHistoryLayer(world, polygons) {
  historyPolygons = polygons.map(poly => ({
    ...poly,
    __layer: 'history'
  }));

  applyPolygonLayers(world);
}

export function clearHistoryLayer(world) {
  historyPolygons = [];
  applyPolygonLayers(world);
}

export function setSemanticLayer(world, polygons) {
  semanticPolygons = polygons.map(poly => ({
    ...poly,
    __layer: 'semantic'
  }));

  applyPolygonLayers(world);
}

export function applyPolygonLayers(world) {
  const borderPolygons = bordersVisible
    ? countryFeatures.map(feature => ({
        ...feature,
        __layer: 'border'
      }))
    : [];

  const combined = [
    ...borderPolygons,
    ...historyPolygons,
    ...semanticPolygons
  ];

  world
    .polygonsData(combined)
    .polygonCapColor(d => {
      if (d.__layer === 'border') return 'rgba(0,0,0,0)';
      if (d.__layer === 'history') {
        return d.properties?.color || 'rgba(255, 180, 60, 0.35)';
      }
      if (d.__layer === 'semantic') {
        return d.properties?.color || 'rgba(120, 255, 180, 0.35)';
      }
      return 'rgba(0,0,0,0)';
    })
    .polygonSideColor(d => {
      if (d.__layer === 'border') return 'rgba(0,0,0,0)';
      if (d.__layer === 'history') {
        return d.properties?.color || 'rgba(255, 180, 60, 0.08)';
      }
      if (d.__layer === 'semantic') {
        return d.properties?.color || 'rgba(120, 255, 180, 0.08)';
      }
      return 'rgba(0,0,0,0)';
    })
    .polygonStrokeColor(d => {
      if (d.__layer === 'border') return 'rgba(180,220,255,0.32)';
      if (d.__layer === 'history') {
        return d.properties?.stroke || d.properties?.color || 'rgba(255,220,120,0.75)';
      }
      if (d.__layer === 'semantic') {
        return d.properties?.stroke || 'rgba(120,255,180,0.75)';
      }
      return 'rgba(255,255,255,0.2)';
    })
    .polygonAltitude(d => {
      if (d.__layer === 'border') return 0.001;
      if (d.__layer === 'history') return 0.006;
      if (d.__layer === 'semantic') return 0.012;
      return 0.001;
    })
    .polygonsTransitionDuration(0);
}
