"use strict";
var a = a || {};

a.learnData.add({
    //"font-size": "1.1em",
    en: "languages/arabian العربية /alphabet/letters",
    ru: "языки    /арабский العربية/алфавит /буквы",
    "font-size": "48px", //"3em",
    terms: [
        {term:"ا ااا", transcription:"[a]", translation:{en:"alif", ru:"алиф"}},
        {term:"ب ببب", transcription:"[b]", translation:{en:"ba", ru:"ба"}},
        {term:"ت تتت", transcription:"[t]", translation:{en:"ta", ru:"та"}},
        {term:"ث ثثث", transcription:"[θ]", translation:{en:"tha", ru:"tha"}},
        {term:"ج ججج", transcription:"[ʤ]", translation:{en:"dgeem", ru:"джим"}},
        {term:"ح ححح", transcription:"[ɦ]", translation:{en:"ha", ru:"хьа"}},
        {term:"خ خخخ", transcription:"[х ḥ]", translation:{en:"kha", ru:"хха"}},
        {term:"د ددد", transcription:"[d]", translation:{en:"dal", ru:"даль"}},
        {term:"ذ ذذذ", transcription:"[ð]", translation:{en:"dhal", ru:"дхаль"}},
        {term:"ر ررر", transcription:"[r]", translation:{en:"ra", ru:"ра"}},
        {term:"ز ززز", transcription:"[z]", translation:{en:"zay", ru:"зай"}},
        {term:"س سسس", transcription:"[s]", translation:{en:"sin", ru:"син"}},
        {term:"ش ششش", transcription:"[ʃ]", translation:{en:"shin", ru:"шин"}},
        {term:"ص صصص", transcription:"[ṣ]", translation:{en:"ṣad", ru:"ṣад"}},
        {term:"ض ضضض", transcription:"[ḍ]", translation:{en:"ḍad", ru:"ḍад"}},
        {term:"ط ططط", transcription:"[ṭ]", translation:{en:"ṭa", ru:"ṭа"}},
        {term:"ظ ظظظ", transcription:"[ẓ]", translation:{en:"ẓa", ru:"За"}},
        {term:"ع ععع", transcription:"[ai]", translation:{en:"ain", ru:"айн"}},
        {term:"غ غغغ", transcription:"[ɣ]", translation:{en:"ghain", ru:"гхайн"}},
        {term:"ف ففف", transcription:"[f]", translation:{en:"fa", ru:"фа"}},
        {term:"ق ققق", transcription:"[q]", translation:{en:"qaf", ru:"ккаф"}},
        {term:"ك ككك", transcription:"[k]", translation:{en:"kaf", ru:"каф"}},
        {term:"ل للل", transcription:"[l]", translation:{en:"lam", ru:"лам"}},
        {term:"م ممم", transcription:"[m]", translation:{en:"mim", ru:"мим"}},
        {term:"ن ننن", transcription:"[n]", translation:{en:"nun", ru:"нун"}},
        {term:"ه ههه", transcription:"[h]", translation:{en:"ha", ru:"хя"}},
        {term:"و ووو", transcription:"[w]", translation:{en:"waw", ru:"уау"}},
        {term:"ي ييي", transcription:"[y]", translation:{en:"ya", ru:"йя"}},
    ],
});

a.learnData.add({
    //"font-size": "1.1em",
    en: "languages/arabian العربية /alphabet/non-standard letters variants",
    ru: "языки    /арабский العربية/алфавит /нестандартные варианты букв",
    "font-size": "48px", //"3em",
    terms: [
        {term:"ڛ‬", transcription:"=س (not in Persian/Ottowan)"},
        {term:"ڢ", transcription:"=ف (Magrebi variant)"},
        {term:"ڥ", transcription:"=ف (Magrebi variant)"},
        {term:"ڤ", transcription:"=ف or ق (in loan words) or [g] in Tunisia/Algeria"},
        {term:"ڜ", transcription:"=[tch] (in Marocco)"},
        {term:"ڭ", transcription:"=[g] (in Marocco)"},
        {term:"ڠ", transcription:"=[g] (in Persian Gulf)"},
    ],
});

a.learnData.add({
    //"font-size": "1.1em",
    en: "languages/arabian العربية /alphabet/4 persian letters",
    ru: "языки    /арабский العربية/алфавит /4 персидские буквы",
    "font-size": "48px", //"3em",
    terms: [
        {term:"پ پپپ", transcription:"[p]", translation:{en:"pe", ru:"пе"}},
        {term:"چ چچچ", transcription:"[tʃ]", translation:{en:"tshe", ru:"че"}},
        {term:"ژ ژژژ", transcription:"[ʒ]", translation:{en:"zhe", ru:"же"}},
        {term:"گ گگگ", transcription:"[g]", translation:{en:"gaf", ru:"гаф"}},
    ],
});

a.learnData.add({
    //"font-size": "1.1em",
    en: "languages/arabian العربية /alphabet/signs",
    ru: "языки    /арабский العربية/алфавит /знаки",
    "font-size": "48px", //"3em",
    terms: [
        {term:"ة", transcription:"contemporary/old ending [a]/[аtun]"},
        {term:"لا", transcription:"[la] = l+a"},
        {term:"ء", transcription:"stopping []", translation:{en:"hamza", ru:"хамза"}},
        {term:"أ", transcription:"['an...]"},
        {term:"إ", transcription:"['inn...]"},
        {term:"آ", transcription:"['aan...]"},
        {term:"ٱ", transcription:"[](silent)", translation:{en:"", ru:""}},
        {term:"سَ", transcription:"[sa]", translation:{en:"fatha", ru:"фатха"}},
        {term:"سُ", transcription:"[su]", translation:{en:"damma", ru:"дамма"}},
        {term:"سِ", transcription:"[si]", translation:{en:"fatha", ru:"фатха"}},
        {term:"سً", transcription:"[san]"},
        {term:"سٌ", transcription:"[sun]"},
        {term:"سٍ", transcription:"[sin]"},
        {term:"سّ", transcription:"[ss] (doubling)"},
        {term:"سَّ", transcription:"[ssa] (doubling)"},
        {term:"سُّ", transcription:"[ssu] (doubling)"},
        {term:"سِّ", transcription:"[ssi] (doubling)"},
        {term:"سًّ", transcription:"[ssan] (doubling)"},
        {term:"سٌّ", transcription:"[ssun] (doubling)"},
        {term:"سٍّ", transcription:"[ssin] (doubling)"},
    ],
});


a.learnData.add({
    //"font-size": "1.1em",
    en: "languages/arabian العربية /common phrases",
    ru: "языки    /арабский العربية/общие фразы   ",
    terms: [
        {term:"term1", transcription:"[term1]", translation:{en:"translation1", ru:"перевод1"}},
        {term:"term2", transcription:"[term2]", translation:{en:"translation2", ru:"перевод2"}},
        {term:"term3", transcription:"[term3]", translation:{en:"translation3", ru:"перевод3"}},
        {term:"term4", transcription:"[term4]", translation:{en:"translation4", ru:"перевод4"}},
    ],
});
