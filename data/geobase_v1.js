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
    "label": "15秒格子（約450m）。この版は縮めた画像",
    "max_altitude": null
   },
   "processing_ja": "まだ取得していない"
  },
  "asset": null,
  "status": "pending_download"
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
   "processing_ja": "まだ取得していない"
  },
  "asset": null,
  "status": "pending_download"
 },
 {
  "id": "current",
  "name_ja": "海流",
  "kind": "flow",
  "provenance": {
   "source": {
    "title": "OSCAR v2.0 (NASA PO.DAAC)",
    "url": "https://podaac.jpl.nasa.gov/dataset/OSCAR_L4_OC_FINAL_V2.0",
    "citation": "ESR (OSCAR v2.0)"
   },
   "license": {
    "name": "PO.DAAC のデータ利用の指針（再確認待ち）",
    "url": "https://podaac.jpl.nasa.gov/",
    "modification": "check",
    "redistribution": "check"
   },
   "confidence": "confirmed",
   "time": "present_observation",
   "resolution": {
    "label": "0.25°格子・1993年以降の解析。過去の海流ではない",
    "max_altitude": null
   },
   "processing_ja": "まだ取得していない"
  },
  "asset": null,
  "status": "pending_license"
 }
];
