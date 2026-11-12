// data/manjiro_land_legs.js — 航路（data/manjiro_track.js）に入っていない、陸と川の短い道（新装版 focusShell だけで使う）
// 2026-11-12 清水さん「以前のOSのように、金山へのルートも描く」「足摺のポイントまでルートを描く」。
// 公開版（sandbox）は出来事どうしを弧で結んでいた。新装版は航海（routePoints）だけを線にしていたので、金山と、高知から先が途切れていた。
//
// 規律：線の種類は「どこを通ったか」の確かさ（航路と同じ ARC_STYLE）。
//   documented … 出来事の本文が、その道で行ったことを書いている（形は川筋に沿わせた点。地名は出さない）
//   estimated  … 道筋は記録に無い。破線で「推定」として描く（形の点は、通ったと言うためでなく線を地形に沿わせるため）
// from / to は data/events.js の出来事 id。線は to の出来事が出る時（自動鑑賞は止まる時刻）に出る。
// land:true は黄（陸路）、false は航路と同じ色（川を行く蒸気船）。
export const LAND_LEGS = [
  // ── ゴールドラッシュ 1850 ──
  { id: 'gr_river', chapterId: 'gold_rush', from: 'manjiro_sanfrancisco_arrival', to: 'manjiro_sacramento_steamship', land: false, status: 'documented',
    note: '本文「サンフランシスコから蒸気船で河をさかのぼり、サクラメントへ」。湾からカーキネス海峡・サスーン湾・サクラメント川をさかのぼる水路の形に沿わせた（形の点）。',
    pts: [[37.7749, -122.4194], [37.81, -122.39], [37.87, -122.40], [37.97, -122.43], [38.05, -122.32], [38.06, -122.21], [38.05, -122.10], [38.07, -121.97], [38.06, -121.85], [38.16, -121.69], [38.27, -121.58], [38.42, -121.52], [38.5816, -121.4944]] },
  { id: 'gr_wagon', chapterId: 'gold_rush', from: 'manjiro_sacramento_steamship', to: 'manjiro_wagon_route', land: true, status: 'estimated',
    note: '本文「サクラメントから馬車に乗り換え、金山へ向かって山道を進む」。道筋と行き先の位置は推定（年譜の点も estimated）。',
    pts: [[38.5816, -121.4944], [38.75, -120.85]] },
  { id: 'gr_walk', chapterId: 'gold_rush', from: 'manjiro_wagon_route', to: 'manjiro_goldfield', land: true, status: 'estimated',
    note: '本文「徒歩で金山へ入り」。金山の位置は推定。', pts: [[38.75, -120.85], [38.8026, -120.8947]] },
  { id: 'gr_back', chapterId: 'gold_rush', from: 'manjiro_goldfield', to: 'manjiro_sanfrancisco_return', land: true, status: 'estimated',
    note: '本文「サンフランシスコへ戻る」。どの道で戻ったかは記録に無い。行きと同じ道とも決めず、両端を結ぶだけ（破線）。',
    pts: [[38.8026, -120.8947], [37.7749, -122.4194]] },
  // ── 帰国 1852：高知城下→宇佐→中浜 ──
  { id: 'rt_usa', chapterId: 'return', from: 'manjiro_kochi_interrogation', to: 'manjiro_usa_return', land: true, status: 'estimated',
    note: '本文「11月、三人そろって宇佐へ戻る」。道筋は記録に無い（約10km）。宇佐では叔父の家に一泊させてもらった（中浜明『中浜万次郎の生涯』151頁。2026-11-12 清水さんが示した）。', pts: [[33.56, 133.53], [33.496, 133.450]] },
  { id: 'rt_home', chapterId: 'return', from: 'manjiro_usa_return', to: 'manjiro_mother_reunion', land: true, status: 'estimated',
    note: '本文「11月16日、中浜で母・汐と再会」。中浜明『中浜万次郎の生涯』（富山房, 1970）152頁（2026-11-12 清水さんが示した）：宇佐から陸路150キロほどを四日で歩き、足摺岬の中ノ浜に着いたのが（旧暦）10月5日の午後。陸路で歩いたことはこの本の記述。どの道を通ったかは書かれていないので、線は破線（推定）のまま、土佐の西への街道筋（須崎・窪川・中村のあたり）に沿わせた形（形の点。地名は出さない）。',
    pts: [[33.496, 133.450], [33.40, 133.29], [33.21, 133.13], [32.99, 132.93], [32.78, 132.95]] },
];
