CASE: MANJIRO-FOCUS-SHELL-20261111 TASK: AUDIT-r9 TO: claude.auditor ／ codex.auditor
Auditor として、commit 911f3fe からの未commitの変更（`git diff`）を、読み取りだけで監査してください。

## 1. 琉球→薩摩→長崎の航路（最重要・データ）
清水さん（2026-11-10）：琉球・小渡浜上陸（1851.02）→鹿児島入り（1851.08）→長崎奉行所（1851.10）の「航路が繋がっていない」。原因：この3件に routePoints が無かった。
- data/events.js：manjiro_return_ryukyu（小渡浜→小禄→翁長村・高安家、陸路）、manjiro_satsuma（翁長→那覇港→奄美沖・トカラ（control）→山川港→鹿児島。本文の「8月28日」→「8月27日」、12日間は那覇→山川）、manjiro_nagasaki（鹿児島→（陸路・河川路・海路、道筋不明の control 2点）→長崎）に routePoints・defaultSegmentStatus:'estimated'・note を追加。
- data/manjiro_track.js：return_voyage_1851 に記録の日付のアンカー（翁長 1851-02-03〜08-07、那覇港 08-14、山川港 08-26〜27、鹿児島 08-27〜10-12、長崎 10-23〜1852-08-10、高知城下 1852-08-25）と出典 TOSA30・TOSA31。
- 調査（強い単独の調査役）：土佐清水市『市史編さん便り』第30号 https://www.city.tosashimizu.kochi.jp/fs/4/5/6/7/3/4/_/hist_news_r5_30.pdf ・第31号 https://www.city.tosashimizu.kochi.jp/fs/4/5/6/7/3/3/_/hist_news_r5_31.pdf の旧暦の日付を、国立天文台「暦象年表」の和暦の表（https://eco.mtk.nao.ac.jp/cgi-bin/koyomi/caldb_s.cgi?year=1851）で西暦に換算。便りは旧暦の月日に西暦の年を付けて書いている（例「1851年7月11日」＝嘉永4年7月11日）。座標の多くは概略（記憶による推定を含む）。

## 2. 監査 r8（911f3fe の画面コード、claude.auditor FAIL）の直し
- H1：月の分かる出来事でも historicalStatus が documented でないもの・note に推論/仮定とあるものは、確かさの一行を「年月は年譜（events.js）の値ですが、月は推論です」とし記録の色を付けない（focusShell.html の monthInferred）。文を「年譜の記録です」→「年譜（events.js）の値です」。
- M1：本文に「○月○日」がある出来事は推測の航路の時刻へ動かさない（play_steps.js shipTimeFor）。動かす時の文を「推測の航路の上で船がここにいる時刻に出しています」／記録の時は「記録の時刻に合わせて」。
- L1：まとめて出した時の一行「日は近くの出来事に合わせた表示」。L3：自動鑑賞の終わりに年月を月に丸める。

## 見てほしいこと
1. 旧暦→西暦の換算（嘉永4年1月3日・7月11日・7月18日・7月30日・8月1日・9月18日・9月29日・10月1日、嘉永5年6月25日・7月11日）が正しいか。便りの記述と、足した文・アンカーが合っているか（出典より強く書いていないか。とくに「12日間の航海」「小船で鹿児島へ」「斉彬の聴取」「陸路・河川路・海路」）。
2. 推定の点（小禄・奄美沖・トカラ・薩摩の陸路・九州西岸）が、記録のように見えないか（historicalStatus・defaultSegmentStatus・note）。
3. 2 の直しで、H1・M1・L1・L3 が解消したか。新しく推測が記録に見える経路ができていないか。
4. 公開中の sandbox/index.html も events.js を読む。新しい routePoints・routeType で sandbox が壊れないか（コードで）。改行（CRLF）。

## してはいけないこと
ファイルの変更・作成・削除、commit・push、ブランチの切り替え、他の監査役の今回の回答を読むこと。

## 返事の形
[STUDIO_RESULT]、判定 PASS／PASS WITH NOTES／PARTIALLY CONFIRMED／FAIL、指摘は1件ずつ（重さ・ファイルと id・何が起きるか・直し方・commit 前に直すべきか）、印 DIRECT／REPORTED／INFERENCE／HOLD。日本語で手短に。
