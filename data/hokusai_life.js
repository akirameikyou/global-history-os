// data/hokusai_life.js  —  DRAFT / 葛飾北斎 Focus 代表データ（Phase A+B 観察用）
// ※ 代表・簡略。史実の網羅ではない。画号の遷移年は概略。旅行の経路は史料未確定=推定Connection。
// Core化しない。北斎experiment内のみ。作品(WORKS)の地理/画像は hokusai_views.js を正とし、ここでは扱わない。

export const HOKUSAI = { born:1760, died:1849, name:'葛飾北斎' };

// 名前史（phase・すみだ北斎美術館準拠）。全期間を「1年＝1名」で埋めない＝時期不詳を保持。
// kind: 幼名・個人名 / 画号   certainty: documented=史料上確か / traditional=伝承・後世資料
export const namePhases = [
  { from:1760, to:1777, name:'時太郎／のち鉄蔵', kind:'幼名・個人名', certainty:'traditional', note:'鉄蔵へ変わった正確な時期は不詳' },
  { from:1778, to:1793, name:'勝川春朗',        kind:'画号', certainty:'documented', note:'勝川春章に入門し絵師活動を開始' },
  { from:1794, to:1797, name:'宗理',            kind:'画号', certainty:'documented', note:'俵屋宗理を襲名' },
  { from:1798, to:1803, name:'北斎辰政',        kind:'画号', certainty:'documented', note:'「北斎」を用い始める頃' },
  { from:1804, to:1819, name:'葛飾北斎／戴斗',  kind:'画号', certainty:'documented', note:'両号の使用が重複する時期' },
  { from:1820, to:1833, name:'為一',            kind:'画号', certainty:'documented', note:'富嶽三十六景期' },
  { from:1834, to:1849, name:'卍（画狂老人卍）',kind:'画号', certainty:'documented', note:'晩年' },
];
// 画号phase（timeline band用）= 画号のみ
export const gagoPhases = namePhases.filter(p => p.kind === '画号');

// 生涯イベント（lane: LIFE）
export const lifeEvents = [
  { id:'l_born',   year:1760, title:'誕生（本所割下水）', gago:null },
  { id:'l_katsu',  year:1778, title:'勝川春章に入門',     gago:'春朗' },
  { id:'l_sori',   year:1794, title:'「宗理」を号する',   gago:'宗理' },
  { id:'l_manga',  year:1814, title:'北斎漫画 初編',       gago:'戴斗' },
  { id:'l_iitsu',  year:1820, title:'「為一」を号する',   gago:'為一' },
  { id:'l_36',     year:1831, title:'富嶽三十六景 刊行',   gago:'為一' },
  { id:'l_100',    year:1834, title:'富嶽百景・「画狂老人卍」', gago:'画狂老人卍' },
  { id:'l_obuse',  year:1842, title:'小布施へ（高井鴻山）', gago:'画狂老人卍' },
  { id:'l_die',    year:1849, title:'没（数え90）',         gago:'卍（画狂老人卍）',
    detail:'葛飾北斎、没。', age:'90歳（数え年）',
    deathPoem:'ひと魂でゆく気散じや夏の原', deathPoemType:'辞世',
    // 別表記「人魂でゆくきさんじや夏の原」。UIは読みやすい上記を基本表示とする。
    deathPoemAlt:'人魂でゆくきさんじや夏の原',
    source:'すみだ北斎美術館' },
];

// 居住地（representative PIN のみ。93回とされる転居は網羅しない）
export const residences = [
  { id:'r_warishita', year:1760, title:'本所割下水（生誕地）', lat:35.6960, lng:139.8020 },
  { id:'r_asakusa',   year:1840, title:'浅草聖天町（晩年の一つ）', lat:35.7160, lng:139.7970 },
];

// 遠方旅行・滞在制作（ROUTE/Connection）。※経路は史料未確定=推定。確定航路(万次郎)とは線種を分ける。
export const travels = [
  { id:'t_obuse',   year:1842, title:'江戸 → 小布施（信州・晩年滞在制作）',
    from:{lat:35.700,lng:139.770}, to:{lat:36.702,lng:138.320}, routeCertainty:'inferred' },
  { id:'t_nagoya',  year:1812, title:'江戸 → 名古屋（滞在・北斎漫画関連）',
    from:{lat:35.700,lng:139.770}, to:{lat:35.181,lng:136.907}, routeCertainty:'inferred' },
];

// 日本側の代表イベント（lane: WORLD, 通常表示・北斎/日本史との関連が比較的高いもの）
// spatial: 地理的意味のあるイベントだけ point を持つ。「地点を見る」第二操作の対象。
// type:'none' は一地点へ還元しにくいイベント（地図カメラの自動移動はしない）。
export const worldEventsJP = [
  { id:'w_kansei', year:1787, title:'寛政の改革',
    desc:'松平定信による幕政改革。倹約令・出版統制など化政文化前夜の環境。', spatial:{type:'none'} },
  { id:'w_oshio',  year:1837, title:'大塩平八郎の乱',
    desc:'天保の飢饉下、大坂で元与力・大塩平八郎が蜂起。', spatial:{type:'point',lat:34.6863,lng:135.5219,placeName:'大坂'} },
  { id:'w_tenpo',  year:1841, title:'天保の改革',
    desc:'水野忠邦による改革。奢侈禁令・出版統制は錦絵にも及んだ。', spatial:{type:'none'} },
  { id:'w_black',  year:1853, title:'黒船来航（没後・時代の転換）',
    desc:'ペリー艦隊来航。北斎没後4年、開国へ向かう時代の転換点。', spatial:{type:'point',lat:35.2493,lng:139.7206,placeName:'浦賀'} },
];

// 海外の同時代イベント（lane: W-LINK, 二次表示。※「影響」ではなく同時代の並置。押した時だけ展開）
export const wlinkEvents = [
  { id:'x_us1776',  year:1776, title:'アメリカ独立宣言', desc:'同時代の海外（並置）。北斎16歳頃。', spatial:{type:'none'} },
  { id:'x_fr1789',  year:1789, title:'フランス革命', desc:'同時代の海外（並置）。寛政期。', spatial:{type:'none'} },
  { id:'x_np1804',  year:1804, title:'ナポレオン皇帝即位', desc:'同時代の海外（並置）。', spatial:{type:'none'} },
  { id:'x_paris67', year:1867, title:'パリ万国博（ジャポニスムの舞台・没後）', desc:'没後。欧州で日本美術が注目される舞台（因果を断定しない）。', spatial:{type:'none'} },
];

