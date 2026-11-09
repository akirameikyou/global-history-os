# 調査結果：万次郎の航海の月ごとの位置のアンカー（2026-11-09）

- CONDITION：調査＝general-purpose subagent（親と同じ Opus 5.5、方式C の「強い単独」）、道具 83 回・約 236k トークン・約 16 分。依頼＝`RESEARCH_BRIEF.md`。ファイルは書かせず、親（運び手の Claude）がこの文書と `data/manjiro_track.js` に写した。
- 取得：2026-11-09 13:33〜14:30 JST ごろ。作業用ファイル（抽出スクリプト・Wood の頁の切り出し・The Friend の OCR）は親のセッションの scratchpad にのみあり、リポジトリに入れていない。
- 印：DIRECT＝調査役が資料そのものを読んだ／REPORTED＝二次資料・検索要約／INFERENCE＝推測。記憶だけで書いたもの 3 件（ブルック日誌が公刊されているという含み、ファイアル島とメア・アイランドの座標の概略）。

## 最初の結論

- 日ごとの位置のデータ（whalinghistory.org の AOWL）に、**John Howland 号 1839–43（AV07739）も Franklin 号 1846–49（AV05224）も入っていない**（AOWV の台帳で logbook なし）。
- 代わりの拠り所：
  1. Dennis Wood『Abstracts of Whaling Voyages』手稿（両航海の頁を画像で読んだ, DIRECT）。
  2. CoML の spoken データ：捕鯨船 Olympia が 1848年7月7〜28日に Franklin と 12 回会合した記録（日付と位置, DIRECT）。
  3. The Friend（ホノルル）の入港欄・記事（DIRECT）。
  4. 土佐清水市『市史編さん便り』35号（咸臨丸の日付, DIRECT）。

## アンカー

採用したアンカーは `data/manjiro_track.js` に、出典・確かさ・印つきで全部ある（そちらが正本）。要点：

| 航海 | 記録の日付（主なもの） |
|---|---|
| John Howland | 1841-06-27 鳥島救助（REPORTED）／1841-12-02 ホノルル（Wood）／1842-01-03 南緯3°30′西経166°で会合（Wood）／1842-11-10 ハワイで壊血病の者を上陸（Wood）／1843-05-07 帰着（Wood） |
| Franklin | 1846-05-16 出航／06-16〜17 ファイアル／1847-03-13 グアム／（1847）10-14 グアム→11-07 マニラへ／11-28・12-16 マニラ／1848-01-19 より前に出帆／1848-07-07〜28 鳥島付近（CoML）／1848-10-17 ホノルル（Wood・The Friend）／1849-09-23 帰着 |
| ゴールドラッシュ | 1850-05 サンフランシスコ着（REPORTED）。出航は 1849-10 か 11-05 で食い違い（HOLD） |
| 帰国 | 1850-10-10 ホノルル着（E. Warwick 号、SF から 17 日, The Friend）／1850-11-01 より前 ホノルルで通訳（The Friend）／1850-12-17 Sarah Boyd 号で出航（REPORTED）／1851-02-02 琉球沖（REPORTED） |
| 咸臨丸 | 1860-02-10 出港／03-17 SF 着（03-23〜05-01 メア・アイランド）／05-08 SF 発／05-23 ホノルル着・25 拝謁・26 発／06-23 浦賀 |

## events.js との食い違い（events.js は今回変えていない）

`data/manjiro_track.js` の `conflicts` に同じ文で入れ、画面の「航路について」に出す。

- F1 Franklin のグアム・マニラ：events.js の 1848年2〜7月は、記録では 1847年10月〜1848年1月と読める（年は INFERENCE）。1848年7月は鳥島付近（DIRECT）。
- F2 Franklin の 1847年のホノルル寄港：記録に無い（HOLD）。
- F3 Franklin の帰着：1849年8月末 → 9月23日（DIRECT）。
- F4 Franklin のボストン・カーボベルデ：Wood に無い（UNKNOWN）。
- F5 John Howland の 2 回目のグアム：1842年11月以降では日数が足りない。1842年中とみる方が自然（HOLD）。
- F6 John Howland のホノルル入港日：11月20日説と10月説（HOLD）。
- F7 帰国：SF→ホノルルの船は Eliza Warwick、ホノルル着 1850年10月10日（DIRECT）。events.js は ELYSIA・8月。
- F8 咸臨丸：「万延元年2月10日」は西暦の日付に和暦の元号（当時は安政7年）。デーモン牧師との再会はホノルル寄港中（1860年5月23〜26日）。

## 補間の数字

- 1日の進み：AOWL 1830–1860 の 1,008 航海・371,195 組から、中央値 55 海里/日・平均 68 海里/日、十分位 12/22/31/42/55/70/89/111/142（DIRECT＝調査役が計算）。
- 実際の区間日数：NB→ファイアル 31日、SF→ホノルル 17日（1850）・15日（咸臨丸）、浦賀→SF 約37日、ホノルル→浦賀 28日。
- ジャパン・グラウンドの季節：4〜9月に集中、8月が最多（同データ）。滞在の長さの典型値は文献で確かめられず（UNKNOWN）→ 推測の滞在は 3 か月として印。

## UNKNOWN・読めなかった資料

- 両航海の自船の航海日誌の所蔵（Whitfield の日誌は引用されるが所蔵先は見つからず）。
- John Howland 1842年のグアム・鳥島海域・サモア・タヒチの日付。Franklin の喜望峰・アムステルダム島・クパン・小笠原・伊平屋・仙台沖・ギルバート・セラム・チモールの日付。
- Stieglitz 号・Sarah Boyd 号・琉球上陸日の一次資料。木村摂津守の日記・ブルック日誌の原典。
- 読めなかった：Chronicling America（403）、CDNC（403）、外務省「あけぼの」（403）、asianstudies.org PDF（403）、whitfield-manjiro.org（404）、NEH 教材 PDF、The Polynesian 1841、Starbuck(1878) の OCR、The Friend 1851-01-09 の出港欄の OCR。

## 使った資料

- whalinghistory.org：AOWV `https://whalinghistory.org/aowv/AmericanOffshoreWhalingVoyages.zip`（2026-06-19版）、AOWL `.../aowl/AmericanOffshoreWhalingLogbookData.zip`（2025-09-16版）、CoML `.../coml/CoMLLogbookData.zip`（2018版）。CC BY 4.0。
- Wood 第1巻 p.264 `https://archive.org/details/abstractsofwhali1183denn/page/n301`、第2巻 p.226 `https://archive.org/details/abstractsofwhali2184denn/page/n262`（AOWV の DWlink「page/226」は別の頁に飛ぶ）。
- The Friend（Hawaiian Mission Houses Digital Archive）items/show/1069・1133・1134・1136・1137、1847年8月〜1848年2月の各号（1050–1060）。
- maritimeheritage.org/inport/1850.htm、土佐清水市『市史編さん便り』35号、慶應義塾「福澤諭吉をめぐる人々」、ja.wikipedia「咸臨丸」、en.wikipedia「Nakahama Manjirō」。
