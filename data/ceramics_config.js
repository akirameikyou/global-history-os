// data/ceramics_config.js — 焼き物 Focus（History OS）。生成：ceramics-focus-001/build_ceramics_data.py（手で直さない）。
// 出典調査：Codex REPORT_001・002（2026-11-20）＋ α の点検 REVIEW_001・002。確かさ confirmed=確定 / range=幅 / narrative=語り。
export const ceramicsChapters = [
 {
  "id": 1,
  "name": "火と土",
  "sub": "容器としての土器が生まれる",
  "from": -30000,
  "to": -8000,
  "tick": 2000,
  "tickLabel": "2000年"
 },
 {
  "id": 2,
  "name": "窯と高温",
  "sub": "轆轤・窯・釉",
  "from": -8000,
  "to": 900,
  "tick": 500,
  "tickLabel": "500年"
 },
 {
  "id": 3,
  "name": "白い石",
  "sub": "磁器と、茶の器",
  "from": 900,
  "to": 1500,
  "tick": 50,
  "tickLabel": "50年"
 },
 {
  "id": 4,
  "name": "海の道",
  "sub": "陶工の移動・有田・VOC",
  "from": 1500,
  "to": 1700,
  "tick": 10,
  "tickLabel": "10年"
 },
 {
  "id": 5,
  "name": "写される白",
  "sub": "ヨーロッパの自製と産業",
  "from": 1700,
  "to": 1900,
  "tick": 10,
  "tickLabel": "10年"
 },
 {
  "id": 6,
  "name": "器から素材へ",
  "sub": "量産・デザイン・ファインセラミックス",
  "from": 1900,
  "to": 2027,
  "tick": 10,
  "tickLabel": "10年"
 }
];
export const ceramicsLenses = [
 {
  "id": "raw",
  "name_ja": "原料",
  "sub_ja": "土の縛り",
  "color": "#c9a46a",
  "ground": "rock",
  "flow": null,
  "shades_ja": [
   "様式",
   "人物",
   "年"
  ]
 },
 {
  "id": "fire",
  "name_ja": "火",
  "sub_ja": "温度と燃料",
  "color": "#ff8a5c",
  "ground": null,
  "flow": null,
  "shades_ja": [
   "器の形",
   "運ぶこと"
  ]
 },
 {
  "id": "copy",
  "name_ja": "写し",
  "sub_ja": "模倣の連鎖",
  "color": "#9fb8ff",
  "ground": "none",
  "flow": null,
  "shades_ja": [
   "原料",
   "地質"
  ]
 },
 {
  "id": "carry",
  "name_ja": "運ぶ",
  "sub_ja": "重さと割れもの",
  "color": "#66d1c9",
  "ground": "relief",
  "flow": "current",
  "shades_ja": [
   "様式",
   "素地の種類"
  ]
 }
];
export const ceramicsStrands = {
 "firing": "焼成とその展開",
 "tech": "発見と技術",
 "design": "デザインと文化",
 "logistics": "物流",
 "ai": "AIの視点"
};