// ── P-LINK 人物関係 ───────────────────────────────────────────────
// 人物関係は「存在（生没年）」だけでなく「関係した期間」を時間上に表現する（原則I）。
// 生没年・関係年が不確実なものは approx / relationCertainty:'inferred' で明示（Evidence規律）。
// relationType は関係の種別。直接の師弟以外を「影響」と断定しない。
export const personLinks = [
  { id:'p_shunsho',  name:'勝川春章',  birth:1726, death:1793, relationType:'師',
    relationFrom:1778, relationTo:1793, relationCertainty:'documented',
    note:'北斎の師。1778頃に門下へ入り「勝川春朗」を名乗って絵師活動を開始。' },
  { id:'p_bakin',    name:'曲亭馬琴',  birth:1767, death:1848, relationType:'制作関係',
    relationFrom:1804, relationTo:1815, relationCertainty:'inferred',
    note:'読本の挿絵で協働（椿説弓張月ほか）。のち不和とも伝わる。協働期間は概略。' },
  { id:'p_bokusen',  name:'牧墨僊',    birth:1775, death:1824, relationType:'交流',
    relationFrom:1812, relationTo:1814, relationCertainty:'inferred',
    note:'名古屋の門人・交流。北斎漫画成立の周辺。滞在時期は概略。' },
  { id:'p_oi',       name:'葛飾応為',  birth:1800, death:1866, birthApprox:true, deathApprox:true,
    relationType:'娘・画家', relationFrom:1820, relationTo:1849, relationCertainty:'inferred',
    note:'北斎の娘で画家。晩年の制作を支えたとされる。生没年は諸説（概略）。' },
  { id:'p_kozan',    name:'高井鴻山',  birth:1806, death:1883, relationType:'小布施',
    relationFrom:1842, relationTo:1848, relationCertainty:'inferred',
    note:'信州小布施の豪商・文人。晩年の北斎を招き滞在制作を支える。' },
  { id:'p_hiroshige',name:'歌川広重',  birth:1797, death:1858, relationType:'同時代比較',
    relationCertainty:'none', keyWork:{ year:1833, label:'東海道五拾三次' },
    note:'風景版画で並び称される。冨嶽三十六景と東海道五拾三次がほぼ同時期。直接の師弟ではない＝同時代の並置。' },
];
// 主役（北斎本人）の人生バー基準
export const focusPersonBar = { name:'葛飾北斎', birth:HOKUSAI.born, death:HOKUSAI.died };

// timeCursor に関連する人物を優先して並べる（関係期間 or 生没年が cursor を含むものを前に）
export function personLinksByRelevance(year){
  const rank = p => {
    if(p.relationFrom!=null && year>=p.relationFrom && year<=p.relationTo) return 0; // 関係期間内
    if(year>=p.birth && year<=p.death) return 1;                                     // 存命
    return 2;
  };
  return [...personLinks].sort((a,b)=>rank(a)-rank(b));
}

// ── ART / TECH Context（美術史・技術史・画材）: 代表markerのみ。常設パネルにしない ──
// クリックで詳細カード表示。timeCursor同期・mapCamera静止。因果を過剰に断定しない。
export const artTechEvents = [
  { id:'at_1720', year:1720, title:'洋書輸入規制の緩和', category:'ART / TECH CONTEXT',
    desc:'享保期に漢訳洋書等の輸入条件が緩む。西洋の透視図法などが日本へ流入する遠い背景となり、のちの浮絵や北斎の空間表現の前提のひとつとなる（直接の因果ではなく環境）。',
    related:'浮絵 / 一点透視' },
  { id:'at_1765', year:1765, title:'錦絵の成立・発展', category:'PRINT TECHNOLOGY',
    desc:'明和期、多色摺の錦絵が成立・高度化（鈴木春信ら）。北斎が画業に入る前に、浮世絵のカラー印刷技術そのものが大きく成熟していた。',
    related:'多版多色摺 / 見当' },
  { id:'at_1829', year:1829, title:'ベロ藍の普及', category:'MATERIAL',
    desc:'プルシアンブルー（ベロ藍）は18世紀末から輸入例があり、1820年代後半に輸入量が増加、1829年以降は価格低下も進んで浮世絵で広く使われた。『冨嶽三十六景』の青の表現を支えた材料条件。',
    related:'冨嶽三十六景' },
  { id:'at_1830s', year:1833, title:'風景版画の隆盛', category:'ART CONTEXT',
    desc:'1830年代、北斎『冨嶽三十六景』・広重『東海道五拾三次』等により風景版画が一大分野として隆盛した。',
    related:'冨嶽三十六景 / 東海道五拾三次' },
];

