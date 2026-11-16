// data/bread_events.js — 小麦とパン Focus（History OS）。生成：bread-focus-001/build_bread_data.py（手で直さない）。
// 出典調査：Codex REQUEST/REPORT_001（2026-11-15）＋ α の点検 REVIEW_001。確かさ confirmed=確定 / range=幅（学説が割れる・推定） / narrative=語り。
export const breadEvents = [
 {
  "id": "ev_shubayqa",
  "type": "event",
  "title_ja": "シュバイカ1のパン状食品",
  "clock": "bread",
  "when": {
   "from": -12450,
   "to": -12350,
   "label": "約14,400年前（較正年代）"
  },
  "known": {
   "year": 2018,
   "label": "炭化食品残留物の顕微鏡・植物遺存体分析をPNASで報告"
  },
  "confidence": "confirmed",
  "lenses": [
   "mill",
   "table"
  ],
  "field": [
   "archaeology",
   "archaeobotany"
  ],
  "place": {
   "name_ja": "シュバイカ1遺跡（現ヨルダン北東部)",
   "lat": 32.33,
   "lng": 37.23,
   "precision": "site"
  },
  "chapter": 1,
  "kitchen_ja": "畑で麦を育てるより何千年も前に、野の草の実を挽いて焼いた「パンのようなもの」が見つかっています。",
  "research": {
   "fact_ja": "狩猟採集民の遺跡から24点の炭化食品残留物を分析し、野生穀物などを使ったパン状食品を報告。農耕の成立より少なくとも約4千年早い。",
   "unknown_ja": "成分の一部は小麦以外の草本や塊茎を含む。現代的なパンと同一視できるかは定義上の問題が残る。"
  },
  "sources": [
   {
    "title": "Archaeobotanical evidence reveals the origins of bread 14,400 years ago",
    "url": "https://doi.org/10.1073/PNAS.1801071115",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "αが確かさを直した：証拠は査読論文で確か。年代の不確かさは when の幅で表す。",
  "links": null
 },
 {
  "id": "ev_natufian",
  "type": "event",
  "title_ja": "ナトゥーフ期の定住・植物利用",
  "clock": "grass",
  "when": {
   "from": -12500,
   "to": -9500,
   "label": "紀元前約12,500〜9,500年"
  },
  "known": {
   "year": 2016,
   "label": "レバントの考古植物学資料の地域比較"
  },
  "confidence": "range",
  "lenses": [
   "plant",
   "power"
  ],
  "field": [
   "archaeology",
   "archaeobotany"
  ],
  "place": {
   "name_ja": "南レバント",
   "lat": 31.5,
   "lng": 35.5,
   "precision": "region"
  },
  "chapter": 1,
  "kitchen_ja": "農耕の前から、野の麦を集めて暮らす村がありました。「農耕→定住」の順番とは限りません。",
  "research": {
   "fact_ja": "狩猟採集社会に定住的集落や野生穀物利用が見られ、農耕・定住・食加工を単線の順序で並べられない。",
   "unknown_ja": "各集落の定住度・植物利用は同一ではない。"
  },
  "sources": [
   {
    "title": "Regional diversity on the timing for cereal cultivation and domestication",
    "url": "https://www.pnas.org/content/pnas/113/49/14001.full.pdf",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "αがラベルを直した：from/to は紀元前の値。",
  "links": null
 },
 {
  "id": "ev_tur_domestication",
  "type": "event",
  "title_ja": "一粒小麦栽培化地のゲノム推定",
  "clock": "grass",
  "when": {
   "from": -8050,
   "to": -6050,
   "label": "約10,000〜8,000年前（概略）"
  },
  "known": {
   "year": 1997,
   "label": "野生・栽培一粒小麦のDNA指紋と近隣遺跡を比較"
  },
  "confidence": "range",
  "lenses": [
   "plant"
  ],
  "field": [
   "genetics",
   "archaeobotany"
  ],
  "place": {
   "name_ja": "カラジャ山地周辺（現在のトルコ南東部)",
   "lat": 37.5,
   "lng": 39.0,
   "precision": "region"
  },
  "chapter": 2,
  "kitchen_ja": "遺伝子を比べると、育てられた一粒小麦は、トルコ南東部の山の野生の一粒小麦に近いことがわかりました。",
  "research": {
   "fact_ja": "Heunらは栽培一粒小麦の起源をカラジャ山地近傍と推定した。これは野生一粒小麦の系統に関する推定で、パン小麦の成立地を直接確定するものではない。",
   "unknown_ja": "研究後のゲノム解析を踏まえた再評価が必要。"
  },
  "sources": [
   {
    "title": "Site of Einkorn Wheat Domestication Identified by DNA Fingerprinting",
    "url": "https://www.science.org/doi/10.1126/science.278.5341.1312",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "αが単位を直した：「約10,000〜8,000年前」を西暦に換算。原論文の年代表記は要確認。",
  "links": null
 },
 {
  "id": "ev_cultivation",
  "type": "event",
  "title_ja": "野生穀物の栽培化と非脱粒性",
  "clock": "grass",
  "when": {
   "from": -9650,
   "to": -7050,
   "label": "約11,600〜9,000年前（較正年代）"
  },
  "known": {
   "year": 2007,
   "label": "考古植物遺存体における脱粒性形質の比率変化"
  },
  "confidence": "range",
  "lenses": [
   "plant",
   "power"
  ],
  "field": [
   "archaeobotany",
   "geography"
  ],
  "place": {
   "name_ja": "南レバント〜上ユーフラテス",
   "lat": 34.0,
   "lng": 38.0,
   "precision": "region"
  },
  "chapter": 2,
  "kitchen_ja": "野生の麦は熟すと実が落ちます。落ちない穂が畑で増えていくのに、長い時間がかかりました。",
  "research": {
   "fact_ja": "非脱粒性は収穫を容易にする一方、自然散布を妨げる。野生型から非脱粒性の固定まで長い過程があったとする考古植物学モデルがある。",
   "unknown_ja": "比率の解釈、遺跡ごとの差、栽培期間の長さには議論がある。"
  },
  "sources": [
   {
    "title": "Contrasting Patterns in Crop Domestication and Domestication Rates",
    "url": "https://doi.org/10.1093/aob/mcm048",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "αが単位を直した：ラベルの「約11,600〜9,000年前」(較正年代) を西暦に換算（1950年基準）。",
  "links": null
 },
 {
  "id": "ev_slow_domestication",
  "type": "event",
  "title_ja": "栽培化は長期・地域差のある過程",
  "clock": "grass",
  "when": {
   "from": -9550,
   "to": -5050,
   "label": "約11,500〜7,000年前（地域差）"
  },
  "known": {
   "year": 2016,
   "label": "複数地域の作物遺存体の年代比較"
  },
  "confidence": "range",
  "lenses": [
   "plant"
  ],
  "field": [
   "archaeobotany",
   "geography"
  ],
  "place": {
   "name_ja": "南西アジア",
   "lat": 35.0,
   "lng": 38.0,
   "precision": "region"
  },
  "chapter": 2,
  "kitchen_ja": "麦が「畑の作物」になるのは一度の発明ではなく、場所ごとに違う長い歩みでした。",
  "research": {
   "fact_ja": "野生種の栽培、形質変化、栽培型の出現に地域差があり、栽培化は長い過程として扱われる。",
   "unknown_ja": "特定の一地点・一時点に始まりを限定することはできない。"
  },
  "sources": [
   {
    "title": "Regional diversity on the timing for cereal cultivation and domestication",
    "url": "https://www.pnas.org/content/pnas/113/49/14001.full.pdf",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "αが単位を直した：「約11,500〜7,000年前」を西暦に換算。",
  "links": null
 },
 {
  "id": "ev_wild_emmer",
  "type": "event",
  "title_ja": "野生エンマー（AABB）の成立",
  "clock": "grass",
  "when": {
   "from": -800000,
   "to": -500000,
   "label": "約0.8〜0.5百万年前"
  },
  "known": {
   "year": 2024,
   "label": "ゲノム比較から異質四倍体の祖先関係を推定"
  },
  "confidence": "range",
  "lenses": [
   "plant"
  ],
  "field": [
   "genetics"
  ],
  "place": {
   "name_ja": "南西アジア（正確な地点未確定)",
   "lat": 33.0,
   "lng": 36.0,
   "precision": "region"
  },
  "chapter": 0,
  "kitchen_ja": "二種類の野生の草が交わって、四倍体の野生エンマー小麦が生まれました。片方の親はまだ見つかっていません。",
  "research": {
   "fact_ja": "T. urartu系統のAゲノムと未同定Bゲノム供与系統の交雑で四倍体野生エンマーが成立したという系統モデルが支持される。",
   "unknown_ja": "交雑の正確な時期・場所、B供与系統の種同定は未確定。"
  },
  "sources": [
   {
    "title": "Origin and evolution of the bread wheat D genome",
    "url": "https://www.nature.com/articles/s41586-024-07808-z",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_emmer_domesticated",
  "type": "event",
  "title_ja": "栽培エンマーの成立",
  "clock": "field",
  "when": {
   "from": -9000,
   "to": -7000,
   "label": "紀元前約9,000〜7,000年（幅広い考古学的文脈）"
  },
  "known": {
   "year": 2022,
   "label": "栽培型形質を示す遺存体とゲノム研究の総合"
  },
  "confidence": "range",
  "lenses": [
   "plant",
   "power"
  ],
  "field": [
   "archaeobotany",
   "genetics"
  ],
  "place": {
   "name_ja": "肥沃な三日月地帯の複数地域",
   "lat": 36.5,
   "lng": 39.5,
   "precision": "region"
  },
  "chapter": 2,
  "kitchen_ja": "野生エンマーから、人が育てる栽培エンマーが生まれました。",
  "research": {
   "fact_ja": "栽培エンマーは野生エンマーから人為的選択を経て成立した。初期の栽培・形質変化は地域ごとに異なり、単一の始点として確定できない。",
   "unknown_ja": "特定遺跡・年代を「最初」とする根拠は未確認。"
  },
  "sources": [
   {
    "title": "Evolution and origin of bread wheat",
    "url": "https://academic.oup.com/plcell/article/34/7/2549/6580211",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "αがラベルを直した：from/to は紀元前の値。",
  "links": null
 },
 {
  "id": "ev_durum",
  "type": "event",
  "title_ja": "自由脱粒性四倍体（デュラム系）の成立",
  "clock": "grass",
  "when": {
   "from": -8000,
   "to": -5000,
   "label": "新石器時代以降、年代幅は未確定"
  },
  "known": {
   "year": 2022,
   "label": "倍数性・形態・栽培史の総説"
  },
  "confidence": "range",
  "lenses": [
   "plant",
   "mill"
  ],
  "field": [
   "genetics",
   "archaeobotany"
  ],
  "place": {
   "name_ja": "西アジア〜地中海東部",
   "lat": 35.0,
   "lng": 36.0,
   "precision": "region"
  },
  "chapter": 2,
  "kitchen_ja": "パスタに使われるデュラム小麦の仲間は、エンマーの系統から出てきました。",
  "research": {
   "fact_ja": "デュラム系の自由脱粒性四倍体はエンマー系統から派生した小麦群に含まれる。",
   "unknown_ja": "この調査では単一品種の成立年を示せる一次資料を特定できず、厳密な年幅は未確認。"
  },
  "sources": [
   {
    "title": "Evolution and origin of bread wheat",
    "url": "https://academic.oup.com/plcell/article/34/7/2549/6580211",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_bread_wheat",
  "type": "event",
  "title_ja": "パン小麦（AABBDD）の成立",
  "clock": "grass",
  "when": {
   "from": -9000,
   "to": -6000,
   "label": "約11,000〜8,000年前（広い推定幅）"
  },
  "known": {
   "year": 2024,
   "label": "ゲノム系統解析と考古学的年代の統合"
  },
  "confidence": "range",
  "lenses": [
   "plant",
   "route"
  ],
  "field": [
   "genetics",
   "geography"
  ],
  "place": {
   "name_ja": "カスピ海南岸を含む西アジア（推定)",
   "lat": 37.0,
   "lng": 50.0,
   "precision": "region"
  },
  "chapter": 2,
  "kitchen_ja": "育てていた四倍体の小麦に、野の草タルホコムギが交わって、いまのパン小麦が生まれました。",
  "research": {
   "fact_ja": "四倍体栽培小麦とAe. tauschiiの交雑で六倍体パン小麦が成立した。研究総説は約8,000〜11,000年前などの幅を示す。",
   "unknown_ja": "交雑の場所・回数・年代には学説差があり、カスピ海南岸は推定域である。"
  },
  "sources": [
   {
    "title": "Origin and evolution of the bread wheat D genome",
    "url": "https://www.nature.com/articles/s41586-024-07808-z",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "αがラベルを直した：from/to（紀元前9,000〜6,000年）と合わせた。",
  "links": null
 },
 {
  "id": "ev_spelt",
  "type": "event",
  "title_ja": "スペルトの系統的位置",
  "clock": "grass",
  "when": {
   "from": -5000,
   "to": 0,
   "label": "成立年代は特定できず（古代に栽培）"
  },
  "known": {
   "year": 2022,
   "label": "ゲノム系統・古代穀物研究の総説"
  },
  "confidence": "range",
  "lenses": [
   "plant"
  ],
  "field": [
   "genetics",
   "archaeobotany"
  ],
  "place": {
   "name_ja": "西ユーラシア（広域)",
   "lat": null,
   "lng": null,
   "precision": "region"
  },
  "chapter": 2,
  "kitchen_ja": "スペルト小麦はパン小麦と同じ六倍体の仲間です。",
  "research": {
   "fact_ja": "スペルトは六倍体小麦の一群で、野生一粒小麦と同列の独立祖先種として置くべきではない。",
   "unknown_ja": "地域ごとの起源・交雑史は一様でない。"
  },
  "sources": [
   {
    "title": "Evolution and origin of bread wheat",
    "url": "https://academic.oup.com/plcell/article/34/7/2549/6580211",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_einkorn_branch",
  "type": "event",
  "title_ja": "一粒小麦はパン小麦と別の枝",
  "clock": "grass",
  "when": {
   "from": -10000,
   "to": 0,
   "label": "栽培化の年代は地域差あり"
  },
  "known": {
   "year": 2023,
   "label": "野生・栽培一粒小麦のゲノム比較"
  },
  "confidence": "range",
  "lenses": [
   "plant"
  ],
  "field": [
   "genetics"
  ],
  "place": {
   "name_ja": "肥沃な三日月地帯",
   "lat": 37.0,
   "lng": 39.5,
   "precision": "region"
  },
  "chapter": 1,
  "kitchen_ja": "一粒小麦は、パン小麦の直接のご先祖ではなく、別の枝です。",
  "research": {
   "fact_ja": "野生・栽培一粒小麦は二倍体の系統で、パン小麦のAABBDD成立に直接つながる親系統とは別に扱う。",
   "unknown_ja": "T. urartuと野生一粒小麦は近縁だが異なる系統。"
  },
  "sources": [
   {
    "title": "Einkorn genomics sheds light on history of the oldest domesticated wheat",
    "url": "https://www.nature.com/articles/s41586-023-06389-7",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_egypt_breadbeer",
  "type": "event",
  "title_ja": "古代エジプトのパンとビール製造",
  "clock": "bread",
  "when": {
   "from": -3000,
   "to": -1000,
   "label": "紀元前3千年紀〜紀元前1千年紀"
  },
  "known": {
   "year": 1996,
   "label": "残存パン・ビール試料の顕微鏡分析、図像・遺構"
  },
  "confidence": "range",
  "lenses": [
   "ferment",
   "mill",
   "table"
  ],
  "field": [
   "archaeology",
   "food_science"
  ],
  "place": {
   "name_ja": "ナイル流域",
   "lat": 26.0,
   "lng": 32.0,
   "precision": "region"
  },
  "chapter": 3,
  "kitchen_ja": "古代エジプトでは、パンとビールが暮らしの中心にありました。残ったパンからエンマー小麦が見つかっています。",
  "research": {
   "fact_ja": "パン・ビールの遺物、図像、製造設備が確認され、穀物加工は日常生活と供給に重要だった。残存パン分析ではエンマーが確認される。",
   "unknown_ja": "配合や工程は時代・場所ごとに異なる。パンがビール原料だったという単純説には異論がある。"
  },
  "sources": [
   {
    "title": "Investigation of Ancient Egyptian Baking and Brewing Methods",
    "url": "https://pubmed.ncbi.nlm.nih.gov/8662535/",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   },
   {
    "title": "An archaeological study of baking and bread in New Kingdom Egypt",
    "url": "https://www.repository.cam.ac.uk/items/900e5220-60cf-47b3-b640-3126121cf5cf",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_pompeii",
  "type": "event",
  "title_ja": "ポンペイの製パン所と石臼",
  "clock": "bread",
  "when": {
   "from": -100,
   "to": 79,
   "label": "紀元前1世紀〜西暦79年"
  },
  "known": {
   "year": 1748,
   "label": "ポンペイ遺跡の発掘・建築記録"
  },
  "confidence": "confirmed",
  "lenses": [
   "mill",
   "power"
  ],
  "field": [
   "archaeology"
  ],
  "place": {
   "name_ja": "ポンペイ（現イタリア)",
   "lat": 40.75,
   "lng": 14.49,
   "precision": "site"
  },
  "chapter": 3,
  "kitchen_ja": "火山に埋もれたポンペイの町に、石臼とかまどのあるパン屋が残っています。",
  "research": {
   "fact_ja": "遺跡には製粉用回転石臼やパン焼き設備を備えた製パン所が確認される。噴火で埋没した都市の食料生産を示す物証である。",
   "unknown_ja": "個別店の営業期間や製品の流通先は施設ごとの検討が必要。"
  },
  "sources": [
   {
    "title": "Pompeii Online: Bakery of Popidius Priscus",
    "url": "https://www.pompeionline.net/en/buildings-and-places/regio-vii/bakery-of-popidius-priscus-vii-2-22",
    "kind": "institution",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_annona",
  "type": "event",
  "title_ja": "ローマの穀物配給（アンノナ）",
  "clock": "bread",
  "when": {
   "from": -123,
   "to": 400,
   "label": "紀元前123年以降、制度変化あり"
  },
  "known": {
   "year": 1990,
   "label": "ローマ共和政・帝政期の法令、碑文、行政史料の研究"
  },
  "confidence": "range",
  "lenses": [
   "power",
   "route"
  ],
  "field": [
   "history"
  ],
  "place": {
   "name_ja": "ローマ市",
   "lat": 41.9,
   "lng": 12.5,
   "precision": "city"
  },
  "chapter": 3,
  "kitchen_ja": "古代ローマでは、都市に穀物を届けて配ることが政治の大仕事でした。",
  "research": {
   "fact_ja": "ローマでは穀物供給・配給が都市統治の重要な制度課題だった。対象や形式は時代ごとに変化し、必ずしも焼いたパンを直接配った制度ではない。",
   "unknown_ja": "アンノナを単一の一貫制度として記述しない。"
  },
  "sources": [
   {
    "title": "Food supply, Roman (Oxford Research Encyclopedias)",
    "url": "https://academic.oup.com/edited-volume/61673/chapter-abstract/565401196",
    "kind": "book",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_watermill",
  "type": "event",
  "title_ja": "水力製粉の大規模化（バルベガル）",
  "clock": "field",
  "when": {
   "from": 100,
   "to": 250,
   "label": "西暦2世紀"
  },
  "known": {
   "year": 2018,
   "label": "水車複合施設の考古学・環境分析"
  },
  "confidence": "range",
  "lenses": [
   "mill",
   "power"
  ],
  "field": [
   "archaeology",
   "history"
  ],
  "place": {
   "name_ja": "バルベガル（現フランス)",
   "lat": 43.69,
   "lng": 4.69,
   "precision": "site"
  },
  "chapter": 3,
  "kitchen_ja": "水車をいくつも並べて粉を挽く、大きな製粉所がローマ時代にありました。",
  "research": {
   "fact_ja": "バルベガルには複数の水車を連ねたローマ期の製粉施設があり、動力利用の規模を示す。論文は古代社会の初期の産業的水力利用施設と評価する。",
   "unknown_ja": "稼働期間や実際の生産量の推定には不確実性がある。"
  },
  "sources": [
   {
    "title": "The second century CE Roman watermills of Barbegal",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6124920/",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_windmill",
  "type": "event",
  "title_ja": "風車の製粉利用の広がり",
  "clock": "field",
  "when": {
   "from": 1100,
   "to": 1300,
   "label": "中世後期（地域ごとの差）"
  },
  "known": {
   "year": 2023,
   "label": "発掘された風車遺構と木材年代研究"
  },
  "confidence": "range",
  "lenses": [
   "mill"
  ],
  "field": [
   "archaeology",
   "history"
  ],
  "place": {
   "name_ja": "北西ヨーロッパ（地域差)",
   "lat": 52.0,
   "lng": 5.0,
   "precision": "region"
  },
  "chapter": 3,
  "kitchen_ja": "水の少ない土地では、風車で粉を挽くようになりました。",
  "research": {
   "fact_ja": "中世後期には水力・風力を用いる製粉設備が各地で使われ、風車は水力条件に恵まれない地域を補った。",
   "unknown_ja": "世界初や単一の発明年を示す資料ではない。"
  },
  "sources": [
   {
    "title": "What do dendrochronology and other timber-dating methods tell us about English post mills?",
    "url": "https://www.tandfonline.com/doi/full/10.1080/03055477.2023.2253459",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_pao_japan",
  "type": "event",
  "title_ja": "ポルトガル語 pão と日本語「パン」",
  "clock": "bread",
  "when": {
   "from": 1543,
   "to": 1600,
   "label": "16世紀後半（接触開始の目安）"
  },
  "known": {
   "year": 1543,
   "label": "日葡交流史および語源資料"
  },
  "confidence": "range",
  "lenses": [
   "route",
   "table"
  ],
  "field": [
   "history",
   "linguistics"
  ],
  "place": {
   "name_ja": "種子島・日本",
   "lat": 30.6,
   "lng": 131.0,
   "precision": "region"
  },
  "chapter": 4,
  "kitchen_ja": "日本語の「パン」は、ポルトガル語の pão から来ています。",
  "research": {
   "fact_ja": "日本語「パン」はポルトガル語 pão に由来すると公的な日葡交流史資料が説明する。1543年はポルトガル人の種子島漂着年として記録される。",
   "unknown_ja": "漂着年からパンの製造・摂取開始年は断定できない。初期の流通内容は未確認。"
  },
  "sources": [
   {
    "title": "日・葡関係情報：日葡交流史",
    "url": "https://www.pt.emb-japan.go.jp/jp/japao_portugal/koryu.html",
    "kind": "institution",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_egawa",
  "type": "event",
  "title_ja": "江川英龍の兵糧パン製法",
  "clock": "bread",
  "when": {
   "from": 1842,
   "to": 1843,
   "label": "天保13年（1842）〜天保14年（1843）; 4月12日説は要注意"
  },
  "known": {
   "year": 2014,
   "label": "江川家文書の書状・製法書を再検証した研究"
  },
  "confidence": "range",
  "lenses": [
   "power",
   "mill"
  ],
  "field": [
   "history"
  ],
  "place": {
   "name_ja": "韮山（現静岡県伊豆の国市)",
   "lat": 35.1,
   "lng": 138.95,
   "precision": "site"
  },
  "chapter": 4,
  "kitchen_ja": "伊豆・韮山の代官、江川英龍が兵士の携帯食として兵糧パンを作りました。製法書が今も残っています。",
  "research": {
   "fact_ja": "江川家文書には兵糧パンの書状と製法書があり、大学紀要論文は史料を再検討し復元実験を行った。4月12日を初焼きの日とする通説は後世の記念日説明に依存する。",
   "unknown_ja": "「1842年4月12日初焼き」は確定できない。現存レシピの一部は年号が特定されない。"
  },
  "sources": [
   {
    "title": "江川家文書所蔵の兵糧パン史料を再検証した研究",
    "url": "https://www.ir.nihon-u.ac.jp/pdf/research/publication/03_38.pdf",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": {
   "person_qid": "Q366267",
   "person_ja": "江川英龍",
   "cross_ja": "北斎（1849年没）がまだ生きていた頃のこと。のちに万次郎がこの人の配下になる。",
   "focus": [
    "hokusai",
    "manjiro"
   ]
  }
 },
 {
  "id": "ev_manjiro_egawa",
  "type": "event",
  "title_ja": "中浜万次郎が江川代官の手付となる",
  "clock": "bread",
  "when": {
   "from": 1853,
   "to": 1853,
   "label": "1853年（幕府出仕後）"
  },
  "known": {
   "year": 2010,
   "label": "国立歴史民俗博物館所蔵書簡の解説と伝記目録"
  },
  "confidence": "range",
  "lenses": [
   "route",
   "power"
  ],
  "field": [
   "history"
  ],
  "place": {
   "name_ja": "江戸・韮山（役務関係)",
   "lat": 35.68,
   "lng": 139.76,
   "precision": "region"
  },
  "chapter": 4,
  "kitchen_ja": "アメリカから帰った万次郎は、幕府に仕えて江川英龍の配下になりました。パンを焼いた人と、万次郎が出会っています。",
  "research": {
   "fact_ja": "国立歴史民俗博物館の書簡解説は、万次郎が江川太郎左衛門の配下となり幕府に仕えたと記す。昭和館所蔵伝記の目次にも手付となった旨がある。",
   "unknown_ja": "任命日・任務開始日を示す原命令書の確認は必要。"
  },
  "sources": [
   {
    "title": "新納嘉藤次書簡 大久保利通宛（国立歴史民俗博物館 khirin）",
    "url": "https://khirin.rekihaku.ac.jp/en/pid/nmjh_collection/H-1316-101-9.html",
    "kind": "primary",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": {
   "person_qid": "Q366267",
   "person_ja": "江川英龍",
   "cross_ja": "パンを焼いた代官と、海を渡って帰った万次郎が、ここで交わる。",
   "focus": [
    "manjiro"
   ]
  }
 },
 {
  "id": "ev_pasteur",
  "type": "event",
  "title_ja": "パスツールの発酵研究",
  "clock": "bread",
  "when": {
   "from": 1857,
   "to": 1862,
   "label": "1857〜1862年"
  },
  "known": {
   "year": 1857,
   "label": "発酵に関する研究を開始した年と研究機関の年表"
  },
  "confidence": "confirmed",
  "lenses": [
   "ferment"
  ],
  "field": [
   "microbiology",
   "history"
  ],
  "place": {
   "name_ja": "リール／パリ",
   "lat": 50.63,
   "lng": 3.06,
   "precision": "region"
  },
  "chapter": 5,
  "kitchen_ja": "パスツールが、発酵は小さな生き物の働きだと実験で示しました。",
  "research": {
   "fact_ja": "パスツールは1857年に発酵研究を開始し、発酵と微生物の関係を実験的に研究した。発酵を生物学的過程として理解する転換を示す。",
   "unknown_ja": "パン種の実用化が一つの発見で直ちに変わったわけではない。"
  },
  "sources": [
   {
    "title": "Pasteur: Une ?uvre en fermentation, 1857?1862",
    "url": "https://www.pasteur.fr/fr/nous-connaitre/premiere-epoque-1847-1862",
    "kind": "institution",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": {
   "person_qid": "Q529",
   "person_ja": "ルイ・パスツール",
   "cross_ja": "",
   "focus": []
  }
 },
 {
  "id": "ev_roller",
  "type": "event",
  "title_ja": "ブダペストのシリンダー製粉所",
  "clock": "field",
  "when": {
   "from": 1839,
   "to": 1839,
   "label": "1839年"
  },
  "known": {
   "year": 2006,
   "label": "Pest Cylinder Flour Mill設立を扱う産業史研究"
  },
  "confidence": "confirmed",
  "lenses": [
   "mill",
   "power"
  ],
  "field": [
   "history",
   "food_science"
  ],
  "place": {
   "name_ja": "ペシュト（現ブダペスト)",
   "lat": 47.5,
   "lng": 19.04,
   "precision": "city"
  },
  "chapter": 4,
  "kitchen_ja": "ブダペストで機械の製粉所ができ、のちに鋼のロールで白い粉を大量に挽くようになりました。",
  "research": {
   "fact_ja": "1839年設立のPest Cylinder Flour Millはハンガリーの機械製粉業の基盤となった。ブダペストでは蒸気製粉所が増え、1880年代後半にローラーが石臼を置き換えた。",
   "unknown_ja": "1839年をロール製粉の世界初とはできない。"
  },
  "sources": [
   {
    "title": "ブダペシュト製粉業における工場制度の確立",
    "url": "https://www.jstage.jst.go.jp/article/sehs/71/6/71_KJ00005615034/_article",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_fleischmann",
  "type": "event",
  "title_ja": "圧搾パン酵母の工業生産",
  "clock": "bread",
  "when": {
   "from": 1868,
   "to": 1876,
   "label": "1868〜1876年（米国事業の成立・普及）"
  },
  "known": {
   "year": 1870,
   "label": "特許・企業史・伝記研究"
  },
  "confidence": "range",
  "lenses": [
   "ferment",
   "power"
  ],
  "field": [
   "history",
   "microbiology"
  ],
  "place": {
   "name_ja": "シンシナティ（米国)",
   "lat": 39.1,
   "lng": -84.51,
   "precision": "city"
  },
  "chapter": 5,
  "kitchen_ja": "パン酵母が工場で作られ、袋で売られるようになりました。",
  "research": {
   "fact_ja": "Fleischmannらは1868年にシンシナティで事業を始め、1870年に圧搾酵母製造の特許が取得された。1876年の博覧会が米国での普及に寄与した。",
   "unknown_ja": "工業酵母の世界初ではない。地域や商業生産の定義で先行例は異なる。"
  },
  "sources": [
   {
    "title": "Fleischmann, Charles Louis: yeast manufacturer and inventor",
    "url": "https://academic.oup.com/american-national-biography/reference/63042/reference-article-abstract/570373061",
    "kind": "book",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_anpan",
  "type": "event",
  "title_ja": "木村屋の酒種あんパン",
  "clock": "bread",
  "when": {
   "from": 1874,
   "to": 1875,
   "label": "1874〜1875年（発売・献上の年差）"
  },
  "known": {
   "year": 1874,
   "label": "菓子業界史と木村屋沿革"
  },
  "confidence": "range",
  "lenses": [
   "ferment",
   "table"
  ],
  "field": [
   "history",
   "microbiology"
  ],
  "place": {
   "name_ja": "東京・銀座／向島",
   "lat": 35.67,
   "lng": 139.77,
   "precision": "city"
  },
  "chapter": 5,
  "kitchen_ja": "銀座の木村屋が、酒まんじゅうと同じ米と麹の「酒種」で膨らませたあんパンを作りました。",
  "research": {
   "fact_ja": "木村屋は1874年に銀座へ進出し、米と麹を使う酒種で発酵させるあんパンを作ったと業界史が記す。1875年の明治天皇献上は木村屋沿革に記載される。",
   "unknown_ja": "製品誕生を1874年とする説明と、成立・献上を1875年とする説明が併存する。"
  },
  "sources": [
   {
    "title": "日本洋菓子史",
    "url": "https://gateaux.or.jp/about/history/",
    "kind": "institution",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_norin10",
  "type": "event",
  "title_ja": "農林10号から短稈小麦系統へ",
  "clock": "field",
  "when": {
   "from": 1935,
   "to": 1960,
   "label": "1935年（交配）〜戦後の選抜・交配"
  },
  "known": {
   "year": 2016,
   "label": "CIMMYTの育種史資料"
  },
  "confidence": "range",
  "lenses": [
   "plant",
   "route",
   "power"
  ],
  "field": [
   "history",
   "genetics"
  ],
  "place": {
   "name_ja": "岩手・米国北西部・メキシコ",
   "lat": 39.7,
   "lng": 141.15,
   "precision": "region"
  },
  "chapter": 5,
  "kitchen_ja": "岩手で生まれた背の低い小麦「農林10号」が、海を渡って世界の小麦を変えました。",
  "research": {
   "fact_ja": "稲塚権次郎は1935年に半矮性の農林10号を育成。戦後Salmonが種子を米国へ運び、Vogelの育種を経てBorlaug/CIMMYTの短稈品種群に利用された。",
   "unknown_ja": "個々の品種の交配系譜は系統ごとに異なる。"
  },
  "sources": [
   {
    "title": "From east Asia to south Asia, via Mexico: how one gene changed history",
    "url": "https://www.cimmyt.org/news/from-east-asia-to-south-asia-via-mexico-how-one-gene-changed-the-course-of-history/",
    "kind": "institution",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_school_lunch",
  "type": "event",
  "title_ja": "戦後日本のパン給食と援助物資",
  "clock": "bread",
  "when": {
   "from": 1946,
   "to": 1954,
   "label": "1946年再開〜1954年法制化"
  },
  "known": {
   "year": 1954,
   "label": "公文書・公的給食史"
  },
  "confidence": "confirmed",
  "lenses": [
   "power",
   "table"
  ],
  "field": [
   "history"
  ],
  "place": {
   "name_ja": "日本（全国制度化)",
   "lat": 36.2,
   "lng": 138.25,
   "precision": "region"
  },
  "chapter": 5,
  "kitchen_ja": "戦後、援助の小麦粉で学校給食にパンが出るようになりました。",
  "research": {
   "fact_ja": "戦後の学校給食は1946年以降に再開され、援助物資に小麦粉・脱脂粉乳などが含まれた。1954年に学校給食法が制定され制度化された。",
   "unknown_ja": "援助主体・物資・開始時期は地域・時期で異なる。"
  },
  "sources": [
   {
    "title": "学校給食っていつからあるの？",
    "url": "https://www.jacar.go.jp/english/exhibition/glossary_en/tochikiko-henten/qa/qa14.html",
    "kind": "institution",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_chorleywood",
  "type": "event",
  "title_ja": "Chorleywood製法の開発",
  "clock": "bread",
  "when": {
   "from": 1961,
   "to": 1961,
   "label": "1961年"
  },
  "known": {
   "year": 1961,
   "label": "英国製パン業界史"
  },
  "confidence": "confirmed",
  "lenses": [
   "ferment",
   "mill",
   "power"
  ],
  "field": [
   "food_science",
   "history"
  ],
  "place": {
   "name_ja": "チョーリーウッド（イングランド)",
   "lat": 51.65,
   "lng": -0.52,
   "precision": "site"
  },
  "chapter": 5,
  "kitchen_ja": "機械で強くこねて短い時間でパンを作る方法が、イギリスで生まれました。",
  "research": {
   "fact_ja": "英国製パン産業研究所で1961年に開発され、機械的な高エネルギー混捏で製造時間を短縮した。",
   "unknown_ja": "世界中の工業製パンが同時にこの方式へ移行したわけではない。"
  },
  "sources": [
   {
    "title": "Modern History of Bread: 20th Century UK",
    "url": "https://www.fob.uk.com/about-the-bread-industry/history-of-bread-antiquity/history-bread-20th-century/",
    "kind": "institution",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_sourdough500",
  "type": "event",
  "title_ja": "サワードウ500種の微生物調査",
  "clock": "bread",
  "when": {
   "from": 2021,
   "to": 2021,
   "label": "2021年"
  },
  "known": {
   "year": 2021,
   "label": "市民科学者と4大陸の500種を解析したeLife論文"
  },
  "confidence": "confirmed",
  "lenses": [
   "ferment",
   "route"
  ],
  "field": [
   "microbiology"
  ],
  "place": {
   "name_ja": "4大陸（複数地域)",
   "lat": null,
   "lng": null,
   "precision": "none"
  },
  "chapter": 6,
  "kitchen_ja": "世界の家庭のサワードウ種500を調べると、住む場所より、育て方の違いが効いていました。",
  "research": {
   "fact_ja": "研究チームは北米・欧州・オセアニアなどの家庭のサワードウ種500を解析した。地理と微生物の多様性に相関は見られず、餌にする粉や冷蔵か常温かといった作り方・保ち方の方が関わっていた。酵母は1種だけの種が中央値で、全体では約70種が見つかった。",
   "unknown_ja": "500種は世界全体の悉皆調査ではない。「味が土地で決まらない」とまでは論文は言っていない。"
  },
  "sources": [
   {
    "title": "The diversity and function of sourdough starter microbiomes",
    "url": "https://pubmed.ncbi.nlm.nih.gov/33496265/",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "αが要旨を確かめて書き直した（Codex は「地理が無関係と結論した論文ではない」と書いていた）。",
  "links": null
 },
 {
  "id": "ev_gluten120",
  "type": "event",
  "title_ja": "小麦120年の育種とグルテン組成",
  "clock": "field",
  "when": {
   "from": 1891,
   "to": 2010,
   "label": "1891〜2010年登録のドイツ冬小麦60品種"
  },
  "known": {
   "year": 2020,
   "label": "登録年代の異なる60品種を3年栽培比較"
  },
  "confidence": "confirmed",
  "lenses": [
   "plant",
   "table"
  ],
  "field": [
   "food_science",
   "genetics"
  ],
  "place": {
   "name_ja": "ドイツ（品種試験)",
   "lat": 51.0,
   "lng": 10.0,
   "precision": "region"
  },
  "chapter": 5,
  "kitchen_ja": "120年分の小麦を同じ畑で育てて比べると、グルテンの量はほぼ変わらず、中身の割合が少し変わっていました。",
  "research": {
   "fact_ja": "研究は1891〜2010年登録のドイツ冬小麦60品種を比較し、収量・タンパク質・グルテン構成を報告した。",
   "unknown_ja": "ドイツの品種と条件に関する結果であり、現代小麦一般で含量が一律増加したとは言えない。"
  },
  "sources": [
   {
    "title": "Wheat breeding from 1891 to 2010 and glutenin contents",
    "url": "https://pubmed.ncbi.nlm.nih.gov/32648759/",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_icarda_svalbard",
  "type": "event",
  "title_ja": "ICARDAの種子引き出し",
  "clock": "field",
  "when": {
   "from": 2015,
   "to": 2015,
   "label": "2015年（初回引き出し）"
  },
  "known": {
   "year": 2015,
   "label": "スヴァールバル世界種子貯蔵庫の公式記録"
  },
  "confidence": "confirmed",
  "lenses": [
   "plant",
   "route"
  ],
  "field": [
   "history",
   "genetics"
  ],
  "place": {
   "name_ja": "スヴァールバル（ノルウェー）→ICARDA再建拠点",
   "lat": 78.24,
   "lng": 15.49,
   "precision": "region"
  },
  "chapter": 6,
  "kitchen_ja": "戦争で使えなくなった種の銀行のために、北極の種子貯蔵庫から初めて種が引き出されました。",
  "research": {
   "fact_ja": "アレッポの遺伝資源銀行が稼働困難となり、ICARDAは2015年に種子を引き出した。貯蔵庫の公式記録は、預託種子の引き出しはICARDAが初と記す。",
   "unknown_ja": "2015年だけでなく後年にも複数回の引き出しが行われた。"
  },
  "sources": [
   {
    "title": "Withdrawal of ICARDA Aleppo seeds accomplished",
    "url": "https://www.seedvault.no/2019/09/11/withdrawal-of-icarda-aleppo-seeds-accomplished/",
    "kind": "institution",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_diamond_book",
  "type": "event",
  "title_ja": "『銃・病原菌・鉄』刊行と地理説明への批判",
  "clock": "bread",
  "when": {
   "from": 1997,
   "to": 1997,
   "label": "1997年刊"
  },
  "known": {
   "year": 1997,
   "label": "書誌情報と学術レビュー"
  },
  "confidence": "range",
  "lenses": [
   "plant",
   "power",
   "route"
  ],
  "field": [
   "history",
   "geography"
  ],
  "place": {
   "name_ja": "世界規模",
   "lat": null,
   "lng": null,
   "precision": "none"
  },
  "chapter": 6,
  "kitchen_ja": "『銃・病原菌・鉄』は、地理で文明の差を説明した有名な本です。批判もあります。",
  "research": {
   "fact_ja": "Diamondは環境・地理要因を大きな説明枠として提示した。学術レビューは貢献とともに地理決定論や文化的主体性・政治経済の扱いへの批判を併記する。",
   "unknown_ja": "小麦起源の個別証明ではない。レビュー一件は批判全体を代表しない。"
  },
  "sources": [
   {
    "title": "Jared Diamond and Guns, Germs, and Steel: review of strengths and critiques",
    "url": "https://www.humanecologyreview.org/pastissues/her142/yorkandmancus.pdf",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_cultivated_wheat_spread",
  "type": "event",
  "title_ja": "栽培小麦の南西アジア内拡散",
  "clock": "field",
  "when": {
   "from": -8050,
   "to": -5050,
   "label": "約10,000〜7,000年前（較正年代・地域差）"
  },
  "known": {
   "year": 2016,
   "label": "遺跡ごとの栽培・栽培型遺存体の年代比較"
  },
  "confidence": "range",
  "lenses": [
   "plant",
   "route"
  ],
  "field": [
   "archaeobotany",
   "geography"
  ],
  "place": {
   "name_ja": "南西アジア",
   "lat": 34.0,
   "lng": 37.0,
   "precision": "region"
  },
  "chapter": 2,
  "kitchen_ja": "育てられた小麦は、西アジアの中で場所ごとに広がっていきました。",
  "research": {
   "fact_ja": "栽培化関連形質の出現は南西アジアで地域差を伴い、南部レバントから他地域へ広がったとする比較研究がある。",
   "unknown_ja": "経路は単一の直線的移動ではない。地点ごとの年代・作物組成の確認が必要。"
  },
  "sources": [
   {
    "title": "Regional diversity on the timing for cereal cultivation and domestication",
    "url": "https://www.pnas.org/content/pnas/113/49/14001.full.pdf",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "αが単位を直した：「約10,000〜7,000年前」(較正年代) を西暦に換算。",
  "links": null
 },
 {
  "id": "ev_steam_mills",
  "type": "event",
  "title_ja": "ブダペストの蒸気製粉産業化",
  "clock": "field",
  "when": {
   "from": 1865,
   "to": 1890,
   "label": "1860年代後半〜1880年代後半"
  },
  "known": {
   "year": 2006,
   "label": "製粉所設立とロール導入を追う産業史研究"
  },
  "confidence": "range",
  "lenses": [
   "mill",
   "power"
  ],
  "field": [
   "history"
  ],
  "place": {
   "name_ja": "ブダペスト",
   "lat": 47.5,
   "lng": 19.04,
   "precision": "city"
  },
  "chapter": 5,
  "kitchen_ja": "ブダペストでは蒸気の製粉所が増え、ロールが石臼に取って代わりました。",
  "research": {
   "fact_ja": "1860年代後半以降、ブダペストでは蒸気製粉会社が増え、1880年代後半にローラー製粉を備えた工場制度が確立した。",
   "unknown_ja": "技術置換に資本・労働・工場組織の変化が伴った。"
  },
  "sources": [
   {
    "title": "ブダペシュト製粉業における工場制度の確立",
    "url": "https://www.jstage.jst.go.jp/article/sehs/71/6/71_KJ00005615034/_article",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "",
  "links": null
 },
 {
  "id": "ev_jesus_bread",
  "type": "event",
  "title_ja": "イエスの時代のパン（推測）",
  "clock": "bread",
  "when": {
   "from": 20,
   "to": 40,
   "label": "1世紀前半（30年ごろ）"
  },
  "known": {
   "year": null,
   "label": "福音書（1世紀後半に書かれた）と、ローマ期ガリラヤの発掘・研究"
  },
  "confidence": "range",
  "lenses": [
   "table",
   "mill",
   "power"
  ],
  "field": [
   "history",
   "archaeology",
   "religion"
  ],
  "place": {
   "name_ja": "ガリラヤ湖西岸（ティベリア近郊のローマ期の村ナスル・エッディンを比較の例に）",
   "lat": 32.79,
   "lng": 35.53,
   "precision": "region"
  },
  "kitchen_ja": "イエスが暮らした1世紀のガリラヤでは、小麦や大麦を家の石臼で挽き、土の窯で丸く平たいパンを焼いて、手で裂いて分け、豆や野菜、魚と一緒に食べていたと考えられます。大麦は小麦の半分から3分の1の値段で、貧しい人々のパンでした。",
  "research": {
   "bible_ja": "福音書の記述（章節）：大麦のパン五つと魚二匹（ヨハネ6:9）、「日ごとのパン」の祈り（マタイ6:11、ルカ11:3）、パン種を粉に混ぜるたとえ（マタイ13:33）、二人の女が粉を挽く（マタイ24:41）、五千人の給食（マルコ6:35–44）、最後の晩餐でパンを取り裂く（マタイ26:26、マルコ14:22、ルカ22:19）。",
   "fact_ja": "ローマ期パレスチナでは穀物とパンが食事の大きな部分を占めた。値段は小麦1に対して大麦はおよそ半分〜3分の1で（列王記下7:1、ヨハネの黙示録6:6、ヨセフス『ユダヤ戦記』5巻）、貧しい人は大麦、豊かな人は小麦のパンを食べたと古代の文献と研究が伝える（どれも飢饉や包囲の場面の記述で、ふだんの割合はわからない）。粉は家で玄武岩の石臼で挽いた：67年に壊され再建されなかったガムラの発掘では玄武岩の挽き石が数十点見つかっている。ティベリア近郊のローマ期の村でも、家ごとに窯と石臼が見つかる。前の生地を残して種にする発酵パンがふつうだった（レビ記23:17、パン種のたとえ）。1世紀のガリラヤ・ユダヤでパンそのものが炭になって出た例は確認されていない。",
   "inference_ja": "推測：イエスと周りの人々の日常のパンは、小麦または大麦を挽いた粉の、平たい、または厚みのある素朴なパンで、前の生地の一部を種にして膨らませることもあったと考えられる（たとえ話のパン種と合う）。福音書の「大麦のパン」はその場面の記述で、いつも大麦だった証拠ではない。",
   "unknown_ja": "イエス自身が食べたパンの穀物・発酵・焼き方は特定できない。発掘報告で家の窯を「タブーン」と呼ぶ習慣は、内側の壁に生地を貼って焼く「タンヌール」型の誤った呼び名かもしれないと指摘されている。最後の晩餐のパンが種なしパンだったかは学説が割れる：共観福音書は過越の食事として描き（マルコ14:12）、その夜は種入りのパンは手に入らない。一方ヨハネ福音書は十字架を「過越の準備の日」に置き（19:14）、晩餐は過越の食事ではないことになる。四福音書もパウロも一般の「パン（artos）」を使い「種なしパン（azymos）」を使わないが、artos は種なしパンを含むこともあり、言葉だけでは決まらない。このパンの違いは11世紀に東西の教会の論争（アジマ論争）にもなった。",
   "faith_ja": "「わたしが命のパンである」（ヨハネによる福音書6章35節、口語訳）。日々の命を支えるパンになぞらえて、イエスを命の源として表す信仰の言葉として読み継がれてきた。History OS はこの言葉の信仰としての内容を判定せず、パンと人の暮らしが深く結びついた言葉として紹介する。"
  },
  "sources": [
   {
    "title": "Gildas Hamel, Poverty and Charity in Roman Palestine, ch.1 Daily Bread (University of California Press 1990)",
    "url": "https://bpb-us-e1.wpmucdn.com/sites.ucsc.edu/dist/9/20/files/2019/01/poverty-pn7ytx.pdf",
    "kind": "book",
    "checked": "2026-11-16"
   },
   {
    "title": "Naṣr ed-Din (Bet Ma‘on), near Tiberias: Village and City in Roman-Period Galilee（発掘報告）",
    "url": "https://www.academia.edu/122720799/",
    "kind": "primary",
    "checked": "2026-11-16"
   },
   {
    "title": "Susan Weingarten「What Did People Eat and Drink in Roman Palestine?」(Biblical Archaeology Society)",
    "url": "https://www.biblicalarchaeology.org/daily/ancient-cultures/daily-life-and-practice/what-did-people-eat-and-drink-in-roman-palestine/",
    "kind": "institution",
    "checked": "2026-11-16"
   },
   {
    "title": "Joel Marcus「Passover and Last Supper Revisited」New Testament Studies (2013)",
    "url": "https://www.cambridge.org/core/journals/new-testament-studies/article/passover-and-last-supper-revisited/B7955FEA669F7DD71A36F008A2FE5144",
    "kind": "peer_reviewed",
    "checked": "2026-11-16"
   },
   {
    "title": "ヨハネによる福音書 6章（BibleGateway, NRSVUE で章節を照合）",
    "url": "https://www.biblegateway.com/passage/?search=John%206&version=NRSVUE",
    "kind": "primary",
    "checked": "2026-11-16"
   },
   {
    "title": "J. Ebeling & L. Rogel「The tabun and its misidentification in the archaeological record」Levant 47(3) (2015)",
    "url": "https://doi.org/10.1080/00758914.2015.1108022",
    "kind": "peer_reviewed",
    "checked": "2026-11-16"
   },
   {
    "title": "R. Frankel & D. Syon「Mills and Querns」Gamla 発掘報告（Israel Antiquities Authority）",
    "url": "https://publications.iaa.org.il/cgi/viewcontent.cgi?filename=4&article=1015&context=iaareports",
    "kind": "primary",
    "checked": "2026-11-16"
   },
   {
    "title": "J. Klawans「Was Jesus' Last Supper a Seder?」(Biblical Archaeology Society)",
    "url": "https://www.biblicalarchaeology.org/daily/people-cultures-in-the-bible/jesus-historical-jesus/was-jesus-last-supper-a-seder/",
    "kind": "institution",
    "checked": "2026-11-16"
   }
  ],
  "note": "スタジオ検討002（GPT・Gemini・Codex・Meta・Claude Web の5者）を α が出典で照合してまとめた。聖句は、日本では著作権の保護期間が終わったとされる口語訳（1955年）から短く引いた。",
  "links": null,
  "chapter": 3
 },
 {
  "id": "ev_catalhoyuk_dough",
  "type": "event",
  "title_ja": "チャタルホユックの窯のそばの「生地」",
  "clock": "bread",
  "when": {
   "from": -6700,
   "to": -6500,
   "label": "前6600年ごろ（放射性炭素年代）"
  },
  "known": {
   "year": 2024,
   "label": "2024年3月 発掘チームの発表"
  },
  "confidence": "narrative",
  "lenses": [
   "mill",
   "ferment"
  ],
  "field": [
   "archaeology",
   "archaeobotany"
  ],
  "place": {
   "name_ja": "チャタルホユック（トルコ・コンヤ）",
   "lat": 37.667,
   "lng": 32.828,
   "precision": "site"
  },
  "kitchen_ja": "アナトリアの大きな村の遺跡で、窯のそばから、焼かれる前の生地のようなものが見つかったと発表されました。まわりには小麦・大麦・エンドウの粒がありました。",
  "research": {
   "fact_ja": "2024年3月、ネジメッティン・エルバカン大学などの発掘チームが、チャタルホユックの窯のある建物で、窯のまわりの小麦・大麦・エンドウと、スポンジ状の有機物を見つけたと発表した。分析で、粉と水を混ぜた、焼かれていない生地と判断し、放射性炭素年代で前6600年ごろとした。薄い粘土の覆いが残した、と説明されている。",
   "unknown_ja": "「世界最古のパン」という言い方は発掘チームの評価で、査読論文による独立した確認は、α の調べた範囲では見つからなかった（2026-11-16）。発酵していたかどうかも発表の説明による。"
  },
  "sources": [
   {
    "title": "Hürriyet Daily News「Archaeologists discover 8600-year-old bread at Çatalhöyük」(2024)",
    "url": "https://hurriyetdailynews.com/archaeologists-discover-8600-year-old-bread-at-catalhoyuk-191424",
    "kind": "press",
    "checked": "2026-11-16"
   },
   {
    "title": "Sci.News「8,600-Year-Old Bread Found in Türkiye」(2024)",
    "url": "https://www.sci.news/archaeology/catalhoyuk-bread-12858.html",
    "kind": "press",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 2
 },
 {
  "id": "ev_mehrgarh",
  "type": "event",
  "title_ja": "メヘルガル：南アジアの最初の畑",
  "clock": "field",
  "when": {
   "from": -7000,
   "to": -5500,
   "label": "前7000〜前5500年ごろ（最初の村の時期）"
  },
  "known": {
   "year": null,
   "label": "1970年代からの発掘と、その後の研究"
  },
  "confidence": "range",
  "lenses": [
   "plant",
   "route"
  ],
  "field": [
   "archaeology",
   "archaeobotany"
  ],
  "place": {
   "name_ja": "メヘルガル（パキスタン・バローチスターン）",
   "lat": 29.39,
   "lng": 67.61,
   "precision": "site"
  },
  "kitchen_ja": "インダス川の西の山すそにある村の遺跡で、南アジアでいちばん早い畑のあとが見つかっています。穀物のほとんどは大麦で、小麦は少しだけでした。",
  "research": {
   "fact_ja": "メヘルガルは南アジア北西部で最も早い新石器時代の遺跡とされる。新石器時代の栽培作物の9割以上が大麦で、小麦は少量。大麦とコブウシはこの地で家畜化・栽培化された可能性が高いとされる一方、小麦は西アジア由来と考えられている。",
   "unknown_ja": "始まりの年代は資料によって前8500年から前7000年まで幅がある。ここでは一般的な前7000〜前5500年を使った。小麦が西アジアからどの道で来たかはわからない。"
  },
  "sources": [
   {
    "title": "Gangal, Sarson & Shukurov「The Near-Eastern Roots of the Neolithic in South Asia」PLOS ONE (2014)",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4012948",
    "kind": "peer_reviewed",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 2
 },
 {
  "id": "ev_europe_naked_wheat",
  "type": "event",
  "title_ja": "ヨーロッパの裸性小麦：南東から地中海へ",
  "clock": "field",
  "when": {
   "from": -6100,
   "to": -5800,
   "label": "前6000年ごろから（直接年代測定）"
  },
  "known": {
   "year": 2026,
   "label": "2026年の論文（58遺跡・116点の直接年代）"
  },
  "confidence": "range",
  "lenses": [
   "plant",
   "route"
  ],
  "field": [
   "archaeobotany",
   "geography"
  ],
  "place": {
   "name_ja": "ヨーロッパ南東部（ギリシャ北部・バルカン）",
   "lat": 41.5,
   "lng": 23.5,
   "precision": "region"
  },
  "kitchen_ja": "粒を炭のまま年代測定した小麦を集めると、脱穀しやすい「裸性」の小麦は、まずヨーロッパの南東部に現れ、地中海沿いに定着していったことが見えてきます。",
  "research": {
   "fact_ja": "Salvador-Baiges ほか（2026）は、58遺跡116点の裸性小麦（パン小麦・デュラムなど）の粒そのものの放射性炭素年代を分析した。最も早い出現は前6000年ごろの南東ヨーロッパに集まり、その後地中海沿いで定着、前4500〜4000年以降に中部・北部ヨーロッパへ広がる。初出現の時期を最もよく説明したのは地中海の海岸からの距離だった。",
   "unknown_ja": "著者らは、人の移住だけでは広がりを説明できず、ネットワークを通じた伝わり方と地域ごとの農法の違いを考えるべきだとしている。点が時代順に現れることは、人がその道をそのまま移ったことを意味しない。"
  },
  "sources": [
   {
    "title": "Salvador-Baiges ほか「Tracing the influence of Western Mediterranean innovations in Neolithic Europe through directly radiocarbon-dated naked wheat」Journal of Archaeological Science: Reports 74, 105937 (2026)",
    "url": "https://doi.org/10.1016/j.jasrep.2026.105937",
    "kind": "peer_reviewed",
    "checked": "2026-11-16"
   },
   {
    "title": "同論文（ジュネーブ大学のリポジトリ）",
    "url": "https://archive-ouverte.unige.ch/unige:194607",
    "kind": "peer_reviewed",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 2
 },
 {
  "id": "ev_lbk",
  "type": "event",
  "title_ja": "線帯文土器文化：中部ヨーロッパ最初の農民",
  "clock": "field",
  "when": {
   "from": -5550,
   "to": -4900,
   "label": "前5550〜前4900年"
  },
  "known": {
   "year": null,
   "label": "考古植物学の研究の積み重ね（年代は2024年の論文）"
  },
  "confidence": "confirmed",
  "lenses": [
   "plant",
   "table"
  ],
  "field": [
   "archaeology",
   "archaeobotany"
  ],
  "place": {
   "name_ja": "中部ヨーロッパ（ドナウ中流からライン川流域）",
   "lat": 50.0,
   "lng": 11.0,
   "precision": "region"
  },
  "kitchen_ja": "中部ヨーロッパで最初に畑を作った人々は、一粒小麦とエンマー小麦という殻の固い2種類の小麦に、レンズ豆・エンドウ・亜麻を加えた5つの作物で暮らしていました。",
  "research": {
   "fact_ja": "線帯文土器文化（LBK、前5550〜前4900年）の共同体は、皮性の小麦2種（一粒小麦・エンマー）、豆2種（レンズ豆・エンドウ）、繊維・油の作物1種（亜麻）を主な作物にしていた。地域で割合が違い、ライン川の西ではエンマー、東では一粒小麦が多い傾向が報告されている。",
   "unknown_ja": "この画一的な作物の組み合わせが、文化の均一化なのか、肥沃な低地に合う作物を選んだ結果なのかは議論がある。"
  },
  "sources": [
   {
    "title": "「New radiocarbon dates point to the early evolution of resilient agriculture among Central Europe's first farmers」Radiocarbon (2024)",
    "url": "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/B6BB0FE44FD36876761CAC018E6496CB/S0033822224000845a.pdf/new-radiocarbon-dates-point-to-the-early-evolution-of-resilient-agriculture-among-central-europes-first-farmers.pdf",
    "kind": "peer_reviewed",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 2
 },
 {
  "id": "ev_europe_north",
  "type": "event",
  "title_ja": "裸性小麦、内陸と北のヨーロッパへ",
  "clock": "field",
  "when": {
   "from": -4500,
   "to": -4000,
   "label": "前4500〜前4000年以降"
  },
  "known": {
   "year": 2026,
   "label": "2026年の論文（直接年代の分析）"
  },
  "confidence": "range",
  "lenses": [
   "plant",
   "route"
  ],
  "field": [
   "archaeobotany",
   "geography"
  ],
  "place": {
   "name_ja": "中部・北部ヨーロッパ",
   "lat": 53.5,
   "lng": 10.0,
   "precision": "region"
  },
  "kitchen_ja": "地中海から遠い内陸や北のヨーロッパに裸性の小麦が現れるのは、南東部より1500年ほど後のことでした。",
  "research": {
   "fact_ja": "Salvador-Baiges ほか（2026）の分析で、裸性小麦は前4500〜4000年以降に中部・北部ヨーロッパへ広がった。地中海の海岸からの距離が遠いほど、初出現が遅い。",
   "unknown_ja": "一本の道でつながる移動ではなく、地域ごとに受け入れた時期が違う。北の寒い気候にどう合わせたかは、この論文の範囲の外。"
  },
  "sources": [
   {
    "title": "Salvador-Baiges ほか、Journal of Archaeological Science: Reports 74, 105937 (2026)",
    "url": "https://doi.org/10.1016/j.jasrep.2026.105937",
    "kind": "peer_reviewed",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 2
 },
 {
  "id": "ev_bouldnor",
  "type": "event",
  "title_ja": "ボールドナー・クリフの小麦のDNA（争いのある証拠）",
  "clock": "field",
  "when": {
   "from": -6100,
   "to": -6000,
   "label": "約8000年前（前6000年ごろ）とされる"
  },
  "known": {
   "year": 2015,
   "label": "2015年 Science 誌の論文と、同年の反論"
  },
  "confidence": "narrative",
  "lenses": [
   "route",
   "plant"
  ],
  "field": [
   "genetics",
   "archaeology"
  ],
  "place": {
   "name_ja": "ボールドナー・クリフ（イギリス・ワイト島沖の海底）",
   "lat": 50.7,
   "lng": -1.45,
   "precision": "site"
  },
  "kitchen_ja": "イギリスの海に沈んだ遺跡の泥から、農耕が始まる前の約8000年前の小麦のDNAが見つかった、という論文が出ました。ただ、本当に古いDNAなのか、強い反論があります。",
  "research": {
   "fact_ja": "Smith ほか（2015, Science）は、海底に沈んだ中石器時代の遺跡の堆積物から小麦のDNA断片（約7200万本の読み取りのうち152本）を報告し、農耕以前のブリテン島の人々が大陸とのつながりで小麦を手に入れていたと論じた。Weiß ほか（2015, eLife）は、古いDNAに特有の傷み方が見られず、新しいDNAの混入を否定できないと反論した。",
   "unknown_ja": "α の調べた範囲では決着していない（2026-11-16）。ブリテン島で小麦の花粉や畑のあとは見つかっていない。History OS は「争いのある証拠」として示し、交易を確かな事実としては扱わない。"
  },
  "sources": [
   {
    "title": "Smith ほか「Sedimentary DNA from a submerged site reveals wheat in the British Isles 8000 years ago」Science (2015)",
    "url": "https://ueaeprints.uea.ac.uk/id/eprint/70255/",
    "kind": "peer_reviewed",
    "checked": "2026-11-16"
   },
   {
    "title": "Weiß ほか「Contamination of the Bouldnor Cliff wheat sequences」eLife (2015)",
    "url": "https://elifesciences.org/articles/10005",
    "kind": "peer_reviewed",
    "checked": "2026-11-16"
   },
   {
    "title": "Nature News「Ancient-DNA dispute raises questions about wheat trade in prehistoric Britain」(2015)",
    "url": "https://www.nature.com/news/ancient-dna-dispute-raises-questions-about-wheat-trade-in-prehistoric-britain-1.18702",
    "kind": "press",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 2
 },
 {
  "id": "ev_begash",
  "type": "event",
  "title_ja": "遊牧民の墓に、小麦と大麦とキビ（中央アジア）",
  "clock": "field",
  "when": {
   "from": -2500,
   "to": -2200,
   "label": "前2500〜前2200年ごろ"
  },
  "known": {
   "year": 2014,
   "label": "2014年の論文（Proceedings of the Royal Society B）"
  },
  "confidence": "range",
  "lenses": [
   "route",
   "plant"
  ],
  "field": [
   "archaeobotany",
   "archaeology"
  ],
  "place": {
   "name_ja": "ベガシュ（カザフスタン東部・ジュンガル山地）",
   "lat": 44.7,
   "lng": 78.8,
   "precision": "region"
  },
  "kitchen_ja": "中央アジアの山の遊牧民の墓から、西アジアの小麦・大麦と、東アジアのキビが一緒に見つかりました。東西の穀物が、遊牧民の手で行き来していたことを示す早い証拠です。",
  "research": {
   "fact_ja": "Spengler ほか（2014）は、カザフスタンのタスバスとベガシュで、炭になった小麦・大麦・キビの粒を報告した。ベガシュでは人の火葬の石棺から出て、前2500〜2200年ごろ。中央ユーラシアで作物が交換された最も早い証拠とされる。",
   "unknown_ja": "遊牧民が自分で育てたのか、交換で手に入れたのかは遺跡ごとに検討が要る。ここから中国まで一本の道でつながるわけではない。"
  },
  "sources": [
   {
    "title": "Spengler ほか「Early agriculture and crop transmission among Bronze Age mobile pastoralists of Central Eurasia」Proceedings of the Royal Society B 281: 20133382 (2014)（紹介記事 ScienceDaily）",
    "url": "https://www.sciencedaily.com/releases/2014/04/140401210412.htm",
    "kind": "press",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 3
 },
 {
  "id": "ev_china_wheat",
  "type": "event",
  "title_ja": "中国の小麦は、まず東の海辺に",
  "clock": "field",
  "when": {
   "from": -2700,
   "to": -2500,
   "label": "前2600年ごろ（黄河下流域）"
  },
  "known": {
   "year": 2018,
   "label": "2018年の論文（Nature Plants）"
  },
  "confidence": "range",
  "lenses": [
   "route",
   "power",
   "plant"
  ],
  "field": [
   "archaeobotany",
   "archaeology"
  ],
  "place": {
   "name_ja": "黄河下流域（山東半島・趙家荘遺跡など）",
   "lat": 36.3,
   "lng": 120.0,
   "precision": "region"
  },
  "kitchen_ja": "小麦は西から来た作物なのに、中国でいちばん早く年代が確かめられたのは、西の端ではなく東の山東半島でした。",
  "research": {
   "fact_ja": "Long ほか（2018）は、山東・遼東の6遺跡の炭化した小麦の直接年代と、中国の年代資料のベイズ解析から、小麦の出現を黄河下流域で前2600年ごろ、甘粛・新疆で前1900年ごろ、黄河中流域とチベットで前1600年ごろと推定した。新疆・甘粛から東へ順に伝わったという長年の説を支持せず、珍しい品として黄河下流域の有力者に伝わった可能性を示した。",
   "unknown_ja": "著者ら自身、これで議論が終わるとは考えていない。中国にはもともとアワ・キビ・米の農業があり、小麦が主な穀物になるのはずっと後のこと。"
  },
  "sources": [
   {
    "title": "Long ほか「The early history of wheat in China from 14C dating and Bayesian chronological modelling」Nature Plants 4: 272–279 (2018)",
    "url": "https://doi.org/10.1038/s41477-018-0141-x",
    "kind": "peer_reviewed",
    "checked": "2026-11-16"
   },
   {
    "title": "Phys.org「Radiocarbon-based wheat in eastern China」(2018)",
    "url": "https://phys.org/news/2018-05-radiocarbon-based-wheat-eastern-china.html",
    "kind": "press",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 3
 },
 {
  "id": "ev_new_spain_wheat",
  "type": "event",
  "title_ja": "小麦、アメリカ大陸へ（ヌエバ・エスパーニャ）",
  "clock": "field",
  "when": {
   "from": 1521,
   "to": 1600,
   "label": "1520年代〜16世紀末"
  },
  "known": {
   "year": null,
   "label": "16世紀の記録と後の研究"
  },
  "confidence": "range",
  "lenses": [
   "route",
   "power",
   "table"
  ],
  "field": [
   "history"
  ],
  "place": {
   "name_ja": "ヌエバ・エスパーニャ（メキシコ中央部・バヒオ）",
   "lat": 20.6,
   "lng": -101.0,
   "precision": "region"
  },
  "kitchen_ja": "スペインの征服のあと、小麦はメキシコに根づき、16世紀の終わりには中央部の黒い土の平野でトウモロコシと並んで実るようになりました。",
  "research": {
   "fact_ja": "小麦はスペインの征服後のヌエバ・エスパーニャで栽培され、16世紀末にはバヒオの平野、モレリア、グアダラハラ、オアハカで小麦とトウモロコシが収穫されていた。小麦の畑とともに、犂・軛・灌漑などスペインの技術も持ち込まれた。",
   "unknown_ja": "アフリカ生まれの兵士フアン・ガリードが米袋に混じった3粒の小麦を蒔いた、という話は伝承で、確かめられていない。コロンブスが1493年に小麦を持ち込んだという話も、α は研究の出典を確かめられなかった。南米では、インカの遺跡から小麦が出て、伝わった時期の見直しが議論されている。"
  },
  "sources": [
   {
    "title": "Mexico News Daily「A pretty comprehensive history of Mexican bread」",
    "url": "https://mexiconewsdaily.com/food/a-pretty-comprehensive-history-of-mexico-bread-and-why-it-matters/",
    "kind": "press",
    "checked": "2026-11-16"
   },
   {
    "title": "Cambridge University Press の研究書の章（ヌエバ・エスパーニャの小麦とトウモロコシ）",
    "url": "https://core-prod.cambridgecore.org/core/product/identifier/CBO9781139055178A010/type/BOOK_PART",
    "kind": "book",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 4
 },
 {
  "id": "ev_turkey_red",
  "type": "event",
  "title_ja": "ターキー・レッド：大平原の冬小麦",
  "clock": "field",
  "when": {
   "from": 1873,
   "to": 1919,
   "label": "1873〜74年の作付けから、1919年に州の8割"
  },
  "known": {
   "year": null,
   "label": "カンザス州歴史協会などの記録"
  },
  "confidence": "range",
  "lenses": [
   "plant",
   "route",
   "power"
  ],
  "field": [
   "history",
   "geography"
  ],
  "place": {
   "name_ja": "カンザス州（アメリカ・マリオン郡周辺）",
   "lat": 38.35,
   "lng": -97.2,
   "precision": "region"
  },
  "kitchen_ja": "ウクライナ方面から来た冬小麦「ターキー・レッド」が、アメリカの大平原を世界の小麦の産地に変えていきました。",
  "research": {
   "fact_ja": "ターキー・レッドは今のウクライナの各地から入った硬質の冬小麦（クリミア、ハリコフなどは同じ系統の別名）。最初の作付けは1873年のマリオン郡とされる。種の不足で広がりはゆっくりだったが、寒さに強いこと、1878年の鋼のロール製粉機、1890年代にほかの品種が冬に枯れたことで広がり、1919年にはカンザスの小麦畑の82%を占めた。今のカンザスの多くの品種の祖先に当たる。",
   "unknown_ja": "「1874年にメノナイトの移民が台所の壺に種を入れて持ってきた」という有名な話について、カンザス州歴史協会は、最初の収穫に足りる量ではなく、ロシアでメノナイトがふつうに育てていた品種でもなかったとしている。鉄道会社や製粉業者の役割が大きかったという見方もある。"
  },
  "sources": [
   {
    "title": "Kansas Historical Society, Kansapedia「Turkey Red Wheat」",
    "url": "https://www.kansashistory.gov/kansapedia/turkey-red-wheat/16789",
    "kind": "institution",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 5
 },
 {
  "id": "ev_fayum_granaries",
  "type": "event",
  "title_ja": "ファイユームの穀物の穴蔵（エジプト）",
  "clock": "field",
  "when": {
   "from": -4600,
   "to": -4300,
   "label": "前4450年ごろ（放射性炭素年代）"
  },
  "known": {
   "year": null,
   "label": "1920年代の発掘、2004年からの再調査"
  },
  "confidence": "range",
  "lenses": [
   "plant",
   "power"
  ],
  "field": [
   "archaeology",
   "archaeobotany"
  ],
  "place": {
   "name_ja": "ファイユーム北岸（コム・K の北の尾根）",
   "lat": 29.55,
   "lng": 30.65,
   "precision": "region"
  },
  "kitchen_ja": "エジプトの湖のほとりで、かごで内張りした穀物の穴蔵がいくつも見つかり、中にエンマー小麦と大麦が乾いたまま残っていました。エジプトで栽培された穀物の早い証拠です。",
  "research": {
   "fact_ja": "ケイトン＝トンプソンとガードナーが1920年代に、コム・K の北の尾根で、かごで内張りした穀物の穴蔵を見つけた。中には乾燥したエンマー小麦と六条の皮麦が残り、エジプトの栽培穀物の最も早い証拠としてよく引かれる。放射性炭素年代は前4450年ごろ。2004年からの再調査（URU ファイユーム計画、2008年の UCLA とフローニンゲン大学の発掘）でも、栽培された小麦と大麦、家畜の骨が見つかった。",
   "unknown_ja": "穴蔵がふだんの食料の蓄えか、非常用か、次の年の種もみかは議論がある。穀物は集落の中ではなく、離れた尾根の穴蔵から出た。"
  },
  "sources": [
   {
    "title": "Wendrich ほか「The Desert Fayum at 80: revisiting a Neolithic farming community in Egypt」Antiquity (2016)",
    "url": "https://www.cambridge.org/core/journals/antiquity/article/desert-fayum-at-80-revisiting-a-neolithic-farming-community-in-egypt/B19CE2EC3A4E35B170CA45A8FF146769",
    "kind": "peer_reviewed",
    "checked": "2026-11-16"
   },
   {
    "title": "ScienceDaily「Team uncovers Egypt’s earliest agricultural settlement」(2008)",
    "url": "https://www.sciencedaily.com/releases/2008/02/080212131300.htm",
    "kind": "press",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 2
 },
 {
  "id": "ev_ur3_bread_rations",
  "type": "event",
  "title_ja": "ウル第三王朝の配給：大麦とパンとビール",
  "clock": "bread",
  "when": {
   "from": -2112,
   "to": -2004,
   "label": "前2112〜前2004年ごろ（ウル第三王朝）"
  },
  "known": {
   "year": null,
   "label": "楔形文字の行政文書"
  },
  "confidence": "confirmed",
  "lenses": [
   "power",
   "table",
   "mill"
  ],
  "field": [
   "history"
  ],
  "place": {
   "name_ja": "南メソポタミア（ウル第三王朝の領域）",
   "lat": 31.3,
   "lng": 45.6,
   "precision": "region"
  },
  "kitchen_ja": "4000年前のメソポタミアでは、国が働く人に毎月大麦を配り、ときには大麦の代わりにパンや粉を渡しました。使いの者にパンとビールと油と玉ねぎを配った記録の粘土板も残っています。",
  "research": {
   "fact_ja": "ウル第三王朝の行政文書では、基本の支払いは毎月の大麦と年ごとの羊毛で、大麦の代わりにパン・粉・エンマー小麦が渡されることもあった。メトロポリタン美術館の粘土板（イッビ・シン王の1年）は、使者へのビール・パン・油・玉ねぎの配給を記録している。",
   "unknown_ja": "文書の食べ物の言葉の多くは、どの食べ物に当たるか確かでなく、議論がある。「メソポタミアにはパンが300種あった」という話は、α の調べた範囲では出典が見つからなかった（2026-11-16）ので載せない。年代は中年代法による。"
  },
  "sources": [
   {
    "title": "Metropolitan Museum of Art「Cuneiform tablet: record of rations of beer, bread, oil, and onions for messengers」",
    "url": "https://www.metmuseum.org/art/collection/search/327069",
    "kind": "institution",
    "checked": "2026-11-16"
   },
   {
    "title": "Ellison「Diet in Mesopotamia: the evidence of the barley ration texts (c. 3000–1400 B.C.)」Iraq (1981)",
    "url": "https://core-prod.cambridgecore.org/core/journals/iraq/article/diet-in-mesopotamia-the-evidence-of-the-barley-ration-texts-c-30001400-bc/EA7C802C4A4E9640E38999D71300455C",
    "kind": "peer_reviewed",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 3
 },
 {
  "id": "ev_harappa_wheat",
  "type": "event",
  "title_ja": "インダス文明の冬の畑：小麦と大麦",
  "clock": "field",
  "when": {
   "from": -2600,
   "to": -1900,
   "label": "前2600〜前1900年ごろ（ハラッパー文化の盛期）"
  },
  "known": {
   "year": null,
   "label": "1980年代からの考古植物学の調査"
  },
  "confidence": "range",
  "lenses": [
   "plant",
   "table"
  ],
  "field": [
   "archaeobotany",
   "archaeology"
  ],
  "place": {
   "name_ja": "ハラッパー（パキスタン・パンジャーブ）",
   "lat": 30.63,
   "lng": 72.86,
   "precision": "site"
  },
  "kitchen_ja": "インダス文明の都市の人々は、冬に小麦と大麦を育てていました。粒の小さい丸い小麦など、いくつもの種類の小麦が見つかっています。",
  "research": {
   "fact_ja": "インダス地域の遺跡の主な穀物は、小麦（パン小麦、粒の詰まったコンパクトム小麦、粒の丸い「インド矮性小麦」スファエロコックム）と六条大麦。ハラッパーでいちばんよく出る穀物は、冬作（ラビ）の皮麦・裸麦の大麦と、いくつかの種類の小麦。小麦と大麦は前期・後期を通じてよく見つかる。",
   "unknown_ja": "燃料に家畜の糞を燃やしたことが、出土する穀物の組み合わせに影響している可能性がある。遺跡ごとに作物の組み合わせは違い、ハラッパーの初期の報告は「予備的」とされている。"
  },
  "sources": [
   {
    "title": "ハラッパーの作物と燃料（家畜の糞）に関する研究（Cambridge University Press、著者名は未照合）",
    "url": "https://www.cambridge.org/core/product/55810416F25148D686092A0968D5AD6F",
    "kind": "peer_reviewed",
    "checked": "2026-11-16"
   },
   {
    "title": "Miller「Palaeoethnobotany」Harappa Excavations 1986–1990（予備報告）",
    "url": "https://www.harappa.com/sites/default/files/pdf/Harappa1986-90_09_HML-Miller-Palaeoethnobotany_0_1.pdf",
    "kind": "primary",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 3
 },
 {
  "id": "ev_xiaohe_wheat",
  "type": "event",
  "title_ja": "小河墓地の小麦：砂漠に残ったパン小麦",
  "clock": "field",
  "when": {
   "from": -1810,
   "to": -1590,
   "label": "約3760〜3540年前（前1800〜前1600年ごろ）"
  },
  "known": {
   "year": 2010,
   "label": "2010年の古代DNA分析"
  },
  "confidence": "range",
  "lenses": [
   "route",
   "plant"
  ],
  "field": [
   "genetics",
   "archaeobotany"
  ],
  "place": {
   "name_ja": "小河墓地（中国・新疆・タリム盆地）",
   "lat": 40.34,
   "lng": 88.67,
   "precision": "site"
  },
  "kitchen_ja": "タリム盆地の砂漠の墓地では、小麦の粒が乾いたまま残っていました。DNA を調べると、いまのパン小麦と同じ、3つのゲノムを持つ小麦でした。",
  "research": {
   "fact_ja": "小河墓地の乾燥した小麦は約3760〜3540年前と年代測定されている。2010年の古代DNA分析は、その配列が六倍体のパン小麦に最も近く、D ゲノムに特有の挿入を持つことを示し、青銅器時代の中国にパン小麦があった確かな証拠とした。墓地からはキビも見つかり、人々は小麦とキビを育て、牛を飼っていた。",
   "unknown_ja": "ここから東の黄河流域へ順に伝わったわけではない（黄河下流域の小麦はもっと早い：「中国の小麦は、まず東の海辺に」を参照）。"
  },
  "sources": [
   {
    "title": "「Buried in sands: environmental analysis at the archaeological site of Xiaohe Cemetery, Xinjiang, China」PLOS ONE (2013)（2010年の古代DNA分析の結果もここで照合）",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3718815",
    "kind": "peer_reviewed",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 3
 },
 {
  "id": "ev_first_fleet_wheat",
  "type": "event",
  "title_ja": "オーストラリアの最初の小麦：失敗から",
  "clock": "field",
  "when": {
   "from": 1788,
   "to": 1791,
   "label": "1788〜1791年"
  },
  "known": {
   "year": 1788,
   "label": "総督フィリップの報告（1788年5月15日）など"
  },
  "confidence": "confirmed",
  "lenses": [
   "plant",
   "power",
   "route"
  ],
  "field": [
   "history"
  ],
  "place": {
   "name_ja": "ファーム・コーブ（シドニー）とパラマッタ",
   "lat": -33.86,
   "lng": 151.22,
   "precision": "site"
  },
  "kitchen_ja": "1788年、イギリスの最初の船団で来た人々は、シドニーの入り江のそばに小麦を蒔きましたが、土が合わずにほとんど育ちませんでした。食料の配給は減らされ、畑は内陸のパラマッタへ移ります。",
  "research": {
   "fact_ja": "最初の小麦は1788年1月の到着後まもなく、いまのシドニー王立植物園のファーム・コーブに蒔かれた。土は砂岩由来で穀物に向かず、収穫は振るわなかった。1788年11月には男性の食料配給が3分の1減らされた。1791年末までにファーム・コーブの農業はやめられ、ローズ・ヒル（いまのパラマッタ）へ移った。囚人ジェームズ・ルースの小麦が実り、土地を与えられて「エクスペリメント・ファーム」と名づけた。",
   "unknown_ja": "面積や、ルースの成功の場所の細部は資料によって違う。先住民の土地と食べ物の暮らしを入植者の農業が壊したことも、同じ時の出来事として忘れてはならない。"
  },
  "sources": [
   {
    "title": "State Library of New South Wales「Food of the colony」",
    "url": "https://www.sl.nsw.gov.au/node/203381",
    "kind": "institution",
    "checked": "2026-11-16"
   },
   {
    "title": "Museums of History NSW「Arthur Phillip’s gardener」",
    "url": "https://mhnsw.au/stories/general/arthur-phillips-gardener",
    "kind": "institution",
    "checked": "2026-11-16"
   },
   {
    "title": "The Conversation「Colonists upended Aboriginal farming…」",
    "url": "https://theconversation.com/colonists-upended-aboriginal-farming-growing-grain-and-running-sheep-on-rich-yamfields-and-cattle-on-arid-grainlands-207118",
    "kind": "press",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 4
 },
 {
  "id": "ev_federation_wheat",
  "type": "event",
  "title_ja": "フェデレーション小麦：乾燥とさび病に強い品種",
  "clock": "field",
  "when": {
   "from": 1901,
   "to": 1925,
   "label": "1901年命名、1903年配布、1910〜1925年に最も多く栽培"
  },
  "known": {
   "year": 1901,
   "label": "オーストラリア国立博物館・人名事典"
  },
  "confidence": "confirmed",
  "lenses": [
   "plant",
   "power"
  ],
  "field": [
   "history",
   "genetics"
  ],
  "place": {
   "name_ja": "ランブリッグ（キャンベラ近郊、ファラーの試験地）",
   "lat": -35.48,
   "lng": 149.02,
   "precision": "site"
  },
  "kitchen_ja": "オーストラリアの育種家ファラーが、乾いた土地とさび病に強い小麦を作り、国ができた年にちなんで「フェデレーション」と名づけました。",
  "research": {
   "fact_ja": "ウィリアム・ファラーは1895年にヤンディラとパープル・ストローを交配し、1901年、オーストラリア連邦の成立にちなんで「フェデレーション」と名づけた。配布は1903年から。さび病と乾燥の両方に強い最初のオーストラリアの品種とされ、1910〜1925年に国内で最も広く栽培された。",
   "unknown_ja": "発表・配布の年は資料によって1900〜1903年の幅がある。1919〜20年の収穫の約8割という数字は一つの資料による。"
  },
  "sources": [
   {
    "title": "National Museum of Australia「Federation wheat distributed」",
    "url": "https://digital-classroom.nma.gov.au/defining-moments/federation-wheat-distributed",
    "kind": "institution",
    "checked": "2026-11-16"
   },
   {
    "title": "Australian Dictionary of Biography「Farrer, William James」",
    "url": "https://adb.anu.edu.au/biography/farrer-william-james-6145",
    "kind": "institution",
    "checked": "2026-11-16"
   }
  ],
  "m11": true,
  "chapter": 5
 }
];
export const breadChecks = [
 {
  "id": "check_domestication",
  "title_ja": "よくある説明を確かめる：「小麦の栽培は紀元前8500年頃、メソポタミアで始まり、余剰が文明を生んだ」",
  "items": [
   {
    "claim": "紀元前8500年頃、メソポタミアで最初に",
    "verdict": "range",
    "body": "「肥沃な三日月地帯」はメソポタミア（川の平野）だけではない。初期の栽培化の証拠はレバントやトルコ南東部の丘陵が中心で、年代は地域ごとに幅がある。",
    "refs": [
     "ev_cultivation",
     "ev_slow_domestication",
     "ev_tur_domestication"
    ]
   },
   {
    "claim": "人間が実の落ちない変異を（無意識に）選んだ",
    "verdict": "range",
    "body": "非脱粒性の穂が増えたことは考古植物学で確かめられている。ただし、どのくらいの速さで、意図があったかには議論がある。",
    "refs": [
     "ev_cultivation"
    ]
   },
   {
    "claim": "農耕 → 余剰 → 定住 → 階層化",
    "verdict": "narrative",
    "body": "農耕以前の定住やパン状食品、地域ごとに異なる栽培化は、農耕から階層化へ進む一方向の図式を単純化しすぎないための事例となる。 一つの反例だけで広域史理論全体を否定できない。",
    "refs": [
     "ev_natufian",
     "ev_shubayqa",
     "ev_diamond_book"
    ]
   }
  ],
  "sources": [
   {
    "title": "Jared Diamond and Guns, Germs, and Steel: review of strengths and critiques",
    "url": "https://www.humanecologyreview.org/pastissues/her142/yorkandmancus.pdf",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ]
 }
];
