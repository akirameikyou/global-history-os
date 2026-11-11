<!-- codex exec --ephemeral -s read-only, 2026-11-11 AUDIT-r9。~/.codex/config.toml の SHA-256 は送る前後で不変（8ac04494…efdd）。前回（0da73499…）からはこのセッションの外で変わっていた。ネット取得ができず出典の照合は HOLD。親が -o の出力をそのまま写した。 -->
[STUDIO_RESULT]
判定：FAIL

- **重大 — `data/manjiro_track.js` / `return_voyage_1851`** — 指定された暦日換算と出典PDFをこの監査では確認できず、日付アンカーの正確さを確定できませんでした。PDFと暦象年表の各日付を照合し、確認できない日付はアンカーから外すか、推定と明記してください。**commit前に要対応。** 印：HOLD
- **重大 — `data/events.js` / `manjiro_satsuma`** — 説明文は「8月27日に鹿児島入り」とする一方、追加された根拠の記述では嘉永4年8月1日＝8月27日に小船で鹿児島へ、としています。本文の「12日間」は那覇から山川までとカード文で限定されていますが、「小船で鹿児島へ」「島津斉彬から直接の御下問」は便りの記述との照合が未完了です。原文の記述範囲に合わせ、強い断定は根拠の表現に留めてください。**commit前に要対応。** 印：HOLD
- **中 — `data/events.js` / `manjiro_nagasaki`** — 注記では陸路・河川路・海路の道筋不明と説明し、中間点を `control`、区間を `estimated` としています。表示側がこの状態を推定として扱うかは確認できず、地図上では線が実際の道筋のように見える可能性があります。経路全体を推定表示にすることを確認してください。**commit前に要対応。** 印：INFERENCE
- **中 — `data/events.js` / `manjiro_return_ryukyu`** — 小禄経由と座標を推定と注記し、区間も `estimated` です。ただし、小渡浜・翁長の点は `documented` です。地点の記録と、地点間の道筋の推定が画面で区別されるか確認してください。**commit前に要対応。** 印：INFERENCE
- **中 — `manjiro/focusShell.html`・`manjiro/play_steps.js`** — 差分には `monthInferred`、日付付き出来事の航路時刻固定、まとめ表示、自動鑑賞終了時の丸めに関する変更が見えますが、実行時の表示条件と呼び出し経路までは確認できませんでした。H1・M1・L1・L3の解消は未確定です。**commit前に要確認。** 印：HOLD
- **低 — 改行** — `git diff --check` は問題を報告していません。ただしGitは `data/manjiro_track.js`、`manjiro/focusShell.html`、`manjiro/play_steps.js` を「次回Gitが触るとLFからCRLFに置換」と警告しています。差分の改行形式が統一されているかは確認してください。 印：DIRECT

sandboxの `index.html` が新しい `routePoints` / `routeType` を処理できるかは未確認です。ウェブ上のPDF・暦象年表の照合も取得待ちとなったため、日付換算と出典の強さについてPASS判定はできません。