# tools/hokusai_resources/build.py — 北斎Focus 年代別資料レイヤー data/hokusai_resources.js を生成する
# usage: python -I tools/hokusai_resources/build.py <GPT北斎資料ZIPの展開フォルダ>
#   GPT北斎資料(001〜005)は利用者提供の調査資料のためリポジトリに含めない（OneDrive\Desktop\GPT北斎資料 のZIPを展開して渡す）。
#   cache/ = The Met Collection API の取得結果（個別作品の isPublicDomain 等の確認時点の控え）。出力は data/hokusai_resources.js。
# 方針: 原資料の文言・権利状態は書き換えない。OS側で決めた割当（年代・根拠の層）は *By フィールドで明示する。
import json, glob, csv, sys, os

HERE = os.path.dirname(os.path.abspath(__file__)); CACHE = os.path.join(HERE, 'cache')
SRC_DIR = sys.argv[1]
OUT = os.path.join(HERE, '..', '..', 'data', 'hokusai_resources.js')
MET_JSON = os.path.join(CACHE, 'met_check.json')
def J(pat):
    return json.load(open(glob.glob(os.path.join(SRC_DIR, pat))[0], encoding='utf-8-sig'))
def C(pat):
    return list(csv.DictReader(open(glob.glob(os.path.join(SRC_DIR, pat))[0], encoding='utf-8-sig')))

# 既存 lifePhases（data/hokusai_life.js）の from 年 = 期のキー。GPT側の PER 区分は境界が異なるので採用しない。
PHASES = [1760, 1779, 1794, 1800, 1811, 1821, 1830, 1836, 1844, 1850]

# 出典 → 期（OS編集で割当）。[] = 生涯全体・時期を特定しない。'policy' = 利用条件の参照（期には出さない）。
# 'anecdote' = 逸話の根拠としてのみ表示（期の資料一覧には単独で出さない）。
PHASE_MAP = {
 'HKR-001':[1760],'HKR-002':[],'HKR-003':[1760],'HKR-004':[1760],'HKR-005':[1779],'HKR-006':[1779],
 'HKR-007':[1794],'HKR-008':[1794,1800],'HKR-009':[1800],'HKR-010':[1800],'HKR-011':[1811],'HKR-012':[1811],
 'HKR-013':[1830],'HKR-014':[1830],'HKR-015':[1830],'HKR-016':[1830],'HKR-017':[1830],'HKR-018':[1830],
 'HKR-019':[1836,1844],'HKR-020':[1844],'HKR-021':[1844],'HKR-022':[],
 'HKR-023':'policy','HKR-024':'policy','HKR-025':'policy',
 'SRC-001':[],'SRC-002':[1830],'SRC-003':'policy','SRC-004':'policy','SRC-005':[1760],'SRC-006':[1760],
 'SRC-007':'policy','SRC-008':'policy','SRC-009':'anecdote','SRC-010':'anecdote','SRC-011':'anecdote',
 'SRC-012':[],'SRC-013':[],'SRC-014':'anecdote','SRC-015':'anecdote',
 'S005-01':[1811],'S005-02':[1811],'S005-03':[1811],'S005-04':[1830],'S005-05':[1830],'S005-06':[1830],
 'S005-07':[],'S005-08':[1760],'S005-09':[],'S005-10':[],'S005-11':[1830],
}
# 出典の種別（表示の見出し）。work=作品記録 / commentary=館・自治体の解説 / catalog=書誌・DB・検索入口 / map=地図 / article=研究的記事
KIND_MAP = {
 'official_biography':'commentary','official_local_history':'commentary','official_collection_biography':'commentary',
 'historical_map_index':'map','digital_collection_search':'catalog','artwork':'work','book_illustration_reference':'commentary',
 'book_primary_source':'catalog','museum_collection_database':'catalog','museum_collection':'commentary',
 'site_specific_artwork':'commentary','museum_authority_record':'catalog','aggregated_research_portal':'catalog',
}
KIND_002 = {'SRC-001':'commentary','SRC-002':'catalog','SRC-005':'map','SRC-006':'map','SRC-009':'article','SRC-010':'article',
 'SRC-011':'article','SRC-012':'catalog','SRC-013':'catalog','SRC-014':'article','SRC-015':'article'}
KIND_005 = {'S005-01':'catalog','S005-02':'commentary','S005-03':'catalog','S005-04':'catalog','S005-05':'catalog',
 'S005-06':'commentary','S005-07':'commentary','S005-08':'commentary','S005-09':'commentary','S005-10':'catalog','S005-11':'work'}
# 画像: The Met 個別作品で isPublicDomain=true を API で確認したもののみ
MET_IMAGE = {'HKR-008':54887,'HKR-013':56353,'HKR-014':36490,'HKR-015':36492,'HKR-016':55742,'S005-11':57551}

met = json.load(open(MET_JSON, encoding='utf-8'))
def place(sid):
    p = PHASE_MAP[sid]
    if p == 'policy': return 'policy', []
    if p == 'anecdote': return 'anecdote', []
    return ('period' if p else 'general'), p

sources = []
for r in J('hokusai_os_materials_001/*/hokusai_resource_register_001.json')['resources']:
    role, ph = place(r['id'])
    sources.append({'id':r['id'],'pkg':'001','title':r['title'],'org':r['source_org'],'url':r['source_url'],
      'kind':'policy' if role=='policy' else KIND_MAP.get(r['resource_type'],'catalog'),'role':role,'phases':ph,
      'years':[r['period_start'],r['period_end']],'desc':r['description'],
      'rights':{'status':r['rights_status'],'basis':r['rights_basis']},'confidence':r['confidence'],
      'priority':r['priority'],'checkedAt':r['checked_date']})
