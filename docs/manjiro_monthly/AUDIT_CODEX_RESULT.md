<!-- codex exec --ephemeral -s read-only（gpt-6-luna, reasoning medium）, 2026-11-09。~/.codex/config.toml の SHA-256 は送る前後で a301ee9a…6930 で不変。親が -o の出力をそのまま写した。 -->
[STUDIO_RESULT]

**CASE:** MANJIRO-FOCUS-SHELL-20261109  
**TASK:** AUDIT  
**FROM:** codex.auditor  
**SOURCE_ACCESS:** 作業ツリーと `person-focus-base/data/base_persons.js` は読み取り専用で確認。The Friend の 1850-10-15 頁は閲覧でき、ページの日付・所蔵元を確認した。Wood の Archive.org 頁は閲覧ツールで開けず、whalinghistory.org の ZIP と土佐清水市 PDF も内容を直接照合できなかった。  
**CONDITION:** codex.auditor／GPT-6、独立の読み取り監査。子エージェントは使用していない。  
**OBSERVATION:** **PARTIALLY CONFIRMED**。実装の大枠と人物 ID 対応を確認した。史料本文の直接照合は一部に限られ、アンカー全件の史実確認は保留。  

**EVIDENCE:**

1. **中・`manjiro/track_engine.js:212–218, 232–238`** — 月内に強いアンカーがあると、`headTiming`／`monthlyPositions` は月初時点の船位置も `anchor` と扱う。たとえば日付アンカーが月の後半にある場合、月初位置は補間位置なのに画面では「記録の月」と表示され得る。月初時点ですでにアンカー時刻を過ぎているかを判定するか、月表示を「その月に記録あり」と位置の確かさ表示から分ける案。**公開前に修正推奨。** 確認印：**DIRECT**。

2. **低・`data/manjiro_track.js: Franklin の `1847-11-28` Manila アンカー付近** — 調査結果は「1848年1月19日より前に出港」とする一方、データの `depart: '1848-01'` は月初を時刻として扱うため、滞在・補間計算では1月1日出港相当になる。画面の出典注記も「1月の初め」と説明している。月までしか分からないなら月単位の幅を保ち、出港日を確定日として補間に使わない案。**公開前に直すべき。** 確認印：**DIRECT**（データと注記の内部整合）。

3. **史実・出典照合：HOLD。** `RESEARCH_RESULT.md` の F1〜F8 と `data/manjiro_track.js` の説明・注記は内部ではおおむね対応している。F1 の Franklin のグアム・マニラ日付と `events.js` の差、F3 の帰着日、F7 の帰国航路の船名・ホノルル着日はデータ内で明示されている。ただし、Wood 原本・市史 PDF・whalinghistory のデータを直接確認できていないため、日付・場所・記録の有無を史料に照らして確定できない。アンカー全件、F1〜F8の記述の正確さ、特に `DIRECT` 表示は公開前に史料との照合が必要。**公開前に要確認。** 確認印：**HOLD**。The Friend の 1850-10-15 頁で確認できたのは、新聞項目の日付とアーカイブ掲載情報までで、記事本文の記述は未照合。

4. **人物 ID：** `person_bridge.js` の `b0431/Q700470`、`b0446/Q378450`、`b0417/Q1143856` は `base_persons.js` の該当レコードと一致。Manjirō、Whitfield、Perry、Yōdō は bridge で `null` とされ、基本名簿に該当人物がいない扱いと整合する。**DIRECT**。

5. **画面・安全性・範囲：** `?pg` は現在のホストと指定先の双方を `localhost`／`127.0.0.1` に限定し、HTTP(S) のみ受け付けている。確認したデータ描画用 `innerHTML` 箇所では、表示文字列を `esc` に通す箇所を確認した。航路の `control` 区間は描画時に除外される。＋／−は `0.6` 倍と逆倍率を使い、画面側に時刻変更でカメラを追う明示的な追跡機能があるが、初期状態はオフ。なお、利用者から報告されたブラウザー確認（初期表示・人物地球リンク・375px表示など）は独立再確認していない。**DIRECT**（コード確認）／**REPORTED**（ブラウザー動作）。

**UNKNOWN:**

- `monthlyPositions` と月初スナップの組み合わせで生じる「月内アンカーを月初位置に付与する」表示は、月ごとの位置を記録と誤認させる余地がある。上記1の修正案を反映後、該当月の表示とカード説明を確認する必要がある。
- Wood、土佐清水市 PDF、whalinghistory データの本文・該当レコードは未照合。アンカーの場所・日付・status・evidence、および F1〜F8 の史実上の妥当性は **HOLD**。
- 調査結果にある「The Friend 1851-01-09 の出港済み記述」など、直接確認できなかった資料の主張も未検証。