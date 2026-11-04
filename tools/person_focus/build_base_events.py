"""「同じ年の出来事」の層のデータ data/base_events.js を作って検査する（2026-11-04）。

読むもの: person-timeline-world-work/base_persons_001/wd_events.json（人物の P793 出来事・P800 作品, Wikidata CC0）
          tools/person_focus/curated_moments.wd.json（手で選ぶ交点。年・場所は Wikidata から読んだもの）
          person-timeline-world-work/base_timeline/timeline_data.json（QID → 内部番号）
決まり（docs/PERSON_FOCUS_BASE_DESIGN_v0.1.md §7）:
  - 年まで分かるもの（精度 9 以上）だけを入れる。十年・世紀単位は「同じ年」と言えないので入れない。
  - 年の出どころを残す（k: event=出来事 / pub=作品の刊行年 P577 / made=作品の制作年 P571 / curated=手で選ぶ交点）。
"""
import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
PTW = Path('C:/GitHub/person-timeline-world-work')
OUT = ROOT / 'data' / 'base_events.js'


def kind(v):
    if v['kind'] == 'event':
        return 'event'
    return {'P577': 'pub', 'P571': 'made'}.get(v['yby'], 'made')


def main():
    tl = json.loads((PTW / 'base_timeline' / 'timeline_data.json').read_text(encoding='utf-8'))['persons']
    q2id = {p['qid']: p['id'] for p in tl if p.get('qid')}
    life = {p['id']: (p['born'], p['died']) for p in tl}
    wd = json.loads((PTW / 'base_persons_001' / 'wd_events.json').read_text(encoding='utf-8'))
    cur = json.loads((HERE / 'curated_moments.wd.json').read_text(encoding='utf-8'))
    out, dropped, errors = {}, {'no_year': 0, 'coarse': 0, 'dup': 0, 'no_label': 0}, []

    for q, vs in wd['people'].items():
        pid = q2id.get(q)
        if not pid:
            errors.append(f'{q} が基本人物にいない'); continue
        seen = set()
        for v in vs:
            if v['year'] is None:
                dropped['no_year'] += 1; continue
            if (v['prec'] or 0) < 9:
                dropped['coarse'] += 1; continue
            if not (v['ja'] or v['en']):   # 名前の無い項目を番号のまま出さない
                dropped['no_label'] += 1; continue
            key = (v['item'], v['year'])
            if key in seen:
                dropped['dup'] += 1; continue
            seen.add(key)
            out.setdefault(pid, []).append({'y': v['year'], 'k': kind(v), 'ja': v['ja'] or v['en'], 'en': v['en'] or '',
                                            'q': v['item'], 'pl': v['place']})
    for m in cur['moments']:
        if m['year'] is None or (m['prec'] or 0) < 9:
            errors.append(f'手で選ぶ交点 {m["item"]} の年が Wikidata で年まで分からない'); continue
        who = m.get('who')
        if who and who.get('base') and who['base'] not in life:
            errors.append(f'手で選ぶ交点の人物 {who["base"]} がいない'); continue
        if who and not who.get('base') and not who.get('q'):
            errors.append(f'手で選ぶ交点 {m["item"]} の人物を Wikidata から読めない'); continue
        # 基本人物に結べるものはその人の下に、結べないもの（基本人物の外の人・人物なしの出来事）は "_world" に置く
        key = who['base'] if who and who.get('base') else '_world'
        out.setdefault(key, []).append({'y': m['year'], 'k': 'curated', 'ja': m['ja'], 'en': m['en'] or '', 'q': m['item'],
                                        'pl': m['place'], 'why': m['why'], 'wd': m['wd_label'], 'by': m['chosen_by'], 'date': m['date'],
                                        'who': None if not who else {'q': who['q'], 'ja': who['ja'], 'en': who['en']}})
    for pid in out:
        out[pid].sort(key=lambda e: e['y'])
    n = sum(len(v) for v in out.values())
    post = sum(1 for pid, vs in out.items() if pid in life for e in vs if life[pid][1] is not None and e['y'] > life[pid][1])
    cur_n = sum(1 for vs in out.values() for e in vs if e['k'] == 'curated')
    head = ('// data/base_events.js — 「同じ年の出来事」の層。自動生成：tools/person_focus/build_base_events.py。手で直さない。\n'
            '// 出典: Wikidata（人物の P793 主な出来事・P800 主な作品と、その年 P585/P580/P577/P571。CC0）＋手で選ぶ交点（curated_moments.json, 年は Wikidata）。\n'
            '// k: event=出来事 / pub=作品の刊行年 / made=作品の制作年 / curated=手で選ぶ交点。年まで分かるものだけ（十年・世紀単位は入れない）。\n'
            f'// 取得日: 人物 {wd.get("fetched")} / 手で選ぶ交点 {cur.get("fetched")}\n')
    OUT.write_text(head + 'export const baseEvents = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n', encoding='utf-8', newline='\n')
    print(f'手で選ぶ交点 {cur_n} 件（基本人物の外・人物なし {len(out.get("_world", []))} 件）')
    print(f'{len(out)} 人 / {n} 件（没後の刊行など {post} 件）/ 除いた: 年なし {dropped["no_year"]}・年が粗い {dropped["coarse"]}・重複 {dropped["dup"]}・名前なし {dropped["no_label"]} / {OUT.stat().st_size // 1024} KB')
    if errors:
        print('誤り:', *errors, sep='\n - '); return 1
    print('検査 OK'); return 0


if __name__ == '__main__':
    sys.exit(main())