for r in J('hokusai_os_materials_002/*/resource_register_002.json')['resources']:
    role, ph = place(r['id'])
    sources.append({'id':r['id'],'pkg':'002','title':r['title'],'org':r['institution'],'url':r['url'],
      'kind':'policy' if role=='policy' else KIND_002[r['id']],'role':role,'phases':ph,'periodNote':r['period'],
      'desc':r['evidence_value'],'rights':{'status':r['rights_status'],'basis':r['image_reuse']},
      'caution':r['verification_note'],'use':r['recommended_use'],'checkedAt':r['checked']})
for r in C('hokusai_os_materials_005/*/SOURCE_REGISTER_005.csv'):
    role, ph = place(r['source_id'])
    sources.append({'id':r['source_id'],'pkg':'005','title':r['title'],'org':r['institution'],'url':r['url'],
      'kind':KIND_005[r['source_id']],'role':role,'phases':ph,'desc':r['what_it_supports'],
      'caution':r['limits_or_cautions'],'checkedAt':'2026-10-28'})
for s in sources:
    if s['id'] in MET_IMAGE:
        m = met[str(MET_IMAGE[s['id']])]
        assert m['isPublicDomain'] is True
        s['image'] = {'src':m['primaryImageSmall'],'page':m['objectURL'],
          'credit':'The Metropolitan Museum of Art, '+m['creditLine']+' ('+m['accessionNumber']+')',
          'license':'Public Domain（The Met Open Access / CC0）','basis':'The Met Collection API isPublicDomain=true',
          'objectDate':m['objectDate'],'classification':{'Prints':'版画','Paintings':'肉筆画','Illustrated Books':'版本'}.get(m.get('classification'),m.get('classification')),
          'checkedAt':met['_checked']}

# 年代別作品（The Met Open Access, OS編集で選定）: objectID → 期。期は The Met の年代表記(objectDate)で決める。
# 選定方針: 年の明記された作品を優先し、版画・肉筆画・版本が混ざるように各期2〜5点。題は The Met の表記のまま（和題を推測で付けない）。
MET_WORKS = {
 48878:1779, 37190:1779, 45822:1779, 37189:1779,
 45494:1794, 45218:1794,
 36483:1800, 37391:1800, 44634:1800,
 37193:1811, 54114:1811, 45029:1811, 78796:1811, 78797:1811,
 54438:1821, 54389:1821, 78799:1821, 36489:1821, 78801:1821,
 44981:1830,
 78805:1836, 45816:1836, 36485:1836, 48880:1836,
 45818:1844, 45819:1844,
}
CLASS_JA = {'Prints':'版画','Paintings':'肉筆画','Illustrated Books':'版本'}
if True:
    allmet = {o['objectID']:o for o in json.load(open(os.path.join(CACHE,'met_hokusai_all.json'), encoding='utf-8'))}
    for oid, ph in MET_WORKS.items():
        m = allmet[oid]
        assert m['isPublicDomain'] is True and m['primaryImageSmall'], oid
        sources.append({'id':'MET-%d'%oid,'pkg':'met-001','title':m['title'],'org':'The Metropolitan Museum of Art','url':m['objectURL'],
          'kind':'work','role':'period','phases':[ph],'phaseBy':'OS編集（The Metの年代表記 objectDate による）',
          'desc':CLASS_JA.get(m['classification'],m['classification'])+'・'+(m['medium'] or ''),
          'rights':{'status':'PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API','basis':'The Met Collection API isPublicDomain=true（個別作品）'},
          'checkedAt':met['_checked'],
          'image':{'src':m['primaryImageSmall'],'page':m['objectURL'],
            'credit':'The Metropolitan Museum of Art, '+m['creditLine']+' ('+m['accessionNumber']+')',
            'license':'Public Domain（The Met Open Access / CC0）','basis':'The Met Collection API isPublicDomain=true',
            'objectDate':m['objectDate'],'classification':CLASS_JA.get(m['classification'],m['classification']),'checkedAt':met['_checked']}})

# 参考作品（北斎作ではない）: 北斎との関係に根拠がある作家のみ。role:'reference'。北斎の作品一覧・件数には混ぜない。
# 勝川春章＝北斎の師（data/hokusai_life.js personLinks p_shunsho, relationCertainty:'documented'）。年の明記された作品を優先。
REF_WORKS = {36684:1760, 36849:1760, 36846:1760, 36832:1760, 36594:1760}
if True:
    shun = {o['objectID']:o for o in json.load(open(os.path.join(CACHE,'met_shunsho.json'), encoding='utf-8'))}
    for oid, ph in REF_WORKS.items():
        m = shun[oid]
        assert m['isPublicDomain'] is True and m['primaryImageSmall'], oid
        sources.append({'id':'MET-%d'%oid,'pkg':'met-ref-001','title':m['title'],'org':'The Metropolitan Museum of Art','url':m['objectURL'],
          'kind':'work','role':'reference','refKind':'master_work','phases':[ph],'phaseBy':'OS編集（The Metの年代表記 objectDate による）',
          'artist':'勝川春章','relation':'北斎の師・1778年頃入門','relationBasis':'data/hokusai_life.js personLinks p_shunsho（documented）',
          'desc':CLASS_JA.get(m['classification'],m['classification'])+'・'+(m['medium'] or ''),
          'rights':{'status':'PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API','basis':'The Met Collection API isPublicDomain=true（個別作品）'},
          'checkedAt':met['_checked'],
          'image':{'src':m['primaryImageSmall'],'page':m['objectURL'],
            'credit':'The Metropolitan Museum of Art, '+m['creditLine']+' ('+m['accessionNumber']+')',
            'license':'Public Domain（The Met Open Access / CC0）','basis':'The Met Collection API isPublicDomain=true',
            'objectDate':m['objectDate'],'classification':CLASS_JA.get(m['classification'],m['classification']),'checkedAt':met['_checked']}})

