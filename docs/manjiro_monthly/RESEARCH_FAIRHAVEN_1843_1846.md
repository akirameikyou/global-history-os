# 調査結果：フェアヘーブンの3年（1843年5月〜1846年5月）（2026-11-10）

- 依頼：清水さん「１８４３年から１８４６年の３年の生活を入れたい。」
- CONDITION：general-purpose subagent（Opus 5.5、方式C の強い単独）。ファイルは書かせず、親が写した。記憶だけで書いた事実 0 件。
- いちばん詳しい資料：土佐清水市『市史編さん便り』25号・26号（参考文献に中浜博 2005・川澄哲夫『中浜万次郎集成』1990）。日付は whalinghistory.org の航海・乗組員の記録で DIRECT に確かめた所あり。
- events.js の現状：manjiro_america（1843.05）の次がすぐ manjiro_franklin（1846）。この間の person の項は0件。chapterId は howland と franklin だけで、陸の暮らしの章が無い。

## 候補（緯度経度は今の住所から OpenStreetMap Nominatim で求めた概略）

| # | id 案 | 年 | 題 | 確かさ | 主な出典 |
|---|---|---|---|---|---|
| C1 | manjiro_cherry_street_akin | 1843.05 | チェリー通りの最初の夜とエーキン家 | REPORTED | discoverfairhaven、市史25号、whitfield-manjiro.org、en.wikipedia（Bernard 1992） |
| C2 | manjiro_stone_school | 1843 | ストーン・スクール（通称オックスフォード・スクール）で英語を学ぶ | REPORTED | discoverfairhaven、市史25号、en.wikipedia |
| C3 | manjiro_sconticut_farm | 1843 | スコンティカット・ネックの農場へ（船長の再婚 1843年5月31日） | REPORTED | en.wikipedia（Bernard）、1918 Millicent Library、discoverfairhaven、市史25号 |
| C4 | manjiro_church_pew | 1843 — 1846 | 教会の席とユニテリアン教会（伝承・時期不明） | REPORTED | discoverfairhaven、市史25号、Richard |
| C5 | manjiro_bartlett_academy | 1844 | バートレットの私塾で数学・測量・航海術（約2年5か月） | REPORTED | 市史25号、discoverfairhaven、Richard、ja.wikipedia |
| C6 | manjiro_whitfield_sails_1844 | 1844.10 | 船長の出航（ウィリアム・アンド・エライザ号、10月2日）と留守の家 | 出航日 DIRECT（whalinghistory AV15570）／家族は REPORTED | whalinghistory.org、市史25号 |
| C7 | manjiro_cooper_apprentice | 1845.01 | 桶屋（ハズィーの樽屋）の年季奉公 | REPORTED（場所は根拠なし・概略） | 市史25号（中浜博）、1918 Millicent Library |

既存の項の直し案：manjiro_franklin の year '1846' → '1846.05'（whalinghistory AV05224 の乗組員名簿 1846-May-16、「John Mung / Steward」、DIRECT。市史26号も5月16日）。役職を cooper とする資料もあるが、名簿では Steward。

## 食い違い
到着日 5/6 か 5/7／預け先の名 Eben・Ebenezer・James Akin、エーキンス／教師 Jane Allen（英語資料）とジェームズ・アレン（ja.wikipedia、出典なし）／結婚した場所（Scipio NY か Brooklyn の教会か）／断った教会の数／先生の名 Louis・Lewis、期間 2年5か月か2年半、「首席」は ja.wikipedia のみ（出典なし）／航海日誌の期間（SNAC 要約 1844 Oct 3–1848 July 4、乗組員名簿の船長名の食い違い）／息子の死の月／桶屋の場所（New Bedford とする要約・鍛冶屋とする低い信頼の資料）。

## 座標
11 Cherry St 41.64725,-70.91073／14 Oxford St 41.64752,-70.91196／Old Stone Schoolhouse（40 North St）41.64900,-70.90743／42–44 Spring St 41.63958,-70.90149／32 Washington St 41.63758,-70.90356（既存の Fairhaven 点とほぼ同じ）／農場は半島の中ほど 41.62,-70.87（概略。discoverfairhaven の「now located on Crescent Drive」は移築か不明）／桶屋の場所は根拠なし。

## 読めなかった資料
Smithsonian（403）、Japan Times（402）、asianstudies.org（403）、whitfield-manjiro.org の旧頁（404）、NEH の PDF、SNAC（証明書切れ）、Sea History 079、中浜博・中浜明の本そのもの（市史に引かれた範囲のみ）。手紙：1843〜46年のものは見つからず、確認できた最初は1847年3月12日のグアムからの手紙（events.js に既にある）。
