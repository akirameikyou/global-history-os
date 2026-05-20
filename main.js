function animateLabels(){

labels.forEach(label=>{

const pos =
globe.getScreenCoords(
label.lat,
label.lng
);

/* globe内部の裏面判定 */

if(
!pos ||
pos.x < 0 ||
pos.x > window.innerWidth ||
pos.y < 0 ||
pos.y > window.innerHeight
){

label.el.style.display =
'none';

return;

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