# 同時代の画家（refKind:'contemporary'）＝北斎との直接の関係は未確認。年の明記された作品から各期1〜3点（The Met, 個別に isPublicDomain=true）。
CONTEMP = [
 # (objectID, 期, 作家, 関係の説明)
 (37286,1779,'喜多川歌麿','同時代の浮世絵師（直接の関係は未確認）'),
 (51137,1779,'喜多川歌麿','同時代の浮世絵師（直接の関係は未確認）'),
 (37352,1794,'東洲斎写楽','同時代の浮世絵師・1794–95年に活動（直接の関係は未確認）'),
 (37382,1794,'東洲斎写楽','同時代の浮世絵師・1794–95年に活動（直接の関係は未確認）'),
 (37354,1794,'喜多川歌麿','同時代の浮世絵師・暮らしの場面（直接の関係は未確認）'),
 (36510,1830,'歌川広重','同時代の風景版画の絵師（直接の関係は未確認）'),
 (36536,1850,'歌川広重','北斎没後の広重『富士三十六景』（題名の近い後続作。影響関係は断定しない）'),
]
_ct = json.load(open(os.path.join(CACHE,'met_contemporaries.json'), encoding='utf-8'))
_ct = {o['objectID']:o for L in _ct.values() for o in L}
for oid, ph, artist, rel in CONTEMP:
    m = _ct[oid]
    assert m['isPublicDomain'] is True and m['primaryImageSmall'], oid
    sources.append({'id':'MET-%d'%oid,'pkg':'met-ref-002','title':m['title'],'org':'The Metropolitan Museum of Art','url':m['objectURL'],
      'kind':'work','role':'reference','refKind':'contemporary','phases':[ph],'phaseBy':'OS編集（The Metの年代表記 objectDate による）',
      'artist':artist,'relation':rel,'relationBasis':'同じ時代に活動した絵師（同時代であることは影響関係を意味しない）',
      'desc':CLASS_JA.get(m['classification'],m['classification'])+'・'+(m['medium'] or ''),
      'rights':{'status':'PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API','basis':'The Met Collection API isPublicDomain=true（個別作品）'},'checkedAt':met['_checked'],
      'image':{'src':m['primaryImageSmall'],'page':m['objectURL'],'credit':'The Metropolitan Museum of Art, '+m['creditLine']+' ('+m['accessionNumber']+')',
        'license':'Public Domain（The Met Open Access / CC0）','basis':'The Met Collection API isPublicDomain=true',
        'objectDate':m['objectDate'],'classification':CLASS_JA.get(m['classification'],m['classification']),'checkedAt':met['_checked']}})

