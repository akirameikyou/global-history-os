# PROJECT — History OS

> 最初にここを読めば、History OS の現在地が分かる単一入口。
> Single entry point. New AI / new chat / future human: read this first.
> 巨大な仕様書ではない。詳細は各リンク先の正本を見る。

このファイルが指すものが正本 (Source of Truth)。古い `docs/CURRENT_STATE.md` / `docs/PROJECT_STATUS.md` はこのファイルに **superseded** され、履歴として残す。

---

## What This Is
History OS = 文明を観測するための実験的OS。個々の出来事でなく、人・出来事・航路・文明プロセスを接続する構造を可視化する。（詳細: `README.md`）

## Current Priority
**John Manjiro Mode** を最初の完成作品として実装する（出典: `README.md`）。関連ブランチ: `manjiro-exhibition-completion`。

## Current Stage
共同研究基盤の整備中（TRAIL-20260823-001）。この `PROJECT.md` と資料層 `docs/research/` の新設が最初の一歩。

## Source of Truth（正本）
- **World状態の正本**: `generateWorldState(data, year)` のみが世界状態を決定する（出典: README「single source of truth」）。
- **入口HTML**: リポジトリ直下 `index.html`。
- **意味データ**: `data/events.js`（historical events / startYear・endYear / relations / lat・lng / type / geoLayer参照）。events.js に大きなポリゴンデータを入れない。
- **基準ブランチ**: `main`。現在アクティブな実験枝: `experiment/aikido-focus-layer`, `experiment/coffee-field-starbucks`。
- ⚠️ **未確定**: 描画/エンジンの物理ファイル正本（→ Open Questions OQ1）。

## Current Task
共同研究基盤整備（TRAIL-20260823-001）。個別議題の Routing・承認は AI Team Studio 側で管理。

## Do Not Change（現在触ってはいけない）
出典: `docs/PROJECT_STATUS.md`（historical）。
- `world.pointOfView()` を `index.html` の外へ抽象化しない（現状、カメラ移動はここで直接呼ぶ時のみ安定）。
- `events.js` に大きなポリゴンデータを入れない。
- 安定版を壊さない（stable copy → experiment → 成功時のみ merge／ZIPバックアップ）。
- 情報密度を上げすぎない（"aesthetics of reduction"）。

## Open Questions（未解決・独断で決めない）
- **OQ1｜描画/エンジンの正本ファイル**: `engine/historyEngine.js` / `render/renderGlobe.js` / `sandbox/renderGlobe.js` が併存。どれがどの範囲の正本か未確定（構造判断: GPT / User）。
- **OQ2｜stale文書の整理**: `docs/CURRENT_STATE.md`・`docs/PROJECT_STATUS.md` は一部 stale（例: 存在しない `future/`・`data/geoLayers.js` を前提）。本文は履歴保持、正本は本 PROJECT.md。
- **OQ3｜events.js とスキーマ整合**: 焼き物Artifact（下記）のスキーマを `data/events.js` 形式へ写像する要否・方法。
- **OQ4｜最新安定の所在**: `main` と各 experiment 枝・`manjiro-exhibition-completion` の関係。

## Research / Specs 入口
- `docs/research/` — 研究Artifactの置き場（新設）。
  - `docs/research/TRAIL-20260822-001_ceramics-record-schema.md` — 焼き物OSレコードスキーマ（**state: PROPOSED**）
- Specs: 現状、専用ファイルなし（コードが事実上の正本）。今後整備。

## この文書について
- source: Claude Code (Repository Keeper) / TRAIL-20260823-001
- created_at: 2026-08-23
- state: PROPOSED（User承認前。承認後 APPROVED へ）
- supersedes: `docs/CURRENT_STATE.md`, `docs/PROJECT_STATUS.md`（履歴として保持）
- branch: `docs/artifact-workflow-v1`（main基点・remote未push の独立資料整備枝）
