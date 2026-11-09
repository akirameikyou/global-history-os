CASE: MANJIRO-FOCUS-SHELL-20261109 TASK: AUDIT TO: claude.auditor ／ codex.auditor
Auditor として、History OS 万次郎 Focus 新装版（月ごとに伸びる航路・年代バーの＋−・人物地球との連動）を、読み取りだけで独立に監査してください。

## 対象
- 作業ツリー：`C:\GitHub\_worktrees\manjiro-focus-shell`（branch feature/manjiro-focus-shell、先頭 3696b6f、変更はすべて未commitの新規ファイル）
- 新規ファイル：`manjiro/focusShell.html`（画面, developer 作）、`manjiro/track_engine.js`（時刻づけ, lead 作）、`data/manjiro_track.js`（日付アンカー）、`data/person_bridge.js`（人物 ID 対応表）、`docs/manjiro_monthly/`（DESIGN_v0.1・RESEARCH_BRIEF・RESEARCH_RESULT・この依頼）
- 変えていないはずのもの：`data/events.js`・`data/persons.js`・`sandbox/`・`hokusai/`（`git status` と `git diff --stat` で確かめられる）

## 前提資料
- 清水さんと決めた4点と設計：`docs/manjiro_monthly/DESIGN_v0.1.md`
- 調査の依頼と結果：`RESEARCH_BRIEF.md`・`RESEARCH_RESULT.md`（調査は Opus の単独の調査役。auditor による照合はまだ）
- 人物地球の名簿（照合用・読むだけ）：`C:\GitHub\_worktrees\person-focus-base\data\base_persons.js`
- 親（Claude 本体）がブラウザで確かめたこと：1841年1月の初期表示、＋で月の目盛り、1848年7月で ◇（他船の記録）と推測の船、船のカードの出典表示、`?pg=http://localhost:8192/person/` で勝海舟→人物地球 `?p=b0431&y=1841` が開くこと、375px 幅で崩れないこと。

## 見てほしいこと
1. **史実と出典**（最重要）：`data/manjiro_track.js` の各アンカーの日付・場所・status・evidence が、RESEARCH_RESULT と出典に合っているか。できれば出典そのもの（Wood の archive.org 頁、The Friend、土佐清水市の PDF、whalinghistory.org のデータ）を自分で当たって確かめる。記録の無いことを記録のように書いていないか。食い違い F1〜F8 の書き方は正確か。
2. **推測の印**：推測の月が画面で「記録」に見えてしまう経路はないか（timing・stay・observations・弱いアンカー＝events.js の年月の扱い）。
3. **track_engine.js の正しさ**：時刻の割り振り（滞在・depart・弱いアンカーの捨て方・gap）、端の外挿、`trackAt`／`monthlyPositions` の境界（月の初め・最後の月）。
4. **画面**：DESIGN の約束（時間でカメラを動かさない、＋−の幅の範囲、routeStatus と timing を混ぜない、control 区間を描かない）が守られているか。XSS（データを innerHTML に入れる所の esc）、`?pg` が localhost 以外を受けないこと。
5. **人物 ID 対応表**：baseId と QID が base_persons.js と合うか。基本人物にいない人を「いない」と正しく扱っているか。
6. 範囲外でも、気づいた不具合。

## してはいけないこと
- ファイルの変更・作成・削除、commit・push、ブランチの切り替え（読み取りだけ。シェルも読むためだけに使う）。
- 他の監査役の回答を読むこと（`docs/manjiro_monthly/AUDIT_*_RESULT.md` があっても読まない）。

## 返事の形
`[STUDIO_RESULT]`（CASE・TASK・FROM・SOURCE_ACCESS・CONDITION・OBSERVATION・EVIDENCE・UNKNOWN）。判定は PASS／PASS WITH NOTES／PARTIALLY CONFIRMED／FAIL。指摘は1件ずつ「重さ（高・中・低）・ファイルと行・何が起きるか・直し方の案・公開の前に直すべきか」。確かめ方の印 DIRECT／REPORTED／INFERENCE、判断できなければ HOLD。日本語で。
