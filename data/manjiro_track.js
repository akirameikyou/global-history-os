// data/manjiro_track.js — 万次郎の航海の日付アンカー（出典・確かさつき）と補間の約束。
// 設計: docs/manjiro_monthly/DESIGN_v0.1.md §3 ／ 調査: docs/manjiro_monthly/RESEARCH_RESULT.md（2026-11-09, 方式C の強い単独の調査）
//
// anchors[]: { ref, date, depart?, label, status, evidence, sources, note }
//   ref     … 航路の点（data/events.js の event id と routePoints の label）。
//   status  … documented（記録で日付と場所が分かる）／ source_traced（日付は資料にあるが二次資料のみ・位置は地名から）／ estimated（推論）
//   evidence… DIRECT（調査役が資料そのものを読んだ）／ REPORTED（二次資料・検索要約）／ INFERENCE
//   画面で「記録」と出るのは documented・source_traced。estimated と、アンカー間の月はすべて「推測」。
// observations[] … 航路の点に結べない記録の位置（他船との会合など）。月が合えば画面に別の印で出す。
// conflicts[]    … 記録と events.js の航路の順序・年が食い違う所。2026-11-09 清水さんの判断「資料が見つかったなら確証の高い方に」により、記録で確かめられた F1・F3・F7・F8 は events.js を訂正し resolved:true とした。HOLD のもの（F2・F4・F5・F6・G1）は events.js をそのままにして食い違いを示す。
// dwell[]        … 推測の滞在（漁場の季節）。記録の滞在は anchors の depart で書く。
// departStatus   … depart の確かさ：recorded（記録の出港日）／ last_seen（その日まで在港の記録）／ planned（予定）／ reported（二次資料）／ estimated（推測・「ごろ」）。
//                  recorded と last_seen の間だけ、滞在の月を「記録」とする。
// dropWeak[]     … events.js の year 欄を時刻の手がかりに使わない event（記録と食い違うと判断したもの）。

const WOOD1 = { title: 'Dennis Wood『Abstracts of Whaling Voyages』第1巻 p.264（John Howland, 1839–43）', url: 'https://archive.org/details/abstractsofwhali1183denn/page/n301', kind: 'manuscript_abstract', accessed: '2026-11-09' };
const WOOD2 = { title: 'Dennis Wood『Abstracts of Whaling Voyages』第2巻 p.226（Franklin, 1846–49）', url: 'https://archive.org/details/abstractsofwhali2184denn/page/n262', kind: 'manuscript_abstract', accessed: '2026-11-09' };
const FRIEND = (date, item) => ({ title: 'The Friend（ホノルル）' + date, url: 'https://hmha.missionhouses.org/items/show/' + item, kind: 'newspaper', accessed: '2026-11-09' });
const TOSA35 = { title: '土佐清水市教育委員会『市史編さん便り』35号（2023）', url: 'https://www.city.tosashimizu.kochi.jp/fs/4/5/6/7/0/1/_/hist_news_r5_35.pdf', kind: 'municipal_history', accessed: '2026-11-09' };
const COML = { title: 'whalinghistory.org CoML spoken データ（捕鯨船 Olympia AV10855 の日誌が Franklin AV05224 を見かけた・訪問した記録, CC BY 4.0）', url: 'https://whalinghistory.org/coml/CoMLLogbookData.zip', kind: 'dataset', accessed: '2026-11-09' };
const WIKI_EN = { title: 'en.wikipedia「Nakahama Manjirō」（二次資料）', url: 'https://en.wikipedia.org/wiki/Nakahama_Manjir%C5%8D', kind: 'encyclopedia', accessed: '2026-11-09' };
const JAWIKI_KANRIN = { title: 'ja.wikipedia「咸臨丸」（二次資料）', url: 'https://ja.wikipedia.org/wiki/%E5%92%B8%E8%87%A8%E4%B8%B8', kind: 'encyclopedia', accessed: '2026-11-09' };
const JAWIKI_MANEN = { title: 'ja.wikipedia「万延」（二次資料）', url: 'https://ja.wikipedia.org/wiki/%E4%B8%87%E5%BB%B6', kind: 'encyclopedia', accessed: '2026-11-09' };
const TOSA31 = { title: '土佐清水市『市史編さん便り』第31号（2023「万次郎人生の概観⑦」）', url: 'https://www.city.tosashimizu.kochi.jp/fs/4/5/6/7/3/3/_/hist_news_r5_31.pdf', kind: 'municipal_history', accessed: '2026-11-11' };
const TOSA30 = { title: '土佐清水市『市史編さん便り』第30号（2023「万次郎人生の概観⑥」）', url: 'https://www.city.tosashimizu.kochi.jp/fs/4/5/6/7/3/4/_/hist_news_r5_30.pdf', kind: 'municipal_history', accessed: '2026-11-11' };
const REPORTED_RESCUE = { title: 'Whitfield の日誌の引用とされる記述（Sea History 079 ほか。検索要約のみ・頁は未読＝二次資料）', url: null, kind: 'secondary', accessed: '2026-11-09' };