# 時代資料（第1弾, 2026-10-30 所蔵館ページで個別確認）。refKind: master_work=師の作品 / object=版木などの物 / document=証文・手形・書簡 / record=時代の記録
# 画像は「個別資料で自由利用を確認できたもの」だけ。ToMuCo(江戸東京博物館)はサイト規約上「表示のない収蔵品画像は第三者権利」とあり、
# 個別ページに PD 表示が無いためジャパンサーチ上の PDM 表示と食い違う → 厳しい方を採りリンクのみ。
COLBASE_RIGHTS = {'status':'COLBASE_TERMS_FREE_WITH_CREDIT','basis':'ColBase利用規約（政府標準利用規約2.0準拠・CC BY互換、出典記載）'}
CURATED = [
 {'id':'CB-tnm-A-8778','pkg':'cur-001','role':'reference','refKind':'object','phases':[1760],
  'title':'浮世絵版木・初代市川団蔵と初代大谷広次の草摺曳／梅下美人','artist':'鳥居清倍 筆','org':'東京国立博物館','url':'https://colbase.nich.go.jp/collection_items/tnm/A-8778',
  'dateText':'江戸時代・18世紀','relation':'浮世絵版木の実物例（北斎以前）','relationBasis':'図録は1773年頃に木版技術を学んだ可能性を記す（北斎がこの版木に関わったわけではない）',
  'rights':COLBASE_RIGHTS,'image':{'src':'https://colbase.nich.go.jp/media/tnm/A-8778/image/slideshow_s/A-8778_E0060447.jpg','full':'https://colbase.nich.go.jp/media/tnm/A-8778/image/slideshow_l/A-8778_E0060447.jpg',
   'page':'https://colbase.nich.go.jp/collection_items/tnm/A-8778','credit':'出典：ColBase（東京国立博物館所蔵）','license':'ColBase利用規約（CC BY互換）','objectDate':'江戸時代・18世紀','classification':'版木','providerShort':'ColBase'}},
 {'id':'CB-kyohaku-A408','pkg':'cur-001','role':'reference','refKind':'object','phases':[],
  'title':'煙草盆（北斎版木製）','artist':'（北斎の版木を転用）','org':'京都国立博物館','url':'https://colbase.nich.go.jp/collection_items/kyohaku/A%E4%B9%99408',
  'dateText':'江戸時代','relation':'北斎の版木を材にした煙草盆（所蔵館の名称による）','relationBasis':'所蔵館の作品名「煙草盆（北斎版木製）」。どの作品の版木かは未確認',
  'rights':COLBASE_RIGHTS,'image':{'src':'https://colbase.nich.go.jp/media/kyohaku/A%E4%B9%99408/image/slideshow_l/393791_difile2-M.jpg','full':'https://colbase.nich.go.jp/media/kyohaku/A%E4%B9%99408/image/slideshow_l/393791_difile2-M.jpg',
   'page':'https://colbase.nich.go.jp/collection_items/kyohaku/A%E4%B9%99408','credit':'出典：ColBase（京都国立博物館所蔵）','license':'ColBase利用規約（CC BY互換）','objectDate':'江戸時代','classification':'版木（転用）','providerShort':'ColBase'}},
 {'id':'TML-0000000017-00082079','pkg':'cur-001','role':'period','refKind':'document','kind':'work','phases':[1811],
  'title':'葛飾北斎（戴斗） 丁字屋作兵衛 宛書簡','artist':'葛飾北斎（戴斗）','org':'東京都立図書館','url':'https://archive.library.metro.tokyo.lg.jp/da/detail?tilcod=0000000017-00082079',
  'dateText':'年不詳（戴斗の号による）','phaseNote':'書簡の年は所蔵館に記載なし。「戴斗」の号を用いた頃（1810年代）として推定',
  'rights':{'status':'PUBLIC_DOMAIN_ON_ITEM_PAGE','basis':'TOKYOアーカイブ 個別資料「画像の使用条件：パブリックドメイン」'},
  'image':{'src':'https://archive.library.metro.tokyo.lg.jp/da/download/?id=0000000017-00082079&size=listThumb&type=image&file=WT0742-393.jpg',
   'full':'https://archive.library.metro.tokyo.lg.jp/da/download/?id=0000000017-00082079&size=view&type=image&file=%2F%E6%9B%B8%E7%B0%A1%2FWT0742-393.jpg',
   'page':'https://archive.library.metro.tokyo.lg.jp/da/detail?tilcod=0000000017-00082079','credit':'東京都立図書館 TOKYOアーカイブ（渡辺刀水旧蔵諸家書簡文庫）','license':'パブリックドメイン（所蔵館表示）','objectDate':'年不詳（戴斗期）','classification':'書簡','providerShort':'都立図書館'}},
 {'id':'TMC-6652675','pkg':'cur-001','role':'reference','refKind':'document','phases':[1830],
  'title':'金子借用証文之事','artist':'金子借用主 助右衛門 ほか','org':'江戸東京博物館','url':'https://museumcollection.tokyo/works/6652675/',
  'dateText':'天保5年（1834）12月','relation':'同時代の借用証文の一般例（北斎に関わる文書ではない）','relationBasis':'北斎の年譜1834と同じ年の文書',
  'rights':{'status':'LINK_ONLY','basis':'個別ページに画像なし・PD表示なし（ToMuCo規約）'},'image':None},
 {'id':'CB-tnm-QB-12110','pkg':'cur-001','role':'reference','refKind':'document','phases':[1836],
  'title':'箱根関所手形','artist':'','org':'東京国立博物館','url':'https://colbase.nich.go.jp/collection_items/tnm/QB-12110',
  'dateText':'嘉永2～7年（1849～1854）写','relation':'関所手形の一般例（阿栄の手形そのものではない）','relationBasis':'年譜1841「阿栄の旅行手形」',
  'rights':{'status':'LINK_ONLY','basis':'ColBaseに画像の公開なし'},'image':None},
 {'id':'TMC-6655040','pkg':'cur-001','role':'reference','refKind':'record','phases':[1836],
  'title':'饑饉歎（天保之飢饉被害記録）','artist':'','org':'江戸東京博物館','url':'https://museumcollection.tokyo/works/6655040/',
  'dateText':'天保8年（1837）','relation':'同時代の出来事の記録（北斎の作品との因果は未確認）','relationBasis':'天保の飢饉（1833–37）は北斎の1830年代と重なる',
  'rights':{'status':'LINK_ONLY','basis':'個別ページにPD表示なし（ToMuCo規約：表示のない収蔵品画像は第三者権利）'},'image':None},
 {'id':'NDL-2542961','pkg':'cur-002','role':'reference','refKind':'record','phases':[1836],
  'title':'守貞謾稿','artist':'喜田川守貞 著','org':'国立国会図書館','url':'https://dl.ndl.go.jp/pid/2542961',
  'dateText':'江戸後期（天保8年〈1837〉起筆とされる）','relation':'同時代の江戸・上方の風俗記録（北斎の晩年と重なる）','relationBasis':'北斎の1830年代後半〜1840年代と同時代の生活記録',
  'rights':{'status':'LINK_ONLY','basis':'資料はPDM（国立国会図書館）。掲載するページ（挿図）を未選定のためリンクのみ'},'image':None},
 {'id':'SDC-02OD5080040000','pkg':'cur-001','role':'reference','refKind':'record','phases':[1836],
  'title':'天保七年大不作世上一統飢饉之事','artist':'','org':'県立長野図書館（信州デジタルコモンズ）','url':'https://www.ro-da.jp/shinshu-dcommons/library/02OD5080040000',
  'dateText':'天保7年（1836）の記録','relation':'信州の飢饉の記録（同時代の出来事。北斎の小布施行きより前）','relationBasis':'天保の飢饉。北斎は1840年代に信州小布施へ',
  'rights':{'status':'LINK_ONLY','basis':'個別ページの二次利用条件が空欄・画像表示なし'},'image':None},
]
for c in CURATED:
    c.setdefault('kind','work'); c['checkedAt']=met['_checked']
    if c.get('image'): c['image']['checkedAt']=met['_checked']
    sources.append(c)
