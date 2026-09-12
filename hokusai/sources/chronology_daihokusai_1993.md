# HOKUSAI CHRONOLOGY HANDOFF｜大北斎展図録 1993

## 0. SOURCE / SCOPE

- Source: **『大北斎展図録』、東武美術館、1993年**
- Target pages: **年譜 pp.73–84**
- This handoff is a structured summary of the catalog chronology supplied by the user.
- **Do not silently overwrite this source layer with web knowledge or newer scholarship.** External verification should be a separate layer.

## 1. SOURCE HANDLING RULES

1. Preserve catalog uncertainty: `〜か / 〜頃 / 〜という / 〜といわれる` must not become FACT.
2. Edo-period month/day values may be lunar-calendar dates. Keep the original date string; add Gregorian conversion only as a separate derived field.
3. Catalog age is traditional Japanese counted age. Do not derive modern age from it without a separate field.
4. Distinguish `work_created`, `work_published`, `sketch/draft`, `performance/live_painting`, and `posthumous_reception`.
5. Keep source page on every record.

## 2. RECOMMENDED DATA MODEL

```json
{
  "id": "hokusai-1846-counterfeit-circular",
  "year": 1846,
  "date_original": "四月二十四日",
  "age_catalog": 87,
  "type": "NETWORK|TRAVEL|RESIDENCE|WORK|NAME|HEALTH|FAMILY|POSTHUMOUS",
  "title_ja": "大坂の贋作について回状",
  "description_ja": "大坂で横行する贋作について書物屋衆へ回状を送る。",
  "certainty": "stated|catalog_inference|tradition|secondary_note",
  "source": "大北斎展図録, 東武美術館, 1993",
  "source_page": 82,
  "source_note": "図録の留保表現・引用元があれば保持",
  "calendar_status": "original_unconverted"
}
```

## 3. CORE CHRONOLOGY

| Year | Age | Type | Summary | Certainty | Page |
|---|---:|---|---|---|---:|

| 1760 | 1 | 出生 | 9月23日、江戸本所割下水に出生。幼名は時太郎、のち鉄蔵。父については中島伊勢・川島某・倉田某など諸説を挙げ、図録は不明としている。 | 図録記載 | 73 |

| 1763頃 | 4 | 家族・居所 | 幕府御用鏡師・中島伊勢の養子となった可能性を図録が示す。 | 図録推定 | 73 |

| 1765頃 | 6 | 制作 | この頃から自ら好んで絵を描いたとする。図録は『富嶽百景』初編自跋を根拠に挙げる。 | 二次記載 | 73 |

| 1773頃 | 14 | 修業 | 木版彫刻家某について木版技術を学んだ可能性。 | 図録推定 | 73 |

| 1775頃 | 16 | 修業 | 洒落本の一部で文字彫りをしたとする記載。 | 伝承・要原文確認 | 73 |

| 1778頃 | 19 | 師弟 | 彫刻業を離れ、勝川春章へ入門した可能性。 | 図録推定 | 73 |

| 1779 | 20 | 画号・制作 | 勝川春朗を名乗り、錦絵を発表し始める。 | 図録記載 | 74 |

| 1785 | 26 | 画号 | 「群馬亭」の号を用いる。 | 図録記載 | 74 |

| 1787頃 | 28 | 居所 | 小伝馬町に住んだ可能性。図録は時期に留保を付す。 | 図録推定 | 74 |

| 1790頃 | 31 | 居所 | 年末頃に葛飾へ住んだ可能性。翌年の絵暦落款などを根拠とする。 | 図録推定 | 74 |

| 1793 | 34 | 師弟 | 師・勝川春章が没する。 | 図録記載 | 74 |

| 1794頃 | 35 | 画号 | 春朗号を廃し、俵屋宗理を襲名した可能性。 | 図録推定 | 75 |

| 1795–1796頃 | 36–37 | 居所 | 浅草大六天神脇町に住んだ可能性。 | 図録推定 | 75 |

