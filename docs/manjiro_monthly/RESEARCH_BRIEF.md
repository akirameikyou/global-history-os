# 調査依頼：万次郎の航海の「月ごとの位置」の拠り所（日付つきの寄港・位置）

- 依頼：Claude Code（運び手, Opus 5.5）, 2026-11-09
- 方式：EXP001-01 の暫定結論「重要な検証は強い単独＋auditor」（方式C）。この調査は単独の強い調査役（Opus）が行い、あとで claude.auditor と Codex が監査する。
- 作業ツリー：`C:\GitHub\_worktrees\manjiro-focus-shell`（branch feature/manjiro-focus-shell, origin/main 3696b6f 起点）

## 目的

History OS 万次郎版の新装版で、航路を「1年分まとめて」ではなく「月ごとに伸びる」ように描く。
そのための **日付（年・月、分かれば日）つきの位置の拠り所（アンカー）** を、公開資料で確かめる。
アンカーとアンカーの間の月は、アプリ側で距離に比例して補間し「推測」の印を付ける（捕鯨の漁場では滞在を見込む）。

## 対象の航海（優先順）

1. **ジョン・ハウランド号**（William H. Whitfield 船長）：1841年6月 鳥島で救助 → 1841年11〜12月? ホノルル → 日本近海・グアム等の捕鯨 → 1843年5月 フェアヘーブン帰着。
2. **フランクリン号**（Ira Davis 船長, のち交代）：1846年5月? 出航 → アゾレス・カーボベルデ・喜望峰・アムステルダム島・クパン → グアム・小笠原・日本近海 → ホノルル → マニラ → ホノルル → 1849年9月? 帰着。
3. **ゴールドラッシュ**：1849年 フェアヘーブン/ニューベッドフォード → ホーン岬 → バルパライソ → サンフランシスコ（1850）。
4. **帰国**：1850年 サンフランシスコ → ホノルル（エライザ? ／ 現データでは ELYSIA）→ 1850年12月? サラ・ボイド号でホノルル出航 → 1851年1〜2月 琉球上陸（アドベンチャー号）。
5. **咸臨丸**：1860年2月 浦賀出航 → サンフランシスコ（3月）→ ホノルル → 浦賀帰着（5月）。

（漂流1841・小笠原1862・欧州1870 は今回の対象外。余力があれば日付だけ）

## 前提資料（現データ）

- `data/events.js` の各航路の routePoints（地名と座標・historicalStatus）。上の航海の現データは同ファイルの `voyageId`／`routeName` で探せる（例 `john_howland_voyage_1841_1843`, `franklin_voyage_1846_1849`）。
- 現データの点には日付が無い。年（startYear・year）だけ。

## 調べてほしい資料（例。ここに限らない）

- **捕鯨船航海日誌のデータベース**：American Offshore Whaling Logbook Data（Lund ほか, whalinghistory.org の AOWV / logbook positions、NOAA ICOADS に入っているもの）に、John Howland（1839–1843）・Franklin（1846–1849）の航海と日ごとの位置があるか。あれば、その月ごとの代表位置（月の中ほどの日の正午位置など）を取る。
- **航海の台帳**：AOWV の voyages（出航・帰着日・船長）、Starbuck『History of the American Whale Fishery』(1878)、Whalemen's Shipping List、New Bedford Free Public Library の crew list。
- **日誌の所蔵**：John Howland 号・Franklin 号の logbook の所蔵機関（New Bedford Whaling Museum, Providence Public Library Nicholson Collection, Mystic Seaport, Millicent Library など）と公開状況。
- **万次郎側の記録**：河田小龍『漂巽紀略』、中浜博・中浜明の伝記、ハワイの新聞（The Friend, The Polynesian：船の入出港記録）。
- **咸臨丸**：ブルック大尉の日誌（Brooke's journal）、木村摂津守の日記、公刊の航海記録。

## 返してほしいもの

1. 航海ごとに、アンカーの表：`年-月(-日) | 場所 | 緯度 | 経度 | 確かさ（documented=記録で日付と場所が分かる／source_traced=記録はあるが位置は地名から／estimated=推論） | 出典（URL・資料名・頁） | 取得日（分かれば時刻）`
2. AOWL などに日ごとの位置があった航海は、**月ごとの代表位置**の表（取り方を明記）。
3. 現データ（events.js）の点や年と食い違うもの（例：年がずれている、寄港地が違う）。
4. 補間に使う数字の出典：捕鯨船の巡航の速さ（日あたりの距離）、漁場での滞在の長さ（季節の漁場：ジャパン・グラウンド＝夏 など）。
5. 確かめられなかったこと（UNKNOWN）と、読めなかった資料（403 など。読めなければ別の資料へ回る）。

## 印

- 確かめ方：`DIRECT`（自分で読んだ）／`REPORTED`（二次資料・他の報告の引用）／`INFERENCE`（推測）。記憶だけで書いたものは INFERENCE とし、件数を数える。孫引きは REPORTED。
- 判断できないものは `HOLD`。

## してはいけないこと

- リポジトリのファイルを変えない（読むだけ）。結果は親（運び手）が `docs/manjiro_monthly/RESEARCH_RESULT.md` に書く。
- 推測を記録のように書かない。架空の日付を作らない。
