var a1={ // Makes an object
  title: "Historic Prediction.", // Defines the title of the object.
  msgLength: "78", // Defines the msgLength of the object.
  author: "C172PILOT", // Defines the author of the object.
  message: "where is this happening? across the river in *jersey. everything is legal in *new *jersey. *hamilton", // Defines the message of the object.
  encryption: "RILJL MK NIMK IXGGLCMCT? XZJFKK NIL JMQLJ MC *ELJKLV. LQLJVNIMCT MK ALTXA MC *CLR *ELJKLV. *IXBMANFC" // Defines the encryption of the object.
};
var a2={
  title: "How to deal with death.",
  keyType: "K2",
  msgLength: "88",
  author: "LUZAICH",
  message: "it\'s not a big deal. people have killed me before. i always turn out alright, you just need to kill them right back.",
  encryption: "VC'B UNC J KVR OPJY. SPNSYP TJEP XVYYPO ZP KPQNLP. V JYFJHB CDLU NDC JYLVRTC, HND WDBC UPPO CN XVYY CYPZ LVRTC KJMX."
};
var a3={
  title: "Bon appetit.",
  keyType: "K1",
  msgLength: "88",
  author: "CHEESECAKE",
  message: "when i was nine years old my plan was to run away and live off of one-dollar rice bowls from asian restaurants.",
  encryption: "TPWF A TZL FAFW XWZKL HDO EX IDZF TZL MH KQF ZTZX ZFO DASW HNN HN HFW-OHDDZK KARW GHTDL NKHE ZLAZF KWLMZQKZFML."
};
var a4={
  title: "Odd friends.",
  keyType: "K1",
  msgLength: "89",
  author: "LITERALLYLITERARY",
  message: "are you implying... oh this is funny. are you implying that the chalkboard thinks your relationship is special?",
  encryption: "JIP GUB VZNYGVLR... US ASVC VC QBLLG. JIP GUB VZNYGVLR ASJA ASP MSJYXKUJO ASVLXC GUBI IPYJAVULCSVN VC CNPMVJY?"
};
var a5={
  title: "Strange ability.",
  keyType: "K2",
  msgLength: "78",
  author: "WORD WIZARD",
  message: "i mean, he\'s a little intimidating, but it's more of a \"you look like you could read minds if you tried.\"",
  encryption: "Q WMIX, PM\'R I VQYYVM QXYQWQLIYQXO, JBY QY\'R WZAM ZN I \"GZB VZZU VQUM GZB KZBVL AMIL WQXLR QN GZB YAQML.\""
};
var a6={
  title: "Unfair Advantage",
  keyType: "K2",
  msgLength: "76",
  author: "LUZAICH",
  message: "in a race between *achilles and a tortoise, if the tortoise has a head start, it always wins. *zeno",
  encryption: "DE U IUWZ VZKNZZE *UWRDBBZJ UEY U KFIKFDJZ, DP KRZ KFIKFDJZ RUJ U RZUY JKUIK, DK UBNUSJ NDEJ. *TZEF"
};
var a7={
  title: "Why bother?",
  keyType: "K2",
  msgLength: "76",
  author: "HAHAYES",
  message: "to live is to suffer, to survive is to find some meaning in the suffering. *friedrich *nietzsche",
  encryption: "QG DATL AN QG NROOLM, QG NRMTATL AN QG OAFI NGEL ELZFAFS AF QYL NROOLMAFS. *OMALIMAHY *FALQXNHYL"
};
var a8={
  title: "Thoughts All Around.",
  keyType: "K2",
  msgLength: "84",
  author: "LIVING GUILDPACT",
  message: "the most disappointing things about learning telepathy is finding out how boring people really are.",
  encryption: "GYV DEFG UZFQAAEZRGZRX GYZRXF RQSHG NVQCRZRX GVNVAQGYO ZF WZRUZRX EHG YEK SECZRK AVAENV CVQNNO QCV."
};
var a9={
  title: "Such Animals.",
  keyType: "K2",
  msgLength: "88",
  author: "SOROZO",
  message: "what's stopping a were-swarm of two-hundred ten half-black-dragon skelewhales from biting a squirrel?",
  encryption: "PSFH'T THYCCULQ F PKNK-TPFNZ YM HPY-SRLJNKJ HKL SFXM-GXFIW-JNFQYL T WKXKPSFXKT MNYZ GUHULQ F TARUNNKX?"
};
var a10={
  title: "How You Live Your Life.",
  keyType: "K2",
  msgLength: "99",
  author: "LUZAICH",
  message: "a man either lives life as it happens to him, meets it head-on and licks it, or he turns his back on it and starts to wither away.",
  encryption: "L TLU KPYOKF SPAKX SPMK LX PY OLVVKUX YH OPT, TKKYX PY OKLE-HU LUE SPJRX PY, HF OK YZFUX OPX GLJR HU PY LUE XYLFYX YH BPYOKF LBLI."
};

var aristocrats=[ // An array with all of the objects.
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10
];

var letters=[ // An array with all of the letters of the alphabet. This makes things a lot nicer than using the ASCII system.
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var points=0; // Sets points to be 0.
var startTenMin=1; // Sets the starting 10 minutes to be 1.
var startMin=5; // Sets the starting minutes to be 5.
var startTenSec=0; // Sets the starting 10 seconds to be 0.
var startSec=0; // Sets the starting seconds to be 0.
var currentTenMin; // Makes a variable.
var currentMin; // Makes a variable.
var currentTenSec; // Makes a variable.
var currentSec; // Makes a variable.
var countdown; // Makes a variable.

var msgArray=[]; // Makes an array.
var dynamicArray=[]; // Makes an array.
var invalidCharacters=[ // Makes an array of non-letter charactres that appear in the cryptograms.
  ".",
  ",",
  "!",
  "?",
  "\"",
  "*",
  "\'",
  " ",
  "-"
];