| 1798 | 39 | 画号・交流 | 宗理号を門人宗二へ譲り「北斎辰政」を名乗る。長崎屋に滞在していたオランダ人の依頼で絵巻を描いたという記載もある。 | 図録記載＋伝承 | 75 |

| 1799 | 40 | 制作・画号 | 三囲稲荷の開帳で提灯・扁額を描いたという。「不染居北斎」の号がみえる。 | 伝承＋図録記載 | 75 |

| 1801 | 42 | 人物・制作 | 黄表紙『児童文殊稚教訓』に自画像を描く。居所について山の手・浅草寺付近など複数の推定がある。 | 図録記載＋推定 | 75 |

| 1802 | 43 | 交流・実演 | 11月15日、大田南畝らの場で席画に応じたとする。 | 図録記載 | 76 |

| 1804 | 45 | 実演 | 4月13日、音羽護国寺の開帳で百二十畳大の達磨半身像を描く。 | 図録記載 | 76 |

| 1805 | 46 | 画号 | 「九々蜃」の号がみえる。 | 図録記載 | 76 |

| 1806 | 47 | 交流・旅 | 春から初夏頃まで曲亭馬琴宅に寄宿。6月頃、上総国木更津へ旅し、水野清兵衛方に逗留したとする。 | 図録記載 | 76 |

| 1808 | 49 | 交流・居所 | 柳亭種彦の日記に北斎訪問の記録。8月24日、亀沢町に新宅を構え、柳橋で書画会を開催。 | 図録記載 | 76 |

| 1809 | 50 | 交流 | 柳亭種彦の日記に「北斎主より宝船板来る」との記録。 | 図録記載 | 76 |

| 1810頃 | 51 | 居所・画号 | 本所両国橋辺に住んだ可能性。この頃から「戴斗」号を用いた可能性。 | 図録推定 | 76 |

| 1811 | 52 | 交流・居所 | 馬琴の書画会に出席。柳亭種彦の日記にオランダ式の算盤を北斎宅で学ぶ旨の記録がある。葛飾に住んだ可能性。 | 図録記載＋推定 | 77 |

| 1812 | 53 | 旅・制作 | 秋頃名古屋に滞在し、門人牧墨僊宅に逗留。『北斎漫画』初編の下絵を描きためたとする。大坂・吉野・紀州・伊勢などへの旅行可能性も記される。 | 図録記載＋推定 | 77 |

| 1815頃 | 56 | 居所 | 春頃、蛇山に住んだ可能性（絵本の記載による）。 | 図録推定 | 77 |

| 1816 | 57 | 旅・実演 | 春頃名古屋花屋町に滞在した可能性。10月5日、名古屋西掛所で百二十畳大の達磨半身を描く。年末頃、大坂・伊勢・紀州・吉野などへ旅行したとされる。 | 図録記載＋推定 | 78 |

| 1819頃 | 60 | 画号 | 「戴斗」号を門人・斗円楼北泉へ譲った可能性。 | 図録推定 | 78 |

| 1820 | 61 | 画号・評価 | 「為一」落款の作品がみえる。戯作者・画工の番付で豊国と同格の上位に置かれたとする。浅草奥山の見世物絵の下絵を描いたという。 | 図録記載 | 78 |

| 1821 | 62 | 居所・家族 | 緑町に住んだ可能性。娘の死、長女阿美与と門人柳川重信の離縁など家族事項が記される。 | 図録推定＋記載 | 79 |

| 1822–1824 | 63–65 | 川柳・交流 | 柳亭種彦らが関わる川柳の会へたびたび出席。川柳の号として「卍／万字」を用いた記録がみえる。 | 図録記載 | 79 |

| 1824頃 | 65 | 健康 | この頃、中風を患うが自家製の薬で回復したという。 | 伝承 | 79 |

