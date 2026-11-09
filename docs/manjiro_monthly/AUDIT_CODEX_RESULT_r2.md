<!-- codex exec --ephemeral -s read-only（gpt-6-luna）, 2026-11-09 再監査。~/.codex/config.toml の SHA-256 は送る前後で不変（a301ee9a…6930）。親が -o の出力をそのまま写した。 -->
[STUDIO_RESULT]

**CASE:** MANJIRO-FOCUS-SHELL-20261109  
**TASK:** AUDIT-r2  
**FROM:** codex.auditor  
**SOURCE_ACCESS:** 作業ツリー、対応表、前回の Codex 監査結果、指定コードを読み取り専用で確認。Claude 監査結果は未読。ネット検索を実施。Archive.org の Wood 原本は閲覧できず、The Friend の項目ページと紙面 PDF のリンクは確認したが、PDF 本文は取得できなかった。土佐清水市の一般公開ページは確認できたが、指定された市 PDF の該当記述は照合できなかった。  
**CONDITION:** 読み取り専用監査。史料の本文照合には未確認部分が残る。  
**OBSERVATION:** **PARTIALLY CONFIRMED**

**EVIDENCE:**

1. **前回指摘 1：直った（ただし境界条件の新しい指摘あり） — DIRECT**  
   [track_engine.js](/C:/GitHub/_worktrees/manjiro-focus-shell/manjiro/track_engine.js:233) の `representativeT` は月内の強いアンカー日を代表時刻にし、`trackAt` は記録地点にいる時だけ `head.timing = 'anchor'` を返します。`monthlyPositions` と船カードも `tEff` と `head.anchor` を使い、月内アンカーの位置を月初の推測位置に「記録」と付ける問題は通常の航海区間では解消しています。[focusShell.html](/C:/GitHub/_worktrees/manjiro-focus-shell/manjiro/focusShell.html:682) のカードおよび [同ファイル](/C:/GitHub/_worktrees/manjiro-focus-shell/manjiro/focusShell.html:935) の月別表も、記録時刻と位置を参照しています。

2. **前回指摘 2：直った — DIRECT**  
   [manjiro_track.js](/C:/GitHub/_worktrees/manjiro-focus-shell/data/manjiro_track.js:67) の Manila 出港は `1847-12-16`、`departStatus: 'last_seen'` です。`trackAt` は `recorded` と `last_seen` のみ滞在扱いにし、出港日は「その日まで在港の記録」と区別して説明します。後続の「1848年1月19日より前に出港」という記述も、12月16日を確定出港日とするものではありません。

3. **新しい指摘 — 中：月初の前に始まる航海の境界で、後日の記録地点へ月位置を先取りする — DIRECT**  
   [track_engine.js](/C:/GitHub/_worktrees/manjiro-focus-shell/manjiro/track_engine.js:236) の `representativeT` は、月内アンカーが `tStart` より後かを確認せずアンカー時刻へ移動します。たとえば航海が月の半ばに始まり、同じ月の後半にアンカーがあると、月初時刻の照会でもその後半の記録地点へ進みます。`trackAt` はその時刻を正しくアンカーとして扱うため、月別表とカードがその未来位置を「記録」と表示し得ます。`representativeT` で `t >= track.tStart` を満たす場合だけアンカー日に移すか、月初時点が `before` なら月位置を出さない扱いが必要です。**公開前に修正推奨。**

4. **新しい指摘 — 低：アンカーがない航海末尾の補外点が、最終月の航海位置として見える — INFERENCE**  
   [monthlyPositions](/C:/GitHub/_worktrees/manjiro-focus-shell/manjiro/track_engine.js:267) は月時刻を `t1 - 1e-6` に丸め、`trackAt` が航海終端より前の補間位置を返す場合、その点を月行に採用します。最終点に強いアンカーがない航海では、最終月の点がアンカーより先に速度補外された終点位置付近に見えることがあります。位置の確度ラベルは推測ですが、最終月にどこまで航海したかを示す記録と受け取られる余地があります。表示上で航海終了月の補外を明示するか、補外位置の時刻を区別する案。**公開前の修正優先度は低い。**

5. **境界・補間・弱い手がかり — DIRECT**  
   `MAX_KM_PER_DAY` を超える区間では弱い `events.js` アンカーを最大3回の走査で除外し、強いアンカー同士の不整合は警告として残します。[同ファイル](/C:/GitHub/_worktrees/manjiro-focus-shell/manjiro/track_engine.js:158) では同一地点に複数のアンカーがある場合に `anchorAt[i]` が後から来たものに置き換わります。同じ航海内の同じ月に複数の強いアンカーがあれば、月位置の代表時刻は最初の1件ですが、データ配列順に依存します。空白区間は距離分に見合う航走時間を与え、残りを空白に配分しています（[同ファイル](/C:/GitHub/_worktrees/manjiro-focus-shell/manjiro/track_engine.js:199)）。推測位置は補間表示ですが、速度と空白内の時期は依然モデル由来です。`stay` は `recorded`／`last_seen` に限定されています。

6. **画面とエスケープ — DIRECT**  
   [focusShell.html](/C:/GitHub/_worktrees/manjiro-focus-shell/manjiro/focusShell.html:422) の出典リンクは URL を `esc` し、表示用文字列も主要なカード・表でエスケープしています。`head.secondary` はカード、現在の船表示、月別表のラベルに渡されています。`tEff` とアンカーの参照も整合しています。確認した対象箇所で、今回の変更により新たに発生した未エスケープのデータ表示経路は見つかりませんでした。

7. **史料照合 — HOLD**  
   The Friend の 1850-10-15 項目ページで日付と紙面 PDF の存在は確認できましたが、本文を取得できず、E. Warwick と万次郎の関係やホノルル在留の文言は未確認です。[Hawaiian Mission Houses の項目ページ](https://hmha.missionhouses.org/items/show/1133)。Wood 原本の Archive.org ページも取得できませんでした。土佐清水市の一般ページは咸臨丸乗船などを記載しますが、指定 PDF の日付・出港地の根拠にはなりません。[土佐清水市の歴史ページ](https://www.city.tosashimizu.kochi.jp/kanko/g01_jyonman03.html)。したがって、ホノルル 1850 の推論化、F8 の改元日・到着日、咸臨丸出港地のデータ変更は史料本文との照合を **HOLD** とします。ネット検索では咸臨丸の到着日 1860-03-17 を示す資料は見つかりましたが、依頼された一次資料に基づく確認とは扱いません。[国立国会図書館レファレンス](https://crd.ndl.go.jp/reference/entry/reference/show?asc=desc&dtltbs=1&id=1000028987&ldtl=1&mcmd=25&page=ref_view&pg=19&st=update&tcd=2110029&tcd_lk=1)。

**UNKNOWN:**

- `representativeT` の月初境界ケースを実データで再現するかは、表示を起動して検証していません。コード上の条件不足は確認済みです。
- `sameMonth` は定義されていますが、今回確認した該当経路では使用されていません。配列順に依存する同一地点・同月アンカーが実データに存在するかは未確認です。
- 史料本文の照合と `DIRECT` 表示の裏付けは引き続き保留です۔