<!-- codex exec --ephemeral -s read-only（codex.exe f71a721e…）, 2026-11-10 AUDIT-r4。~/.codex/config.toml の SHA-256 は送る前後で不変（36bdae08…2864）。11/9 の値（a301ee9a…）からは、このセッションの外で変わっていた。親が -o の出力をそのまま写した。 -->
[STUDIO_RESULT] **PASS WITH NOTES**

読み取り専用で確認しました。自動鑑賞の月送りは `nextStep` が後の月へ進める構造で、年送りの表示も分けられています。人物地球リンクは W-LINK の開始年、人物カードのリンクは現在の年を使っています。Wikidata の QID は URL に連結する前にエスケープされています。章の表紙文は `events.js` の記述だけではなく、focusShell 内の `AUTO_LINE` に定義されています。

- **REPORTED｜中｜`data/manjiro_wlink.js`（スエズの `dateNote` と `WORLD_EXTRA.suez_canal_opening`）** — 運河の開通は DIRECT として分けられていますが、追加資料では万次郎が通ったかは諸説あり、`events.js` には通ったとする記述があります。年譜の表現が事実として読まれる余地があります。**直し方：** 年譜・カードにも「スエズ経由とする資料がある」と明記し、経路は未確定として扱う。**commit 前に直すべきか：** はい。
- **REPORTED｜中｜`data/manjiro_wlink.js`（`honolulu_1820` の `description`・`cardText`）** — デイモンの支援は1850年の出来事ですが、1820年のカード本文に「ホノルルが捕鯨船の港になった」説明と並んでおり、当時の関係と誤読される可能性があります。`dateNote` は区別しています。**直し方：** 支援の年を本文にも明示する。**commit 前に直すべきか：** 推奨。
- **REPORTED｜中｜`data/manjiro_wlink.js`（`beechey_bonin_1827` の `description`・`cardText`）** — 調査ノートはビーチーの小笠原訪問を REPORTED としていますが、カード本文の断定を支える資料は調査ノート上で検索要約を含む論文写しです。訪問日の揺れは記載されていますが、根拠の強さが本文から分かりません。**直し方：** 「〜とされる」などの表現にし、カードにも確かさを表示する。**commit 前に直すべきか：** 推奨。
- **INFERENCE｜低｜`data/manjiro_wlink.js`（`japan_ground` の `manjiroRelation`）** — ジャパン・グラウンドからハウランド号の漂着・救助へのつながりを説明していますが、捕鯨漁場の広がりがこの救助を直接生んだと示す根拠は、記載された出典からは確認できません。**直し方：** 「背景の一つ」といった因果を弱める表現にする。**commit 前に直すべきか：** 推奨。
- **DIRECT｜低｜`data/manjiro_wlink.js`（`laxman_nemuro.persons`）** — 松平定信の QID `Q284038` と人物地球 ID `b0383` は調査ノートと一致しています。今回確認できた範囲で明白なID不一致は見つかりませんでした。
- **HOLD｜低｜`manjiro/focusShell.html`（W-LINK 表示処理）** — コード上、QID は Wikidata のページURLに組み立てられ、人物地球リンクにはイベントの開始年を渡しています。ただし実画面でのリンク先確認までは行っていません。`esc` についても、表示全体で安全に処理されているかは今回の読み取り確認だけでは断定できません。

日本語ファイルの行番号を正確に照合できない環境だったため、指摘箇所はファイル内のイベント名・フィールド名で示しました。