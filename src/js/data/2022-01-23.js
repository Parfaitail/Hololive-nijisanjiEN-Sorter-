// dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2022-01-23";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter Hololive",
    key: "generation",
    tooltip: "Check this to restrict to certain generations.",
    checked: false,
    sub: [
        { name: "Hololive 0th gen", key: "gen0" },
        { name: "Hololive 1st gen", key: "gen1" },
        { name: "Hololive 2nd gen", key: "gen2" },
        { name: "Hololive 3rd gen", key: "gen3" },
        { name: "Hololive 4th gen", key: "gen4" },
        { name: "Hololive 5th gen", key: "gen5" },
        { name: "Hololive 6th gen", key: "gen6" },
        { name: "Hololive GAMERS", key: "gamers" },
        { name: "Hololive Indonesia", key: "id" },
        { name: "Hololive English", key: "en" },
        { name: "Holostars", key: "stars" },
        { name: "Nijisanji EN", key: "Niji_EN" },
        { name: "Nijisanji JP", key: "Nijisanji_jp" },
        { name: "Nijisanji ID", key: "Nijisanji_id" },
        { name: "Nijisanji KR", key: "Nijisanji_kr" },
        { name: "Nijisanji IN", key: "Nijisanji_in" },
        { name: "VShojo agency", key: "_VShojo"},
        { name: "VOMS", key: "_VOMS"},
        { name: "Independent", key: "Indiv"}
    ]
  },
  {
    name: "Remove Non-JP Hololive talents",
    key: "notjphololive",
    checked: false,
  },
  {
    name: "Remove male Hololive talents",
    key: "notgirl",
  },
  {
    name: "Remove Former talents",
    key: "former",
    tooltip: "Check this to remove all retired hololive talents.",
    checked: true
  },
  { 
    name: "Remove Nijisanji male talents",  
    key: "boy",
    tooltip: "Check this to remove nijisanji male talents.", 
    checked: true
  },
  {        
    name: "Remove nijisanji female talents", 
    key: "girl",
    tooltip: "Check this to remove nijisanji female talents.",
    checked: false
  },
  {        
    name: "Remove retired nijisanji talents",
    key: "retired",
    tooltip: "Check this to remove graduated/retired talents.",
    checked: true
  }
];

