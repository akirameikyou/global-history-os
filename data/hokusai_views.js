// data/hokusai_views.js  —  DRAFT / TASK: 葛飾北斎版 Focus (History OS)
// 富嶽三十六景 全46図・全て精密化(refined)。viewpoint=描画地点。
// refinedSource: 無印=Gemini算出(41図) / "claude"=Claude精密化(#23,24,28,31,33。Gemini補完データ未着のため。届けば差替可)。
// 安全統合: 架空/重複5件(世田谷・裏4)は不採用。#30は上総ノ海路の正名で採用。
// coneHalfDeg=画角半角(望遠圧縮反映)。image=Commons PD(#6,#38はファイル名/キャプション不一致で要確認)。
// bearingToFuji/distanceKm/cone/Google Earth・SVリンクは viewpoint から生成。
export const FUJI = { lat: 35.3606, lng: 138.7274, alt_m: 3776 };

export const hokusaiViews = [
  {
    "id": "kanagawa_okinamiura",
    "no": 1,
    "title_ja": "神奈川沖浪裏",
    "title_en": "The Great Wave off Kanagawa",
    "romaji": "Kanagawa oki nami-ura",
    "region": "相模湾沖",
    "viewpoint": {
      "lat": 35.435,
      "lng": 139.68
    },
    "confidence": "artistic",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Great Wave off Kanagawa2.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Great_Wave_off_Kanagawa2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Great_Wave_off_Kanagawa2.jpg",
      "w": 8242,
      "h": 5640,
      "bytes": 12795605,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "押送船の航路である本牧沖合。大波のフラクタル曲線と富士山頂の対比。",
    "bearingToFuji": 264.8,
    "distanceKm": 86.7,
    "cone": {
      "halfAngleDeg": 7.0,
      "apex": {
        "lat": 35.435,
        "lng": 139.68
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2666,
        "lng": 138.7466
      },
      "farRight": {
        "lat": 35.4557,
        "lng": 138.7232
      }
    },
    "coneHalfDeg": 7.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.435,139.68,0a,867d,35y,264.8h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.435,139.68&heading=264.8&pitch=2",
    "viewpointName": "横浜本牧沖〜神奈川宿沖の東京湾海上",
    "elevationDeg": 2.5,
    "alt_m": 0
  },
  {
    "id": "gaifu_kaisei",
    "no": 2,
    "title_ja": "凱風快晴",
    "title_en": "Fine Wind, Clear Morning",
    "romaji": "Gaifu kaisei",
    "region": "富士山",
    "viewpoint": {
      "lat": 35.39,
      "lng": 138.58
    },
    "confidence": "artistic",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Red Fuji southern wind clear morning.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/5/57/Red_Fuji_southern_wind_clear_morning.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Red_Fuji_southern_wind_clear_morning.jpg",
      "w": 4400,
      "h": 2937,
      "bytes": 2839776,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "赤富士。夏の早朝に山肌が赤く染まる気象現象の心象的クローズアップ。",
    "cone": {
      "halfAngleDeg": 18.0,
      "apex": {
        "lat": 35.39,
        "lng": 138.58
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.3992,
        "lng": 138.7318
      },
      "farRight": {
        "lat": 35.3247,
        "lng": 138.7094
      }
    },
    "bearingToFuji": 103.7,
    "distanceKm": 13.8,
    "viewpointName": "朝霧高原〜富士宮山麓（南西山麓遠望）",
    "alt_m": 850,
    "elevationDeg": 12.0,
    "coneHalfDeg": 18.0,
    "googleEarthUrl": "https://earth.google.com/web/@35.39,138.58,850a,500d,35y,103.7h,72t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.39,138.58&heading=103.7&pitch=12",
    "refined": true
  },
  {
    "id": "sanka_hakuu",
    "no": 3,
    "title_ja": "山下白雨",
    "title_en": "Thunderstorm Beneath the Summit",
    "romaji": "Sanka hakuu",
    "region": "富士山麓",
    "viewpoint": {
      "lat": 35.33,
      "lng": 138.86
    },
    "confidence": "artistic",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Katsushika Hokusai, tempesta sotto la vetta, dalla serie delle 36 vedute del monte fuji, 1831 ca.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Katsushika_Hokusai%2C_tempesta_sotto_la_vetta%2C_dalla_serie_delle_36_vedute_del_monte_fuji%2C_1831_ca.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Katsushika_Hokusai%2C_tempesta_sotto_la_vetta%2C_dalla_serie_delle_36_vedute_del_monte_fuji%2C_1831_ca.jpg",
      "w": 3780,
      "h": 2556,
      "bytes": 4825186,
      "mime": "image/jpeg",
      "license": "CC BY 3.0",
      "verify": "ok"
    },
    "note": "黒富士。山頂は晴れ、山麓に積乱雲と稲妻。高度による気象の二重性。",
    "cone": {
      "halfAngleDeg": 18.0,
      "apex": {
        "lat": 35.33,
        "lng": 138.86
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.3256,
        "lng": 138.7223
      },
      "farRight": {
        "lat": 35.3925,
        "lng": 138.7454
      }
    },
    "bearingToFuji": 285.8,
    "distanceKm": 12.5,
    "viewpointName": "富士山東南麓（須走〜御殿場山麓）",
    "alt_m": 600,
    "elevationDeg": 14.2,
    "coneHalfDeg": 18.0,
    "googleEarthUrl": "https://earth.google.com/web/@35.33,138.86,600a,500d,35y,285.8h,70t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.33,138.86&heading=285.8&pitch=14",
    "refined": true
  },
  {
    "id": "fukagawa_mannenbashi",
    "no": 4,
    "title_ja": "深川万年橋下",
    "title_en": "Under Mannen Bridge at Fukagawa",
    "romaji": "Fukagawa Mannen-bashi shita",
    "region": "江戸・深川",
    "viewpoint": {
      "lat": 35.6826,
      "lng": 139.7963
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 深川万年橋下-Under the Mannen Bridge at Fukagawa (Fukagawa Mannenbashi shita), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141017.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/1/13/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%B7%B1%E5%B7%9D%E4%B8%87%E5%B9%B4%E6%A9%8B%E4%B8%8B-Under_the_Mannen_Bridge_at_Fukagawa_%28Fukagawa_Mannenbashi_shita%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141017.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%B7%B1%E5%B7%9D%E4%B8%87%E5%B9%B4%E6%A9%8B%E4%B8%8B-Under_the_Mannen_Bridge_at_Fukagawa_%28Fukagawa_Mannenbashi_shita%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141017.jpg",
      "w": 3867,
      "h": 2583,
      "bytes": 2930072,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "小名木川のアーチ橋越しに隅田川対岸と富士を覗く透視図法的構図。",
    "bearingToFuji": 250.0,
    "distanceKm": 103.1,
    "cone": {
      "halfAngleDeg": 5.5,
      "apex": {
        "lat": 35.6826,
        "lng": 139.7963
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2791,
        "lng": 138.7711
      },
      "farRight": {
        "lat": 35.4454,
        "lng": 138.6944
      }
    },
    "coneHalfDeg": 5.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.6826,139.7963,2a,1031d,35y,250.0h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.6826,139.7963&heading=250.0&pitch=2",
    "viewpointName": "江東区常盤・小名木川合流点万年橋北詰",
    "elevationDeg": 2.1,
    "alt_m": 2
  },
  {
    "id": "toto_sundai",
    "no": 5,
    "title_ja": "東都駿台",
    "title_en": "Sundai, Edo",
    "romaji": "Toto Sundai",
    "region": "江戸・駿河台",
    "viewpoint": {
      "lat": 35.6985,
      "lng": 139.7645
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 東都駿台-Surugadai in Edo (Tōto Sundai), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140999.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/c7/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%9D%B1%E9%83%BD%E9%A7%BF%E5%8F%B0-Surugadai_in_Edo_%28T%C5%8Dto_Sundai%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP140999.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%9D%B1%E9%83%BD%E9%A7%BF%E5%8F%B0-Surugadai_in_Edo_%28T%C5%8Dto_Sundai%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP140999.jpg",
      "w": 3710,
      "h": 2523,
      "bytes": 2885336,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "神田川沿いの高台から武家屋敷の屋根越しに西方を望む。",
    "bearingToFuji": 248.5,
    "distanceKm": 101.1,
    "cone": {
      "halfAngleDeg": 6.0,
      "apex": {
        "lat": 35.6985,
        "lng": 139.7645
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2746,
        "lng": 138.7766
      },
      "farRight": {
        "lat": 35.4507,
        "lng": 138.6889
      }
    },
    "coneHalfDeg": 6.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.6985,139.7645,28a,1011d,35y,248.5h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.6985,139.7645&heading=248.5&pitch=2",
    "viewpointName": "千代田区神田駿河台・ニコライ堂付近高台",
    "elevationDeg": 2.1,
    "alt_m": 28
  },
  {
    "id": "aoyama_enzanomatsu",
    "no": 6,
    "title_ja": "青山円座松",
    "title_en": "The Cushion Pine at Aoyama",
    "romaji": "Aoyama Enza-no-matsu",
    "region": "江戸・青山",
    "viewpoint": {
      "lat": 35.6698,
      "lng": 139.7152
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 青山円座松-Cushion Pine at Aoyama (Aoyama enza no matsu), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140995.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/9/92/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E9%9D%92%E5%B1%B1%E5%86%86%E5%BA%A7%E6%9D%BE-Cushion_Pine_at_Aoyama_%28Aoyama_enza_no_matsu%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP140995.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File%3A%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E9%9D%92%E5%B1%B1%E5%86%86%E5%BA%A7%E6%9D%BE-Cushion_Pine_at_Aoyama_%28Aoyama_enza_no_matsu%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP140995.jpg",
      "w": 3877,
      "h": 2613,
      "bytes": 2912497,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok (差替済)"
    },
    "note": "傘のように円形に仕立てられた巨松越しに遠望する富士。",
    "bearingToFuji": 249.3,
    "distanceKm": 95.8,
    "cone": {
      "halfAngleDeg": 6.0,
      "apex": {
        "lat": 35.6698,
        "lng": 139.7152
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.279,
        "lng": 138.7724
      },
      "farRight": {
        "lat": 35.4468,
        "lng": 138.6922
      }
    },
    "coneHalfDeg": 6.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.6698,139.7152,30a,958d,35y,249.3h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.6698,139.7152&heading=249.3&pitch=2",
    "viewpointName": "港区南青山・竜巌寺境内（旧円座松跡）",
    "elevationDeg": 2.2,
    "alt_m": 30
  },
  {
    "id": "bushu_senju",
    "no": 7,
    "title_ja": "武州千住",
    "title_en": "Senju in Musashi Province",
    "romaji": "Bushu Senju",
    "region": "江戸・千住",
    "viewpoint": {
      "lat": 35.741,
      "lng": 139.7985
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 武州千住-Senju in Musashi Province (Bushū Senju), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141087.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%AD%A6%E5%B7%9E%E5%8D%83%E4%BD%8F-Senju_in_Musashi_Province_%28Bush%C5%AB_Senju%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141087.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%AD%A6%E5%B7%9E%E5%8D%83%E4%BD%8F-Senju_in_Musashi_Province_%28Bush%C5%AB_Senju%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141087.jpg",
      "w": 3838,
      "h": 2501,
      "bytes": 2732287,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "荒川（現隅田川）土手から水門と農夫、釣竿越しに望む。",
    "bearingToFuji": 246.7,
    "distanceKm": 105.7,
    "cone": {
      "halfAngleDeg": 5.5,
      "apex": {
        "lat": 35.741,
        "lng": 139.7985
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2787,
        "lng": 138.7781
      },
      "farRight": {
        "lat": 35.4453,
        "lng": 138.6875
      }
    },
    "coneHalfDeg": 5.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.741,139.7985,3a,1057d,35y,246.7h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.741,139.7985&heading=246.7&pitch=2",
    "viewpointName": "足立区千住橋戸町・千住大橋北詰・水門堤防",
    "elevationDeg": 2.0,
    "alt_m": 3
  },
  {
    "id": "bushu_tamagawa",
    "no": 8,
    "title_ja": "武州玉川",
    "title_en": "Tama River in Musashi Province",
    "romaji": "Bushu Tama-gawa",
    "region": "武蔵・多摩川",
    "viewpoint": {
      "lat": 35.632,
      "lng": 139.548
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 武州玉川-Fuji—The Tama River, Musashi Province, from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140975.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/7/77/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%AD%A6%E5%B7%9E%E7%8E%89%E5%B7%9D-Fuji%E2%80%94The_Tama_River%2C_Musashi_Province%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP140975.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%AD%A6%E5%B7%9E%E7%8E%89%E5%B7%9D-Fuji%E2%80%94The_Tama_River%2C_Musashi_Province%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP140975.jpg",
      "w": 3918,
      "h": 2711,
      "bytes": 2760903,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "多摩川の清流と小舟、朝霧の向こうに端正な富士。",
    "bearingToFuji": 248.1,
    "distanceKm": 80.2,
    "cone": {
      "halfAngleDeg": 7.5,
      "apex": {
        "lat": 35.632,
        "lng": 139.548
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2755,
        "lng": 138.7783
      },
      "farRight": {
        "lat": 35.4496,
        "lng": 138.6904
      }
    },
    "coneHalfDeg": 7.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.632,139.548,30a,802d,35y,248.1h,81t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.632,139.548&heading=248.1&pitch=3",
    "viewpointName": "調布市・狛江市付近多摩川河原",
    "elevationDeg": 2.7,
    "alt_m": 30
  },
  {
    "id": "koshu_inumetoge",
    "no": 9,
    "title_ja": "甲州犬目峠",
    "title_en": "Inume Pass in Kai Province",
    "romaji": "Koshu Inume-toge",
    "region": "甲斐・犬目峠",
    "viewpoint": {
      "lat": 35.6268,
      "lng": 139.0205
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 甲州犬目峠-The Inume Pass in Kai Province (Kōshū Inume tōge), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141045.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/3/3b/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E7%94%B2%E5%B7%9E%E7%8A%AC%E7%9B%AE%E5%B3%A0-The_Inume_Pass_in_Kai_Province_%28K%C5%8Dsh%C5%AB_Inume_t%C5%8Dge%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141045.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E7%94%B2%E5%B7%9E%E7%8A%AC%E7%9B%AE%E5%B3%A0-The_Inume_Pass_in_Kai_Province_%28K%C5%8Dsh%C5%AB_Inume_t%C5%8Dge%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141045.jpg",
      "w": 3867,
      "h": 2692,
      "bytes": 2837468,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "前衛尾根が両側から裾野を挟み込む稜線マッチングの模範地点。",
    "bearingToFuji": 222.0,
    "distanceKm": 39.8,
    "cone": {
      "halfAngleDeg": 9.0,
      "apex": {
        "lat": 35.6268,
        "lng": 139.0205
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.3264,
        "lng": 138.7816
      },
      "farRight": {
        "lat": 35.4011,
        "lng": 138.6792
      }
    },
    "coneHalfDeg": 9.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.6268,139.0205,440a,500d,35y,222.0h,79t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.6268,139.0205&heading=222.0&pitch=5",
    "viewpointName": "上野原市犬目・甲州街道旧犬目宿西峠",
    "elevationDeg": 4.8,
    "alt_m": 440
  },
  {
    "id": "bishu_fujimigahara",
    "no": 10,
    "title_ja": "尾州不二見原",
    "title_en": "Fujimigahara Field in Owari Province",
    "romaji": "Bishu Fujimigahara",
    "region": "尾張・名古屋",
    "viewpoint": {
      "lat": 35.1542,
      "lng": 136.9083
    },
    "confidence": "estimated",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 尾州不二見原-Fujimigahara in Owari Province (Bishū Fujimigahara), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141033.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/5/5f/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E5%B0%BE%E5%B7%9E%E4%B8%8D%E4%BA%8C%E8%A6%8B%E5%8E%9F-Fujimigahara_in_Owari_Province_%28Bish%C5%AB_Fujimigahara%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141033.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E5%B0%BE%E5%B7%9E%E4%B8%8D%E4%BA%8C%E8%A6%8B%E5%8E%9F-Fujimigahara_in_Owari_Province_%28Bish%C5%AB_Fujimigahara%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141033.jpg",
      "w": 1950,
      "h": 1341,
      "bytes": 2131709,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "全図中最も遠い西限。大樽の円枠越しに覗く幾何学的構成。",
    "bearingToFuji": 81.6,
    "distanceKm": 166.8,
    "cone": {
      "halfAngleDeg": 3.5,
      "apex": {
        "lat": 35.1542,
        "lng": 136.9083
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.4502,
        "lng": 138.7103
      },
      "farRight": {
        "lat": 35.2686,
        "lng": 138.739
      }
    },
    "coneHalfDeg": 3.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.1542,136.9083,15a,1668d,35y,81.6h,83t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.1542,136.9083&heading=81.6&pitch=1",
    "viewpointName": "名古屋市中区富士見町（旧尾張藩不二見原）",
    "elevationDeg": 1.3,
    "alt_m": 15
  },
  {
    "id": "toto_asakusa_honganji",
    "no": 11,
    "title_ja": "東都浅艸本願寺",
    "title_en": "Asakusa Hongan Temple in Edo",
    "romaji": "Toto Asakusa Hongan-ji",
    "region": "江戸・浅草",
    "viewpoint": {
      "lat": 35.7135,
      "lng": 139.7915
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Asakusa Honganji temple in th Eastern capital.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/2/26/Asakusa_Honganji_temple_in_th_Eastern_capital.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Asakusa_Honganji_temple_in_th_Eastern_capital.jpg",
      "w": 4282,
      "h": 2848,
      "bytes": 3854978,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "本堂屋根の修繕風景と、凧が揚がる大空に小さくそびえる富士。",
    "bearingToFuji": 248.1,
    "distanceKm": 104.0,
    "cone": {
      "halfAngleDeg": 5.5,
      "apex": {
        "lat": 35.7135,
        "lng": 139.7915
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2788,
        "lng": 138.7743
      },
      "farRight": {
        "lat": 35.4444,
        "lng": 138.6901
      }
    },
    "coneHalfDeg": 5.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.7135,139.7915,35a,1040d,35y,248.1h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.7135,139.7915&heading=248.1&pitch=2",
    "viewpointName": "台東区西浅草・東本願寺（旧浅草門跡大屋根）",
    "elevationDeg": 2.1,
    "alt_m": 35
  },
  {
    "id": "buyo_tsukudajima",
    "no": 12,
    "title_ja": "武陽佃嶌",
    "title_en": "Tsukuda Island in Edo",
    "romaji": "Buyo Tsukuda-jima",
    "region": "江戸・佃島",
    "viewpoint": {
      "lat": 35.6685,
      "lng": 139.7835
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 武陽佃島-Tsukudajima in Musashi Province (Buyō Tsukudajima), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141089.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/b/b5/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%AD%A6%E9%99%BD%E4%BD%83%E5%B3%B6-Tsukudajima_in_Musashi_Province_%28Buy%C5%8D_Tsukudajima%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141089.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%AD%A6%E9%99%BD%E4%BD%83%E5%B3%B6-Tsukudajima_in_Musashi_Province_%28Buy%C5%8D_Tsukudajima%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141089.jpg",
      "w": 3870,
      "h": 2612,
      "bytes": 2757737,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "佃島の漁船群と干潟、江戸湾の広がり越しに見る富士。",
    "bearingToFuji": 250.6,
    "distanceKm": 101.5,
    "cone": {
      "halfAngleDeg": 5.5,
      "apex": {
        "lat": 35.6685,
        "lng": 139.7835
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2799,
        "lng": 138.7693
      },
      "farRight": {
        "lat": 35.4443,
        "lng": 138.6958
      }
    },
    "coneHalfDeg": 5.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.6685,139.7835,2a,1015d,35y,250.6h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.6685,139.7835&heading=250.6&pitch=2",
    "viewpointName": "中央区佃・隅田川河口の佃島東岸",
    "elevationDeg": 2.1,
    "alt_m": 2
  },
  {
    "id": "soshu_shichirigahama",
    "no": 13,
    "title_ja": "相州七里濱",
    "title_en": "Shichirigahama in Sagami Province",
    "romaji": "Soshu Shichirigahama",
    "region": "相模・鎌倉",
    "viewpoint": {
      "lat": 35.3055,
      "lng": 139.516
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 相州七里浜-Shichirigahama in Sagami Province (Sōshū Shichirigahama), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140979.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/3/38/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E7%9B%B8%E5%B7%9E%E4%B8%83%E9%87%8C%E6%B5%9C-Shichirigahama_in_Sagami_Province_%28S%C5%8Dsh%C5%AB_Shichirigahama%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP140979.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E7%9B%B8%E5%B7%9E%E4%B8%83%E9%87%8C%E6%B5%9C-Shichirigahama_in_Sagami_Province_%28S%C5%8Dsh%C5%AB_Shichirigahama%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP140979.jpg",
      "w": 1969,
      "h": 1355,
      "bytes": 2110381,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "波打ち際の小島と小動岬、白波の向こうにそびえる雪山富士。",
    "bearingToFuji": 275.1,
    "distanceKm": 71.8,
    "cone": {
      "halfAngleDeg": 8.0,
      "apex": {
        "lat": 35.3055,
        "lng": 139.516
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2703,
        "lng": 138.7261
      },
      "farRight": {
        "lat": 35.4494,
        "lng": 138.744
      }
    },
    "coneHalfDeg": 8.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.3055,139.516,5a,718d,35y,275.1h,81t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.3055,139.516&heading=275.1&pitch=3",
    "viewpointName": "鎌倉市七里ガ浜海岸・行合川河口付近",
    "elevationDeg": 3.0,
    "alt_m": 5
  },
  {
    "id": "soshu_umezawa",
    "no": 14,
    "title_ja": "相州梅澤左",
    "title_en": "Umezawa in Sagami Province",
    "romaji": "Soshu Umezawa-no-hidari",
    "region": "相模・大磯",
    "viewpoint": {
      "lat": 35.295,
      "lng": 139.248
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Umegawa in Sagami province.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/9/94/Umegawa_in_Sagami_province.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Umegawa_in_Sagami_province.jpg",
      "w": 4512,
      "h": 2993,
      "bytes": 2783623,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "青と藍のグラデーション、群れ飛ぶツルと静謐な砂浜の夜明け。",
    "bearingToFuji": 278.9,
    "distanceKm": 47.8,
    "cone": {
      "halfAngleDeg": 9.0,
      "apex": {
        "lat": 35.295,
        "lng": 139.248
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2931,
        "lng": 138.7213
      },
      "farRight": {
        "lat": 35.4261,
        "lng": 138.746
      }
    },
    "coneHalfDeg": 9.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.295,139.248,6a,500d,35y,278.9h,80t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.295,139.248&heading=278.9&pitch=4",
    "viewpointName": "二宮町梅沢海岸（押切川河口付近）",
    "elevationDeg": 4.5,
    "alt_m": 6
  },
  {
    "id": "koshu_kajikazawa",
    "no": 15,
    "title_ja": "甲州石班澤",
    "title_en": "Kajikazawa in Kai Province",
    "romaji": "Koshu Kajikazawa",
    "region": "甲斐・鰍沢",
    "viewpoint": {
      "lat": 35.5408,
      "lng": 138.4615
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Kajikazawa in Kai Province (Koshu Kajikazawa).jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Kajikazawa_in_Kai_Province_%28Koshu_Kajikazawa%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Kajikazawa_in_Kai_Province_%28Koshu_Kajikazawa%29.jpg",
      "w": 750,
      "h": 513,
      "bytes": 107778,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "富士川の難所・兎の瀬。岩場と投網の漁師、雲間の山頂の相似形。",
    "bearingToFuji": 129.7,
    "distanceKm": 31.3,
    "cone": {
      "halfAngleDeg": 10.0,
      "apex": {
        "lat": 35.5408,
        "lng": 138.4615
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.401,
        "lng": 138.7615
      },
      "farRight": {
        "lat": 35.3259,
        "lng": 138.6847
      }
    },
    "coneHalfDeg": 10.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.5408,138.4615,235a,500d,35y,129.7h,78t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.5408,138.4615&heading=129.7&pitch=6",
    "viewpointName": "富士川町鰍沢・兎の瀬（禹之瀬）河原岩礁付近",
    "elevationDeg": 6.4,
    "alt_m": 235
  },
  {
    "id": "koshu_mishimagoe",
    "no": 16,
    "title_ja": "甲州三嶌越",
    "title_en": "Mishima Pass in Kai Province",
    "romaji": "Koshu Mishima-goe",
    "region": "甲斐・三島越",
    "viewpoint": {
      "lat": 35.397,
      "lng": 138.868
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 甲州三島越-Mishima Pass in Kai Province (Kōshū Mishima goe), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141043.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/d9/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E7%94%B2%E5%B7%9E%E4%B8%89%E5%B3%B6%E8%B6%8A-Mishima_Pass_in_Kai_Province_%28K%C5%8Dsh%C5%AB_Mishima_goe%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141043.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E7%94%B2%E5%B7%9E%E4%B8%89%E5%B3%B6%E8%B6%8A-Mishima_Pass_in_Kai_Province_%28K%C5%8Dsh%C5%AB_Mishima_goe%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141043.jpg",
      "w": 3867,
      "h": 2585,
      "bytes": 2810304,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "旅人が手をつないで見上げる巨杉と、目前の富士山頂。",
    "bearingToFuji": 252.4,
    "distanceKm": 13.4,
    "cone": {
      "halfAngleDeg": 15.0,
      "apex": {
        "lat": 35.397,
        "lng": 138.868
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.332,
        "lng": 138.7436
      },
      "farRight": {
        "lat": 35.3914,
        "lng": 138.7203
      }
    },
    "coneHalfDeg": 15.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.397,138.868,1110a,500d,35y,252.4h,73t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.397,138.868&heading=252.4&pitch=11",
    "viewpointName": "山中湖村〜小山町国境・籠坂峠旧道",
    "elevationDeg": 11.2,
    "alt_m": 1110
  },
  {
    "id": "shinshu_suwako",
    "no": 17,
    "title_ja": "信州諏訪湖",
    "title_en": "A View of Mount Fuji Across Lake Suwa",
    "romaji": "Shinshu Suwa-ko",
    "region": "信濃・諏訪湖",
    "viewpoint": {
      "lat": 36.0645,
      "lng": 138.109
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Het Suwa meer in de provincie Shinano Shinshu Suwako (titel op object) 36 gezichten op de berg Fuji (serietitel) Fugaku sanjurokkei (serietitel op object), RP-P-1956-730.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Het_Suwa_meer_in_de_provincie_Shinano_Shinshu_Suwako_%28titel_op_object%29_36_gezichten_op_de_berg_Fuji_%28serietitel%29_Fugaku_sanjurokkei_%28serietitel_op_object%29%2C_RP-P-1956-730.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Het_Suwa_meer_in_de_provincie_Shinano_Shinshu_Suwako_%28titel_op_object%29_36_gezichten_op_de_berg_Fuji_%28serietitel%29_Fugaku_sanjurokkei_%28serietitel_op_object%29%2C_RP-P-1956-730.jpg",
      "w": 6116,
      "h": 4438,
      "bytes": 4288849,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "諏訪湖の高島城と湖水を手前に、八ヶ岳山麓の彼方に浮かぶ富士。",
    "bearingToFuji": 144.3,
    "distanceKm": 96.1,
    "cone": {
      "halfAngleDeg": 6.0,
      "apex": {
        "lat": 36.0645,
        "lng": 138.109
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.4171,
        "lng": 138.8145
      },
      "farRight": {
        "lat": 35.3126,
        "lng": 138.6337
      }
    },
    "coneHalfDeg": 6.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@36.0645,138.109,930a,961d,35y,144.3h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.0645,138.109&heading=144.3&pitch=2",
    "viewpointName": "諏訪市立石公園〜塩嶺峠東麓高台",
    "elevationDeg": 1.7,
    "alt_m": 930
  },
  {
    "id": "sunshu_ejiri",
    "no": 18,
    "title_ja": "駿州江尻",
    "title_en": "Ejiri in Suruga Province",
    "romaji": "Sunshu Ejiri",
    "region": "駿河・江尻",
    "viewpoint": {
      "lat": 35.018,
      "lng": 138.486
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 駿州江尻-Ejiri in Suruga Province (Sunshū Ejiri), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140977.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/3/38/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E9%A7%BF%E5%B7%9E%E6%B1%9F%E5%B0%BB-Ejiri_in_Suruga_Province_%28Sunsh%C5%AB_Ejiri%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP140977.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E9%A7%BF%E5%B7%9E%E6%B1%9F%E5%B0%BB-Ejiri_in_Suruga_Province_%28Sunsh%C5%AB_Ejiri%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP140977.jpg",
      "w": 4000,
      "h": 2791,
      "bytes": 3307857,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "強烈な突風に菅笠や紙を吹き飛ばされる旅人と、不動の富士。",
    "bearingToFuji": 29.9,
    "distanceKm": 44.0,
    "cone": {
      "halfAngleDeg": 9.0,
      "apex": {
        "lat": 35.018,
        "lng": 138.486
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.3875,
        "lng": 138.6591
      },
      "farRight": {
        "lat": 35.3256,
        "lng": 138.7906
      }
    },
    "coneHalfDeg": 9.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.018,138.486,5a,500d,35y,29.9h,79t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.018,138.486&heading=29.9&pitch=5",
    "viewpointName": "静岡市清水区江尻町・稚児橋〜巴川河口低地",
    "elevationDeg": 4.9,
    "alt_m": 5
  },
  {
    "id": "totomi_sanchu",
    "no": 19,
    "title_ja": "遠江山中",
    "title_en": "In the Mountains of Totomi Province",
    "romaji": "Totomi san-chu",
    "region": "遠江・山中",
    "viewpoint": {
      "lat": 34.9,
      "lng": 137.95
    },
    "confidence": "estimated",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 遠江山中-In the Mountains of Tōtomi Province (Tōtomi sanchū), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140988.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/3/3d/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E9%81%A0%E6%B1%9F%E5%B1%B1%E4%B8%AD-In_the_Mountains_of_T%C5%8Dtomi_Province_%28T%C5%8Dtomi_sanch%C5%AB%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP140988.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E9%81%A0%E6%B1%9F%E5%B1%B1%E4%B8%AD-In_the_Mountains_of_T%C5%8Dtomi_Province_%28T%C5%8Dtomi_sanch%C5%AB%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP140988.jpg",
      "w": 3839,
      "h": 2498,
      "bytes": 2895998,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "巨大な材木を斜めに挽く木挽き職人たちの対角線構図。",
    "bearingToFuji": 53.9,
    "distanceKm": 87.3,
    "cone": {
      "halfAngleDeg": 7.0,
      "apex": {
        "lat": 34.9,
        "lng": 137.95
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.4344,
        "lng": 138.6536
      },
      "farRight": {
        "lat": 35.2789,
        "lng": 138.7903
      }
    },
    "coneHalfDeg": 7.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@34.9,137.95,450a,873d,35y,53.9h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=34.9,137.95&heading=53.9&pitch=2",
    "viewpointName": "静岡県周智郡森町〜秋葉街道の山中木挽場",
    "elevationDeg": 2.2,
    "alt_m": 450
  },
  {
    "id": "joshu_ushibori",
    "no": 20,
    "title_ja": "常州牛堀",
    "title_en": "Ushibori in Hitachi Province",
    "romaji": "Joshu Ushibori",
    "region": "常陸・牛堀",
    "viewpoint": {
      "lat": 35.938,
      "lng": 140.54
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 常州牛掘-Ushibori in Hitachi Province (Jōshū Ushibori), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141044.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/7/76/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E5%B8%B8%E5%B7%9E%E7%89%9B%E6%8E%98-Ushibori_in_Hitachi_Province_%28J%C5%8Dsh%C5%AB_Ushibori%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141044.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E5%B8%B8%E5%B7%9E%E7%89%9B%E6%8E%98-Ushibori_in_Hitachi_Province_%28J%C5%8Dsh%C5%AB_Ushibori%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141044.jpg",
      "w": 3873,
      "h": 2672,
      "bytes": 2824332,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "東の最遠方。北浦の苫舟の生活と雪景の彼方の微小な富士。",
    "bearingToFuji": 249.1,
    "distanceKm": 175.9,
    "cone": {
      "halfAngleDeg": 3.5,
      "apex": {
        "lat": 35.938,
        "lng": 140.54
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2716,
        "lng": 138.7754
      },
      "farRight": {
        "lat": 35.4507,
        "lng": 138.6869
      }
    },
    "coneHalfDeg": 3.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.938,140.54,5a,1759d,35y,249.1h,83t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.938,140.54&heading=249.1&pitch=1",
    "viewpointName": "茨城県潮来市牛堀・北浦〜利根川合流点",
    "elevationDeg": 1.2,
    "alt_m": 5
  },
  {
    "id": "koto_suruga_mitsui",
    "no": 21,
    "title_ja": "江都駿河町三井見世略図",
    "title_en": "A Sketch of the Mitsui Shop in Suruga, Edo",
    "romaji": "Koto Suruga-cho Mitsui-mise ryakuzu",
    "region": "江戸・駿河町",
    "viewpoint": {
      "lat": 35.6865,
      "lng": 139.7735
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "A sketch of the Mitsui shop in Suruga street in Edo.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/A_sketch_of_the_Mitsui_shop_in_Suruga_street_in_Edo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:A_sketch_of_the_Mitsui_shop_in_Suruga_street_in_Edo.jpg",
      "w": 4423,
      "h": 2942,
      "bytes": 2041935,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "駿河町通りの直線の消失点に富士が完璧に収まる都市計画的構図。",
    "bearingToFuji": 249.4,
    "distanceKm": 101.4,
    "cone": {
      "halfAngleDeg": 5.5,
      "apex": {
        "lat": 35.6865,
        "lng": 139.7735
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2811,
        "lng": 138.7703
      },
      "farRight": {
        "lat": 35.4441,
        "lng": 138.6928
      }
    },
    "coneHalfDeg": 5.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.6865,139.7735,4a,1014d,35y,249.4h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.6865,139.7735&heading=249.4&pitch=2",
    "viewpointName": "中央区日本橋室町・三井越後屋",
    "elevationDeg": 2.1,
    "alt_m": 4
  },
  {
    "id": "ommayagashi_ryogoku",
    "no": 22,
    "title_ja": "御厩川岸より両国橋夕陽見",
    "title_en": "Sunset Across Ryogoku Bridge from Ommayagashi",
    "romaji": "Ommayagashi yori Ryogoku-bashi yuhi-mi",
    "region": "江戸・隅田川",
    "viewpoint": {
      "lat": 35.7035,
      "lng": 139.7945
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Sunset across the Ryogoku bridge from the bank of the Sumida river at Onmagayashi.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/2/25/Sunset_across_the_Ryogoku_bridge_from_the_bank_of_the_Sumida_river_at_Onmagayashi.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Sunset_across_the_Ryogoku_bridge_from_the_bank_of_the_Sumida_river_at_Onmagayashi.jpg",
      "w": 4314,
      "h": 2913,
      "bytes": 4474901,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "渡し舟の人々と、両国橋の橋脚越しに沈む夕陽と富士。",
    "bearingToFuji": 248.8,
    "distanceKm": 103.8,
    "cone": {
      "halfAngleDeg": 5.5,
      "apex": {
        "lat": 35.7035,
        "lng": 139.7945
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2797,
        "lng": 138.7729
      },
      "farRight": {
        "lat": 35.4459,
        "lng": 138.6914
      }
    },
    "coneHalfDeg": 5.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.7035,139.7945,2a,1038d,35y,248.8h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.7035,139.7945&heading=248.8&pitch=2",
    "viewpointName": "墨田区本所・厩橋東詰南（旧御厩河岸渡船場）",
    "elevationDeg": 2.1,
    "alt_m": 2
  },
  {
    "id": "gohyakurakan_sazaido",
    "no": 23,
    "title_ja": "五百らかん寺さゞゐどう",
    "title_en": "Sazaido at Gohyakurakan Temple",
    "romaji": "Gohyakurakan-ji Sazaido",
    "region": "江戸・本所",
    "viewpoint": {
      "lat": 35.6875,
      "lng": 139.8215
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 五百らかん寺さざゐどう-Sazai Hall at the Temple of the Five Hundred Arhats (Gohyaku Rakanji Sazaidō), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141020.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/0/00/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E4%BA%94%E7%99%BE%E3%82%89%E3%81%8B%E3%82%93%E5%AF%BA%E3%81%95%E3%81%96%E3%82%90%E3%81%A9%E3%81%86-Sazai_Hall_at_the_Temple_of_the_Five_Hundred_Arhats_%28Gohyaku_Rakanji_Sazaid%C5%8D%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141020.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E4%BA%94%E7%99%BE%E3%82%89%E3%81%8B%E3%82%93%E5%AF%BA%E3%81%95%E3%81%96%E3%82%90%E3%81%A9%E3%81%86-Sazai_Hall_at_the_Temple_of_the_Five_Hundred_Arhats_%28Gohyaku_Rakanji_Sazaid%C5%8D%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141020.jpg",
      "w": 3904,
      "h": 2757,
      "bytes": 3076185,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "栄螺堂の螺旋回廊上層からの眺望。江戸市中の屋根越しに西方の富士。",
    "bearingToFuji": 250.2,
    "distanceKm": 105.5,
    "cone": {
      "halfAngleDeg": 5.5,
      "apex": {
        "lat": 35.6875,
        "lng": 139.8215
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2775,
        "lng": 138.7708
      },
      "farRight": {
        "lat": 35.4479,
        "lng": 138.6929
      }
    },
    "coneHalfDeg": 5.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.6875,139.8215,18a,1055d,35y,250.2h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.6875,139.8215&heading=250.2&pitch=2",
    "viewpointName": "江東区大島・本所五百羅漢寺 栄螺堂(三匝堂)跡",
    "elevationDeg": 2.2,
    "alt_m": 18,
    "refinedSource": "claude"
  },
  {
    "id": "koishikawa_yuki",
    "no": 24,
    "title_ja": "礫川雪ノ且",
    "title_en": "Morning After a Snowfall at Koishikawa",
    "romaji": "Koishikawa yuki no ashita",
    "region": "江戸・小石川",
    "viewpoint": {
      "lat": 35.712,
      "lng": 139.745
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Besneeuwde ochtend in Koishikawa-Rijksmuseum AK-MAK-1588.jpeg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/3/39/Besneeuwde_ochtend_in_Koishikawa-Rijksmuseum_AK-MAK-1588.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Besneeuwde_ochtend_in_Koishikawa-Rijksmuseum_AK-MAK-1588.jpeg",
      "w": 3000,
      "h": 2048,
      "bytes": 3262773,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "雪晴れの朝、高台の茶屋二階から雪化粧の富士を眺める人々。",
    "bearingToFuji": 247.3,
    "distanceKm": 100.0,
    "cone": {
      "halfAngleDeg": 6.0,
      "apex": {
        "lat": 35.712,
        "lng": 139.745
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2763,
        "lng": 138.7787
      },
      "farRight": {
        "lat": 35.4489,
        "lng": 138.6876
      }
    },
    "coneHalfDeg": 6.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.712,139.745,25a,1000d,35y,247.3h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.712,139.745&heading=247.3&pitch=2",
    "viewpointName": "文京区小石川・後楽園周辺高台の茶屋",
    "elevationDeg": 2.2,
    "alt_m": 25,
    "refinedSource": "claude"
  },
  {
    "id": "shimomeguro",
    "no": 25,
    "title_ja": "下目黒",
    "title_en": "Shimomeguro",
    "romaji": "Shimomeguro",
    "region": "江戸・目黒",
    "viewpoint": {
      "lat": 35.6315,
      "lng": 139.71
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 下目黒-Lower Meguro (Shimo Meguro), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP140998.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/46/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E4%B8%8B%E7%9B%AE%E9%BB%92-Lower_Meguro_%28Shimo_Meguro%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP140998.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E4%B8%8B%E7%9B%AE%E9%BB%92-Lower_Meguro_%28Shimo_Meguro%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP140998.jpg",
      "w": 3916,
      "h": 2683,
      "bytes": 3038479,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "のどかな農村と丘陵の切り通し、富士講の参道でもあった目黒。",
    "bearingToFuji": 251.6,
    "distanceKm": 93.9,
    "cone": {
      "halfAngleDeg": 6.5,
      "apex": {
        "lat": 35.6315,
        "lng": 139.71
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2723,
        "lng": 138.7718
      },
      "farRight": {
        "lat": 35.4531,
        "lng": 138.6956
      }
    },
    "coneHalfDeg": 6.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.6315,139.71,22a,939d,35y,251.6h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.6315,139.71&heading=251.6&pitch=2",
    "viewpointName": "目黒区下目黒・目黒不動尊周辺（行人坂下）",
    "elevationDeg": 2.3,
    "alt_m": 22
  },
  {
    "id": "onden_suisha",
    "no": 26,
    "title_ja": "隠田の水車",
    "title_en": "Watermill at Onden",
    "romaji": "Onden no suisha",
    "region": "江戸・隠田",
    "viewpoint": {
      "lat": 35.668,
      "lng": 139.7075
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 隠田の水車-The Waterwheel at Onden (Onden no suisha), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141021.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/e/e6/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E9%9A%A0%E7%94%B0%E3%81%AE%E6%B0%B4%E8%BB%8A-The_Waterwheel_at_Onden_%28Onden_no_suisha%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141021.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E9%9A%A0%E7%94%B0%E3%81%AE%E6%B0%B4%E8%BB%8A-The_Waterwheel_at_Onden_%28Onden_no_suisha%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141021.jpg",
      "w": 1980,
      "h": 1358,
      "bytes": 2331262,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "原宿キャットストリート付近。大きな水車と農作業風景。",
    "bearingToFuji": 249.2,
    "distanceKm": 95.1,
    "cone": {
      "halfAngleDeg": 6.0,
      "apex": {
        "lat": 35.668,
        "lng": 139.7075
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2788,
        "lng": 138.7724
      },
      "farRight": {
        "lat": 35.4453,
        "lng": 138.6925
      }
    },
    "coneHalfDeg": 6.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.668,139.7075,26a,951d,35y,249.2h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.668,139.7075&heading=249.2&pitch=2",
    "viewpointName": "渋谷区神宮前・旧穏田川（渋谷川上流）水車跡",
    "elevationDeg": 2.3,
    "alt_m": 26
  },
  {
    "id": "soshu_enoshima",
    "no": 27,
    "title_ja": "相州江の嶌",
    "title_en": "Enoshima in Sagami Province",
    "romaji": "Soshu Enoshima",
    "region": "相模・江の島",
    "viewpoint": {
      "lat": 35.309,
      "lng": 139.4865
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Enoshima in the Sagami province.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/45/Enoshima_in_the_Sagami_province.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Enoshima_in_the_Sagami_province.jpg",
      "w": 4508,
      "h": 2970,
      "bytes": 1923698,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "干潮の砂州を江島神社へ渡る人々、相模湾越しの夕富士。",
    "bearingToFuji": 275.0,
    "distanceKm": 69.1,
    "cone": {
      "halfAngleDeg": 8.0,
      "apex": {
        "lat": 35.309,
        "lng": 139.4865
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2741,
        "lng": 138.7263
      },
      "farRight": {
        "lat": 35.4465,
        "lng": 138.7432
      }
    },
    "coneHalfDeg": 8.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.309,139.4865,3a,691d,35y,275.0h,81t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.309,139.4865&heading=275.0&pitch=3",
    "viewpointName": "藤沢市片瀬海岸・洲鼻通り〜砂州",
    "elevationDeg": 3.1,
    "alt_m": 3
  },
  {
    "id": "ejiri_tago_no_ura",
    "no": 28,
    "title_ja": "東海道江尻田子の浦略図",
    "title_en": "Sketch of Tago Bay, Ejiri Along the Tokaido",
    "romaji": "Tokaido Ejiri Tago-no-ura ryakuzu",
    "region": "駿河・田子の浦",
    "viewpoint": {
      "lat": 35.135,
      "lng": 138.682
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 東海道江尻田子の浦略図-Tago Bay near Ejiri on the Tōkaidō (Tōkaidō Ejiri Tago no ura ryaku zu), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141037.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%9D%B1%E6%B5%B7%E9%81%93%E6%B1%9F%E5%B0%BB%E7%94%B0%E5%AD%90%E3%81%AE%E6%B5%A6%E7%95%A5%E5%9B%B3-Tago_Bay_near_Ejiri_on_the_T%C5%8Dkaid%C5%8D_%28T%C5%8Dkaid%C5%8D_Ejiri_Tago_no_ura_ryaku_zu%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141037.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%9D%B1%E6%B5%B7%E9%81%93%E6%B1%9F%E5%B0%BB%E7%94%B0%E5%AD%90%E3%81%AE%E6%B5%A6%E7%95%A5%E5%9B%B3-Tago_Bay_near_Ejiri_on_the_T%C5%8Dkaid%C5%8D_%28T%C5%8Dkaid%C5%8D_Ejiri_Tago_no_ura_ryaku_zu%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141037.jpg",
      "w": 3907,
      "h": 2669,
      "bytes": 3261704,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "田子の浦の浜と小舟、間近に大きくそびえる冠雪の富士。",
    "bearingToFuji": 9.3,
    "distanceKm": 25.4,
    "cone": {
      "halfAngleDeg": 11.0,
      "apex": {
        "lat": 35.135,
        "lng": 138.682
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.3633,
        "lng": 138.6737
      },
      "farRight": {
        "lat": 35.3492,
        "lng": 138.7792
      }
    },
    "coneHalfDeg": 11.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.135,138.682,4a,500d,35y,9.3h,76t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.135,138.682&heading=9.3&pitch=8",
    "viewpointName": "富士市田子の浦（吉原湊付近の浜）",
    "elevationDeg": 8.0,
    "alt_m": 4,
    "refinedSource": "claude"
  },
  {
    "id": "tokaido_yoshida",
    "no": 29,
    "title_ja": "東海道吉田",
    "title_en": "Yoshida Along the Tokaido",
    "romaji": "Tokaido Yoshida",
    "region": "三河・吉田(豊橋)",
    "viewpoint": {
      "lat": 34.7644,
      "lng": 137.3917
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 東海道吉田-Yoshida on the Tōkaidō (Tōkaidō Yoshida), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141007.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/c5/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%9D%B1%E6%B5%B7%E9%81%93%E5%90%89%E7%94%B0-Yoshida_on_the_T%C5%8Dkaid%C5%8D_%28T%C5%8Dkaid%C5%8D_Yoshida%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141007.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%9D%B1%E6%B5%B7%E9%81%93%E5%90%89%E7%94%B0-Yoshida_on_the_T%C5%8Dkaid%C5%8D_%28T%C5%8Dkaid%C5%8D_Yoshida%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141007.jpg",
      "w": 3842,
      "h": 2581,
      "bytes": 3018465,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "吉田宿茶屋からの遠望。豊川越しに極めて遠方の富士。",
    "bearingToFuji": 61.0,
    "distanceKm": 138.5,
    "cone": {
      "halfAngleDeg": 5.0,
      "apex": {
        "lat": 34.7644,
        "lng": 137.3917
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.4544,
        "lng": 138.6594
      },
      "farRight": {
        "lat": 35.2631,
        "lng": 138.7853
      }
    },
    "coneHalfDeg": 5.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@34.7644,137.3917,12a,1385d,35y,61.0h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=34.7644,137.3917&heading=61.0&pitch=2",
    "viewpointName": "豊橋市札木町・吉田宿本陣跡・豊川沿い",
    "elevationDeg": 1.5,
    "alt_m": 12
  },
  {
    "id": "kazusa_kairo",
    "no": 30,
    "title_ja": "上総ノ海路",
    "title_en": "Kazusa Province Sea Route",
    "romaji": "Kazusa no kairo",
    "region": "上総沖(江戸湾)",
    "viewpoint": {
      "lat": 35.32,
      "lng": 139.78
    },
    "confidence": "estimated",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 上総の海路-At Sea off Kazusa (Kazusa no kairo), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141056.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/e/ef/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E4%B8%8A%E7%B7%8F%E3%81%AE%E6%B5%B7%E8%B7%AF-At_Sea_off_Kazusa_%28Kazusa_no_kairo%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141056.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E4%B8%8A%E7%B7%8F%E3%81%AE%E6%B5%B7%E8%B7%AF-At_Sea_off_Kazusa_%28Kazusa_no_kairo%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141056.jpg",
      "w": 3896,
      "h": 2561,
      "bytes": 2699702,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "波のうねりと浦賀水道を行き交う五大力船越しに見る富士。",
    "bearingToFuji": 273.0,
    "distanceKm": 95.6,
    "cone": {
      "halfAngleDeg": 6.0,
      "apex": {
        "lat": 35.32,
        "lng": 139.78
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2705,
        "lng": 138.7284
      },
      "farRight": {
        "lat": 35.45,
        "lng": 138.7376
      }
    },
    "coneHalfDeg": 6.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.32,139.78,0a,956d,35y,273.0h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.32,139.78&heading=273.0&pitch=2",
    "viewpointName": "東京湾・千葉県富津岬沖〜木更津沖海上",
    "elevationDeg": 2.3,
    "alt_m": 0
  },
  {
    "id": "edo_nihonbashi",
    "no": 31,
    "title_ja": "江戸日本橋",
    "title_en": "Nihonbashi in Edo",
    "romaji": "Edo Nihonbashi",
    "region": "江戸・日本橋",
    "viewpoint": {
      "lat": 35.6837,
      "lng": 139.7745
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 江戸日本橋-Nihonbashi in Edo (Edo Nihonbashi), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141003.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/7/7f/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%B1%9F%E6%88%B8%E6%97%A5%E6%9C%AC%E6%A9%8B-Nihonbashi_in_Edo_%28Edo_Nihonbashi%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141003.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%B1%9F%E6%88%B8%E6%97%A5%E6%9C%AC%E6%A9%8B-Nihonbashi_in_Edo_%28Edo_Nihonbashi%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141003.jpg",
      "w": 3846,
      "h": 2692,
      "bytes": 2930185,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "日本橋の賑わいと蔵の白壁の連なり、通りの奥に小さく富士。",
    "bearingToFuji": 249.5,
    "distanceKm": 101.3,
    "cone": {
      "halfAngleDeg": 5.5,
      "apex": {
        "lat": 35.6837,
        "lng": 139.7745
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2802,
        "lng": 138.7715
      },
      "farRight": {
        "lat": 35.4431,
        "lng": 138.6944
      }
    },
    "coneHalfDeg": 5.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.6837,139.7745,4a,1013d,35y,249.5h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.6837,139.7745&heading=249.5&pitch=2",
    "viewpointName": "中央区日本橋・日本橋北詰（魚河岸側）",
    "elevationDeg": 2.1,
    "alt_m": 4,
    "refinedSource": "claude"
  },
  {
    "id": "sumida_sekiya",
    "no": 32,
    "title_ja": "隅田川関屋の里",
    "title_en": "Sekiya Village on the Sumida River",
    "romaji": "Sumida-gawa Sekiya-no-sato",
    "region": "江戸・関屋",
    "viewpoint": {
      "lat": 35.7455,
      "lng": 139.814
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 隅田川関屋の里-Sekiya Village on the Sumida River (Sumidagawa Sekiya no sato), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141023.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/2/28/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E9%9A%85%E7%94%B0%E5%B7%9D%E9%96%A2%E5%B1%8B%E3%81%AE%E9%87%8C-Sekiya_Village_on_the_Sumida_River_%28Sumidagawa_Sekiya_no_sato%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E9%9A%85%E7%94%B0%E5%B7%9D%E9%96%A2%E5%B1%8B%E3%81%AE%E9%87%8C-Sekiya_Village_on_the_Sumida_River_%28Sumidagawa_Sekiya_no_sato%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141023.jpg",
      "w": 3912,
      "h": 2634,
      "bytes": 2930926,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "曲がりくねる土手を疾走する3騎の早馬と、松並木越しの富士。",
    "bearingToFuji": 246.8,
    "distanceKm": 107.2,
    "cone": {
      "halfAngleDeg": 5.5,
      "apex": {
        "lat": 35.7455,
        "lng": 139.814
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2781,
        "lng": 138.7781
      },
      "farRight": {
        "lat": 35.4471,
        "lng": 138.6866
      }
    },
    "coneHalfDeg": 5.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.7455,139.814,2a,1072d,35y,246.8h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.7455,139.814&heading=246.8&pitch=2",
    "viewpointName": "足立区千住関屋町・牛田水神付近旧堤防",
    "elevationDeg": 2.0,
    "alt_m": 2
  },
  {
    "id": "noboto_ura",
    "no": 33,
    "title_ja": "登戶浦",
    "title_en": "Noboto Bay",
    "romaji": "Noboto-ura",
    "region": "下総・登戸(千葉)",
    "viewpoint": {
      "lat": 35.608,
      "lng": 140.085
    },
    "confidence": "estimated",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 登戸浦-Noboto Bay (Noboto no ura), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141022.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E7%99%BB%E6%88%B8%E6%B5%A6-Noboto_Bay_%28Noboto_no_ura%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141022.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E7%99%BB%E6%88%B8%E6%B5%A6-Noboto_Bay_%28Noboto_no_ura%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141022.jpg",
      "w": 3953,
      "h": 2723,
      "bytes": 3055027,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "登戸浦の干潟で網を繕う漁師、江戸湾越しに西方の富士。",
    "bearingToFuji": 257.8,
    "distanceKm": 126.0,
    "cone": {
      "halfAngleDeg": 5.5,
      "apex": {
        "lat": 35.608,
        "lng": 140.085
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2563,
        "lng": 138.763
      },
      "farRight": {
        "lat": 35.4679,
        "lng": 138.7031
      }
    },
    "coneHalfDeg": 5.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.608,140.085,3a,1260d,35y,257.8h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.608,140.085&heading=257.8&pitch=2",
    "viewpointName": "千葉市中央区登戸・江戸湾東岸の干潟",
    "elevationDeg": 2.2,
    "alt_m": 3,
    "refinedSource": "claude"
  },
  {
    "id": "soshu_hakone_kosui",
    "no": 34,
    "title_ja": "相州箱根湖水",
    "title_en": "Hakone Lake in Sagami Province",
    "romaji": "Soshu Hakone-kosui",
    "region": "相模・箱根",
    "viewpoint": {
      "lat": 35.2045,
      "lng": 139.027
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "The lake of Hakone in the Segami province.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/The_lake_of_Hakone_in_the_Segami_province.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:The_lake_of_Hakone_in_the_Segami_province.jpg",
      "w": 4545,
      "h": 3000,
      "bytes": 8537050,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "霧のカルデラ湖水と険しい外輪山、その頂越しにそびえる富士。",
    "bearingToFuji": 302.6,
    "distanceKm": 32.3,
    "cone": {
      "halfAngleDeg": 10.0,
      "apex": {
        "lat": 35.2045,
        "lng": 139.027
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.3157,
        "lng": 138.6983
      },
      "farRight": {
        "lat": 35.4008,
        "lng": 138.7647
      }
    },
    "coneHalfDeg": 10.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.2045,139.027,730a,500d,35y,302.6h,79t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.2045,139.027&heading=302.6&pitch=5",
    "viewpointName": "箱根町元箱根・芦ノ湖東岸（箱根神社鳥居付近）",
    "elevationDeg": 5.4,
    "alt_m": 730
  },
  {
    "id": "koshu_misaka_suimen",
    "no": 35,
    "title_ja": "甲州三坂水面",
    "title_en": "Reflection from Misaka Pass in Kai Province",
    "romaji": "Koshu Misaka suimen",
    "region": "甲斐・三坂/河口湖",
    "viewpoint": {
      "lat": 35.5348,
      "lng": 138.7705
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 甲州三坂水面-Reflection in Lake at Misaka in Kai Province (Kōshū Misaka suimen), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei MET DP141064.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/1/1d/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E7%94%B2%E5%B7%9E%E4%B8%89%E5%9D%82%E6%B0%B4%E9%9D%A2-Reflection_in_Lake_at_Misaka_in_Kai_Province_%28K%C5%8Dsh%C5%AB_Misaka_suimen%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei_MET_DP141064.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E7%94%B2%E5%B7%9E%E4%B8%89%E5%9D%82%E6%B0%B4%E9%9D%A2-Reflection_in_Lake_at_Misaka_in_Kai_Province_%28K%C5%8Dsh%C5%AB_Misaka_suimen%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei_MET_DP141064.jpg",
      "w": 3834,
      "h": 2516,
      "bytes": 892271,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "河口湖を見下ろす。実景は夏山、湖面の逆さ富士は雪山の構図合成。",
    "bearingToFuji": 191.4,
    "distanceKm": 19.8,
    "cone": {
      "halfAngleDeg": 12.0,
      "apex": {
        "lat": 35.5348,
        "lng": 138.7705
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.3567,
        "lng": 138.7728
      },
      "farRight": {
        "lat": 35.3713,
        "lng": 138.6838
      }
    },
    "coneHalfDeg": 12.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.5348,138.7705,1300a,500d,35y,191.4h,77t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.5348,138.7705&heading=191.4&pitch=7",
    "viewpointName": "富士河口湖町・御坂峠旧道（天下茶屋付近）",
    "elevationDeg": 7.2,
    "alt_m": 1300
  },
  {
    "id": "tokaido_hodogaya",
    "no": 36,
    "title_ja": "東海道程ヶ谷",
    "title_en": "Hodogaya Along the Tokaido",
    "romaji": "Tokaido Hodogaya",
    "region": "相模・保土ヶ谷",
    "viewpoint": {
      "lat": 35.438,
      "lng": 139.578
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 東海道保土ケ谷-Hodogaya on the Tōkaidō (Tōkaidō Hodogaya), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141025.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/1/1d/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%9D%B1%E6%B5%B7%E9%81%93%E4%BF%9D%E5%9C%9F%E3%82%B1%E8%B0%B7-Hodogaya_on_the_T%C5%8Dkaid%C5%8D_%28T%C5%8Dkaid%C5%8D_Hodogaya%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141025.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E6%9D%B1%E6%B5%B7%E9%81%93%E4%BF%9D%E5%9C%9F%E3%82%B1%E8%B0%B7-Hodogaya_on_the_T%C5%8Dkaid%C5%8D_%28T%C5%8Dkaid%C5%8D_Hodogaya%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141025.jpg",
      "w": 3932,
      "h": 2701,
      "bytes": 3120359,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok"
    },
    "note": "並木松の枝と幹がリズミカルに富士を額縁のように囲む。",
    "bearingToFuji": 263.9,
    "distanceKm": 77.6,
    "cone": {
      "halfAngleDeg": 7.0,
      "apex": {
        "lat": 35.438,
        "lng": 139.578
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.277,
        "lng": 138.7454
      },
      "farRight": {
        "lat": 35.4459,
        "lng": 138.7215
      }
    },
    "coneHalfDeg": 7.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.438,139.578,45a,776d,35y,263.9h,81t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.438,139.578&heading=263.9&pitch=3",
    "viewpointName": "横浜市保土ケ谷区・保土ヶ谷宿品濃坂付近",
    "elevationDeg": 2.8,
    "alt_m": 45
  },
  {
    "id": "honjo_tatekawa",
    "no": 37,
    "title_ja": "本所立川",
    "title_en": "Tate River from the Timberyard at Honjo",
    "romaji": "Honjo Tatekawa",
    "region": "江戸・本所",
    "viewpoint": {
      "lat": 35.6905,
      "lng": 139.802
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Honjo Tatekawa, the timberyard at Honjo.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Honjo_Tatekawa%2C_the_timberyard_at_Honjo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Honjo_Tatekawa%2C_the_timberyard_at_Honjo.jpg",
      "w": 4477,
      "h": 2996,
      "bytes": 2232933,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "高く積み上げられた材木の垂直線・幾何学と、遠景の富士。",
    "bearingToFuji": 249.6,
    "distanceKm": 103.9,
    "cone": {
      "halfAngleDeg": 5.5,
      "apex": {
        "lat": 35.6905,
        "lng": 139.802
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.278,
        "lng": 138.7724
      },
      "farRight": {
        "lat": 35.4452,
        "lng": 138.6936
      }
    },
    "coneHalfDeg": 5.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.6905,139.802,2a,1039d,35y,249.6h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.6905,139.802&heading=249.6&pitch=2",
    "viewpointName": "墨田区菊川・竪川沿いの材木問屋街",
    "elevationDeg": 2.1,
    "alt_m": 2
  },
  {
    "id": "senju_hanamachi",
    "no": 38,
    "title_ja": "従千住花街眺望ノ不二",
    "title_en": "View of Mt Fuji from the Pleasure District at Senju",
    "romaji": "Senju Hana-machi yori chobo no Fuji",
    "region": "江戸・千住",
    "viewpoint": {
      "lat": 35.746,
      "lng": 139.803
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "冨嶽三十六景 従千住花街眺望の不二-Fuji Seen in the Distance from Senju Pleasure Quarter (Senju kagai yori chōbō no Fuji), from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei) MET DP141012.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/7/75/%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E5%BE%93%E5%8D%83%E4%BD%8F%E8%8A%B1%E8%A1%97%E7%9C%BA%E6%9C%9B%E3%81%AE%E4%B8%8D%E4%BA%8C-Fuji_Seen_in_the_Distance_from_Senju_Pleasure_Quarter_%28Senju_kagai_yori_ch%C5%8Db%C5%8D_no_Fuji%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141012.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File%3A%E5%86%A8%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF_%E5%BE%93%E5%8D%83%E4%BD%8F%E8%8A%B1%E8%A1%97%E7%9C%BA%E6%9C%9B%E3%81%AE%E4%B8%8D%E4%BA%8C-Fuji_Seen_in_the_Distance_from_Senju_Pleasure_Quarter_%28Senju_kagai_yori_ch%C5%8Db%C5%8D_no_Fuji%29%2C_from_the_series_Thirty-six_Views_of_Mount_Fuji_%28Fugaku_sanj%C5%ABrokkei%29_MET_DP141012.jpg",
      "w": 3952,
      "h": 2703,
      "bytes": 3158721,
      "mime": "image/jpeg",
      "license": "CC0",
      "verify": "ok (差替済)"
    },
    "note": "大名行列の槍の穂先が並ぶ土手の向こうに広がる水田と富士。",
    "bearingToFuji": 246.5,
    "distanceKm": 106.3,
    "cone": {
      "halfAngleDeg": 5.5,
      "apex": {
        "lat": 35.746,
        "lng": 139.803
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2782,
        "lng": 138.7788
      },
      "farRight": {
        "lat": 35.4454,
        "lng": 138.687
      }
    },
    "coneHalfDeg": 5.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.746,139.803,3a,1063d,35y,246.5h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.746,139.803&heading=246.5&pitch=2",
    "viewpointName": "足立区千住仲町・千住遊郭裏手・日光街道堤防",
    "elevationDeg": 2.0,
    "alt_m": 3
  },
  {
    "id": "shinagawa_gotenyama",
    "no": 39,
    "title_ja": "東海道品川御殿山ノ不二",
    "title_en": "Gotenyama, Shinagawa Along the Tokaido",
    "romaji": "Tokaido Shinagawa Goten-yama no Fuji",
    "region": "江戸・品川",
    "viewpoint": {
      "lat": 35.6235,
      "lng": 139.739
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Katsushika Hokusai, Goten-yama hill, Shinagawa on the Tōkaidō, ca. 1832.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Katsushika_Hokusai%2C_Goten-yama_hill%2C_Shinagawa_on_the_T%C5%8Dkaid%C5%8D%2C_ca._1832.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Katsushika_Hokusai%2C_Goten-yama_hill%2C_Shinagawa_on_the_T%C5%8Dkaid%C5%8D%2C_ca._1832.jpg",
      "w": 8455,
      "h": 5678,
      "bytes": 14939404,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "桜爛漫の御殿山から品川浦と遠景の富士を望む。",
    "bearingToFuji": 252.6,
    "distanceKm": 96.1,
    "cone": {
      "halfAngleDeg": 6.0,
      "apex": {
        "lat": 35.6235,
        "lng": 139.739
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2764,
        "lng": 138.7674
      },
      "farRight": {
        "lat": 35.4482,
        "lng": 138.699
      }
    },
    "coneHalfDeg": 6.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.6235,139.739,25a,961d,35y,252.6h,82t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.6235,139.739&heading=252.6&pitch=2",
    "viewpointName": "品川区北品川・御殿山高台（桜の名所）",
    "elevationDeg": 2.2,
    "alt_m": 25
  },
  {
    "id": "soshu_nakahara",
    "no": 40,
    "title_ja": "相州仲原",
    "title_en": "Nakahara in Sagami Province",
    "romaji": "Soshu Nakahara",
    "region": "相模・中原(平塚)",
    "viewpoint": {
      "lat": 35.352,
      "lng": 139.324
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Soshu Nakahara.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/5/55/Soshu_Nakahara.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Soshu_Nakahara.jpg",
      "w": 766,
      "h": 515,
      "bytes": 137278,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "巡礼の母子や商人が行き交う大山街道の宿場、川辺に映る富士。",
    "bearingToFuji": 271.2,
    "distanceKm": 54.1,
    "cone": {
      "halfAngleDeg": 8.5,
      "apex": {
        "lat": 35.352,
        "lng": 139.324
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.2887,
        "lng": 138.7328
      },
      "farRight": {
        "lat": 35.4325,
        "lng": 138.7354
      }
    },
    "coneHalfDeg": 8.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.352,139.324,18a,541d,35y,271.2h,80t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.352,139.324&heading=271.2&pitch=4",
    "viewpointName": "平塚市中原・中原御殿跡付近（大山道）",
    "elevationDeg": 3.9,
    "alt_m": 18
  },
  {
    "id": "koshu_isawa_akatsuki",
    "no": 41,
    "title_ja": "甲州伊沢暁",
    "title_en": "Dawn at Isawa in Kai Province",
    "romaji": "Koshu Isawa no Akatsuki",
    "region": "甲斐・石和",
    "viewpoint": {
      "lat": 35.655,
      "lng": 138.651
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Dawn at Isawa in the Kai province.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/6/67/Dawn_at_Isawa_in_the_Kai_province.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Dawn_at_Isawa_in_the_Kai_province.jpg",
      "w": 4539,
      "h": 3014,
      "bytes": 1810482,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "未明に出立する旅人、朝霧の宿場と黒々とした富士のシルエット。",
    "bearingToFuji": 168.0,
    "distanceKm": 33.5,
    "cone": {
      "halfAngleDeg": 9.0,
      "apex": {
        "lat": 35.655,
        "lng": 138.651
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.3737,
        "lng": 138.7834
      },
      "farRight": {
        "lat": 35.3541,
        "lng": 138.6703
      }
    },
    "coneHalfDeg": 9.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.655,138.651,260a,500d,35y,168.0h,78t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.655,138.651&heading=168.0&pitch=6",
    "viewpointName": "笛吹市石和町・甲州街道石和宿東の鵜飼川河畔",
    "elevationDeg": 6.0,
    "alt_m": 260
  },
  {
    "id": "minobu_ura_fuji",
    "no": 42,
    "title_ja": "身延川裏不二",
    "title_en": "The Back of Fuji from the Minobu River",
    "romaji": "Minobu-gawa ura Fuji",
    "region": "甲斐・身延",
    "viewpoint": {
      "lat": 35.385,
      "lng": 138.445
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "The back of the Fuji from the Minobu river.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/e/ef/The_back_of_the_Fuji_from_the_Minobu_river.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:The_back_of_the_Fuji_from_the_Minobu_river.jpg",
      "w": 1024,
      "h": 692,
      "bytes": 610573,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "身延山への参詣道。天子山地の背後から覗く西側山肌（裏富士）。",
    "bearingToFuji": 96.0,
    "distanceKm": 25.7,
    "cone": {
      "halfAngleDeg": 11.0,
      "apex": {
        "lat": 35.385,
        "lng": 138.445
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.4048,
        "lng": 138.7275
      },
      "farRight": {
        "lat": 35.3171,
        "lng": 138.7159
      }
    },
    "coneHalfDeg": 11.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.385,138.445,270a,500d,35y,96.0h,76t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.385,138.445&heading=96.0&pitch=8",
    "viewpointName": "南巨摩郡身延町・身延川（波木井川合流点付近）",
    "elevationDeg": 7.7,
    "alt_m": 270
  },
  {
    "id": "sunshu_ono_shinden",
    "no": 43,
    "title_ja": "駿州大野新田",
    "title_en": "Ono Field in Suruga Province",
    "romaji": "Sunshu Ono-shinden",
    "region": "駿河・大野新田",
    "viewpoint": {
      "lat": 35.138,
      "lng": 138.745
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Ono Shindon in the Suraga province.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Ono_Shindon_in_the_Suraga_province.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Ono_Shindon_in_the_Suraga_province.jpg",
      "w": 1024,
      "h": 683,
      "bytes": 534769,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "葦の湿地帯を牛を引いて行く農民と、真北に高くそびえる富士。",
    "bearingToFuji": 356.3,
    "distanceKm": 24.8,
    "cone": {
      "halfAngleDeg": 12.0,
      "apex": {
        "lat": 35.138,
        "lng": 138.745
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.3527,
        "lng": 138.671
      },
      "farRight": {
        "lat": 35.3587,
        "lng": 138.7845
      }
    },
    "coneHalfDeg": 12.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.138,138.745,5a,500d,35y,356.3h,75t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.138,138.745&heading=356.3&pitch=9",
    "viewpointName": "富士市大野新田・浮島ヶ原湿地帯",
    "elevationDeg": 8.6,
    "alt_m": 5
  },
  {
    "id": "sunshu_katakura_chaen",
    "no": 44,
    "title_ja": "駿州片倉茶園ノ不二",
    "title_en": "Tea Plantation at Katakura in Suruga Province",
    "romaji": "Sunshu Katakura-chaen no Fuji",
    "region": "駿河・片倉",
    "viewpoint": {
      "lat": 35.2155,
      "lng": 138.6445
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "The Tea plantation of Katakura in the Suruga province.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/5/54/The_Tea_plantation_of_Katakura_in_the_Suruga_province.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:The_Tea_plantation_of_Katakura_in_the_Suruga_province.jpg",
      "w": 4525,
      "h": 2987,
      "bytes": 2331536,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "茶摘みをする農民たちと、目前に迫る富士山南西面。",
    "bearingToFuji": 25.0,
    "distanceKm": 17.8,
    "cone": {
      "halfAngleDeg": 15.0,
      "apex": {
        "lat": 35.2155,
        "lng": 138.6445
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.3731,
        "lng": 138.6786
      },
      "farRight": {
        "lat": 35.3381,
        "lng": 138.7706
      }
    },
    "coneHalfDeg": 15.0,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@35.2155,138.6445,180a,500d,35y,25.0h,73t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.2155,138.6445&heading=25.0&pitch=11",
    "viewpointName": "富士宮市片倉・茶畑地帯",
    "elevationDeg": 11.4,
    "alt_m": 180
  },
  {
    "id": "tokaido_kanaya",
    "no": 45,
    "title_ja": "東海道金谷ノ不二",
    "title_en": "Kanaya Along the Tokaido",
    "romaji": "Tokaido Kanaya no Fuji",
    "region": "遠江・金谷(大井川)",
    "viewpoint": {
      "lat": 34.8236,
      "lng": 138.1408
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "The Fuji from Kanaya on the Tokaido.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/3/34/The_Fuji_from_Kanaya_on_the_Tokaido.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:The_Fuji_from_Kanaya_on_the_Tokaido.jpg",
      "w": 4469,
      "h": 2996,
      "bytes": 5707426,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "大井川を渡る人足たちと対岸の島田宿。志太平野の奥にそびえる富士。",
    "bearingToFuji": 41.6,
    "distanceKm": 80.1,
    "cone": {
      "halfAngleDeg": 6.5,
      "apex": {
        "lat": 34.8236,
        "lng": 138.1408
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.4119,
        "lng": 138.649
      },
      "farRight": {
        "lat": 35.3029,
        "lng": 138.7978
      }
    },
    "coneHalfDeg": 6.5,
    "refined": true,
    "googleEarthUrl": "https://earth.google.com/web/@34.8236,138.1408,65a,801d,35y,41.6h,81t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=34.8236,138.1408&heading=41.6&pitch=3",
    "viewpointName": "島田市金谷・大井川右岸川原渡し場跡",
    "elevationDeg": 2.6,
    "alt_m": 65
  },
  {
    "id": "shojin_tozan",
    "no": 46,
    "title_ja": "諸人登山",
    "title_en": "Climbing on Fuji",
    "romaji": "Shojin tozan",
    "region": "富士山",
    "viewpoint": {
      "lat": 35.365,
      "lng": 138.733
    },
    "confidence": "documented",
    "fujiSubject": false,
    "year": "c.1831-1834",
    "image": {
      "file": "Climbing on Mt. Fuji.jpg",
      "url": "https://upload.wikimedia.org/wikipedia/commons/5/53/Climbing_on_Mt._Fuji.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      "page": "https://commons.wikimedia.org/wiki/File:Climbing_on_Mt._Fuji.jpg",
      "w": 4572,
      "h": 3053,
      "bytes": 5310673,
      "mime": "image/jpeg",
      "license": "Public domain",
      "verify": "ok"
    },
    "note": "富士講の白装束の道者たちが金剛杖をつき山頂を目指す現場ルポ。",
    "cone": {
      "halfAngleDeg": 25.0,
      "apex": {
        "lat": 35.365,
        "lng": 138.733
      },
      "tip": {
        "lat": 35.3606,
        "lng": 138.7274
      },
      "farLeft": {
        "lat": 35.3591,
        "lng": 138.7302
      },
      "farRight": {
        "lat": 35.363,
        "lng": 138.7257
      }
    },
    "bearingToFuji": 226.1,
    "distanceKm": 0.7,
    "viewpointName": "富士山頂付近・八合目〜九合目登山道岩場",
    "alt_m": 3400,
    "elevationDeg": 25.0,
    "coneHalfDeg": 25.0,
    "googleEarthUrl": "https://earth.google.com/web/@35.365,138.733,3400a,500d,35y,226.1h,59t,0r",
    "googleMapsUrl": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.365,138.733&heading=226.1&pitch=25",
    "refined": true
  }
];
