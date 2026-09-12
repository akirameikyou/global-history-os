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
