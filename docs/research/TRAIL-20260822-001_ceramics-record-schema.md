<!-- ARTIFACT METADATA
source: Claude Code (Implementation Engineer)
created_at: 2026-08-23
state: PROPOSED   # User未承認。Claude独断で VERIFIED / APPROVED へ昇格させない。
related_trail: TRAIL-20260822-001 (焼き物OS) / 定着: TRAIL-20260823-001
note: 空スキーマ（器のみ）。確定値の充填・史料評価は研究フェーズ（Gemini等）。
-->

# History OS 焼き物レコードスキーマ — TRAIL-20260822-001

> 実装担当（Claude Code）作成の**空スキーマ**。研究内容・確定値は含まない。
> GPT整理 §10 が実装担当へ委譲した「基本単位のデータ構造」を実装したもの。
> 境界1〜4・Gemini警告1〜3 を、スキーマ規則として埋め込み。
> **確定値（分類基準・温度域・産地・年代）は次担当（Gemini）の研究範囲。ここでは空欄。**

---

## 0. 共通エンベロープ（全レコード共通）

```json
{
  "id": "",                    // 例 CER-PLACE-0001。正本での一意採番（→警告W3）
  "type": "PLACE|MATERIAL|OBJECT|TECHNIQUE|PERSON|ROUTE|EVENT",
  "title": "",
  "time": {                    // History OS 長軸用
    "geologicAge": "",         // MATERIAL用（地質年代）
    "from": "", "to": "",      // 人類史（不確実な場合は範囲＋確度）
    "certainty": ""            // 確定／推定／諸説あり
  },
  "place": {                   // History OS 地図用
    "region": "", "site": "",
    "lat": null, "lng": null
  },
  "claims": [                  // 完了条件9：史実・科学・推測を分離
    { "text": "", "tag": "FACT|INTERPRETATION|HYPOTHESIS", "source": "" }
  ],
  "sources": [                 // 前議題と同じ史料区分を踏襲
    { "ref": "", "grade": "SOURCE-A|SOURCE-B|SOURCE-C" }
  ],
  "relations": [               // 他レコードへの型付きリンク（id参照）
    { "rel": "located_in|made_of|uses_technique|made_by|moved_via|caused_by", "targetId": "" }
  ]
}
```

---

## 1. 型別フィールド

### PLACE（産地・採土場・窯場・都市）
`kind`: 産地／採土場／窯場／都市　｜ `activePeriod`: from–to

### MATERIAL（粘土・鉱物）※**境界1：地質と土壌を混同しない**
- `bedrock`: 母岩・**地質**（風化元）
- `clay`: **土壌／粘土**（生成物）、`clayType`: 一次粘土／二次粘土（Gemini警告2）
- `minerals`: カオリン／長石／石英／鉄分／石灰 …（各 含有の有無・傾向）
- `sourcePlaceId`: 採取地（→PLACE）

### OBJECT（器）※**境界2：陶器・炻器・磁器を曖昧にしない**
材質分類は**三系統併記を必須**（Gemini警告3。値はGeminiが確定）：
```json
"classification": {
  "eastAsian": "",      // 陶／磁
  "japanese": "",       // 土器／陶器／炻器／磁器
  "western": "",        // Earthenware/Stoneware/Porcelain/Bone China
  "firingTempRange": "",// 焼成温度域（℃）
  "waterAbsorption": "",// 吸水率
  "translucency": ""    // 透光性
}
```
- `vesselForm`: 器種（壺／皿／椀／杯 …）
- ※**単線的発展史観を強制しない**（Gemini警告1）：分類は状態記述であって発展段階の序列ではない。

### TECHNIQUE（技法）
`kiln`: 野焼き〜穴窯〜登窯〜ガス／電気／工業炉　｜ `firing`: 酸化／還元／焼締め／素焼き／本焼き／磁器化　｜ `glaze`: 無釉／自然釉／灰釉／鉛釉／鉄釉／青磁／白磁／天目／色絵／染付 …　｜ `forming`／`decoration`／`tempC`

### PERSON / GROUP（陶工・工房・王侯・商人）
`role`: 陶工／職人集団／工房／王侯／商人

### ROUTE（移動）※**§7：移動したものを区別する**
- `fromPlaceId` → `toPlaceId`、`path`: 海路／陸路
- `moved`: **器／陶工／技術／原料／意匠 のいずれか（混ぜない）**

### EVENT（出来事）
`kind`: 窯成立／技術導入／王立工房設立／大量生産化 …

---

## 2. 発展要因タグ（Gemini警告2：地質決定論を避ける）

OBJECT・PLACE・EVENT に付与可。**粘土の有無だけに帰さない**：
`factors`: 原料 ／ 燃料（森林・石炭）／ 食文化（煮炊き・油肉等）／ 社会階層の需要 ／ 交易需要

---

## 3. 境界2/4 の非美術・非ブランド保証

OBJECT に `useTier`: 日用（保存・調理）／儀礼・宮廷／美術・鑑賞 を持たせ、日用品を同じ世界に必ず置ける構造にする（境界3・4）。

---

## 4. MVP観測線スケルトン（GPT §12。ノードのみ・中身は空）

推奨検証線を、埋めるべき空ノードとして用意：

1. `[OBJECT]` 最古級土器 —
2. `[OBJECT]` 中国磁器 —
3. `[ROUTE]` 海上交易（moved: 器）—
4. `[OBJECT]` 日本陶磁 —
5. `[ROUTE/TECHNIQUE]` 技術移動 —
6. `[OBJECT/EVENT]` ヨーロッパ磁器・マイセン —
7. `[OBJECT]` 近代テーブルウェア —

各ノードに 0. 共通エンベロープ＋型別フィールドを適用。中国磁器→マイセンの結節点は relations（moved_via / uses_technique）で接続。

---

## 完了条件（GPT §14）への対応状況（スキーマ側）
- 1 分類体系：三系統 classification で器 → 済（値は空）
- 2 地質・原料・焼成・釉薬の関係：MATERIAL/TECHNIQUE で分離 → 済
- 3 時間軸：time.geologicAge＋from/to → 器あり
- 4 地理特定：place.lat/lng → 器あり
- 5 伝播・交易・陶工移動：ROUTE.moved 区別 → 済
- 9 史実・科学・推測分離：claims.tag → 済
- ※3〜8 の**中身**は研究フェーズ（Gemini）で充填。
