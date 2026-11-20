// data/geobase_v1.js — 焼き物 Focus（History OS）。生成：ceramics-focus-001/build_ceramics_data.py（手で直さない）。
// 出典調査：Codex REPORT_001・002（2026-11-20）＋ α の点検 REVIEW_001・002。確かさ confirmed=確定 / range=幅 / narrative=語り。
// geoBase@1：すべての Focus が使える地の層。主題のデータを入れない（DATA_SPEC §5）。
export const geoBase = [
 {
  "id": "relief",
  "name_ja": "高さ・水深",
  "kind": "surface",
  "provenance": {
   "source": {
    "title": "GEBCO Compilation Group, GEBCO Grid",
    "url": "https://www.gebco.net/data-products/gridded-bathymetry-data",
    "citation": "GEBCO Compilation Group (GEBCO Grid)"
   },
   "license": {
    "name": "Public domain（GEBCO の利用条件。出典の表示が必要）",
    "url": "https://www.gebco.net/data-products/gridded-bathymetry-data/gebco-2024-grid/gebco-2024-grid-terms-of-use",
    "modification": true,
    "redistribution": true
   },
   "confidence": "confirmed",
   "time": "invariant",
   "resolution": {
    "label": "元は15秒格子（約450m）。この版は GEBCO の陰影図（WMS）を2048×1024に縮めた画像（約20km）",
    "max_altitude": null
   },
   "processing_ja": "GEBCO の WMS（GEBCO_LATEST の陰影図）を2026-11-20に取得し、縮小・彩度45%・明るさ62%に下げた（地を主題より鈍く）。値は持たない"
  },
  "asset": {
   "file": "../assets/geobase/relief_gebco_2048.jpg",
   "format": "jpeg"
  },
  "status": "ready"
 },
 {
  "id": "rock",
  "name_ja": "岩",
  "kind": "surface",
  "provenance": {
   "source": {
    "title": "Hartmann & Moosdorf (2012) GLiM, 0.5° grid (PANGAEA)",
    "url": "https://doi.pangaea.de/10.1594/PANGAEA.788537",
    "citation": "Hartmann, J.; Moosdorf, N. (2012) G3 13, Q12004"
   },
   "license": {
    "name": "CC BY 3.0",
    "url": "https://creativecommons.org/licenses/by/3.0/",
    "modification": true,
    "redistribution": true
   },
   "confidence": "confirmed",
   "time": "invariant",
   "resolution": {
    "label": "0.5°格子（約55km）。町の形までは分からない",
    "max_altitude": 0.6
   },
   "processing_ja": "第1レベル16クラスに色を付けた画像にした（2倍に拡大・境界はぼかさない）。分類は原典のまま"
  },
  "asset": {
   "file": "../assets/geobase/rock_glim_05deg.png",
   "format": "png"
  },
  "status": "ready",
  "classes": [
   {
    "value": 1,
    "code": "su",
    "name_ja": "未固結の堆積物",
    "color": "#7d7464",
    "cells": 14687
   },
   {
    "value": 3,
    "code": "ss",
    "name_ja": "砕屑性の堆積岩",
    "color": "#8a7a62",
    "cells": 11574
   },
   {
    "value": 5,
    "code": "sm",
    "name_ja": "混合の堆積岩",
    "color": "#84786a",
    "cells": 11579
   },
   {
    "value": 6,
    "code": "sc",
    "name_ja": "炭酸塩の堆積岩（石灰岩など）",
    "color": "#8c8a74",
    "cells": 4866
   },
   {
    "value": 14,
    "code": "ev",
    "name_ja": "蒸発岩",
    "color": "#948a7c",
    "cells": 163
   },
   {
    "value": 9,
    "code": "pa",
    "name_ja": "酸性の深成岩（花崗岩など）",
    "color": "#9a6e6a",
    "cells": 4178
   },
   {
    "value": 13,
    "code": "pi",
    "name_ja": "中性の深成岩",
    "color": "#8c6c70",
    "cells": 268
   },
   {
    "value": 4,
    "code": "pb",
    "name_ja": "塩基性の深成岩",
    "color": "#7a6070",
    "cells": 634
   },
   {
    "value": 7,
    "code": "va",
    "name_ja": "酸性の火山岩（流紋岩など）",
    "color": "#8e7096",
    "cells": 667
   },
   {
    "value": 10,
    "code": "vi",
    "name_ja": "中性の火山岩（安山岩など）",
    "color": "#7c6c8e",
    "cells": 1255
   },
   {
    "value": 2,
    "code": "vb",
    "name_ja": "塩基性の火山岩（玄武岩など）",
    "color": "#66607e",
    "cells": 2560
   },
   {
    "value": 12,
    "code": "py",
    "name_ja": "火砕岩",
    "color": "#90808e",
    "cells": 365
   },
   {
    "value": 8,
    "code": "mt",
    "name_ja": "変成岩",
    "color": "#6e7a6c",
    "cells": 8959
   },
   {
    "value": 16,
    "code": "ig",
    "name_ja": "氷河・氷床",
    "color": "#b4bcc2",
    "cells": 24743
   },
   {
    "value": 11,
    "code": "wb",
    "name_ja": "水域",
    "color": "#0b1622",
    "cells": 553
   },
   {
    "value": 15,
    "code": "nd",
    "name_ja": "データなし",
    "color": "#3a3f45",
    "cells": 47
   }
  ]
 },
 {
  "id": "current",
  "name_ja": "海流",
  "kind": "flow",
  "provenance": {
   "source": {
    "title": "OSCAR Sea Surface Velocity 1/3°, 5 Day Composite（ESR / NOAA ERDDAP jplOscar の写し）",
    "url": "https://coastwatch.pfeg.noaa.gov/erddap/griddap/jplOscar",
    "citation": "OSCAR (ESR) via NOAA ERDDAP"
   },
   "license": {
    "name": "ERDDAP の写しの条件：無償で利用・再配布してよい（正確さの保証はない）",
    "url": "https://coastwatch.pfeg.noaa.gov/erddap/info/jplOscar/index.html",
    "modification": true,
    "redistribution": true
   },
   "confidence": "confirmed",
   "time": "present_observation",
   "resolution": {
    "label": "2011年12月〜2014年9月の平均・2°おき（画面では4°おき）・深さ15m。過去の海流ではない",
    "max_altitude": null
   },
   "processing_ja": "5日平均を4つおき（29回）・緯度経度2°おきに取得し、地点ごとに平均した。0.03 m/s 未満は描かない"
  },
  "asset": {
   "file": "../data/geobase_current_v1.js",
   "format": "js"
  },
  "status": "ready"
 }
];
