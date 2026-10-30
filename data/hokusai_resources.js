// data/hokusai_resources.js — 年代別資料レイヤー（北斎Focus）  ※自動生成。手で直さず生成スクリプトを直す
// 出典: GPT北斎資料 001〜005（2026-10-28 調査, 利用者提供）を統合。原資料の文言・権利状態は書き換えていない。
//       ＋ 年代別作品 met-001（The Met Open Access から OS 編集で選定。id=MET-<objectID>）。
// 期のキー = data/hokusai_life.js の lifePhases[].from。phases:[] = 生涯全体／時期を特定しない。
// role: period=期の資料 / general=生涯全体 / anecdote=逸話の根拠としてのみ表示 / policy=利用条件の参照（画面の期一覧には出さない）
//       / reference=参考作品（北斎作ではない・relation に北斎との関係と根拠）。
// oldMaps=古地図（個別資料で利用条件確認済み・IIIF原図の該当範囲）／ textLinks=年譜の語→地図・古地図（図録本文は書き換えない）。
// 画像(image)は The Met 個別作品で isPublicDomain=true を API で確認したものだけ。それ以外は外部リンクのみ。
// phaseBy / layerBy:'OS編集' = 期・根拠の層の割当は OS 側の判断（GPT資料の記載ではない）。
// 逸話IDは 003＋004 を正とする（002 とは番号が異なる。002 の番号は prev002 に保持）。

export const resourcesMeta = {
 "version": "001",
 "compiledFrom": [
  "001",
  "002",
  "003",
  "004",
  "005"
 ],
 "researchedAt": "2026-10-28",
 "compiledAt": "2026-10-30",
 "note": "調査候補を含む。資料の存在確認は個々の主張の一次史料確認と同一ではない。"
};

