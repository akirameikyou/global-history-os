// data/hokusai_frame_corners.js — 富嶽三十六景46図の「絵の四隅」（幾何ガイドの基準）
// 生成: tools/hokusai_geometry/index.html（自動検出＋手直し）。手で編集せず、作業台で直して書き出す。
// 座標は Commons 画像（hokusai_views.js の evidence.image）の幅・高さに対する割合 [x,y]（0〜1, 左上原点）。
// A=左下 B=右下 C=右上 D=左上。source: auto=自動検出 / manual=作業台で手直し。
// 画像を差し替えたら、その図の四隅も作業台で確認し直す。
export const frameCornersMeta = { updated:'2026-11-05', count:46, basis:'Wikimedia Commons image (evidence.image.file)', note:'観察のための補助線です。北斎の作図法を示すものではありません。' };
export const frameCorners = {
  1: { id:'kanagawa_okinamiura', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 神奈川沖浪裏
  2: { id:'gaifu_kaisei', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 凱風快晴
  3: { id:'sanka_hakuu', A:[0.0125,0.9781], B:[0.99,0.9781], C:[0.99,0.0255], D:[0.0125,0.0255], source:'auto', note:'台紙あり' }, // 山下白雨
  4: { id:'fukagawa_mannenbashi', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 深川万年橋下
  5: { id:'toto_sundai', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 東都駿台
  6: { id:'aoyama_enzanomatsu', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 青山円座松
  7: { id:'bushu_senju', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 武州千住
  8: { id:'bushu_tamagawa', A:[0.015,0.9783], B:[0.9775,0.9783], C:[0.9775,0.0253], D:[0.015,0.0253], source:'auto', note:'台紙あり' }, // 武州玉川
  9: { id:'koshu_inumetoge', A:[0.0075,0.9748], B:[0.985,0.9748], C:[0.985,0.018], D:[0.0075,0.018], source:'auto', note:'台紙あり' }, // 甲州犬目峠
  10: { id:'bishu_fujimigahara', A:[0.0175,0.9709], B:[0.9875,0.9709], C:[0.9875,0.0182], D:[0.0175,0.0182], source:'auto', note:'台紙あり' }, // 尾州不二見原
  11: { id:'toto_asakusa_honganji', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 東都浅艸本願寺
  12: { id:'buyo_tsukudajima', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 武陽佃嶌
  13: { id:'soshu_shichirigahama', A:[0.0225,0.9745], B:[0.9825,0.9745], C:[0.9825,0.0364], D:[0.0225,0.0364], source:'auto', note:'台紙あり' }, // 相州七里濱
  14: { id:'soshu_umezawa', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 相州梅澤左
  15: { id:'koshu_kajikazawa', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 甲州石班澤
  16: { id:'koshu_mishimagoe', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 甲州三嶌越
  17: { id:'shinshu_suwako', A:[0.0525,0.9241], B:[0.945,0.9241], C:[0.945,0.0759], D:[0.0525,0.0759], source:'auto', note:'台紙あり' }, // 信州諏訪湖
  18: { id:'sunshu_ejiri', A:[0.0225,0.9677], B:[0.97,0.9677], C:[0.97,0.0394], D:[0.0225,0.0394], source:'auto', note:'台紙あり' }, // 駿州江尻
  19: { id:'totomi_sanchu', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 遠江山中
  20: { id:'joshu_ushibori', A:[0.02,0.9674], B:[0.98,0.9674], C:[0.98,0.0399], D:[0.02,0.0399], source:'auto', note:'台紙あり' }, // 常州牛堀
  21: { id:'koto_suruga_mitsui', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 江都駿河町三井見世略図
  22: { id:'ommayagashi_ryogoku', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 御厩川岸より両国橋夕陽見
  23: { id:'gohyakurakan_sazaido', A:[0.015,0.9682], B:[0.9825,0.9682], C:[0.9825,0.0318], D:[0.015,0.0318], source:'auto', note:'台紙あり' }, // 五百らかん寺さゞゐどう
  24: { id:'koishikawa_yuki', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 礫川雪ノ且
  25: { id:'shimomeguro', A:[0.03,0.9635], B:[0.97,0.9635], C:[0.97,0.0438], D:[0.03,0.0438], source:'auto', note:'台紙あり' }, // 下目黒
  26: { id:'onden_suisha', A:[0.0225,0.9781], B:[0.9825,0.9781], C:[0.9825,0.0292], D:[0.0225,0.0292], source:'auto', note:'台紙あり' }, // 隠田の水車
  27: { id:'soshu_enoshima', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 相州江の嶌
  28: { id:'ejiri_tago_no_ura', A:[0.015,0.978], B:[0.985,0.978], C:[0.985,0.022], D:[0.015,0.022], source:'auto', note:'台紙あり' }, // 東海道江尻田子の浦略図
  29: { id:'tokaido_yoshida', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 東海道吉田
  30: { id:'kazusa_kairo', A:[0.01,0.9772], B:[0.9825,0.9772], C:[0.9825,0.0228], D:[0.01,0.0228], source:'auto', note:'台紙あり' }, // 上総ノ海路
  31: { id:'edo_nihonbashi', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 江戸日本橋
  32: { id:'sumida_sekiya', A:[0.0175,0.9777], B:[0.9825,0.9777], C:[0.9825,0.0297], D:[0.0175,0.0297], source:'auto', note:'台紙あり' }, // 隅田川関屋の里
  33: { id:'noboto_ura', A:[0.0225,0.9745], B:[0.985,0.9745], C:[0.985,0.0291], D:[0.0225,0.0291], source:'auto', note:'台紙あり' }, // 登戶浦
  34: { id:'soshu_hakone_kosui', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 相州箱根湖水
  35: { id:'koshu_misaka_suimen', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 甲州三坂水面
  36: { id:'tokaido_hodogaya', A:[0.0175,0.9745], B:[0.9775,0.9745], C:[0.9775,0.0327], D:[0.0175,0.0327], source:'auto', note:'台紙あり' }, // 東海道程ヶ谷
  37: { id:'honjo_tatekawa', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 本所立川
  38: { id:'senju_hanamachi', A:[0.02,0.9745], B:[0.98,0.9745], C:[0.98,0.0365], D:[0.02,0.0365], source:'auto', note:'台紙あり' }, // 従千住花街眺望ノ不二
  39: { id:'shinagawa_gotenyama', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 東海道品川御殿山ノ不二
  40: { id:'soshu_nakahara', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 相州仲原
  41: { id:'koshu_isawa_akatsuki', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 甲州伊沢暁
  42: { id:'minobu_ura_fuji', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 身延川裏不二
  43: { id:'sunshu_ono_shinden', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 駿州大野新田
  44: { id:'sunshu_katakura_chaen', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 駿州片倉茶園ノ不二
  45: { id:'tokaido_kanaya', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 東海道金谷ノ不二
  46: { id:'shojin_tozan', A:[0,1], B:[1,1], C:[1,0], D:[0,0], source:'auto', note:'余白なし' }, // 諸人登山
};
