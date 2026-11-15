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
  "kitchen_ja": "イエスが暮らした1世紀のガリラヤでは、小麦や大麦を家の石臼で挽き、平たいパンや厚みのあるパンを窯で焼いて、豆や野菜、魚と一緒に食べていたと考えられます。安い大麦のパンは、貧しい人々のパンでした。",
  "research": {
   "bible_ja": "福音書の記述（章節）：大麦のパン五つと魚二匹（ヨハネ6:9）、「日ごとのパン」の祈り（マタイ6:11、ルカ11:3）、パン種を粉に混ぜるたとえ（マタイ13:33）、二人の女が粉を挽く（マタイ24:41）、五千人の給食（マルコ6:35–44）、最後の晩餐でパンを取り裂く（マタイ26:26、マルコ14:22、ルカ22:19）。",
   "fact_ja": "ローマ期パレスチナでは穀物とパンが食事の大きな部分を占め、貧しい人は大麦、豊かな人は細かく挽いた小麦のパンを食べたと古代の文献（ヨセフス、ミシュナ）と研究が伝える。ティベリア近郊のローマ期の村の発掘では、家ごとに窯や石臼が見つかり、粉挽きとパン焼きが家の中で行われていたことがうかがえる。",
   "inference_ja": "推測：イエスと周りの人々の日常のパンは、小麦または大麦を挽いた粉の、平たい、または厚みのある素朴なパンで、前の生地の一部を種にして膨らませることもあったと考えられる（たとえ話のパン種と合う）。福音書の「大麦のパン」はその場面の記述で、いつも大麦だった証拠ではない。",
   "unknown_ja": "イエス自身が食べたパンの穀物・発酵・焼き方は特定できない。古代の窯を今の「タブーン」と同じものと考えることには、考古学で注意が促されている。最後の晩餐のパンが種なしパンだったかは学説が割れる：共観福音書は過越の食事（種なしパンの祭り）として描くが、ヨハネ福音書の日付では過越の前になり、使われている語も一般の「パン（artos）」で「種なしパン（azymos）」ではない。",
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
    "title": "J. Ebeling「The tabun and its misidentification in the archaeological record」Levant (2015)",
    "url": "https://doi.org/10.1080/00758914.2015.1108022",
    "kind": "peer_reviewed",
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
   }
  ],
  "note": "スタジオ検討002（GPT・Gemini・Codex・Meta、Claude Web は取り込み中）を α が照合してまとめた。聖句は、日本では著作権の保護期間が終わったとされる口語訳（1955年）から短く引いた。",
  "links": null,
  "chapter": 3
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
