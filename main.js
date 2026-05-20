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
CAMERA
========================= */

const cam =
globe.camera().position;

/* lat lng */

const phi =
(90 - label.lat) *
Math.PI / 180;

const theta =
(label.lng) *
Math.PI / 180;

/* sphere position */

const x =
Math.sin(phi) *
Math.cos(theta);

const y =
Math.cos(phi);

const z =
-Math.sin(phi) *
Math.sin(theta);

/* dot */

const dot =

(x * cam.x) +
(y * cam.y) +
(z * cam.z);

/* =========================
VISIBILITY
========================= */

/*
ここ重要

0 = 地平線まで表示
0.25 = 少し手前
0.45 = 表側のみ
*/

if(dot < 0.45){

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

/* next */

requestAnimationFrame(
animateLabels
);

}
