import { events } from '../data/events.js';
import { setRouteChapter, currentChapter } from './renderGlobe.js';

const left =
document.createElement('div');

left.style.position =
'absolute';

left.style.left =
'34px';

left.style.top =
'34px';

left.style.width =
'390px';

left.style.padding =
'28px';

left.style.boxSizing =
'border-box';

left.style.borderRadius =
'26px';

left.style.background =
'rgba(0,0,0,0.34)';

left.style.backdropFilter =
'blur(18px)';

left.style.color =
'white';

left.style.zIndex =
'10';

document.body.appendChild(
left
);

const right =
document.createElement('div');

right.style.position =
'absolute';

right.style.right =
'34px';

right.style.top =
'34px';

right.style.width =
'390px';

right.style.height =
'calc(100vh - 68px)';

right.style.overflowY =
'auto';

right.style.padding =
'28px';

right.style.boxSizing =
'border-box';

right.style.borderRadius =
'26px';

right.style.background =
'rgba(0,0,0,0.34)';

right.style.backdropFilter =
'blur(18px)';

right.style.color =
'white';

right.style.zIndex =
'10';

document.body.appendChild(
right
);

const chapterList = [
  { id:'all', label:'ALL' },
  { id:'howland', label:'HOWLAND' },
  { id:'franklin', label:'FRANKLIN' },
  { id:'gold_rush', label:'GOLD RUSH' }
];

let chapterIndex = chapterList.findIndex(c => c.id === currentChapter);
if (chapterIndex < 0) chapterIndex = 0;

const chapterButton = document.createElement('button');

chapterButton.textContent = `CHAPTER: ${chapterList[chapterIndex].label}`;

chapterButton.style.position = 'absolute';
chapterButton.style.right = '470px';
chapterButton.style.bottom = '34px';
chapterButton.style.zIndex = '40';
chapterButton.style.padding = '10px 16px';
chapterButton.style.borderRadius = '999px';
chapterButton.style.border = '1px solid rgba(255,255,255,0.24)';
chapterButton.style.background = 'rgba(0,0,0,0.46)';
chapterButton.style.color = 'white';
chapterButton.style.letterSpacing = '0.12em';
chapterButton.style.fontSize = '11px';
chapterButton.style.cursor = 'pointer';

chapterButton.addEventListener('click', () => {
  chapterIndex = (chapterIndex + 1) % chapterList.length;

  const nextChapter = chapterList[chapterIndex];

  chapterButton.textContent = `CHAPTER: ${nextChapter.label}`;

  setRouteChapter(nextChapter.id);
});

document.body.appendChild(chapterButton);

left.innerHTML =
`
<div style="
font-size:13px;
letter-spacing:3px;
opacity:0.45;
margin-bottom:26px;
">
WORLD EVENTS
</div>
`;

events

.filter(
e=>e.type !== 'person'
)

.forEach(event=>{

const colorMap = {

national_event:'#ffd166',
war:'#ff5c5c',
civilization:'#66e0ff',
trade:'#7cff91'

};

const color =

colorMap[event.type]
|| '#ffffff';

const card =
document.createElement('div');

card.style.padding =
'18px 0';

card.style.borderBottom =
'1px solid rgba(255,255,255,0.06)';

card.innerHTML =
`
<div style="
font-size:11px;
letter-spacing:2px;
color:${color};
margin-bottom:8px;
">
${event.year}
</div>

<div style="
font-size:21px;
font-weight:600;
margin-bottom:10px;
line-height:1.4;
">
${event.title}
</div>

<div style="
font-size:13px;
line-height:1.8;
opacity:0.68;
">
${event.description}
</div>
`;

left.appendChild(card);

});

