<!-- claude.auditor（subagent, claude-opus-5-5, 道具 93 回・約 229k トークン・約 15.5 分）, 2026-11-09。返事の本文を親（Claude Code）が写した。読み取りだけ、リポジトリのファイルは変えていないと本人申告（git status で親も確認）。 -->

[STUDIO_RESULT]
CASE: MANJIRO-FOCUS-SHELL-20261109
TASK: AUDIT
FROM: claude.auditor

判定: **FAIL**（公開の前に直すべき点がある）。判定は採否ではない。採否は清水さんが決める。
理由：(1) 推測の月が「記録」に見える経路が仕組みの中にある（H1）。DESIGN §6「推測を記録のように見せない」に反する。(2) 出典に無いことを DIRECT・一次資料として書いている所が 3 件ある（H2・H3・H4）。
一方、アンカーの日付の大半は原典に当たって合っていることを確かめた。XSS・`?pg`・人物 ID 対応表・カメラの約束・既存ファイル不変も合格。

SOURCE_ACCESS:
- リポジトリ：AUDIT_BRIEF・DESIGN_v0.1・RESEARCH_BRIEF・RESEARCH_RESULT、data/manjiro_track.js・data/person_bridge.js・manjiro/track_engine.js・manjiro/focusShell.html（全行）、data/events.js（航路の点と year 欄）、person-focus-base/data/base_persons.js（6d0fa6f）、git status・git diff --stat。
- 原典（DIRECT）：Wood 第1巻 p.264（n301）・第2巻 p.226（n262）の手稿画像、The Friend 1848-11-01・1850-10-15・1850-11-01・1851-01-09 の頁画像、土佐清水市『市史編さん便り』35号 PDF 全文、whalinghistory.org CoML spoken（2018）・AOWV（20260619版）の該当行。
- 要約のみ（REPORTED 並み）：maritimeheritage.org/inport/1850、en.wikipedia「Nakahama Manjirō」、ja.wikipedia「万延」「咸臨丸」。
- 読んでいない：AOWL（速さの統計は再計算せず）、Sea History 079、AUDIT_CODEX_RESULT.md（指示どおり開いていない）。

CONDITION: claude.auditor / claude-opus-5-5 強さ不明 / Read・Grep・Bash・PowerShell・WebFetch / node が無いため JS は実行せず、track_engine.js を Python に写して計算（写しの忠実さは INFERENCE）。ブラウザは使っていない。

OBSERVATION（重い順）:
- **H1【高】** 記録の月なら、船の位置が推測でも「塗りの丸＝記録」になる。track_engine.js headTiming（同じ暦月に強いアンカーがあるかだけを見る）。写しの計算で、記録の地点から 492〜5,055 km 離れた推測の位置に塗りの丸（1860-03・1860-06・1849-09・1850-10・1847-10・1846-06・1843-05・1848-10・1847-03）。案：(a) 月の代表の時刻を記録の日付に合わせる (b) 'anchor' は船がアンカーの点にいる時・記録の滞在中だけ (c) 文言を改める。公開前に直す。
- **H2【高】** 万次郎が E. Warwick 号に乗っていたことはどの出典にも無い。The Friend 1850-10-15 の入港欄の E Warwick 入港は DIRECT だが、同号全4頁・1850-11-01 号の記事・乗客欄に万次郎の乗船の記述は無い（記事は「he came to the islands」のみ）。"Eliza" は maritimeheritage の要約から。案：INFERENCE・estimated に、F7 を改める。公開前に直す。
- **H3【高】** F8 の改元日 3月18日は和暦（安政7年3月18日＝1860年4月8日）。F8 自身が指摘する誤りを F8 の中でしている。TOSA35 に改元の記述は無い。公開前に直す。
- **H4【中】** 咸臨丸の出港：TOSA35 本文は「横浜港を出港(2月10日)」。浦賀・旧暦1月19日は ja.wikipedia 由来。出典の付け違え。公開前に直す。
- **H5【中〜高】** 弱いアンカー（events.js の年月）が event の最初の点に付く。franklin_1847_guam の '1847.03' が Kupang に付き、Kupang→グアム約 7,000 km を 12 日。ゴールドラッシュでも Valparaiso→SF 約 176 海里/日。案：代表の点に付ける、速さの上限で捨てる。公開前に直す。
- **H6【中】** 1842-01-03 の記録の位置（南緯3°30′）と結んだ点（北緯8°）が約 1,300 km 違う。status と evidence の組も定義と食い違う。案：observation だけに。公開前に直す。
- **M1【中】** 二次資料だけのアンカーも「記録」の札（1841-06-27・1850-05・1851-02-02）。案：「記録（二次）」を分ける。
- **M2【中】** 予定・推測の出港日が「記録の出港」として出る（グアム 11/7 は would sail＝予定、マニラ '1848-01' は「1月19日より前」のみ）。案：depart に確かさの欄。
- **M3【中】** 記録の無い空白の区間にも距離比例で時間を割り振る（Odo→長崎のため、アドベンチャー号の約 40 km に約 4 週間）。案：空白に余りを吸わせる。
- **M4【中】** 年だけのデータが「◯年1月」と月つきで出る。F5 で否定的に扱った弱いアンカーが使われる。
- **L1** Olympia 号の 12 行のうち訪問 2・交換 1、他は「見かけた」。「12回会合」は言い過ぎ。
- **L2** 160 km/日を「平均」と書くが出典の中央値 102 km・平均 126 km と合わない。
- **L3** Wood 第1巻の 1842-10-24（Alex Coffin 号と会合、オアフへ・壊血病）が入っていない。
- **L4** en.wikipedia の「October 1847 Honolulu」を F2 に足せる。
- **L5** F5 の約140海里/日は写しの計算で約131。
- **L6** 1850-05 の Hosokawa 帰属は次の文の参照／1851-02-02 の出典に 1851-01-09 号／RESEARCH_RESULT の取得時刻の幅／分までの取得時刻・SHA-256 が無い。
- **L7** monthlyPositions の最初の月で前後のアンカーが同じ／srcLinks が URL の種類を見ない／凡例の破線に 'default' も含む。

EVIDENCE:
- DIRECT：Wood 1 p.264 と Wood 2 p.226 の文言（アンカーの日付は合う。年の読みは INFERENCE のまま妥当）、CoML の 1848-07-07 行「25 months, 600 sperm」、The Friend 1848-11-01「17—Am whale ship Franklin, Aiken, New Bedford, 29 mos out, 700 sperm」、The Friend 1851-01-09「Expedition to Japan」（出航日は無い）、TOSA35 の日付（出港は横浜港と書く）、CoML の中央値と範囲、AOWV の aowlLink NULL、人物 ID 対応表の一致、innerHTML の esc、`?pg` の制限、カメラの約束、＋−の範囲、control の区間、tracked ファイルの不変。
- REPORTED：maritimeheritage の Eliza Warwick、en.wikipedia の 12/17・2/2・「October 1847」、ja.wikipedia の改元・浦賀出港、親のブラウザ確認。
- INFERENCE：H1・H5・M3・M4・L5 の数値（Python の写し scratchpad/scripts/port.py）。

UNKNOWN / HOLD: AOWL の統計の再計算、1841-06-27・1850-05・12/17・2/2 の一次資料、万次郎と E. Warwick 号を結ぶ出典の有無、写しと JS の一致、375px の表示。
