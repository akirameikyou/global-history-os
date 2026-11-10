// data/manjiro_wlink.js — W-LINK（同時代の世界）。万次郎 Focus 新装版（manjiro/focusShell.html）が読む。
// 中身は sandbox/index.html の worldLinks（期間・場所・色）と WORLD_EXTRA（本文）を 2026-11-09 にそのまま写したもの（文は変えていない）。
// 2026-11-10 追加：生まれる前の5件とスエズ運河の開通（docs/manjiro_monthly/RESEARCH_PREBIRTH_WLINK.md）、各件の persons（関わった人・QID・人物地球の名簿 id）と evidence・sources・dateNote。
// 同日追加：最初の調査の #1・#3・#5・#14・#15（清水さん「省くより入れる方を優先」）。persons の year＝人物地球へ渡す年（無ければ W-LINK の開始年）。category＝whaling（捕鯨と海の道）／contact（日本への接近）／world（世界の動き）。
// 公開中の sandbox は自分の写しを使い続ける。二つを一本にするのは sandbox を直す時（別の工程）。

export const worldLinks = [
 {
  id:'rezanov_arrival',
  category:'contact',
  persons:[{"name": "ニコライ・レザノフ", "qid": "Q332732", "baseId": null}, {"name": "クルーゼンシュテルン", "qid": "Q160888", "baseId": null}],
  label:'REZANOV ARRIVAL',
  startYear:1804,
  endYear:1804,
  color:'#ffb36b',
  lat:32.75,
  lng:129.88,
  altitude:1.55,
  placeName:'Nagasaki / Japan',
  placeShort:'NAGASAKI'
 },
 {
  id:'steam_revolution',
  category:'world',
  persons:[{"name": "ロバート・フルトン", "qid": "Q192496", "baseId": null}],
  label:'STEAM REVOLUTION',
  startYear:1807,
  endYear:1807,
  color:'#aaaaaa',
  lat:40.71,
  lng:-74.0,
  altitude:1.65,
  placeName:'Hudson River / New York',
  placeShort:'HUDSON RIVER'
 },
 {
  id:'napoleonic_end',
  category:'world',
  persons:[{"name": "ナポレオン", "qid": "Q517", "baseId": "b0390"}, {"name": "ウェリントン公", "qid": "Q131691", "baseId": null}],
  label:'NAPOLEONIC END',
  startYear:1815,
  endYear:1815,
  color:'#d0d0ff',
  lat:50.68,
  lng:4.41,
  altitude:1.65,
  placeName:'Waterloo / Europe',
  placeShort:'WATERLOO'
 },
 {
  id:'ikokusen_order',
  category:'contact',
  persons:[{"name": "徳川家斉", "qid": "Q439717", "baseId": null}, {"name": "会沢正志斎", "qid": "Q2090901", "baseId": null}, {"name": "水野忠邦（1842年の緩和）", "qid": "Q2975848", "baseId": "b0408", "year": 1842}],
  label:'IKOKUSEN ORDER',
  startYear:1825,
  endYear:1825,
  color:'#ffcc66',
  lat:35.68,
  lng:139.76,
  altitude:1.5,
  placeName:'Edo / Japan',
  placeShort:'EDO'
 },
 {
  id:'pacific_whaling',
  category:'whaling',
  persons:[{"name": "中浜万次郎", "qid": "Q1193167", "baseId": null}, {"name": "ウィリアム・H・ホイットフィールド", "qid": null, "baseId": null}],
  label:'PACIFIC WHALING',
  startYear:1840,
  endYear:1855,
  color:'#66e0ff',
  barType:'process',
  lat:30.0,
  lng:160.0,
  altitude:1.75,
  placeName:'North Pacific Ocean',
  placeShort:'NORTH PACIFIC'
 },
 {
  id:'perry_expedition',
  category:'contact',
  persons:[{"name": "マシュー・C・ペリー", "qid": "Q61855", "baseId": null}, {"name": "ミラード・フィルモア", "qid": "Q12306", "baseId": null}],
  label:'PERRY EXPEDITION',
  startYear:1852,
  endYear:1853,
  color:'#b58cff',
  lat:26.21,
  lng:127.68,
  altitude:1.55,
  placeName:'Ryukyu / East Asia',
  placeShort:'RYUKYU'
 },
 {
  id:'opening_of_japan',
  category:'contact',
  persons:[{"name": "阿部正弘", "qid": "Q1070088", "baseId": null}, {"name": "井伊直弼", "qid": "Q716940", "baseId": "b0422"}, {"name": "タウンゼント・ハリス", "qid": "Q610626", "baseId": null}, {"name": "徳川斉昭", "qid": "Q1323770", "baseId": null}],
  label:'OPENING OF JAPAN',
  startYear:1854,
  endYear:1868,
  color:'#7dff7a',
  lat:35.68,
  lng:139.76,
  altitude:1.55,
  placeName:'Japan',
  placeShort:'JAPAN'
 },
 {"id": "laxman_nemuro", "category": "contact", "label": "LAXMAN AT NEMURO", "startYear": 1792, "endYear": 1793, "color": "#c4a484", "lat": 43.33, "lng": 145.58, "altitude": 1.6, "placeName": "Nemuro / Ezo", "placeShort": "NEMURO", "evidence": "DIRECT", "dateNote": "ja.wikipedia は根室着を1792年10月20日、松前着を1793年6月20日とするが、暦の別を書いていない。資料どうしで11日の差がある（ロシアの旧暦と新暦の差と推定）。連れ帰ったのは3人で、そのうち小市は根室で越冬中に病死した。", "sources": [{"title": "アダム・ラクスマン（ja.wikipedia）", "url": "https://ja.wikipedia.org/wiki/アダム・ラクスマン"}, {"title": "北槎聞略・漂巽紀略の紹介（gendai.media）", "url": "https://gendai.media/articles/-/49683"}], "persons": [{"name": "アダム・ラクスマン", "qid": "Q29787", "baseId": null}, {"name": "大黒屋光太夫", "qid": "Q2563388", "baseId": null}, {"name": "松平定信", "qid": "Q284038", "baseId": "b0383"}]},
 {"id": "japan_ground", "category": "whaling", "label": "JAPAN GROUND", "startYear": 1819, "endYear": 1820, "color": "#6fa8a0", "lat": 34.0, "lng": 150.0, "altitude": 1.7, "placeName": "Japan Ground / Western North Pacific", "placeShort": "JAPAN GROUND", "evidence": "REPORTED", "dateNote": "発見の年が資料で違う。1819年とするのは Sea History（アレンがロンドン船の船長と発見を分け合ったとする）。1820年とするのは en.wikipedia と Punahou。", "sources": [{"title": "Whaling in the United States（en.wikipedia）", "url": "https://en.wikipedia.org/wiki/Whaling_in_the_United_States"}, {"title": "November 1, 1820 – Meeting Whalers（Punahou Bulletin）", "url": "https://bulletin.punahou.edu/meeting-whalers"}, {"title": "Sea History 127（issuu・検索要約）", "url": "https://issuu.com/seahistory/docs/sh_127_summer-2009/25"}], "persons": [{"name": "ジョゼフ・アレン（マロ号船長）", "qid": null, "baseId": null}]},
 {"id": "honolulu_1820", "category": "whaling", "label": "HONOLULU 1820", "startYear": 1820, "endYear": 1820, "color": "#e6a1b8", "lat": 21.31, "lng": -157.86, "altitude": 1.6, "placeName": "Honolulu / Hawaiian Islands", "placeShort": "HONOLULU", "evidence": "DIRECT", "dateNote": "宣教師団のホノルル着は1820年4月19日（en.wikipedia）。マロ号の11月1日は Punahou による。1819年にはハワイ島に最初の米国捕鯨船2隻（バレーナ号・エクエーター号）が来ていた（Punahou）。デーモンが働き始めたのは1842年で、1820年の宣教師団とは別の団体である。", "sources": [{"title": "November 1, 1820 – Meeting Whalers（Punahou Bulletin）", "url": "https://bulletin.punahou.edu/meeting-whalers"}, {"title": "Hiram Bingham I（en.wikipedia）", "url": "https://en.wikipedia.org/wiki/Hiram_Bingham_I"}, {"title": "Images of Old Hawaiʻi: Manjiro（二次資料）", "url": "https://imagesofoldhawaii.com/manjiro/"}, {"title": "Nakahama Manjirō（en.wikipedia）", "url": "https://en.wikipedia.org/wiki/John_Manjiro"}], "persons": [{"name": "ハイラム・ビンガム1世", "qid": "Q497096", "baseId": null}, {"name": "ジョゼフ・アレン（マロ号船長）", "qid": null, "baseId": null}, {"name": "サミュエル・C・デーモン（1850年の支援者）", "qid": "Q7411032", "baseId": null}]},
 {"id": "new_bedford_1823", "category": "whaling", "label": "NEW BEDFORD", "startYear": 1823, "endYear": 1823, "color": "#93a8c4", "lat": 41.64, "lng": -70.93, "altitude": 1.6, "placeName": "New Bedford / Massachusetts", "placeShort": "NEW BEDFORD", "evidence": "DIRECT", "dateNote": "1823年は NPS の年表による。ジョン・ハウランド号の港は、ニューベッドフォードの捕鯨船とする資料と、フェアヘーブンから出たとする資料がある。", "sources": [{"title": "NPS New Bedford Whaling NHP: Whaling Timeline（PDF）", "url": "https://npshistory.com/publications/nebe/brochures/whaling-timeline.pdf"}, {"title": "土佐清水市 市史編さん便り 第43号（PDF）", "url": "https://www.city.tosashimizu.kochi.jp/fs/4/5/6/6/9/6/_/hist_news_r5_43.pdf"}, {"title": "ジョン万次郎（ja.wikipedia）", "url": "https://ja.wikipedia.org/wiki/ジョン万次郎"}], "persons": [{"name": "ウィリアム・H・ホイットフィールド（船長）", "qid": null, "baseId": null}]},
 {"id": "otsuhama_1824", "category": "contact", "label": "OTSUHAMA INCIDENT", "startYear": 1824, "endYear": 1824, "color": "#d4836a", "lat": 36.85, "lng": 140.79, "altitude": 1.5, "placeName": "Otsuhama / Hitachi, Japan", "placeShort": "OTSUHAMA", "evidence": "REPORTED", "dateNote": "文政7年5月28日＝1824年6月24日（ja.wikipedia）。同じ記事には「出典不足」の表示があり、参考文献の欄も空である。留め置いた期間は資料で食い違う。", "sources": [{"title": "大津浜事件（ja.wikipedia。出典不足の表示あり）", "url": "https://ja.wikipedia.org/wiki/大津浜事件"}, {"title": "九州大学 論文（会沢の筆談と『新論』・検索要約）", "url": "https://catalog.lib.kyushu-u.ac.jp/opac_download_md/1806665/p017.pdf"}, {"title": "Julius Bright Ross: Whalers at Ōtsu", "url": "https://samurairevolution.omeka.net/exhibits/show/vtj/section2/jbrwhalers"}], "persons": [{"name": "会沢正志斎", "qid": "Q2090901", "baseId": null}]},
 {"id": "suez_canal_opening", "category": "world", "label": "SUEZ CANAL", "startYear": 1869, "endYear": 1869, "color": "#e3d3a4", "lat": 30.6, "lng": 32.33, "altitude": 1.7, "placeName": "Suez Canal / Egypt", "placeShort": "SUEZ", "evidence": "DIRECT", "dateNote": "開通日の1869年11月17日は en.wikipedia と Wikidata で一致する（DIRECT）。万次郎がこの運河を通ったことは二次資料どうしで食い違う（REPORTED）：ja.wikipedia と events.js（中浜明 1970）はスエズ経由の東回り、en.wikipedia は米国経由。", "sources": [{"title": "Suez Canal（en.wikipedia）", "url": "https://en.wikipedia.org/wiki/Suez_Canal"}, {"title": "Wikidata Q899（開通日 1869-11-17）", "url": "https://www.wikidata.org/wiki/Q899"}, {"title": "ジョン万次郎（ja.wikipedia。スエズ経由で帰国とする）", "url": "https://ja.wikipedia.org/wiki/ジョン万次郎"}, {"title": "Nakahama Manjirō（en.wikipedia。米国経由とする）", "url": "https://en.wikipedia.org/wiki/John_Manjiro"}], "persons": [{"name": "フェルディナン・ド・レセップス", "qid": "Q209169", "baseId": null}, {"name": "イスマーイール・パシャ", "qid": "Q159378", "baseId": null}, {"name": "ウジェニー・ド・モンティジョ", "qid": "Q157130", "baseId": null}]},
 {"id": "cape_horn_whalers", "label": "WHALERS ROUND CAPE HORN", "startYear": 1789, "endYear": 1793, "color": "#7fb7c9", "lat": -55.98, "lng": -67.27, "altitude": 1.8, "placeName": "Cape Horn / Pacific", "placeShort": "CAPE HORN", "category": "whaling", "evidence": "REPORTED", "dateNote": "1793年にニューベッドフォードのレベッカ号が太平洋の鯨油を持ち帰ったことは NPS の年表で DIRECT。1789年のロンドンのエミリア号は二次資料（REPORTED）。太平洋に入った最初の米国捕鯨船をビーバー号（1789/1791）とする資料もある。", "sources": [{"title": "NPS New Bedford Whaling NHP: Whaling Timeline（PDF。1793 レベッカ号）", "url": "https://npshistory.com/publications/nebe/brochures/whaling-timeline.pdf"}, {"title": "Whaling in the United States（en.wikipedia。最初のニューイングランドの捕鯨船がホーン岬を回ったのは1791年とする）", "url": "https://en.wikipedia.org/wiki/Whaling_in_the_United_States"}], "persons": []},
 {"id": "lady_washington_1791", "label": "LADY WASHINGTON", "startYear": 1791, "endYear": 1791, "color": "#c9a27f", "lat": 33.47, "lng": 135.83, "altitude": 1.5, "placeName": "Kii-Oshima / Japan", "placeShort": "KII-OSHIMA", "category": "contact", "evidence": "REPORTED", "dateNote": "来た日が資料で「4月29日〜5月8日」「5月6日」「5月6日〜17日」と分かれる。", "sources": [{"title": "在ニューヨーク日本国総領事館「日米関係史」（検索要約）", "url": "https://www.ny.us.emb-japan.go.jp/history/01.html?id=eng"}, {"title": "Lady Washington（en.wikipedia。日付・場所の記述なし）", "url": "https://en.wikipedia.org/wiki/Lady_Washington"}, {"title": "John Kendrick（en.wikipedia。5月6日〜17日、台風を避けて停泊）", "url": "https://en.wikipedia.org/wiki/John_Kendrick_(American_sea_captain)"}], "persons": [{"name": "ジョン・ケンドリック", "qid": "Q6242802", "baseId": null}]},
 {"id": "phaeton_1808", "label": "PHAETON INCIDENT", "startYear": 1808, "endYear": 1808, "color": "#b98fa8", "lat": 32.74, "lng": 129.87, "altitude": 1.5, "placeName": "Nagasaki / Japan", "placeShort": "NAGASAKI", "category": "contact", "evidence": "DIRECT", "dateNote": "1808年10月4日（文化5年8月15日）。", "sources": [{"title": "フェートン号事件（ja.wikipedia）", "url": "https://ja.wikipedia.org/wiki/フェートン号事件"}], "persons": [{"name": "フリートウッド・ペリュー", "qid": "Q5458506", "baseId": null}, {"name": "松平康英（長崎奉行）", "qid": "Q10791096", "baseId": null}]},
 {"id": "takarajima_1824", "label": "TAKARAJIMA INCIDENT", "startYear": 1824, "endYear": 1824, "color": "#c98a6a", "lat": 29.15, "lng": 129.21, "altitude": 1.5, "placeName": "Takarajima / Tokara Islands", "placeShort": "TAKARAJIMA", "category": "contact", "evidence": "DIRECT", "dateNote": "1824年8月（文政7年）。正確な日は確かめられていない。", "sources": [{"title": "宝島事件（ja.wikipedia）", "url": "https://ja.wikipedia.org/wiki/宝島事件"}], "persons": []},
 {"id": "beechey_bonin_1827", "label": "BEECHEY AT THE BONINS", "startYear": 1827, "endYear": 1827, "color": "#8fb98f", "lat": 27.09, "lng": 142.19, "altitude": 1.6, "placeName": "Port Lloyd / Bonin Islands", "placeShort": "PORT LLOYD", "category": "whaling", "evidence": "REPORTED", "dateNote": "着いたのは6月9日、銅板は6月14日、去ったのは6月15日とされるが、資料で「8日〜15日」「6日間」などの書き方もある。万次郎が生まれた（1827年1月）約5か月後の出来事。", "sources": [{"title": "Transactions of the Asiatic Society of Japan（小笠原の論文の写し・検索要約）", "url": "https://mysite.du.edu/~ttyler/bonin/Transactions%20of%20the%20Asiatic%20Society%20of%20Japan%20Bonin.htm"}], "persons": [{"name": "フレデリック・ウィリアム・ビーチー", "qid": "Q510721", "baseId": null}]}
];

