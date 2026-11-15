// data/bread_breads.js — 小麦とパン Focus のパン図鑑。生成：bread-focus-001/build_breads.py（手で直さない）。
// 出典調査：Codex REQUEST/REPORT_002（2026-11-15）＋ α の点検。earliest.from が null のパンは記録年が未確認（架空の年を置かない）。
export const breadKinds = [
 {
  "id": "shokupan",
  "name_ja": "食パン（角食・山型）",
  "name_local": "食パン／角食／山型食パン",
  "species": "パン小麦 (Triticum aestivum)",
  "flour": "精製小麦粉",
  "leaven": "イースト",
  "heat": "型焼き（蓋付き／蓋なし）",
  "form": "角形・山形ローフ",
  "region": "日本（横浜・成立年未確定）",
  "lat": 35.45,
  "lng": 139.64,
  "grain": "wheat",
  "leaven_group": "イースト",
  "heat_group": "型で焼く",
  "name_level_ja": "製品名（日本）",
  "earliest": {
   "from": 1860,
   "to": 1888,
   "label": "1860年代〜1888年（横浜。成立年は未確定）",
   "evidence": "1860年内海兵吉説と1869年内木パン説は沿革情報。確定一次史料は未確認。"
  },
  "confidence": "range",
  "kitchen_ja": "日本でいちばん身近なパン。四角い型で焼く、英国風のパンから始まりました。",
  "history_ja": "横浜の開港期に外国人向けのパン屋が開かれ、英国人ロバート・クラークの「ヨコハマベーカリー」で修業した打木彦太郎が1888年に店を継いだ（いまのウチキパン）。英国風の型焼きの山形パンを一般の家庭に売り出したのが日本の食パンの始まりの一つとされるが、確かな資料は少なく、成立年と場所は確定していない。横浜では1860年に内海兵吉が開いた店を日本の近代パンの始まりとする説明もある。",
  "method_ja": "小麦粉・水・塩・イーストに砂糖や油脂・乳を加えたやわらかい生地を、四角い型に入れて焼く。蓋をして焼くと四角い「角食」、蓋をせずに焼くと上がふくらんだ「山型」になる。英国式の山型は、昔はホップ種で発酵させた。",
  "legend_ja": "",
  "related": [
   "ev_pao_japan",
   "ev_egawa",
   "ev_anpan",
   "ev_school_lunch"
  ],
  "milestones": [
   {
    "from": 1860,
    "to": 1860,
    "label": "1860年説",
    "text_ja": "横浜のパン屋記念碑は、内海兵吉がフランス人から製法を習いパン屋を始めたと記す。",
    "kind": "japan",
    "confidence": "range",
    "note_ja": "業界団体の記念碑説明。日本のパン屋の開始に関する記述で、現代の食パンの成立年を示すものではない。",
    "source": {
     "title": "横浜パン屋記念碑",
     "url": "https://www.sougoupan.or.jp/monument/",
     "kind": "industry_association",
     "checked": "2026-11-15"
    }
   },
   {
    "from": 1946,
    "to": 1946,
    "label": "1946年",
    "text_ja": "戦後、小学校でコッペパンと牛乳の学校給食が始まり、児童を通じてパン食が広がる一段となった。",
    "kind": "japan",
    "confidence": "range",
    "note_ja": "食パンそのものではなく、パン食の普及に関する節目。",
    "source": {
     "title": "パンの歴史館 6 日本国民の主食となったパン",
     "url": "https://www.yamazakipan.co.jp/stylebook/pan-history/chapter/index06.html",
     "kind": "company_history",
     "checked": "2026-11-15"
    }
   },
   {
    "from": 1950,
    "to": 1950,
    "label": "1950年",
    "text_ja": "米国から小麦粉が送られ、パン食による完全給食が実施された。",
    "kind": "japan",
    "confidence": "confirmed",
    "note_ja": "文部科学省の教科書資料が記す学校給食の節目。特定の食パン製品の普及年ではない。",
    "source": {
     "title": "戦後の食料事情と学校給食",
     "url": "https://www.mext.go.jp/a_menu/shotou/kyoukasho/kentei/03062201/14-50/14-50-01.pdf",
     "kind": "government",
     "checked": "2026-11-15"
    }
   },
   {
    "from": 1954,
    "to": 1954,
    "label": "1954年",
    "text_ja": "学校給食法が成立し、学校給食の実施体制が法的に整った。",
    "kind": "institution",
    "confidence": "confirmed",
    "note_ja": "パンを含む学校給食制度の節目。",
    "source": {
     "title": "昭和から令和まで、年代別にみる学校給食の変遷",
     "url": "https://www.maff.go.jp/j/pr/aff/2006/food01.html",
     "kind": "government",
     "checked": "2026-11-15"
    }
   },
   {
    "from": 1955,
    "to": 1959,
    "label": "1950年代後半",
    "text_ja": "全国に大きなパン工場が相次いで建設され、パン生産量が増加した。",
    "kind": "japan",
    "confidence": "range",
    "note_ja": "製パン業界企業の歴史館による説明。食パンだけに限定した生産統計ではない。",
    "source": {
     "title": "パンの歴史館 6 日本国民の主食となったパン",
     "url": "https://www.yamazakipan.co.jp/stylebook/pan-history/chapter/index06.html",
     "kind": "company_history",
     "checked": "2026-11-15"
    }
   }
  ],
  "sources": [
   {
    "title": "食パンの歴史（内木パン）",
    "url": "https://www.uchikipan.co.jp/bread_history/",
    "kind": "company",
    "checked": "2026-11-15"
   },
   {
    "title": "記念碑（横浜市綜合パン・米飯協同組合）",
    "url": "https://www.sougoupan.or.jp/monument/",
    "kind": "industry_association",
    "checked": "2026-11-15"
   },
   {
    "title": "マイナビニュース「日本の食パンのルーツは横浜にあり」（2017）",
    "url": "https://news.mynavi.jp/article/20170628-bread/",
    "kind": "press",
    "checked": "2026-11-15"
   },
   {
    "title": "パンの歴史館 6 日本国民の主食となったパン",
    "url": "https://www.yamazakipan.co.jp/stylebook/pan-history/chapter/index06.html",
    "kind": "company_history",
    "checked": "2026-11-15"
   },
   {
    "title": "戦後の食料事情と学校給食",
    "url": "https://www.mext.go.jp/a_menu/shotou/kyoukasho/kentei/03062201/14-50/14-50-01.pdf",
    "kind": "government",
    "checked": "2026-11-15"
   },
   {
    "title": "昭和から令和まで、年代別にみる学校給食の変遷",
    "url": "https://www.maff.go.jp/j/pr/aff/2006/food01.html",
    "kind": "government",
    "checked": "2026-11-15"
   },
   {
    "title": "パンの歴史館 6 日本国民の主食となったパン",
    "url": "https://www.yamazakipan.co.jp/stylebook/pan-history/chapter/index06.html",
    "kind": "company_history",
    "checked": "2026-11-15"
   }
  ],
  "note": "Codex 調査は「内木パン1869年説」と書いていたが、出典の沿革は「ウチキパン（打木彦太郎）1888年創業」。α が報道記事で確かめて直した。 製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "baguette",
  "name_ja": "バゲット",
  "name_local": "baguette",
  "species": "パン小麦",
  "flour": "小麦粉",
  "leaven": "イーストまたは自然種",
  "heat": "窯焼き",
  "form": "細長い棒状",
  "region": "フランス（パリ中心）",
  "lat": 48.86,
  "lng": 2.35,
  "grain": "wheat",
  "leaven_group": "イースト",
  "heat_group": "窯で焼く",
  "name_level_ja": "製品名（形）",
  "earliest": {
   "from": 1900,
   "to": 1920,
   "label": "20世紀初めまでに名前の使用（初出は未確認）",
   "evidence": "長形パンの文化遺産インベントリ。最古一次記録未確認。"
  },
  "confidence": "range",
  "kitchen_ja": "細長いフランスのパン。粉・水・塩・イーストだけで作ります。",
  "history_ja": "成立年・発明者は未確定。1919年労働法が発明を生んだ説は証拠不十分。1993年政令は伝統フランスパン表示の要件で、バゲット一般の定義ではない。",
  "method_ja": "小麦粉・水・塩・イーストだけの生地（砂糖・油脂を入れない）を細長くのばし、表面に切れ目（クープ）を入れ、蒸気を入れた高温の窯で焼く。皮が薄くパリッとして、中に大きな気泡ができる。",
  "legend_ja": "",
  "related": [
   "ev_roller",
   "ev_fleischmann"
  ],
  "milestones": [
   {
    "from": 1960,
    "to": 1961,
    "label": "1960年代初頭",
    "text_ja": "フランス文化省のインベントリーは、約80cm・2 livresの長いパンから250gのバゲットへの重量縮小が1960年代初頭に進んだと記す。",
    "kind": "material",
    "confidence": "range",
    "note_ja": "資料内の根拠として挙げるのは1960–1961年のパリ製パン年鑑。",
    "source": {
     "title": "Fiche d’inventaire: savoir-faire artisanaux et culture de la baguette",
     "url": "https://www.culture.gouv.fr/Media/Thematiques/Patrimoine-culturel-immateriel/Files/Fiches-inventaire-du-PCI/Les-savoir-faire-artisanaux-et-la-culture-de-la-baguette-de-pain",
     "kind": "government",
     "checked": "2026-11-15"
    }
   },
   {
    "from": 1965,
    "to": 1965,
    "label": "1965年",
    "text_ja": "フランス文化省のインベントリーは、製パン教師Raymond Calvelの先行訪日後、Philippe Bigotが東京でバゲット製造の実演を行い、日本への定着の契機になったと記す。",
    "kind": "spread",
    "confidence": "range",
    "note_ja": "フランス文化省資料の記述。日本に最初にバゲットが伝来した年とは断定しない。",
    "source": {
     "title": "Fiche d’inventaire: savoir-faire artisanaux et culture de la baguette",
     "url": "https://www.culture.gouv.fr/Media/Thematiques/Patrimoine-culturel-immateriel/Files/Fiches-inventaire-du-PCI/Les-savoir-faire-artisanaux-et-la-culture-de-la-baguette-de-pain",
     "kind": "government",
     "checked": "2026-11-15"
    }
   },
   {
    "from": 1993,
    "to": 1993,
    "label": "1993年",
    "text_ja": "フランス政令が「pain de tradition française」等の表示条件を定め、冷凍処理・添加物などに関する要件を置いた。",
    "kind": "institution",
    "confidence": "confirmed",
    "note_ja": "政令は伝統フランスパンの表示要件で、バゲット全般の発明年・定義ではない。",
    "source": {
     "title": "Décret n°93-1074 du 13 septembre 1993",
     "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000727617/2026-04-28",
     "kind": "law",
     "checked": "2026-11-15"
    }
   },
   {
    "from": 2022,
    "to": 2022,
    "label": "2022年",
    "text_ja": "「バゲットの職人技と文化」がUNESCO無形文化遺産代表一覧に登録された。",
    "kind": "institution",
    "confidence": "confirmed",
    "note_ja": "登録対象は知識・技術・文化的実践。発明や最古記録の年ではない。",
    "source": {
     "title": "Decision 17.COM 7.b.8",
     "url": "https://ich.unesco.org/en/Decisions/17.com/7.b.8",
     "kind": "unesco",
     "checked": "2026-11-15"
    }
   }
  ],
  "sources": [
   {
    "title": "Décret n°93-1074 du 13 septembre 1993 — Légifrance",
    "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000727617/2026-04-28",
    "kind": "primary",
    "checked": "2026-11-15"
   },
   {
    "title": "Fiche d’inventaire: baguette de pain",
    "url": "https://pcilab-new.huma-num.fr/en/fiche-d-inventaire/fiche/444",
    "kind": "institution",
    "checked": "2026-11-15"
   },
   {
    "title": "Fiche d’inventaire: savoir-faire artisanaux et culture de la baguette",
    "url": "https://www.culture.gouv.fr/Media/Thematiques/Patrimoine-culturel-immateriel/Files/Fiches-inventaire-du-PCI/Les-savoir-faire-artisanaux-et-la-culture-de-la-baguette-de-pain",
    "kind": "government",
    "checked": "2026-11-15"
   },
   {
    "title": "Fiche d’inventaire: savoir-faire artisanaux et culture de la baguette",
    "url": "https://www.culture.gouv.fr/Media/Thematiques/Patrimoine-culturel-immateriel/Files/Fiches-inventaire-du-PCI/Les-savoir-faire-artisanaux-et-la-culture-de-la-baguette-de-pain",
    "kind": "government",
    "checked": "2026-11-15"
   },
   {
    "title": "Decision 17.COM 7.b.8",
    "url": "https://ich.unesco.org/en/Decisions/17.com/7.b.8",
    "kind": "unesco",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "pain_de_campagne",
  "name_ja": "パン・ド・カンパーニュ",
  "name_local": "pain de campagne",
  "species": "パン小麦、場合によりライ麦",
  "flour": "小麦粉主体",
  "leaven": "ルヴァンまたはイースト",
  "heat": "窯焼き",
  "form": "丸形・長円形ローフ",
  "region": "フランス各地",
  "lat": 46.6,
  "lng": 2.4,
  "grain": "mixed",
  "leaven_group": "自然種",
  "heat_group": "窯で焼く",
  "name_level_ja": "様式名",
  "earliest": {
   "from": null,
   "to": null,
   "label": "記録年は未確認",
   "evidence": "名称の最古記録未確認。"
  },
  "confidence": "range",
  "kitchen_ja": "「田舎のパン」。大きく丸く、少し酸っぱい、日持ちするパン。",
  "history_ja": "地方風食事パンの様式名で、地域ごとに粉・形・発酵が異なる。単一起源地・年は確認できない。",
  "method_ja": "小麦粉に全粒粉やライ麦を混ぜることが多く、自然種（ルヴァン）で長めに発酵させて大きく丸く焼く。酸味と厚い皮があり、日持ちがよい。",
  "legend_ja": "",
  "related": [],
  "milestones": [],
  "sources": [
   {
    "title": "The 5-minute essential guide to French bread?Atout France?",
    "url": "https://www.france.fr/en/article/everything-you-need-to-know-about-french-bread-in-5-minutes/",
    "kind": "tourism_institution",
    "checked": "2026-11-15"
   },
   {
    "title": "File:Pain de campagne.jpg?Wikimedia Commons?",
    "url": "https://commons.wikimedia.org/wiki/File:Pain_de_campagne.jpg",
    "kind": "image_metadata",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "croissant",
  "name_ja": "クロワッサン",
  "name_local": "croissant",
  "species": "パン小麦",
  "flour": "小麦粉",
  "leaven": "イースト・折り込み",
  "heat": "窯焼き",
  "form": "三日月形の層状パン",
  "region": "フランス・パリで普及",
  "lat": 48.86,
  "lng": 2.35,
  "grain": "wheat",
  "leaven_group": "イースト（層）",
  "heat_group": "窯で焼く",
  "name_level_ja": "製品名（形）",
  "earliest": {
   "from": 1838,
   "to": 1839,
   "label": "1838〜1839年（パリのウィーン風パン店）",
   "evidence": "パリのウィーン風パン店についての二次資料。製品名の初出ではない。"
  },
  "confidence": "range",
  "kitchen_ja": "バターと生地を何十層にも重ねた、パンとお菓子の間のようなパン。",
  "history_ja": "kipferlは先行するが現代の層状クロワッサンと同一とは確認できない。August Zangの店が1830年代後半に普及に関与した説がある。",
  "method_ja": "イースト生地にバターの板を包み、のばしては折る作業をくり返して、生地とバターの薄い層を何十にも重ねる。焼くとバターの水分が蒸気になって層が浮き上がる（パンと菓子の間の「ヴィエノワズリー」）。",
  "legend_ja": "1683年包囲で職人が敵の坑道を見つけ勝利の三日月パンを作った起源譚。同時代証拠はなく、1938年の料理百科事典で広まった形が確認されるが初出未確定。",
  "related": [
   "ev_roller"
  ],
  "milestones": [
   {
    "from": 1839,
    "to": 1839,
    "label": "1839年",
    "text_ja": "業界団体の用語集は、August ZangがパリでBoulangerie viennoiseを開き、クロワッサンをフランスに紹介したと記す。",
    "kind": "spread",
    "confidence": "range",
    "note_ja": "業界団体資料が採る普及史。kipferlと現代の折り込みクロワッサンは同一ではなく、発明年を確定しない。",
    "source": {
     "title": "Code des usages viennoiserie artisanale",
     "url": "https://www.boulangerie.org/wp-content/uploads/2017/10/code-usages.pdf",
     "kind": "industry_association",
     "checked": "2026-11-15"
    }
   },
   {
    "from": 1875,
    "to": 1875,
    "label": "1875年",
    "text_ja": "同じ業界団体資料は、クロワッサンがパン屋で売られ、パリ市民がコーヒーと食べていたとの記載を紹介する。",
    "kind": "spread",
    "confidence": "range",
    "note_ja": "資料が二次的に紹介する当時の記述。現代の朝食習慣がこの年に始まったとは断定しない。",
    "source": {
     "title": "Code des usages viennoiserie artisanale",
     "url": "https://www.boulangerie.org/wp-content/uploads/2017/10/code-usages.pdf",
     "kind": "industry_association",
     "checked": "2026-11-15"
    }
   },
   {
    "from": 1900,
    "to": 1909,
    "label": "20世紀初頭",
    "text_ja": "資料によれば、19世紀のクロワッサンは折り込み生地ではなく、折り込み生地を使うレシピはさらに約30年後に確認される。",
    "kind": "material",
    "confidence": "range",
    "note_ja": "年代は資料の「約30年後」という記述からの幅。製品名や形状だけで現代品と同一視しない。",
    "source": {
     "title": "Code des usages viennoiserie artisanale",
     "url": "https://www.boulangerie.org/wp-content/uploads/2017/10/code-usages.pdf",
     "kind": "industry_association",
     "checked": "2026-11-15"
    }
   }
  ],
  "sources": [
   {
    "title": "Is the Croissant Really French? — Smithsonian Magazine",
    "url": "https://www.smithsonianmag.com/arts-culture/croissant-really-french-180955130/",
    "kind": "secondary",
    "checked": "2026-11-15"
   },
   {
    "title": "Les grands mythes de la gastronomie — Université de Liège",
    "url": "https://www.campus.uliege.be/cms/c_9704828/fr/les-grands-mythes-de-la-gastronomie-l-histoire-du-croissant",
    "kind": "university",
    "checked": "2026-11-15"
   },
   {
    "title": "Code des usages viennoiserie artisanale",
    "url": "https://www.boulangerie.org/wp-content/uploads/2017/10/code-usages.pdf",
    "kind": "industry_association",
    "checked": "2026-11-15"
   },
   {
    "title": "Code des usages viennoiserie artisanale",
    "url": "https://www.boulangerie.org/wp-content/uploads/2017/10/code-usages.pdf",
    "kind": "industry_association",
    "checked": "2026-11-15"
   },
   {
    "title": "Code des usages viennoiserie artisanale",
    "url": "https://www.boulangerie.org/wp-content/uploads/2017/10/code-usages.pdf",
    "kind": "industry_association",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "brioche",
  "name_ja": "ブリオッシュ",
  "name_local": "brioche",
  "species": "パン小麦",
  "flour": "小麦粉",
  "leaven": "イースト",
  "heat": "窯焼き・型焼き",
  "form": "丸形・編み形",
  "region": "フランス・Rouenで語の記録",
  "lat": 49.44,
  "lng": 1.1,
  "grain": "wheat",
  "leaven_group": "イースト",
  "heat_group": "型で焼く",
  "name_level_ja": "製品名",
  "earliest": {
   "from": 1404,
   "to": 1404,
   "label": "1404年（ルーアンの記録に語）",
   "evidence": "Rouen会計記録の「deux pains, quatre brioches」。現代配合の成立を示さない。"
  },
  "confidence": "confirmed",
  "kitchen_ja": "バターと卵をたっぷり使った、やわらかいフランスのパン。",
  "history_ja": "語は1404年のRouen記録にある。現代のバター・卵入り仕様が同年に成立した証拠ではなく、各地で形や配合が多様化した。",
  "method_ja": "小麦粉にバターと卵をたっぷり加えた、やわらかく甘みのある生地を発酵させて焼く。頭の付いた形や編んだ形、型焼きなど地域で形が違う。",
  "legend_ja": "",
  "related": [],
  "milestones": [
   {
    "from": 1404,
    "to": 1404,
    "label": "1404年",
    "text_ja": "Rouenの会計記録に「brioches」の語が現れる。",
    "kind": "record",
    "confidence": "confirmed",
    "note_ja": "語の記録であり、現代の配合・形のブリオッシュが同年に成立した証拠ではない。",
    "source": {
     "title": "Brioche — Trésor de la langue française informatisé",
     "url": "https://www.cnrtl.fr/definition/brioche",
     "kind": "lexicographic_institution",
     "checked": "2026-11-15"
    }
   }
  ],
  "sources": [
   {
    "title": "Brioche?CNRTL, Tr?sor de la langue fran?aise?",
    "url": "https://www.cnrtl.fr/definition/brioche",
    "kind": "lexicographic_institution",
    "checked": "2026-11-15"
   },
   {
    "title": "Brioche?American Society of Baking?",
    "url": "https://asbe.org/article/brioche/?topic=recipes-and-formulation",
    "kind": "industry_association",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "rye_pumpernickel",
  "name_ja": "ライ麦パン（プンパーニッケル）",
  "name_local": "Roggenbrot／Westfälischer Pumpernickel",
  "species": "ライ麦 (Secale cereale)",
  "flour": "粗挽きライ麦全粒粉",
  "leaven": "サワードウ等",
  "heat": "低温長時間焼成",
  "form": "密な大型ローフ",
  "region": "ドイツ北西部・ヴェストファーレン",
  "lat": 51.57,
  "lng": 7.61,
  "grain": "rye",
  "leaven_group": "自然種",
  "heat_group": "型で焼く",
  "name_level_ja": "地域名・製品名",
  "earliest": {
   "from": 1570,
   "to": 1570,
   "label": "1570年（ヴェストファーレンの製造伝統。名前の初出とは別）",
   "evidence": "EU仕様書記載の製造伝統年。名称初出とは別。"
  },
  "confidence": "range",
  "kitchen_ja": "ライ麦で作る、黒くて重い北の国のパン。",
  "history_ja": "ライ麦パンは北中欧で多様に発達。EU仕様書は地域伝統を1570年に遡らせるが名称初出ではない。偶然発明・ナポレオン語源は不確かな伝承。",
  "method_ja": "ライ麦はグルテンが働きにくいため、酸っぱい自然種（サワー種）で生地を整える。プンパーニッケルは粗く挽いたライ麦を型に入れて蓋をし、低い温度で十数時間以上かけて蒸し焼きにし、黒く甘みのある色になる。",
  "legend_ja": "忘れた生地が黒パンになった説、ナポレオンが馬の餌と呼んだ説は不確か。",
  "related": [],
  "milestones": [
   {
    "from": 1570,
    "to": 1570,
    "label": "1570年（地域製造伝統）",
    "text_ja": "EU仕様書はヴェストファーレンのプンパーニッケル製造伝統を1570年に遡らせる。",
    "kind": "record",
    "confidence": "range",
    "note_ja": "地域の伝統年として記載されたもので、名称の最古用例・確定起源年ではない。",
    "source": {
     "title": "Westfälischer Pumpernickel — EU specification",
     "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52014XC0626%2804%29",
     "kind": "eu_regulatory",
     "checked": "2026-11-15"
    }
   },
   {
    "from": 2014,
    "to": 2014,
    "label": "2014年",
    "text_ja": "「Westfälischer Pumpernickel」がEUの地理的表示保護制度に登録された。",
    "kind": "institution",
    "confidence": "confirmed",
    "note_ja": "保護名称と仕様の制度上の節目。",
    "source": {
     "title": "Commission Implementing Regulation (EU) No 1241/2014",
     "url": "https://eur-lex.europa.eu/eli/reg_impl/2014/1241/oj/eng/pdf",
     "kind": "eu_regulatory",
     "checked": "2026-11-15"
    }
   }
  ],
  "sources": [
   {
    "title": "Westf?lischer Pumpernickel ? EU geographical indication specification",
    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52014XC0626%2804%29",
    "kind": "primary_regulatory",
    "checked": "2026-11-15"
   },
   {
    "title": "Our tradition ? Westphalian Pumpernickel",
    "url": "https://www.westfaelischer-pumpernickel.de/en/about-us/our-tradition/",
    "kind": "industry_association",
    "checked": "2026-11-15"
   },
   {
    "title": "Commission Implementing Regulation (EU) No 1241/2014",
    "url": "https://eur-lex.europa.eu/eli/reg_impl/2014/1241/oj/eng/pdf",
    "kind": "eu_regulatory",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "ciabatta",
  "name_ja": "チャバッタ",
  "name_local": "ciabatta",
  "species": "パン小麦",
  "flour": "小麦粉",
  "leaven": "イースト",
  "heat": "窯焼き",
  "form": "平たい長方形",
  "region": "イタリア北部・ヴェネト説",
  "lat": 45.23,
  "lng": 12.06,
  "grain": "wheat",
  "leaven_group": "イースト",
  "heat_group": "窯で焼く",
  "name_level_ja": "製品名（形）",
  "earliest": {
   "from": 1982,
   "to": 1982,
   "label": "1982年説（一次資料は未確認）",
   "evidence": "発明・商標を裏付ける一次資料未確認。"
  },
  "confidence": "range",
  "kitchen_ja": "「スリッパ」という意味の、平たくて穴の多いイタリアのパン。",
  "history_ja": "Cavallariが1982年に開発・商標登録した説があるが独立資料で照合できず、年・発明者は未確定。",
  "method_ja": "水分の多いやわらかい生地を、こねすぎずに長く発酵させ、のばして平たい形のまま焼く。大きな気泡と薄い皮が特徴。",
  "legend_ja": "",
  "related": [],
  "milestones": [],
  "sources": [
   {
    "title": "Ciabatta — Wikipedia (二次資料)",
    "url": "https://en.wikipedia.org/wiki/Ciabatta",
    "kind": "encyclopedia",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "focaccia",
  "name_ja": "フォカッチャ",
  "name_local": "focaccia",
  "species": "パン小麦",
  "flour": "小麦粉",
  "leaven": "イーストまたは自然種",
  "heat": "窯・炉床焼き",
  "form": "平たい円形・長方形",
  "region": "イタリア各地",
  "lat": 44.41,
  "lng": 8.93,
  "grain": "wheat",
  "leaven_group": "イースト",
  "heat_group": "窯で焼く",
  "name_level_ja": "製品名",
  "earliest": {
   "from": null,
   "to": null,
   "label": "記録年は未確認（古代ローマの類似語説）",
   "evidence": "panis focaciusは現代品の直接記録ではない。"
  },
  "confidence": "range",
  "kitchen_ja": "平たく広げて、オリーブ油をかけて焼くイタリアのパン。",
  "history_ja": "古代の炉床焼きパンに語を結びつける説はあるが、同一製品や連続した系譜は未確認。現代には地域差がある。",
  "method_ja": "油を使った発酵生地を平らに広げ、指で穴をあけて、オリーブ油や塩、ハーブをのせて焼く。",
  "legend_ja": "",
  "related": [],
  "milestones": [],
  "sources": [
   {
    "title": "A ciascuno il suo… — Parco Archeologico di Ercolano",
    "url": "https://ercolano.cultura.gov.it/a-ciascuno-il-suo-mostra-alimentazione/",
    "kind": "government_museum",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "naan",
  "name_ja": "ナン",
  "name_local": "نان (nān)／नान",
  "species": "パン小麦",
  "flour": "小麦粉",
  "leaven": "発酵種またはイースト",
  "heat": "タンドール内壁に貼る",
  "form": "楕円・涙形",
  "region": "ペルシア語圏・南アジア",
  "lat": 33.7,
  "lng": 73.06,
  "grain": "wheat",
  "leaven_group": "イースト・発酵種",
  "heat_group": "窯の壁に貼る",
  "name_level_ja": "地域の名前（「パン」の意味）",
  "earliest": {
   "from": 1300,
   "to": 1400,
   "label": "14世紀（南アジアの資料に食品として）",
   "evidence": "Amir Khusrau資料への言及。発明年ではない。"
  },
  "confidence": "range",
  "kitchen_ja": "壺の形の窯の内側に貼りつけて焼く、平たいパン。",
  "history_ja": "nānはペルシア語で広くパンの意味。南アジアで14世紀資料に食品として現れるが成立地や発明年を示さない。",
  "method_ja": "発酵させた生地を涙形にのばし、炭火で熱したタンドール（壺窯）の内壁に貼りつけて、高温で短時間に焼く。",
  "legend_ja": "",
  "related": [
   "ev_egypt_breadbeer"
  ],
  "milestones": [
   {
    "from": 1300,
    "to": 1399,
    "label": "14世紀（南アジアの記録への言及）",
    "text_ja": "前回参照した研究プロジェクト資料は、アミール・フスラウ関連の14世紀資料にnaanの言及があると紹介する。",
    "kind": "record",
    "confidence": "range",
    "note_ja": "既存調査で確認した二次的な紹介。製品の発明年・発祥地・現代のタンドールナンの記録とはみなさない。",
    "source": {
     "title": "When and where was naan bread first made?",
     "url": "https://food.interactiveatlas.org/open-questions-index/openq-naan-origin-date",
     "kind": "research_project",
     "checked": "2026-11-15"
    }
   }
  ],
  "sources": [
   {
    "title": "Bread — Encyclopaedia Iranica",
    "url": "https://www.iranicaonline.org/articles/bread-persian-nan/",
    "kind": "scholarly_encyclopedia",
    "checked": "2026-11-15"
   },
   {
    "title": "When and where was naan bread first made? — Food and Drink Atlas",
    "url": "https://food.interactiveatlas.org/open-questions-index/openq-naan-origin-date",
    "kind": "research_project",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "pita",
  "name_ja": "ピタ",
  "name_local": "pita／πίτα",
  "species": "パン小麦・地域により他穀物",
  "flour": "小麦粉",
  "leaven": "イーストまたは自然発酵",
  "heat": "高温炉",
  "form": "丸い平焼き・ポケット型",
  "region": "東地中海・レヴァント",
  "lat": 33.89,
  "lng": 35.5,
  "grain": "wheat",
  "leaven_group": "イースト",
  "heat_group": "窯で焼く",
  "name_level_ja": "地域の名前",
  "earliest": {
   "from": null,
   "to": null,
   "label": "記録年は未確認",
   "evidence": "現代ポケット型の最古記録未確認。"
  },
  "confidence": "range",
  "kitchen_ja": "焼くと中が空洞になる、東地中海の丸いパン。",
  "history_ja": "東地中海・中東の平焼きパンで地域差が大きい。現代型と古代パンの直接連続性・単一起源は未確認。",
  "method_ja": "発酵生地を薄い円にのばし、高温で短時間焼く。生地の中の水分が蒸気になって一気に膨らみ、中に空洞（ポケット）ができる。",
  "legend_ja": "",
  "related": [],
  "milestones": [],
  "sources": [
   {
    "title": "The Large and Diverse Family of Mediterranean Flat Breads: A Database",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9368210/",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "lavash",
  "name_ja": "ラヴァシュ",
  "name_local": "լավաշ (lavaš)",
  "species": "パン小麦",
  "flour": "小麦粉",
  "leaven": "無発酵または発酵・地域差",
  "heat": "トニール内壁に貼る",
  "form": "大きく薄い楕円形",
  "region": "アルメニア",
  "lat": 40.18,
  "lng": 44.51,
  "grain": "wheat",
  "leaven_group": "無発酵・弱い発酵",
  "heat_group": "窯の壁に貼る",
  "name_level_ja": "地域の名前",
  "earliest": {
   "from": null,
   "to": null,
   "label": "記録年は未確認（2014年に UNESCO 無形文化遺産に登録）",
   "evidence": "文化実践の登録年。パンの起源年や最古記録ではない。"
  },
  "confidence": "range",
  "kitchen_ja": "紙のように薄く大きい、アルメニアのパン。",
  "history_ja": "伝統的アルメニアパンの準備・意味・外観に関する実践が2014年にUNESCO代表一覧へ登録された。",
  "method_ja": "薄くのばした大きな生地を、地面に埋めた窯（トニール）の内壁に貼りつけて焼く。乾かして長く保存し、食べる前に水で湿らせることもある。",
  "legend_ja": "",
  "related": [],
  "milestones": [
   {
    "from": 2014,
    "to": 2014,
    "label": "2014年",
    "text_ja": "アルメニアが推薦したラヴァシュの準備・意味・外観に関する文化実践がUNESCO代表一覧に登録された。",
    "kind": "institution",
    "confidence": "confirmed",
    "note_ja": "文化実践の登録年であり、パンの発祥や最古記録の年ではない。",
    "source": {
     "title": "Decision 9.COM 10.3",
     "url": "https://ich.unesco.org/en/decisions/9.COM/10.3",
     "kind": "unesco",
     "checked": "2026-11-15"
    }
   }
  ],
  "sources": [
   {
    "title": "Lavash, the preparation, meaning and appearance of traditional Armenian bread?UNESCO?",
    "url": "https://ich.unesco.org/en/RL/lavash-the-preparation-meaning-and-appearance-of-traditional-armenian-bread-00985",
    "kind": "intergovernmental_organization",
    "checked": "2026-11-15"
   },
   {
    "title": "Decision of the Intergovernmental Committee: 9.COM 10.3",
    "url": "https://ich.unesco.org/en/decisions/9.COM/10.3",
    "kind": "intergovernmental_organization",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "chapati_roti",
  "name_ja": "チャパティ／ロティ",
  "name_local": "चपाती／रोटी",
  "species": "パン小麦",
  "flour": "全粒小麦粉（atta）",
  "leaven": "無発酵",
  "heat": "鉄板・直火",
  "form": "薄い円形",
  "region": "南アジア",
  "lat": 25.32,
  "lng": 83.01,
  "grain": "wheat",
  "leaven_group": "無発酵・弱い発酵",
  "heat_group": "鉄板・平板",
  "name_level_ja": "地域の名前",
  "earliest": {
   "from": null,
   "to": null,
   "label": "記録年は未確認",
   "evidence": "個別の最古記録未確認。"
  },
  "confidence": "range",
  "kitchen_ja": "発酵させずに鉄板で焼く、南アジアの毎日のパン。",
  "history_ja": "ロティはパン全般、チャパティは無発酵小麦パンを指す場合が多い。地域差があり成立年・単一起源は未確認。",
  "method_ja": "全粒の小麦粉（アタ）と水をこね、発酵させずに薄い円にのばして、鉄板（タワ）で焼く。最後に直火にかざすと、ぷくっと膨らむ（プルカ）。",
  "legend_ja": "",
  "related": [],
  "milestones": [],
  "sources": [
   {
    "title": "Chapaties and flat breads?University of Strathclyde thesis?",
    "url": "https://stax.strath.ac.uk/downloads/r494vk434?locale=en",
    "kind": "university_research",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "bagel",
  "name_ja": "ベーグル",
  "name_local": "בייגל／bajgiel",
  "species": "パン小麦",
  "flour": "小麦粉",
  "leaven": "イースト",
  "heat": "ゆでてから窯焼き",
  "form": "輪形",
  "region": "ポーランド・クラクフ",
  "lat": 50.06,
  "lng": 19.94,
  "grain": "wheat",
  "leaven_group": "イースト",
  "heat_group": "ゆでて焼く",
  "name_level_ja": "製品名（形）",
  "earliest": {
   "from": 1610,
   "to": 1610,
   "label": "1610年（クラクフの共同体規則）",
   "evidence": "クラクフ共同体規則に出産関連の贈り物として記載。"
  },
  "confidence": "confirmed",
  "kitchen_ja": "焼く前にゆでる、輪の形のパン。",
  "history_ja": "1610年記録は最古例の一つで発明年ではない。19〜20世紀に東欧系移民とともに北米へ広がった。",
  "method_ja": "発酵生地を輪の形にして、焼く前にお湯で短時間ゆでる。表面のでんぷんが固まって、つやのある皮と、詰まった歯ごたえのある中身になる。",
  "legend_ja": "ウィーン包囲・王への献上起源説に同時代根拠は確認できない。",
  "related": [],
  "milestones": [
   {
    "from": 1610,
    "to": 1610,
    "label": "1610年",
    "text_ja": "クラクフのユダヤ共同体規則に、出産に関連して贈る食品としてベーグルが記載される。",
    "kind": "record",
    "confidence": "confirmed",
    "note_ja": "記録年であり発明年ではない。",
    "source": {
     "title": "Food and Drink — YIVO Encyclopedia of Jews in Eastern Europe",
     "url": "https://encyclopedia.yivo.org/article.aspx/food_and_drink",
     "kind": "scholarly_encyclopedia",
     "checked": "2026-11-15"
    }
   },
   {
    "from": 1800,
    "to": 1999,
    "label": "19〜20世紀",
    "text_ja": "東欧系ユダヤ人の移住に伴って、ベーグルが北米へ広がった。",
    "kind": "spread",
    "confidence": "range",
    "note_ja": "移住・普及の幅を示す。北米での単一の到着年は置かない。",
    "source": {
     "title": "Food and Drink — YIVO Encyclopedia of Jews in Eastern Europe",
     "url": "https://encyclopedia.yivo.org/article.aspx/food_and_drink",
     "kind": "scholarly_encyclopedia",
     "checked": "2026-11-15"
    }
   }
  ],
  "sources": [
   {
    "title": "Food and Drink?YIVO Encyclopedia of Jews in Eastern Europe?",
    "url": "https://encyclopedia.yivo.org/article.aspx/food_and_drink",
    "kind": "scholarly_encyclopedia",
    "checked": "2026-11-15"
   },
   {
    "title": "(Not Only) Culinary History of Krakow?Krakow official visitor guide?",
    "url": "https://www.krakow.pl/zalacznik/366019",
    "kind": "municipal_institution",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "pretzel",
  "name_ja": "プレッツェル",
  "name_local": "Brezel／Pretzel",
  "species": "パン小麦",
  "flour": "小麦粉",
  "leaven": "イースト",
  "heat": "アルカリ処理後に窯焼き（現代南独型）",
  "form": "結び目形",
  "region": "中部ヨーロッパ・ドイツ語圏",
  "lat": 48.14,
  "lng": 11.58,
  "grain": "wheat",
  "leaven_group": "イースト",
  "heat_group": "ゆでて焼く",
  "name_level_ja": "製品名（形）",
  "earliest": {
   "from": 1100,
   "to": 1200,
   "label": "12世紀の写本の図像とされる（同定は保留）",
   "evidence": "Hortus deliciarumとされる図像は独立確認できず。"
  },
  "confidence": "range",
  "kitchen_ja": "結び目の形をした、ドイツ語圏のパン。",
  "history_ja": "12世紀写本の図像が早例とされるが同定や発祥地は確定しない。修道士の祈る腕を模した説も史実未確認。",
  "method_ja": "発酵生地をひも状にして結び目の形にし、南ドイツ風では焼く前にアルカリの液にくぐらせる。焼くと独特の茶色い皮と風味になる。",
  "legend_ja": "修道士発明譚は同時代の根拠を確認できない。",
  "related": [],
  "milestones": [],
  "sources": [
   {
    "title": "Pretzel — Wikipedia (二次資料)",
    "url": "https://en.wikipedia.org/wiki/Pretzel",
    "kind": "encyclopedia",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "mantou",
  "name_ja": "饅頭（中国の蒸しパン）",
  "name_local": "馒头／饅頭 (mántou)",
  "species": "パン小麦",
  "flour": "小麦粉",
  "leaven": "発酵種またはイースト",
  "heat": "蒸す",
  "form": "丸形・楕円形、通常は無餡",
  "region": "中国北部",
  "lat": 34.34,
  "lng": 108.94,
  "grain": "wheat",
  "leaven_group": "イースト・発酵種",
  "heat_group": "蒸す",
  "name_level_ja": "製品名",
  "earliest": {
   "from": null,
   "to": null,
   "label": "記録年は未確認",
   "evidence": "古い史料の語と現代の無餡饅頭が同じか未確認。"
  },
  "confidence": "range",
  "kitchen_ja": "焼かずに蒸して作る、中国の白いパン。",
  "history_ja": "中国史料の饅頭は現代の無餡饅頭と意味が異なる場合がある。後世に無餡饅頭と具入り包子を区別する地域がある。",
  "method_ja": "発酵させた小麦の生地を丸く成形して、オーブンではなく蒸籠（せいろ）で蒸す。焼き色の皮ができず、白くやわらかい。",
  "legend_ja": "諸葛亮が人頭の代わりに饅頭を供えた話は後世の説話で、同時代の発明記録ではない。",
  "related": [
   "ev_anpan"
  ],
  "milestones": [
   {
    "from": 200,
    "to": 299,
    "label": "3世紀（語と具入り食品の記述）",
    "text_ja": "初期中国史・食文化を扱う研究書は、3世紀の文献に現れる饅頭を具入りの食品として説明する。",
    "kind": "record",
    "confidence": "range",
    "note_ja": "現代の無餡蒸し饅頭と同一視できない。諸葛亮の逸話は史実の根拠として扱わない。",
    "source": {
     "title": "Food and Environment in Early and Medieval China",
     "url": "https://mindstalk.net/bkxyzzy/pdfs/foodEnvironmentChina.pdf",
     "kind": "academic_book",
     "checked": "2026-11-15"
    }
   },
   {
    "from": 1500,
    "to": 1599,
    "label": "16世紀後半",
    "text_ja": "同研究書は、16世紀後半の医家・高濂も「饅頭」を具入り食品の意味で用いたと述べる。",
    "kind": "record",
    "confidence": "range",
    "note_ja": "古い語義の記録。現代の中国北部で一般的な無餡饅頭との意味の変化は段階的で、年を特定できない。",
    "source": {
     "title": "Food and Environment in Early and Medieval China",
     "url": "https://mindstalk.net/bkxyzzy/pdfs/foodEnvironmentChina.pdf",
     "kind": "academic_book",
     "checked": "2026-11-15"
    }
   }
  ],
  "sources": [
   {
    "title": "饅頭的起源及其流變 — 中華科技史學會學刊",
    "url": "https://www.sciencehistory.url.tw/wp-content/uploads/2023/01/06%E8%AB%96%E6%96%872-0914-%E5%BC%B5%E4%B9%8B%E5%82%91-%E9%A5%85%E9%A0%AD%E7%9A%84%E8%B5%B7%E6%BA%90%E5%8F%8A%E5%85%B6%E6%B5%81%E8%AE%8A%E5%AD%B8%E5%88%8A%E7%AC%AC27%E6%9C%9F%EF%BC%8C%E6%9B%B4%E6%96%B0%E7%A8%BF.pdf",
    "kind": "scholarly_journal",
    "checked": "2026-11-15"
   },
   {
    "title": "Food and Environment in Early and Medieval China",
    "url": "https://mindstalk.net/bkxyzzy/pdfs/foodEnvironmentChina.pdf",
    "kind": "academic_book",
    "checked": "2026-11-15"
   },
   {
    "title": "Food and Environment in Early and Medieval China",
    "url": "https://mindstalk.net/bkxyzzy/pdfs/foodEnvironmentChina.pdf",
    "kind": "academic_book",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 },
 {
  "id": "injera",
  "name_ja": "インジェラ（比較）",
  "name_local": "እንጀራ／ጣይታ",
  "species": "テフ (Eragrostis tef)・他穀物も",
  "flour": "テフ粉・ソルガム等",
  "leaven": "自然発酵",
  "heat": "熱した平板（mitad）",
  "form": "大きな円形・スポンジ状",
  "region": "エチオピア高原",
  "lat": 9.03,
  "lng": 38.74,
  "grain": "teff",
  "leaven_group": "自然種",
  "heat_group": "鉄板・平板",
  "name_level_ja": "地域の名前",
  "earliest": {
   "from": null,
   "to": null,
   "label": "記録年は未確認",
   "evidence": "テフ栽培・焼皿の古資料は現代インジェラの直接記録でない。"
  },
  "confidence": "range",
  "kitchen_ja": "小麦ではなくテフで作る、エチオピアの酸っぱい薄焼きパン。",
  "history_ja": "テフを主原料とする発酵平焼きパン。16〜18世紀に主食として成立・普及したという研究は仮説的再構成。",
  "method_ja": "テフの粉と水を数日おいて自然に発酵させ、酸味のある生地を大きな平らな鉄板（ミタド）に流して、蓋をして片面だけ焼く。表面に無数の小さな穴ができる。",
  "legend_ja": "",
  "related": [
   "ev_sourdough500"
  ],
  "milestones": [
   {
    "from": 500,
    "to": 599,
    "label": "6世紀ごろ（関連する考古学的証拠）",
    "text_ja": "研究論文要旨は、アクスム地域でテフ栽培とインジェラ用鉄板に似た土器皿が現れる時期を6世紀ごろと報告する。",
    "kind": "tool",
    "confidence": "range",
    "note_ja": "この証拠はインジェラそのものや当時の主食化を示さない。",
    "source": {
     "title": "Increase in Teff Consumption in Northern Ethiopia between the 16th and 18th Centuries and the Birth of Injera",
     "url": "https://cir.nii.ac.jp/crid/1390577740958792448",
     "kind": "peer_reviewed",
     "checked": "2026-11-15"
    }
   },
   {
    "from": 1500,
    "to": 1799,
    "label": "16〜18世紀",
    "text_ja": "同論文は北部エチオピアでのテフ消費増加とインジェラの成立をこの時期に置く仮説的再構成を提示する。",
    "kind": "material",
    "confidence": "range",
    "note_ja": "論文の歴史仮説であり、インジェラの直接的な最古記録や確定した成立年ではない。",
    "source": {
     "title": "Increase in Teff Consumption in Northern Ethiopia between the 16th and 18th Centuries and the Birth of Injera",
     "url": "https://cir.nii.ac.jp/crid/1390577740958792448",
     "kind": "peer_reviewed",
     "checked": "2026-11-15"
    }
   }
  ],
  "sources": [
   {
    "title": "Increase in Teff Consumption in Northern Ethiopia between the 16th and 18th Centuries and the Birth of Injera",
    "url": "https://cir.nii.ac.jp/crid/1390577740958792448",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   },
   {
    "title": "Injera (An Ethnic, Traditional Staple Food of Ethiopia): A review",
    "url": "https://doi.org/10.1186/s42779-020-00069-x",
    "kind": "peer_reviewed",
    "checked": "2026-11-15"
   }
  ],
  "note": "製法の要点は α が一般的な製パンの説明で補った（分量のレシピは載せない）。"
 }
];