right.innerHTML =
`
<div style="
font-size:34px;
font-weight:700;
margin-bottom:8px;
">
ジョン万次郎
</div>

<div style="
font-size:13px;
letter-spacing:2px;
color:#66e0ff;
margin-bottom:24px;
">
1827 — 1898
</div>

<img
src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Nakahama_Manjirō.jpg"

style="
width:100%;
border-radius:18px;
margin-bottom:24px;
"
/>

<div style="
font-size:14px;
line-height:1.9;
opacity:0.72;
margin-bottom:34px;
">

日本とアメリカ文明を結んだ幕末の航海者。

漂流からアメリカ渡航、
帰国後の開国支援まで、
文明接続の象徴的人物。

</div>
`;

events

.filter(
e=>e.type === 'person'
)

.forEach(event=>{

const item =
document.createElement('div');

item.style.marginBottom =
'24px';

item.innerHTML =
`
<div style="
font-size:11px;
letter-spacing:2px;
color:#66e0ff;
margin-bottom:6px;
">
${event.year}
</div>

<div style="
font-size:15px;
line-height:1.8;
opacity:0.82;
">
${event.description}
</div>
`;

right.appendChild(item);

});
/* =========================================
   P-LINK YEAR CURSOR LINE
   年代バー▽下・P-LINK用垂線
   2026-07-01
========================================= */

const pLinkYearLine = document.createElement('div');
pLinkYearLine.id = 'plink-year-line';

pLinkYearLine.style.position = 'fixed';
pLinkYearLine.style.width = '1px';
pLinkYearLine.style.height = '46px';
pLinkYearLine.style.background = 'rgba(102, 224, 255, 0.95)';
pLinkYearLine.style.boxShadow = '0 0 10px rgba(102, 224, 255, 0.85)';
pLinkYearLine.style.zIndex = '35';
pLinkYearLine.style.pointerEvents = 'none';
pLinkYearLine.style.display = 'none';

document.body.appendChild(pLinkYearLine);

let pLinkYearLineVisible = false;

function getCurrentTimelineYear() {
  const yearText =
    document.querySelector('#currentYear') ||
    document.querySelector('.current-year') ||
    document.querySelector('[data-current-year]');

  if (yearText) {
    const parsed = parseInt(yearText.textContent, 10);
    if (!Number.isNaN(parsed)) return parsed;
  }

  const range = document.querySelector('input[type="range"]');
  if (range) {
    const parsed = parseInt(range.value, 10);
    if (!Number.isNaN(parsed)) return parsed;
  }

  return 1850;
}

function updatePLinkYearLine() {
  const year = getCurrentTimelineYear();

  const minYear = 1800;
  const maxYear = 1900;
  const clampedYear = Math.max(minYear, Math.min(maxYear, year));
  const ratio = (clampedYear - minYear) / (maxYear - minYear);

  const range = document.querySelector('input[type="range"]');

  let left;
  let top;

  if (range) {
    const rect = range.getBoundingClientRect();
    left = rect.left + rect.width * ratio;
    top = rect.bottom + 8;
  } else {
    const timelineWidth = 520;
    const timelineLeft = (window.innerWidth - timelineWidth) / 2;
    left = timelineLeft + timelineWidth * ratio;
    top = window.innerHeight - 104;
  }

  pLinkYearLine.style.left = `${left}px`;
  pLinkYearLine.style.top = `${top}px`;
  pLinkYearLine.style.display = pLinkYearLineVisible ? 'block' : 'none';
}

function findPLinkButton() {
  return [...document.querySelectorAll('button')]
    .find(button => button.textContent.trim().includes('P-LINK'));
}

const pLinkButtonForYearLine = findPLinkButton();

if (pLinkButtonForYearLine) {
  pLinkButtonForYearLine.addEventListener('click', () => {
    pLinkYearLineVisible = !pLinkYearLineVisible;
    updatePLinkYearLine();
  });
}

document.addEventListener('input', updatePLinkYearLine);
document.addEventListener('change', updatePLinkYearLine);
window.addEventListener('resize', updatePLinkYearLine);

updatePLinkYearLine();
