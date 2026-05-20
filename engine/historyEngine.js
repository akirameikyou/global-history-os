export function generateWorldState(data, year){

  const visibleEvents = data.events.filter(event => {
    return event.year <= year;
  });

  const labels = visibleEvents.map(event => ({
    lat:event.lat,
    lng:event.lng,
    text:event.title,
    color:'#ffffff'
  }));

  const points = visibleEvents.map(event => ({
    lat:event.lat,
    lng:event.lng,
    size:0.35,
    color:'#46dfff'
  }));

  const arcs = [];

  visibleEvents.forEach(event => {

    if(!event.causality) return;

    event.causality.consequences.forEach(targetId => {

      const target = data.events.find(e => e.id === targetId);

      if(!target) return;

      arcs.push({
        startLat:event.lat,
        startLng:event.lng,
        endLat:target.lat,
        endLng:target.lng,
        color:['#46dfff','#ffd95a']
      });

    });

  });

  return {
    visibleEvents,
    labels,
    points,
    arcs,
    camera:{
      lat:30,
      lng:140,
      altitude:2.2
    }
  };
}
