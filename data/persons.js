export const personLinks = [
{
  id:'whitfield',
  label:'WHITFIELD',
  birthYear:1804,
  deathYear:1886,
  fullName:'William H. Whitfield',
  relationType:'DIRECT LINK',
  portrait:'',
  relation:'フェアヘーブンの捕鯨船長。1841年に遭難した中浜万次郎を救助し、帰国まで育ての親となった。後にマサチューセッツ州議会議員を務めた。',
  connectionTrace:[
    {
      year:1841,
      text:'漂流し、鳥島へ漂着する。',
      detail:'ジョン万次郎を救助した捕鯨船長。万次郎をアメリカ社会へ導き、教育と国際経験の起点となった。',
      goToYear:1841,
      focus:'torishima'
    },
    {
      year:1846,
      text:'万次郎、捕鯨船フランクリン号で出航。',
      detail:'航海術を学ぶため、マサチューセッツを出港。ホイットフィールド船長と一旦別れる。'
    },
    {
      year:1852,
      text:'フェアヘーブンで再会。これが最後の対面となる。',
      detail:'帰国の途中でホイットフィールド船長のもとを訪ね、数年ぶりに再会した。'
    }
  ]
},

{
  id:'perry',
  label:'PERRY',
  birthYear:1794,
  deathYear:1858,
  fullName:'Matthew C. Perry',
  relationType:'CIVILIZATION LINK',
  portrait:'',
  relation:'アメリカ海軍提督。蒸気船革命、太平洋捕鯨、中国貿易、アメリカ太平洋進出を背景に、1853年に浦賀へ来航した。History OSでは、日本を世界海洋ネットワークへ接続した Pacific Network Connector として位置付ける。',
  connectionTrace:[
    {
      year:1852,
      text:'東インド艦隊司令官として日本遠征を開始。',
      detail:'ペリー遠征は、蒸気船時代の石炭補給港、捕鯨船保護、中国貿易、太平洋航路整備を背景に計画された。'
    },
    {
      year:1853,
      text:'黒船来航。浦賀沖に到達。',
      detail:'アメリカ大統領フィルモアの国書を幕府へ提出。世界海洋ネットワークが日本へ到達した象徴的瞬間。',
      goToYear:1853,
      focus:'uraga'
    },
    {
      year:1854,
      text:'日米和親条約締結を主導。',
      detail:'日本とアメリカの制度的接続点を形成。開国は単独事件ではなく、十九世紀文明流動の一部として進行した。'
    }
  ]
},

{
  id:'ryoma',
  label:'RYOMA',
  birthYear:1836,
  deathYear:1867
}
];
