# 監査 1 回目への対応（2026-11-09, 親＝Claude Code）

- 監査：claude.auditor（FAIL）と codex.auditor（PARTIALLY CONFIRMED）。結果は `AUDIT_CLAUDE_RESULT.md`・`AUDIT_CODEX_RESULT.md`。
- 二つの監査は互いの回答を読まずに、同じ問題（記録のある月を、月の初めの推測の位置にまで付ける）を独立に指摘した（Claude H1 ＝ Codex 1、Claude M2 ＝ Codex 2）。
- `data/events.js` は今回も変えていない（食い違いは conflicts に記し、直すかは清水さんが決める）。

| 指摘 | 直したこと | ファイル |
|---|---|---|
| H1・Codex 1 推測の位置に「記録」が付く | 月の代表の時刻を、その月に記録のアンカーがあればその日付にする（`representativeT`）。`timing:'anchor'` は船が記録の地点にいる時だけ（記録の日付ちょうど、または記録の滞在中）。月が同じだけでは記録にしない。カード・表に「◯月◯日の位置」を出す | track_engine.js（trackAt・monthlyPositions・timingSourceText）、focusShell.html |
| H2 E. Warwick 号との結びつきは推論 | ホノルルのアンカーを status estimated・evidence INFERENCE に。確かなのは「11月1日号の記事の時点でホノルルにいた」ことと明記。SF 出航も推論と明記。F7 を書き直し。船の名を「未確認」に | manjiro_track.js |
| H3 F8 の改元日の暦の混同 | 「安政7年3月18日＝1860年4月8日」に。出典を ja.wikipedia「万延」に替え、品川／浦賀の点も F8 に足した | manjiro_track.js |
| H4 咸臨丸の出港地と出典の付け違い | ラベルを「日本を出港（2月10日）」に。日付は TOSA35（同資料は横浜港と書く）、浦賀は ja.wikipedia（REPORTED）と注記 | manjiro_track.js |
| H5 弱いアンカーが event の最初の点に付く | events.js の年月は、その event の出来事の場所（ev.lat/lng）に最も近い点に置く。前後のアンカーとの間で 1日 278 km（150 海里）を超える弱いアンカーは捨てる | track_engine.js |
| H6 1842-01-03 の位置のずれ | アンカーから外し、observation（◇）だけに | manjiro_track.js |
| M1 二次資料だけの記録も同じ札 | `head.secondary`。札を「記録（二次資料）」、船の印にも「二次資料」の小札 | track_engine.js、focusShell.html |
| M2・Codex 2 予定・推測の出港日 | `departStatus`（recorded／last_seen／planned／reported／estimated）。滞在を記録とするのは recorded・last_seen だけ。グアム 11/7＝planned、マニラは 12/16＝last_seen（1848-01 を確定日として使わない）、ホノルル 1848＝「ごろ」で estimated | manjiro_track.js、track_engine.js |
| M3 陸の空白にも距離比例で時間 | 空白を含む区間は、航走に回航の目安の時間だけを渡し、残りを空白に吸わせる | track_engine.js |
| M4 年だけのデータ・否定した手がかり | 「1843年（月は不明）」と表示。`dropWeak` で F5 の 1843 グアムを手がかりから外す | track_engine.js、focusShell.html、manjiro_track.js |
| L1 12回会合は言い過ぎ | 「日誌に12回記録（多くは見かけた、訪問2回・交換1回）」 | manjiro_track.js |
| L2 160 km を平均と書いた | 「回航の目安（推測）」と書き、出典の中央値・平均（126 km）・上位10%を併記 | manjiro_track.js、focusShell.html、track_engine.js |
| L3 1842-10-24 の記録 | ハワイのアンカーの注に入れた（位置の記録が無いので点にはしない） | manjiro_track.js |
| L4 F2 の源 | en.wikipedia「1847年10月ホノルル」を年の取り違えの源の候補として F2 に（REPORTED） | manjiro_track.js |
| L5 140 → 130 海里 | F5 を「約130海里」に | manjiro_track.js |
| L6 出典の付け方 | 1850-05 の Hosokawa 帰属を外す、1851-02-02 の出典から 1851-01-09 号を外して注へ | manjiro_track.js |
| L7 凡例 | 「破線＝推定・確かさ未指定の航路」 | focusShell.html |
| （Developer の指摘）日付の書式の混在 | `dateJa` で「1847年11月7日」に統一 | track_engine.js |
| （試験で見つけた）`?pg` の別ポートが CORS で常に「未公開」 | 試験用の別オリジンだけ no-cors で応答の有無を見る | person_bridge.js |

