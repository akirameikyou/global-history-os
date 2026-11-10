<!-- claude.auditor（Opus 5.5, 道具34回・約83k トークン・約10分）, 2026-11-10 AUDIT-r7。要点を親が写した。読み取りだけ。 -->
# claude.auditor AUDIT-r7（フェアヘーブンの年譜7件）：PASS WITH NOTES（高0・中1・低7）

- DIRECT で当たった出典：市史25号（pdftotext）、discoverfairhaven.org、en.wikipedia「William H. Whitfield」、whalinghistory AV15570・AV05224、Millicent Library 1918 p.8。月を付けた項（1843.05・1844.10・1845.01・1846.05）はどれも出典に月がある。
- 中：農場の家を「建てた」— 市史25号は「農場と家を購入」、discoverfairhaven は「建築を手伝った」で食い違う。
- 低：桶屋の場所の note が出典より弱い（市史25号は「フェアへーブンの港の近く」）、「中浜博による」は書き分けられていない／教会の件「記録に残っていない」は言い過ぎ／エーキン家の description の言い切り／農場の年 1843 は結婚の年からの推定／バートレット「約2年半」と「2年5か月」の不揃い・樽屋の住み込みと時期が重なる／sandbox の chapterCycle に fairhaven が無く章として選べない（エラーにはならない）・点が重なる／出航の座標が川の中の島あたり。
- 形式・文字・改行：DIRECT で問題なし（全行 CRLF、U+FFFD・U+FFFF 0、id 重複なし）。
- HOLD：whitfield-manjiro.org・Richard・ja.wikipedia・市史26号、AV15570 の乗組員名簿の船長名、「校舎は今も残っている」の出典、「最初の夜」を推定とする資料。
- 対応（親）：中と低（文・note）をすべて直した。sandbox の chapterCycle は公開版の作りなので今回は触らない（清水さんの判断待ち）。
