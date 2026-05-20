export function generateWorldState(
data,
year
){

const visibleEvents =
data.events.filter(event=>

event.year <= year

);

const labels =
visibleEvents.map(event=>({

text:event.title,

lat:event.lat,
lng:event.lng

}));

const arcs = [];

visibleEvents.forEach(event=>{

if(
!event.causality
||
!event.causality.consequences
) return;

event.causality.consequences.forEach(targetId=>{

const target =
data.events.find(
e=>e.id === targetId
);

if(!target) return;

arcs.push({

startLat:event.lat,
startLng:event.lng,

endLat:target.lat,
endLng:target.lng,

color:[
'rgba(70,223,255,.8)',
'rgba(70,223,255,.1)'
]

});

});

});

return {

visibleEvents,
labels,
arcs

};

}
