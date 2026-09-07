# HISTORY OS

> History is not a collection of events.  
> It is a map of connections.

> 歴史は出来事の集積ではない。  
> 接続の地図である。

---

# Purpose / 目的

History OS is an experimental operating system for observing civilization.

History OS は、
文明を観測するための実験的なOSである。

Rather than displaying isolated historical events,
it visualizes the relationships that connect people,
events,
routes,
processes,
and civilizations.

個々の歴史的出来事を表示するのではなく、

人物、
出来事、
航路、
文明プロセス、

それらを接続する構造を可視化することを目的とする。

---

# Core Philosophy / 基本思想

UI does not define the world.

The world generates the UI.

UIで世界を作らない。

世界がUIを生成する。

History is modeled as data,
not as screens.

歴史は画面ではなく、
データとして記述される。

Structure should emerge from observation,
not be imposed before observation.

構造は、
観測前に与えるものではなく、

観測結果から現れるものである。

---

# Observation Principle / 観測原則

Observation

↓

Expression

↓

Structuring (AI)

↓

Discussion

↓

Protocol

↓

Accepted Protocol

Observation comes first.

AI proposes structures.

Humans decide whether to adopt them.

まず観測する。

AIは構造を提案する。

採用を決めるのは人間である。

---

# Architecture / システム構造

History Data

↓

History Engine

↓

World State

↓

Renderer

↓

Globe.gl

---

# Engine / エンジン

generateWorldState(data, year)

is the single source of truth.

generateWorldState(data, year)

のみが世界状態を決定する。

---

# Renderer / 描画

The Renderer never performs historical reasoning.

It only visualizes the current World State.

Rendererでは歴史計算を行わない。

現在の World State を描画するだけである。

---

# Data Philosophy / データ哲学

History is composed of multiple semantic layers.

歴史は、
意味の異なる複数のレイヤーから構成される。

Examples

- ROOTS
- PROCESS
- EVENT
- PERSON
- ROUTE
- VOYAGE

Each layer has a different meaning.

Different meanings require different UI.

それぞれ意味が異なる。

したがって、
UIも同一ではない。

---

# Design Principle / 設計原則

Display follows meaning.

表示は意味に従う。

Interaction follows relationships.

操作は接続関係に従う。

Structure follows observation.

構造は観測から生まれる。

UI follows ontology.

UIは存在の種類（Ontology）に従う。

---

# Current Priority / 現在の優先事項

John Manjiro Mode

History OS is currently focused on completing
John Manjiro Mode as its first fully realized experience.

現在は、

John Manjiro Mode

を最初の完成作品として実装することを最優先としている。

---

# Run / 実行

**John Manjiro Mode の実動入口は `sandbox/index.html` です。**

The live entry point of John Manjiro Mode is `sandbox/index.html`.

`sandbox/index.html` は ES モジュールと相対パス（`../data/`, `../assets/`）で
`data/events.js` / `data/persons.js` / `sandbox/renderGlobe.js` /
`data/geo/countries.geojson` を読み込みます。
ファイルを直接開くのではなく、リポジトリのルートから静的サーバを立てて
`/sandbox/index.html` を開いてください。

```
# 例（リポジトリのルートで）
python -m http.server 8000
# → http://localhost:8000/sandbox/index.html
```

## 旧プロトタイプについて / Legacy files

次はいずれも旧プロトタイプで、John Manjiro Mode の実動入口ではありません。

- ルート直下の `index.html` / `main.js`（旧「GLOBAL HISTORY MAP」系）
- `render/renderGlobe.js`（旧描画）
- `engine/historyEngine.js`（旧エンジン）
- `data/data.json`（旧データ）
- ルート直下の空ファイル `geo`（未参照。実データは `data/geo/countries.geojson`）

The files above are earlier prototypes and are **not** the live entry point.

## データの正本 / Source of truth

- 人物史・世界史イベント：`data/events.js`（`type:'person'` / `type:'world'`）
- W-LINK 専用イベントの本文：`sandbox/index.html` 内の `WORLD_EXTRA`
- 左欄 WORLD EVENTS と W-LINK は `getWorldCanon(id)` を通じて同じ正本を参照します。
  `sandbox/index.html` 内の `worldLinks` は W-LINK 期間バーの配置情報のみで、
  本文は保持しません。
