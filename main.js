function updateLabels(
globe,
state
){

const layer =
document.getElementById(
'labelsLayer'
);

if(!layer) return;

layer.innerHTML = '';

const labels = [];

state.visibleEvents.forEach(event=>{

const div =
document.createElement('div');

div.className =
'city-label';

div.innerHTML =
event.title;

layer.appendChild(div);

labels.push({

el:div,

lat:event.lat,
lng:event.lng

});

});

function animateLabels(){

labels.forEach(label=>{

const pos =
globe.getScreenCoords(
label.lat,
label.lng
);

if(!pos){

label.el.style.display =
'none';

return;

}

if(
pos.x < 0 ||
pos.x > window.innerWidth ||
pos.y < 0 ||
pos.y > window.innerHeight
){

label.el.style.display =
'none';

return;

}

label.el.style.display =
'block';

label.el.style.left =
pos.x + 'px';

label.el.style.top =
pos.y + 'px';

});

requestAnimationFrame(
animateLabels
);

}

animateLabels();

}
/* 表示 */

label.el.style.display =
'block';

label.el.style.left =
pos.x + 'px';

label.el.style.top =
pos.y + 'px';

});

requestAnimationFrame(
animateLabels
);

}

animateLabels();

}
