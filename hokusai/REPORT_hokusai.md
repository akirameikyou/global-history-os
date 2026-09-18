# 葛飾北斎版 制作報告（History OS / Focus Mode 下地）

- 作成: 2026-09-10
- 担当: GPT（整理）・Gemini（監査/精密算出）・Claude Code（実装/一次情報ゲート）
- repo: global-history-os / branch: experiment/aikido-focus-layer / commit: 908b93e（local, push無）
- 成果物: `data/hokusai_views.js`（全46図データ）, `hokusai/preview.html`（2Dプレビュー）

## サマリー
- 富嶽三十六景 全46図を「描かれた実際の場所（視点）」に配置し、各図から富士山頂へ伸びる**画角コーン**で「どこから何を見ていたか」を可視化する、History OS 新Focusモードの下地。
- 既存（Aikido/Soccer/Coffee/万次郎）には非干渉、新規追加のみ。
- 46図データ化。精密化の出所＝Gemini算出41図／Claude精密化5図。PD画像 46/46 解決・検証済。**架空データ5件を水際で除外**。

## 01. 目的と成果物
- `data/hokusai_views.js`: 全46図。視点座標・富士方位・距離・画角(coneHalfDeg)・標高・見上げ角・Commons PD画像URL・Google Earth/StreetViewリンク。
- `hokusai/preview.html`: 単体2Dプレビュー。日本詳細ポリゴン上に視点＋富士コーンを描画。半角スライダー／1図選択／角度書き出し(JSON)／浮世絵サムネ／現代風景リンク。History OS本体に非依存。

## 02. 制作プロセス（AI Team Studio・COMPACT ONLY リレー）
- a. 場所比定データ起草（Claude）: Wikipedia一次情報で46図の正式名確定→視点＝描画地点、富士山頂(35.3606,138.7274)へ向かう画角コーンを設計。確度=documented/estimated/artistic。
- b. 画像URL付与（Commons API）: 全46図のPD画像を直URL・サイズ・ライセンスまで解決し image 欄へ。
- c. プレビュー計器化: 和紙調の中部日本地図＋視点＋コーン。半角比較・1図選択・角度書き出し→データ焼き込み。
- d. 精密データ統合（Gemini）: 視点座標・per-view画角(望遠圧縮=近景ほど広角)・標高・見上げ角・Google Earthパーマリンクを算出。作品名を突合キーに地理属性のみJOIN。
- e. 仕上げ（Claude）: 誤対応2図の画像を正しいMET版へ差替、要確認フラグ全消去。46/46精密化しローカルcommit。

## 03. 品質管理 ─ ハルシネーションの水際遮断（最重要教訓）
Geminiが提示した「完全46図」には創作・水増しが含まれ、Claude／一次情報がゲートキーパーとして遮断した。

検知した誤り:
- ✕ 武州世田谷 = 富嶽三十六景に存在しない完全な創作（他シリーズとの混同）
- ✕（裏）バリアント4件（品川御殿山・大野新田・甲州伊沢暁・諸人登山）= 実在図の重複水増し
- ✕ 実在5図の欠落（五百羅漢寺さゞゐ堂・礫川雪ノ旦・田子の浦・江戸日本橋・登戸浦）= 数合わせのため脱落
- ◯ 誤名是正: 「武州鹿嬬」→ 実際は「上総ノ海路」。数値は活かし作品名だけ一次情報で正した

遮断の原則: **「作品名・通し番号・PD画像＝一次情報を主キー(Single Source of Truth)とし、Geminiの算出値は地理属性のみLEFT JOIN」**。
→ Geminiの幾何計算力 × Claude/一次情報のゲートキーピング、という多層防御が機能。
補足: Wikipedia記事の画像枠も2件（#6青山円座松・#38千住花街）が誤り→一次のCommons APIで解決。「二次情報は要検証」を再確認。

## 04. データ仕様
富士アンカー: `FUJI = { lat:35.3606, lng:138.7274, alt_m:3776 }`。1図=1レコード。
- viewpoint{lat,lng} / viewpointName / alt_m : 描画地点の座標・地点名・標高
- bearingToFuji : 視点→富士山頂の真方位（座標から再計算）
- distanceKm : 富士までの直線距離
- coneHalfDeg : 画角コーン半角（望遠圧縮：近景広・遠景狭）
- elevationDeg : 富士山頂への見上げ角
- cone{apex,tip=Fuji,farLeft,farRight} : 描画用ジオメトリ
- image{url,page,bytes,mime,license,verify} : Commons PD 画像
- googleEarthUrl / googleMapsUrl : 3D/ストリートビュー リンク
- confidence : documented / estimated / artistic
- refined / refinedSource : 精密化済か / 出所（無印=Gemini, "claude"=Claude精密化）
- note : 地理・構図の短い解説

