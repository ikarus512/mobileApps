"use strict";
var a = a || {};

a.data_hindi_oldfont = {};
a.data_hindi_oldfont_init = function() {
  for(var topic in a.data_hindi) {
    a.data_hindi_oldfont[topic] = {};
    for(var key in a.data_hindi[topic]) {
      a.data_hindi_oldfont[topic][key] = a.data_hindi[topic][key];
    }
    a.data_hindi_oldfont[topic]["font-family"] = "myFontDevanagariUttara";
  }
};
a.data_hindi_oldfont_init();

//a.learnData.add(a.data_hindi_oldfont);