export const WORLD_EXTRA = {
  rezanov_arrival: {
    id:'rezanov_arrival', title:'レザノフ来航', subtitleEn:'REZANOV ARRIVAL',
    startYear:1804, endYear:1804, year:'1804',
    description:'ロシア使節レザノフが長崎に来航し、江戸幕府に通商を求めた。幕府は長期にわたって回答を保留した後、要求を拒否した。',
    cardText:'1804年、ロシア皇帝の使節ニコライ・レザノフが長崎に来航し、日本との通商を求めた。幕府はレザノフ一行を長崎に留め、翌年、通商を認めない方針を伝えた。北方から接近するロシアへの警戒は、その後の幕府の海防政策にも影響を与えていく。',
    manjiroRelation:'万次郎誕生以前の出来事。万次郎が帰国する頃まで続く、幕府の対外警戒と海防政策の前史として位置づける。',
    meaning:'鎖国下の日本にも、周辺諸国から通商と外交を求める動きが繰り返し届いていた。日本が外の世界と無関係だったのではなく、接触を制限しながら国際関係に対応していたことを示す出来事である。',
    placeJa:'長崎', placeName:'Nagasaki / Japan', color:'#ffb36b'
  },
  steam_revolution: {
    id:'steam_revolution', title:'蒸気船革命', subtitleEn:'STEAM REVOLUTION',
    startYear:1807, endYear:1807, year:'1807',
    description:'蒸気機関を動力とする船が商業運航に入り、風に左右されていた海上移動に新しい時代が始まった。',
    cardText:'1807年、ロバート・フルトンの蒸気船がハドソン川で商業運航を成功させた。蒸気船は帆船と異なり、風向きだけに頼らず航行できる。19世紀を通して船体と機関が改良され、河川・沿岸・大洋を結ぶ定期航路が発達していった。',
    manjiroRelation:'万次郎は帆船による捕鯨航海を経験した一方、帰国や咸臨丸渡米後の移動、1870年の再渡米などでは蒸気船が結ぶ新しい交通網の中を移動した。',
    meaning:'蒸気船は、人・物資・郵便・情報が移動する速度と安定性を大きく変えた。万次郎が生きた時代は、帆船中心の海から蒸気船中心の海へ移り変わる時期でもあった。',
    placeJa:'ハドソン川・ニューヨーク', placeName:'Hudson River / New York', color:'#aaaaaa'
  },
  napoleonic_end: {
    id:'napoleonic_end', title:'ナポレオン戦争の終結', subtitleEn:'NAPOLEONIC END',
    startYear:1815, endYear:1815, year:'1815',
    description:'ヨーロッパを揺るがしたナポレオン戦争が終結し、イギリスの海上での優位がいっそう強まった。',
    cardText:'1815年、ワーテルローの戦いでナポレオンが敗れ、長く続いた戦争が終結した。戦後の国際秩序が再編されるなか、強力な海軍と商船隊を持つイギリスは、世界各地を結ぶ海上交通と貿易に大きな影響力を持つようになった。',
    manjiroRelation:'万次郎との直接の関与はない。万次郎を救助した捕鯨船や、その後の国際航路が活動した世界的背景として表示する。',
    meaning:'19世紀の世界は、ヨーロッパ諸国の海軍力、通商、植民地活動によって急速に結び直された。万次郎が漂流後に入った太平洋も、この世界規模の海上ネットワークの一部だった。',
    placeJa:'ワーテルロー・ヨーロッパ', placeName:'Waterloo / Europe', color:'#d0d0ff'
  },
  ikokusen_order: {
    id:'ikokusen_order', title:'異国船打払令', subtitleEn:'IKOKUSEN ORDER',
    startYear:1825, endYear:1825, year:'1825',
    description:'江戸幕府は、日本沿岸へ接近する外国船を追い払うよう命じ、海防政策を強化した。',
    cardText:'1825年、幕府は異国船打払令を出し、日本沿岸に接近した外国船を、理由を問わず退去させる方針を示した。ロシア船や欧米船の接近が増えるなか、幕府が海岸防備への警戒を強めたことを示している。この命令はアヘン戦争後の1842年に緩和された。',
    manjiroRelation:'万次郎が1841年に漂流した時点でも、外国との接触は強く制限されていた。帰国を決断する際の危険と困難を理解するための背景となる。',
    meaning:'漂流民が外国船に救助されても、帰国すれば厳しい取り調べを受けた時代背景を示す。海は人を世界へ運ぶ道である一方、幕府にとっては外からの脅威が到来する境界でもあった。',
    placeJa:'江戸・日本沿岸', placeName:'Edo / Japan', color:'#ffcc66'
  },
  pacific_whaling: {
    id:'pacific_whaling', title:'太平洋捕鯨', subtitleEn:'PACIFIC WHALING',
    startYear:1840, endYear:1855, year:'1840 — 1855',
    description:'19世紀の太平洋捕鯨は、港・島・船を結ぶ広域的な海上ネットワークを形成した。万次郎はその中で救助され、航海技術と英語を学び、世界を経験した。',
    cardText:'19世紀前半、アメリカの捕鯨船は大西洋からケープホーンを回り、太平洋各地へ進出した。捕鯨船は鯨を追うだけでなく、食料や水の補給、船の修理、乗組員の交代を通して、北米・南米・ハワイ・太平洋諸島を結んでいた。\n\n1841年、鳥島に漂着していた万次郎たちは、アメリカ捕鯨船ジョン・ハウランド号に救助された。万次郎はこの海上ネットワークを通じてアメリカへ渡り、教育を受け、さらに捕鯨航海へ参加した。',
    manjiroRelation:'万次郎の人生と直接結びつく世界史イベント。救助、渡米、教育、捕鯨航海、帰国資金の獲得へと続く出発点になった。',
    meaning:'太平洋捕鯨を単なる産業史としてではなく、人・知識・技術・言語が海を越えて移動した交流網として捉える。万次郎の生涯は、この網との偶然の接触から大きく展開した。',
    placeJa:'北太平洋', placeName:'North Pacific Ocean', color:'#66e0ff'
  },
  perry_expedition: {
    id:'perry_expedition', title:'ペリー遠征', subtitleEn:'PERRY EXPEDITION',
    startYear:1852, endYear:1853, year:'1852 — 1853',
    description:'アメリカ東インド艦隊司令長官ペリーは、日本との交渉を目的とする艦隊を率いて東アジアへ向かった。',
    cardText:'1852年、マシュー・ペリーはアメリカ大統領の国書を携え、艦隊を率いてアメリカを出発した。大西洋からインド洋を経て東アジアへ進み、1853年には琉球を訪れた後、日本へ向かった。この航海は、日本来航に至るまでの遠征全体を示している。',
    manjiroRelation:'帰国後の万次郎は、アメリカ事情と英語を知る人物として幕府に召し出された。ペリー来航への対応を考えるうえで、その知識が求められた。',
    meaning:'ペリー来航は浦賀だけで突然起きた出来事ではない。アメリカの捕鯨活動、中国貿易、蒸気船の燃料補給地確保などを背景に計画された、世界規模の海上遠征だった。',
    placeJa:'大西洋・インド洋・琉球', placeName:'Ryukyu / East Asia', color:'#b58cff'
  },
  opening_of_japan: {
    id:'opening_of_japan', title:'開国への移行', subtitleEn:'OPENING OF JAPAN',
    startYear:1854, endYear:1868, year:'1854 — 1868',
    description:'条約締結と港の開放を起点として、日本の政治・経済・社会が国際関係の中へ組み込まれていった。',
    cardText:'1854年の日米和親条約以後、日本は欧米諸国と相次いで条約を結び、1858年の通商条約を経て外国との貿易を本格化させた。外国人の居留、海外渡航、海軍や造船技術の導入が進む一方、条約や開港をめぐる国内対立も激しくなった。\n\n開国は一日の出来事ではなく、幕末の社会全体を変えていった長い過程だった。',
    manjiroRelation:'万次郎は幕府の直参となり、翻訳、航海教育、造船・捕鯨、小笠原調査、咸臨丸渡米などに関わった。開国期の実務を支えた人物の一人として位置づける。',
    meaning:'海の外を知ることが例外だった時代から、外国との交渉、交易、留学、航海が国家の課題となる時代への移行を示す。万次郎の経験は、この変化の中で個人的な漂流体験から社会的な知識へ変わった。',
    placeJa:'日本', placeName:'Japan', color:'#7dff7a'
  },
  laxman_nemuro: {"id": "laxman_nemuro", "startYear": 1792, "endYear": 1793, "color": "#c4a484", "title": "ラクスマン根室来航", "subtitleEn": "LAXMAN AT NEMURO", "year": "1792 — 1793", "description": "ロシアの使節ラクスマンが、漂流民の大黒屋光太夫らを連れて根室に来航し、通商を求めた。", "cardText": "1792年、エカテリーナ号で根室に着いたアダム・ラクスマンは、伊勢の船頭・大黒屋光太夫らを送り届け、日本との通商を求めた。翌1793年に松前で幕府の使いと会い、国書は受け取られなかったが、長崎への入港許可の証（信牌）を渡された。ラクスマンは長崎へは向かわずに帰国し、この信牌を持って1804年にレザノフが長崎へ来ることになる。", "manjiroRelation": "直接の関わりはない。光太夫も万次郎も、外国船で帰った漂流民として幕府の取り調べを受けた。その見聞は学者が聞き取ってまとめ、光太夫の話は桂川甫周『北槎聞略』、万次郎の話は河田小龍『漂巽紀略』になったとされる。並べて見るための前例である。", "meaning": "漂流民の帰国は、鎖国下の日本へ外の世界の知識が届く数少ない道だった。ロシアからの最初の遣日使節であり、「レザノフ来航」へつながる。", "placeJa": "根室・松前", "placeName": "Nemuro / Ezo"},
  japan_ground: {"id": "japan_ground", "startYear": 1819, "endYear": 1820, "color": "#6fa8a0", "title": "ジャパン・グラウンドの発見", "subtitleEn": "JAPAN GROUND", "year": "1819/1820", "description": "日本の東の沖に、マッコウクジラの豊かな漁場があることが米英の捕鯨船に知られた。", "cardText": "1819年から1820年にかけて、ナンタケットの捕鯨船マロ号（船長ジョゼフ・アレン）などが、日本の沖で多くのマッコウクジラを見つけた。この海域は「ジャパン・グラウンド」と呼ばれ、これ以後、多くの捕鯨船が日本の近海に来るようになった。", "manjiroRelation": "1841年に万次郎らを鳥島で救ったジョン・ハウランド号も、日本の近海に来ていた米国の捕鯨船だった。日本の近くが漁場になっていたことは、この出会いの背景の一つと考えられる。", "meaning": "日本が国を閉ざしていた間も、その周りの海は世界の捕鯨業とつながり始めていた。のちの大津浜事件や異国船打払令、ペリー来航の背景にもなる。", "placeJa": "日本の東の沖", "placeName": "Japan Ground / Western North Pacific"},
  honolulu_1820: {"id": "honolulu_1820", "startYear": 1820, "endYear": 1820, "color": "#e6a1b8", "title": "ホノルル、捕鯨船の港へ", "subtitleEn": "HONOLULU 1820", "year": "1820", "description": "米国の宣教師団がハワイに着き、同じ年、捕鯨船マロ号がホノルル港に入った最初の米国捕鯨船となった。", "cardText": "1819年10月にボストンを出たハイラム・ビンガムら宣教師団は、1820年にハワイに着き、4月にホノルルに入った。同じ年の11月1日には、日本沖の漁場から来た捕鯨船マロ号のアレン船長を宣教師たちが迎えた。マロ号はホノルル港に入った最初の米国捕鯨船とされる。この頃から、ホノルルは太平洋の捕鯨船が水・食料を積み、船員を入れ替える港になっていった。", "manjiroRelation": "1841年、ジョン・ハウランド号はホノルルに寄り、万次郎と一緒に救われた4人はここで船を降りた。1850年、万次郎はホノルルで仲間と会い、船員牧師サミュエル・デーモンらの助けで小舟を用意して、ここから帰国の旅に出たとされる。", "meaning": "捕鯨船と宣教師が持ち込んだ英語・文字・地図は、ハワイを太平洋の人と知識の行き交う場所に変えた。万次郎が世界に出ていく通り道は、ここで生まれた。", "placeJa": "ホノルル・オアフ島", "placeName": "Honolulu / Hawaiian Islands"},
  new_bedford_1823: {"id": "new_bedford_1823", "startYear": 1823, "endYear": 1823, "color": "#93a8c4", "title": "ニューベッドフォード、米国一の捕鯨港へ", "subtitleEn": "NEW BEDFORD", "year": "1823", "description": "ニューベッドフォードが、ナンタケットを抜いて米国一の捕鯨港になった。", "cardText": "近くの漁場で鯨が減ると、捕鯨船は大きくなり、遠い海まで行くようになった。ナンタケット島の港は浅く、砂州にふさがれて大きな船が入れず、船員や物資やお金を集めるのも難しかった。1823年、深い港を持つ本土のニューベッドフォードがナンタケットを抜き、米国一の捕鯨港になったとされる。", "manjiroRelation": "万次郎を救ったジョン・ハウランド号は、ニューベッドフォードと対岸のフェアヘーブンを拠点とする捕鯨船だった。万次郎は1843年に、船長ホイットフィールドの住む町フェアヘーブンに来て学校に通い、1849年には捕鯨船フランクリン号でニューベッドフォードに帰ってきた。", "meaning": "万次郎が英語と航海術を学んだ町は、偶然の場所ではなく、太平洋捕鯨の中心だった。", "placeJa": "ニューベッドフォード・マサチューセッツ", "placeName": "New Bedford / Massachusetts"},
  otsuhama_1824: {"id": "otsuhama_1824", "startYear": 1824, "endYear": 1824, "color": "#d4836a", "title": "大津浜事件", "subtitleEn": "OTSUHAMA INCIDENT", "year": "1824", "description": "英国の捕鯨船の船員12人が水戸藩領の大津浜に上陸し、捕らえられて取り調べを受けた。", "cardText": "1824年6月、沖に来ていた英国の捕鯨船から12人の船員が大津浜に上陸した。船に壊血病の者がいて、野菜や水を求めたとされる。水戸藩は船員を捕らえて取り調べたあと、野菜と水を与えて船に返した。この事件は、翌1825年の異国船打払令が出される一因になったとされる。", "manjiroRelation": "日本の近海に捕鯨船が来るようになったことを示す早い出来事。万次郎はのちにその捕鯨船に救われる。打払令は1842年に緩められたが、外国船への警戒は万次郎の帰国の頃も続いていた。", "meaning": "このとき筆談役を務めた会沢正志斎が、翌年に『新論』を書き、それがのちの攘夷思想の源の一つになったとされる（二次資料）。", "placeJa": "常陸国大津浜（北茨城市）", "placeName": "Otsuhama / Hitachi, Japan"},
  suez_canal_opening: {"id": "suez_canal_opening", "startYear": 1869, "endYear": 1869, "color": "#e3d3a4", "title": "スエズ運河の開通", "subtitleEn": "SUEZ CANAL", "year": "1869", "description": "地中海と紅海を結ぶスエズ運河が開通し、ヨーロッパとアジアの間の船の旅が大きく縮まった。", "cardText": "フランスのレセップスが会社を作り、1859年に工事が始まった運河は、1869年11月17日に開通した。開通式には、エジプトの副王イスマーイール・パシャのもと、フランス皇后ウジェニーが皇帝のヨット「レーグル号」で臨んだ。アフリカ南端を回らずにインド洋から地中海へ抜けられるようになり、アラビア海からロンドンまでの航路はおよそ8,900km短くなった。", "manjiroRelation": "1870年、普仏戦争の視察団に加わった万次郎はロンドンで病気になり、開通から1年ほどの運河を通って、一人で東回りに帰国したと伝わる（ja.wikipedia、中浜明 1970）。ただし米国経由で帰ったとする資料もあり、画面の帰路は推定である。", "meaning": "蒸気船と運河によって、世界一周は帆船の時代よりずっと短く、決まった道筋のものになった。万次郎は、帆船の太平洋と、蒸気船の時代の地球の両方を旅した人だった（運河を通ったかは資料で揺れる）。", "placeJa": "スエズ運河・エジプト", "placeName": "Suez Canal / Egypt"},
  cape_horn_whalers: {"id": "cape_horn_whalers", "startYear": 1789, "endYear": 1793, "color": "#7fb7c9", "title": "捕鯨船、ホーン岬を回って太平洋へ", "subtitleEn": "WHALERS ROUND CAPE HORN", "year": "1789 — 1793", "description": "大西洋の捕鯨船が南米の南端ホーン岬を回り、太平洋で鯨をとり始めた。", "cardText": "1789年、ロンドンの捕鯨会社のエミリア号がホーン岬を回って太平洋で鯨をとったとされる（二次資料）。続いて米国の捕鯨船も太平洋へ入り（最初のニューイングランドの船は1791年とする資料もある）、1793年にはニューベッドフォードのレベッカ号が、太平洋の鯨油を持ち帰った最初の米国捕鯨船になった。", "manjiroRelation": "背景。大西洋の捕鯨船が太平洋へ出たことが、約50年後に鳥島で万次郎たちが米国の捕鯨船に救われる前提になった。", "meaning": "捕鯨は大西洋の産業から、地球の裏側まで行く遠洋の産業に変わり始めた。", "placeJa": "ホーン岬・太平洋", "placeName": "Cape Horn / Pacific"},
  lady_washington_1791: {"id": "lady_washington_1791", "startYear": 1791, "endYear": 1791, "color": "#c9a27f", "title": "レディ・ワシントン号、紀伊大島へ", "subtitleEn": "LADY WASHINGTON", "year": "1791", "description": "米国の商人船長ケンドリックの船が紀伊大島に寄った。日本に来た最初の米国船とされる。", "cardText": "1791年、米国の商人船長ジョン・ケンドリックは、毛皮を売る先を探して、レディ・ワシントン号とグレース号で紀伊大島（和歌山県串本町）に寄った。嵐を避けて停泊したが、商売はできずに去ったとされる。", "manjiroRelation": "背景。万次郎が生まれる約35年前に、太平洋を渡る米国の船が、紀伊の沖まで来ていた。", "meaning": "米国と日本の最初の接触とされる出来事。日米の出会いは、のちのペリー来航よりずっと前から海の上で始まっていた。", "placeJa": "紀伊大島（和歌山県串本町）", "placeName": "Kii-Oshima / Japan"},
  phaeton_1808: {"id": "phaeton_1808", "startYear": 1808, "endYear": 1808, "color": "#b98fa8", "title": "フェートン号事件", "subtitleEn": "PHAETON INCIDENT", "year": "1808", "description": "英国の軍艦がオランダの旗を掲げて長崎港に入り、商館員を人質に水と食料を出させて去った。", "cardText": "1808年、英国の軍艦フェートン号がオランダの旗を掲げて長崎港に入り、オランダ商館員を人質にとって、水と食料を出させて去った。長崎奉行の松平康英は責任をとって自害した。この事件のあと、幕府は通詞に英語を学ばせ、英和辞書づくりが始まった。", "manjiroRelation": "背景。英語のできる日本人が要る時代がここから始まった。万次郎はのちに、英語と米国を知る人として幕府に召し出される。", "meaning": "鎖国の日本が、英語という新しい言葉に向き合い始めた出来事。", "placeJa": "長崎", "placeName": "Nagasaki / Japan"},
  takarajima_1824: {"id": "takarajima_1824", "startYear": 1824, "endYear": 1824, "color": "#c98a6a", "title": "宝島事件", "subtitleEn": "TAKARAJIMA INCIDENT", "year": "1824", "description": "英国の捕鯨船の船員が薩摩藩の宝島に上陸して牛を奪い、島の役人が船員1人を撃ち殺した。", "cardText": "1824年、英国の捕鯨船がトカラ列島の宝島で牛を求めた。断られると上陸して牛を奪い、島の役人が船員1人を撃ち殺した。同じ年の大津浜事件とともに、翌1825年の異国船打払令の理由の一つとされる。", "manjiroRelation": "背景。同じ年に北（大津浜）と南（宝島）で捕鯨船とのもめごとが起き、幕府は外国船を打ち払う方針をとった。打払令は1842年に緩められたが、警戒は万次郎の帰国の頃も続いていた。", "meaning": "捕鯨船の補給の問題は、のちのペリー来航の理由の一つにもつながっていく。", "placeJa": "宝島（トカラ列島）", "placeName": "Takarajima / Tokara Islands"},
  beechey_bonin_1827: {"id": "beechey_bonin_1827", "startYear": 1827, "endYear": 1827, "color": "#8fb98f", "title": "ビーチー、小笠原に来る", "subtitleEn": "BEECHEY AT THE BONINS", "year": "1827", "description": "英国海軍のビーチーが小笠原の父島に停泊し、港に英語の名を付けて英国の領有を記したとされる。", "cardText": "1827年6月、英国海軍のビーチーがブロッサム号で父島に停泊し、港をポート・ロイドと名づけ、島を英国王のものとする銅板を木に打ち付けたとされる。島には難破した捕鯨船の船員が2人いた。小笠原は太平洋の捕鯨船が立ち寄る島になっていく。", "manjiroRelation": "場所のつながり（来航そのものは万次郎と関わりがない）。万次郎は1847年にフランクリン号でポート・ロイドに寄り、1861年には幕府の小笠原調査に加わった（年譜を参照）。", "meaning": "日本の南の島々も、捕鯨船の行き交う太平洋の一部になっていた。のちに小笠原が日本の領土になるまでの出発点の一つ。", "placeJa": "父島・二見港（ポート・ロイド）", "placeName": "Port Lloyd / Bonin Islands"}
};
