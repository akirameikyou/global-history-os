CASE: MANJIRO-FOCUS-SHELL-20261110 TASK: AUDIT-r7（年譜の追加） TO: claude.auditor ／ codex.auditor
Auditor として、data/events.js に足した年譜の項を、読み取りだけで監査してください。

## 清水さんの依頼
「１８４３年から１８４６年の３年の生活を入れたい。」→ 候補7件を全部・新しい章「フェアヘーブン」で入れる、と決定（2026-11-10）。

## 対象
- 作業ツリー C:\GitHub\_worktrees\manjiro-focus-shell、`git diff data/events.js`（commit 71ddeda から）。chapterId:'fairhaven' の person 7件（manjiro_cherry_street_akin・manjiro_stone_school・manjiro_sconticut_farm・manjiro_church_pew・manjiro_bartlett_academy・manjiro_whitfield_sails_1844・manjiro_cooper_apprentice）と、manjiro_franklin の year '1846'→'1846.05' と note。
- 調査の記録：docs/manjiro_monthly/RESEARCH_FAIRHAVEN_1843_1846.md（強い単独の調査役。記憶だけの事実 0 件と申告）。

## 見てほしいこと
1. 各項の title・year・description・cardText が、note に挙げた出典より強く書いていないか（とくに二次資料のもの、伝承の教会の件、桶屋の場所、バートレットの期間）。出典に当たれるもの（discoverfairhaven.org、土佐清水市『市史編さん便り』25号 https://www.city.tosashimizu.kochi.jp/fs/4/5/6/7/0/7/_/hist_news_r5_25.pdf 、whalinghistory.org の航海 AV15570・AV05224、en.wikipedia「William H. Whitfield」、Millicent Library 1918 の PDF）は自分で当たる。
2. year・startYear の形が他の項と同じ規則か（月が分かるものだけ月、範囲の書き方）。historicalStatus の付け方。
3. 公開中の sandbox/index.html も同じ events.js を読む。新しい chapterId 'fairhaven' や routeLabel 'FAIRHAVEN' が sandbox で問題を起こさないか（コードで）。改行（CRLF）や文字の誤り。

## してはいけないこと
ファイルの変更・作成・削除、commit・push、ブランチの切り替え、他の監査役の今回の回答を読むこと。

## 返事の形
[STUDIO_RESULT]、判定 PASS／PASS WITH NOTES／PARTIALLY CONFIRMED／FAIL、指摘は1件ずつ（重さ・項の id・何が起きるか・直し方・commit 前に直すべきか）、印 DIRECT／REPORTED／INFERENCE／HOLD。日本語で手短に。