## 05. 実装者の設計所見（要判断・GPT/ユーザーへ差し戻し）
**「画角コーン」は History OS 既存にない新しい観測プリミティブ。**
- 既存の視覚語彙 = 「出来事間の causality 弧」「人物の航路」＝関係・移動の表現。
- 画角コーン = 「観測者がどこから何を見ていたか（視線の錐）」という別種のメタファー。
- → 北斎専用の意匠にとどめるか、汎用の "Observer Focus" プリミティブへ育てるかは**思想・設計の判断**。実装側で固定せず差し戻す。
その他:
- 北斎版は「Core(汎用エンジン)＋Focus(アダプタ)」構造へAikidoモードと同じデータ駆動で素直に載った（世界観と整合）。
- 2D→3D: 本番globe.glではコーンは大圏の楔になる。幾何は対応済み、「arc描画かpolygon layerか」は3D実装時の判断。
- データ衛生の型: refinedSource/verify で出所と検証状態を保持＝OSシリーズ全体で再利用できる規律。

## 06. 未了と次段
- (c) 本番3D Focusモード: `hokusaiMode.js`（Aikidoアダプタ契約）＋日本詳細ポリゴンレイヤで globe.gl 地球儀へ。※「コーン=新プリミティブ」の設計判断が前提。
- 角度の最終確定: 各図を実際の絵/ストリートビューと照合し per-view 半角を微調整。
- Gemini `hokusaiViewsMissing5` が届けば Claude精密化5図(#23,24,28,31,33)を差替。
- 要確認（experimentブランチ規則）: main反映・push・PR・画像ローカル保存(全46図≈153MB)はユーザー承認後。

## 07. 全46図データ一覧
No | 作品名 | 視点地(代表) | 確度 | 半角° | 距離km | 出所

| No | 作品名 | 視点地 | 確度 | 半角° | 距離km | 出所 |
|---:|---|---|---|---:|---:|---|
| 1 | 神奈川沖浪裏 | 横浜本牧沖〜神奈川宿沖の東京湾海上 | artistic | 7.0 | 86.7 | gemini |
| 2 | 凱風快晴 | 朝霧高原〜富士宮山麓 | artistic | 18.0 | 13.8 | gemini |
| 3 | 山下白雨 | 富士山東南麓 | artistic | 18.0 | 12.5 | gemini |
| 4 | 深川万年橋下 | 江東区常盤・小名木川合流点万年橋北詰 | documented | 5.5 | 103.1 | gemini |
| 5 | 東都駿台 | 千代田区神田駿河台・ニコライ堂付近高台 | documented | 6.0 | 101.1 | gemini |
| 6 | 青山円座松 | 港区南青山・竜巌寺境内 | documented | 6.0 | 95.8 | gemini |
| 7 | 武州千住 | 足立区千住橋戸町・千住大橋北詰 | documented | 5.5 | 105.7 | gemini |
| 8 | 武州玉川 | 調布市・狛江市付近多摩川河原 | documented | 7.5 | 80.2 | gemini |
| 9 | 甲州犬目峠 | 上野原市犬目・甲州街道旧犬目宿西峠 | documented | 9.0 | 39.8 | gemini |
| 10 | 尾州不二見原 | 名古屋市中区富士見町 | estimated | 3.5 | 166.8 | gemini |
| 11 | 東都浅艸本願寺 | 台東区西浅草・東本願寺 | documented | 5.5 | 104.0 | gemini |
| 12 | 武陽佃嶌 | 中央区佃・隅田川河口の佃島東岸 | documented | 5.5 | 101.5 | gemini |
| 13 | 相州七里濱 | 鎌倉市七里ガ浜海岸・行合川河口付近 | documented | 8.0 | 71.8 | gemini |
| 14 | 相州梅澤左 | 二宮町梅沢海岸 | documented | 9.0 | 47.8 | gemini |
| 15 | 甲州石班澤 | 富士川町鰍沢・兎の瀬 | documented | 10.0 | 31.3 | gemini |
| 16 | 甲州三嶌越 | 山中湖村〜小山町国境・籠坂峠旧道 | documented | 15.0 | 13.4 | gemini |
| 17 | 信州諏訪湖 | 諏訪市立石公園〜塩嶺峠東麓高台 | documented | 6.0 | 96.1 | gemini |
| 18 | 駿州江尻 | 静岡市清水区江尻町・稚児橋〜巴川河口低地 | documented | 9.0 | 44.0 | gemini |
| 19 | 遠江山中 | 静岡県周智郡森町〜秋葉街道の山中木挽場 | estimated | 7.0 | 87.3 | gemini |
| 20 | 常州牛堀 | 茨城県潮来市牛堀・北浦〜利根川合流点 | documented | 3.5 | 175.9 | gemini |
| 21 | 江都駿河町三井見世略図 | 中央区日本橋室町・三井越後屋 | documented | 5.5 | 101.4 | gemini |
| 22 | 御厩川岸より両国橋夕陽見 | 墨田区本所・厩橋東詰南 | documented | 5.5 | 103.8 | gemini |
| 23 | 五百らかん寺さゞゐどう | 江東区大島・本所五百羅漢寺 栄螺堂 | documented | 5.5 | 105.5 | claude |
| 24 | 礫川雪ノ且 | 文京区小石川・後楽園周辺高台の茶屋 | documented | 6.0 | 100.0 | claude |
| 25 | 下目黒 | 目黒区下目黒・目黒不動尊周辺 | documented | 6.5 | 93.9 | gemini |
| 26 | 隠田の水車 | 渋谷区神宮前・旧穏田川 | documented | 6.0 | 95.1 | gemini |
| 27 | 相州江の嶌 | 藤沢市片瀬海岸・洲鼻通り〜砂州 | documented | 8.0 | 69.1 | gemini |
| 28 | 東海道江尻田子の浦略図 | 富士市田子の浦 | documented | 11.0 | 25.4 | claude |
| 29 | 東海道吉田 | 豊橋市札木町・吉田宿本陣跡・豊川沿い | documented | 5.0 | 138.5 | gemini |
| 30 | 上総ノ海路 | 東京湾・千葉県富津岬沖〜木更津沖海上 | estimated | 6.0 | 95.6 | gemini |
| 31 | 江戸日本橋 | 中央区日本橋・日本橋北詰 | documented | 5.5 | 101.3 | claude |
| 32 | 隅田川関屋の里 | 足立区千住関屋町・牛田水神付近旧堤防 | documented | 5.5 | 107.2 | gemini |
| 33 | 登戸浦 | 千葉市中央区登戸・江戸湾東岸の干潟 | estimated | 5.5 | 126.0 | claude |
| 34 | 相州箱根湖水 | 箱根町元箱根・芦ノ湖東岸 | documented | 10.0 | 32.3 | gemini |
| 35 | 甲州三坂水面 | 富士河口湖町・御坂峠旧道 | documented | 12.0 | 19.8 | gemini |
| 36 | 東海道程ヶ谷 | 横浜市保土ケ谷区・保土ヶ谷宿品濃坂付近 | documented | 7.0 | 77.6 | gemini |
| 37 | 本所立川 | 墨田区菊川・竪川沿いの材木問屋街 | documented | 5.5 | 103.9 | gemini |
| 38 | 従千住花街眺望ノ不二 | 足立区千住仲町・千住遊郭裏手・日光街道堤防 | documented | 5.5 | 106.3 | gemini |
| 39 | 東海道品川御殿山ノ不二 | 品川区北品川・御殿山高台 | documented | 6.0 | 96.1 | gemini |
| 40 | 相州仲原 | 平塚市中原・中原御殿跡付近 | documented | 8.5 | 54.1 | gemini |
| 41 | 甲州伊沢暁 | 笛吹市石和町・甲州街道石和宿東の鵜飼川河畔 | documented | 9.0 | 33.5 | gemini |
| 42 | 身延川裏不二 | 南巨摩郡身延町・身延川 | documented | 11.0 | 25.7 | gemini |
| 43 | 駿州大野新田 | 富士市大野新田・浮島ヶ原湿地帯 | documented | 12.0 | 24.8 | gemini |
| 44 | 駿州片倉茶園ノ不二 | 富士宮市片倉・茶畑地帯 | documented | 15.0 | 17.8 | gemini |
| 45 | 東海道金谷ノ不二 | 島田市金谷・大井川右岸川原渡し場跡 | documented | 6.5 | 80.1 | gemini |
| 46 | 諸人登山 | 富士山頂付近・八合目〜九合目登山道岩場 | documented | 25.0 | 0.7 | gemini |

確度: documented=実在場所ほぼ確実 / estimated=地域特定・構図デフォルメ / artistic=海上・心象・合成。
出所: gemini=Gemini算出(41) / claude=Claude精密化(5)。

出典: 作品名・場所=Wikipedia（富嶽三十六景）/ 画像=Wikimedia Commons（PD・葛飾北斎 1760–1849）/ 地図=dataofjapan/land（←国土数値情報）。