# 北斎漫画 初編（The Met）：北斎の作品。初編は1814年刊、The Met本は1828年以降の摺り
mg = json.load(open(os.path.join(CACHE,'met_manga1.json'), encoding='utf-8'))
assert mg['isPublicDomain'] is True
sources.append({'id':'MET-%d'%mg['objectID'],'pkg':'met-001','title':mg['title'],'org':'The Metropolitan Museum of Art','url':mg['objectURL'],
  'kind':'work','role':'period','refKind':'record','phases':[1811],'phaseBy':'OS編集（初編の刊年1814による）',
  'phaseNote':'初編は1814年刊。The Metの本は1828年以降の摺り（after 1828）','desc':'版本・'+mg['medium'],
  'rights':{'status':'PUBLIC_DOMAIN_CONFIRMED_VIA_MET_API','basis':'The Met Collection API isPublicDomain=true（個別作品）'},'checkedAt':met['_checked'],
  'image':{'src':mg['primaryImageSmall'],'page':mg['objectURL'],'credit':'The Metropolitan Museum of Art, '+mg['creditLine']+' ('+mg['accessionNumber']+')',
    'license':'Public Domain（The Met Open Access / CC0）','basis':'The Met Collection API isPublicDomain=true','objectDate':mg['objectDate']+'（初編1814年刊）',
    'classification':'版本','checkedAt':met['_checked']}})

# 古地図（個別資料で利用条件を確認したもの）。crop/marks は IIIF 原図の画素座標（marks は CODH 江戸マップの地名位置 xywh）。
# 尾張屋版 江戸切絵図（国立国会図書館, 各シートのIIIFマニフェストで Access Restrictions: PDM を個別確認）。
# 同じシートでも見せる範囲(crop)と枠(marks)が違えば別の view として持つ。marks は CODH 江戸マップの地名位置(xywh)。
# 地図の年と年譜の出来事の年の差は画面側で計算して表示する（地図は出来事当時の町並みそのものではない）。
EDO_SHEETS = {
 '1286679':{'title':'〔江戸切絵図〕本所絵図','codhSheet':'16','year':1852},
 '1286680':{'title':'〔江戸切絵図〕深川絵図','codhSheet':'14','year':1852},
 '1286673':{'title':'〔江戸切絵図〕音羽絵図','codhSheet':'19','year':1853},
 '1286208':{'title':'〔江戸切絵図〕今戸箕輪浅草絵図','codhSheet':'21','year':1853},
 '1286659':{'title':'〔江戸切絵図〕駿河台小川町絵図','codhSheet':'06','year':1850},
}
def edo_view(vid, pid, crop, marks):
    sh = EDO_SHEETS[pid]
    return {'id':vid,'title':sh['title'],'publisher':'尾張屋清七','creator':'景山致恭・戸松昌訓・井山能知 編',
      'dateText':'嘉永2–文久2（1849–1862）刊（CODH江戸マップは%d年版として掲載）'%sh['year'],'year':sh['year'],
      'iiif':'https://dl.ndl.go.jp/api/iiif/%s/R0000001'%pid,'size':[6144,4096],'crop':crop,
      'marks':[{'label':l,'xywh':x,'codh':c} for l,x,c in marks],
      'page':'https://dl.ndl.go.jp/pid/%s'%pid,'doi':'10.11501/%s'%pid,'codh':'https://codh.rois.ac.jp/edo-maps/owariya/%s/'%sh['codhSheet'],
      'rights':{'status':'PDM','basis':'国立国会図書館デジタルコレクション IIIFマニフェスト Access Restrictions: PDM（個別資料）','credit':'国立国会図書館デジタルコレクション'},
      'checkedAt':met['_checked']}
