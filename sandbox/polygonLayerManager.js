let baseGeoPolygons = [];
let historyPolygons = [];
let semanticPolygons = [];

export function setBaseGeoLayer(world, geojson) {
  baseGeoPolygons = geojson.features.map(feature => ({
    ...feature,
    __layer: 'base_geo'
  }));

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
  const combined = [
    ...baseGeoPolygons,
    ...historyPolygons,
    ...semanticPolygons
  ];

  world
    .polygonsData(combined)
    .polygonCapColor(d => {
      if (d.__layer === 'base_geo') return 'rgba(80, 120, 160, 0.18)';
      if (d.__layer === 'history') return d.color || 'rgba(255, 180, 60, 0.35)';
      if (d.__layer === 'semantic') return d.color || 'rgba(120, 255, 180, 0.35)';
      return 'rgba(255,255,255,0.1)';
    })
    .polygonSideColor(d => {
      if (d.__layer === 'base_geo') return 'rgba(80, 120, 160, 0.05)';
      return 'rgba(255,255,255,0.08)';
    })
    .polygonStrokeColor(d => {
      if (d.__layer === 'base_geo') return 'rgba(180, 220, 255, 0.45)';
      if (d.__layer === 'history') return 'rgba(255, 220, 120, 0.9)';
      if (d.__layer === 'semantic') return 'rgba(120, 255, 180, 0.9)';
      return 'white';
    })
    .polygonAltitude(d => {
      if (d.__layer === 'base_geo') return 0.003;
      if (d.__layer === 'history') return 0.012;
      if (d.__layer === 'semantic') return 0.02;
      return 0.005;
    });
}
