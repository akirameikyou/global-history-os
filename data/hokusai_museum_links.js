// data/hokusai_museum_links.js — HOKUSAI OS / Museum Link Registry 001
// 北斎に関係する美術館・博物館の「公式サイトへのリンク」台帳。表紙(hokusai/index.html)の
// 「関連美術館・公式コレクション」ダイアログが display:true の館だけを描画する。
//
// 規律:
//  - リンク掲載の可否(linkPermission)と画像利用の可否(imagePermission)は別フィールド。一つにまとめない。
//  - 個別に得た了承(explicit_link_permission)と、館の公開方針(official_link_policy_allows)を区別する。
//  - リンク掲載の了承を、画像・文章・ロゴの利用許可や推薦・監修へ拡張解釈しない。
//  - 下記の区分名は内部管理用。訪問者向け画面には表示しない。
//  - 未確認の事項は推測で埋めず、そのまま「未確認」として残す。
//  - 所蔵情報(holdings / impressionHoldings, hokusai_life.js)とは別台帳。holdingsId は参照のみ。
//
// linkPermission:
//   explicit_link_permission    … 個別の返信でリンク掲載の了承を確認
//   official_link_policy_allows … 公式方針に基づきリンク掲載が認められる
//   reference_use_confirmed     … 参考情報の利用について回答を得た（リンク掲載の明示的許可ではない）
//   link_permission_unconfirmed … リンク掲載の明示的な確認が未完了
// imagePermission:
//   image_permission_required_or_unconfirmed … 画像利用には別途確認が必要
//
// URL確認: 2026-10-15 に各URLが公式サイトの該当ページを返すことをブラウザで確認。

export const museumLinksCheckedAt = '2026-10-15';

export const museumLinks = [
  {
    id: 'ml_hokusaikan',
    holdingsId: 'h_hokusaikan',
    name: { ja: '北斎館', en: 'The Hokusai-kan Museum' },
    description: '北斎の晩年と小布施との関わりを知るための専門美術館。',
    links: [
      { label: '北斎館公式サイト', url: 'https://hokusai-kan.com/' },
    ],
    display: true,
    linkPermission: 'explicit_link_permission',
    linkPermissionBasis: '担当者からの個別返信でリンク掲載の了承を確認（北斎OS制作者宛）。',
    imagePermission: 'image_permission_required_or_unconfirmed',
    constraints: [
      '北斎OSへの協力自体は現時点で難しいとの回答。リンク掲載の了承を資料提供・共同研究・画像使用の承諾へ拡張しない。',
      '北斎館が北斎OSを推薦・監修していると誤解される表現をしない。',
    ],
  },
  {
    id: 'ml_met',
    holdingsId: 'h_met',
    name: { ja: 'メトロポリタン美術館', en: 'The Metropolitan Museum of Art' },
    description: '北斎関連作品と所蔵情報を確認できる公式コレクション。',
    links: [
      { label: 'The Met公式サイト', url: 'https://www.metmuseum.org/' },
      { label: 'コレクションを検索', url: 'https://www.metmuseum.org/art/collection/search?q=Hokusai' },
    ],
    display: true,
    linkPermission: 'explicit_link_permission',
    linkPermissionBasis: '権利・許諾部門からの個別返信で、関連ページへのリンク掲載を歓迎する旨を確認。',
    imagePermission: 'image_permission_required_or_unconfirmed',
    imageNote: 'Open Access表示がある作品画像は同館の公開条件に従って利用可。OA表示がない画像・制限のある資料は個別に条件確認。クレジットを削除・改変しない。',
    termsUrl: 'https://www.metmuseum.org/policies/terms-and-conditions',
    constraints: [
      'The Metが北斎OSを推薦・公認しているような表現をしない。',
      '同館から北斎OSへのリンクは通常ないとの回答。相互リンクを前提にしない。',
    ],
  },
  {
    id: 'ml_sumida',
    holdingsId: 'h_sumida',
    name: { ja: 'すみだ北斎美術館', en: 'The Sumida Hokusai Museum' },
    description: '北斎と墨田の関係、作品、関連資料を知るための美術館。',
    links: [
      { label: '公式サイト', url: 'https://hokusai-museum.jp/' },
    ],
    display: true,
    linkPermission: 'official_link_policy_allows',
    linkPermissionBasis: '公式FAQ「営利を目的としない限り自由。画像やPDFファイルへの直接リンクは遠慮」。',
    linkPolicyUrl: 'https://hokusai-museum.jp/modules/Page/pages/view/112',
    imagePermission: 'image_permission_required_or_unconfirmed',
    imageNote: '同館サイトの作品画像を転載する場合は、同館が案内する画像貸出の手続きに従う。',
    constraints: [
      '画像・PDFファイルを直接のリンク先にしない（トップまたは通常のHTMLページのみ）。',
    ],
  },
  {
    id: 'ml_tnm',
    holdingsId: 'h_tnm',
    name: { ja: '東京国立博物館', en: 'Tokyo National Museum' },
    description: '日本美術の所蔵情報や公開資料を確認できる国立博物館。',
    links: [
      { label: '公式サイト', url: 'https://www.tnm.jp/' },
    ],
    display: true,
    linkPermission: 'official_link_policy_allows',
    linkPermissionBasis: '公式FAQ「インターネット上に公開されているウェブサイトへのリンクは自由。特に連絡は不要」。',
    linkPolicyUrl: 'https://www.tnm.jp/modules/r_free_page/index.php?id=156',
    imagePermission: 'image_permission_required_or_unconfirmed',
    imageNote: '同館サイトのテキスト・画像・資料は別媒体への収録・再配布を許諾していない（公式FAQ）。デジタルコンテンツは個別に条件確認。',
    constraints: [
      '公式FAQによると https://www.tnm.jp/ 以外のURLは予告なく変更される場合がある。そのためトップページのみにリンクする。',
    ],
  },
  {
    id: 'ml_ngv',
    holdingsId: 'h_ngv',
    name: { ja: 'ビクトリア国立美術館', en: 'National Gallery of Victoria' },
    description: '北斎関連情報を参照できるオーストラリアの美術館。',
    links: [
      { label: '公式サイト', url: 'https://www.ngv.vic.gov.au/' },
    ],
    // 候補として管理のみ。リンク掲載の明示的な許可は未確認のため表示しない。
    display: false,
    linkPermission: 'reference_use_confirmed',
    linkPermissionBasis: '返信で確認できたのは「NGVサイトの北斎情報を参考資料として利用可」「資料の直接使用は著作権担当チームの承認が必要」の2点。リンク掲載の可否は未確認。',
    linkPermissionStatus: 'link_permission_unconfirmed',
    copyrightPolicyUrl: 'https://www.ngv.vic.gov.au/about/reports-and-documents/copyright-and-reproductions/',
    imagePermission: 'image_permission_required_or_unconfirmed',
    imageNote: 'NGVの画像・ロゴ・独自資料は許諾なしに転載しない。',
    constraints: [
      '個別リンク許諾済みとして扱わない。表示する場合は公式条件の確認、または問い合わせの結果を待つ。',
    ],
  },
];
