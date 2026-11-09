# 万次郎 Focus 新装版 設計 v0.1（2026-11-09）

- 作業ツリー：`C:\GitHub\_worktrees\manjiro-focus-shell`（branch `feature/manjiro-focus-shell`, origin/main 3696b6f 起点, 上流なし）
- 清水さんと決めたこと（2026-11-09）
  1. **新装版**：`manjiro/focusShell.html` を新しく作る。公開中の `sandbox/index.html` と北斎の `hokusai/focusShell.html` は**変えない**。
  2. **main 起点の新ブランチ**（上記）。人物地球（`person/`、未公開の feature/person-focus-base）とは URL の年・人物 ID の受け渡しで疎につなぐ。
  3. 月ごとの位置は**公開資料で確かめる**（強い単独の調査 → claude.auditor → Codex 監査）。無い月は推測し印を付ける。
  4. 人物地球との連動は**構造と片道の入口**（人物 ID 対応表・年の受け渡し・万次郎版から人物地球へのリンク）。人物地球側の入口は次回。

## 1. ファイル

| ファイル | 役割 | 担当 |
|---|---|---|
| `manjiro/focusShell.html` | 画面（北斎 focusShell の文法：フルスクリーン地球儀＋浮遊パネル＋中央下タイムライン） | developer |
| `manjiro/track_engine.js` | 航路の時刻づけと「時刻 t までに描く線・船の位置」の計算（画面に依存しない純粋な関数） | lead（Claude 本体） |
| `data/manjiro_track.js` | 航海ごとの日付アンカー（出典・確かさつき）と補間の約束 | lead（調査の結果から） |
| `data/person_bridge.js` | 人物 ID 対応表（Focus の人物 ↔ 人物地球の基本人物 ID ↔ Wikidata）と、人物地球への URL を作る関数 | lead |
| 既存 `data/events.js`・`data/persons.js` | そのまま読む（**変えない**） | — |

## 2. 時間の持ち方

- `State.t` ＝ **小数の年**（月の初め＝ `year + (month-1)/12`）。カーソルは月にスナップ。表示は「1841年6月」。
- `State.timeViewport = {from,to}`（小数年）。北斎と同じく **timeCursor ≠ viewport ≠ camera**。年送り・再生でカメラは動かさない。
- 範囲 1820–1900。初期表示 1838–1854（漂流〜帰国が見える）、カーソル 1841年1月。
- **＋／−**：カーソルを中心に幅を 0.6 倍／1/0.6 倍。最小の幅 **1 年**（月が12個見える）、最大 80 年。
- 目盛り：幅 > 40 年→10 年、> 12 年→5 年、> 4 年→1 年、それ以下→年＋**月の目盛り**（1〜12、ラベルは幅に応じ間引く）。
- **‹ ›**：1 か月送り。**▶**：再生（1 か月ずつ進む、約 0.35 秒/月、航海のない年は 1 年ずつ飛ばしてよい）。もう一度で停止。
- ドラッグ：カーソル付近＝カーソル移動、背景＝年代パン（北斎と同じ）。

## 3. 航路の描き方（月ごとに伸びる）

- `track_engine.js` の API（developer はこれだけを使う）：
  - `buildTracks(events, voyageTimings)` → `tracks[]`。各 track：`{ key, chapterId, label, ship, points:[{lat,lng,t,label,routeStatus,timing,anchor}], tStart, tEnd }`
    - `routeStatus`：events.js の来歴（`documented` 実線／`source_traced`・`estimated` 淡い破線／`control` は描かない点）＝**どこを通ったか**の確かさ。
    - `timing`：`'anchor'`（日付の記録あり）／`'interpolated'`（アンカー間を距離で割り振った推測）＝**いつそこにいたか**の確かさ。二つの確かさは混ぜない。
  - `trackAt(track, t)` → `{ state:'before'|'sailing'|'after', path:[{lat,lng,routeStatus}], head:{lat,lng,timing,prev,next} | null }`
    - `path` は t までに通った部分（最後の点は区間の途中＝補間位置）。
  - `monthlyPositions(track)` → `[{ym:'1841-06', lat,lng, timing, nearestAnchor, sources}]`（「月ごとの位置」一覧・監査用）。
  - `timingSourceText(track, head)` → 船の位置のカードに出す文（「1842年3月 グアム寄港（記録：…）」または「推測：A（1842年3月 記録）と B（1842年8月 記録）の間を距離で割り振った位置」）。