| 1826頃 | 67 | 家族 | 後妻が没したとする記載。人物番付で別格扱いされたとも記される。 | 図録記載 | 79 |

| 1827頃 | 68 | 家族 | 孫・柳川重信の子の問題行動に対応していたという記載。 | 二次記載 | 79 |

| 1830年代前半 | 71–74頃 | 代表作 | 年譜作品欄に『冨嶽三十六景』をはじめ、風景版画・絵手本の代表作群が集中する時期。 | 作品欄整理 | 80 |

| 1831 | 72 | 家族・居所 | 放蕩を尽くす孫を父親へ引き渡したとする。浅草明王院地内に住んだ可能性。川柳会への出席記録もある。 | 図録記載＋推定 | 80 |

| 1832 | 73 | 家族 | 閏11月28日、元女婿・柳川重信が没する。 | 図録記載 | 80 |

| 1834 | 75 | 居所・制作観 | この年までの転居は56回に及んだという。相州浦賀に潜居したとされる。『富嶽百景』初編自跋で自らの画業への抱負を述べる。 | 二次記載＋図録記載 | 80 |

| 1835 | 76 | 旅・交流 | 浦賀から江戸日本橋の版元へ手紙を送る。相州・豆州へ旅したとする。 | 図録記載 | 80 |

| 1836 | 77 | 居所・制作 | 浦賀から江戸へ戻る動きが記され、深川万年橋付近に住んだ可能性。肉筆画の制作を行い利益を得たという。同年の人名録では「居所不定」とされる。 | 図録記載＋推定 | 81 |

| 1837 | 78 | 健康・制作 | 読本『新編水滸画伝』に「病床ノ画」などと落款された挿絵がみえる。 | 図録記載 | 81 |

| 1839 | 80 | 火災・旅 | 本所石原片町・達磨横丁に住む。この頃初めて火災に遭い、多くの縮図を焼失したとされる。房総方面への旅行可能性も記される。 | 図録記載＋推定 | 81 |

| 1840 | 81 | 制作・居所 | 浅草田原町の中島平左衛門関係の報状に藍摺挿絵を描く。自画像のある書簡が残る。この頃、亀沢町に住んだ可能性。 | 図録記載＋推定 | 81 |

| 1841 | 82 | 小布施・交流 | 4月、高井鴻山へ書簡。祭屋台天井絵の下絵が進まないこと、阿栄の旅行手形、翌春の訪問希望などを伝える。 | 図録記載 | 81 |

| 1843 | 84 | 交流・転居 | 8月9日、高井鴻山へ再び書簡。この年までの転居回数は60回に及ぶという。 | 図録記載＋二次記載 | 81 |

| 1844 | 85 | 居所・旅 | 2月29日、嵩山房に稿料受取証を出す。この頃、向島小梅村に住む。3月頃に小布施へ赴いた可能性。また浅草寺前居住の可能性も記される。 | 図録記載＋推定 | 82 |

| 1845 | 86 | 小布施・居所 | 再度小布施へ旅した可能性。番場町／本所荒井町に住んだ可能性が記される。 | 図録推定 | 82 |

| 1846 | 87 | 居所・贋作対策・健康 | 春頃、西両国に住んだ可能性。4月24日、大坂で横行する贋作について書物屋衆へ回状を送る。8月の書簡に健勝ぶり、12月の書簡には病気再発・歩行困難を示す文言がある。 | 図録記載＋推定 | 82 |

| 1847 | 88 | 居所・作品整理 | 2月頃、三浦屋八右衛門と称して田町一丁目に住んだ可能性。天保13・14年の『日新除魔』二百余図を松代藩士・宮本慎助へ与える。 | 図録記載＋推定 | 82 |

| 1848 | 89 | 制作観・交流 | 絵手本『画本彩色通』初編自序で自身の絵画観に触れる。6月、門人・本間北曜と浅草の仮宅で面談。北曜に長崎での魚類写生を依頼し、肉筆画『鬼図』を贈る。 | 図録記載 | 82 |