oldMaps = [
 edo_view('MAP-NDL-1286679','1286679',[1350,2600,1100,950],[('南割下水',[1917,2924,132,42],'16-251'),('亀沢町',[1737,3284,125,54],'16-221')]),
 edo_view('MAP-NDL-1286679-ishihara','1286679',[1500,1700,1100,800],[('石原町',[1683,2197,108,42],'16-146'),('石原町',[1955,2267,118,38],'16-149'),('石原町',[2215,2270,113,42],'16-151')]),
 edo_view('MAP-NDL-1286679-komume','1286679',[3200,600,1000,800],[('小梅村',[3691,905,162,69],'16-282')]),
 edo_view('MAP-NDL-1286680-mannen','1286680',[800,1500,1000,800],[('万年橋',[1247,1865,118,44],'14-028')]),
 edo_view('MAP-NDL-1286673-gokokuji','1286673',[3150,350,1000,800],[('護国寺',[3615,745,84,88],'19-030')]),
 edo_view('MAP-NDL-1286659-iida','1286659',[3550,1450,1000,850],[('飯田町中坂通',[4036,1966,185,78],'6-049'),('九段坂',[4069,1727,91,54],'6-053')]),
 edo_view('MAP-NDL-1286208-shoten','1286208',[2700,2850,1000,800],[('浅草聖天町',[3023,3206,203,95],'21-200'),('浅草聖天町',[3210,3230,152,66],'21-206')]),
]
# 年譜の語 → 地図・古地図のリンク（図録の本文は書き換えず、表示時に該当語へリンクを重ねる）。
# place は data/hokusai_life.js の residences / lifePlaces の id。座標は代表点（家屋の位置ではない）。
textLinks = [
 {'lifeId':'dh1993-1760-birth','text':'江戸本所割下水','place':'r_warishita','zoom':14,'oldMap':'MAP-NDL-1286679',
  'note':'本所割下水付近の代表点（家屋の位置ではない）。墨田区は現在の亀沢付近と説明。','linkBy':'OS編集'},
# 以下 coord は国土地理院 住所検索（msearch.gsi.go.jp, 2026-10-30）で得た現在の町名の代表点。旧地名→現町名の対応は概略（OS編集）。
 {'lifeId':'dh1993-1804-live','text':'音羽護国寺','coord':{'lat':35.72123,'lng':139.7258},'zoom':15,'oldMap':'MAP-NDL-1286673-gokokuji',
  'note':'護国寺の所在地（文京区大塚五丁目40番）。','linkBy':'OS編集'},
 {'lifeId':'dh1993-1806-network-travel','text':'曲亭馬琴宅','coord':{'lat':35.69665,'lng':139.75066},'zoom':16,'oldMap':'MAP-NDL-1286659-iida',
  'note':'馬琴は寛政5年（1793）から飯田町中坂（世継稲荷下、履物商・伊勢屋）に住み、1806年もここ（Wikipedia「曲亭馬琴」）。現・千代田区九段北一丁目の代表点（国土地理院）','linkBy':'OS編集'},
 {'lifeId':'dh1993-1806-network-travel','text':'上総国木更津','coord':{'lat':35.3858232,'lng':139.9385292},'zoom':16,'pinLabel':'畳が池',
  'note':'畳が池（木更津市朝日三丁目4付近。Googleマップの地点、国土地理院の住所検索と約30m差で照合）。図録の「畳が池辺、水野清兵衛方」による。水野家の位置ではない','linkBy':'OS編集'},
 {'lifeId':'dh1993-1808-network-res','text':'亀沢町','coord':{'lat':35.69729,'lng':139.79875},'zoom':15,'oldMap':'MAP-NDL-1286679',
  'note':'現在の墨田区亀沢の代表点（新宅の位置ではない）','linkBy':'OS編集'},
 {'lifeId':'dh1993-1840-work-res','text':'亀沢町','coord':{'lat':35.69729,'lng':139.79875},'zoom':15,'oldMap':'MAP-NDL-1286679',
  'note':'現在の墨田区亀沢の代表点（住居の位置ではない）','linkBy':'OS編集'},
 {'lifeId':'dh1993-1836-res-work','text':'深川万年橋','coord':{'lat':35.68487,'lng':139.79442},'zoom':15,'oldMap':'MAP-NDL-1286680-mannen',
  'note':'万年橋付近（江東区常盤一丁目の代表点。住居の位置ではない）','linkBy':'OS編集'},
 {'lifeId':'dh1993-1839-fire-travel','text':'本所石原片町','coord':{'lat':35.70033,'lng':139.79852},'zoom':15,'oldMap':'MAP-NDL-1286679-ishihara',
  'note':'現在の墨田区石原の代表点。切絵図に「石原片町」の名は見当たらず、枠は石原町','linkBy':'OS編集'},
 {'lifeId':'dh1993-1844-res-travel','text':'向島小梅村','coord':{'lat':35.71177,'lng':139.80461},'zoom':15,'oldMap':'MAP-NDL-1286679-komume',
  'note':'小梅村の範囲の代表点（墨田区向島一丁目。住居の位置ではない）','linkBy':'OS編集'},
 {'lifeId':'dh1993-1812-travel-work','text':'名古屋','place':'lp_nagoya','zoom':12,'note':'名古屋の代表点（牧墨僊宅跡付近）','linkBy':'OS編集'},
 {'lifeId':'dh1993-1817-travel-live','text':'名古屋花屋町','coord':{'lat':35.16561,'lng':136.90295},'zoom':16,
  'note':'花屋町の滞在先の現在地付近（名古屋市中区「北斎が描いた名古屋のまちの記憶」は中区栄三丁目20-4の辺りとする。同ページは移転中のため検索結果の抜粋で確認。座標は国土地理院 住所検索）','linkBy':'OS編集'},
 {'lifeId':'dh1993-1817-travel-live','text':'名古屋西掛所','coord':{'lat':35.15707,'lng':136.90048},'zoom':16,
  'note':'西掛所（現・本願寺名古屋別院〔西別院〕、名古屋市中区門前町1-23。座標は国土地理院 住所検索）。名古屋市博物館は文化14年（1817）10月5日とする','linkBy':'OS編集'},
 {'lifeId':'dh1993-1834-res-artview','text':'相州浦賀','coord':{'lat':35.2493,'lng':139.7206},'zoom':12,
  'note':'浦賀の町の代表点（潜居先の位置ではない。座標は既存データの浦賀地点を流用）','linkBy':'OS編集'},
 {'lifeId':'dh1993-1841-obuse-network','text':'阿栄の旅行手形','ref':'CB-tnm-QB-12110','note':'関所手形の一般例を開く（阿栄の手形そのものではない）','linkBy':'OS編集'},
 {'lifeId':'dh1993-1844-res-travel','text':'小布施','place':'lp_obuse','zoom':13,'note':'小布施の滞在・制作拠点（碧漪軒）の代表点','linkBy':'OS編集'},
 {'lifeId':'dh1993-1845-obuse-res','text':'小布施','place':'lp_obuse','zoom':13,'note':'小布施の滞在・制作拠点（碧漪軒）の代表点','linkBy':'OS編集'},
 {'lifeId':'dh1993-1849-death','text':'浅草聖天町','place':'r_asakusa','zoom':14,'oldMap':'MAP-NDL-1286208-shoten','note':'浅草聖天町の代表点（遍照院・仮宅の位置ではない）','linkBy':'OS編集'},
]

