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

/* =========================
3D VISIBILITY CHECK
========================= */

const camera =
globe.camera();

/* lat lng → xyz */

const phi =
(90 - label.lat) *
Math.PI / 180;

const theta =
(label.lng + 180) *
Math.PI / 180;

/* sphere point */

const x =
Math.sin(phi) *
Math.cos(theta);

const y =
Math.cos(phi);

const z =
Math.sin(phi) *
Math.sin(theta);

/* camera direction */

const camX =
camera.position.x;

const camY =
camera.position.y;

const camZ =
camera.position.z;

/* dot */

const dot =

(x * camX) +
(y * camY) +
(z * camZ);

/* =========================
HIDE BACKSIDE
========================= */

if(dot < 0){

label.el.style.display =
'none';

return;

}

/* =========================
SHOW
========================= */

label.el.style.display =
'block';

/* offsets */

let offsetX = 0;

if(label.lng > 100){

offsetX = -25;

}

if(label.lng < -100){

offsetX = 30;

}

label.el.style.left =
(pos.x + offsetX) + 'px';

label.el.style.top =
pos.y + 'px';

});

/* next frame */

requestAnimationFrame(
animateLabels
);

}
