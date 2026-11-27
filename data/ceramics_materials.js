// data/ceramics_materials.js — 焼き物 Focus（History OS）。生成：ceramics-focus-001/build_ceramics_data.py（手で直さない）。
// 出典調査：Codex REPORT_001・002（2026-11-20）＋ α の点検 REVIEW_001・002。確かさ confirmed=確定 / range=幅 / narrative=語り。
export const ceramicsMaterials = [
 {
  "id": "M01",
  "name_ja": "泉山磁石場（有田）",
  "kind": "陶石",
  "lat": 33.192,
  "lng": 129.893,
  "precision": "site",
  "from": 1600,
  "to": 1995,
  "label": "17世紀初め（発見の伝承）〜1995年ごろまで採石",
  "confidence": "range",
  "fact_ja": "観光庁の解説によると、地元の言い伝えでは17世紀の最初の数十年間に金ケ江三兵衛（李参平）が発見したとされる。200年以上手作業で切り出され、明治維新の後に機械が使われるようになった。1897年には約10,024トンを切り出した。1980年に国指定史跡、1995年ごろまで採石場として使われた。",
  "unknown_ja": "発見の年と人物は伝承。泉山の陶石だけで磁器の生産がいつまで足りたか。",
  "jp": {
   "region_jp": "肥前",
   "tea_ware": false
  },
  "sources": [
   {
    "title": "泉山磁石場（観光庁 多言語解説文データベース）",
    "url": "https://www.mlit.go.jp/tagengo-db/R2-01930.html",
    "kind": "institution",
    "checked": "2026-11-21"
   }
  ]
 },
 {
  "id": "M02",
  "name_ja": "天草の陶石",
  "kind": "陶石",
  "lat": 32.45,
  "lng": 130.02,
  "precision": "region",
  "from": 1710,
  "to": 2026,
  "label": "1690年に砥石として見つかり、1710年ころから有田へ。いまも有田焼の大半",
  "confidence": "range",
  "fact_ja": "産総研（当時の地質調査所）の地質ニュース（1999年）によると、天草陶石は1690年に名主の上田伝五右衛門によって見つかり、はじめは砥石（天草砥）として開発された。1710年ころから有田焼の原料として出荷されるようになり、以後は有田焼の主原料になった。チタンが0.05%以下と日本の陶石としてはきわめて少ないので白く焼き上がり、焼くときの寸法の変わり方も小さいため、高圧の碍子にも使われる。中国では磁器に「瓷石」とカオリンを使うが、日本では陶石だけで磁器を作るので、陶石は日本独特の資源ともいえる。観光庁の泉山磁石場の解説は、1800年代後半までに有田の窯元が天草の陶石を買い始め、いまの有田焼の大半に天草の陶石が使われていると書く。",
  "unknown_ja": "有田に出回り始めた年は資料で違う（地質ニュースは1710年ころ、観光庁は1800年代後半までに購入）。いまの有田焼で天草陶石が占める割合の数字。上田伝五右衛門の名は、PDFの文字の読み取りが「伝石工門」となっており、αが「伝五右衛門」と読んだ。",
  "jp": {
   "region_jp": "肥後",
   "tea_ware": false
  },
  "sources": [
   {
    "title": "濱崎聡志・須藤定久「熊本県天草地方の陶石鉱床」（地質ニュース538号, 1999年6月, 地質調査所＝現 産総研）",
    "url": "https://www.gsj.jp/data/chishitsunews/99_06_07.pdf",
    "kind": "institution",
    "checked": "2026-11-26"
   },
   {
    "title": "泉山磁石場（観光庁 多言語解説文データベース）",
    "url": "https://www.mlit.go.jp/tagengo-db/R2-01930.html",
    "kind": "institution",
    "checked": "2026-11-21"
   }
  ]
 },
 {
  "id": "M03",
  "name_ja": "瀬戸の陶土（木節粘土・蛙目粘土）",
  "kind": "粘土",
  "lat": 35.23,
  "lng": 137.1,
  "precision": "region",
  "from": null,
  "to": null,
  "label": "いまも採れる（地層の年代はこの出典では扱わない）",
  "confidence": "confirmed",
  "fact_ja": "産総研の地質ニュース（2023）によると、瀬戸地区の周りはほとんど花崗岩類で、花崗岩から供給された石英や長石類から珪砂・粘土が多く産出した。木節粘土は木片が混じる粘土で浅い水域に堆積したと考えられ、複雑な陶磁器に必須とされる。蛙目粘土は粘土の中に粗い石英粒が点在し、食器などの大量生産に欠くことのできない原料とされる。",
  "unknown_ja": "蛙目粘土が堆積してできたのか、堆積後の変化でできたのかは研究が続いている（この報告は後者を推論）。",
  "jp": {
   "region_jp": "尾張",
   "tea_ware": false
  },
  "sources": [
   {
    "title": "須藤・宮腰・高木（2023）愛知県瀬戸地区の窯業原料資源の成因に関する考察 その1（GSJ 地質ニュース 12-3）",
    "url": "https://www.gsj.jp/data/gcn/gsj_cn_vol12.no3_p72-76.pdf",
    "kind": "institution",
    "checked": "2026-11-21"
   }
  ]
 },
 {
  "id": "M04",
  "name_ja": "ザイリッツのカオリン（マイセン）",
  "kind": "カオリン",
  "lat": 51.12,
  "lng": 13.4,
  "precision": "region",
  "from": 1764,
  "to": 2026,
  "label": "1764年から採掘、いまも年約150トン",
  "confidence": "confirmed",
  "fact_ja": "マイセンの公式の解説によると、マイセンから約12kmのザイリッツ村で1764年からカオリンが採掘され、いまも年に約150トンの鉄分のごく少ないカオリンが掘られる。ヨーロッパでいちばん小さい鉱山とされる。",
  "unknown_ja": "それ以前に使われたアウエ（シュネーベルク）のカオリンとの切り替えの年（この出典では述べていない）。",
  "jp": {
   "region_jp": "",
   "tea_ware": false
  },
  "sources": [
   {
    "title": "Kaolin & Mine（Meissen 公式）",
    "url": "https://www.meissen.com/en/craft/kaolin",
    "kind": "corporate",
    "checked": "2026-11-21"
   }
  ]
 },
 {
  "id": "M05",
  "name_ja": "コーンウォールのチャイナクレイ",
  "kind": "カオリン",
  "lat": 50.11,
  "lng": -5.35,
  "precision": "site",
  "from": 1746,
  "to": 2000,
  "label": "1746年の発見から、2000年の最後の船積みまで",
  "confidence": "range",
  "fact_ja": "コーンウォール国立海事博物館の記事によると、1746年にプリマスの薬剤師ウィリアム・クックワージーがトレゴニング・ヒルでチャイナクレイを見つけた。産業はセント・オーステルの周りで急速に育ち、チャールズタウン港（1700年代後半に築港）などから、陶磁器の産地へ運ぶため船で東岸のハンバーへ送られた。商用の最後の積み出しは2000年。",
  "unknown_ja": "ハンバーから先、どの窯場へ運ばれたか（この出典はスタッフォードシャーの名を挙げていない）。",
  "jp": {
   "region_jp": "",
   "tea_ware": false
  },
  "sources": [
   {
    "title": "Finding white gold in Cornwall（National Maritime Museum Cornwall, 2024）",
    "url": "https://nmmc.co.uk/2024/07/finding-white-gold-in-cornwall/",
    "kind": "institution",
    "checked": "2026-11-21"
   },
   {
    "title": "Perfecting porcelain（Science Museum Blog, 2018）",
    "url": "https://blog.sciencemuseum.org.uk/perfecting-porcelain",
    "kind": "institution",
    "checked": "2026-11-21"
   }
  ]
 }
];
export const ceramicsMaterialLinks = [
 {
  "id": "L01",
  "from": "M01",
  "to_name": "有田の窯",
  "to": [
   33.2,
   129.88
  ],
  "from_year": 1600,
  "to_year": 1995,
  "label_ja": "泉山の陶石 → 有田の窯",
  "confidence": "range",
  "lenses": [
   "raw"
  ]
 },
 {
  "id": "L02",
  "from": "M02",
  "to_name": "有田の窯",
  "to": [
   33.2,
   129.88
  ],
  "from_year": 1710,
  "to_year": 2026,
  "label_ja": "天草の陶石 → 有田の窯（1710年ころから。高浜港から積み出す）",
  "confidence": "range",
  "lenses": [
   "raw",
   "carry"
  ]
 },
 {
  "id": "L03",
  "from": "M04",
  "to_name": "マイセン",
  "to": [
   51.16,
   13.47
  ],
  "from_year": 1764,
  "to_year": 2026,
  "label_ja": "ザイリッツのカオリン → マイセン（約12km）",
  "confidence": "confirmed",
  "lenses": [
   "raw"
  ]
 },
 {
  "id": "L04",
  "from": "M05",
  "to_name": "ハンバー（東岸）",
  "to": [
   53.62,
   -0.2
  ],
  "from_year": 1750,
  "to_year": 2000,
  "label_ja": "コーンウォールのチャイナクレイ → 船でハンバーへ（陶磁器の産地へ。チャールズタウン港は1700年代後半の築港）",
  "confidence": "range",
  "lenses": [
   "raw",
   "carry"
  ]
 },
 {
  "id": "L05",
  "from": "M02",
  "to_name": "名古屋方面",
  "to": [
   35.17,
   136.9
  ],
  "from_year": 1999,
  "to_year": 2026,
  "label_ja": "天草の陶石 → 名古屋方面へも（高浜港から。1999年の記述）",
  "confidence": "range",
  "lenses": [
   "raw",
   "carry"
  ]
 }
];