# 根拠記録（003 evidence）: 逸話・資料に添える
evidence = []
for r in J('hokusai_os_materials_003/*/evidence_register_003.json')['records']:
    evidence.append({'id':r['record_id'],'pkg':'003','subject':r['subject'],'category':r['category'],
      'eventDate':r['event_or_text_date'],'sourceDate':r['source_date'],'sourceType':r['source_type'],
      'institution':r['source_institution'],'url':r['source_url'],'secondaryUrl':r.get('secondary_url'),
      'assessment':r['evidence_assessment'],'rights':r['rights_assessment'],
      'workflow':r.get('permitted_workflow'),'doNot':r.get('do_not')})

# 逸話: 003（002の改訂版）＋004追加を正とする。002の番号は prev002 に残す。
PREV002 = {'ANE-001':['ANE-001'],'ANE-002':['ANE-004'],'ANE-003':['ANE-002'],'ANE-004':['ANE-003'],'ANE-005':['ANE-008'],
 'ANE-006':['ANE-007'],'ANE-007':['ANE-006'],'ANE-008':['ANE-009'],'ANE-009':['ANE-010'],'ANE-011':['ANE-005']}
# 期の割当（OS編集）。[] = 時期を特定しない。recordYear = 根拠記録の年（出来事の年と区別）
ANE_PHASE = {
 'ANE-001':([],None,'生涯全体の転居。時期を一点に割り当てない'),
 'ANE-002':([1811],'1812','『占夢南柯後記』（1812刊）をめぐる話。口論の記述は1893年刊の伝記'),
 'ANE-003':([1844],'1893','臨終の言葉として伝わる。記録は後年の伝記'),
 'ANE-004':([1844],None,'辞世として伝わる句。初出未確認'),
 'ANE-005':([1830],'1834','『富嶽百景』初編（1834刊）の跋文'),
 'ANE-006':([],'1893','生涯の生活逸話。記録は1893年刊の伝記'),
 'ANE-007':([],'1893','時期の記載なし。記録は1893年刊の伝記'),
 'ANE-008':([],None,'画号は生涯を通じて変わる。各号の時期は人物年譜・名前史を参照'),
 'ANE-009':([1811],'1817','文化14年（1817）10月、名古屋'),
 'ANE-010':([],None,'孫の生年・出来事の時期が未確定のため時期を特定しない'),
 'ANE-011':([1836],'1840','根拠は天保11年（1840）の馬琴書簡。書簡が述べる共同制作の時期は未特定'),
}
# 根拠の層（OS編集・表示色用）。primary=本人の言葉・作品 / contemporary=同時代の記録 / biography=後世の伝記 / tradition=伝承（初出未確認）
ANE_LAYER = {'ANE-001':'contemporary','ANE-002':'biography','ANE-003':'tradition','ANE-004':'tradition','ANE-005':'primary',
 'ANE-006':'biography','ANE-007':'biography','ANE-008':'primary','ANE-009':'contemporary','ANE-010':'contemporary','ANE-011':'contemporary'}
ANE_EVD = {'ANE-001':['EVD-002'],'ANE-002':['EVD-003'],'ANE-005':['EVD-001'],'ANE-006':['EVD-004'],'ANE-007':['EVD-004']}

anecdotes = []
for pkg, rows in (('003', J('hokusai_os_materials_003/*/anecdote_register_003.json')['anecdotes']),
                  ('004', J('HokusaiOS_Materials_004_REISSUED/*/anecdote_additions_004.json')['anecdotes'])):
    for r in rows:
        urls = [u for u in [r.get('source'), r.get('secondary_source')] if u]
        if r.get('source_urls'): urls += [u.strip() for u in r['source_urls'].split(';') if u.strip()]
        ph, ry, pn = ANE_PHASE[r['id']]
        anecdotes.append({'id':r['id'],'pkg':pkg,'prev002':PREV002.get(r['id'],[]),'title':r['title'],'category':r['category'],
          'claim':r['claim'],'supported':r['supported'],'uncertain':r['uncertain'],'label':r['display_label'],
          'confidence':r['confidence'],'interpretive':r['interpretive_value'],'lineage':r.get('source_lineage'),
          'followup':r.get('primary_source_followup'),'rightsNote':r.get('rights_note'),'sourceUrls':urls,
          'evidenceIds':ANE_EVD.get(r['id'],[]),'phases':ph,'recordYear':ry,'phaseNote':pn,
          'layer':ANE_LAYER[r['id']],'layerBy':'OS編集','phaseBy':'OS編集'})

rights = []
for pkg, pat in (('003','hokusai_os_materials_003/*/rights_register_003.json'),('004','HokusaiOS_Materials_004_REISSUED/*/rights_additions_004.json')):
    for r in J(pat)['records']:
        rights.append({'id':r['id'],'pkg':pkg,'source':r['source'],'scope':r['scope'],'status':r['status'],
          'evidence':r['evidence'],'rules':r['rules'],'workflow':r.get('permitted_workflow'),'doNot':r.get('do_not'),
          'confidence':r['confidence']})

# 期ごとの「調べるときの注意」（GPT 001 の PER 区分を既存 lifePhases へ重なりで対応付け）
per = J('hokusai_os_materials_001/*/hokusai_resource_register_001.json')['periods']
bounds = list(zip(PHASES, PHASES[1:] + [1941]))
periodNotes = {}
for a, b in bounds:
    notes = [p['research_note'] for p in per if p['start'] < b and p['end'] >= a]
    periodNotes[a] = notes

