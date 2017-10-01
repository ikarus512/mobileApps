"use strict";
var a = a || {};

a.data={
  // https://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers
  //1090 Mandarin Chinese
  // 385 Arabic
  // 380 Hindi
  // 250 Malay (Indonesian, Malaisian)
  // 208 Bengali
  // 162 Urdu
  // 130 Japanese
  // 110 Farsi (Persian, Iran)
  //  98 Swahili
  //  71 Turkish
  //  79 Tamil (India, Sri Lanka, Singapore)
  //  78 Vietnamese
};

a.data["arabian العربية"] = a.data_arabian;
a.data["chinese 普通話中文"] = a.data_chinese;
a.data["guitar " + String.fromCharCode(0x2669,0x266A,0x266B,0x266C)] = a.data_guitar;
a.data["hindi हिंदी"] = a.data_hindi;
a.data["hindi हिंदी (old font)"] = a.data_hindi_oldfont;
a.data["music (west) " + String.fromCharCode(0x2669,0x266A,0x266B,0x266C)] = a.data_music;
a.data["sinhala සිංහල"] = a.data_sinhala;
a.data["swahili"] =  a.data_swahili;
a.data["turkish Türk"] = a.data_turkish;
a.data["(example)"] = a.data_example;
