"use strict";
var a = a || {};

a.dataLanguagesHindi.forEach(function(learnTopicData) {
    var newData = {
        en: learnTopicData.en.replace(RegExp("languages/hindi हिंदी/"),"languages/hindi हिंदी (old font)/"),
        ru: learnTopicData.ru.replace(RegExp("языки    /хинди हिंदी/"),"языки    /хинди हिंदी (старый шрифт)/"),
        "font-family": "myFontDevanagariUttara",
        "font-size": learnTopicData["font-size"],
        terms: learnTopicData.terms, // reference, not a copy
    };
    a.learnData.add(newData);
});