// ── WORLD 海外情報（3系統・意味を混同しない。WORLD表示の左下を時間/NOWで切替）──
// A: CONTEMPORARIES（北斎と同時代の世界美術。直接交流・影響は主張しない＝同時代の並置）
export const worldArt = [
  { id:'wa_turner',    name:'J.M.W. Turner',       birth:1775, death:1851, country:'Britain', place:{name:'London',lat:51.5074,lng:-0.1278},
    summary:'英国を代表する風景画家。光・大気・海・自然・近代技術を主題とし、北斎と生涯が大きく重なる。', classification:'contemporary_world_art', priority:'high',
    note:'直接交流・直接影響は主張しない。異文化圏でほぼ同時代の風景表現比較。' },
  { id:'wa_goya',      name:'Francisco de Goya',   birth:1746, death:1828, country:'Spain', place:{name:'Madrid',lat:40.4168,lng:-3.7038},
    summary:'18C末〜19C初のスペインを代表する画家・版画家。宮廷画家の一方、版画でも重要作を残した。', classification:'contemporary_world_art', priority:'mid',
    note:'北斎との直接的な関係は確認しない。' },
  { id:'wa_david',     name:'Jacques-Louis David', birth:1748, death:1825, country:'France', place:{name:'Paris',lat:48.8566,lng:2.3522},
    summary:'新古典主義の中心人物。革命〜ナポレオン期に政治・歴史と強く結びついた絵画を制作。', classification:'contemporary_world_art', priority:'mid',
    note:'同時代比較のみ。' },
  { id:'wa_delacroix', name:'Eugène Delacroix',    birth:1798, death:1863, country:'France', place:{name:'Paris',lat:48.8566,lng:2.3522},
    summary:'仏ロマン主義を代表。1830《民衆を導く自由の女神》は『冨嶽三十六景』とほぼ同時期。', classification:'contemporary_world_art', priority:'mid',
    note:'同時代比較のみ。' },
];
// B: RECEPTION / JAPONISME（北斎没後の受容。Evidence区分を人物ごとに保持し、直接矢印を安易に作らない）
export const reception = [
  { id:'rc_riviere',  name:'Henri Rivière',    birth:1864, death:1951, country:'France', place:{name:'Paris',lat:48.8566,lng:2.3522},
    classification:'documented_response', priority:'high',
    summary:'『冨嶽三十六景』を踏まえ《エッフェル塔三十六景》を制作。作品→作品の対応が明確。',
    workLink:{ from:'冨嶽三十六景', to:'エッフェル塔三十六景' } },
  { id:'rc_monet',    name:'Claude Monet',     birth:1840, death:1926, country:'France', place:{name:'Giverny',lat:49.0758,lng:1.5333},
    classification:'documented_collection', summary:'日本版画を多数収集。Givernyに現存コレクション。北斎作品も複数所有していた。' },
  { id:'rc_degas',    name:'Edgar Degas',      birth:1834, death:1917, country:'France', place:{name:'Paris',lat:48.8566,lng:2.3522},
    classification:'documented_reference', summary:'日本版画（人物表現・構図）との関係が研究される。『北斎漫画』との比較例も。' },
  { id:'rc_vangogh',  name:'Vincent van Gogh', birth:1853, death:1890, country:'Netherlands/France', place:{name:'Paris',lat:48.8566,lng:2.3522},
    classification:'broader_japonisme', summary:'日本版画を高く評価し作品へ強く取り入れた。北斎個人からの直接影響とは単純化しない（Japonisme一般）。' },
];
// C: HOLDINGS（現在の海外所蔵。人物関係ではない＝P-LINKに入れない）。取得年不明は null 保持＝推定年を作らない。
export const holdings = [
  { id:'h_bm',     institution:'British Museum',                city:'London',    country:'UK',          lat:51.5194, lng:-0.1270, importance:'very_high',
    summary:'北斎関連資料を大量に所蔵。2020年に《万物絵本大全図》版下絵103点を取得。', events:[{year:2020,text:'《万物絵本大全図》版下絵103点 取得'}] },
  { id:'h_bnf',    institution:'Bibliothèque nationale de France', city:'Paris', country:'France',      lat:48.8339, lng:2.3760, importance:'very_high',
    summary:'日本版画・絵本の重要コレクション。北斎資料も充実。', events:[{year:1899,text:'Théodore Duret Collection 約500点 収蔵'}] },
  { id:'h_guimet', institution:'Musée Guimet',                  city:'Paris',     country:'France',      lat:48.8654, lng:2.2939, importance:'high',
    summary:'日本美術の重要コレクション。《神奈川沖浪裏》の現存摺りを所蔵。', formerOwner:'Raymond Koechlin', events:[] },
  { id:'h_mfa',    institution:'Museum of Fine Arts, Boston',   city:'Boston',    country:'USA',         lat:42.3394, lng:-71.0940, importance:'very_high',
    summary:'日本国外最大級の日本美術コレクション。北斎作品が充実。', events:[{year:1911,text:'William Sturgis Bigelow Collection 寄贈（神奈川沖浪裏の一摺も1911収蔵）'}] },
  { id:'h_met',    institution:'Metropolitan Museum of Art',    city:'New York',  country:'USA',         lat:40.7794, lng:-73.9632, importance:'very_high',
    summary:'北斎・工房作を多数所蔵。神奈川沖浪裏も複数摺り。同一デザインの別々の物理摺りとして扱う。',
    events:[{year:1914,text:'Rogers Fund'},{year:1929,text:'Havemeyer Collection'},{year:1936,text:'Howard Mansfield Collection'}] },
  { id:'h_ngv',    institution:'National Gallery of Victoria',  city:'Melbourne', country:'Australia',   lat:-37.8226, lng:144.9689, importance:'high',
    summary:'1909年に《神奈川沖浪裏》を含む北斎作品を取得。', events:[{year:1909,text:'北斎作品 取得'}] },
  { id:'h_rijks',  institution:'Rijksmuseum',                   city:'Amsterdam', country:'Netherlands', lat:52.3600, lng:4.8852, importance:'mid',
    summary:'北斎作品を所蔵。2023年《Poppies》取得。海外収集が現在も続く例。', events:[{year:2023,text:'《Poppies》取得'}] },
];
// worldArt/reception を id で引く（Timeline比較バー用）。P-LINK(personLinks)とは別系統。
export function worldPersonById(id){ return worldArt.find(p=>p.id===id) || reception.find(p=>p.id===id) || null; }

// Timeline 設定（Hokusai Focus。Coreに固定しない）
export const timelineConfig = {
  rangeMin:1700, rangeMax:1940,      // 探索可能範囲
  initFrom:1750, initTo:1860,        // 初期viewport
  initCursor:1831,                   // 初期timeCursor（富嶽三十六景）
  nowJump:2026,                      // NOW（現在所蔵地へ飛ぶ将来枠）
};

// 現在の画号を timeCursor から求める
export function gagoAt(year){
  const p = gagoPhases.find(g => year>=g.from && year<=g.to);
  return p ? p.name : (year<1778 ? '（入門前）' : '卍（画狂老人卍）');
}

// ── 名前史 ──────────────────────────────────────────────────────
// nameHistory は namePhases のエイリアス（本名・幼名・画号を「同一の改名」として一括りにしない）。
// 単一の確定本名・確定改名年を作らない＝Evidence規律を人物名にも適用。
export const nameHistory = namePhases;

