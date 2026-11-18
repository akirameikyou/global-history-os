// data/bread_lineage.js — 小麦とパン Focus（History OS）。生成：bread-focus-001/build_bread_data.py（手で直さない）。
// 出典調査：Codex REQUEST/REPORT_001（2026-11-15）＋ α の点検 REVIEW_001。確かさ confirmed=確定 / range=幅（学説が割れる・推定） / narrative=語り。
export const breadLineageNodes = [
 {
  "id": "urartu",
  "name": "Triticum urartu",
  "ploidy": 2,
  "genome": "A",
  "status": "known",
  "region": "西アジア",
  "note_ja": "野生二倍体Aゲノム供与系統。",
  "lat": 37.5,
  "lng": 40.5,
  "source": {
   "title": "Evolution and origin of bread wheat",
   "url": "https://academic.oup.com/plcell/article/34/7/2549/6580211",
   "kind": "peer_reviewed"
  }
 },
 {
  "id": "b_donor",
  "name": "未同定のBゲノム供与系統（Ae. speltoides近縁）",
  "ploidy": 2,
  "genome": "B",
  "status": "unknown",
  "region": "未確定",
  "note_ja": "Ae. speltoidesそのものと断定せず、近縁系統・供与種未発見として表す。",
  "lat": null,
  "lng": null,
  "source": {
   "title": "Origin and evolution of the bread wheat D genome",
   "url": "https://www.nature.com/articles/s41586-024-07808-z",
   "kind": "peer_reviewed"
  }
 },
 {
  "id": "wild_emmer",
  "name": "野生エンマー T. turgidum subsp. dicoccoides",
  "ploidy": 4,
  "genome": "AABB",
  "status": "known",
  "region": "肥沃な三日月地帯",
  "note_ja": "異質四倍体。交雑時期は約0.5〜0.8百万年前というゲノム推定。",
  "lat": 33.0,
  "lng": 35.8,
  "source": {
   "title": "Origin and evolution of the bread wheat D genome",
   "url": "https://www.nature.com/articles/s41586-024-07808-z",
   "kind": "peer_reviewed"
  }
 },
 {
  "id": "cult_emmer",
  "name": "栽培エンマー",
  "ploidy": 4,
  "genome": "AABB",
  "status": "known",
  "region": "西アジア",
  "note_ja": "野生エンマーからの栽培化。年代・経路は地域差のある過程。",
  "lat": null,
  "lng": null,
  "source": {
   "title": "Evolution and origin of bread wheat",
   "url": "https://academic.oup.com/plcell/article/34/7/2549/6580211",
   "kind": "peer_reviewed"
  }
 },
 {
  "id": "durum",
  "name": "デュラム系小麦",
  "ploidy": 4,
  "genome": "AABB",
  "status": "known",
  "region": "西アジア〜地中海",
  "note_ja": "自由脱粒性四倍体群。特定品種の成立年は置かない。",
  "lat": null,
  "lng": null,
  "source": {
   "title": "Evolution and origin of bread wheat",
   "url": "https://academic.oup.com/plcell/article/34/7/2549/6580211",
   "kind": "peer_reviewed"
  }
 },
 {
  "id": "tauschii",
  "name": "Aegilops tauschii",
  "ploidy": 2,
  "genome": "D",
  "status": "known",
  "region": "カスピ海沿岸〜コーカサス",
  "note_ja": "パン小麦Dゲノム供与種。複数の集団・系統が寄与。",
  "lat": 38.2,
  "lng": 48.3,
  "source": {
   "title": "Origin and evolution of the bread wheat D genome",
   "url": "https://www.nature.com/articles/s41586-024-07808-z",
   "kind": "peer_reviewed"
  }
 },
 {
  "id": "bread_wheat",
  "name": "パン小麦 T. aestivum",
  "ploidy": 6,
  "genome": "AABBDD",
  "status": "known",
  "region": "カスピ海南岸など西アジア（推定）",
  "note_ja": "起源は約8,000〜11,000年前などの幅を持つ。",
  "lat": 36.45,
  "lng": 52.2,
  "source": {
   "title": "Origin and evolution of the bread wheat D genome",
   "url": "https://www.nature.com/articles/s41586-024-07808-z",
   "kind": "peer_reviewed"
  }
 },
 {
  "id": "wild_einkorn",
  "name": "野生一粒小麦系統",
  "ploidy": 2,
  "genome": "AmAm または A",
  "status": "known",
  "region": "肥沃な三日月地帯",
  "note_ja": "栽培一粒小麦の野生祖先系統。パン小麦のA供与種と同一視しない。",
  "lat": 37.7,
  "lng": 39.6,
  "source": {
   "title": "Einkorn genomics sheds light on history of the oldest domesticated wheat",
   "url": "https://www.nature.com/articles/s41586-023-06389-7",
   "kind": "peer_reviewed"
  }
 },
 {
  "id": "cult_einkorn",
  "name": "栽培一粒小麦 T. monococcum",
  "ploidy": 2,
  "genome": "AmAm",
  "status": "known",
  "region": "南西アジア起源・後に欧州等",
  "note_ja": "パン小麦とは別枝。",
  "lat": null,
  "lng": null,
  "source": {
   "title": "Einkorn genomics sheds light on history of the oldest domesticated wheat",
   "url": "https://www.nature.com/articles/s41586-023-06389-7",
   "kind": "peer_reviewed"
  }
 },
 {
  "id": "spelt",
  "name": "スペルト（六倍体小麦群）",
  "ploidy": 6,
  "genome": "AABBDD",
  "status": "known",
  "region": "西ユーラシア",
  "note_ja": "六倍体の栽培群。独立した野生祖先ノードにはしない。",
  "lat": null,
  "lng": null,
  "source": {
   "title": "Evolution and origin of bread wheat",
   "url": "https://academic.oup.com/plcell/article/34/7/2549/6580211",
   "kind": "peer_reviewed"
  }
 }
];
export const breadLineageCross = [
 {
  "id": "cross_ab",
  "name": "T. urartu + Bゲノム供与系統 → 野生エンマー",
  "parents": "T. urartu + Bゲノム供与系統",
  "child": "野生エンマー AABB",
  "from": -800000,
  "to": -500000,
  "label": "約0.5〜0.8百万年前",
  "region": "正確な場所未確定",
  "note_ja": "B供与系統はAe. speltoides近縁だが、正確な供与種は未同定。",
  "note": "",
  "source": {
   "title": "Origin and evolution of the bread wheat D genome",
   "url": "https://www.nature.com/articles/s41586-024-07808-z",
   "kind": "peer_reviewed"
  }
 },
 {
  "id": "cross_emmer_dom",
  "name": "野生エンマー → 栽培エンマー",
  "parents": "野生エンマー AABB",
  "child": "栽培エンマー AABB",
  "from": -9000,
  "to": -7000,
  "label": "紀元前約9,000〜7,000年",
  "region": "西アジア複数地域",
  "note_ja": "非脱粒性などの形質固定には長期過程・地域差がある。",
  "note": "αが年代を ev_emmer_domesticated に合わせた。",
  "source": {
   "title": "Evolution and origin of bread wheat",
   "url": "https://academic.oup.com/plcell/article/34/7/2549/6580211",
   "kind": "peer_reviewed"
  }
 },
 {
  "id": "cross_durum",
  "name": "栽培エンマー系統 → デュラム系",
  "parents": "栽培エンマー系統",
  "child": "自由脱粒性デュラム系 AABB",
  "from": -8000,
  "to": -4000,
  "label": "年代は未確定（新石器時代以降）",
  "region": "西アジア〜地中海東部",
  "note_ja": "進化的派生は支持されるが、単一年を確定しない。",
  "note": "",
  "source": {
   "title": "Evolution and origin of bread wheat",
   "url": "https://academic.oup.com/plcell/article/34/7/2549/6580211",
   "kind": "peer_reviewed"
  }
 },
 {
  "id": "cross_hexaploid",
  "name": "栽培四倍体 AABB + Ae. tauschii DD → パン小麦 AABBDD",
  "parents": "栽培四倍体 AABB + Ae. tauschii DD",
  "child": "パン小麦 AABBDD",
  "from": -9000,
  "to": -6000,
  "label": "約8,000〜11,000年前（論文記載）",
  "region": "カスピ海南岸を含む推定域",
  "note_ja": "Nature 2024はカスピ海南岸を有力域とまとめる。起源モデルには年代幅がある。",
  "note": "",
  "source": {
   "title": "Origin and evolution of the bread wheat D genome",
   "url": "https://www.nature.com/articles/s41586-024-07808-z",
   "kind": "peer_reviewed"
  }
 },
 {
  "id": "einkorn_branch",
  "name": "野生一粒小麦 → 栽培一粒小麦",
  "parents": "野生一粒小麦",
  "child": "栽培一粒小麦",
  "from": -10000,
  "to": -7000,
  "label": "年代・場所に幅",
  "region": "南西アジア",
  "note_ja": "パン小麦のAABBDD系統とは別枝として表示。",
  "note": "",
  "source": {
   "title": "Einkorn genomics sheds light on history of the oldest domesticated wheat",
   "url": "https://www.nature.com/articles/s41586-023-06389-7",
   "kind": "peer_reviewed"
  }
 }
];
