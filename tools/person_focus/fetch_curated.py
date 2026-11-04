"""手で選ぶ交点（curated_moments.json）の年・場所・人物を Wikidata から読む。curated_moments.wd.json を書く。

Usage: python -X utf8 tools/person_focus/fetch_curated.py
- 年：項目の P585（時点）→ P580（開始）→ P575（発見）→ P577（刊行）→ P571（制作・成立）。who.self の項目は P570（死）。
  年まで分からない（精度 9 未満）ものは year=null にする（build 側で誤りとして止める）。
- 人物：who.base＝基本人物の番号／who.prop＝項目の P50・P170 から読む／who.self＝項目が人物／who.none＝人物なし（世界の出来事）。
  読んだ人物の QID が基本人物にいれば、その番号に結ぶ（QID の一致。名前では結ばない）。
- 場所：作品は取らない（P276 は今ある場所）。出来事は P276 がちょうど 1 つならその座標、無ければ項目の P625。複数・不明なら null（推さない）。
- 表示名：title（手書き可。年・人物・場所は書かない）。無ければ項目のラベル。
"""
import json, re, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
PTW = Path('C:/GitHub/person-timeline-world-work')
sys.path.insert(0, str(PTW / 'experiment_network_009'))
import expand_seed as es   # 人物年鑑の作業で使ってきた、Wikidata に丁寧に問い合わせる道具

API = 'https://www.wikidata.org/w/api.php'
YEAR_PROPS = ['P585', 'P580', 'P575', 'P577', 'P571']


def ents(ids):
    ids = sorted(set(i for i in ids if i))
    out = {}
    for k in range(0, len(ids), 50):
        d = es.get(API, {'action': 'wbgetentities', 'ids': '|'.join(ids[k:k + 50]), 'props': 'claims|labels', 'languages': 'ja|en|mul', 'format': 'json'})
        for q, e in d.get('entities', {}).items():
            out[q] = e
            if e.get('redirects'):
                out[e['redirects']['from']] = e
    return out


def vals(e, pid):
    return [(c.get('mainsnak', {}).get('datavalue') or {}).get('value') for c in e.get('claims', {}).get(pid, []) if c.get('rank') != 'deprecated']


def lab(e):
    L = e.get('labels', {})
    return (L.get('ja') or {}).get('value'), (L.get('en') or {}).get('value') or (L.get('mul') or {}).get('value')


def year(v):
    m = re.match(r'([+-])(\d+)-(\d+)-(\d+)', (v or {}).get('time', '')) if isinstance(v, dict) else None
    if not m:
        return None
    return {'year': int(m.group(2)) * (-1 if m.group(1) == '-' else 1), 'prec': v.get('precision'), 'date': f'{m.group(3)}-{m.group(4)}'}


def main():
    src = json.loads((HERE / 'curated_moments.json').read_text(encoding='utf-8'))
    base = {p['qid']: p['id'] for p in json.loads((PTW / 'base_timeline' / 'timeline_data.json').read_text(encoding='utf-8'))['persons'] if p.get('qid')}
    base_rev = {v: k for k, v in base.items()}
    E = ents([m['item'] for m in src['moments']])
    who_q = {}
    for m in src['moments']:
        w, e = m['who'], E.get(m['item'], {})
        if 'prop' in w:
            v = next((x for x in vals(e, w['prop']) if isinstance(x, dict) and x.get('id')), None)
            who_q[m['item']] = v and v['id']
        elif w.get('self'):
            who_q[m['item']] = e.get('id', m['item'])
        elif 'base' in w:
            who_q[m['item']] = base_rev.get(w['base'])
    P = ents(list(who_q.values()))
    out = []
    for m in src['moments']:
        e = E.get(m['item'], {})
        props = ['P570'] if m['who'].get('self') else YEAR_PROPS
        by, t = None, None
        for p in props:
            t = next((year(v) for v in vals(e, p) if year(v)), None)
            if t:
                by = p; break
        ja, en = lab(e)
        place = None
        # 作品（who.prop）の P276 は「今ある場所」（例：ゴヤの絵＝プラド美術館）で、その年の出来事の場所ではない → 場所を取らない
        is_work = 'prop' in m['who']
        pls = [] if is_work else [v for v in vals(e, 'P276') if isinstance(v, dict) and v.get('id')]
        cand = pls[0]['id'] if len(pls) == 1 else None
        if cand:
            pe = ents([cand]).get(cand, {})
            c = next((v for v in vals(pe, 'P625') if isinstance(v, dict)), None)
            if c:
                pja, pen = lab(pe)
                place = {'q': cand, 'name': pja or pen, 'en': pen or '', 'lat': round(c['latitude'], 4), 'lng': round(c['longitude'], 4)}
        if place is None and not m['who'].get('self') and not is_work:
            c = next((v for v in vals(e, 'P625') if isinstance(v, dict)), None)
            if c:
                place = {'q': m['item'], 'name': ja or en, 'en': en or '', 'lat': round(c['latitude'], 4), 'lng': round(c['longitude'], 4)}
        wq = who_q.get(m['item'])
        wja, wen = lab(P.get(wq, {})) if wq else (None, None)
        who = None if m['who'].get('none') else {'q': wq, 'ja': wja or wen, 'en': wen or '', 'base': base.get(wq)}
        out.append({**m, 'ja': m.get('title') or ja, 'wd_label': ja or en, 'en': en or '',
                    'year': t and t['year'], 'prec': t and t['prec'], 'date': t and t['date'], 'yby': by, 'place': place, 'who': who})
        print(f"{m['item']:10} {t and t['year']} {t and t['date']} p{t and t['prec']} {by:5} | {(who or {}).get('ja')} {(who or {}).get('base')} | {place and place['name']} | {(ja or en)[:24]}")
    (HERE / 'curated_moments.wd.json').write_text(json.dumps({'fetched': __import__('datetime').date.today().isoformat(), 'moments': out, 'rejected': src.get('rejected', [])}, ensure_ascii=False, indent=1), encoding='utf-8', newline='\n')


if __name__ == '__main__':
    main()
