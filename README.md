# GLOBAL HISTORY MAP

## History OS

文明因果ネットワークを地球儀上へ描画する実験的歴史OS。

---

## Architecture

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

## Core Philosophy

UIで世界を作らない。

世界はJSONから生成される。

---

## Engine

generateWorldState(data, year)

が唯一世界状態を決定する。

---

## Renderer

render層では歴史計算禁止。

Renderer は state を描画するだけ。