export const trackMethod = {
  summary: 'アンカー（日付の記録がある寄港・位置）の間の月は、港や漁場での滞在を先に差し引き、残りの時間を航路の距離に比例して割り振った推測です。航路そのもの（どこを通ったか）の確かさは線の種類、その月にそこにいたかの確かさは船の印（●記録／○推測）で分けて示します。',
  speed: { knotsNote: '1830–1860年の捕鯨船 1,008 航海の日ごとの位置（371,195 組）から、1日の進みの中央値 55 海里（約 102 km）、平均 68 海里（約 126 km）、上位10%は 142 海里。回航（漁をしない移動）は 100〜140 海里が目安（推測）。画面では、記録の日付が無い端や陸の空白を挟む所の航走に 1日 160 km（約 86 海里, 回航の目安・推測）を使い、記録の日付どうしの間で 1日 278 km（150 海里）を超える events.js の年月は手がかりに使わない。',
    sources: [{ title: 'whalinghistory.org American Offshore Whaling Logbook Data（2025-09-16版, CC BY 4.0）から調査役が計算', url: 'https://whalinghistory.org/aowl/AmericanOffshoreWhalingLogbookData.zip', kind: 'dataset', accessed: '2026-11-09' }] },
  dwell: { note: 'ジャパン・グラウンド（北緯25–40度・東経135–160度）に捕鯨船がいた「航海×月」は 4〜9 月に集中し 8 月が最多（同じデータから計算）。漁場での滞在の長さの典型値は文献で確かめられていないので、推測の滞在は 3 か月として印を付ける。',
    sources: [{ title: '同上（AOWL 1830–1860 の月別集計, 調査役が計算）', url: 'https://whalinghistory.org/aowl/AmericanOffshoreWhalingLogbookData.zip', kind: 'dataset', accessed: '2026-11-09' }] },
  aowlNote: 'John Howland 号 1839–43（AV07739）と Franklin 号 1846–49（AV05224）は、日ごとの位置のデータ（AOWL）に入っていない（AOWV の台帳で logbook なし）。日付は手稿の要約（Wood）と新聞（The Friend）による。',
};