## 直した後の確認（親、ブラウザ）

- 監査が挙げた月：1846-06 ファイアル●（滞在）、1847-03 グアム●、1847-10 グアム●、1847-11・12 マニラ●、1848-01 推測○、1848-10 ホノルル●、1849-09 帰着●、1843-05 帰着●、1841-06 鳥島◎（二次資料）、1842-01 推測○、1850-10 推測○、1851-02 琉球沖◎、1851-03 空白、1860-03・04 SF●、1860-06 浦賀●。
- 新しいタブで読み込み、30 か月送り・「地点を見る」・追跡でエラー 0（404 は人物地球の有無の確認と favicon）。

## 残したこと（未対応）

- L6 の一部：出典の取得時刻を分まで・SHA-256（ROLES_COMMON §7d）は、データの各出典にはまだ書いていない（RESEARCH_RESULT の取得時刻の幅は調査役の申告のまま）。
- L7 の一部：`monthlyPositions` の最初の月で前後のアンカーが同じになる表示（`srcLinks` は http(s) だけをリンクにするよう直した）。
- 一次資料に当たれていないもの（1841-06-27・1850-05・12/17・2/2 など）は HOLD のまま、二次資料の札で出す。

## 再監査（r2）と対応（2026-11-09）

- claude.auditor r2：**PASS WITH NOTES**（H1〜H6・M1〜M4・L1〜L5 は直った。新しい低い指摘 N1〜N5）。結果の要点はこの節、全文は親の会話にある。
- codex.auditor r2：**PARTIALLY CONFIRMED**（前回の 1・2 は直った。新しい中 1・低 1。史料の本文照合はネットで取れず HOLD）。全文は `AUDIT_CODEX_RESULT_r2.md`。

| 指摘 | 対応 |
|---|---|
| Claude N1 最後の月で表と画面が食い違う | monthlyPositions も、その月に記録のアンカーがあれば trackAt(t) をそのまま使う（ゴールドラッシュ 1850-05 が表・画面とも「記録（二次資料）」） |
| Claude N2 COML の出典名「会合」 | 「見かけた・訪問した記録」に |
| Claude N3 浦賀出港の西暦は換算 | 「（西暦1860年2月10日は換算）」と添えた |
| Claude N4 欧州航路の弱いアンカー | 未対応（欧州航路は今回の調査の範囲外。events.js の 1870 年の年月が何を指すかは次回に確かめる） |
| Claude N5 凡例に二次資料の札が無い | 凡例に「二次資料＝記録が二次資料だけ」を足した |
| Codex 新 1（中）月の途中に始まる航海で、同じ月の後の記録へ飛ぶ | 変更なし。飛んだ先の位置も記録の日付どおり（表とカードに「◯月◯日の位置」と出る）で、推測を記録に見せる経路ではない。アンカーは時刻順なので、月の中で最も早い記録が選ばれる |
| Codex 新 2（低）末尾の外挿点 | 変更なし。位置は「推測」の札で出る。外挿の速さは trackMethod.speed に明記 |
| Codex 史料照合 HOLD | claude.auditor が r1 で Wood・The Friend・TOSA35・CoML を DIRECT で照合済み。Codex はネットから本文を取れなかった |

## 画面で見つけたこと（親）

- ウィンドウが隠れた状態で読み込むと、three-globe の isBehindGlobe が内部で落ちることがあった（船の印を地球の準備前に置くため）。印は地球の準備の合図（onGlobeReady）か、描画が進み始めた後に置くように直した。隠れた状態では描画が止まるので、印が出ることは表示した状態で確かめる必要がある（未確認）。

## 追加の依頼（2026-11-09 清水さん）と監査 r3

依頼：再生を遅く・速さを切り替え／右の年譜を年月と連動／W-LINK とガイドは推奨の組（W-LINK＝帯＋地球の淡い印、ガイド＝経緯線・赤道・回帰線・日付変更線、国境は出さない）／「資料がみつかったなら日付より確証の高い方に」／再生中は自転を止める。

- 入れたもの：速さ（ゆっくり1.2秒・ふつう0.65秒・はやい0.3秒/月）、年譜の自動送り、`data/manjiro_wlink.js`（sandbox の worldLinks・WORLD_EXTRA をそのまま写した。文字の値162個が一致＝claude.auditor が機械で照合）、W-LINK の帯と破線の輪の印、ガイド、再生中の自転停止。
- **`data/events.js` を訂正**（公開中の sandbox も使う。sandbox は読み込みと年の移動でエラーなしを確認）：F1（グアム再寄港・マニラを1847年へ、startYear も）、F3（帰着1849年9月23日）、F7（SF→ホノルルを1850年10月・船名を題から外す・年月も推論と注記）、F8（咸臨丸の元号・出港地の揺れ）、デーモン牧師との再会（1860年5月・ホノルル寄港中）。HOLD（F2・F4・F5・F6・G1）は直していない。年譜カードに note（訂正の理由・出典・推論の印）を出すようにした。

