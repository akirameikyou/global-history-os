export const personLinks = [
{
  id:'whitfield',
  label:'WHITFIELD',
  birthYear:1804,
  deathYear:1886,
  fullName:'William H. Whitfield',
  relationType:'PACIFIC BRIDGE',
  portrait:'../assets/portraits/william-whitfield-portrait.jpg',
  relation:'アメリカの捕鯨船長。1841年、鳥島で漂流していた万次郎らを救助し、万次郎が太平洋世界へ接続される起点となった人物。',
  connectionTrace:[
    {
      year:1841,
      text:'鳥島で万次郎らを救助。',
      detail:'漂流していた万次郎を救助し、ハワイ、アメリカへの道を開いた。',
      goToYear:1841,
      focus:'torishima'
    },
    {
      year:1843,
      text:'万次郎をフェアヘーブンへ迎える。',
      detail:'教育と生活の場を与え、万次郎の航海術・英語・世界認識の形成に関わった。'
    },
    {
      year:1870,
      text:'万次郎と再会。',
      detail:'万次郎は再渡米時にフェアヘーブンを訪れ、ホイットフィールドと再会した。'
    }
  ]
},

{
  id:'perry',
  label:'PERRY',
  birthYear:1794,
  deathYear:1858,
  fullName:'Matthew C. Perry',
  relationType:'MARITIME CATALYST',
  portrait:'../assets/portraits/matthew-perry-portrait.jpg',
  relation:'アメリカ海軍提督。1853年に黒船艦隊を率いて浦賀へ来航し、日本を世界海洋ネットワークへ接続した人物。',
  connectionTrace:[
    {
      year:1852,
      text:'日本遠征を開始。',
      detail:'蒸気船、捕鯨、石炭補給、中国貿易を背景に、日本遠征が進められた。'
    },
    {
      year:1853,
      text:'黒船来航。浦賀沖に到達。',
      detail:'世界海洋ネットワークが日本へ到達した象徴的な接続点。',
      goToYear:1853,
      focus:'uraga'
    },
    {
      year:1854,
      text:'日米和親条約締結。',
      detail:'日本とアメリカの制度的接続点を形成した。'
    }
  ]
},

{
  id:'katsu',
  label:'KATSU',
  birthYear:1823,
  deathYear:1899,
  fullName:'Katsu Kaishu',
  relationType:'WORLD UNDERSTANDING HUB',
  portrait:'../assets/portraits/katsu-kaishu-portrait.jpg',
  relation:'幕臣。海軍創設と近代航海術の導入を進め、万次郎の知識を受け取り、龍馬へとつなぐ接続点となった人物。',
  connectionTrace:[
    {
      year:1853,
      text:'黒船来航後、海防と海軍構想が重要化。',
      detail:'ペリー来航後、日本は世界との接続を迫られ、勝海舟は海軍・航路・国際関係の視点から国家構想を進めた。'
    },
    {
      year:1860,
      text:'咸臨丸渡米。',
      detail:'太平洋を越えた幕府使節の一環として、日本の海軍近代化を象徴する出来事となった。'
    },
    {
      year:1860,
      text:'坂本龍馬へ海軍思想を伝える。',
      detail:'龍馬は勝海舟に師事し、海軍・航海・世界認識の重要性を学んだ。'
    }
  ]
},

{
  id:'ryoma',
  label:'RYOMA',
  birthYear:1836,
  deathYear:1867,
  fullName:'Sakamoto Ryoma',
  relationType:'NETWORK CONNECTOR',
  portrait:'../assets/portraits/sakamoto-ryoma-portrait.jpg',
  relation:'土佐藩出身の志士。薩長同盟や海援隊の活動を通じ、幕末日本の人材・情報・思想を接続した人物。',
  connectionTrace:[
    {
      year:1862,
      text:'勝海舟に師事。',
      detail:'海軍思想、航海術、世界認識を学び、海を接続の場として捉える視点を得た。'
    },
    {
      year:1865,
      text:'海援隊につながる活動を進める。',
      detail:'海運・貿易・海軍を軸に、新しい日本の接続構想を進めた。'
    },
    {
      year:1866,
      text:'薩長同盟の成立に関与。',
      detail:'対立していた勢力を結び、幕末日本の政治ネットワークを再編する接続点となった。'
    },
    {
      year:1867,
      text:'京都近江屋で暗殺。',
      detail:'明治維新直前に31歳で生涯を終えた。'
    }
  ]
}
];
{
  id:'yodo',
  label:'YODO',
  birthYear:1827,
  deathYear:1872,
  fullName:'山内容堂 / Yamauchi Yodo',
  relationType:'POLITICAL HUB',
  portrait:'../assets/portraits/yamauchi-yodo-portrait.jpg',

  relation:'土佐藩第15代藩主。帰国した万次郎の海外知識を評価し、土佐藩における世界知識の受容を支えた政治的中心人物。',

  connectionTrace:[
    {
      year:1852,
      text:'帰国した万次郎を保護。',
      detail:'土佐藩士として遇し、海外知識を藩政へ活用する基盤を整えた。'
    },
    {
      year:1852,
      text:'吉田東洋らによる聴取を認める。',
      detail:'万次郎の知識を藩内で共有し、西洋事情を学ぶ機会を作った。'
    },
    {
      year:1867,
      text:'大政奉還を支持。',
      detail:'土佐藩を通じて幕末政治の転換に大きな役割を果たした。'
    }
  ]
},

{
  id:'nariakira',
  label:'NARIAKIRA',
  birthYear:1809,
  deathYear:1858,
  fullName:'島津斉彬 / Shimazu Nariakira',
  relationType:'MODERNIZATION HUB',
  portrait:'../assets/portraits/shimazu-nariakira-portrait.jpg',

  relation:'薩摩藩第11代藩主。万次郎から海外事情を直接聴取し、西洋文明を日本の近代化へ取り込もうとした改革者。',

  connectionTrace:[
    {
      year:1851,
      text:'万次郎を御下問。',
      detail:'海外事情、航海術、西洋文明について直接質問し、知識を政策へ活かそうとした。'
    },
    {
      year:1851,
      text:'集成館事業を推進。',
      detail:'反射炉、蒸気機関、ガラス、写真など、西洋技術導入を積極的に進めた。'
    },
    {
      year:1858,
      text:'死去。',
      detail:'日本近代化の礎を築いたまま、50歳でその生涯を終えた。'
    }
  ]
},
