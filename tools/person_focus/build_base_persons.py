"""History OS 基本型「人物フォーカス」の人物データ data/base_persons.js を作って検査する（2026-11-04）。

読むもの（書き換えない。人物年鑑の作業フォルダ＝private）:
  C:/GitHub/person-timeline-world-work/base_timeline/timeline_data.json   基本人物 644 人（年は Wikidata の推奨の値と精度）
  C:/GitHub/person-timeline-world-work/base_persons_001/wd_places.json    生まれた所・亡くなった所・説明（Wikidata, CC0）
書くもの: ../../data/base_persons.js
設計: docs/PERSON_FOCUS_BASE_DESIGN_v0.1.md。AI が書いた紹介文（why）や AI の申告は入れない。誤りがあれば終了コード 1。
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PTW = Path('C:/GitHub/person-timeline-world-work')
TL = PTW / 'base_timeline' / 'timeline_data.json'
PL = PTW / 'base_persons_001' / 'wd_places.json'
OUT = ROOT / 'data' / 'base_persons.js'


def main():
    tl = json.loads(TL.read_text(encoding='utf-8'))
    wp = json.loads(PL.read_text(encoding='utf-8'))
    people, places = wp['people'], wp['places']
    errors, out = [], []

    def place(qid):
        if not qid:
            return None
        p = places.get(qid) or {}
        if p.get('lat') is None:
            return None
        return {'q': qid, 'name': p.get('ja') or p.get('en') or qid, 'en': p.get('en') or '', 'lat': p['lat'], 'lng': p['lng']}

    for p in tl['persons']:
        w = people.get(p['qid']) if p.get('qid') else None
        if p.get('qid') and w is None:
            errors.append(f'{p["id"]} の場所データが無い')
        w = w or {}
        out.append({'id': p['id'], 'ja': p['ja'], 'en': p['en'], 'qid': p.get('qid'),
                    'born': p['born'], 'died': p['died'], 'bp': p.get('born_prec'), 'dp': p.get('died_prec'),
                    'region': p['region'], 'domain': p['domain'], 'notHuman': bool(p.get('not_human_in_wd')),
                    'desc': w.get('desc_ja') or w.get('desc_en'), 'bpl': place(w.get('birth_place')), 'dpl': place(w.get('death_place'))})

    ids = [p['id'] for p in out]
    if len(out) != 644 or len(set(ids)) != len(ids):
        errors.append(f'人数か番号がおかしい: {len(out)} / 重複 {len(ids) - len(set(ids))}')
    for p in out:
        for k in ('bpl', 'dpl'):
            v = p[k]
            if v and not (-90 <= v['lat'] <= 90 and -180 <= v['lng'] <= 180):
                errors.append(f'{p["id"]} {k} の座標が範囲外')
    hk = next(p for p in out if p['id'] == 'b0384')
    if hk['qid'] != 'Q5586' or (hk['born'], hk['died']) != (1760, 1849):
        errors.append('北斎の番号か年が合わない')

    head = ('// data/base_persons.js — 基本人物 v0.1（644 人）。自動生成：tools/person_focus/build_base_persons.py。手で直さない。\n'
            '// 年＝Wikidata の推奨の値と精度（bp/dp: 9 以上=年, 8=十年, 7=世紀, 6 以下=千年）。場所＝Wikidata P19/P20/P625（CC0）。\n'
            '// desc＝Wikidata の説明（日本語、無ければ英語）。人物の選定は人物年鑑の作業（AI 3 者の候補の突き合わせ）による。\n'
            f'// 出典の取得日: 場所 {wp.get("fetched")}。設計: docs/PERSON_FOCUS_BASE_DESIGN_v0.1.md\n')
    body = 'export const basePersons = [\n' + ',\n'.join(json.dumps(p, ensure_ascii=False, separators=(',', ':')) for p in out) + '\n];\n'
    OUT.write_text(head + body, encoding='utf-8', newline='\n')

    n = lambda k: sum(1 for p in out if p[k])
    print(f'{len(out)} 人 / 生まれた所の点 {n("bpl")} / 亡くなった所の点 {n("dpl")} / 説明 {n("desc")} / {OUT.stat().st_size // 1024} KB')
    if errors:
        print('誤り:', *errors, sep='\n - ')
        return 1
    print('検査 OK')
    return 0


if __name__ == '__main__':
    sys.exit(main())
