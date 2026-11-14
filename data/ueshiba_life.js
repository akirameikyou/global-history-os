// data/ueshiba_life.js — 植芝盛平Focus（ueshiba/focusShell.html）のデータ。
// 出典は合気会の公式ページ4つ（確認日 2026-11-14）。照合の記録は docs/ueshiba_focus/REPORT_v0.1.md。
// 出典のない年を作らない。食い違う年は両方を持ち、片方に決めない。
export const UESHIBA = {
  "_about": "植芝盛平Focus（History OS）のデータ。aikido-history-os 側で 2026-11-14 に照合したもの（M4_calendar_side_20261114/data/history/history.json）を移した。kind: life=開祖の生涯（右の LIFE）/ org=合気会の歩み（左の AIKIKAI）。status: confirmed=出典の記載と一致 / split=出典どうしで食い違い（片方に決めない） / partial=一部だけ確かめた。unverified は出典で確かめられなかった試作の記述で、地球に出さない。",
  "version": "0.1",
  "checked_on": "2026-11-14",
  "sources": {
    "HE": {
      "url": "https://aikikai.or.jp/eng/aikido/history/",
      "title": {
        "ja": "合気会 英語版「History」",
        "en": "Aikikai — History (English)"
      },
      "checked_on": "2026-11-14",
      "type": "official_org_page"
    },
    "HJ": {
      "url": "https://www.aikikai.or.jp/aikido/history/",
      "title": {
        "ja": "合気会「沿革」",
        "en": "Aikikai — 沿革 (Japanese history)"
      },
      "checked_on": "2026-11-14",
      "type": "official_org_page"
    },
    "ME": {
      "url": "https://aikikai.or.jp/eng/aikido/message/",
      "title": {
        "ja": "合気会 英語版「Message from Doshu」（歴代道主の略歴）",
        "en": "Aikikai — Message from Doshu (with biographies)"
      },
      "checked_on": "2026-11-14",
      "type": "official_org_page"
    },
    "MJ": {
      "url": "https://www.aikikai.or.jp/aikido/message/",
      "title": {
        "ja": "合気会「道主挨拶」（歴代道主の略歴）",
        "en": "Aikikai — 道主挨拶 (Japanese, with biographies)"
      },
      "checked_on": "2026-11-14",
      "type": "official_org_page"
    }
  },
  "places": {
    "tanabe": {
      "name": {
        "ja": "和歌山県田辺",
        "en": "Tanabe, Wakayama"
      },
      "lat": 33.728,
      "lng": 135.378
    },
    "shirataki": {
      "name": {
        "ja": "北海道 紋別郡白滝（現・遠軽町）",
        "en": "Shirataki, Monbetsu District, Hokkaido (now Engaru)"
      },
      "lat": 43.886,
      "lng": 143.149
    },
    "ayabe": {
      "name": {
        "ja": "京都府綾部",
        "en": "Ayabe, Kyoto"
      },
      "lat": 35.299,
      "lng": 135.259
    },
    "shiba": {
      "name": {
        "ja": "東京 芝・白金猿町",
        "en": "Shirogane-Sarumachi, Shiba, Tokyo"
      },
      "lat": 35.64,
      "lng": 139.728
    },
    "wakamatsu": {
      "name": {
        "ja": "東京 新宿区若松町（現在の本部道場の地）",
        "en": "Wakamatsu-cho, Shinjuku, Tokyo (site of today's Hombu Dojo)"
      },
      "lat": 35.7,
      "lng": 139.722
    },
    "iwama": {
      "name": {
        "ja": "茨城県岩間（現・笠間市）",
        "en": "Iwama, Ibaraki (now Kasama)"
      },
      "lat": 36.3,
      "lng": 140.29
    },
    "nihonbashi": {
      "name": {
        "ja": "東京 日本橋",
        "en": "Nihonbashi, Tokyo"
      },
      "lat": 35.681,
      "lng": 139.774
    },
    "budokan": {
      "name": {
        "ja": "日本武道館（東京）",
        "en": "Nippon Budokan, Tokyo"
      },
      "lat": 35.693,
      "lng": 139.75
    },
    "shinjuku": {
      "name": {
        "ja": "東京 西新宿",
        "en": "Nishi-Shinjuku, Tokyo"
      },
      "lat": 35.69,
      "lng": 139.694
    }
  },
  "chapters": [
    {
      "id": "c1",
      "from": 1883,
      "to": 1910,
      "title": {
        "ja": "田辺に生まれる",
        "en": "Born in Tanabe"
      }
    },
    {
      "id": "c2",
      "from": 1911,
      "to": 1918,
      "title": {
        "ja": "北海道・白滝",
        "en": "Shirataki, Hokkaido"
      }
    },
    {
      "id": "c3",
      "from": 1919,
      "to": 1926,
      "title": {
        "ja": "綾部と「合気」",
        "en": "Ayabe and \"Aiki\""
      }
    },
    {
      "id": "c4",
      "from": 1927,
      "to": 1940,
      "title": {
        "ja": "東京・皇武館と皇武会",
        "en": "Tokyo: Kobukan and the Kobukai"
      }
    },
    {
      "id": "c5",
      "from": 1941,
      "to": 1947,
      "title": {
        "ja": "岩間と「合気道」の名",
        "en": "Iwama and the name \"Aikido\""
      }
    },
    {
      "id": "c6",
      "from": 1948,
      "to": 1969,
      "title": {
        "ja": "合気会と本部道場",
        "en": "The Aikikai and Hombu Dojo"
      }
    },
    {
      "id": "c7",
      "from": 1970,
      "to": 2100,
      "title": {
        "ja": "開祖ののち、海外へ",
        "en": "After the Founder: abroad"
      }
    }
  ],
  "events": [
    {
      "id": "h1883-birth",
      "year": 1883,
      "date": "1883-12-14",
      "place": "tanabe",
      "status": "confirmed",
      "text": {
        "ja": "植芝与六の長男として、和歌山県田辺（現・田辺市）に生まれる。",
        "en": "Born in Tanabe, Wakayama, as the eldest son of Yoroku Ueshiba."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "note": {
        "ja": "生まれた町の名は出典で分かれる（沿革は「元町」、道主挨拶は「西ノ谷村（現・上野山）」）。ここでは町名を決めず、地図の印も田辺の市街においている。",
        "en": "The sources differ on the exact locality (Motomachi vs. Nishinotani village). We do not choose; the marker is placed at central Tanabe."
      },
      "kind": "life"
    },
    {
      "id": "h1897-budo",
      "year": 1897,
      "place": "tanabe",
      "status": "confirmed",
      "text": {
        "ja": "このころから諸流の武術を学び始める。",
        "en": "Begins studying several traditional martial arts."
      },
      "sources": [
        "HE",
        "HJ"
      ],
      "kind": "life"
    },
    {
      "id": "h1908-yagyu",
      "year": 1908,
      "place": null,
      "status": "confirmed",
      "text": {
        "ja": "坪井政之輔より後藤派柳生流柔術の免許を受ける。",
        "en": "Receives a licence in Goto-ha Yagyu-ryu jujutsu from Masanosuke Tsuboi."
      },
      "sources": [
        "ME",
        "MJ"
      ],
      "note": {
        "ja": "場所は出典に書かれていないため、地図には出さない。",
        "en": "No place is given in the sources, so it is not shown on the globe."
      },
      "kind": "life"
    },
    {
      "id": "h1911-hokkaido",
      "year": 1911,
      "yearAlt": 1912,
      "place": "shirataki",
      "status": "split",
      "text": {
        "ja": "北海道開拓の招請に応じ、移住団（54戸）を率いて紋別郡白滝原野（現・遠軽町）へ入植する。",
        "en": "Answers the government's call for Hokkaido settlers and leads a group of 54 families to the Shirataki plain, Monbetsu District (now Engaru)."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "split": [
        {
          "src": [
            "HE",
            "HJ"
          ],
          "ja": "沿革（日英）：1912年（明治45年）に応募し、移住団を率いる。",
          "en": "History pages (JA/EN): applies and leads the settlers in 1912 (Meiji 45)."
        },
        {
          "src": [
            "ME"
          ],
          "ja": "英語版の道主略歴：1911年の項に、応募と54戸の移住をまとめて書く。",
          "en": "English Doshu biography: application and the move of 54 families both under 1911."
        },
        {
          "src": [
            "MJ"
          ],
          "ja": "日本語版の道主略歴：1911年（明治44年）に応募、1912年（明治45年）に54戸を率いて移住。",
          "en": "Japanese Doshu biography: applies in 1911 (Meiji 44); leads the 54 households in 1912 (Meiji 45)."
        }
      ],
      "note": {
        "ja": "合気会の公式ページどうしで年が分かれるため、どちらかに決めずに両方を示す。54戸は道主略歴（日英）の記載。",
        "en": "Aikikai's own pages disagree, so both years are shown. The figure of 54 families is from the Doshu biographies (JA/EN)."
      },
      "kind": "life"
    },
    {
      "id": "h1912-takeda",
      "year": 1912,
      "yearLabel": {
        "ja": "北海道時代",
        "en": "Hokkaido years"
      },
      "place": "shirataki",
      "status": "partial",
      "text": {
        "ja": "北海道で武田惣角に出会う（日本語版の沿革は遠軽の久田旅館と記す）。",
        "en": "Meets Takeda Sokaku in Hokkaido (the Japanese history page names the Hisada inn in Engaru)."
      },
      "sources": [
        "HJ",
        "MJ"
      ],
      "note": {
        "ja": "出会いは日本語版の沿革・道主略歴の北海道（明治45年）の項に書かれているが、出会った年そのものは明記されていない。旧試作の「1915年」は、今回の出典では確かめられなかった。英語版の2ページには武田惣角の記載がない。",
        "en": "The meeting appears in the Hokkaido (1912) entries of the Japanese pages, but the year of the meeting itself is not stated. The prototype's \"1915\" could not be confirmed from these sources. The two English pages do not mention Takeda."
      },
      "kind": "life"
    },
    {
      "id": "h1918-council",
      "year": 1918,
      "place": "shirataki",
      "status": "confirmed",
      "text": {
        "ja": "上湧別村の村会議員に選ばれる。",
        "en": "Elected to the Kamiyubetsu village council."
      },
      "sources": [
        "ME",
        "MJ"
      ],
      "kind": "life"
    },
    {
      "id": "h1919-deguchi",
      "year": 1919,
      "place": "ayabe",
      "status": "confirmed",
      "text": {
        "ja": "父の危篤で帰郷する途中、綾部に立ち寄り、大本の出口王仁三郎に出会う。修行に専心する。",
        "en": "Returning home because his father is critically ill, he stops in Ayabe, meets Onisaburo Deguchi of Omoto, and devotes himself to spiritual training."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "note": {
        "ja": "父の死去の年は出典で分かれる（英語版の道主略歴は1919年、日本語版の道主略歴は1920年）。",
        "en": "The year of his father's death differs (1919 in the English biography, 1920 in the Japanese one)."
      },
      "kind": "life"
    },
    {
      "id": "h1920-juku",
      "year": 1920,
      "place": "ayabe",
      "status": "confirmed",
      "text": {
        "ja": "綾部に移り、稽古場「植芝塾」を開く。",
        "en": "Moves to Ayabe and opens the training hall \"Ueshiba-juku\"."
      },
      "sources": [
        "HE",
        "HJ",
        "MJ"
      ],
      "note": {
        "ja": "英語版の道主略歴は植芝塾の開設を1919年の項に書く。",
        "en": "The English Doshu biography places the opening under 1919."
      },
      "kind": "life"
    },
    {
      "id": "h1921-kisshomaru",
      "year": 1921,
      "date": "1921-06-27",
      "place": "ayabe",
      "status": "confirmed",
      "text": {
        "ja": "三男・吉祥丸（のちの二代道主）が綾部に生まれる。",
        "en": "His third son Kisshomaru, later the second Doshu, is born in Ayabe."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "kind": "life"
    },
    {
      "id": "h1922-aiki",
      "year": 1922,
      "place": "ayabe",
      "status": "confirmed",
      "text": {
        "ja": "武道の神髄を「合気」と呼ぶようになる。",
        "en": "Adopts the word \"Aiki\" for the essence of the martial arts."
      },
      "sources": [
        "HE",
        "HJ",
        "ME"
      ],
      "note": {
        "ja": "日本語版の道主略歴は、大正末年（1926年）から「合気の道」と正式に称したと書く。",
        "en": "The Japanese Doshu biography adds that from the end of the Taisho era (1926) he formally called it \"the way of Aiki\"."
      },
      "kind": "life"
    },
    {
      "id": "h1927-tokyo",
      "year": 1927,
      "place": "shiba",
      "status": "confirmed",
      "text": {
        "ja": "一家で上京し、芝・白金猿町で指導を始める。活動の中心が東京へ移る。",
        "en": "Moves to Tokyo with his family and begins teaching in Shirogane-Sarumachi, Shiba. His main activity shifts to Tokyo."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "kind": "life"
    },
    {
      "id": "h1931-kobukan",
      "year": 1931,
      "place": "wakamatsu",
      "status": "confirmed",
      "text": {
        "ja": "現在の新宿区若松町に道場「皇武館」が開かれる。現在の本部道場の地。",
        "en": "The Kobukan Dojo opens in present-day Wakamatsu-cho, Shinjuku — the site of today's Hombu Dojo."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "note": {
        "ja": "日本語版の沿革は4月と記す。",
        "en": "The Japanese history page gives April."
      },
      "kind": "life"
    },
    {
      "id": "h1940-kobukai",
      "year": 1940,
      "place": "wakamatsu",
      "status": "confirmed",
      "text": {
        "ja": "財団法人皇武会が認可される（初代会長 竹下勇）。",
        "en": "The Kobukai Foundation is recognized (first president: Isamu Takeshita)."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "note": {
        "ja": "日付（4月30日）は日本語版の沿革だけに書かれている。",
        "en": "Only the Japanese history page gives the date (30 April)."
      },
      "kind": "org"
    },
    {
      "id": "h1941-iwama",
      "year": 1941,
      "place": "iwama",
      "status": "confirmed",
      "text": {
        "ja": "茨城県岩間に野外道場を構える計画を進める。",
        "en": "Plans an outdoor dojo in Iwama, Ibaraki."
      },
      "sources": [
        "HE",
        "HJ"
      ],
      "kind": "life"
    },
    {
      "id": "h1942-name",
      "year": 1942,
      "place": null,
      "status": "confirmed",
      "text": {
        "ja": "「合気道」の名称が採用される。吉祥丸が皇武館の道場長となる。",
        "en": "The name \"Aikido\" is adopted. Kisshomaru becomes head of the Kobukan dojo."
      },
      "sources": [
        "HE",
        "HJ"
      ],
      "note": {
        "ja": "名称の採用がどこで決まったかは出典に書かれていないため、地図には出さない。",
        "en": "The sources do not say where the name was adopted, so it is not shown on the globe."
      },
      "kind": "life"
    },
    {
      "id": "h1943-shrine",
      "year": 1943,
      "place": "iwama",
      "status": "confirmed",
      "text": {
        "ja": "岩間に合気神社を建立し、野外道場での日々の稽古を始める。",
        "en": "Builds the Aiki Shrine in Iwama and begins daily training at the outdoor dojo."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "note": {
        "ja": "神社の名は日本語版の沿革で「合気道神社」、道主略歴で「合気神社」。",
        "en": "The Japanese history page writes 合気道神社; the biography writes 合気神社."
      },
      "kind": "life"
    },
    {
      "id": "h1945-ibaraki",
      "year": 1945,
      "place": "iwama",
      "status": "confirmed",
      "text": {
        "ja": "合気神社に付属して岩間に道場ができる（のちの茨城道場、2004年に茨城支部道場）。",
        "en": "A dojo is built in Iwama next to the Aiki Shrine (later the Ibaraki Dojo; Ibaraki Branch Dojo from 2004)."
      },
      "sources": [
        "HE",
        "HJ"
      ],
      "kind": "org"
    },
    {
      "id": "h1948-aikikai",
      "year": 1948,
      "date": "1948-02-09",
      "place": "wakamatsu",
      "status": "confirmed",
      "text": {
        "ja": "財団法人合気会が認可される（皇武会から合気会へ）。吉祥丸が本部道場長となる。",
        "en": "The Aikikai Foundation is recognized (from Kobukai to Aikikai). Kisshomaru becomes head of Hombu Dojo."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "note": {
        "ja": "認可した省は出典で分かれる（英語版の沿革は厚生省、日本語版の沿革は文部省による寄附行為変更の認可）。ここでは省名を書かない。旧試作の「1947年に改組」は今回の出典で確かめられず、「未確認」に移した。",
        "en": "The sources differ on the ministry (Health and Welfare in English; Education, approving revised articles, in Japanese), so none is named. The prototype's \"reorganized in 1947\" could not be confirmed and has been moved to \"unverified\"."
      },
      "kind": "org"
    },
    {
      "id": "h1949-daily",
      "year": 1949,
      "place": "wakamatsu",
      "status": "confirmed",
      "text": {
        "ja": "本部道場で毎日の定時稽古が始まる。",
        "en": "Regular daily classes begin at Hombu Dojo."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "kind": "org"
    },
    {
      "id": "h1955-demo",
      "year": 1955,
      "place": "nihonbashi",
      "status": "confirmed",
      "text": {
        "ja": "日本橋・高島屋の屋上で、初めての一般公開の演武会が開かれる。",
        "en": "The first public demonstration is held on the roof of the Takashimaya store in Nihonbashi."
      },
      "sources": [
        "HE",
        "HJ"
      ],
      "note": {
        "ja": "道主略歴（日英）はこの年を、開祖が国内外への普及に乗り出した年として書く。",
        "en": "The Doshu biographies describe this year as when the Founder began promoting aikido in Japan and abroad."
      },
      "kind": "org"
    },
    {
      "id": "h1959-shinbun",
      "year": 1959,
      "place": null,
      "status": "confirmed",
      "text": {
        "ja": "「合気道新聞」第1号が出る（会誌「合気」を改称）。",
        "en": "First issue of the Aikido Shinbun newspaper (renamed from the bulletin \"Aiki\")."
      },
      "sources": [
        "HE",
        "HJ"
      ],
      "kind": "org"
    },
    {
      "id": "h1960-medal",
      "year": 1960,
      "place": null,
      "status": "confirmed",
      "text": {
        "ja": "紫綬褒章を受ける。",
        "en": "Receives the Medal with Purple Ribbon."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "note": {
        "ja": "日本語版の沿革は同年5月14日、山野ホールでの合気会主催の第1回演武会も記す。",
        "en": "The Japanese history page also records the first Aikikai-sponsored demonstration, 14 May at Yamano Hall."
      },
      "kind": "life"
    },
    {
      "id": "h1961-gakuren",
      "year": 1961,
      "place": null,
      "status": "confirmed",
      "text": {
        "ja": "全国学生合気道連盟が発足する（10月）。",
        "en": "The All-Japan Student Aikido Federation is founded (October)."
      },
      "sources": [
        "HE",
        "HJ",
        "MJ"
      ],
      "note": {
        "ja": "日本語版の道主略歴は、開祖がその会長に就いたと書く。旧試作の「1961年 ハワイ訪問」は今回の出典で確かめられず、「未確認」に移した。",
        "en": "The Japanese biography says the Founder became its president. The prototype's \"1961 visit to Hawaii\" could not be confirmed and has been moved to \"unverified\"."
      },
      "kind": "org"
    },
    {
      "id": "h1964-order",
      "year": 1964,
      "place": null,
      "status": "confirmed",
      "text": {
        "ja": "勲四等旭日小綬章を受ける。",
        "en": "Receives the Order of the Rising Sun, Gold Rays with Rosette."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "kind": "life"
    },
    {
      "id": "h1967-chair",
      "year": 1967,
      "place": "wakamatsu",
      "status": "confirmed",
      "text": {
        "ja": "吉祥丸が財団法人合気会の理事長となる。",
        "en": "Kisshomaru becomes chairman of the Aikikai Foundation."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "note": {
        "ja": "旧試作はこの年「盛平が理事長に就任」としていたが、出典はいずれも吉祥丸と書くため直した。",
        "en": "The prototype said the Founder became chairman this year; all sources name Kisshomaru, so it was corrected."
      },
      "kind": "org"
    },
    {
      "id": "h1968-hombu",
      "year": 1968,
      "place": "wakamatsu",
      "status": "confirmed",
      "text": {
        "ja": "本部道場の新しい建物が完成する（1月）。",
        "en": "The new Hombu Dojo building is completed (January)."
      },
      "sources": [
        "HE",
        "HJ"
      ],
      "kind": "org"
    },
    {
      "id": "h1969-death",
      "year": 1969,
      "date": "1969-04-26",
      "place": "wakamatsu",
      "status": "confirmed",
      "text": {
        "ja": "開祖・植芝盛平が86歳で亡くなる。吉祥丸が二代道主を継ぐ。",
        "en": "The Founder, Morihei Ueshiba, dies at 86. Kisshomaru becomes the second Doshu."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "note": {
        "ja": "亡くなった場所は今回の出典に書かれていない。地図の印は、その年の合気会の出来事として本部道場の地においている。",
        "en": "The place of death is not given in these sources; the marker is at Hombu Dojo as an Aikikai event of that year."
      },
      "kind": "life"
    },
    {
      "id": "h1976-iaf",
      "year": 1976,
      "place": "shinjuku",
      "status": "confirmed",
      "text": {
        "ja": "全日本合気道連盟が発足（5月）。国際合気道連盟の第1回総会が東京・京王プラザホテルで開かれ、28か国から約400名が参加する（10月）。",
        "en": "The All-Japan Aikido Federation is founded (May). The first congress of the International Aikido Federation is held at the Keio Plaza Hotel, Tokyo, with about 400 delegates from 28 countries (October)."
      },
      "sources": [
        "HE",
        "HJ"
      ],
      "note": {
        "ja": "28か国・約400名は、沿革（日英）が1976年の項に書く数（2026-11-14 確認）。",
        "en": "28 countries / about 400 people are the figures given for 1976 on the history pages (checked 2026-11-14)."
      },
      "kind": "org"
    },
    {
      "id": "h1977-budokan",
      "year": 1977,
      "place": "budokan",
      "status": "confirmed",
      "text": {
        "ja": "第15回全日本合気道演武大会が初めて日本武道館で開かれる。以後、毎年同館で開かれる。",
        "en": "The 15th All-Japan Aikido Demonstration is held at the Nippon Budokan; it has been held there every year since."
      },
      "sources": [
        "HE",
        "HJ"
      ],
      "note": {
        "ja": "英語版の沿革だけが日付（5月21日）と参加者数を書くため、数はここでは引用しない。",
        "en": "Only the English page gives the date (21 May) and a participant count, so the count is not quoted here."
      },
      "kind": "org"
    },
    {
      "id": "h1999-doshu",
      "year": 1999,
      "place": "wakamatsu",
      "status": "confirmed",
      "text": {
        "ja": "二代道主・植芝吉祥丸が1月4日に亡くなり、三代道主が継ぐ。",
        "en": "The second Doshu, Kisshomaru Ueshiba, dies on 4 January; the third Doshu succeeds him."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "note": {
        "ja": "継承の日付は出典で分かれる（英語版の沿革は1月18日、日本語版は1月5日）。現役の方の名前は載せない方針のため、三代道主の名は書かない。",
        "en": "The succession date differs (18 January in English, 5 January in Japanese). Following this site's policy of not naming living teachers, the third Doshu is not named."
      },
      "kind": "org"
    },
    {
      "id": "h2012-koeki",
      "year": 2012,
      "place": "wakamatsu",
      "status": "confirmed",
      "text": {
        "ja": "公益財団法人合気会へ移行する。",
        "en": "The Aikikai becomes a public interest incorporated foundation."
      },
      "sources": [
        "HE",
        "HJ",
        "ME",
        "MJ"
      ],
      "note": {
        "ja": "英語版の沿革は4月と記す。",
        "en": "The English history page gives April."
      },
      "kind": "org"
    }
  ],
  "figures": [
    {
      "id": "f-countries",
      "text": {
        "ja": "合気道は約140の国と地域に広まっている。",
        "en": "Aikido has spread to about 140 countries and regions."
      },
      "sources": [
        "MJ",
        "ME"
      ],
      "note": {
        "ja": "日本語版の道主挨拶は「約140の国と地域」、英語版は「140 countries」と書く。どちらも記載の時期は明示されていない（本部道場の創建から90年、という文脈）。確認日 2026-11-14。",
        "en": "The Japanese message says \"about 140 countries and regions\"; the English one says \"140 countries\". Neither states when it was written (the context is 90 years since the Hombu Dojo's founding in 1931). Checked 2026-11-14."
      }
    }
  ],
  "unverified": [
    {
      "year": 1890,
      "text": {
        "ja": "真言宗地蔵寺に通い、四書五経に親しむ。",
        "en": "Attends the Jizo-ji temple and studies the Confucian classics."
      }
    },
    {
      "year": 1893,
      "text": {
        "ja": "宝万寺で参禅する。",
        "en": "Practises Zen at Homan-ji temple."
      }
    },
    {
      "year": 1897,
      "text": {
        "ja": "珠算の講師となる／田辺中学に入学し病気で退学する。",
        "en": "Becomes an abacus instructor; enters and leaves Tanabe Middle School due to illness."
      }
    },
    {
      "year": 1901,
      "text": {
        "ja": "上京し、起倒流を学ぶ。",
        "en": "Goes to Tokyo and studies Kito-ryu."
      }
    },
    {
      "year": 1902,
      "text": {
        "ja": "結婚する。",
        "en": "Marries."
      }
    },
    {
      "year": 1903,
      "text": {
        "ja": "和歌山の連隊に入隊する。",
        "en": "Enlists in a Wakayama regiment."
      }
    },
    {
      "year": 1915,
      "text": {
        "ja": "遠軽で武田惣角に出会う（出会いそのものは合気会の日本語ページにあるが、1915年という年は確かめられない）。",
        "en": "Meets Takeda Sokaku in Engaru (the meeting is on Aikikai's Japanese pages, but the year 1915 is not)."
      }
    },
    {
      "year": 1924,
      "text": {
        "ja": "出口王仁三郎に随行してモンゴルへ渡る。",
        "en": "Accompanies Onisaburo Deguchi to Mongolia."
      }
    },
    {
      "year": 1938,
      "text": {
        "ja": "皇族の皇武館御台臨と演武の御高覧。",
        "en": "A member of the imperial family visits the Kobukan and watches a demonstration."
      }
    },
    {
      "year": 1947,
      "text": {
        "ja": "皇武会を改組・再編成し、合気会とする。",
        "en": "The Kobukai is reorganized as the Aikikai."
      }
    },
    {
      "year": 1961,
      "text": {
        "ja": "ハワイに招かれて渡り、演武を行う。",
        "en": "Invited to Hawaii, where he gives demonstrations."
      }
    }
  ]
};