// 本姓・家系・養子関係（単一の確定本名にしない＝Evidence規律を人物名にも適用）
export const nameMeta = {
  birthFamily:'川村氏',
  adoptiveFamily:'中島家（中島伊勢）',
  line:'本姓 川村氏 →（幼少期）中島家の養子とされる。本名を単一に確定しない',
  note:'幼少期に幕府御用鏡師・中島伊勢の養子となったとされる。資料により川村鉄蔵／中島鉄蔵等の表記があり、「4歳で養子」等の年齢も資料差がある。',
  sources:['すみだ北斎美術館','国立劇場 文化デジタルライブラリー','国立国会図書館レファレンス協同DB','British Museum'],
};

// timeCursor で「その時期に使われていた名前」を返す（phase の from..to に収める＝架空の改名年を作らない）
export function nameAt(year){
  const p = namePhases.find(n => year >= n.from && year <= n.to);
  return p || null; // 範囲外（誕生前など）は null
}

// ── 北斎人物年譜（大北斎展図録1993 pp.73–84 / 原資料=Word, 作業用=このデータ）──────────────
// 原文(sourceText)と表示用(summary)を分離＝原文を要約で潰さない。importance=primary|secondary|detail、scope=life|posthumous。
// certainty体系は現状維持(stated|catalog_inference|tradition|secondary_note)＋certaintyRaw原表記。没後(1867/1893)は連続LIFEに混ぜない。
export const chronology = [
  { id:'dh1993-1760-birth', year:1760, yearOriginal:'1760', age:'1', category:'birth', categoryJa:'出生', importance:'primary', scope:'life',
    title:'出生（本所割下水）', summary:'9月23日、江戸本所割下水に出生。幼名は時太郎、のち鉄蔵。父については中島伊勢・川島某・倉田某など諸説を挙げ、図録は不明としている。', sourceText:'9月23日、江戸本所割下水に出生。幼名は時太郎、のち鉄蔵。父については中島伊勢・川島某・倉田某など諸説を挙げ、図録は不明としている。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:73, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1763-family-res', year:1763, yearOriginal:'1763頃', age:'4', category:'residence', categoryJa:'家族・居所', importance:'detail', scope:'life',
    title:'中島伊勢の養子か', summary:'幕府御用鏡師・中島伊勢の養子となった可能性を図録が示す。', sourceText:'幕府御用鏡師・中島伊勢の養子となった可能性を図録が示す。',
    certainty:'catalog_inference', certaintyRaw:'図録推定', sourcePage:73, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1765-work', year:1765, yearOriginal:'1765頃', age:'6', category:'work', categoryJa:'制作', importance:'detail', scope:'life',
    title:'この頃から絵を描く', summary:'この頃から自ら好んで絵を描いたとする。図録は『富嶽百景』初編自跋を根拠に挙げる。', sourceText:'この頃から自ら好んで絵を描いたとする。図録は『富嶽百景』初編自跋を根拠に挙げる。',
    certainty:'secondary_note', certaintyRaw:'二次記載', sourcePage:73, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1773-training', year:1773, yearOriginal:'1773頃', age:'14', category:'event', categoryJa:'修業', importance:'detail', scope:'life',
    title:'木版技術を学ぶか', summary:'木版彫刻家某について木版技術を学んだ可能性。', sourceText:'木版彫刻家某について木版技術を学んだ可能性。',
    certainty:'catalog_inference', certaintyRaw:'図録推定', sourcePage:73, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1775-training', year:1775, yearOriginal:'1775頃', age:'16', category:'event', categoryJa:'修業', importance:'detail', scope:'life',
    title:'洒落本の文字彫りか', summary:'洒落本の一部で文字彫りをしたとする記載。', sourceText:'洒落本の一部で文字彫りをしたとする記載。',
    certainty:'tradition', certaintyRaw:'伝承・要原文確認', sourcePage:73, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1778-teacher', year:1778, yearOriginal:'1778頃', age:'19', category:'teacher', categoryJa:'師弟', importance:'primary', scope:'life',
    title:'勝川春章へ入門か', summary:'彫刻業を離れ、勝川春章へ入門した可能性。', sourceText:'彫刻業を離れ、勝川春章へ入門した可能性。',
    certainty:'catalog_inference', certaintyRaw:'図録推定', sourcePage:73, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1779-name-work', year:1779, yearOriginal:'1779', age:'20', category:'name', categoryJa:'画号・制作', importance:'primary', scope:'life',
    title:'勝川春朗を名乗る', summary:'勝川春朗を名乗り、錦絵を発表し始める。', sourceText:'勝川春朗を名乗り、錦絵を発表し始める。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:74, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1785-name', year:1785, yearOriginal:'1785', age:'26', category:'name', categoryJa:'画号', importance:'detail', scope:'life',
    title:'「群馬亭」号', summary:'「群馬亭」の号を用いる。', sourceText:'「群馬亭」の号を用いる。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:74, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1787-residence', year:1787, yearOriginal:'1787頃', age:'28', category:'residence', categoryJa:'居所', importance:'detail', scope:'life',
    title:'小伝馬町か', summary:'小伝馬町に住んだ可能性。図録は時期に留保を付す。', sourceText:'小伝馬町に住んだ可能性。図録は時期に留保を付す。',
    certainty:'catalog_inference', certaintyRaw:'図録推定', sourcePage:74, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1790-residence', year:1790, yearOriginal:'1790頃', age:'31', category:'residence', categoryJa:'居所', importance:'detail', scope:'life',
    title:'葛飾へ移るか', summary:'年末頃に葛飾へ住んだ可能性。翌年の絵暦落款などを根拠とする。', sourceText:'年末頃に葛飾へ住んだ可能性。翌年の絵暦落款などを根拠とする。',
    certainty:'catalog_inference', certaintyRaw:'図録推定', sourcePage:74, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1793-teacher', year:1793, yearOriginal:'1793', age:'34', category:'teacher', categoryJa:'師弟', importance:'primary', scope:'life',
    title:'勝川春章 没', summary:'師・勝川春章が没する。', sourceText:'師・勝川春章が没する。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:74, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1794-name', year:1794, yearOriginal:'1794頃', age:'35', category:'name', categoryJa:'画号', importance:'primary', scope:'life',
    title:'俵屋宗理を襲名か', summary:'春朗号を廃し、俵屋宗理を襲名した可能性。', sourceText:'春朗号を廃し、俵屋宗理を襲名した可能性。',
    certainty:'catalog_inference', certaintyRaw:'図録推定', sourcePage:75, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1795-residence', year:1795, yearOriginal:'1795–1796頃', age:'36', category:'residence', categoryJa:'居所', importance:'detail', scope:'life',
    title:'浅草大六天神脇町か', summary:'浅草大六天神脇町に住んだ可能性。', sourceText:'浅草大六天神脇町に住んだ可能性。',
    certainty:'catalog_inference', certaintyRaw:'図録推定', sourcePage:75, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1798-name-network', year:1798, yearOriginal:'1798', age:'39', category:'name', categoryJa:'画号・交流', importance:'primary', scope:'life',
    title:'北斎辰政を名乗る', summary:'宗理号を門人宗二へ譲り「北斎辰政」を名乗る。長崎屋に滞在していたオランダ人の依頼で絵巻を描いたという記載もある。', sourceText:'宗理号を門人宗二へ譲り「北斎辰政」を名乗る。長崎屋に滞在していたオランダ人の依頼で絵巻を描いたという記載もある。',
    certainty:'stated', certaintyRaw:'図録記載＋伝承', sourcePage:75, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1799-work-name', year:1799, yearOriginal:'1799', age:'40', category:'name', categoryJa:'制作・画号', importance:'detail', scope:'life',
    title:'三囲稲荷開帳・不染居北斎', summary:'三囲稲荷の開帳で提灯・扁額を描いたという。「不染居北斎」の号がみえる。', sourceText:'三囲稲荷の開帳で提灯・扁額を描いたという。「不染居北斎」の号がみえる。',
    certainty:'tradition', certaintyRaw:'伝承＋図録記載', sourcePage:75, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1801-self-work', year:1801, yearOriginal:'1801', age:'42', category:'work', categoryJa:'人物・制作', importance:'detail', scope:'life',
    title:'自画像・居所諸説', summary:'黄表紙『児童文殊稚教訓』に自画像を描く。居所について山の手・浅草寺付近など複数の推定がある。', sourceText:'黄表紙『児童文殊稚教訓』に自画像を描く。居所について山の手・浅草寺付近など複数の推定がある。',
    certainty:'stated', certaintyRaw:'図録記載＋推定', sourcePage:75, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1802-network-live', year:1802, yearOriginal:'1802', age:'43', category:'performance', categoryJa:'交流・実演', importance:'secondary', scope:'life',
    title:'大田南畝らの席画', summary:'11月15日、大田南畝らの場で席画に応じたとする。', sourceText:'11月15日、大田南畝らの場で席画に応じたとする。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:76, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1804-live', year:1804, yearOriginal:'1804', age:'45', category:'performance', categoryJa:'実演', importance:'secondary', scope:'life',
    title:'護国寺 大達磨', summary:'4月13日、音羽護国寺の開帳で百二十畳大の達磨半身像を描く。', sourceText:'4月13日、音羽護国寺の開帳で百二十畳大の達磨半身像を描く。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:76, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1805-name', year:1805, yearOriginal:'1805', age:'46', category:'name', categoryJa:'画号', importance:'detail', scope:'life',
    title:'「九々蜃」号', summary:'「九々蜃」の号がみえる。', sourceText:'「九々蜃」の号がみえる。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:76, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1806-network-travel', year:1806, yearOriginal:'1806', age:'47', category:'travel', categoryJa:'交流・旅', importance:'primary', scope:'life',
    title:'馬琴宅寄宿・木更津', summary:'春から初夏頃まで曲亭馬琴宅に寄宿。6月頃、上総国木更津へ旅し、水野清兵衛方に逗留したとする。', sourceText:'春から初夏頃まで曲亭馬琴宅に寄宿。6月頃、上総国木更津へ旅し、水野清兵衛方に逗留したとする。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:76, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1808-network-res', year:1808, yearOriginal:'1808', age:'49', category:'residence', categoryJa:'交流・居所', importance:'secondary', scope:'life',
    title:'亀沢町新宅・書画会', summary:'柳亭種彦の日記に北斎訪問の記録。8月24日、亀沢町に新宅を構え、柳橋で書画会を開催。', sourceText:'柳亭種彦の日記に北斎訪問の記録。8月24日、亀沢町に新宅を構え、柳橋で書画会を開催。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:76, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1809-network', year:1809, yearOriginal:'1809', age:'50', category:'network', categoryJa:'交流', importance:'detail', scope:'life',
    title:'種彦日記「宝船板」', summary:'柳亭種彦の日記に「北斎主より宝船板来る」との記録。', sourceText:'柳亭種彦の日記に「北斎主より宝船板来る」との記録。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:76, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1810-res-name', year:1810, yearOriginal:'1810頃', age:'51', category:'name', categoryJa:'居所・画号', importance:'detail', scope:'life',
    title:'両国橋辺か・戴斗号か', summary:'本所両国橋辺に住んだ可能性。この頃から「戴斗」号を用いた可能性。', sourceText:'本所両国橋辺に住んだ可能性。この頃から「戴斗」号を用いた可能性。',
    certainty:'catalog_inference', certaintyRaw:'図録推定', sourcePage:76, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1811-network-res', year:1811, yearOriginal:'1811', age:'52', category:'residence', categoryJa:'交流・居所', importance:'detail', scope:'life',
    title:'馬琴書画会・葛飾か', summary:'馬琴の書画会に出席。柳亭種彦の日記にオランダ式の算盤を北斎宅で学ぶ旨の記録がある。葛飾に住んだ可能性。', sourceText:'馬琴の書画会に出席。柳亭種彦の日記にオランダ式の算盤を北斎宅で学ぶ旨の記録がある。葛飾に住んだ可能性。',
    certainty:'stated', certaintyRaw:'図録記載＋推定', sourcePage:77, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1812-travel-work', year:1812, yearOriginal:'1812', age:'53', category:'travel', categoryJa:'旅・制作', importance:'primary', scope:'life',
    title:'名古屋・牧墨僊宅', summary:'秋頃名古屋に滞在し、門人牧墨僊宅に逗留。『北斎漫画』初編の下絵を描きためたとする。大坂・吉野・紀州・伊勢などへの旅行可能性も記される。', sourceText:'秋頃名古屋に滞在し、門人牧墨僊宅に逗留。『北斎漫画』初編の下絵を描きためたとする。大坂・吉野・紀州・伊勢などへの旅行可能性も記される。',
    certainty:'stated', certaintyRaw:'図録記載＋推定', sourcePage:77, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1815-residence', year:1815, yearOriginal:'1815頃', age:'56', category:'residence', categoryJa:'居所', importance:'detail', scope:'life',
    title:'蛇山か', summary:'春頃、蛇山に住んだ可能性（絵本の記載による）。', sourceText:'春頃、蛇山に住んだ可能性（絵本の記載による）。',
    certainty:'catalog_inference', certaintyRaw:'図録推定', sourcePage:77, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1816-travel-live', year:1816, yearOriginal:'1816', age:'57', category:'travel', categoryJa:'旅・実演', importance:'secondary', scope:'life',
    title:'名古屋 大達磨・上方旅', summary:'春頃名古屋花屋町に滞在した可能性。10月5日、名古屋西掛所で百二十畳大の達磨半身を描く。年末頃、大坂・伊勢・紀州・吉野などへ旅行したとされる。', sourceText:'春頃名古屋花屋町に滞在した可能性。10月5日、名古屋西掛所で百二十畳大の達磨半身を描く。年末頃、大坂・伊勢・紀州・吉野などへ旅行したとされる。',
    certainty:'stated', certaintyRaw:'図録記載＋推定', sourcePage:78, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1819-name', year:1819, yearOriginal:'1819頃', age:'60', category:'name', categoryJa:'画号', importance:'detail', scope:'life',
    title:'戴斗号を譲るか', summary:'「戴斗」号を門人・斗円楼北泉へ譲った可能性。', sourceText:'「戴斗」号を門人・斗円楼北泉へ譲った可能性。',
    certainty:'catalog_inference', certaintyRaw:'図録推定', sourcePage:78, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1820-name-eval', year:1820, yearOriginal:'1820', age:'61', category:'name', categoryJa:'画号・評価', importance:'primary', scope:'life',
    title:'為一落款・番付上位', summary:'「為一」落款の作品がみえる。戯作者・画工の番付で豊国と同格の上位に置かれたとする。浅草奥山の見世物絵の下絵を描いたという。', sourceText:'「為一」落款の作品がみえる。戯作者・画工の番付で豊国と同格の上位に置かれたとする。浅草奥山の見世物絵の下絵を描いたという。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:78, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1821-res-family', year:1821, yearOriginal:'1821', age:'62', category:'residence', categoryJa:'居所・家族', importance:'detail', scope:'life',
    title:'緑町か・家族事項', summary:'緑町に住んだ可能性。娘の死、長女阿美与と門人柳川重信の離縁など家族事項が記される。', sourceText:'緑町に住んだ可能性。娘の死、長女阿美与と門人柳川重信の離縁など家族事項が記される。',
    certainty:'catalog_inference', certaintyRaw:'図録推定＋記載', sourcePage:79, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1822-senryu', year:1822, yearOriginal:'1822–1824', age:'63', category:'network', categoryJa:'川柳・交流', importance:'detail', scope:'life',
    title:'川柳の会・卍号', summary:'柳亭種彦らが関わる川柳の会へたびたび出席。川柳の号として「卍／万字」を用いた記録がみえる。', sourceText:'柳亭種彦らが関わる川柳の会へたびたび出席。川柳の号として「卍／万字」を用いた記録がみえる。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:79, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1824-health', year:1824, yearOriginal:'1824頃', age:'65', category:'health', categoryJa:'健康', importance:'secondary', scope:'life',
    title:'中風', summary:'この頃、中風を患うが自家製の薬で回復したという。', sourceText:'この頃、中風を患うが自家製の薬で回復したという。',
    certainty:'tradition', certaintyRaw:'伝承', sourcePage:79, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1826-family', year:1826, yearOriginal:'1826頃', age:'67', category:'family', categoryJa:'家族', importance:'detail', scope:'life',
    title:'後妻 没か', summary:'後妻が没したとする記載。人物番付で別格扱いされたとも記される。', sourceText:'後妻が没したとする記載。人物番付で別格扱いされたとも記される。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:79, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1827-family', year:1827, yearOriginal:'1827頃', age:'68', category:'family', categoryJa:'家族', importance:'detail', scope:'life',
    title:'孫の問題対応', summary:'孫・柳川重信の子の問題行動に対応していたという記載。', sourceText:'孫・柳川重信の子の問題行動に対応していたという記載。',
    certainty:'secondary_note', certaintyRaw:'二次記載', sourcePage:79, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1830-masterworks', year:1830, yearOriginal:'1830年代前半', age:'71', category:'work', categoryJa:'代表作', importance:'primary', scope:'life',
    title:'冨嶽三十六景ほか集中期', summary:'年譜作品欄に『冨嶽三十六景』をはじめ、風景版画・絵手本の代表作群が集中する時期。', sourceText:'年譜作品欄に『冨嶽三十六景』をはじめ、風景版画・絵手本の代表作群が集中する時期。',
    certainty:'secondary_note', certaintyRaw:'作品欄整理', sourcePage:80, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1831-family-res', year:1831, yearOriginal:'1831', age:'72', category:'residence', categoryJa:'家族・居所', importance:'detail', scope:'life',
    title:'孫引渡し・浅草明王院か', summary:'放蕩を尽くす孫を父親へ引き渡したとする。浅草明王院地内に住んだ可能性。川柳会への出席記録もある。', sourceText:'放蕩を尽くす孫を父親へ引き渡したとする。浅草明王院地内に住んだ可能性。川柳会への出席記録もある。',
    certainty:'stated', certaintyRaw:'図録記載＋推定', sourcePage:80, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1832-family', year:1832, yearOriginal:'1832', age:'73', category:'family', categoryJa:'家族', importance:'secondary', scope:'life',
    title:'柳川重信 没', summary:'閏11月28日、元女婿・柳川重信が没する。', sourceText:'閏11月28日、元女婿・柳川重信が没する。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:80, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1834-res-artview', year:1834, yearOriginal:'1834', age:'75', category:'residence', categoryJa:'居所・制作観', importance:'primary', scope:'life',
    title:'転居56回・浦賀潜居・百景自跋', summary:'この年までの転居は56回に及んだという。相州浦賀に潜居したとされる。『富嶽百景』初編自跋で自らの画業への抱負を述べる。', sourceText:'この年までの転居は56回に及んだという。相州浦賀に潜居したとされる。『富嶽百景』初編自跋で自らの画業への抱負を述べる。',
    certainty:'secondary_note', certaintyRaw:'二次記載＋図録記載', sourcePage:80, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1835-travel-network', year:1835, yearOriginal:'1835', age:'76', category:'travel', categoryJa:'旅・交流', importance:'detail', scope:'life',
    title:'浦賀→版元・相豆旅', summary:'浦賀から江戸日本橋の版元へ手紙を送る。相州・豆州へ旅したとする。', sourceText:'浦賀から江戸日本橋の版元へ手紙を送る。相州・豆州へ旅したとする。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:80, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1836-res-work', year:1836, yearOriginal:'1836', age:'77', category:'residence', categoryJa:'居所・制作', importance:'secondary', scope:'life',
    title:'深川万年橋付近か・居所不定', summary:'浦賀から江戸へ戻る動きが記され、深川万年橋付近に住んだ可能性。肉筆画の制作を行い利益を得たという。同年の人名録では「居所不定」とされる。', sourceText:'浦賀から江戸へ戻る動きが記され、深川万年橋付近に住んだ可能性。肉筆画の制作を行い利益を得たという。同年の人名録では「居所不定」とされる。',
    certainty:'stated', certaintyRaw:'図録記載＋推定', sourcePage:81, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1837-health-work', year:1837, yearOriginal:'1837', age:'78', category:'health', categoryJa:'健康・制作', importance:'secondary', scope:'life',
    title:'「病床ノ画」落款', summary:'読本『新編水滸画伝』に「病床ノ画」などと落款された挿絵がみえる。', sourceText:'読本『新編水滸画伝』に「病床ノ画」などと落款された挿絵がみえる。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:81, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1839-fire-travel', year:1839, yearOriginal:'1839', age:'80', category:'travel', categoryJa:'火災・旅', importance:'primary', scope:'life',
    title:'火災で縮図焼失', summary:'本所石原片町・達磨横丁に住む。この頃初めて火災に遭い、多くの縮図を焼失したとされる。房総方面への旅行可能性も記される。', sourceText:'本所石原片町・達磨横丁に住む。この頃初めて火災に遭い、多くの縮図を焼失したとされる。房総方面への旅行可能性も記される。',
    certainty:'stated', certaintyRaw:'図録記載＋推定', sourcePage:81, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1840-work-res', year:1840, yearOriginal:'1840', age:'81', category:'residence', categoryJa:'制作・居所', importance:'secondary', scope:'life',
    title:'藍摺挿絵・亀沢町か', summary:'浅草田原町の中島平左衛門関係の報状に藍摺挿絵を描く。自画像のある書簡が残る。この頃、亀沢町に住んだ可能性。', sourceText:'浅草田原町の中島平左衛門関係の報状に藍摺挿絵を描く。自画像のある書簡が残る。この頃、亀沢町に住んだ可能性。',
    certainty:'stated', certaintyRaw:'図録記載＋推定', sourcePage:81, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1841-obuse-network', year:1841, yearOriginal:'1841', age:'82', category:'obuse', categoryJa:'小布施・交流', importance:'primary', scope:'life',
    title:'高井鴻山へ書簡', summary:'4月、高井鴻山へ書簡。祭屋台天井絵の下絵が進まないこと、阿栄の旅行手形、翌春の訪問希望などを伝える。', sourceText:'4月、高井鴻山へ書簡。祭屋台天井絵の下絵が進まないこと、阿栄の旅行手形、翌春の訪問希望などを伝える。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:81, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1843-network-move', year:1843, yearOriginal:'1843', age:'84', category:'travel', categoryJa:'交流・転居', importance:'secondary', scope:'life',
    title:'鴻山へ再書簡・転居60回', summary:'8月9日、高井鴻山へ再び書簡。この年までの転居回数は60回に及ぶという。', sourceText:'8月9日、高井鴻山へ再び書簡。この年までの転居回数は60回に及ぶという。',
    certainty:'stated', certaintyRaw:'図録記載＋二次記載', sourcePage:81, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1844-res-travel', year:1844, yearOriginal:'1844', age:'85', category:'travel', categoryJa:'居所・旅', importance:'primary', scope:'life',
    title:'向島小梅村・小布施か', summary:'2月29日、嵩山房に稿料受取証を出す。この頃、向島小梅村に住む。3月頃に小布施へ赴いた可能性。また浅草寺前居住の可能性も記される。', sourceText:'2月29日、嵩山房に稿料受取証を出す。この頃、向島小梅村に住む。3月頃に小布施へ赴いた可能性。また浅草寺前居住の可能性も記される。',
    certainty:'stated', certaintyRaw:'図録記載＋推定', sourcePage:82, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1845-obuse-res', year:1845, yearOriginal:'1845', age:'86', category:'residence', categoryJa:'小布施・居所', importance:'secondary', scope:'life',
    title:'再度小布施か', summary:'再度小布施へ旅した可能性。番場町／本所荒井町に住んだ可能性が記される。', sourceText:'再度小布施へ旅した可能性。番場町／本所荒井町に住んだ可能性が記される。',
    certainty:'catalog_inference', certaintyRaw:'図録推定', sourcePage:82, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1846-res-counterfeit-health', year:1846, yearOriginal:'1846', age:'87', category:'residence', categoryJa:'居所・贋作対策・健康', importance:'secondary', scope:'life',
    title:'大坂贋作回状・病再発', summary:'春頃、西両国に住んだ可能性。4月24日、大坂で横行する贋作について書物屋衆へ回状を送る。8月の書簡に健勝ぶり、12月の書簡には病気再発・歩行困難を示す文言がある。', sourceText:'春頃、西両国に住んだ可能性。4月24日、大坂で横行する贋作について書物屋衆へ回状を送る。8月の書簡に健勝ぶり、12月の書簡には病気再発・歩行困難を示す文言がある。',
    certainty:'stated', certaintyRaw:'図録記載＋推定', sourcePage:82, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1847-res-archive', year:1847, yearOriginal:'1847', age:'88', category:'residence', categoryJa:'居所・作品整理', importance:'secondary', scope:'life',
    title:'三浦屋八右衛門・日新除魔譲渡', summary:'2月頃、三浦屋八右衛門と称して田町一丁目に住んだ可能性。天保13・14年の『日新除魔』二百余図を松代藩士・宮本慎助へ与える。', sourceText:'2月頃、三浦屋八右衛門と称して田町一丁目に住んだ可能性。天保13・14年の『日新除魔』二百余図を松代藩士・宮本慎助へ与える。',
    certainty:'stated', certaintyRaw:'図録記載＋推定', sourcePage:82, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1848-artview-network', year:1848, yearOriginal:'1848', age:'89', category:'network', categoryJa:'制作観・交流', importance:'secondary', scope:'life',
    title:'彩色通自序・本間北曜', summary:'絵手本『画本彩色通』初編自序で自身の絵画観に触れる。6月、門人・本間北曜と浅草の仮宅で面談。北曜に長崎での魚類写生を依頼し、肉筆画『鬼図』を贈る。', sourceText:'絵手本『画本彩色通』初編自序で自身の絵画観に触れる。6月、門人・本間北曜と浅草の仮宅で面談。北曜に長崎での魚類写生を依頼し、肉筆画『鬼図』を贈る。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:82, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1849-death', year:1849, yearOriginal:'1849', age:'90', category:'death', categoryJa:'最晩年・死', importance:'primary', scope:'life', deathPoem:'ひと魂でゆく気散じや夏の原', deathPoemAlt:'人魂でゆくきさんじや夏の原', deathPoemType:'辞世', poemSource:'すみだ北斎美術館',
    title:'没（誓教寺）', summary:'春頃病床に臥す。4月18日暁七ツ時（図録注記では午前4時頃）、浅草聖天町遍照院境内の仮宅で没する。娘・阿栄が門人北嶺へ死亡通知を送り、4月19日に浅草誓教寺で葬儀。法名は南惣院奇誉北斎居士。', sourceText:'春頃病床に臥す。4月18日暁七ツ時（図録注記では午前4時頃）、浅草聖天町遍照院境内の仮宅で没する。娘・阿栄が門人北嶺へ死亡通知を送り、4月19日に浅草誓教寺で葬儀。法名は南惣院奇誉北斎居士。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:83, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1867-reception', year:1867, yearOriginal:'1867', age:'None', category:'reception', categoryJa:'受容', importance:'primary', scope:'posthumous',
    title:'パリ万博出品', summary:'パリ万国博覧会で『北斎漫画』等の絵本類や浮世絵多数が幕府により出品され、注目を集めたと図録が記す。', sourceText:'パリ万国博覧会で『北斎漫画』等の絵本類や浮世絵多数が幕府により出品され、注目を集めたと図録が記す。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:83, source:'大北斎展図録(東武美術館,1993)' },
  { id:'dh1993-1893-research-history', year:1893, yearOriginal:'1893', age:'None', category:'research', categoryJa:'研究史', importance:'primary', scope:'posthumous',
    title:'飯島虚心『葛飾北斎伝』', summary:'3月7日、飯島虚心・小林文七・小川一真らが誓教寺を訪ね、北斎と佛清の墓碑を撮影。9月、飯島虚心著『葛飾北斎伝』上下二冊が刊行される。', sourceText:'3月7日、飯島虚心・小林文七・小川一真らが誓教寺を訪ね、北斎と佛清の墓碑を撮影。9月、飯島虚心著『葛飾北斎伝』上下二冊が刊行される。',
    certainty:'stated', certaintyRaw:'図録記載', sourcePage:84, source:'大北斎展図録(東武美術館,1993)' },
];

// 人物人生フェーズ（全体像9期。作品SERIESとは別＝人物の大区分）。今回はデータ保持中心。
export const lifePhases = [
  { from:1760, to:1778, label:'形成期', note:'出生、鏡師中島家との関係、木版技術の修業、勝川春章入門へ。', scope:'life' },
  { from:1779, to:1793, label:'勝川派・春朗期', note:'春朗として錦絵を制作。役者絵を含む初期版画活動。', scope:'life' },
  { from:1794, to:1799, label:'宗理から北斎へ', note:'俵屋宗理を襲名し、その後宗理号を譲って「北斎辰政」へ。狂歌本・摺物など活動領域が拡大。', scope:'life' },
  { from:1800, to:1810, label:'読本・席画・都市ネットワーク', note:'馬琴、種彦、南畝ら文人との接点が増え、読本挿絵・席画・書画会など多方面に展開。', scope:'life' },
  { from:1811, to:1820, label:'旅・絵手本・北斎漫画', note:'名古屋をはじめ各地へ移動。『北斎漫画』初編の形成、巨大達磨の実演。「戴斗」から「為一」へ。', scope:'life' },
  { from:1821, to:1829, label:'為一期・川柳と家族史', note:'川柳会への参加、転居、家族上の出来事。健康上の記録もみえる。', scope:'life' },
  { from:1830, to:1835, label:'風景版画の頂点', note:'『冨嶽三十六景』など代表的風景版画群、『富嶽百景』へ。浦賀など江戸外への移動もみえる。', scope:'life' },
  { from:1836, to:1843, label:'肉筆画・火災・小布施への接続', note:'肉筆画制作、1839年の火災、高井鴻山との往復書簡、小布施の祭屋台天井絵へつながる。', scope:'life' },
  { from:1844, to:1849, label:'最晩年', note:'小布施再訪、贋作への対応、健康悪化の記録、絵画観の言語化。1849年没。', scope:'life' },
  { from:1850, to:1940, label:'没後（国際受容・研究史）', note:'1867年パリ万国博覧会、1893年『葛飾北斎伝』刊行など、没後の受容・研究史へ続く。', scope:'posthumous' },
];
