# 英語モードの監査（Codex, codex.auditor）

- 日付：2026-11-15
- 対象：commit a902e25（experiment/ueshiba-focus）
- 実行：codex exec（read-only・承認なし・reasoning high、model gpt-6-luna、Codex v0.167.0-alpha.4.1）
- 依頼文：同じ内容を α が作成（監査の観点 6 点）

---

PARTIALLY CONFIRMED

コードと日本語データを読み取りで照合しました。年・項目数・画面の切り替えはおおむね整っていますが、以下は修正または確認を勧めます。画面をブラウザーで実行しての確認はしていません。

1. **重さ：中 — 1920年カードの移住時期が曖昧です**  
   [data/ueshiba_person.js](/C:/GitHub/_worktrees/ueshiba-focus/data/ueshiba_person.js:100) は家族との綾部移住を「翌年」としますが、[data/ueshiba_en.js](/C:/GitHub/_worktrees/ueshiba-focus/data/ueshiba_en.js:55) は “He then moved” とし、年を落としています。1920年の出来事のカードに続けて表示されるため、同年の移住と誤読されるおそれがあります。  
   **直し方案：** “In 1921, he moved to Ayabe with his family, including his mother, and joined Ōmoto.”  
   **公開前：** 直すことを推奨。  
   **根拠：DIRECT** 日本語カードと英訳の記述。

2. **重さ：中 — 1948年の認可省庁が合気会英語ページと食い違います**  
   英訳は “Ministry of Education” としています（[data/ueshiba_en.js](/C:/GitHub/_worktrees/ueshiba-focus/data/ueshiba_en.js:84)）。日本語原文の「文部省」には忠実ですが、合気会の英語ページは1948年の認可を “Ministry of Health and Welfare” と記載しています。[Aikikai History](https://aikikai.or.jp/eng/aikido/history/)  
   どちらが正しいかはこの監査では確定できません。原資料を確認し、省庁名を確定してから日英両方を揃えるのがよさそうです。  
   **公開前：** 省庁名を確認することを推奨。  
   **根拠：DIRECT** ローカルの日本語・英語データと合気会英語ページの記載。**INFERENCE** 省庁名のいずれかに確認が必要。

3. **重さ：中 — 英語モードでも、英訳のない行事情報は日本語で表示されます**  
   `?lang=en` でも、行事タイトルに英語がなければ原文へフォールバックし、会場の市町村名も `city_en` がなければ原文を使います。行事カードの主催者名にも英訳処理が見当たりません（[ueshiba/focusShell.html](/C:/GitHub/_worktrees/ueshiba-focus/ueshiba/focusShell.html:1015)、同ファイルの `openEvent`）。そのため「日本語が残るのは言語ボタンだけ」という報告書の説明と一致しません。  
   **直し方案：** 行事のタイトル・主催者・市町村名も英語データを用意するか、英語がない項目には英語モードでの表示方針を明示する。  
   **公開前：** 英語モードの要件次第ですが、現状を説明するか表示を整えることを推奨。  
   **根拠：DIRECT** コードのフォールバック処理。**REPORTED** [REPORT.md](/C:/GitHub/_worktrees/ueshiba-focus/docs/ueshiba_focus/REPORT.md:102) は日本語が残るのは「日本語」ボタンだけと報告。

4. **重さ：中 — 1969年の受章名が合気会英語ページの表記と異なります**  
   “Senior Fifth Rank” と “Order of the Sacred Treasure, Third Class” は日本語原文の直訳ですが、合気会の英語プロフィールは “Sho-Goi (fifth rank in the imperial court)” と “Order of the Sacred Treasure, Gold Rays with Neck Ribbon” としています。[Message from Doshu](https://aikikai.or.jp/eng/aikido/message/)  
   **直し方案：** 同ページの英語表記に揃えるか、等級の対応を確認して採用する表記を統一する。  
   **公開前：** 受章歴を誤解なく伝えるため確認を推奨。  
   **根拠：DIRECT** 英訳と合気会英語プロフィールの表記比較。**INFERENCE** 表記差が読者の受章内容の理解に影響しうる。

5. **重さ：低 — 人名の姓名順と長音表記が混在しています**  
   `Morihei Ueshiba` と `Hatsu Itokawa` は名・姓の順ですが、`Takeda Sōkaku`、`Deguchi Onisaburō`、`Takeshita Isamu` は姓・名の順です。長音記号も人名・地名・用語で使い方が異なります。合気会の英語ページ自体も本文では “Morihei Ueshiba”、略歴欄では “Ueshiba Morihei” を使うため、単一の公式表記には揃っていません。[Aikikai History](https://aikikai.or.jp/eng/aikido/history/)、[Message from Doshu](https://aikikai.or.jp/eng/aikido/message/)  
   **直し方案：** 英語本文で姓・名をどちらの順にするか決め、人物名全体で統一する。報告書で読みが未確認とされた `李清楠` は漢字のままで、読みを推測した表記にはなっていません。  
   **公開前：** 低優先。  
   **根拠：DIRECT** 英語データと合気会英語ページ。**REPORTED** [REPORT.md](/C:/GitHub/_worktrees/ueshiba-focus/docs/ueshiba_focus/REPORT.md:99) は一部人名の読みを未確認と記載。

6. **重さ：低 — 一部の英語が直訳調です**  
   “the victory of an Asian nation … astonished the world” などは意味を取れますが、いくつかの文は英語として硬く、たとえば1924年の “saved by negotiations by the Japanese consulate” は不自然な重複表現です（[data/ueshiba_en.js](/C:/GitHub/_worktrees/ueshiba-focus/data/ueshiba_en.js:61)）。  
   **直し方案：** “freed after negotiations by the Japanese consulate” など、内容を保った自然な英語に整える。  
   **公開前：** 読みやすさのため推奨。  
   **根拠：DIRECT** 英語文面。**INFERENCE** 読者が理解できるものの、自然な表現ではない。

画面コード上は、`lang`、タイトル、言語切り替え URL、`hreflang`、年代バー、NOW、カード、用語リンクは英語分岐に対応しています。COVID-19 の世界イベントは日本語データで座標が `null` のため、英語データでも発生地の地図表示にはなりません。日本語表示は日本語データを使う分岐です。なお、HTML の meta description は日本語のままです（[ueshiba/focusShell.html](/C:/GitHub/_worktrees/ueshiba-focus/ueshiba/focusShell.html:13)）。英語ページとして検索結果などにも使うなら、英語の説明文を設定する余地があります。

**確認できなかったこと：** ブラウザー上での実表示・スマートフォン表示・日本語モードの実動作、全項目の英訳の逐語的な完全性、国名85件の個別表記、外部資料による個々の歴史事実の再検証。ファイル変更は行っていません。