- 画面：
  - 航海中の track：`path` を描き、先頭に**船の印**（記録の月＝塗りの丸、推測の月＝中抜きの丸＋「推測」の小札）。
  - 終わった track：全体を描く（章を選んでいる時は北斎・万次郎版と同じく前景/背景の明るさ）。
  - まだ始まっていない track：描かない。
  - 線の種類（実線/破線）＝ `routeStatus`。推測の時刻は線の種類でなく**船の印と札**で示す（線の種類を二重の意味にしない）。
- タイムライン：航海の帯（tStart〜tEnd）を細い帯で出し、アンカーの月に小さい点（記録＝塗り、推測しかない＝無し）。

## 4. 画面の構成（北斎 focusShell の文法を流用）

- 上中央タイトル「中浜万次郎 / HISTORY OS ・ FOCUS PERSON」
- 左上 WORLD EVENTS（events.js の `type:'world'`、今の年に近いもの）
- 右 FOCUS PERSON：肖像（`assets/portraits/` にあるもの）・名前・生没年・**今の場所／今の船**（track の head から）・LIFE（events.js の `type:'person'` の年譜、選ぶと年へ移動＋カード。カメラは動かさない）
- 右下 P-LINK（`data/persons.js`）：選ぶとタイムラインに生涯バー＋カード。カードに「人物地球で同じ年を見る ↗」（`person_bridge.js` に対応がある人だけ）。
- 右上：CHAPTER（全体／DRIFT／HOWLAND／FRANKLIN／GOLD RUSH／RETURN／OPENING／KANRIN／OGASAWARA／LATER YEARS）・「航路について」（推測の方法と出典一覧＋月ごとの位置の表）
- 中央下：タイムライン（2 章）
- 凡例：実線＝通ったことが記録にある航路／破線＝推定の航路／塗りの船＝その月の位置が記録にある／中抜きの船＝その月の位置は推測
- スマホ（≤640px）：今回は**崩れない最低限**（パネルを畳む・タイムラインを全幅）。本格対応は次回。

## 5. 人物地球との連動（構造と片道の入口）

- `data/person_bridge.js`
  - `personBridge`：`{ focusId, baseId|null, qid|null, note }`。focusId＝`data/persons.js` の id（＋本人 `manjiro`）。baseId＝人物地球の基本人物 ID（`data/base_persons.js`、feature/person-focus-base）。
    - 確認済み（2026-11-09、base_persons.js で名前と QID を照合）：katsu=b0431（Q700470）、ryoma=b0446（Q378450）、nariakira=b0417（Q1143856）。
    - 基本人物にいない：manjiro・whitfield・perry・yodo（baseId=null。QID は未照合なので null）。
  - `personGlobeHref(baseId, t)` → `../person/?p=<baseId>&y=<年>`。年は整数（人物地球は年単位）。
  - `PERSON_GLOBE_PATH = '../person/'`。**main にはまだ person/ が無い**ので、画面は起動時に `fetch(PERSON_GLOBE_PATH+'index.html',{method:'HEAD'})` で確かめ、無ければリンクを「人物地球（未公開）」の淡い表示にして押せないようにする。
  - ローカルの試験用に `?pg=http://127.0.0.1:8192/person/` を受ける（**127.0.0.1 / localhost の時だけ**受け付ける）。
- 受け渡すのは「人物 ID」と「年」だけ。データは混ぜない（人物年鑑由来のデータを main に入れない）。

## 6. してはいけないこと

- `sandbox/`・`hokusai/`・`data/events.js`・`data/persons.js` を変えない。
- 推測を記録のように見せない。架空の日付を作らない。
- commit・push は清水さんの段階承認で（developer はしない）。
