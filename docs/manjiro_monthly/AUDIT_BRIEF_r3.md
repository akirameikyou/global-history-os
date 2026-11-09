CASE: MANJIRO-FOCUS-SHELL-20261109 TASK: AUDIT-r3 TO: claude.auditor ／ codex.auditor
Auditor として、清水さんの追加の依頼（2026-11-09）で入れた変更を、読み取りだけで監査してください。

## 清水さんの依頼（言葉のまま）
- 「推奨の組みでつくってみてください。また、資料がみつかったなら日付より確証の高い方にしてください。再生中自転をとめるも賛成。」
- 推奨の組 ＝ W-LINK は「タイムラインの帯＋その年の場所を地球に淡い印（押すとカード・カメラは動かない）」、ガイドは経緯線・赤道など（国境は時代で変わるので出さない）。
- その前の依頼：再生の速さを遅く・切り替え可能に、右の生涯欄（年譜）を年月と連動。

## 対象（作業ツリー C:\GitHub\_worktrees\manjiro-focus-shell、未commit）
1. **`data/events.js` の訂正（最重要）**：`git diff data/events.js`。公開中の sandbox も使うファイル。F1（フランクリン号のグアム再寄港・マニラを1847年へ、startYear も）、F3（帰着 1849年9月23日）、F7（ホノルル着 1850年10月、船名は注記）、F8（咸臨丸の出港の元号・出港地、題）、デーモン牧師との再会（1860年5月・ホノルル）。HOLD のもの（F2・F4・F5・F6・G1）は直していない。
2. `data/manjiro_track.js`：conflicts の resolved と文の書き換え。
3. `data/manjiro_wlink.js`（新規）：sandbox/index.html の worldLinks と WORLD_EXTRA をそのまま写したもの。
4. `manjiro/focusShell.html`：速さの切り替え（SPEEDS・localStorage）、年譜の連動（lastNearId・scrollNearIntoView）、W-LINK（WL・wlObj・showWLinkCard・タイムラインの帯）、ガイド（showGraticules・GUIDE_PATHS）、再生中の自転停止（startPlay・stopPlay・resumeSpinAfter）。

## 前提資料
- 前回までの監査と対応：`docs/manjiro_monthly/AUDIT_FIXES_r1.md`、出典の照合は `RESEARCH_RESULT.md` と `data/manjiro_track.js` のアンカー（Wood・The Friend・TOSA35・CoML）。
- 親のブラウザ確認：W-LINK の帯と印（1848年に NORTH PACIFIC）、切り替えで消えること、ガイドの切り替え、再生中の自転停止、速さの切り替え、年譜が今の行まで送られること、sandbox/index.html が読み込みと年の移動でエラーなし。

## 見てほしいこと
1. events.js の訂正が出典どおりか。出典より強く書いていないか（年の読みが推論のもの、船名が未確認のもの）。HOLD のものを直していないか。sandbox に悪い影響（startYear・year の形式、並び順、改行コード）が無いか。
2. W-LINK の写しが元と同じか（文を変えていないか）。
3. 画面：推測が記録に見える経路が増えていないか、esc の漏れ、自転・速さ・年譜の連動の不具合。

## してはいけないこと
ファイルの変更・作成・削除、commit・push、ブランチの切り替え、他の監査役の今回の回答を読むこと。

## 返事の形
[STUDIO_RESULT]、判定 PASS／PASS WITH NOTES／PARTIALLY CONFIRMED／FAIL、指摘は1件ずつ（重さ・ファイルと行・何が起きるか・直し方・commit の前に直すべきか）、印 DIRECT／REPORTED／INFERENCE／HOLD。日本語で手短に。
