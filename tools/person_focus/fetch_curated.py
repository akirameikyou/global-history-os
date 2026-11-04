"""手で選ぶ交点（curated_moments.json）の年・場所・名前を Wikidata から読む。curated_moments.wd.json を書く。

Usage: python -X utf8 tools/person_focus/fetch_curated.py
表示名＝curated の title（手書き可。年と場所は書かない）、無ければ項目のラベル。
年＝項目の P585（時点）、無ければ P580（開始）。場所＝P276 の座標、無ければ項目の P625。読めなければ null（推さない）。
"""
import json, re, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, 'C:/GitHub/person-timeline-world-work/experiment_network_009')
import expand_seed as es   # 人物年鑑の作業で使ってきた、Wikidata に丁寧に問い合わせる道具

API = 'https://www.wikidata.org/w/api.php'


def ents(ids):
    d = es.get(API, {'action': 'wbgetentities', 'ids': '|'.join(ids), 'props': 'claims|labels', 'languages': 'ja|en|mul', 'format': 'json'})
    return d.get('entities', {})


def first(e, pid):
    for c in e.get('claims', {}).get(pid, []):
        if c.get('rank') != 'deprecated':
            v = (c.get('mainsnak', {}).get('datavalue') or {}).get('value')
            if v is not None:
                return v
    return None


def lab(e):
    L = e.get('labels', {})
    return (L.get('ja') or {}).get('value'), (L.get('en') or {}).get('value') or (L.get('mul') or {}).get('value')


def year(v):
    m = re.match(r'([+-])(\d+)-', (v or {}).get('time', '')) if isinstance(v, dict) else None
    return (int(m.group(2)) * (-1 if m.group(1) == '-' else 1), v.get('precision')) if m else (None, None)


def main():
    src = json.loads((HERE / 'curated_moments.json').read_text(encoding='utf-8'))
    E = ents([m['item'] for m in src['moments']])
    out = []
    for m in src['moments']:
        e = E.get(m['item'], {})
        by = 'P585' if first(e, 'P585') else 'P580' if first(e, 'P580') else None
        y, p = year(first(e, by)) if by else (None, None)
        ja, en = lab(e)
        place = None
        pls = [c for c in e.get('claims', {}).get('P276', []) if c.get('rank') != 'deprecated']
        pl = first(e, 'P276') if len(pls) == 1 else None   # 場所が複数ある項目（航海など）は 1 点に置かない
        if isinstance(pl, dict) and pl.get('id'):
            pe = ents([pl['id']]).get(pl['id'], {})
            c = first(pe, 'P625')
            if isinstance(c, dict):
                pja, pen = lab(pe)
                place = {'q': pl['id'], 'name': pja or pen, 'en': pen or '', 'lat': round(c['latitude'], 4), 'lng': round(c['longitude'], 4)}
        if place is None and isinstance(first(e, 'P625'), dict):
            c = first(e, 'P625')
            place = {'q': m['item'], 'name': ja or en, 'en': en or '', 'lat': round(c['latitude'], 4), 'lng': round(c['longitude'], 4)}
        out.append({**m, 'ja': m.get('title') or ja, 'wd_label': ja or en, 'en': en, 'year': y, 'prec': p, 'yby': by, 'place': place})
        print(m['item'], ja or en, y, p, by, place and place['name'])
    (HERE / 'curated_moments.wd.json').write_text(json.dumps({'fetched': __import__('datetime').date.today().isoformat(), 'moments': out}, ensure_ascii=False, indent=1), encoding='utf-8', newline='\n')


if __name__ == '__main__':
    main()