# ---- 検査 ----
errs = []
ids = [x['id'] for x in sources] + [x['id'] for x in anecdotes] + [x['id'] for x in evidence] + [x['id'] for x in rights]
dup = sorted({i for i in ids if ids.count(i) > 1})
if dup: errs.append('ID重複: ' + ', '.join(dup))
for s in sources:
    if not s['url']: errs.append(s['id'] + ': URLなし')
    if s['kind'] != 'policy' and s['pkg'] != '005' and not s.get('rights'): errs.append(s['id'] + ': 権利状態なし')
    IMG_OK = ('PUBLIC_DOMAIN','COLBASE_TERMS_FREE_WITH_CREDIT')  # 画像を載せてよい権利状態（個別に確認済みのもの）
    if s.get('image') and not any(k in s.get('rights',{}).get('status','') for k in IMG_OK) and s['pkg'] != '005':
        errs.append(s['id'] + ': 自由利用を未確認なのに画像あり')
    if s['role']=='reference' and not s.get('relation'): errs.append(s['id'] + ': 参考資料なのに北斎との関係(relation)がない')
    for p in s['phases']:
        if p not in PHASES: errs.append(s['id'] + ': 未知の期 ' + str(p))
evd_ids = {e['id'] for e in evidence}
for a in anecdotes:
    if not a['sourceUrls']: errs.append(a['id'] + ': 出典なし')
    for e in a['evidenceIds']:
        if e not in evd_ids: errs.append(a['id'] + ': 根拠記録なし ' + e)
src_ids = {s['id'] for s in sources}
life_txt = open(os.path.join(os.path.dirname(OUT),'hokusai_life.js'), encoding='utf-8').read()
for tl in textLinks:
    if "id:'%s'"%tl['lifeId'] not in life_txt: errs.append('textLinks: 年譜IDなし '+tl['lifeId'])
    if tl.get('ref') and tl['ref'] not in src_ids: errs.append('textLinks: 参考資料IDなし '+tl['ref'])
    if tl.get('place') and "id:'%s'"%tl['place'] not in life_txt: errs.append('textLinks: 地点IDなし '+tl['place'])
    if not (tl.get('place') or tl.get('coord') or tl.get('ref')): errs.append('textLinks: 行き先なし '+tl['text'])
    if tl.get('oldMap') and tl['oldMap'] not in {m['id'] for m in oldMaps}: errs.append('textLinks: 古地図IDなし '+tl['oldMap'])
for sid in PHASE_MAP:
    if sid not in {s['id'] for s in sources}: errs.append('PHASE_MAPに余分なID ' + sid)
if errs:
    print('NG'); print('\n'.join(errs)); sys.exit(1)

def js(v): return json.dumps(v, ensure_ascii=False, indent=1)
head = '''// data/hokusai_resources.js — 年代別資料レイヤー（北斎Focus）  ※自動生成。手で直さず生成スクリプトを直す
// 出典: GPT北斎資料 001〜005（2026-10-28 調査, 利用者提供）を統合。原資料の文言・権利状態は書き換えていない。
//       ＋ 年代別作品 met-001（The Met Open Access から OS 編集で選定。id=MET-<objectID>）。
// 期のキー = data/hokusai_life.js の lifePhases[].from。phases:[] = 生涯全体／時期を特定しない。
// role: period=期の資料 / general=生涯全体 / anecdote=逸話の根拠としてのみ表示 / policy=利用条件の参照（画面の期一覧には出さない）
//       / reference=参考作品（北斎作ではない・relation に北斎との関係と根拠）。
// oldMaps=古地図（個別資料で利用条件確認済み・IIIF原図の該当範囲）／ textLinks=年譜の語→地図・古地図（図録本文は書き換えない）。
// 画像(image)は The Met 個別作品で isPublicDomain=true を API で確認したものだけ。それ以外は外部リンクのみ。
// phaseBy / layerBy:'OS編集' = 期・根拠の層の割当は OS 側の判断（GPT資料の記載ではない）。
// 逸話IDは 003＋004 を正とする（002 とは番号が異なる。002 の番号は prev002 に保持）。
'''
body = (head + '\nexport const resourcesMeta = ' + js({'version':'001','compiledFrom':['GPT北斎資料 001〜005','The Met・ColBase・都立図書館・国立国会図書館ほか（OS編集で追加, 各資料に出典と確認日）'],
          'researchedAt':'2026-10-28','compiledAt':met['_checked'],
          'note':'調査候補を含む。資料の存在確認は個々の主張の一次史料確認と同一ではない。'}) + ';\n'
        + '\nexport const resourceSources = ' + js(sources) + ';\n'
        + '\nexport const anecdotes = ' + js(anecdotes) + ';\n'
        + '\nexport const evidenceRecords = ' + js(evidence) + ';\n'
        + '\nexport const rightsRecords = ' + js(rights) + ';\n'
        + '\nexport const periodResearchNotes = ' + js(periodNotes) + ';\n'
        + '\nexport const oldMaps = ' + js(oldMaps) + ';\n'
        + '\nexport const textLinks = ' + js(textLinks) + ';\n')
open(OUT, 'w', encoding='utf-8', newline='\n').write(body)
from collections import Counter
print('OK', len(sources), 'sources', Counter(s['role'] for s in sources), len(anecdotes), 'anecdotes', len(evidence), 'evidence', len(rights), 'rights')
for a, b in bounds:
    ns = [s['id'] for s in sources if a in s['phases']]; na = [x['id'] for x in anecdotes if a in x['phases']]
    print(a, 'sources', len(ns), 'anecdotes', na)