dataSet[dataSetVersion].characterData = 
[
    {
        name: "Millie Parfait",
        img: "DpyKCL5.png",
        opts: {
            generation: ["Niji_EN"],
            girl: true
          }
    },
    {
        name: "Enna Aloutte",
        img: "i3lHjRe.png",
        opts: {
            generation: ["Niji_EN"],
            girl: true
          }
    },
    {
        name: "Reimu Endou",
        img: "BenMjhQ.png",
        opts: {
            generation: ["Niji_EN"],
            girl: true
          }
    },
    {
        name: "Nina Kosaka",
        img: "I9konYN.png",
        opts: {
            generation: ["Niji_EN"],
            girl: true
          }
    },
    {
        name: "Petra Gurin",
        img: "C5nCbZP.png",
        opts: {
            generation: ["Niji_EN"],
            girl: true
          }
    },
    {
        name: "Selen Tatsuki",
        img: "GoeBSxy.png",
        opts: {
            generation: ["Niji_EN"],
            girl: true
          }
    },
    {
        name: "Rosemi Lovelock",
        img: "vBnj5vK.png",
        opts: {
            generation: ["Niji_EN"],
            girl: true
          }
    },
    {
        name: "Pomu Rainpuff",
        img: "Ry39iAs.png",
        opts: {
            generation: ["Niji_EN"],
            girl: true
          }
    },
    {
        name: "Finana Ryugu",
        img: "mAukdHK.png",
        opts: {
            generation: ["Niji_EN"],
            girl: true
          }
    },
    {
        name: "Elira Pendora",
        img: "KDCsAjz.png",
        opts: {
            generation: ["Niji_EN"],
            girl: true
          }
    },
    {
        name: "Tokino Sora",
        img: "3H7gifT.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Roboco",
        img: "EDNnD29.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Sakura Miko",
        img: "7zoSqIc.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Hoshimachi Suisei",
        img: "WLnC9WQ.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "AZKi",
        img: "nlVeJB7.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Akai Haato",
        img: "fbowqMT.png",
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Yozora Mel",
        img: "5N2CwKX.png",
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Natsuiro Matsuri",
        img: "l4ZtpaK.png",
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Aki Rosenthal",
        img: "1pmXWMt.png",
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Shirakami Fubuki",
        img: "zqMZjIJ.png",
        opts: {
            generation: ["gen1", "gamers"],
        }
    },
    {
        name: "Oozora Subaru",
        img: "AZQqT3h.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Yuzuki Choco",
        img: "hKxhzCe.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Murasaki Shion",
        img: "2lWPCN2.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Nakiri Ayame",
        img: "NVCJBbm.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Minato Aqua",
        img: "fVz1URC.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Ookami Mio",
        img: "TIKJssv.png",
        opts: {
            generation: ["gamers"],
        }
    },
    {
        name: "Nekomata Okayu",
        img: "incgd6s.png",
        opts: {
            generation: ["gamers"],
        }
    },
    {
        name: "Inugami Korone",
        img: "2XwHImi.png",
        opts: {
            generation: ["gamers"],
        }
    },
    {
        name: "Usada Pekora",
        img: "6cAiPq6.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Uruha Rushia",
        img: "raA9MBc.png",
        opts: {
            generation: ["gen3"],
            former: true
        }
    },
    {
        name: "Shiranui Flare",
        img: "asPVuIv.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Shirogane Noel",
        img: "GCbeUYn.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Houshou Marine",
        img: "lJt7spk.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Tsunomaki Watame",
        img: "2ORKRvl.png",
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Tokoyami Towa",
        img: "IlCFGwT.png",
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Kiryu Coco",
        img: "QGMmKn9.png",
        opts: {
            generation: ["gen4"],
            former: true
        }
    },
    {
        name: "Amane Kanata",
        img: "Su2pbKw.png",
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Himemori Luna",
        img: "ePe6hTj.png",
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Yukihana Lamy",
        img: "yUdexNX.png",
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Momosuzu Nene",
        img: "0h9zYfy.png",
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Shishiro Botan",
        img: "BB5bqyV.png",
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Omaru Polka",
        img: "1A4x9af.png",
        opts: {
            generation: ["gen5"],
        }
    },
    {
      name: "La+ Darknesss",
      img: "nT50wsZ.png",
      opts: {
          generation: ["gen6"],
      }
    },
    {
      name: "Takane Lui",
      img: "e8B9NPy.png",
      opts: {
          generation: ["gen6"],
      }
    },
    {
      name: "Hakui Koyori",
      img: "pHWztbK.png",
      opts: {
          generation: ["gen6"],
      }
    },
    {
      name: "Sakamata Chloe",
      img: "dNA527v.png",
      opts: {
          generation: ["gen6"],
      }
    },
    {
      name: "Kazama Iroha",
      img: "XYwguGC.png",
      opts: {
          generation: ["gen6"],
      }
    },
    {
        name: "Ayunda Risu",
        img: "nLGOcz9.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Moona Hoshinova",
        img: "GTCxy5D.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Airani Iofifteen",
        img: "pntiWAO.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Kureiji Ollie",
        img: "gWIXlqR.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Anya Melfissa",
        img: "pCunEXT.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Pavolia Reine",
        img: "zv54suf.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Vestia Zeta",
        img: "qSYRPmv.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Kobo Kanaeru",
        img: "1ghCU52.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Kaela Kovalskia",
        img: "zJ1cFwr.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Mori Calliope",
        img: "ji63Ua3.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Takanashi Kiara",
        img: "D7vHpV8.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Ninomae Ina'nis",
        img: "WZ0RHO2.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Gawr Gura",
        img: "ipnOFe3.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Watson Amelia",
        img: "T0llFtP.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "IRyS",
        img: "z8MjlLC.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Tsukumo Sana",
        img: "W35ga3b.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Ceres Fauna",
        img: "GbpUvSU.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Ouro Kronii",
        img: "duN7VIo.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Nanashi Mumei",
        img: "XuADM2e.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Hakos Baelz",
        img: "Qtnjnfn.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Hanasaki Miyabi",
        img: "NCHVt7z.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kagami Kira",
        img: "50l4w0z.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kanade Izuru",
        img: "UmInuig.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Arurandeisu",
        img: "kWmVHOO.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Rikka",
        img: "M9kfmcr.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Astel Leda",
        img: "S19UF3y.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kishido Temma",
        img: "lxO3kbH.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Yukoku Roberu",
        img: "HnqQqWD.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kageyama Shien",
        img: "sWh33lj.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Aragami Oga",
        img: "dAYlOiX.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Hitomi Chris",
        img: "emS42sJ.png",
        opts: {
            generation: ["gen1"],
            former: true,
        }
    },
    {
        name: "Mano Aloe",
        img: "LXpkF3F.png",
        opts: {
            generation: ["gen5"],
            former: true
        }
    },
    {
        name: "Yakushiji Suzaku",
        img: "V6onAWG.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true,
        }
    },
    {
        name: "Tsukishita Kaoru",
        img: "GG5As7j.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true,
        },

    },
    //NIJISANJI SECTION
    {
        name: "Tsukino Mito",
        img: "KWgYIBI.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
    },
      {
        name: "Yuki Chihiro",
        img: "Xcb81tu.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Elu",
        img: "O5OjlwD.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Higuchi Kaede",
        img: "lekjc0H.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Shizuka Rin",
        img: "NRN3GaM.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Shibuya Hajime",
        img: "ytmMtTQ.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Suzuya Aki",
        img: "HGUH9IS.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Moira",
        img: "GHw0eWY.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Mononobe Alice",
        img: "lA1mmvk.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Fushimi Gaku",
        img: "XAIajUf.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Ienaga Mugi",
        img: "qiFbdZA.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Morinaka Kazaki",
        img: "P6WtJA3.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Suzuka Utako",
        img: "wlJgtuq.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Ushimi Ichigo",
        img: "lz4JCHu.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Yuuhi Riri",
        img: "4Km7J2W.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Kenmochi Toya",
        img: "08PHSmg.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Gilzaren III",
        img: "eWwQ19s.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Fumino Tamaki",
        img: "xEO8yuc.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Kanae",
        img: "jmIgSRm.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Akabane Youko",
        img: "rymEqEa.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Sasaki Saku",
        img: "meGIDKt.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Yamiyono Moruru",
        img: "IQVHPrl.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Honma Himawari",
        img: "8HKx10I.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Makaino Ririmu",
        img: "gcc0GZ1.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Kuzuha",
        img: "U5fcrf6.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Setsuna",
        img: "fVix3F0.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Shiina Yuika",
        img: "iyAo2KZ.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Dola",
        img: "5LwJADr.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Hanabatake Chaika",
        img: "IvrkYCn.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Hassaku Yuzu",
        img: "v1gWlyK.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Izumo Kasumi",
        img: "pC2bGPG.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Azuchi Momo",
        img: "ZYYfLyE.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Nakao Azuma",
        img: "60g97ay.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true,
          retired: true
        }
      },
      {
        name: "Naruto Kogane",
        img: "OEpkB9E.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Ryushen",
        img: "BG5dxEm.png",
        opts: {
          generation: ["Nijisanji_jp"],
        }
      },
      {
        name: "Sister Claire",
        img: "4MFYKhy.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Suzuki Masaru",
        img: "3zkKfkz.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Todoroki Kyoko",
        img: "2L1lEwr.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Umiyashano Kami",
        img: "5hCj2c7.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Uzuki Kou",
        img: "ODV7JU2.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Yashiro Kizuku",
        img: "m1cAXCq.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Kanda Shoichi",
        img: "6DnLScz.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Amemori Sayo",
        img: "FrZIx77.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Takamiya Rion",
        img: "Pk2RI1r.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Asuka Hina",
        img: "1xbvwi4.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Maimoto Keisuke",
        img: "bMXOpxE.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Debidebi Debiru",
        img: "fS8rzqK.png",
        opts: {
          generation: ["Nijisanji_jp"],
        }
      },
      {
        name: "Rindou Mikoto",
        img: "N5m3P4T.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Joe Rikiichi",
        img: "0hqNu2R.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Machita Chima",
        img: "yCYseru.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Tsukimi Shizuku",
        img: "xbJYhxe.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true, 
          retired: true
        }
      },
      {
        name: "Sakura Ritsuki",
        img: "dnvVrNG.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Achikita Chinami",
        img: "dTdm1Pr.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Belmond Banderas",
        img: "8ImxShR.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Yaguruma Rine",
        img: "4gSgzbo.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Yumeoi Kakeru",
        img: "3zICmGc.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Kuroi Shiba",
        img: "FkwiyyM.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Harusaki Air",
        img: "1NHzHmB.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Naruse Naru",
        img: "kyB4ljo.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Warabeda Meiji",
        img: "Ak1TsSv.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Kudo Chitose",
        img: "j3J0PNa.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Gundou Mirei",
        img: "l1WcKEE.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Yuzuki Roa",
        img: "AZJhCTv.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Onomachi Haruka",
        img: "5EPLPNa.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Kataribe Tsumugu",
        img: "h0xKWQb.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Seto Miyako",
        img: "g2iwbNd.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Shindo Raito",
        img: "p4vnrLC.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true,
          retired: true
        }
      },
      {
        name: "Otogibara Era",
        img: "YAMl7Yb.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Inui Toko",
        img: "tR7OgzW.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Ange Katrina",
        img: "V5Srh3F.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Lize Helesta",
        img: "gRHlw75.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Saegusa Akina",
        img: "VleAmXA.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Aizono Manami",
        img: "kzZ71CJ.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Suzuhara Lulu",
        img: "7VbaHrV.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Yukishiro Mahiro",
        img: "IPfUP41.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Ex Albio",
        img: "getaVcN.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Levi Elipha",
        img: "fYyX65l.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Hayama Marin",
        img: "FxPobxF.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Nui Sociere",
        img: "J5Buoam.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Hakase Fuyuki",
        img: "krWHEh9.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Kagami Hayato",
        img: "RPwONpc.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Yorumi Rena",
        img: "peH2ux5.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Mayuzumi Kai",
        img: "WLuAyxi.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Ars Almal",
        img: "krRdLoo.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Aiba Uiha",
        img: "ZpPlfEl.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Amamiya Kokoro",
        img: "zk2Lnip.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Eli Conifer",
        img: "hfT9tT8.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Ratna Petite",
        img: "HOPsjdM.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Hayase Sou",
        img: "5XoQ7NF.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Sukoya Kana",
        img: "V8FiZlt.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Shellin Burgundy",
        img: "O4yJhcd.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Fumi",
        img: "QWROMHY.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Hoshikawa Sara",
        img: "be9WXBG.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Yamagami Karuta",
        img: "qq8lIpw.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Matsukai Mao",
        img: "6gyZF3m.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Emma★August",
        img: "81SmEiY.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Luis Cammy",
        img: "3Av8SH9.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Fuwa Minato",
        img: "rPCfCex.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Shirayuki Tomoe",
        img: "2ohiJ8B.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Gwelu Os Gar",
        img: "paIy8aR.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Mashiro",
        img: "XsIvVaj.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Naraka",
        img: "F79IS7o.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Kurusu Natsume",
        img: "QXOALC0.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Furen E Lustario",
        img: "aMhn00x.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Ibrahim",
        img: "tIGI1Ml.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Melissa Kinrenka",
        img: "Q578oYo.png",
        opts: {
          generation: ["Nijisanji_jp"],
        }
      },
      {
        name: "Nagao Kei",
        img: "wVTsocX.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Genzuki Tojiro",
        img: "PKdceUr.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Kaida Haru",
        img: "xBuWJ6a.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Kingyozaka Meiro",
        img: "5ibXgHF.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Sorahoshi Kirame",
        img: "hP0twcf.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Asahina Akane",
        img: "LHQ01rF.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Suo Sango",
        img: "ml6HD62.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Todo Kohaku",
        img: "7av9CcZ.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Kitakoji Hisui",
        img: "eex2lZd.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Nishizono Chigusa",
        img: "eVbjFQ7.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Lain Paterson",
        img: "VFyi7YU.png",
        opts: {
          generation: ["Nijisanji_jp"],
          girl: true
        }
      },
      {
        name: "Axia Krone",
        img: "5dZDAa0.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Lauren Iroas",
        img: "VIlXtL2.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Leos Vincent",
        img: "iOYxLTP.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Oliver Evans",
        img: "6o5YV3M.png",
        opts: {
          generation: ["Nijisanji_jp"],
          boy: true
        }
      },
      {
        name: "Hana Macchia",
        img: "jXpmMHw.png",
        opts: {
          generation: ["Nijisanji_id"],
          girl: true
        }
      },
      {
        name: "ZEA Cornelia",
        img: "DHJIjqz.png",
        opts: {
          generation: ["Nijisanji_id"],
          girl: true
        }
      },
      {
        name: "Taka Radjiman",
        img: "36KSyYK.png",
        opts: {
          generation: ["Nijisanji_id"],
          boy: true
        }
      },
      {
        name: "Rai Galilei",
        img: "Nn3rMiJ.png",
        opts: {
          generation: ["Nijisanji_id"],
          boy: true
        }
      },
      {
        name: "Riksa Dhirendra",
        img: "bkGa5pw.png",
        opts: {
          generation: ["Nijisanji_id"],
          boy: true
        }
      },
      {
        name: "Amicia Michella",
        img: "LUSj9hf.png",
        opts: {
          generation: ["Nijisanji_id"],
          girl: true
        }
      },
      {
        name: "Miyu Ottavia",
        img: "53QM1Hw.png",
        opts: {
          generation: ["Nijisanji_id"],
          girl: true
        }
      },
      {
        name: "Azura Cecillia",
        img: "griG50O.png",
        opts: {
          generation: ["Nijisanji_id"],
          girl: true
        }
      },
      {
        name: "Layla Alstroemeria",
        img: "iT1mauI.png",
        opts: {
          generation: ["Nijisanji_id"],
          girl: true
        }
      },
      {
        name: "Nara Haramaung",
        img: "Gl4qsa5.png",
        opts: {
          generation: ["Nijisanji_id"],
          girl: true
        }
      },
      {
        name: "Etna Crimson",
        img: "I8Y5Q2j.png",
        opts: {
          generation: ["Nijisanji_id"],
          girl: true
        }
      },
      {
        name: "Bonnivier Pranaja",
        img: "QyDVOVc.png",
        opts: {
          generation: ["Nijisanji_id"],
          boy: true
        }
      },
      {
        name: "Siska Leontyne",
        img: "ZkeYd3V.png",
        opts: {
          generation: ["Nijisanji_id"],
          girl: true
        }
      },
      {
        name: "Nagisa Arcinia",
        img: "5lRw2u2.png",
        opts: {
          generation: ["Nijisanji_id"],
          girl: true
        }
      },
      {
        name: "Derem Kado",
        img: "trIu4Dj.png",
        opts: {
          generation: ["Nijisanji_id"],
          girl: true
        }
      },
      {
        name: "Reza Avanluna",
        img: "3UvLz85.png",
        opts: {
          generation: ["Nijisanji_id"],
          boy: true
        }
      },
      {
        name: "Hyona Elatiora",
        img: "IuUWZ1F.png",
        opts: {
          generation: ["Nijisanji_id"],
          girl: true
        }
      },
      {
        name: "Xia Ekavira",
        img: "WKZ8W78.png",
        opts: {
          generation: ["Nijisanji_id"],
          girl: true
        }
      },
      {
        name: "Mika Melatika",
        img: "SgE3SyL.png",
        opts: {
          generation: ["Nijisanji_id"],
          girl: true
        }
      },
      {
        name: "Wiffy",
        img: "ur6A54P.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Yu Ruri",
        img: "Q4STNzG.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Shin Yuya",
        img: "faLCFGv.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Min Suha",
        img: "ojHBiCM.png",
        opts: {
          generation: ["Nijisanji_kr"],
          boy: true
        }
      },
      {
        name: "Moarin",
        img: "LRWnFol.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Gaon",
        img: "P2jgAun.png",
        opts: {
          generation: ["Nijisanji_kr"],
          boy: true
        }
      },
      {
        name: "Kaen",
        img: "EXCB9W3.png",
        opts: {
          generation: ["Nijisanji_kr"],
          boy: true,
          retired: true
        }
      },
      {
        name: "Lorou",
        img: "zxNjN1M.png",
        opts: {
          generation: ["Nijisanji_kr"],
          boy: true,
          retired: true
        }
      },
      {
        name: "Han Chiho",
        img: "nPfoeBD.png",
        opts: {
          generation: ["Nijisanji_kr"],
          boy: true
        }
      },
      {
        name: "Hakuren",
        img: "iBBhLxo.png",
        opts: {
          generation: ["Nijisanji_kr"],
          boy: true,
          retired: true
        }
      },
      {
        name: "Lee Siu",
        img: "n7EIJX6.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true
        }
      },
      {
        name: "So Nagi",
        img: "wJ5j6d4.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true
        }
      },
      {
        name: "Chae Ara",
        img: "BeHNy8g.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true
        }
      },
      {
        name: "Akira Ray",
        img: "1yTvxnb.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true
        }
      },
      {
        name: "Lee Roha",
        img: "Qv2vW3v.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true
        }
      },
      {
        name: "Nun Bora",
        img: "JaYhSXm.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true
        }
      },
      {
        name: "Oh Jiyu",
        img: "jo2rUSE.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true
        }
      },
      {
        name: "Shin Kiru",
        img: "LjNw8i7.png",
        opts: {
          generation: ["Nijisanji_kr"],
          boy: true
        }
      },
      {
        name: "Yang Nari",
        img: "5gUe7lo.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true
        }
      },
      {
        name: "Ryu Hari",
        img: "KIW9F9Y.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true
        }
      },
      {
        name: "Seffyna",
        img: "vwD3gSZ.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true
        }
      },
      {
        name: "Ban Hada",
        img: "9lDtyAm.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true
        }
      },
      {
        name: "Song Mia",
        img: "WOYCxLr.png",
        opts: {
          generation: ["Nijisanji_kr"],
          girl: true
        }
      },
      {
        name: "Luca Kaneshiro",
        img: "nwYZmv9.png",
        opts: {
          generation: ["Niji_EN"],
          boy: true
        }
      },
      {
        name: "Shu Yamino",
        img: "VEp6IBH.png",
        opts: {
          generation: ["Niji_EN"],
          boy: true
        }
      },
      {
        name: "Ike Eveland",
        img: "K71FMrJ.png",
        opts: {
          generation: ["Niji_EN"],
          boy: true
        }
      },
      {
        name: "Mysta Rias",
        img: "95rZJQV.png",
        opts: {
          generation: ["Niji_EN"],
          boy: true
        }
      },
      {
        name: "Vox Akuma",
        img: "Rj5S2uG.png",
        opts: {
          generation: ["Niji_EN"],
          boy: true
        }
      },
      {
        name: "Yugo Asuma",
        img: "bKf2Lc0.png",
        opts: {
          generation: ["Niji_EN"],
          boy: true
        }
      },
      {
        name: "Uki Violeta",
        img: "A73gLu1.png",
        opts: {
          generation: ["Niji_EN"],
          boy: true
        }
      },
      {
        name: "Sonny Brisko",
        img: "9yyTs3P.png",
        opts: {
          generation: ["Niji_EN"],
          boy: true
        }
      },
      {
        name: "Fulgur Ovid",
        img: "KD1tdu6.png",
        opts: {
          generation: ["Niji_EN"],
          boy: true
        }
      },
      {
        name: "Alban Knox",
        img: "QrgP6R5.png",
        opts: {
          generation: ["Niji_EN"],
          boy: true
        }
      },
      {
        name: "Aadya",
        img: "wR9tLtl.png",
        opts: {
          generation: ["Nijisanji_in"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Noor",
        img: "UXYSLEv.png",
        opts: {
          generation: ["Nijisanji_in"],
          girl: true,
          retired: true
        }
      },
      {
        name: "Vihaan",
        img: "F7PE1tm.png",
        opts: {
          generation: ["Nijisanji_in"],
          boy: true,
          retired: true
        }
      },
      //vshoujo section
      {
        name: "Ironmouse",
        img: "Vl2l7RF.png",
        opts: {
          generation: ["_VShojo"]
        }
      },
      {
        name: "Hime Hajime",
        img: "5mfyy51.png",
        opts: {
          generation: ["_VShojo"]
        }
      },
      {
        name: "Projekt Melody",
        img: "MQ5ciiD.png",
        opts: {
          generation: ["_VShojo"]
        }
      },
      {
        name: "Froot",
        img: "PM1JpYe.png",
        opts: {
          generation: ["_VShojo"]
        }
      },
      {
        name: "Nyanners",
        img: "G93u5cb.png",
        opts: {
          generation: ["_VShojo"]
        }
      },
      {
        name: "Silvervale",
        img: "vRuoTAr.png",
        opts: {
          generation: ["_VShojo"]
        }
      },
      {
        name: "Veibae",
        img: "InJ38am.png",
        opts: {
          generation: ["_VShojo"]
        }
      },
      {
        name: "Zentreya",
        img: "nqMGP8W.png",
        opts: {
          generation: ["_VShojo"]
        }
      },
      //VOMS Section
      {
        name: "Amano Pikamee",
        img: "4PYKbr5.png",
        opts:{
          generation: ["_VOMS"]
        }
      },
      {
        name: "Hikasa Tomoshika",
        img: "a07Mfbb.png",
        opts:{
          generation: ["_VOMS"]
        }
      },      
      {
        name: "Haneuzu Miuneru",
        img: "s2tom6k.png",
        opts:{
          generation: ["_VOMS"]
        }
      },      
      {
        name: "Daimonji Ryugon",
        img: "7jRnzVV.png",
        opts:{
          generation: ["_VOMS"]
        }
      },
      //Independent 
      {
        name: "Amatsuka Uto",
        img: "c2QtsWB.png",
        opts:{
          generation: ["Indiv"]
        }
      }
];
