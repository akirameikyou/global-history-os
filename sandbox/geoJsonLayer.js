export async function loadGeoJsonLayer(world) {

  try {

    const response = await fetch("../data/geo/countries.geojson");
    const geojson = await response.json();

    console.log("GeoJSON loaded:", geojson);

    world
      .polygonsData(geojson.features)
      .polygonCapColor(() => "rgba(80,120,255,0.15)")
      .polygonSideColor(() => "rgba(0,0,0,0)")
      .polygonStrokeColor(() => "rgba(255,255,255,0.25)")
      .polygonAltitude(0.003);

  } catch (err) {

    console.error("GeoJSON load failed:", err);

  }

}
