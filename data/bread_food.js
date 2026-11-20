// data/bread_food.js — 小麦とパン Focus（History OS）。生成：bread-focus-001/build_bread_data.py（手で直さない）。
// 出典調査：Codex REQUEST/REPORT_001（2026-11-15）＋ α の点検 REVIEW_001。確かさ confirmed=確定 / range=幅（学説が割れる・推定） / narrative=語り。
export const breadAttributions = [
 {
  "claim": "「パンがなければお菓子を」",
  "attributed_to": "マリー＝アントワネット",
  "earliest": {
   "year": "1765頃",
   "text": "ルソー『告白』第6巻の無名の「大公妃」逸話（執筆年。刊行は1782）"
  },
  "first_link": {
   "year": "1843",
   "text": "アルフォンス・カー『Les Guêpes』で彼女に結びつけたとする説"
  },
  "confidence": "narrative",
  "note_ja": "ルソー本文はアントワネットを名指ししない。1843年初出説は二次資料に基づき、原誌面照合は未完了。",
  "source": {
   "title": "Did Marie Antoinette Really Say Let Them Eat Cake?",
   "url": "https://www.history.com/articles/did-marie-antoinette-really-say-let-them-eat-cake",
   "kind": "secondary",
   "checked": "2026-11-15"
  }
 },
 {
  "claim": "クロワッサンとウィーン包囲（1683）",
  "attributed_to": "ウィーンのパン職人／オスマン軍",
  "earliest": {
   "year": "19世紀（初出未確定）",
   "text": "包囲戦後に三日月形菓子を作ったという起源譚。最初の語りは特定できず"
  },
  "first_link": {
   "year": "1938",
   "text": "Alfred Gottschalk, Larousse Gastronomique（初版）のブダペスト1686説。1948年著作ではウィーン1683説"
  },
  "confidence": "narrative",
  "note_ja": "1683年にクロワッサンが発明された史実として確認できない。先行するkipferlとクロワッサンを区別する。",
  "source": {
   "title": "Is the Croissant Really French?",
   "url": "https://www.smithsonianmag.com/arts-culture/croissant-really-french-180955130/",
   "kind": "secondary",
   "checked": "2026-11-15"
  }
 },
 {
  "claim": "コーヒーハウスとウィーン包囲（1683）",
  "attributed_to": "Georg Franz Kolschitzky／Jerzy Franciszek Kulczycki",
  "earliest": {
   "year": "1783",
   "text": "Gottfried Uhlich, Geschichte der zweyten türkischen Belagerung Wiens（伝説的人物を語る文献）"
  },
  "first_link": {
   "year": "1783",
   "text": "同書で包囲後にコーヒー店を開いた逸話が記されたとされる"
  },
  "confidence": "narrative",
  "note_ja": "ウィーン市の案内はコルシツキーの起源譚をlegendと明記。初期コーヒーハウスの開業年には別説がある。",
  "source": {
   "title": "History of Viennese coffee house culture",
   "url": "https://www.wien.gv.at/en/leisure/viennese-coffee-culture",
   "kind": "institution",
   "checked": "2026-11-15"
  }
 },
 {
  "claim": "フランス伝統パンの法令",
  "attributed_to": "「バゲットは1993年に法令で定義」",
  "earliest": {
   "year": "1993",
   "text": "Décret n°93-1074 du 13 septembre 1993"
  },
  "first_link": {
   "year": "1993",
   "text": "同政令がpain de tradition française等の販売名称と要件を規定"
  },
  "confidence": "confirmed",
  "note_ja": "政令はバゲット全般の発明・形状ではなく、一定名称で販売するパンの製法・原材料要件を規定する。",
  "source": {
   "title": "Décret n°93-1074 du 13 septembre 1993",
   "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006933917/2024-10-22",
   "kind": "primary",
   "checked": "2026-11-15"
  }
 }
];
export const breadLeavens = [
 {
  "name_ja": "自然種（サワードウ）",
  "name_level": "leaven",
  "what_ja": "乳酸菌と酵母が糖を発酵し、二酸化炭素で生地を膨らませる。",
  "history_ja": "地域・粉・管理条件と種の履歴で微生物群集は変わる。500種研究は地理だけで決まるという俗説を支持しない。",
  "organisms": "Saccharomyces属などの酵母、乳酸菌（複数属）",
  "source": {
   "title": "The diversity and function of sourdough starter microbiomes",
   "url": "https://pubmed.ncbi.nlm.nih.gov/33496265/",
   "kind": "peer_reviewed",
   "checked": "2026-11-15"
  }
 },
 {
  "name_ja": "ビール種（ビール酵母・泡）",
  "name_level": "leaven",
  "what_ja": "醸造由来の酵母を生地に加え、発酵で生じる二酸化炭素を利用する。",
  "history_ja": "醸造とパン作りの接点は古いが、古代の個別工程は遺物・文献ごとの確認が必要。",
  "organisms": "Saccharomyces cerevisiae等",
  "source": {
   "title": "Investigation of Ancient Egyptian Baking and Brewing Methods",
   "url": "https://pubmed.ncbi.nlm.nih.gov/8662535/",
   "kind": "peer_reviewed",
   "checked": "2026-11-15"
  }
 },
 {
  "name_ja": "酒種",
  "name_level": "leaven",
  "what_ja": "米・麹由来の発酵種に含まれる酵母などが糖を発酵し、生地を膨らませる。",
  "history_ja": "木村屋の酒種あんパンは1870年代に記録される。酒種を麹菌だけとみなさない。",
  "organisms": "酵母、麹菌由来の酵素・糖化系（組成は種ごとに異なる）",
  "source": {
   "title": "日本洋菓子史",
   "url": "https://gateaux.or.jp/about/history/",
   "kind": "institution",
   "checked": "2026-11-15"
  }
 },
 {
  "name_ja": "ホップ種",
  "name_level": "leaven",
  "what_ja": "醸造由来などの発酵種を加え、酵母の発酵で膨らませる。",
  "history_ja": "近代以前から市販・醸造由来の種が使われたが、地域別初出はこの調査では未確認。",
  "organisms": "酵母（菌種・組成は種による）",
  "source": {
   "title": "Fleischmann, Charles Louis: yeast manufacturer and inventor",
   "url": "https://academic.oup.com/american-national-biography/reference/63042/reference-article-abstract/570373061",
   "kind": "book",
   "checked": "2026-11-15"
  }
 },
 {
  "name_ja": "イースト（市販パン酵母）",
  "name_level": "leaven",
  "what_ja": "培養酵母が糖を発酵し二酸化炭素を発生させて生地を膨張させる。",
  "history_ja": "19世紀には圧搾酵母の事業化・普及が進んだ。Fleischmann特許は1870年、米国での普及は1876年以降。",
  "organisms": "主にSaccharomyces cerevisiae",
  "source": {
   "title": "Fleischmann, Charles Louis: yeast manufacturer and inventor",
   "url": "https://academic.oup.com/american-national-biography/reference/63042/reference-article-abstract/570373061",
   "kind": "book",
   "checked": "2026-11-15"
  }
 },
 {
  "name_ja": "無発酵（無酵母）",
  "name_level": "process",
  "what_ja": "酵母発酵で膨らませない。薄く焼く、層状にする、蒸気など別の物理作用が膨張に関わる場合がある。",
  "history_ja": "無発酵パンは属性であり、歴史上一種類・一起源の食品ではない。",
  "organisms": "発酵微生物を膨張要因としない",
  "source": {
   "title": "An archaeological study of baking and bread in New Kingdom Egypt",
   "url": "https://www.repository.cam.ac.uk/items/900e5220-60cf-47b3-b640-3126121cf5cf",
   "kind": "peer_reviewed",
   "checked": "2026-11-15"
  }
 },
 {
  "name_ja": "パン酵母",
  "name_level": "organism",
  "what_ja": "S. cerevisiaeは糖を代謝し、二酸化炭素とエタノールを生成する。",
  "history_ja": "自然種・醸造種・選抜市販株には異なる系統・利用史がある。",
  "organisms": "Saccharomyces cerevisiae",
  "source": {
   "title": "History and Domestication of Saccharomyces cerevisiae in Bread Baking",
   "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7686800/",
   "kind": "peer_reviewed",
   "checked": "2026-11-15"
  }
 },
 {
  "name_ja": "乳酸菌",
  "name_level": "organism",
  "what_ja": "糖代謝で乳酸などの有機酸を作り、サワードウの酸味・香りに寄与する。",
  "history_ja": "サワードウで酵母と共存する群集の一部。菌種構成はサンプルで異なる。",
  "organisms": "乳酸菌（複数属）",
  "source": {
   "title": "The diversity and function of sourdough starter microbiomes",
   "url": "https://pubmed.ncbi.nlm.nih.gov/33496265/",
   "kind": "peer_reviewed",
   "checked": "2026-11-15"
  }
 },
 {
  "name_ja": "酢酸菌",
  "name_level": "organism",
  "what_ja": "エタノールなどを酸化して酢酸を作る。パン種への寄与は条件依存。",
  "history_ja": "500種研究の一部サンプルで検出。一律にサワードウの必須菌とは言えない。",
  "organisms": "Acetobacteraceae等",
  "source": {
   "title": "The diversity and function of sourdough starter microbiomes",
   "url": "https://pubmed.ncbi.nlm.nih.gov/33496265/",
   "kind": "peer_reviewed",
   "checked": "2026-11-15"
  }
 },
 {
  "name_ja": "麹菌",
  "name_level": "organism",
  "what_ja": "麹菌は穀物成分を分解する酵素を作り、糖化などを助ける。単独で膨らませる酵母と同じ役割ではない。",
  "history_ja": "酒種の背景に麹を使う発酵文化がある。酒種内の菌群は作り方ごとに異なり、麹菌の常在を一律に断定しない。",
  "organisms": "Aspergillus oryzae（麹づくり）、酵母との共働",
  "source": {
   "title": "日本洋菓子史",
   "url": "https://gateaux.or.jp/about/history/",
   "kind": "institution",
   "checked": "2026-11-15"
  }
 }
];