export const resourceSources = [
 {
  "id": "HKR-001",
  "pkg": "001",
  "title": "北斎の生涯（すみだ北斎美術館）",
  "org": "すみだ北斎美術館",
  "url": "https://hokusai-museum.jp/modules/Page/pages/view/402",
  "kind": "commentary",
  "role": "period",
  "phases": [
   1760
  ],
  "years": [
   1760,
   1777
  ],
  "desc": "出生地を本所割下水付近とする説明、幼少期の伝承、絵師以前の経歴。伝承と確定史実を分けて引用する。",
  "rights": {
   "status": "LINK_ONLY",
   "basis": "公式解説ページへのリンク・参照を基本とする。文章の転載やサイト画像の転載は別途条件確認。"
  },
  "confidence": "official_summary; biographical details partly traditional",
  "priority": "P0",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-002",
  "pkg": "001",
  "title": "墨田区公式：葛飾北斎とすみだ北斎美術館",
  "org": "墨田区",
  "url": "https://www.city.sumida.lg.jp/bunka_kanko/katusika_hokusai/index.html",
  "kind": "commentary",
  "role": "general",
  "phases": [],
  "years": [
   1760,
   1850
  ],
  "desc": "北斎の出生地を本所割下水付近（現在の亀沢付近）とする自治体の説明。",
  "rights": {
   "status": "LINK_ONLY",
   "basis": "公式ページへのリンクを掲載。ページ内画像・文章の転載は別途確認。"
  },
  "confidence": "official_summary; exact house location not established",
  "priority": "P0",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-003",
  "pkg": "001",
  "title": "尾張屋版 江戸切絵図・本所絵図（CODH 江戸マップ）",
  "org": "人文学オープンデータ共同利用センター（CODH）",
  "url": "https://codh.rois.ac.jp/edo-maps/owariya/16/",
  "kind": "map",
  "role": "period",
  "phases": [
   1760
  ],
  "years": [
   1760,
   1868
  ],
  "desc": "本所絵図の地名索引。南割下水・北割下水などを原図・現代地図と照合する入口。",
  "rights": {
   "status": "DATASET_CC_BY_4_0; MAP_IMAGE_RIGHTS_VERIFY_PER_ITEM",
   "basis": "CODH地名データセットのCC BY 4.0表記と、個々の原図画像の権利を分けて扱う。原図画像の再掲載は画像ごとに確認。"
  },
  "confidence": "map index; map edition date varies by item",
  "priority": "P0",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-004",
  "pkg": "001",
  "title": "国立国会図書館デジタルコレクション（本所絵図の検索入口）",
  "org": "国立国会図書館",
  "url": "https://dl.ndl.go.jp/search/searchResult?title=%E6%9C%AC%E6%89%80%E7%B5%B5%E5%9B%B3",
  "kind": "catalog",
  "role": "period",
  "phases": [
   1760
  ],
  "years": [
   1760,
   1868
  ],
  "desc": "本所絵図の原資料候補を検索し、個別巻号・画像ごとの公開範囲を確認する。",
  "rights": {
   "status": "VERIFY_EACH_ITEM",
   "basis": "個々の巻号・画像の公開範囲を確認する。『インターネット公開（保護期間満了）』等の表示だけでなく、対象画像の表示条件を確認。"
  },
  "confidence": "catalog search entry; exact record must be selected",
  "priority": "P0",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-005",
  "pkg": "001",
  "title": "北斎の生涯：習作の時代",
  "org": "すみだ北斎美術館",
  "url": "https://hokusai-museum.jp/modules/Page/pages/view/402",
  "kind": "commentary",
  "role": "period",
  "phases": [
   1779
  ],
  "years": [
   1778,
   1794
  ],
  "desc": "勝川春章への入門、春朗名義の活動、初期の多様な題材についての美術館解説。",
  "rights": {
   "status": "LINK_ONLY",
   "basis": "作品画像は所蔵機関の個別作品ページから利用条件を確認。"
  },
  "confidence": "official_summary",
  "priority": "P1",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-006",
  "pkg": "001",
  "title": "『豆まきをする金太郎』など初期作品の解説",
  "org": "すみだ北斎美術館",
  "url": "https://hokusai-museum.jp/modules/Page/pages/view/402",
  "kind": "commentary",
  "role": "period",
  "phases": [
   1779
  ],
  "years": [
   1781,
   1789
  ],
  "desc": "すみだ北斎美術館の生涯ページに掲載される初期作品例。各作品の個別画像ページ・権利条件は別途特定する。",
  "rights": {
   "status": "LINK_ONLY",
   "basis": "現段階ではページ内画像の直接転載を行わず、公式ページへリンクする。"
  },
  "confidence": "official_summary; item-level metadata should be checked",
  "priority": "P2",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-007",
  "pkg": "001",
  "title": "北斎の生涯：宗理様式の時代",
  "org": "すみだ北斎美術館",
  "url": "https://hokusai-museum.jp/modules/Page/pages/view/402",
  "kind": "commentary",
  "role": "period",
  "phases": [
   1794
  ],
  "years": [
   1794,
   1804
  ],
  "desc": "宗理号、狂歌・摺物・狂歌絵本との関係を確認する基礎解説。",
  "rights": {
   "status": "LINK_ONLY",
   "basis": "作品画像は個別所蔵館の画像利用表示を優先する。"
  },
  "confidence": "official_summary; name attribution may require item-level research",
  "priority": "P1",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-008",
  "pkg": "001",
  "title": "The Top of Mount Fuji（富士頂上）",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/54887",
  "kind": "work",
  "role": "period",
  "phases": [
   1794,
   1800
  ],
  "years": [
   1798,
   1804
  ],
  "desc": "メトロポリタン美術館所蔵。約1800年の作品。北斎の初期風景版画を示す候補。",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_ON_ITEM_PAGE",
   "basis": "個別作品ページにPublic Domainと表示。The Met Open Accessの説明に従い、画像・メタデータを再利用する場合は同館の表示・クレジット条件を確認。"
  },
  "confidence": "museum catalog; date circa 1800",
  "priority": "P1",
  "checkedAt": "2026-10-28",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP148846.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/54887",
   "credit": "The Metropolitan Museum of Art, Gift of Estate of Samuel Isham, 1914 (JP1012)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "ca. 1800",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "HKR-009",
  "pkg": "001",
  "title": "北斎の生涯：読本挿絵と肉筆画の時代",
  "org": "すみだ北斎美術館",
  "url": "https://hokusai-museum.jp/modules/Page/pages/view/402",
  "kind": "commentary",
  "role": "period",
  "phases": [
   1800
  ],
  "years": [
   1804,
   1811
  ],
  "desc": "読本挿絵、陰影・空間表現、洋風風景版画、肉筆画の展開を示す解説。",
  "rights": {
   "status": "LINK_ONLY",
   "basis": "解説ページへリンク。各作品画像は個別に確認。"
  },
  "confidence": "official_summary",
  "priority": "P1",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-010",
  "pkg": "001",
  "title": "『近世怪談 霜夜星』関連作品情報",
  "org": "すみだ北斎美術館",
  "url": "https://hokusai-museum.jp/modules/Page/pages/view/402",
  "kind": "commentary",
  "role": "period",
  "phases": [
   1800
  ],
  "years": [
   1808,
   1808
  ],
  "desc": "すみだ北斎美術館の生涯解説に掲載される文化5年（1808）の読本挿絵例。書誌・個別図版の特定を次段階で行う。",
  "rights": {
   "status": "LINK_ONLY",
   "basis": "現段階では個別の版・画像ファイルを特定していないためリンクのみ。"
  },
  "confidence": "official summary; item-level bibliography pending",
  "priority": "P2",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-011",
  "pkg": "001",
  "title": "『北斎漫画』初編（1814）— 国立国会図書館デジタルコレクション検索",
  "org": "国立国会図書館",
  "url": "https://dl.ndl.go.jp/search/searchResult?title=%E5%8C%97%E6%96%8E%E6%BC%AB%E7%94%BB",
  "kind": "catalog",
  "role": "period",
  "phases": [
   1811
  ],
  "years": [
   1812,
   1814
  ],
  "desc": "北斎漫画初編の現物画像・書誌を特定するための検索入口。初編刊行年・版次・画像公開条件は個別レコードで確定する。",
  "rights": {
   "status": "VERIFY_EACH_ITEM",
   "basis": "画像ごとに公開範囲を確認。保護期間満了表示の対象画像のみ掲載候補とし、その他は公式ページへのリンクに留める。"
  },
  "confidence": "catalog search entry; exact edition pending",
  "priority": "P0",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-012",
  "pkg": "001",
  "title": "大英博物館：葛飾北斎の人物・作品データベース",
  "org": "The British Museum",
  "url": "https://www.britishmuseum.org/collection/term/BIOG1820",
  "kind": "catalog",
  "role": "period",
  "phases": [
   1811
  ],
  "years": [
   1810,
   1819
  ],
  "desc": "画号の異名・生没年・作品群・個別所蔵品を横断的に調べる入口。",
  "rights": {
   "status": "LINK_ONLY; ITEM_IMAGE_TERMS_REQUIRED",
   "basis": "人物・所蔵品ページへのリンクは可。個別作品画像は画像単位の権利表示・利用規約を確認してから使用。"
  },
  "confidence": "museum authority record",
  "priority": "P1",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-013",
  "pkg": "001",
  "title": "Under the Wave off Kanagawa（神奈川沖浪裏）",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/56353",
  "kind": "work",
  "role": "period",
  "phases": [
   1830
  ],
  "years": [
   1820,
   1833
  ],
  "desc": "The Met所蔵版の個別作品ページ。Public Domain表示を確認。",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_ON_ITEM_PAGE",
   "basis": "個別作品ページにPublic Domain表示。Open Access利用条件を確認し、作品名・所蔵館・作品ページを記録する。"
  },
  "confidence": "museum catalog; date circa 1830–32",
  "priority": "P0",
  "checkedAt": "2026-10-28",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP141067.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/56353",
   "credit": "The Metropolitan Museum of Art, Henry L. Phillips Collection, Bequest of Henry L. Phillips, 1939 (JP2972)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "ca. 1830–32",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "HKR-014",
  "pkg": "001",
  "title": "South Wind, Clear Sky（凱風快晴・赤富士）",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/36490",
  "kind": "work",
  "role": "period",
  "phases": [
   1830
  ],
  "years": [
   1820,
   1833
  ],
  "desc": "The Met所蔵版の個別作品ページ。Public Domain表示を確認。",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_ON_ITEM_PAGE",
   "basis": "個別作品ページにPublic Domain表示。画像ファイルを保存する場合は同館のクレジット情報と作品同定を維持する。"
  },
  "confidence": "museum catalog; date circa 1830–32",
  "priority": "P0",
  "checkedAt": "2026-10-28",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP141062.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/36490",
   "credit": "The Metropolitan Museum of Art, Rogers Fund, 1914 (JP9)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "ca. 1830–32",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "HKR-015",
  "pkg": "001",
  "title": "Storm below Mount Fuji（山下白雨）",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/36492",
  "kind": "work",
  "role": "period",
  "phases": [
   1830
  ],
  "years": [
   1820,
   1833
  ],
  "desc": "The Met所蔵版の個別作品ページ。Public Domain表示を確認。",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_ON_ITEM_PAGE",
   "basis": "個別作品ページにPublic Domain表示。作品画像の取得・掲載は同館Open Access条件に従う。"
  },
  "confidence": "museum catalog; date circa 1830–32",
  "priority": "P1",
  "checkedAt": "2026-10-28",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP140976.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/36492",
   "credit": "The Metropolitan Museum of Art, Rogers Fund, 1914 (JP11)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "ca. 1830–32",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "HKR-016",
  "pkg": "001",
  "title": "Sekiya Village on the Sumida River（隅田川関屋の里）",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/55742",
  "kind": "work",
  "role": "period",
  "phases": [
   1830
  ],
  "years": [
   1820,
   1833
  ],
  "desc": "隅田川と江戸の景観を北斎OSの場所レイヤーに結びつけやすい作品。The Met所蔵版はPublic Domain表示。",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_ON_ITEM_PAGE",
   "basis": "個別作品ページにPublic Domain表示。地理比定は作品の描写・研究資料に基づき別途評価。"
  },
  "confidence": "museum catalog; date circa 1830–32",
  "priority": "P0",
  "checkedAt": "2026-10-28",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP141097.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/55742",
   "credit": "The Metropolitan Museum of Art, Henry L. Phillips Collection, Bequest of Henry L. Phillips, 1939 (JP2998)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "ca. 1830–32",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "HKR-017",
  "pkg": "001",
  "title": "北斎の生涯：晩年期・肉筆画の時代",
  "org": "すみだ北斎美術館",
  "url": "https://hokusai-museum.jp/modules/Page/pages/view/402",
  "kind": "commentary",
  "role": "period",
  "phases": [
   1830
  ],
  "years": [
   1834,
   1835
  ],
  "desc": "『富嶽百景』、卍号、肉筆画・絵手本の展開、最晩年の言葉を確認する公式解説。",
  "rights": {
   "status": "LINK_ONLY",
   "basis": "公式解説へのリンク。ページ内画像の転載は個別条件を確認。"
  },
  "confidence": "official_summary",
  "priority": "P0",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-018",
  "pkg": "001",
  "title": "『富嶽百景』初編・国立国会図書館デジタルコレクション検索",
  "org": "国立国会図書館",
  "url": "https://dl.ndl.go.jp/search/searchResult?title=%E5%AF%8C%E5%B6%BD%E7%99%BE%E6%99%AF",
  "kind": "catalog",
  "role": "period",
  "phases": [
   1830
  ],
  "years": [
   1834,
   1835
  ],
  "desc": "刊本そのものを一次資料として照合する検索入口。版・巻・刊年を個別レコードで確定する。",
  "rights": {
   "status": "VERIFY_EACH_ITEM",
   "basis": "個々の巻号・画像の公開範囲を確認。公開範囲が保護期間満了の対象画像のみ画像掲載候補。"
  },
  "confidence": "catalog search entry; exact edition pending",
  "priority": "P1",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-019",
  "pkg": "001",
  "title": "北斎館：北斎と小布施・所蔵作品",
  "org": "北斎館",
  "url": "https://hokusai-kan.com/",
  "kind": "commentary",
  "role": "period",
  "phases": [
   1836,
   1844
  ],
  "years": [
   1842,
   1849
  ],
  "desc": "小布施での滞在・高井鴻山との交流・祭屋台天井絵などを確認する専門館の公式情報。",
  "rights": {
   "status": "LINK_ONLY; ITEM_IMAGE_TERMS_REQUIRED",
   "basis": "公式サイトへのリンク。所蔵作品画像・展示画像の転載は個別許諾条件に従う。"
  },
  "confidence": "official museum summary; individual visit chronology should be sourced item-by-item",
  "priority": "P0",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-020",
  "pkg": "001",
  "title": "岩松院：八方睨み鳳凰図",
  "org": "岩松院",
  "url": "https://www.gansho-in.jp/",
  "kind": "commentary",
  "role": "period",
  "phases": [
   1844
  ],
  "years": [
   1848,
   1848
  ],
  "desc": "作品が設置されている場所と現地の公式案内を起点に、制作年・作者・現地情報を照合する。",
  "rights": {
   "status": "LINK_ONLY; IMAGE_PERMISSION_REQUIRED_OR_UNCONFIRMED",
   "basis": "寺院の公式案内へリンク。作品・堂内写真の転載は別途許諾と撮影条件の確認が必要。"
  },
  "confidence": "site attribution; precise date should be checked against institutional/academic sources",
  "priority": "P1",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-021",
  "pkg": "001",
  "title": "大英博物館：北斎の生涯・作品データベース",
  "org": "The British Museum",
  "url": "https://www.britishmuseum.org/collection/term/BIOG1820",
  "kind": "catalog",
  "role": "period",
  "phases": [
   1844
  ],
  "years": [
   1849,
   1849
  ],
  "desc": "生没年、画号、関連作品を確認する独立した海外館の人物典拠レコード。",
  "rights": {
   "status": "LINK_ONLY; ITEM_IMAGE_TERMS_REQUIRED",
   "basis": "人物典拠・作品ページへのリンクを基本とし、画像は個別条件を確認。"
  },
  "confidence": "museum authority record; some attributions are noted as debated",
  "priority": "P1",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-022",
  "pkg": "001",
  "title": "ジャパンサーチ：葛飾北斎ギャラリー",
  "org": "国立国会図書館／ジャパンサーチ",
  "url": "https://jpsearch.go.jp/gallery/ndl-xbzl6VVOpkhjzlg",
  "kind": "catalog",
  "role": "general",
  "phases": [],
  "years": [
   1760,
   2026
  ],
  "desc": "国内外のデジタルコンテンツ・所蔵機関・参考文献を横断する調査入口。解説文のCC BY 4.0と画像個別権利を区別する。",
  "rights": {
   "status": "LINK_ONLY; EACH_IMAGE_RIGHTS_SEPARATE",
   "basis": "ギャラリー解説はCC BY 4.0と表示されるが、画像は個別の権利表示による。"
  },
  "confidence": "aggregated portal; follow through to original provider",
  "priority": "P1",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-023",
  "pkg": "001",
  "title": "The Met Open Access / Public Domain作品の利用条件",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/policies/terms-and-conditions",
  "kind": "policy",
  "role": "policy",
  "phases": [],
  "years": [
   1760,
   2026
  ],
  "desc": "The MetのPublic Domain作品画像は、同館のOpen Access条件に従って許諾・料金なしで商用・非商用に利用できるとの説明。",
  "rights": {
   "status": "POLICY_REFERENCE",
   "basis": "個々の作品ページでPublic Domain表示を確認したうえで適用する。全作品に一律適用しない。"
  },
  "confidence": "official policy",
  "priority": "P0",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-024",
  "pkg": "001",
  "title": "国立国会図書館：ウェブサイトからのコンテンツ転載",
  "org": "国立国会図書館",
  "url": "https://www.ndl.go.jp/use/reproduction",
  "kind": "policy",
  "role": "policy",
  "phases": [],
  "years": [
   1760,
   2026
  ],
  "desc": "個々の画像・巻号ごとの公開範囲を確認する公式ガイド。",
  "rights": {
   "status": "POLICY_REFERENCE",
   "basis": "インターネット公開（保護期間満了）の表示と個々の画像の公開範囲を確認する。"
  },
  "confidence": "official policy",
  "priority": "P0",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "HKR-025",
  "pkg": "001",
  "title": "二次利用がしやすいデジタルアーカイブ（国内の図書館）",
  "org": "国立国会図書館 リサーチ・ナビ",
  "url": "https://ndlsearch.ndl.go.jp/rnavi/plan/post_1044",
  "kind": "policy",
  "role": "policy",
  "phases": [],
  "years": [
   1760,
   2026
  ],
  "desc": "国立国会図書館が紹介する、画像転載について申請不要の条件を設けている国内デジタルアーカイブの案内。",
  "rights": {
   "status": "POLICY_REFERENCE",
   "basis": "紹介リストは網羅的ではない。利用時は各アーカイブの個別条件を再確認する。"
  },
  "confidence": "official research guide",
  "priority": "P1",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-001",
  "pkg": "002",
  "title": "北斎の生涯と言葉",
  "org": "すみだ北斎美術館",
  "url": "https://hokusai-museum.jp/modules/Page/pages/view/401?lang=ja",
  "kind": "commentary",
  "role": "general",
  "phases": [],
  "periodNote": "whole_life; late_life",
  "desc": "専門館による解説。『富嶽百景』跋文、川柳、借金証文に関する手掛かりを得られる。",
  "rights": {
   "status": "LINK_ONLY_UNTIL_ITEM_LEVEL_REVIEW",
   "basis": "この解説ページに掲載された画像を個別に確認する。ページ全体の存在だけでは画像再利用許諾を意味しない。"
  },
  "caution": "ページ本文を確認。各発言の一次資料画像・書誌を個別に追跡する作業は継続。",
  "use": "北斎の言葉の典拠探索の入口。引用する際は原典・翻刻・現代語訳を分ける。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-002",
  "pkg": "002",
  "title": "葛飾北斎の『富嶽百景』",
  "org": "国立国会図書館 NDLイメージバンク",
  "url": "https://www.ndl.go.jp/imagebank/theme/fugaku100",
  "kind": "catalog",
  "role": "period",
  "phases": [
   1830
  ],
  "periodNote": "1834 onward; late_life",
  "desc": "『富嶽百景』のデジタル画像と刊行年代に関する解説。",
  "rights": {
   "status": "REUSE_ALLOWED_WITH_ATTRIBUTION_FOR_IMAGES_AND_TEXT_ON_THIS_IMAGEBANK_PAGE",
   "basis": "NDLイメージバンク公式利用案内は、掲載画像が著作権保護期間満了で、転載申請不要、商用利用も可と明記。出典表示必須。ページの再現的な丸ごと転載は別途確認。"
  },
  "caution": "個別テーマページとNDLイメージバンク利用案内を確認。",
  "use": "跋文を含む原資料画像の有力候補。使用する個々の図版・巻・頁を記録。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-003",
  "pkg": "002",
  "title": "NDLイメージバンク ご利用について",
  "org": "国立国会図書館",
  "url": "https://www.ndl.go.jp/imagebank/about",
  "kind": "policy",
  "role": "policy",
  "phases": [],
  "periodNote": "all",
  "desc": "NDLイメージバンクの画像再利用条件を定める公式ページ。",
  "rights": {
   "status": "POLICY_SOURCE",
   "basis": "NDLイメージバンク掲載画像・解説は、原則として転載申請不要、出典表記が必要。第三者権利が別途付随する特殊ケースや展示構成の再現には注意。"
  },
  "caution": "公式利用案内の該当箇所を確認。",
  "use": "NDLイメージバンクの画像ごとにこの方針を記録し、引用元表記を統一する。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-004",
  "pkg": "002",
  "title": "国立国会図書館ウェブサイトからのコンテンツの転載",
  "org": "国立国会図書館",
  "url": "https://www.ndl.go.jp/use/reproduction",
  "kind": "policy",
  "role": "policy",
  "phases": [],
  "periodNote": "all",
  "desc": "NDLサイトおよびデジタルコレクション資料の転載条件と公開範囲別の利用条件。",
  "rights": {
   "status": "POLICY_SOURCE",
   "basis": "NDLデジタルコレクションはタイトル単位で判断せず、使用する個別画像・巻号の共有欄の公開範囲を確認。『インターネット公開（保護期間満了）』は自由利用、『裁定』『許諾』等は原則許諾が必要。"
  },
  "caution": "公式ポリシー本文を確認。",
  "use": "NDLイメージバンク外の個別資料を利用する際の必須チェックリスト。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-005",
  "pkg": "002",
  "title": "本所絵図（尾張屋版・江戸切絵図）",
  "org": "CODH / 国立国会図書館所蔵資料を基にした江戸マップ",
  "url": "https://codh.rois.ac.jp/edo-maps/owariya/16/",
  "kind": "map",
  "role": "period",
  "phases": [
   1760
  ],
  "periodNote": "1852 map; contextual comparison only",
  "desc": "本所の地名・町割りを調べるための地図・地名データ。元資料の出典はNDL『〔江戸切絵図〕本所絵図』。",
  "rights": {
   "status": "LINK_ONLY_PENDING_DIGITAL_IMAGE_AND_DATASET_LICENSE_REVIEW",
   "basis": "CODHページに地図の利用条件があるかを確認し、原資料画像・CODHの位置合わせ地図・抽出地名データを別々に扱う。現段階ではローカルに複製・改変した地図画像を公開しない。"
  },
  "caution": "ページ、出典表記、1852年という地図年代を確認。CODHの全利用規約・画像利用許諾の最終確認は継続。",
  "use": "本所割下水の位置関係を検討する際の比較資料。1852年図を1760年の出生時状況と同一視しない。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-006",
  "pkg": "002",
  "title": "江戸切絵図 尾張屋版一覧",
  "org": "CODH",
  "url": "https://codh.rois.ac.jp/edo-maps/owariya/",
  "kind": "map",
  "role": "period",
  "phases": [
   1760
  ],
  "periodNote": "1850s",
  "desc": "尾張屋版切絵図の各図と成立年の一覧。『本所絵図』は1852年と掲載。",
  "rights": {
   "status": "LINK_ONLY_PENDING_LICENSE_REVIEW",
   "basis": "一覧ページへのリンク利用を優先。画像・地名データの再利用条件は別途確認。"
  },
  "caution": "一覧に本所絵図1852年と記載されていることを確認。",
  "use": "地図年代を記録する書誌情報の補助。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-007",
  "pkg": "002",
  "title": "Open Access at The Met",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/ja/hubs/open-access",
  "kind": "policy",
  "role": "policy",
  "phases": [],
  "periodNote": "all",
  "desc": "The Metのパブリックドメイン作品画像・基本データに関するCC0方針。",
  "rights": {
   "status": "POLICY_SOURCE_NOT_ITEM_CLEARANCE",
   "basis": "The Metはパブリックドメイン作品画像と基本データの一部をCC0で自由利用可能としている。ただし、個別作品ページで対象画像がOpen Access/CC0であることを確認し、画像URL・作品ID・クレジットを記録する。"
  },
  "caution": "公式Open Access方針を確認。既存候補の各作品画像の個別ステータスは、この台帳だけでは承認しない。",
  "use": "個別作品レコードがCC0対象と確認できた場合に限り、ダウンロード画像の採用候補とする。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-008",
  "pkg": "002",
  "title": "Open Access",
  "org": "Cleveland Museum of Art",
  "url": "https://www.clevelandart.org/open-access",
  "kind": "policy",
  "role": "policy",
  "phases": [],
  "periodNote": "all",
  "desc": "パブリックドメイン作品画像・データのCC0利用方針。",
  "rights": {
   "status": "POLICY_SOURCE_NOT_ITEM_CLEARANCE",
   "basis": "CMAは対象となるパブリックドメイン作品の画像・データをCC0で公開。ただし個別作品の画像ファイルが提供され、CC0対象であることを作品ページ/APIで確認する。"
  },
  "caution": "公式Open Access方針を確認。北斎作品の所蔵・画像有無は個別調査が必要。",
  "use": "北斎作品の個別所蔵品が対象であれば追加候補。作品単位の検索と記録が必要。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-009",
  "pkg": "002",
  "title": "北斎はなぜ93回も引っ越しをしたのかという話",
  "org": "太田記念美術館",
  "url": "https://otakinen-museum.note.jp/n/n1e04d33b89d8",
  "kind": "article",
  "role": "anecdote",
  "phases": [],
  "periodNote": "life_story; especially 1760-1849",
  "desc": "『葛飾北斎伝』の93回説と、馬琴の覚書・人名録の「居所不定」記載を比較し、数値の確度に疑問を提示。",
  "rights": {
   "status": "LINK_ONLY_NO_REPUBLICATION_OF_TEXT_OR_IMAGES_WITHOUT_PERMISSION",
   "basis": "記事本文・画像の転載を前提にしない。紹介される原資料を追跡し、短い引用は必要性と出典を明記。"
  },
  "caution": "記事本文を確認。",
  "use": "逸話の史料批判に利用。頻繁な転居は裏づけあり、93回という総数は確定値にしない。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-010",
  "pkg": "002",
  "title": "北斎が馬琴の指示を勝手に変更して作画していたという話",
  "org": "太田記念美術館",
  "url": "https://otakinen-museum.note.jp/n/nbd24aed0a46b",
  "kind": "article",
  "role": "anecdote",
  "phases": [],
  "periodNote": "1800s; book illustration collaboration",
  "desc": "1840年の馬琴書簡を引き、北斎が挿絵を作者稿本どおりに描かず、構図等を変更したことを論じる。",
  "rights": {
   "status": "LINK_ONLY_NO_REPUBLICATION_OF_TEXT_OR_IMAGES_WITHOUT_PERMISSION",
   "basis": "記事の図版転載はしない。書簡の書誌と原資料所蔵先を別途確認し、記事の説明は二次資料として引用。"
  },
  "caution": "記事本文と書簡引用を確認。",
  "use": "北斎の独立した創作姿勢を示す逸話。ただし「勝手に」という評価語と、書簡が示す具体的事実を分離する。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-011",
  "pkg": "002",
  "title": "北斎と馬琴が制作をめぐって喧嘩したという話",
  "org": "太田記念美術館",
  "url": "https://otakinen-museum.note.jp/n/n8657332473a2",
  "kind": "article",
  "role": "anecdote",
  "phases": [],
  "periodNote": "1812 story; 1893 biography source",
  "desc": "草履をくわえる人物の挿絵をめぐる口論・絶交話を『葛飾北斎伝』由来として紹介し、同時代史料や稿本との照合を行う。",
  "rights": {
   "status": "LINK_ONLY_NO_REPUBLICATION_OF_TEXT_OR_IMAGES_WITHOUT_PERMISSION",
   "basis": "記事画像・早稲田大学画像は各所蔵元の条件を別に確認。リンクのみを基本とする。"
  },
  "caution": "記事本文を確認。",
  "use": "逸話の内容と典拠を表示し、北斎・馬琴の絶交を確定事実として書かない。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-012",
  "pkg": "002",
  "title": "葛飾北斎",
  "org": "ジャパンサーチ（NDLギャラリー）",
  "url": "https://jpsearch.go.jp/gallery/ndl-xbzl6VVOpkhjzlg",
  "kind": "catalog",
  "role": "general",
  "phases": [],
  "periodNote": "life_story; 1893 biography",
  "desc": "『北斎仮宅之図』や飯島虚心『葛飾北斎伝』など、北斎像形成に関係する資料の探索入口。",
  "rights": {
   "status": "LINK_ONLY_ITEM_LEVEL_RIGHTS_CHECK_REQUIRED",
   "basis": "ポータルの存在だけで、リンク先の原資料画像や書籍全体の転載許可とはみなさない。各所蔵機関の個別条件を確認。"
  },
  "caution": "掲載資料の説明を確認。",
  "use": "逸話の原典候補を探す入口。書誌・所蔵・デジタル公開条件を記録してから採用。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-013",
  "pkg": "002",
  "title": "Katsushika Hokusai | Oxford Bibliographies in Art History",
  "org": "Oxford Academic",
  "url": "https://academic.oup.com/reference/62285/reference-article-abstract/552018213",
  "kind": "catalog",
  "role": "general",
  "phases": [],
  "periodNote": "whole_life",
  "desc": "北斎研究の文献案内。Matthi Forrerによる研究史の入口。",
  "rights": {
   "status": "LINK_ONLY_TEXT_REUSE_REQUIRES_PERMISSION_OR_QUOTATION_BASIS",
   "basis": "有料・アクセス制限があり得る二次資料。記事本文を転載せず、書誌情報と研究文献をたどる。"
  },
  "caution": "要約ページを確認。全文閲覧・参考文献の精査は未完了。",
  "use": "今後の専門研究文献探索。今回確認できたのは書誌・要約部分のみ。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-014",
  "pkg": "002",
  "title": "北斎と馬琴の草履逸話の紹介・検証",
  "org": "太田記念美術館（記事内で参照される研究を含む）",
  "url": "https://otakinen-museum.note.jp/n/n8657332473a2",
  "kind": "article",
  "role": "anecdote",
  "phases": [],
  "periodNote": "1812; later retelling",
  "desc": "『葛飾北斎伝』に見える逸話、江戸期文献の欠如、稿本の発見を比較する。",
  "rights": {
   "status": "LINK_ONLY",
   "basis": "原資料の図版を使用する場合は早稲田大学・各所蔵先の個別利用条件を確認。"
  },
  "caution": "SRC-011と同一ページを指す重複管理レコード。実装時にはSRC-011へ統合可能。",
  "use": "逸話の「伝承あり／同時代の裏付け不十分／後年の研究で再検討」という表示例。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "SRC-015",
  "pkg": "002",
  "title": "名古屋刀剣博物館・刀剣ワールド 北斎の逸話解説",
  "org": "名古屋刀剣博物館・刀剣ワールド",
  "url": "https://www.meihaku.jp/berabou/katsushika-hokusai/",
  "kind": "article",
  "role": "anecdote",
  "phases": [],
  "periodNote": "whole_life",
  "desc": "93回転居・一日三度の転居等、広く流布する北斎逸話の紹介例。ただし信憑性への留保も掲載。",
  "rights": {
   "status": "LINK_ONLY_NO_REPUBLICATION_WITHOUT_PERMISSION",
   "basis": "画像・文章の再利用はしない。記事は伝承流布の調査対象として使い、史実の確定根拠には単独使用しない。"
  },
  "caution": "検索結果本文を確認。ページ全体の精読は未完了。",
  "use": "逸話が現代の一般向け媒体でどのように語られているかを示す補助資料。",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "S005-01",
  "pkg": "005",
  "title": "北斎大画即書細図",
  "org": "文化遺産オンライン",
  "url": "https://online.bunka.go.jp/heritages/detail/96819",
  "kind": "catalog",
  "role": "period",
  "phases": [
   1811
  ],
  "desc": "高力種信著・文化14年10月成立・転写本との書誌記述",
  "caution": "画像利用条件は登録館に問い合わせるよう明記",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "S005-02",
  "pkg": "005",
  "title": "北斎だるせん！",
  "org": "名古屋市博物館",
  "url": "https://www.museum.city.nagoya.jp/exhibition/special/past/tenji170901.html",
  "kind": "commentary",
  "role": "period",
  "phases": [
   1811
  ],
  "desc": "1817年名古屋の大だるま制作と猿猴庵の記録",
  "caution": "現代の展示解説であり原本の独立照合とは区別",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "S005-03",
  "pkg": "005",
  "title": "出版物",
  "org": "名古屋市博物館",
  "url": "https://museum-nagoya.sys-nw.com/activity/publish/index.html",
  "kind": "catalog",
  "role": "period",
  "phases": [
   1811
  ],
  "desc": "『北斎大画即書細図』刊行情報",
  "caution": "刊行案内だけで全本文の検証とはならない",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "S005-04",
  "pkg": "005",
  "title": "富岳百景 3編",
  "org": "国立国会図書館サーチ",
  "url": "https://ndlsearch.ndl.go.jp/books/R100000002-I000007314622",
  "kind": "catalog",
  "role": "period",
  "phases": [
   1830
  ],
  "desc": "版・所蔵・刊行年代の手掛かり",
  "caution": "特定の跋文ページ画像の同定とは別",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "S005-05",
  "pkg": "005",
  "title": "葛飾北斎の『富嶽百景』",
  "org": "NDLイメージバンク",
  "url": "https://www.ndl.go.jp/imagebank/theme/fugaku100",
  "kind": "catalog",
  "role": "period",
  "phases": [
   1830
  ],
  "desc": "初編・二編の刊行時期と画像への入口",
  "caution": "一覧上の同名画像から跋文ページを確定したとは言えない",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "S005-06",
  "pkg": "005",
  "title": "『富嶽百景』",
  "org": "島根県立美術館",
  "url": "https://www.shimane-art-museum-ukiyoe.jp/selections/c-selections/nagata/h56-01.html",
  "kind": "commentary",
  "role": "period",
  "phases": [
   1830
  ],
  "desc": "跋文の紹介と作品情報",
  "caution": "解説は原本画像との照合に代わらない",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "S005-07",
  "pkg": "005",
  "title": "北斎について",
  "org": "すみだ北斎美術館",
  "url": "https://hokusai-museum.jp/modules/Page/pages/view/401?lang=ja",
  "kind": "commentary",
  "role": "general",
  "phases": [],
  "desc": "跋文・川柳・伝承される臨終の言葉",
  "caution": "臨終の言葉や辞世を直接記録と断定しない",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "S005-08",
  "pkg": "005",
  "title": "北斎の画歴・幼少年期",
  "org": "島根県立美術館",
  "url": "https://shimane-art-museum-ukiyoe.jp/life/life-start/index.html",
  "kind": "commentary",
  "role": "period",
  "phases": [
   1760
  ],
  "desc": "出生地伝承と初期生涯の史料不足",
  "caution": "本所割下水付近という伝承を確定住所にしない",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "S005-09",
  "pkg": "005",
  "title": "北斎の生涯",
  "org": "すみだ北斎美術館",
  "url": "https://hokusai-museum.jp/modules/Page/pages/view/402",
  "kind": "commentary",
  "role": "general",
  "phases": [],
  "desc": "生涯年表の参照",
  "caution": "各記述の典拠の層を分けて扱う",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "S005-10",
  "pkg": "005",
  "title": "葛飾北斎伝",
  "org": "国立国会図書館サーチ",
  "url": "https://ndlsearch.ndl.go.jp/books/R100000094-I205661",
  "kind": "catalog",
  "role": "general",
  "phases": [],
  "desc": "飯島虚心の未定稿本の存在・所蔵情報",
  "caution": "デジタルコンテンツなしとの記載があり、本文未照合",
  "checkedAt": "2026-10-28"
 },
 {
  "id": "S005-11",
  "pkg": "005",
  "title": "One Hundred Views of Mount Fuji (Fugaku Hyakkei shohen)",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/57551",
  "kind": "work",
  "role": "period",
  "phases": [
   1830
  ],
  "desc": "特定所蔵個体のPD/Open Access表示",
  "caution": "その条件を他館の所蔵個体に一般化しない",
  "checkedAt": "2026-10-28",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/JIB18_001.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/57551",
   "credit": "The Metropolitan Museum of Art, Rogers Fund, 1918 (JIB18)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1834",
   "classification": "版本",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-48878",
  "pkg": "met-001",
  "title": "In Front of a Shop",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/48878",
  "kind": "work",
  "role": "period",
  "phases": [
   1779
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "肉筆画・Hanging scroll; ink and color on silk",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP-24789-002.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/48878",
   "credit": "The Metropolitan Museum of Art, Charles Stewart Smith Collection, Gift of Mrs. Charles Stewart Smith, Charles Stewart Smith Jr., and Howard Caswell Smith, in memory of Charles Stewart Smith, 1914 (14.76.34)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "dated 1780",
   "classification": "肉筆画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-37190",
  "pkg": "met-001",
  "title": "The Sumo Wrestlers Wadagahara Jinshirō and Kachōzan Gorokichi",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/37190",
  "kind": "work",
  "role": "period",
  "phases": [
   1779
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版画・Woodblock print; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP148843.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/37190",
   "credit": "The Metropolitan Museum of Art, The Francis Lathrop Collection, Purchase, Frederick C. Hewitt Fund, 1911 (JP742)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "ca. 1783",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-45822",
  "pkg": "met-001",
  "title": "Woman Spinning Silk",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/45822",
  "kind": "work",
  "role": "period",
  "phases": [
   1779
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "肉筆画・Hanging scroll; ink and color on silk",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DT5290.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/45822",
   "credit": "The Metropolitan Museum of Art, Charles Stewart Smith Collection, Gift of Mrs. Charles Stewart Smith, Charles Stewart Smith Jr., and Howard Caswell Smith, in memory of Charles Stewart Smith, 1914 (14.76.30)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "dated 1790",
   "classification": "肉筆画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-37189",
  "pkg": "met-001",
  "title": "The Sumo Wrestlers Takaneyama Yoichiemon and Sendagawa Kichigorō",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/37189",
  "kind": "work",
  "role": "period",
  "phases": [
   1779
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版画・Woodblock print; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP148842.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/37189",
   "credit": "The Metropolitan Museum of Art, The Francis Lathrop Collection, Purchase, Frederick C. Hewitt Fund, 1911 (JP741)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "ca. 1790–93",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-45494",
  "pkg": "met-001",
  "title": "The Ninth-Month Kabuki Dance \"Kikujido\"",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/45494",
  "kind": "work",
  "role": "period",
  "phases": [
   1794
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版画・Woodblock print; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP148845.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/45494",
   "credit": "The Metropolitan Museum of Art, The Howard Mansfield Collection, Purchase, Rogers Fund, 1936 (JP2570)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "ca. 1796",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-45218",
  "pkg": "met-001",
  "title": "Squeaking a Ground Cherry, from the series Seven Fashionable Useless Habits (Furyu nakute nana kuse)",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/45218",
  "kind": "work",
  "role": "period",
  "phases": [
   1794
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版画・Woodblock print; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP140967.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/45218",
   "credit": "The Metropolitan Museum of Art, Rogers Fund, 1922 (JP1290)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "ca. 1798",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-36483",
  "pkg": "met-001",
  "title": "New Year's Day at the Ōgiya Brothel, Yoshiwara",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/36483",
  "kind": "work",
  "role": "period",
  "phases": [
   1800
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版画・Pentaptych of woodblock prints; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP317443.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/36483",
   "credit": "The Metropolitan Museum of Art, Rogers Fund, 1914 (JP29a–e)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "ca. 1804",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-37391",
  "pkg": "met-001",
  "title": "Mariko",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/37391",
  "kind": "work",
  "role": "period",
  "phases": [
   1800
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版画・Woodblock print; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP141264.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/37391",
   "credit": "The Metropolitan Museum of Art, Rogers Fund, 1914 (JP1)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "ca. 1805",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-44634",
  "pkg": "met-001",
  "title": "Drunken Asaina",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/44634",
  "kind": "work",
  "role": "period",
  "phases": [
   1800
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "肉筆画・Fan mounted as hanging scroll; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP-24853-002.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/44634",
   "credit": "The Metropolitan Museum of Art, Purchase, Friends of Asian Art Gifts, 1991 (1991.151)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "ca. 1810",
   "classification": "肉筆画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-37193",
  "pkg": "met-001",
  "title": "Seaside Village in Winter, from Hokusai’s Album of Realistic Pictures (Hokusai shashin gafu)",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/37193",
  "kind": "work",
  "role": "period",
  "phases": [
   1811
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版画・Detached plate from a woodblock printed book; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP148844.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/37193",
   "credit": "The Metropolitan Museum of Art, The Francis Lathrop Collection, Purchase, Frederick C. Hewitt Fund, 1911 (JP748)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1814",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-54114",
  "pkg": "met-001",
  "title": "Women Preparing Tea Around the Fire-Holder",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/54114",
  "kind": "work",
  "role": "period",
  "phases": [
   1811
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版画・Part of an album of woodblock prints (surimono); ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP138989.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/54114",
   "credit": "The Metropolitan Museum of Art, H. O. Havemeyer Collection, Bequest of Mrs. H. O. Havemeyer, 1929 (JP2330)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1816",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-45029",
  "pkg": "met-001",
  "title": "View of Saruhashi (Monkey Bridge)",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/45029",
  "kind": "work",
  "role": "period",
  "phases": [
   1811
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版画・Woodblock print; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP141120.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/45029",
   "credit": "The Metropolitan Museum of Art, H. O. Havemeyer Collection, Bequest of Mrs. H. O. Havemeyer, 1929 (JP1856)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "ca. 1816–20",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-78796",
  "pkg": "met-001",
  "title": "Picture Album Transmitting the Spirit: The Hokusai Drawing Style (Denshin gafu Hokusai gashiki)",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/78796",
  "kind": "work",
  "role": "period",
  "phases": [
   1811
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版本・Set of three woodblock printed books; ink on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/LC-2013_725_a_c_a_005_crd.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/78796",
   "credit": "The Metropolitan Museum of Art, Purchase, Mary and James G. Wallach Foundation Gift, 2013 (2013.725a–c)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1819",
   "classification": "版本",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-78797",
  "pkg": "met-001",
  "title": "Various Pictures by Hokusai (Hokusai soga) 北斎麁画",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/78797",
  "kind": "work",
  "role": "period",
  "phases": [
   1811
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版本・Woodblock printed book; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/2013_726_08_crd.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/78797",
   "credit": "The Metropolitan Museum of Art, Purchase, Mary and James G. Wallach Foundation Gift, 2013 (2013.726)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1820 (Bunsei 3)",
   "classification": "版本",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-54438",
  "pkg": "met-001",
  "title": "Ashi Clam, from the series \"Genroku Kasen Kai-awase\"",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/54438",
  "kind": "work",
  "role": "period",
  "phases": [
   1821
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版画・Woodblock print; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP143425.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/54438",
   "credit": "The Metropolitan Museum of Art, H. O. Havemeyer Collection, Bequest of Mrs. H. O. Havemeyer, 1929 (JP1873)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1821",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-54389",
  "pkg": "met-001",
  "title": "Horse Pattern (Koma shōbu), from the series Horses",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/54389",
  "kind": "work",
  "role": "period",
  "phases": [
   1821
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版画・Woodblock print (surimono); ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP143416.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/54389",
   "credit": "The Metropolitan Museum of Art, Rogers Fund, 1922 (JP1393)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1822",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-78799",
  "pkg": "met-001",
  "title": "Transmitting the Spirit, Revealing Form of Things: Picture Album of Drawings at One Stroke (Denshin kaishu ippitsu gafu) 伝神開手 一筆画譜",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/78799",
  "kind": "work",
  "role": "period",
  "phases": [
   1821
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版本・Woodblock printed book; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/2013_728_05_crd.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/78799",
   "credit": "The Metropolitan Museum of Art, Purchase, Mary and James G. Wallach Foundation Gift, 2013 (2013.728)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1823 (Bunsei 6)",
   "classification": "版本",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-36489",
  "pkg": "met-001",
  "title": "Kintai Bridge in Suō Province (Suō no kuni Kintaibashi), from the series Remarkable Views of Bridges in Various Provinces (Shokoku meikyō kiran)",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/36489",
  "kind": "work",
  "role": "period",
  "phases": [
   1821
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版画・Woodblock print; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP141228.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/36489",
   "credit": "The Metropolitan Museum of Art, Rogers Fund, 1914 (JP8)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1827–30",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-78801",
  "pkg": "met-001",
  "title": "Picture Book of the Suikoden (The Water Margin) Loyalty (Chūgi Suikoden ehon) 忠義水滸伝画本",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/78801",
  "kind": "work",
  "role": "period",
  "phases": [
   1821
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版本・Woodblock printed book; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/2013_730_25_crd.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/78801",
   "credit": "The Metropolitan Museum of Art, Purchase, Mary and James G. Wallach Foundation Gift, 2013 (2013.730)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1829 (Bunsei 12)",
   "classification": "版本",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-44981",
  "pkg": "met-001",
  "title": "Snow on the Sumida River (Sumida), from the series, Snow, Moon, and Flowers (Setsugekka)",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/44981",
  "kind": "work",
  "role": "period",
  "phases": [
   1830
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版画・Woodblock print; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP141240.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/44981",
   "credit": "The Metropolitan Museum of Art, Henry L. Phillips Collection, Bequest of Henry L. Phillips, 1939 (JP2921)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "ca. 1833",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-78805",
  "pkg": "met-001",
  "title": "Picture Book of New Designs for the Various Crafts (Shōshoku ehon Katsushika shin hinagata) 諸職絵本葛飾新鄙形",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/78805",
  "kind": "work",
  "role": "period",
  "phases": [
   1836
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版本・Woodblock printed book; ink on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/2013_734_28_crd.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/78805",
   "credit": "The Metropolitan Museum of Art, Purchase, Mary and James G. Wallach Foundation Gift, 2013 (2013.734)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1836, first month (Tenpō 7)",
   "classification": "版本",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-45816",
  "pkg": "met-001",
  "title": "Gamecocks",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/45816",
  "kind": "work",
  "role": "period",
  "phases": [
   1836
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "肉筆画・Hanging scroll; ink and color on silk",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP279646.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/45816",
   "credit": "The Metropolitan Museum of Art, Charles Stewart Smith Collection, Gift of Mrs. Charles Stewart Smith, Charles Stewart Smith Jr., and Howard Caswell Smith, in memory of Charles Stewart Smith, 1914 (14.76.56)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "dated 1838",
   "classification": "肉筆画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-36485",
  "pkg": "met-001",
  "title": "Poem by Jitō Tenno (Empress Jitō), from the series One Hundred Poems Explained by the Nurse (Hyakunin isshu uba ga etoki)",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/36485",
  "kind": "work",
  "role": "period",
  "phases": [
   1836
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "版画・Woodblock print; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP140961.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/36485",
   "credit": "The Metropolitan Museum of Art, Rogers Fund, 1914 (JP3)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1839",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-48880",
  "pkg": "met-001",
  "title": "Wild Geese and Water",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/48880",
  "kind": "work",
  "role": "period",
  "phases": [
   1836
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "肉筆画・Hanging scroll; ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP-24851-002.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/48880",
   "credit": "The Metropolitan Museum of Art, H. O. Havemeyer Collection, Bequest of Mrs. H. O. Havemeyer, 1929 (29.100.1403)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1839",
   "classification": "肉筆画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-45818",
  "pkg": "met-001",
  "title": "Red Zhong Kui, the Demon Queller",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/45818",
  "kind": "work",
  "role": "period",
  "phases": [
   1844
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "肉筆画・Hanging scroll; ink and color on silk",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP317438.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/45818",
   "credit": "The Metropolitan Museum of Art, Charles Stewart Smith Collection, Gift of Mrs. Charles Stewart Smith, Charles Stewart Smith Jr., and Howard Caswell Smith, in memory of Charles Stewart Smith, 1914 (14.76.37)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1846",
   "classification": "肉筆画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-45819",
  "pkg": "met-001",
  "title": "Black Shōki, the Demon Queller",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/45819",
  "kind": "work",
  "role": "period",
  "phases": [
   1844
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "desc": "肉筆画・Hanging scroll; ink on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP-24791-002.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/45819",
   "credit": "The Metropolitan Museum of Art, Charles Stewart Smith Collection, Gift of Mrs. Charles Stewart Smith, Charles Stewart Smith Jr., and Howard Caswell Smith, in memory of Charles Stewart Smith, 1914 (14.76.57)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "1849",
   "classification": "肉筆画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-36684",
  "pkg": "met-ref-001",
  "title": "Scene from the Drama \"Soga Moyo Aigo no Wakamatsu\"",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/36684",
  "kind": "work",
  "role": "reference",
  "phases": [
   1760
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "artist": "勝川春章",
  "relation": "北斎の師・1778年頃入門",
  "relationBasis": "data/hokusai_life.js personLinks p_shunsho（documented）",
  "desc": "版画・Woodblock print (nishiki-e); ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP132785.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/36684",
   "credit": "The Metropolitan Museum of Art, Gift of Louis V. Ledoux, 1931 (JP207)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "dated 1769",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-36849",
  "pkg": "met-ref-001",
  "title": "The Second Yamashita Kinsaku in the Role of Shigenoi",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/36849",
  "kind": "work",
  "role": "reference",
  "phases": [
   1760
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "artist": "勝川春章",
  "relation": "北斎の師・1778年頃入門",
  "relationBasis": "data/hokusai_life.js personLinks p_shunsho（documented）",
  "desc": "版画・Woodblock print (nishiki-e); ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP132838.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/36849",
   "credit": "The Metropolitan Museum of Art, Purchase, Joseph Pulitzer Bequest, 1918 (JP385)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "summer, 1772",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-36846",
  "pkg": "met-ref-001",
  "title": "The Second Ichikawa Yaozo in the Role of Soga no Goro",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/36846",
  "kind": "work",
  "role": "reference",
  "phases": [
   1760
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "artist": "勝川春章",
  "relation": "北斎の師・1778年頃入門",
  "relationBasis": "data/hokusai_life.js personLinks p_shunsho（documented）",
  "desc": "版画・Woodblock print (nishiki-e); ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP132755.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/36846",
   "credit": "The Metropolitan Museum of Art, Purchase, Joseph Pulitzer Bequest, 1918 (JP382)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "2nd month, 1773",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-36832",
  "pkg": "met-ref-001",
  "title": "Kabuki Actor Ichikawa Danjūrō V in a Shibaraku (Stop Right There!) Role as Hannya no Gorō",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/36832",
  "kind": "work",
  "role": "reference",
  "phases": [
   1760
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "artist": "勝川春章",
  "relation": "北斎の師・1778年頃入門",
  "relationBasis": "data/hokusai_life.js personLinks p_shunsho（documented）",
  "desc": "版画・Woodblock print (nishiki-e); ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP132811.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/36832",
   "credit": "The Metropolitan Museum of Art, Purchase, Joseph Pulitzer Bequest, 1918 (JP368)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "11th month 1776",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 },
 {
  "id": "MET-36594",
  "pkg": "met-ref-001",
  "title": "The First Nakamura Tomijuro as a Woman Dancer",
  "org": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/36594",
  "kind": "work",
  "role": "reference",
  "phases": [
   1760
  ],
  "phaseBy": "OS編集（The Metの年代表記 objectDate による）",
  "artist": "勝川春章",
  "relation": "北斎の師・1778年頃入門",
  "relationBasis": "data/hokusai_life.js personLinks p_shunsho（documented）",
  "desc": "版画・Woodblock print (nishiki-e); ink and color on paper",
  "rights": {
   "status": "PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API",
   "basis": "The Met Collection API isPublicDomain=true（個別作品）"
  },
  "checkedAt": "2026-10-30",
  "image": {
   "src": "https://images.metmuseum.org/CRDImages/as/web-large/DP137012.jpg",
   "page": "https://www.metmuseum.org/art/collection/search/36594",
   "credit": "The Metropolitan Museum of Art, Rogers Fund, 1914 (JP115)",
   "license": "Public Domain（The Met Open Access / CC0）",
   "basis": "The Met Collection API isPublicDomain=true",
   "objectDate": "dated October or November 1778",
   "classification": "版画",
   "checkedAt": "2026-10-30"
  }
 }
];

export const anecdotes = [
 {
  "id": "ANE-001",
  "pkg": "003",
  "prev002": [
   "ANE-001"
  ],
  "title": "93回引っ越した",
  "category": "傳記説と同時代記録の併記",
  "claim": "『葛飾北斎伝』序文は90歳で93か所に移ったと記す。馬琴の覚書には転居と改名の頻度への言及があり、1836年・1842年の『広益諸家人名録』では「居所不定」と記載されたと専門館解説が紹介する。",
  "supported": "頻繁な転居と住所把握の難しさ。",
  "uncertain": "93回の正確な総数、全住所、一日三度の転居、掃除が転居の唯一の理由。",
  "label": "同時代記録で頻繁な転居は支持／93回という数は未確定",
  "confidence": "B+ for frequent moving; C for exact count",
  "interpretive": "実際の生活習慣に加え、北斎が近代伝記で「畸人」として構成される過程を示す。",
  "lineage": null,
  "followup": "『曲亭来簡集』月之巻、『広益諸家人名録』天保7年・13年版、『葛飾北斎伝』序文・該当章。",
  "rightsNote": null,
  "sourceUrls": [
   "https://otakinen-museum.note.jp/n/n1e04d33b89d8"
  ],
  "evidenceIds": [
   "EVD-002"
  ],
  "phases": [],
  "recordYear": null,
  "phaseNote": "生涯全体の転居。時期を一点に割り当てない",
  "layer": "contemporary",
  "layerBy": "OS編集",
  "phaseBy": "OS編集"
 },
 {
  "id": "ANE-002",
  "pkg": "003",
  "prev002": [
   "ANE-004"
  ],
  "title": "馬琴と草履をめぐって口論し絶交した",
  "category": "後年の伝記逸話と稿本の比較",
  "claim": "飯島虚心『葛飾北斎伝』（1893）に口論・絶交の逸話がある。太田記念美術館は、江戸期文献では逸話そのものが確認されない一方、『占夢南柯後記』の馬琴稿本と北斎の完成版本の比較から、草履をめぐる作画上の意見の相違はあり得ると紹介する。",
  "supported": "稿本と版本に描写の差があり、制作上の意見の違いがあった可能性。",
  "uncertain": "伝記に記された会話の逐語性、怒りの程度、二人が完全に絶交したという因果関係。",
  "label": "後年の伝記に記載／稿本比較から意見対立の可能性",
  "confidence": "B for design conflict; C for dialogue and rupture",
  "interpretive": "作者と絵師の創作権、挿絵の裁量、江戸出版文化の共同制作を示す。",
  "lineage": null,
  "followup": "早稲田大学図書館『占夢南柯後記』稿本、完成版本、鈴木瑞枝（1984）、板坂則子（2010）。",
  "rightsNote": null,
  "sourceUrls": [
   "https://otakinen-museum.note.jp/n/n8657332473a2"
  ],
  "evidenceIds": [
   "EVD-003"
  ],
  "phases": [
   1811
  ],
  "recordYear": "1812",
  "phaseNote": "『占夢南柯後記』（1812刊）をめぐる話。口論の記述は1893年刊の伝記",
  "layer": "biography",
  "layerBy": "OS編集",
  "phaseBy": "OS編集"
 },
 {
  "id": "ANE-003",
  "pkg": "003",
  "prev002": [
   "ANE-002"
  ],
  "title": "死の直前「あと五年」と語った",
  "category": "伝記で伝わる言葉",
  "claim": "「天我をして五年の命を保たしめば、真正の画工となるを得べし」と言ったとすみだ北斎美術館が紹介する。",
  "supported": "この言葉が北斎の晩年像を語る伝記的伝承として紹介されていること。",
  "uncertain": "本人の逐語的発言か、最初に記録された文献、臨終への時間的近さ。",
  "label": "美術館解説で伝わる言葉／同時代の逐語記録は未確認",
  "confidence": "C",
  "interpretive": "生涯を通じて技を完成させようとする芸術家像と、後世の理想化を考える材料。",
  "lineage": null,
  "followup": "『葛飾北斎伝』の該当箇所、家族・弟子の記録、最古の引用文献を特定。",
  "rightsNote": null,
  "sourceUrls": [
   "https://hokusai-museum.jp/modules/Page/pages/view/401?lang=ja"
  ],
  "evidenceIds": [],
  "phases": [
   1844
  ],
  "recordYear": "1893",
  "phaseNote": "臨終の言葉として伝わる。記録は後年の伝記",
  "layer": "tradition",
  "layerBy": "OS編集",
  "phaseBy": "OS編集"
 },
 {
  "id": "ANE-004",
  "pkg": "003",
  "prev002": [
   "ANE-003"
  ],
  "title": "辞世「ひと魂でゆく気散じや夏の原」",
  "category": "辞世として伝わる句",
  "claim": "すみだ北斎美術館が北斎の辞世の句として紹介している。",
  "supported": "北斎の辞世として流布し、専門館解説にも採録されていること。",
  "uncertain": "最古の出典、成立時期、実際に本人が辞世として詠んだか。",
  "label": "北斎の辞世と伝えられる句／初出調査中",
  "confidence": "C",
  "interpretive": "死後の自由をユーモラスに表す北斎像と、辞世文化の一例。",
  "lineage": null,
  "followup": "『葛飾北斎伝』、同時代の俳諧・川柳資料、初出を特定。",
  "rightsNote": null,
  "sourceUrls": [
   "https://hokusai-museum.jp/modules/Page/pages/view/401?lang=ja"
  ],
  "evidenceIds": [],
  "phases": [
   1844
  ],
  "recordYear": null,
  "phaseNote": "辞世として伝わる句。初出未確認",
  "layer": "tradition",
  "layerBy": "OS編集",
  "phaseBy": "OS編集"
 },
 {
  "id": "ANE-005",
  "pkg": "003",
  "prev002": [
   "ANE-008"
  ],
  "title": "『富嶽百景』跋文で百歳を超えても上達すると語った",
  "category": "一次資料に基づく本人の言葉",
  "claim": "『富嶽百景』初編跋文（1834）で、北斎は73歳でようやく物の骨格や生の道理を悟ったと述べ、80歳・90歳・100歳以降のさらなる向上を語る。",
  "supported": "跋文が現存する刊本の一部であること。NDLイメージバンクとすみだ北斎美術館が紹介。",
  "uncertain": "翻刻の異同、句読点、現代語訳のニュアンス。",
  "label": "刊本に残る本人の言葉（原文画像へリンク）",
  "confidence": "A for source existence; transcription check pending",
  "interpretive": "逸話とは異なる強い根拠を持つ自己表現として、伝記的言葉と対照できる。",
  "lineage": null,
  "followup": "NDLイメージバンク掲載の『富嶽百景』初編跋文の具体的画像を固定し、原文・翻刻・現代語訳を照合。",
  "rightsNote": null,
  "sourceUrls": [
   "https://www.ndl.go.jp/imagebank/theme/fugaku100",
   "https://hokusai-museum.jp/modules/Page/pages/view/401?lang=ja"
  ],
  "evidenceIds": [
   "EVD-001"
  ],
  "phases": [
   1830
  ],
  "recordYear": "1834",
  "phaseNote": "『富嶽百景』初編（1834刊）の跋文",
  "layer": "primary",
  "layerBy": "OS編集",
  "phaseBy": "OS編集"
 },
 {
  "id": "ANE-006",
  "pkg": "003",
  "prev002": [
   "ANE-007"
  ],
  "title": "掃除をせず、部屋が汚れると引っ越した",
  "category": "近代伝記に記された生活逸話",
  "claim": "『葛飾北斎伝』は、居室を掃除せず、汚れると別の場所へ移ったと記す。",
  "supported": "1893年刊の伝記にその説明がある。",
  "uncertain": "それが実際の転居理由の中心だったか。後世の「奇人」像による誇張の可能性。",
  "label": "1893年刊伝記に記された逸話／理由は未確定",
  "confidence": "C",
  "interpretive": "生活習慣の逸話だけでなく、芸術家を奇人として語る近代の伝記作法を考察できる。",
  "lineage": null,
  "followup": "『葛飾北斎伝』該当頁、四方梅彦の記録とされる文献の書誌・成立事情を確認。",
  "rightsNote": null,
  "sourceUrls": [
   "https://otakinen-museum.note.jp/n/n1e04d33b89d8"
  ],
  "evidenceIds": [
   "EVD-004"
  ],
  "phases": [],
  "recordYear": "1893",
  "phaseNote": "生涯の生活逸話。記録は1893年刊の伝記",
  "layer": "biography",
  "layerBy": "OS編集",
  "phaseBy": "OS編集"
 },
 {
  "id": "ANE-007",
  "pkg": "003",
  "prev002": [
   "ANE-006"
  ],
  "title": "一日に三か所へ転居した",
  "category": "近代伝記に記された極端な逸話",
  "claim": "『葛飾北斎伝』に「一日三所に転ぜしことあり」と記される。",
  "supported": "明治期の伝記にこの記述がある。",
  "uncertain": "具体的な日付・移動先・独立した同時代の裏付け。",
  "label": "後年の伝記に見える未検証の逸話",
  "confidence": "C-",
  "interpretive": "伝記が数字や極端な行動によって「畸人」像を作る過程を示す。",
  "lineage": null,
  "followup": "『葛飾北斎伝』該当頁と、参照された先行資料を特定。",
  "rightsNote": null,
  "sourceUrls": [
   "https://otakinen-museum.note.jp/n/n1e04d33b89d8"
  ],
  "evidenceIds": [
   "EVD-004"
  ],
  "phases": [],
  "recordYear": "1893",
  "phaseNote": "時期の記載なし。記録は1893年刊の伝記",
  "layer": "biography",
  "layerBy": "OS編集",
  "phaseBy": "OS編集"
 },
 {
  "id": "ANE-008",
  "pkg": "003",
  "prev002": [
   "ANE-009"
  ],
  "title": "多数の画号を使い、転居と改名を繰り返した",
  "category": "作品署名と同時代の記録",
  "claim": "北斎は春朗、宗理、北斎、戴斗、為一、卍など複数の号を使用した。馬琴の覚書は転居と改名の頻度に言及する。",
  "supported": "複数の画号は作品署名で確認可能。馬琴の覚書の存在は専門館解説で紹介。",
  "uncertain": "すべての号の切替時期や動機を単一の説明でまとめること。",
  "label": "作品署名で追える事実／号の使用時期は作品ごとに確認",
  "confidence": "A for multiple names; chronology requires item-level work",
  "interpretive": "作風の変化、出版市場、自己演出を時系列で示す。",
  "lineage": null,
  "followup": "画号ごとに作品の署名・刊記・制作年を個別に採録。",
  "rightsNote": null,
  "sourceUrls": [
   "https://otakinen-museum.note.jp/n/n1e04d33b89d8"
  ],
  "evidenceIds": [],
  "phases": [],
  "recordYear": null,
  "phaseNote": "画号は生涯を通じて変わる。各号の時期は人物年譜・名前史を参照",
  "layer": "primary",
  "layerBy": "OS編集",
  "phaseBy": "OS編集"
 },
 {
  "id": "ANE-009",
  "pkg": "004",
  "prev002": [
   "ANE-010"
  ],
  "title": "120畳敷の大達磨を公開制作した",
  "category": "近世の記録に基づく公開制作イベント",
  "claim": "文化14年（1817）10月、名古屋で北斎が大紙に大達磨を描く公開イベントを行ったと伝える。高力種信（猿猴庵）著『北斎大画即書細図』は同年10月成立とされ、文化遺産オンラインがこのイベントの細部を紹介している。",
  "supported": "大達磨を描く公開イベントがあったという点は、1817年成立とされる記録資料があるため、単なる近代の噂より強い根拠を持つ。",
  "uncertain": "現存する記録が転写本であること、120畳という規模や各寸法が実演時の記録をどの程度正確に反映するか、現存作品の来歴・現状。",
  "label": "1817年成立とされる記録資料に基づく公開制作（寸法・現存状況は別途検証）",
  "confidence": "STRONG_CONTEMPORARY_OR_NEAR_CONTEMPORARY_ACCOUNT; ORIGINAL_OBJECT_AND_DIMENSIONS_STILL_REQUIRE_CATALOGUE_REVIEW",
  "interpretive": "北斎の作品制作が、展示・興行・観衆・宣伝と結びつく「パフォーマンス」でもあったことを示す。技術の誇示と商業的な自己演出の両面を考えられる。",
  "lineage": "高力種信『北斎大画即書細図』（1817年成立とされる転写本）; 飯島虚心『葛飾北斎伝』（1893）; 文化遺産オンライン／名古屋市博物館",
  "followup": null,
  "rightsNote": "文化遺産オンラインは画像利用条件について登録館への問い合わせを案内している。画像をコピーせず、文化遺産オンライン／所蔵館へのリンクを使う。",
  "sourceUrls": [
   "https://online.bunka.go.jp/heritages/detail/96819",
   "https://online.bunka.go.jp/db/heritages/detail/96819",
   "https://www.edohakuarchives.jp/detail-4872.html"
  ],
  "evidenceIds": [],
  "phases": [
   1811
  ],
  "recordYear": "1817",
  "phaseNote": "文化14年（1817）10月、名古屋",
  "layer": "contemporary",
  "layerBy": "OS編集",
  "phaseBy": "OS編集"
 },
 {
  "id": "ANE-010",
  "pkg": "004",
  "prev002": [],
  "title": "孫の放蕩に苦しみ「悪魔」と呼んだという話",
  "category": "家族史・同時代人の記録と後年伝記の複合",
  "claim": "北斎の長女美与と門人・柳川重信の間に生まれた孫が、成長後に放蕩し、北斎が借金等の後始末に苦しんだという話。太田記念美術館の学芸員解説は、曲亭馬琴『後の為の記』と、飯島虚心『葛飾北斎伝』に紹介された北斎自筆書簡を根拠として挙げる。",
  "supported": "孫の放蕩と北斎の苦労について、北斎と交流のあった馬琴の記録、および北斎書簡とされる資料が後年の伝記に紹介されている。",
  "uncertain": "孫の実名、生年、出来事の全時系列、「悪魔」という表現が北斎本人の原文なのか後年の要約・見出しなのか。原資料の該当頁を確認する必要がある。",
  "label": "同時代人の記録・書簡を根拠とする家族逸話（孫の詳細は未確定）",
  "confidence": "DOCUMENTARY_CORE_SUPPORTED_BY_REPORTED_PRIMARY_SOURCES; GRANDSON'S_IDENTITY_AND_EXACT_BIOGRAPHY_UNCERTAIN",
  "interpretive": "天才画家の伝記を作品だけでなく、家族扶養、借金、世代間の負担から描く。江戸時代の家族関係・信用・債務の現実を考える素材になる。",
  "lineage": "曲亭馬琴『後の為の記』（国立国会図書館所蔵と解説に記載）; 北斎自筆書簡（飯島虚心『葛飾北斎伝』1893年に紹介）; 太田記念美術館解説",
  "followup": null,
  "rightsNote": "太田記念美術館記事の文章・画像は転載しない。『後の為の記』と『葛飾北斎伝』の個別画像の利用条件を確認する。",
  "sourceUrls": [
   "https://otakinen-museum.note.jp/n/n9f59105a7e29"
  ],
  "evidenceIds": [],
  "phases": [],
  "recordYear": null,
  "phaseNote": "孫の生年・出来事の時期が未確定のため時期を特定しない",
  "layer": "contemporary",
  "layerBy": "OS編集",
  "phaseBy": "OS編集"
 },
 {
  "id": "ANE-011",
  "pkg": "004",
  "prev002": [
   "ANE-005"
  ],
  "title": "馬琴の指示を変えて挿絵を描いたという話",
  "category": "同時代書簡の翻刻に基づく逸話",
  "claim": "天保11年（1840）、曲亭馬琴が殿村篠斎に宛てた書簡で、北斎は稿本の人物の左右や人数を変えるなど、作者の指示に従わず自分の絵として描こうとした、と述べたと紹介される。太田記念美術館は、娘による代筆であることも注記している。",
  "supported": "馬琴が北斎の作画上の自由・作者の指示との相違について書簡で言及したという翻刻がある。",
  "uncertain": "書簡原本の筆跡・文脈、個々の作品での変更の実態。北斎がすべての共同制作で作者の指示を無視したという一般化はできない。",
  "label": "同時代書簡の翻刻に基づく記録（原本照合は継続）",
  "confidence": "CONTEMPORARY_LETTER_REPORTED_IN_SCHOLARLY_TRANSCRIPTION; ORIGINAL_LETTER_IMAGE_NOT_YET_REVIEWED",
  "interpretive": "絵師の創作上の自律性、作者と絵師の交渉、版元を含む江戸出版の分業構造を具体的に示す。",
  "lineage": "馬琴から殿村篠斎宛書簡（天保11年、娘代筆と解説）; 柴田光彦・神田正行編『馬琴書翰集成』第5巻（2003）; 太田記念美術館解説",
  "followup": null,
  "rightsNote": "現代の翻刻・記事本文を転載せず、書誌と公式解説へリンク。原本画像は所蔵元の利用条件を確認。",
  "sourceUrls": [
   "https://otakinen-museum.note.jp/n/nbd24aed0a46b"
  ],
  "evidenceIds": [],
  "phases": [
   1836
  ],
  "recordYear": "1840",
  "phaseNote": "根拠は天保11年（1840）の馬琴書簡。書簡が述べる共同制作の時期は未特定",
  "layer": "contemporary",
  "layerBy": "OS編集",
  "phaseBy": "OS編集"
 }
];

export const evidenceRecords = [
 {
  "id": "EVD-001",
  "pkg": "003",
  "subject": "『富嶽百景』初編跋文",
  "category": "primary_source",
  "eventDate": "天保5年（1834）初編刊行時",
  "sourceDate": "1834",
  "sourceType": "本人著作の跋文（刊本）",
  "institution": "国立国会図書館 NDLイメージバンク／すみだ北斎美術館解説",
  "url": "https://www.ndl.go.jp/imagebank/theme/fugaku100",
  "secondaryUrl": "https://hokusai-museum.jp/modules/Page/pages/view/401?lang=ja",
  "assessment": "HIGH_FOR_TEXT_EXISTENCE; exact transcription variants need comparison",
  "rights": "NDLイメージバンク掲載画像は公式案内上、著作権保護期間満了・申請不要・出典表記必要。画像ごとのページと出典を記録する。",
  "workflow": "NDL Image Bankの対象画像を直接利用し、出典「国立国会図書館『NDLイメージバンク』」と原ページURLを表示。原文・翻刻・現代語訳はそれぞれ別出典を記録。",
  "doNot": "現代語訳を北斎の原文として表示しない。NDL電子展示会の全体構成をそのまま再現しない。"
 },
 {
  "id": "EVD-002",
  "pkg": "003",
  "subject": "北斎は93回引っ越した",
  "category": "anecdote_with_contemporary_support",
  "eventDate": "北斎の生涯（1760–1849）; 93回説は1893年刊伝記序文",
  "sourceDate": "1893; 1836; 1842",
  "sourceType": "近代伝記＋同時代の覚書・住所録",
  "institution": "太田記念美術館（記事執筆：日野原健司）／江戸東京博物館資料情報",
  "url": "https://otakinen-museum.note.jp/n/n1e04d33b89d8",
  "secondaryUrl": "https://www.edohakuarchives.jp/detail-4872.html",
  "assessment": "FREQUENT_MOVING_SUPPORTED; EXACT_COUNT_93_NOT_VERIFIED",
  "rights": "二次記事本文・写真の転載はしない。飯島虚心『葛飾北斎伝』は原資料として書誌を記録し、使用画像は所蔵元の条件を確認。",
  "workflow": "「頻繁な転居は同時代記録で支持される／93回の正確な総数は未確定」と表示。馬琴の覚書、『広益諸家人名録』の「居所不定」、1893年伝記の記述を別々に引用。",
  "doNot": "93回を確定した事実として年表の数値に使わない。掃除嫌いが唯一の理由だと断定しない。"
 },
 {
  "id": "EVD-003",
  "pkg": "003",
  "subject": "北斎と馬琴の草履逸話",
  "category": "contested_anecdote_with_material_comparison",
  "eventDate": "作品刊行1812; 逸話の確認可能な伝記記載1893",
  "sourceDate": "1812; 1893; 1984; 2010; 2022 article",
  "sourceType": "後年の伝記＋稿本と完成版本の比較を紹介する専門館解説",
  "institution": "太田記念美術館／早稲田大学図書館デジタルアーカイブ",
  "url": "https://otakinen-museum.note.jp/n/n8657332473a2",
  "secondaryUrl": null,
  "assessment": "ARGUMENT_OVER_DESIGN_CHOICE_PLAUSIBLE; REPORTED_DIALOGUE_AND_FINAL_RUPTURE_UNPROVEN",
  "rights": "早稲田大学所蔵資料の画像。閲覧可能であることは再掲載許可を意味しない。現段階は画像を埋め込まず、所蔵元資料へのリンクに留める。",
  "workflow": "逸話を『明治期の伝記に記載／江戸期文献で逸話そのものは未確認／稿本と版本の差から制作上の意見対立はあり得る』と表示。",
  "doNot": "会話を逐語的史実として引用しない。二人が絶交したと断定しない。記事の画像を転載しない。"
 },
 {
  "id": "EVD-004",
  "pkg": "003",
  "subject": "『葛飾北斎伝』の書誌",
  "category": "bibliographic_primary_source",
  "eventDate": "明治26年（1893）",
  "sourceDate": "1893",
  "sourceType": "伝記・版本（出来事当時の同時代資料ではない）",
  "institution": "江戸東京博物館／ToMuCo Tokyo Museum Collection",
  "url": "https://www.edohakuarchives.jp/detail-4872.html",
  "secondaryUrl": "https://museumcollection.tokyo/works/6239945/",
  "assessment": "BIBLIOGRAPHIC_RECORD_CONFIRMED; CONTENT_PAGE_BY_PAGE_NOT_YET_TRANSCRIBED",
  "rights": "所蔵資料の画像・デジタルアーカイブ画像を転載する場合、個別利用条件を確認する。書誌メタデータは画像そのものと分ける。",
  "workflow": "伝承の出典として著者・書名・刊年・所蔵資料番号を記載。記述を同時代の目撃記録として扱わない。",
  "doNot": "1893年の伝記を1760–1849年の出来事そのものと同じ時点の資料として扱わない。"
 },
 {
  "id": "EVD-005",
  "pkg": "003",
  "subject": "NDLイメージバンク利用条件",
  "category": "rights_policy",
  "eventDate": "現行ウェブポリシー",
  "sourceDate": "current as accessed 2026-10-28",
  "sourceType": "公式利用規約",
  "institution": "国立国会図書館",
  "url": "https://www.ndl.go.jp/imagebank/about",
  "secondaryUrl": null,
  "assessment": "OFFICIAL_POLICY",
  "rights": "NDL Image Bankの掲載画像・解説は転載申請不要で商用利用も可能、出典表記が必要と明記。NDL Image Bank外のNDL Digital Collectionsは別ルール。",
  "workflow": "NDL Image Bankで公開された対象画像を、出典とURLを記録して利用。個別画像のページ・出典資料も保存。",
  "doNot": "NDLデジタルコレクション全体に同じ条件を拡張しない。電子展示会全体の構成を再現しない。"
 },
 {
  "id": "EVD-006",
  "pkg": "003",
  "subject": "NDLデジタルコレクションの個別画像利用",
  "category": "rights_policy",
  "eventDate": "現行ウェブポリシー",
  "sourceDate": "current as accessed 2026-10-28",
  "sourceType": "公式転載案内",
  "institution": "国立国会図書館",
  "url": "https://www.ndl.go.jp/use/reproduction",
  "secondaryUrl": null,
  "assessment": "OFFICIAL_POLICY",
  "rights": "個々の画像の「共有」欄に表示される公開範囲を確認する必要がある。「インターネット公開（保護期間満了）」は自由利用可能。「裁定」「許諾」等は原則権利者許諾が必要。",
  "workflow": "巻号・画像単位で共有欄を確認し、スクリーンショットまたは記録を内部監査資料として保存。",
  "doNot": "タイトル全体の公開状態だけを根拠に個別画像を許可済みにしない。"
 },
 {
  "id": "EVD-007",
  "pkg": "003",
  "subject": "The Met『The Top of Mount Fuji』作品レコード",
  "category": "rights_cleared_image_candidate",
  "eventDate": "ca. 1800",
  "sourceDate": "ca. 1800",
  "sourceType": "美術館コレクション作品レコード",
  "institution": "The Metropolitan Museum of Art",
  "url": "https://www.metmuseum.org/art/collection/search/54887",
  "secondaryUrl": null,
  "assessment": "OBJECT_RECORD_CONFIRMED; MET_PAGE_LABELS_PUBLIC_DOMAIN",
  "rights": "個別作品ページにPublic Domainと記載。The MetのOA対象画像はCC0として商用・非商用利用が可能。プロジェクトのクレジットと、同館の推薦・承認を示唆しないことが必要。",
  "workflow": "この個別作品のThe Metから直接取得したOA画像を使用候補にできる。作品名、作者、年代、作品番号、作品URLを保存し、クレジットを付す。",
  "doNot": "他のThe Met作品へこの判定を流用しない。別サイトから取得した同じ作品画像を自動的にOA扱いしない。"
 },
 {
  "id": "EVD-008",
  "pkg": "003",
  "subject": "本所絵図（尾張屋版）",
  "category": "historical_map",
  "eventDate": "1852",
  "sourceDate": "1852",
  "sourceType": "江戸切絵図＋デジタル地名索引・現代位置合わせ",
  "institution": "国立国会図書館所蔵資料／CODH江戸マップ",
  "url": "https://codh.rois.ac.jp/edo-maps/owariya/16/",
  "secondaryUrl": null,
  "assessment": "MAP_AND_DATE_CONFIRMED; GEOGRAPHIC_ALIGNMENT_AND_REUSE_TERMS_REQUIRE_SEPARATE_REVIEW",
  "rights": "原地図画像、CODHの位置合わせ画像、地名データ、UI表示を分けて権利・利用条件を確認。現時点では埋め込み画像としての利用を保留。",
  "workflow": "外部リンクで閲覧を案内し、北斎出生年1760年と地図刊行年1852年の差を明記。独自の模式図を作る場合は、出典と推定範囲を表示。",
  "doNot": "1852年図を出生時の1760年の町割りの直接証拠として扱わない。CODHの位置合わせ地図を無許可でコピーしない。"
 }
];

export const rightsRecords = [
 {
  "id": "RGT-001",
  "pkg": "003",
  "source": "NDL Image Bank",
  "scope": "NDLイメージバンク掲載の個別画像と解説",
  "status": "REUSE_ALLOWED_WITH_ATTRIBUTION",
  "evidence": "https://www.ndl.go.jp/imagebank/about",
  "rules": "公式案内は掲載画像・解説が保護期間満了で転載申請不要、商用利用可、出典表記必要と明記。NDL Image Bank掲載画像を使用し、出典を記録。電子展示会の全体構成を再現する利用は別途相談が必要。",
  "workflow": null,
  "doNot": null,
  "confidence": "HIGH_WITHIN_STATED_SCOPE"
 },
 {
  "id": "RGT-002",
  "pkg": "003",
  "source": "NDL Digital Collections (outside Image Bank)",
  "scope": "各巻・各画像",
  "status": "ITEM_LEVEL_REVIEW_REQUIRED",
  "evidence": "https://www.ndl.go.jp/use/reproduction",
  "rules": "画像を表示し、共有欄の公開範囲を個別に確認。『インターネット公開（保護期間満了）』は自由利用可。『裁定』『許諾』『送信サービス限定』『館内限定』等は原則権利者許諾が必要。",
  "workflow": null,
  "doNot": null,
  "confidence": "HIGH_POLICY_NOT_ITEM_CLEARANCE"
 },
 {
  "id": "RGT-003",
  "pkg": "003",
  "source": "The Met Open Access",
  "scope": "個別作品ページでOA/Public Domain表示のある作品画像",
  "status": "REUSE_ALLOWED_CC0_AFTER_ITEM_CHECK",
  "evidence": "https://www.metmuseum.org/ja/policies/terms-and-conditions",
  "rules": "OA対象はCC0、商用・非商用利用可。OA表示のない資料は制限があり得る。第三者権利を保証しない旨も規約にある。",
  "workflow": null,
  "doNot": null,
  "confidence": "HIGH_WITHIN_STATED_SCOPE"
 },
 {
  "id": "RGT-004",
  "pkg": "003",
  "source": "The Met The Top of Mount Fuji, object JP1012",
  "scope": "個別作品ページ https://www.metmuseum.org/art/collection/search/54887",
  "status": "ITEM_LEVEL_PUBLIC_DOMAIN_CONFIRMED",
  "evidence": "個別作品ページにPublic Domainと表示。作品番号JP1012、年代ca.1800。",
  "rules": "Metから直接ダウンロードするOA画像を使用し、作品名・作者・年代・作品番号・URLを内部台帳に保存。Metの推薦・承認を示唆しない。",
  "workflow": null,
  "doNot": null,
  "confidence": "HIGH_RECHECK_AT_DOWNLOAD"
 },
 {
  "id": "RGT-005",
  "pkg": "003",
  "source": "CODH Edo Maps / 本所絵図",
  "scope": "原地図画像、現代位置合わせ地図、地名データ、UIを別々に判断",
  "status": "LINK_ONLY_PENDING_TERMS_REVIEW",
  "evidence": "https://codh.rois.ac.jp/edo-maps/owariya/16/",
  "rules": "地図ページと1852年という年代は確認。再利用条件の確証が取れるまでは埋め込み・複製をしない。",
  "workflow": null,
  "doNot": null,
  "confidence": "CONSERVATIVE_HOLD"
 },
 {
  "id": "RGT-006",
  "pkg": "003",
  "source": "Waseda University Library image used in Ota Memorial Museum article",
  "scope": "『占夢南柯後記』稿本の画像",
  "status": "LINK_ONLY_PENDING_ITEM_TERMS",
  "evidence": "https://archive.wul.waseda.ac.jp/kosho/he13/he13_01280/he13_01280_0008/he13_01280_0008_p0008.jpg",
  "rules": "ブラウザ閲覧可能であっても画像再掲載許可とはみなさない。公式アーカイブの利用条件・書誌を確認するまで埋め込まない。",
  "workflow": null,
  "doNot": null,
  "confidence": "CONSERVATIVE_HOLD"
 },
 {
  "id": "RGT-007",
  "pkg": "004",
  "source": "CODH 江戸マップのウェブサイトとデータセット",
  "scope": "ウェブページ・地名データセット・NDL原地図画像・位置合わせ地図を別々に扱う",
  "status": "DATASET_CC_BY_4_0; WEBSITE_FOOTER_CC_BY_SA_4_0; SOURCE_MAP_SEPARATE",
  "evidence": "https://codh.rois.ac.jp/edo-maps/dataset/ ; https://codh.rois.ac.jp/edo-maps/owariya/16/",
  "rules": "CODHの江戸マップ地名データセットはCC BY 4.0と明記。ページのフッターはCODHサイトについてCC BY-SA 4.0と表示。これはNDL所蔵の原地図画像すべてが同じライセンスという意味ではない。原地図画像・現代位置合わせ地図・地名データ・サイトの解説を別々に記録する。",
  "workflow": "地名データセットを利用する場合は名称「江戸マップ地名データセット」、作成主体ROIS-DS人文学オープンデータ共同利用センター、DOI 10.20676/00000445、CC BY 4.0を明示。派生データのライセンス・出典も記録。",
  "doNot": "CC BY 4.0の地名データライセンスをNDL原地図画像やCODHの位置合わせ画像へ無条件に適用しない。",
  "confidence": "HIGH_FOR_DATASET_LICENSE; ITEM_LEVEL_IMAGE_REUSE_REQUIRES_SEPARATE_CHECK"
 },
 {
  "id": "RGT-008",
  "pkg": "004",
  "source": "文化遺産オンライン『北斎大画即書細図』",
  "scope": "作品画像・解説・書誌情報",
  "status": "IMAGE_PERMISSION_CONTACT_REGISTERING_MUSEUM",
  "evidence": "https://online.bunka.go.jp/heritages/detail/96819",
  "rules": "ページに『画像の利用条件等に関しては、登録館へお問い合わせください』と明記。表示画像をダウンロードして再掲載する前に、登録館である名古屋市博物館へ利用条件を確認する。",
  "workflow": "まず文化遺産オンラインのレコードへリンクし、所蔵館の正式な利用条件を確認してから画像採用を決定する。",
  "doNot": "古い転写本・江戸時代の著作であることを理由に、デジタル画像の再掲載を自動承認しない。",
  "confidence": "HIGH"
 }
];

export const periodResearchNotes = {
 "1760": [
  "生誕地は本所割下水付近という公的説明。家屋の一点特定は未確認。幼名・幼少期の逸話は伝承区分を保持。",
  "作品ごとに署名・版元・制作年を確認。作品の現存・同定と制作年の確度を分ける。"
 ],
 "1779": [
  "作品ごとに署名・版元・制作年を確認。作品の現存・同定と制作年の確度を分ける。"
 ],
 "1794": [
  "宗理名義の作品は作者同定に議論がある場合があるため、館のカタログ記載を記録。"
 ],
 "1800": [
  "宗理名義の作品は作者同定に議論がある場合があるため、館のカタログ記載を記録。",
  "版本の書誌と挿絵画像を分けて記録。刊年と制作年を混同しない。"
 ],
 "1811": [
  "版本の書誌と挿絵画像を分けて記録。刊年と制作年を混同しない。",
  "初編刊行年、版次、後印・後摺を個別レコードで確認。",
  "現存する摺りの版・色差・所蔵館の違いを尊重。地理比定は作品画像の利用条件とは別の研究項目。"
 ],
 "1821": [
  "現存する摺りの版・色差・所蔵館の違いを尊重。地理比定は作品画像の利用条件とは別の研究項目。"
 ],
 "1830": [
  "現存する摺りの版・色差・所蔵館の違いを尊重。地理比定は作品画像の利用条件とは別の研究項目。",
  "刊本と個々の図版を分けて調査。画像の公開範囲は巻ごと・画像ごとに確認。"
 ],
 "1836": [
  "刊本と個々の図版を分けて調査。画像の公開範囲は巻ごと・画像ごとに確認。",
  "現地に残る作品は設置場所の公式情報と作品画像の利用条件を別々に確認。"
 ],
 "1844": [
  "現地に残る作品は設置場所の公式情報と作品画像の利用条件を別々に確認。"
 ],
 "1850": [
  "各時代の受容を語る際は、現代の評価を江戸期の同時代評価として扱わない。"
 ]
};

export const oldMaps = [
 {
  "id": "MAP-NDL-1286679",
  "title": "〔江戸切絵図〕本所絵図",
  "publisher": "尾張屋清七",
  "creator": "景山致恭・戸松昌訓・井山能知 編",
  "dateText": "嘉永2–文久2（1849–1862）刊（CODH江戸マップは1852年版として掲載）",
  "year": 1852,
  "iiif": "https://dl.ndl.go.jp/api/iiif/1286679/R0000001",
  "size": [
   6144,
   4096
  ],
  "crop": [
   1350,
   2600,
   1100,
   950
  ],
  "marks": [
   {
    "label": "南割下水",
    "xywh": [
     1917,
     2924,
     132,
     42
    ],
    "codh": "16-251"
   },
   {
    "label": "亀沢町",
    "xywh": [
     1737,
     3284,
     125,
     54
    ],
    "codh": "16-221"
   }
  ],
  "page": "https://dl.ndl.go.jp/pid/1286679",
  "doi": "10.11501/1286679",
  "codh": "https://codh.rois.ac.jp/edo-maps/owariya/16/",
  "rights": {
   "status": "PDM",
   "basis": "国立国会図書館デジタルコレクション IIIFマニフェスト Access Restrictions: PDM（個別資料）",
   "credit": "国立国会図書館デジタルコレクション"
  },
  "gapNote": "北斎の誕生（1760）から約90年後の地図。誕生時の町並みそのものではない。",
  "checkedAt": "2026-10-30"
 }
];

export const textLinks = [
 {
  "lifeId": "dh1993-1760-birth",
  "text": "江戸本所割下水",
  "place": "r_warishita",
  "zoom": 14,
  "oldMap": "MAP-NDL-1286679",
  "note": "本所割下水付近の代表点（家屋の位置ではない）。墨田区は現在の亀沢付近と説明。",
  "linkBy": "OS編集"
 }
];