export const voyageTimings = [
  // ── ジョン・ハウランド号（Whitfield 船長）1841–43 ─────────────
  { key: 'john_howland_voyage_1841_1843', label: 'ジョン・ハウランド号', ship: 'John Howland（W. H. Whitfield）',
    anchors: [
      { ref: { event: 'manjiro_torishima_rescue', label: 'Torishima' }, date: '1841-06-27', label: '鳥島で救助', status: 'source_traced', evidence: 'REPORTED', sources: [REPORTED_RESCUE],
        note: '日付は二次資料の引用による（原典の頁は未確認）。' },
      { ref: { event: 'manjiro_torishima_rescue', label: 'Honolulu' }, date: '1841-12-02', label: 'ホノルル（12月2日付の手紙が在港を伝える）', status: 'documented', evidence: 'DIRECT', sources: [WOOD1],
        note: '入港日は 11月20日説と10月説があり未確定（HOLD）。' },
      // 1842-01-03 の会合（南緯3°30′）は航路の点（北緯8°）と約1,300 km 離れるので、アンカーにせず observations だけに置く（監査 H6）
      { ref: { event: 'manjiro_honolulu_wind_failure', label: 'Honolulu Offshore' }, date: '1842-11-10', label: 'ハワイ諸島の島に寄り、壊血病の者を上陸させる', status: 'documented', evidence: 'DIRECT', sources: [WOOD1],
        note: '記録は「Leeward Sandwich Islands の一つ」。航路の点（ホノルル沖）に結んだ。その前の10月24日、Alex. Coffin 号と会合した時は「オアフへ向かう途中・乗組員の一部が壊血病」（位置の記録なし。events.js の「ホノルルに入港できず」とつながる手がかり）。' },
      { ref: { event: 'manjiro_guam_second', label: 'Fairhaven' }, date: '1843-05-07', label: 'ニューベッドフォード／フェアヘーブン帰着', status: 'documented', evidence: 'DIRECT', sources: [WOOD1] },
    ],
    dwell: [ { ref: { event: 'manjiro_honolulu_decision', label: 'Japan Offshore Arc' }, months: 3, note: 'ジャパン・グラウンドの夏の漁（推測）' } ],
    observations: [
      { date: '1842-01-03', lat: -3.5, lng: -166.0, label: '他船と会合した位置（南緯3°30′・西経166°、鯨油1450樽）', status: 'documented', evidence: 'DIRECT', sources: [WOOD1],
        note: 'events.js の航路（北緯8°の点）より約1,300 km 南。' },
    ],
    dropWeak: ['manjiro_guam_second'], // events.js の「1843年 グアム」は F5 の理由で時刻の手がかりに使わない（監査 M4）
    conflicts: [
      { id: 'F5', text: '記録では 1842年11月10日にハワイ → タヒチで補給 → 1843年5月7日帰着。航路（events.js）はタヒチのあとグアムに寄りホーン岬へ回るが、178日でこの距離は毎日約130海里を休まず走る計算になり無理がある。2回目のグアム寄港は 1842年中とみる方が自然（HOLD）。画面のグアム〜帰着の月は、この食い違いを含んだままの推測。', sources: [WOOD1] },
      { id: 'F6', text: 'ホノルル入港日は 11月20日説と10月説があり未確定（HOLD）。Wood は「12月2日付の手紙が在港を伝える」とだけ書く。', sources: [WOOD1] },
    ] },

  // ── フランクリン号（Ira Davis → Isaac Akin 船長）1846–49 ─────
  { key: 'franklin_voyage_1846_1849', label: 'フランクリン号', ship: 'Franklin（I. Davis → I. Akin）',
    anchors: [
      { ref: { event: 'manjiro_franklin', label: 'Fairhaven' }, date: '1846-05-16', label: '出航（インド洋・太平洋へ）', status: 'documented', evidence: 'DIRECT', sources: [WOOD2] },
      { ref: { event: 'manjiro_franklin', label: 'Faial Azores' }, date: '1846-06-16', depart: '1846-06-17', departStatus: 'recorded', label: 'ファイアル島（アゾレス）', status: 'documented', evidence: 'DIRECT', sources: [WOOD2] },
      { ref: { event: 'manjiro_franklin_1847_guam', label: 'Guam' }, date: '1847-03-13', label: 'グアム（日本へ向かう）', status: 'documented', evidence: 'DIRECT', sources: [WOOD2] },
      { ref: { event: 'manjiro_franklin_1848_guam', label: 'Guam' }, date: '1847-10-14', depart: '1847-11-07', departStatus: 'planned', label: 'グアム（2回目。船長の病気のためマニラへ）', status: 'documented', evidence: 'DIRECT', sources: [WOOD2],
        note: '記録に年が書かれておらず、鯨油の量の増え方（1847年3月180樽 → 450 → 1848年7月600樽）から 1847年と読んだ（INFERENCE）。出港の11月7日は「would sail」＝予定。訂正前の events.js はこの寄港を 1848年2月としていた（F1, 11/9 訂正済み）。' },
      { ref: { event: 'manjiro_franklin_manila_1848', label: 'Manila' }, date: '1847-11-28', depart: '1847-12-16', departStatus: 'last_seen', label: 'マニラ（補給。ここで Akin が船長に）', status: 'documented', evidence: 'DIRECT', sources: [WOOD2],
        note: '年は同上の読み（INFERENCE）。12月16日まではマニラにいた記録。出帆は「1848年1月19日より前」とだけ分かる（それ以降の月は推測）。' },
      { ref: { event: 'manjiro_franklin_honolulu_1848', label: 'Honolulu' }, date: '1848-10-17', depart: '1848-11-01', departStatus: 'estimated', label: 'ホノルル入港（出航後29か月・鯨油700樽）', status: 'documented', evidence: 'DIRECT', sources: [WOOD2, FRIEND('1848年11月1日号の入港欄', 1069)],
        note: '出航は記録で「11月1日ごろ」。' },
      { ref: { event: 'manjiro_franklin_return_1849', label: 'New Bedford / Fairhaven' }, date: '1849-09-23', label: 'ニューベッドフォード帰着（40か月7日）', status: 'documented', evidence: 'DIRECT', sources: [WOOD2],
        note: '訂正前の events.js は「1849年8月末」（F3, 11/9 訂正済み）。' },
    ],
    dwell: [ { ref: { event: 'manjiro_franklin_bonin_1847', label: 'Off Sendai Waters' }, months: 3, note: 'ジャパン・グラウンドの夏の漁（推測）' } ],
    observations: [
      { date: '1848-07-07', dateEnd: '1848-07-28', lat: 29.43, lng: 141.34, label: '鳥島〜伊豆諸島の南の海で、他船 Olympia 号の日誌に12回記録（多くは「見かけた」、訪問2回・品物の交換1回。中央値の位置、範囲 北緯29.26–31.50・東経140.56–142.18）', status: 'documented', evidence: 'DIRECT', sources: [COML],
        note: '他船の日誌の位置（Franklin が見える範囲＝10〜20海里の誤差、推測）。events.js の航路はこの時期マニラ → ホノルルの線で、ここを通らない（F1）。' },
    ],
    conflicts: [
      { id: 'F1', resolved: true, text: '【2026-11-09 events.js を訂正済み：グアム1847年10月・マニラ1847年11月】訂正前の events.js は「1848年2月グアム → 5月マニラ → 7月マニラ出帆」。記録（Wood）では グアム10月14日 → マニラ11月28日・12月16日 → 1848年1月19日より前に出帆で、鯨油の量の増え方から 1847年秋と読める。1848年7月には鳥島の近くにいた（他船の日誌）。', sources: [WOOD2, COML] },
      { id: 'F2', text: 'events.js は 1847年の日本近海のあとにホノルル寄港を置くが、Wood に 1847年のホノルル寄港は無く、The Friend の1847年8月〜1848年2月の入港欄（OCR）にも見つからない（OCRが不完全なので弱い根拠）。グアム10月14日と同じ年のホノルル10月は両立しない（HOLD）。en.wikipedia の「1847年10月にホノルル」は、記録の1848年10月17日との年の取り違えの源かもしれない（REPORTED）。', sources: [WOOD2, WIKI_EN] },
      { id: 'F3', resolved: true, text: '【2026-11-09 events.js を訂正済み】帰着は「1849年8月末」でなく 1849年9月23日。', sources: [WOOD2] },
      { id: 'F4', text: 'events.js のボストン寄港・カーボベルデは Wood に無い（否定ではない・UNKNOWN）。', sources: [WOOD2] },
    ] },

  // ── ゴールドラッシュ 1849–50 ─────────────────
  { key: 'goldrush_voyage_1850', label: 'ゴールドラッシュの航海', ship: 'Stieglitz とされる（未確認）',
    anchors: [
      { ref: { event: 'manjiro_valparaiso', label: 'San Francisco' }, date: '1850-05', label: 'サンフランシスコ着', status: 'source_traced', evidence: 'REPORTED', sources: [WIKI_EN],
        note: 'en.wikipedia（この文には参照が付いていない）と Sea History（5月末, 検索要約）。一次資料の入港一覧では船を見つけられていない。' },
    ],
    conflicts: [ { id: 'G1', text: '出航（1849年10月 か 11月5日）は二次資料どうしで食い違い（HOLD）。出航の月は events.js の年月（1849年10月）を使い、推測の印。' } ] },

  // ── 帰国 1850–51 ─────────────────────────
  { key: 'return_voyage_1851', label: '帰国の航海', ship: '（SF→ホノルルの船は未確認）→ Sarah Boyd → Adventure 号',
    anchors: [
      { ref: { event: 'manjiro_elysia', label: 'San Francisco' }, date: '1850-09-23', label: 'サンフランシスコ出航（推測）', status: 'estimated', evidence: 'INFERENCE', sources: [FRIEND('1850年10月15日号の入港欄', 1133)],
        note: '10月10日にホノルルへ入った E. Warwick 号（SF から17日）で来たと仮定した逆算。万次郎がこの船に乗っていたという記述は見つかっていない。' },
      { ref: { event: 'manjiro_elysia', label: 'Honolulu' }, date: '1850-10-10', depart: '1850-12-17', departStatus: 'reported', label: 'ホノルル着（推測：10月10日入港の E. Warwick 号で来たとすれば）', status: 'estimated', evidence: 'INFERENCE',
        sources: [FRIEND('1850年10月15日号の入港欄（E. Warwick 号の入港）', 1133), FRIEND('1850年11月1日号「An hour with the Japanese」（万次郎がホノルルにいることを伝える）', 1134)],
        note: '確かなのは、11月1日号の記事の時点で万次郎がホノルルにいたこと（DIRECT。記事に船名・到着日は無い）。E. Warwick 号との結びつきは推論。出航の12月17日（Sarah Boyd 号）は二次資料（Wikipedia）で、1851年1月9日号は出航済みであることだけを伝える。' },
      { ref: { event: 'manjiro_sarah_boyd_departure', label: 'Ryukyu Offshore' }, date: '1851-02-02', label: '琉球の沖でアドベンチャー号を降ろす', status: 'source_traced', evidence: 'REPORTED', sources: [WIKI_EN],
        note: 'en.wikipedia（この文には参照が付いていない）。The Friend 1851年1月9日号は、Sarah Boyd 号が上海へ向かい、琉球の近くで降ろす約束でアドベンチャー号を積んだことを伝える（日付は無い）。' },
      // 2026-11-11 追加：琉球→薩摩→長崎（土佐清水市『市史編さん便り』第30号（2023「万次郎人生の概観⑥」）。旧暦の日付を国立天文台「暦象年表」の和暦の表で西暦に換算）
      { ref: { event: 'manjiro_return_ryukyu', label: 'Odo Beach' }, date: '1851-02-03', label: '小渡浜に上陸（昼ごろ）', status: 'documented', evidence: 'DIRECT', sources: [TOSA30],
        note: '嘉永4年1月3日。同号は「昼ごろ」と書く（年譜の本文の「朝」は出典を確かめていない）。西暦は換算。' },
      { ref: { event: 'manjiro_return_ryukyu', label: 'Onaga Village, Takayasu House' }, date: '1851-02-03', depart: '1851-08-07', departStatus: 'recorded', label: '翁長村・高安家に預けられる（琉球王府・薩摩藩の取り調べ）', status: 'source_traced', evidence: 'DIRECT', sources: [TOSA30],
        note: '同号は、番所・小禄を経て高安家に「夜中に到着」と書き、着いた日付そのものは書かない（上陸の日の夜とみられる）。嘉永4年7月11日に翁長を去り那覇へ（西暦8月7日、換算）。' },
      { ref: { event: 'manjiro_satsuma', label: 'Naha Port' }, date: '1851-08-07', depart: '1851-08-14', departStatus: 'recorded', label: '那覇（8月14日の夜、山川港へ向けて出港）', status: 'documented', evidence: 'DIRECT', sources: [TOSA30], note: '嘉永4年7月11日に翁長から那覇へ、7月18日の夜に乗船・出港。西暦は換算。' },
      { ref: { event: 'manjiro_satsuma', label: 'Yamakawa Port' }, date: '1851-08-26', depart: '1851-08-27', departStatus: 'recorded', label: '薩摩・山川港に着く（12日の航海）', status: 'documented', evidence: 'DIRECT', sources: [TOSA30], note: '嘉永4年7月30日着、8月1日に小船で鹿児島へ。西暦は換算。' },
      { ref: { event: 'manjiro_satsuma', label: 'Kagoshima' }, date: '1851-08-27', depart: '1851-10-12', departStatus: 'recorded', label: '鹿児島に滞在（取り調べ。斉彬の聴取は伝承）', status: 'documented', evidence: 'DIRECT', sources: [TOSA30], note: '嘉永4年8月1日〜9月18日（西暦は換算）。同号は斉彬の聴取を「思われる」「伝えられている」と書く。' },
      { ref: { event: 'manjiro_nagasaki', label: 'Nagasaki' }, date: '1851-10-23', depart: '1852-08-10', departStatus: 'recorded', label: '長崎（10月25日に上陸・揚り屋入り。1852年8月10日に土佐へ出立）', status: 'documented', evidence: 'DIRECT', sources: [TOSA30, TOSA31], note: '嘉永4年9月29日着、10月1日上陸、嘉永5年6月25日に土佐藩の派遣団と出立。鹿児島からの道筋は不明。西暦は換算。' },
      { ref: { event: 'manjiro_tosa_departure', label: 'Kochi Castle Town' }, date: '1852-08-25', label: '高知城下に着く', status: 'documented', evidence: 'DIRECT', sources: [TOSA31], note: '嘉永5年7月11日。西暦は換算。道筋は市史31号の門司・下関→瀬戸内海→三津浜→松山・久万に合わせた（2026-11-11。長崎→門司・下関は推定）。' },
    ],
    conflicts: [ { id: 'F7', resolved: true, text: '【2026-11-09 events.js を訂正済み：題を「サンフランシスコからホノルルへ」とし船名を外した（伝記のエリシア号は本文で未確認と注記）。年月1850年10月も推論と注記】訂正前の events.js は SF→ホノルルを ELYSIA・1850年8月とした。一次資料で確かなのは、10月10日に E. Warwick 号（Whiting 船長, SF から17日）がホノルルに入ったこと（入港の記録）と、11月1日までに万次郎がホノルルにいたこと。万次郎がどの船で来たかは確かめられていない（E. Warwick 号とするのは推論）。', sources: [FRIEND('1850年10月15日号', 1133), FRIEND('1850年11月1日号', 1134)] } ] },

  // ── 咸臨丸 1860 ───────────────────────────
  { key: 'kanrin_voyage_1860', label: '咸臨丸', ship: '咸臨丸',
    anchors: [
      { ref: { event: 'manjiro_kanrin', label: 'Shinagawa / Uraga' }, date: '1860-02-10', label: '日本を出港（2月10日）', status: 'documented', evidence: 'DIRECT', sources: [TOSA35, JAWIKI_KANRIN],
        note: '日付は土佐清水市の資料による（同資料は「横浜港を出港」と書く）。ja.wikipedia では浦賀出港＝安政7年1月19日（西暦1860年2月10日は換算）、品川出港は1月13日（REPORTED）。出港地は資料で揺れる。' },
      { ref: { event: 'manjiro_kanrin', label: 'San Francisco' }, date: '1860-03-17', depart: '1860-05-08', departStatus: 'recorded', label: 'サンフランシスコ（3月23日〜5月1日 メア・アイランドでドック入り）', status: 'documented', evidence: 'DIRECT', sources: [TOSA35] },
      { ref: { event: 'manjiro_kanrin', label: 'Honolulu' }, date: '1860-05-23', depart: '1860-05-26', departStatus: 'recorded', label: 'ホノルル（25日 国王に拝謁。寄港中にデーモン牧師と再会）', status: 'documented', evidence: 'DIRECT', sources: [TOSA35] },
      { ref: { event: 'manjiro_kanrin', label: 'Uraga' }, date: '1860-06-23', label: '浦賀に投錨（翌日 横浜へ）', status: 'documented', evidence: 'DIRECT', sources: [TOSA35] },
    ],
    conflicts: [ { id: 'F8', resolved: true, text: '【2026-11-09 events.js を訂正済み：1860年2月10日（安政7年1月19日）浦賀出港、デーモン牧師との再会をホノルル寄港中（1860年5月）に】訂正前の events.js の「万延元年2月10日 品川を出港」は、西暦の日付（2月10日）に和暦の元号を付けた形。当時はまだ安政7年（万延への改元は安政7年3月18日＝1860年4月8日）。また西暦2月10日は浦賀を出た日で、品川を出たのは旧暦1月13日（ja.wikipedia, REPORTED）。', sources: [JAWIKI_MANEN, JAWIKI_KANRIN] } ] },
];