監査 r3：
- codex.auditor：PARTIALLY CONFIRMED（F1 の年の推論と F7 の船名が本文で確定の書き方、カードに note が出ない）→ 本文で推論・未確認と書き、カードに note を表示。全文 `AUDIT_CODEX_RESULT_r3.md`。
- claude.auditor：PASS WITH NOTES。M1（品川を出た1月13日は旧暦）・M2（Wood は「その日に港にいた」だけ。入港日・アプラ港・船長交代の時期・「病院」は書いていない）・M3（ホノルル1850年10月も推論、SF乗船は仮定なら9月下旬）・M4（出港地は浦賀／横浜港で揺れる、西暦は換算）・L1（600樽は CoML）・L2（1月19日より前）・L3（routeLabel ELYSIA）・L5（W-LINK 太平洋捕鯨の印が航路と同じ色）→ すべて文・表示で直した（L5 は W-LINK の印を破線の輪に）。L4（年を1847年にしたことで、HOLD の F2「1847年ホノルル」との両立しない形が画面で目立つ）は清水さんへの報告のみ。
- 未決（清水さん）：サンフランシスコで乗り込んだ月を、推論どおり9月にするか、10月のままか。

## 2026-11-10 自動鑑賞・W-LINK 18件と監査 r4

- 入れたもの：自動鑑賞（章ごと・出来事で止まる・前の章の航路は消す・晩年を欧州の前後に分ける・まとめ。章の順は年代順）、手動 ▶ 1か月1.5秒、月の送り `manjiro/play_steps.js` の nextStep（1年送りは年だけ表示・月の途中に出港する航海は翌月へ寄せる）、W-LINK 18件（生まれる前の10件＋スエズ）と persons・category・evidence・sources・dateNote、カードに関わった人（Wikidata・人物地球）と確かさ・出典、タイムラインの下限を W-LINK の最も早い年から。
- 月が止まる不具合：機械試験（手動149歩・自動155歩）で同じ表示・後戻りとも0件。見え方の原因 (A) 1年送りで月の数字が同じまま (B) 月の途中に出港する航海で何も出ない一歩 (C) 滞在で船が動かない（データどおり）。(A)(B) を直した。
- 監査 r4：codex.auditor PASS WITH NOTES（`AUDIT_CODEX_RESULT_r4.md`）、claude.auditor PASS WITH NOTES（`AUDIT_CLAUDE_RESULT_r4.md`）。両方の指摘のうち M1〜M4・L1〜L5・L8（表記）と Codex の4件は文で直した。未対応：L6（人ごとのリンクの年）、L7（欧州の章で年だけの出来事のカードの順）、L8 の CSS、HOLD 3点。

## 2026-11-10 自動鑑賞の追跡・全出来事・フェアヘーブンの章（監査 r5〜r7）

- fdf29dc（W-LINK 3段・左上の枠）、71ddeda（追跡・全69件・年だけの出来事を航路上の時刻に・media の仕組み）の後、清水さんの指摘「年代バーが左より」「章の変わり目に日本の上に再ズーム」「1843〜46年の生活」「バルパライソのカードが通り過ぎてから出る」に対応：年代バーを中央に、章の表紙は前の章の終わりの場所で出しその章の出発点へ寄せる、止まる時刻を船がその場所にいる日まで細かく（shipTime・sameMonthStops）、段の名をバーの左の外へ、フェアヘーブンの章（7件、data/events.js）とフランクリン号の出航 1846.05、自動鑑賞のカードは「確かさの一行＋注記・出典の畳み」、町の章は低い高さ、光る行をカードの出来事に合わせる。
- 監査 r7（年譜の7件）：codex.auditor PASS WITH NOTES（AUDIT_CODEX_RESULT_r7.md）、claude.auditor PASS WITH NOTES（AUDIT_CLAUDE_RESULT_r7.md）。指摘は文と note で直した。
- 残り：フェアヘーブンの町の7点は約5kmの中に重なり見分けられない（印を小さくするかは清水さんの判断）、見出しが同じ年月のまま進む一歩が2か所（ホノルル沖→サモア、グアム→小笠原）、sandbox で fairhaven の章を選べない。