| 1849 | 90 | 最晩年・死 | 春頃病床に臥す。4月18日暁七ツ時（図録注記では午前4時頃）、浅草聖天町遍照院境内の仮宅で没する。娘・阿栄が門人北嶺へ死亡通知を送り、4月19日に浅草誓教寺で葬儀。法名は南惣院奇誉北斎居士。 | 図録記載 | 83 |

| 1867 | 没後 | 受容 | パリ万国博覧会で『北斎漫画』等の絵本類や浮世絵多数が幕府により出品され、注目を集めたと図録が記す。 | 図録記載 | 83 |

| 1893 | 没後 | 研究史 | 3月7日、飯島虚心・小林文七・小川一真らが誓教寺を訪ね、北斎と佛清の墓碑を撮影。9月、飯島虚心著『葛飾北斎伝』上下二冊が刊行される。 | 図録記載 | 84 |


## 4. NAME / ALIAS STATE

| Name | Role | Approx. period | Note |
|---|---|---|---|

| 時太郎／鉄蔵 | 幼名・通称 | 1760年代〜 | 図録の出生記事 |

| 勝川春朗 | 画号 | 1779頃〜 | 勝川春章門下期 |

| 群馬亭 | 号 | 1785頃 | 年譜に使用記録 |

| 俵屋宗理 | 画号 | 1794頃〜1798頃 | 襲名時期は図録推定 |

| 北斎辰政 | 画号 | 1798頃〜 | 宗理号を譲った後 |

| 不染居北斎 | 号 | 1799頃 | 年譜に使用記録 |

| 九々蜃 | 号 | 1805頃 | 年譜に使用記録 |

| 戴斗 | 画号 | 1810頃〜1819頃 | 開始・譲渡とも図録に推定表現あり |

| 為一 | 画号 | 1820頃〜 | この頃から落款がみえる |

| 卍／万字 | 号・川柳号等 | 1820年代〜晩年 | 年譜に使用記録 |


## 5. HIGH-VALUE LINKS FOR HISTORY OS

- **P-LINK candidates:** 勝川春章、曲亭馬琴、柳亭種彦、大田南畝、牧墨僊、高井鴻山、阿栄（応為）、本間北曜、宮本慎助。
- **ROUTE candidates:** 江戸→名古屋、名古屋→大坂／伊勢／紀州／吉野、江戸↔浦賀、房総、小布施、長崎関連。
- **STATE candidates:** 春朗 → 宗理 → 北斎辰政／北斎 → 戴斗 → 為一 → 卍。
- **EVENT clusters:** giant-Daruma live painting (1804 / 1816), 北斎漫画 formation, 1839 fire, Obuse correspondence & ceiling-painting work, counterfeit circular (1846), final illness/death (1849), posthumous international reception (1867), biography/research-history (1893).

## 6. DO NOT FLATTEN THESE DISTINCTIONS

- `住む` vs `住むか`
- `旅した` vs `旅したといわれる`
- work publication year vs drawing/sketch year
- direct catalog statement vs catalog quotation of later biographies/traditions
- lifetime events vs posthumous reception

## 7. NEXT IMPLEMENTATION TASK (FOR CLAUDE CODE)

1. Create a **source-preserving JSON** first; do not edit current Hokusai UI yet.
2. Add `certainty`, `source_page`, `date_original`, `calendar_status` to the schema.
3. Import the chronology as a separate source layer.
4. Generate a diff/report showing which existing Hokusai events are supported, contradicted, or absent in this catalog.
5. Return the diff for user/GPT review **before merging or deleting any existing events**.

## 8. IMPORTANT LIMIT

The catalog has a large **主な作品** column. This handoff extracts representative works and life-history anchors, but it is **not yet a complete item-by-item transcription of every work listed on pp.73–84**. If the project requires a complete work catalog, perform that as a separate transcription task and retain page/row provenance.
