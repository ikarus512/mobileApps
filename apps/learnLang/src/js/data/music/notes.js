"use strict";
var a = a || {};

// http://www.smufl.org
// https://w3c.github.io/smufl/gitbook
// https://github.com/steinbergmedia/bravura
// staff5LinesWide fClef staff5LinesWide staffPosLower8 noteQuarterUp / legerLine
// {transcription:"C2", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb9f;&#xe1d7;<br> =-&#xeb9d;&#xe022;<br> =-&#xeb9f;&#xe022;</zh></ib>', },

//western music notes
//+String.fromCharCode(0x2669,0x266A,0x266B,0x266C)

a.learnData.add({
    en: "music /notes/notation/notes, octaves",
    ru: "музыка/ноты /обозначения/ноты, октавы",
    "font-family": "myFontBravuraText",
    "font-size": "40px", //"4em",
    terms: [
        {term:"C", transcription:"C", translation:{en:"Do note.", ru:"Нота До."}},
        {term:"D", transcription:"D", translation:{en:"Re note.", ru:"Нота Ре."}},
        {term:"E", transcription:"E", translation:{en:"Mi note.", ru:"Нота Ми."}},
        {term:"F", transcription:"F", translation:{en:"Fa note.", ru:"Нота Фа."}},
        {term:"G", transcription:"G", translation:{en:"Sol note.", ru:"Нота Соль."}},
        {term:"A", transcription:"A", translation:{en:"La note.", ru:"Нота Ля."}},
        {term:"B", transcription:"B", translation:{en:"Si-bemol half-tone (beginner guitarists often think it is Si note).", ru:"Полутон Си-бемоль (начинающие гитаристы зачастую думают это нота Си)."}},
        {term:"H", transcription:"H", translation:{en:"Si note.", ru:"Нота Си."}},

        {term:"A-1 (A,,,)",   transcription:"A-1", translation:{en:"La note of the Double Contra octave (13.75 Hz).", ru:"Нота Ля суб-суб-контр-октавы (13.75 Hz)."}},
        {term:"A0 (A,,)",     transcription:"A0",  translation:{en:"La note of the Sub Contra octave (27.5 Hz).",     ru:"Нота Ля суб-контр-октавы (27.5 Hz)."}},
        {term:"A1 (A,)",      transcription:"A1",  translation:{en:"La note of the Contra octave (55 Hz).",           ru:"Нота Ля контр-октавы (55 Hz)."}},
        {term:"A2 (A)",       transcription:"A2",  translation:{en:"La note of the Great octave (110 Hz).",           ru:"Нота Ля большой октавы (110 Hz)."}},
        {term:"A3 (a)",       transcription:"A3",  translation:{en:"La note of the Small octave (220 Hz).",           ru:"Нота Ля малой октавы (220 Hz)."}},

        {term:"A4 (a')",      transcription:"A4",  translation:{en:"La note of the First octave (440 Hz).",           ru:"Нота Ля первой октавы (440 Hz)."}},

        {term:"A5 (a'')",     transcription:"A5",  translation:{en:"La note of the Second octave (880 Hz).",          ru:"Нота Ля второй октавы (880 Hz)."}},
        {term:"A6 (a''')",    transcription:"A6",  translation:{en:"La note of the Third octave (1760 Hz).",          ru:"Нота Ля третьей октавы (1760 Hz)."}},
        {term:"A7 (a'''')",   transcription:"A7",  translation:{en:"La note of the Fourth octave (3520 Hz).",         ru:"Нота Ля четвертой октавы (3520 Hz)."}},
        {term:"A8 (a''''')",  transcription:"A8",  translation:{en:"La note of the Fifth octave (7040 Hz).",          ru:"Нота Ля пятой октавы (7040 Hz)."}},
        {term:"A9 (a\"\"\")", transcription:"A9",  translation:{en:"La note of the Sixth octave (14080 Hz).",         ru:"Нота Ля шестой октавы (14080 Hz)."}},
    ]
});

a.learnData.add({
    en: "music /notes/1 note, G Clef",
    ru: "музыка/ноты /1 нота, скрипичный ключ",
    "font-family": "myFontBravuraText",
    "font-size": "40px", //"4em",
    terms: [
        {transcription:"E3", term:'<ib><zh><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle><br><note-below3>-===&#xe012; &#xeb9a;&#xe1d7;</note-below3></zh></ib>', },
        {transcription:"F3", term:'<ib><zh><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle><br><note-below3>-===&#xe012; &#xeb99;&#xe1d7;</note-below3></zh></ib>', },
        {transcription:"G3", term:'<ib><zh><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle><br><note-below2>-===&#xe011; &#xeb99;&#xe1d7;</note-below2></zh></ib>', },
        {transcription:"A3", term:'<ib><zh><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle><br><note-below2>-===&#xe011; &#xeb98;&#xe1d7;</note-below2></zh></ib>', },
        {transcription:"H3", term:'<ib><zh><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle><br><note-below1>-===&#xe010; &#xeb98;&#xe1d7;</note-below1></zh></ib>', },

        {transcription:"C4", term:'<ib><zh><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle><br><note-below1>-===&#xe010; &#xe1d7;</note-below1></zh></ib>', },
        {transcription:"D4", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb9c;&#xe1d7;</zh></ib>', },
        {transcription:"E4", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb9b;&#xe1d7;</zh></ib>', },
        {transcription:"F4", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb9a;&#xe1d7;</zh></ib>', },
        {transcription:"G4", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb99;&#xe1d7;</zh></ib>', },
        {transcription:"A4", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb98;&#xe1d7;</zh></ib>', },
        {transcription:"H4", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xe1d7;</zh></ib>', },

        {transcription:"C5", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb90;&#xe1d7;</zh></ib>', },
        {transcription:"D5", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb91;&#xe1d8;</zh></ib>', },
        {transcription:"E5", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb92;&#xe1d8;</zh></ib>', },
        {transcription:"F5", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb93;&#xe1d8;</zh></ib>', },
        {transcription:"G5", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb94;&#xe1d8;</zh></ib>', },
        {transcription:"A5", term:'<ib><zh><note-above1>-===&#xe010; &#xe1d8;</note-above1><br><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"H5", term:'<ib><zh><note-above1>-===&#xe010; &#xeb90;&#xe1d8;</note-above1><br><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },

        {transcription:"C6", term:'<ib><zh><note-above2>-===&#xe011; &#xeb90;&#xe1d8;</note-above2><br><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"D6", term:'<ib><zh><note-above2>-===&#xe011; &#xeb91;&#xe1d8;</note-above2><br><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"E6", term:'<ib><zh><note-above3>-===&#xe012; &#xeb91;&#xe1d8;</note-above3><br><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"F6", term:'<ib><zh><note-above3>-===&#xe012; &#xeb92;&#xe1d8;</note-above3><br><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
    ]
});

a.learnData.add({
    en: "music /notes/1 note, F Clef",
    ru: "музыка/ноты /1 нота, басовый ключ",
    "font-family": "myFontBravuraText",
    "font-size": "40px", //"4em",
    terms: [
        {transcription:"G1", term:'<ib><zh><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle><br><note-below3>-===&#xe012; &#xeb9a;&#xe1d7;</note-below3></zh></ib>', },
        {transcription:"A1", term:'<ib><zh><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle><br><note-below3>-===&#xe012; &#xeb99;&#xe1d7;</note-below3></zh></ib>', },
        {transcription:"H1", term:'<ib><zh><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle><br><note-below2>-===&#xe011; &#xeb99;&#xe1d7;</note-below2></zh></ib>', },

        {transcription:"C2", term:'<ib><zh><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle><br><note-below2>-===&#xe011; &#xeb98;&#xe1d7;</note-below2></zh></ib>', },
        {transcription:"D2", term:'<ib><zh><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle><br><note-below1>-===&#xe010; &#xeb98;&#xe1d7;</note-below1></zh></ib>', },
        {transcription:"E2", term:'<ib><zh><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle><br><note-below1>-===&#xe010; &#xe1d7;</note-below1></zh></ib>', },
        {transcription:"F2", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb9c;&#xe1d7;</zh></ib>', },
        {transcription:"G2", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb9b;&#xe1d7;</zh></ib>', },
        {transcription:"A2", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb9a;&#xe1d7;</zh></ib>', },
        {transcription:"H2", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb99;&#xe1d7;</zh></ib>', },

        {transcription:"C3", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb98;&#xe1d7;</zh></ib>', },
        {transcription:"D3", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xe1d7;</zh></ib>', },
        {transcription:"E3", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb90;&#xe1d7;</zh></ib>', },
        {transcription:"F3", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb91;&#xe1d8;</zh></ib>', },
        {transcription:"G3", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb92;&#xe1d8;</zh></ib>', },
        {transcription:"A3", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb93;&#xe1d8;</zh></ib>', },
        {transcription:"H3", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb94;&#xe1d8;</zh></ib>', },

        {transcription:"C4", term:'<ib><zh><note-above1>-===&#xe010; &#xe1d8;</note-above1><br><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"D4", term:'<ib><zh><note-above1>-===&#xe010; &#xeb90;&#xe1d8;</note-above1><br><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"E4", term:'<ib><zh><note-above2>-===&#xe011; &#xeb90;&#xe1d8;</note-above2><br><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"F4", term:'<ib><zh><note-above2>-===&#xe011; &#xeb91;&#xe1d8;</note-above2><br><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"G4", term:'<ib><zh><note-above3>-===&#xe012; &#xeb91;&#xe1d8;</note-above3><br><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"A4", term:'<ib><zh><note-above3>-===&#xe012; &#xeb92;&#xe1d8;</note-above3><br><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
    ]
});

a.learnData.add({
    en: "music /notes/1 note",
    ru: "музыка/ноты /1 нота",
    "font-family": "myFontBravuraText",
    "font-size": "40px", //"4em",
    terms: [
        {transcription:"G1", term:'<ib><zh><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle><br><note-below3>-===&#xe012; &#xeb9a;&#xe1d7;</note-below3></zh></ib>', },
        {transcription:"A1", term:'<ib><zh><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle><br><note-below3>-===&#xe012; &#xeb99;&#xe1d7;</note-below3></zh></ib>', },
        {transcription:"H1", term:'<ib><zh><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle><br><note-below2>-===&#xe011; &#xeb99;&#xe1d7;</note-below2></zh></ib>', },

        {transcription:"C2", term:'<ib><zh><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle><br><note-below2>-===&#xe011; &#xeb98;&#xe1d7;</note-below2></zh></ib>', },
        {transcription:"D2", term:'<ib><zh><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle><br><note-below1>-===&#xe010; &#xeb98;&#xe1d7;</note-below1></zh></ib>', },
        {transcription:"E2", term:'<ib><zh><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle><br><note-below1>-===&#xe010; &#xe1d7;</note-below1></zh></ib>', },
        {transcription:"F2", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a; &#xeb9c;&#xe1d7;</note-middle></zh></ib>', },
        {transcription:"G2", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb9b;&#xe1d7;</zh></ib>', },
        {transcription:"A2", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb9a;&#xe1d7;</zh></ib>', },
        {transcription:"H2", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb99;&#xe1d7;</zh></ib>', },

        {transcription:"C3", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb98;&#xe1d7;</zh></ib>', },
        {transcription:"D3", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xe1d7;</zh></ib>', },
        {transcription:"E3", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb90;&#xe1d7;</zh></ib>', },
        {transcription:"F3", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb91;&#xe1d8;</zh></ib>', },
        {transcription:"G3", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb92;&#xe1d8;</zh></ib>', },
        {transcription:"A3", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb93;&#xe1d8;</zh></ib>', },
        {transcription:"H3", term:'<ib><zh>&#xe01a;&#xe062;&#xe01a; &#xeb94;&#xe1d8;</zh></ib>', },

        {transcription:"C4", term:'<ib><zh><note-above1>-===&#xe010; &#xe1d8;</note-above1><br><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"D4", term:'<ib><zh><note-above1>-===&#xe010; &#xeb90;&#xe1d8;</note-above1><br><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"E4", term:'<ib><zh><note-above2>-===&#xe011; &#xeb90;&#xe1d8;</note-above2><br><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"F4", term:'<ib><zh><note-above2>-===&#xe011; &#xeb91;&#xe1d8;</note-above2><br><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"G4", term:'<ib><zh><note-above3>-===&#xe012; &#xeb91;&#xe1d8;</note-above3><br><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"A4", term:'<ib><zh><note-above3>-===&#xe012; &#xeb92;&#xe1d8;</note-above3><br><note-middle>-&#xe01a;&#xe062;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },

        // =====================================================================

        {transcription:"E3", term:'<ib><zh><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle><br><note-below3>-===&#xe012; &#xeb9a;&#xe1d7;</note-below3></zh></ib>', },
        {transcription:"F3", term:'<ib><zh><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle><br><note-below3>-===&#xe012; &#xeb99;&#xe1d7;</note-below3></zh></ib>', },
        {transcription:"G3", term:'<ib><zh><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle><br><note-below2>-===&#xe011; &#xeb99;&#xe1d7;</note-below2></zh></ib>', },
        {transcription:"A3", term:'<ib><zh><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle><br><note-below2>-===&#xe011; &#xeb98;&#xe1d7;</note-below2></zh></ib>', },
        {transcription:"H3", term:'<ib><zh><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle><br><note-below1>-===&#xe010; &#xeb98;&#xe1d7;</note-below1></zh></ib>', },

        {transcription:"C4", term:'<ib><zh><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle><br><note-below1>-===&#xe010; &#xe1d7;</note-below1></zh></ib>', },
        {transcription:"D4", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb9c;&#xe1d7;</zh></ib>', },
        {transcription:"E4", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb9b;&#xe1d7;</zh></ib>', },
        {transcription:"F4", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb9a;&#xe1d7;</zh></ib>', },
        {transcription:"G4", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb99;&#xe1d7;</zh></ib>', },
        {transcription:"A4", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb98;&#xe1d7;</zh></ib>', },
        {transcription:"H4", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xe1d7;</zh></ib>', },

        {transcription:"C5", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb90;&#xe1d7;</zh></ib>', },
        {transcription:"D5", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb91;&#xe1d8;</zh></ib>', },
        {transcription:"E5", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb92;&#xe1d8;</zh></ib>', },
        {transcription:"F5", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb93;&#xe1d8;</zh></ib>', },
        {transcription:"G5", term:'<ib><zh>&#xe01a;&#xe050;&#xe01a; &#xeb94;&#xe1d8;</zh></ib>', },
        {transcription:"A5", term:'<ib><zh><note-above1>-===&#xe010; &#xe1d8;</note-above1><br><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"H5", term:'<ib><zh><note-above1>-===&#xe010; &#xeb90;&#xe1d8;</note-above1><br><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },

        {transcription:"C6", term:'<ib><zh><note-above2>-===&#xe011; &#xeb90;&#xe1d8;</note-above2><br><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"D6", term:'<ib><zh><note-above2>-===&#xe011; &#xeb91;&#xe1d8;</note-above2><br><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"E6", term:'<ib><zh><note-above3>-===&#xe012; &#xeb91;&#xe1d8;</note-above3><br><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
        {transcription:"F6", term:'<ib><zh><note-above3>-===&#xe012; &#xeb92;&#xe1d8;</note-above3><br><note-middle>-&#xe01a;&#xe050;&#xe01a;=&#xe01a;</note-middle></zh></ib>', },
      ]
});

a.learnData.add({
    en: "music /notes/3 notes in one",
    ru: "музыка/ноты /3 ноты через одну",
    "font-family": "myFontBravuraText",
    "font-size": "40px", //"4em",
    terms: [
        {transcription:"G1 H1 D2", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb99;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9b;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9d;&#xe1d5;</note-middle0><br>'+
          '<note-below3>==&#xe012;</note-below3></zh></ib>', },
        {transcription:"A1 C2 E2", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb98;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9a;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9c;&#xe1d5;</note-middle0><br>'+
          '<note-below3>==&#xe012;</note-below3></zh></ib>', },
        {transcription:"H1 D2 F2", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb99;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9b;&#xe1d5;</note-middle0><br>'+
          '<note-below2>==&#xe011;</note-below2></zh></ib>', },

        {transcription:"C2 E2 G2", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb90;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9a;&#xe1d5;</note-middle0><br>'+
          '<note-below2>==&#xe011;</note-below2></zh></ib>', },
        {transcription:"D2 F2 A2", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb91;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb99;&#xe1d5;</note-middle0><br>'+
          '<note-below1>==&#xe010;</note-below1></zh></ib>', },
        {transcription:"E2 G2 H2", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb92;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb90;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d5;</note-middle0><br>'+
          '<note-below1>==&#xe010;</note-below1></zh></ib>', },
        {transcription:"F2 A2 C3", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb93;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb91;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xe1d5;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"G2 H2 D3", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb94;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb92;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb90;&#xe1d5;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"A2 C3 E3", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb95;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb93;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb91;&#xe1d5;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"H2 D3 F3", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb96;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb94;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb92;&#xe1d5;</note-middle0><br>'+
          '</zh></ib>', },

        {transcription:"C3 E3 G3", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb97;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb95;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb93;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"D3 F3 A3", term:'<ib><zh>'+
          '<note-middle0>===&#xeb98;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb96;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb94;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"E3 G3 H3", term:'<ib><zh>'+
          '<note-middle0>===&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb97;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb95;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"F3 A3 C4", term:'<ib><zh>'+
          '<note-above1>==&#xe010;</note-above1><br>'+
          '<note-middle0>===&#xeb90;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb96;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"G3 H3 D4", term:'<ib><zh>'+
          '<note-above1>==&#xe010;</note-above1><br>'+
          '<note-middle0>===&#xeb91;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb97;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"A3 C4 E4", term:'<ib><zh>'+
          '<note-above2>==&#xe011;</note-above2><br>'+
          '<note-middle0>===&#xeb92;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb90;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '</zh></ib>', },
        {transcription:"H3 D4 F4", term:'<ib><zh>'+
          '<note-above2>==&#xe011;</note-above2><br>'+
          '<note-middle0>===&#xeb93;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb91;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '</zh></ib>', },

        {transcription:"C4 E4 G4", term:'<ib><zh>'+
          '<note-above3>==&#xe012;</note-above3><br>'+
          '<note-middle0>===&#xeb94;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb92;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb90;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '</zh></ib>', },
        {transcription:"D4 F4 A4", term:'<ib><zh>'+
          '<note-above3>==&#xe012;</note-above3><br>'+
          '<note-middle0>===&#xeb95;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb93;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb91;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '</zh></ib>', },

        // =====================================================================

        {transcription:"E3 G3 H3", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb99;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9b;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9d;&#xe1d5;</note-middle0><br>'+
          '<note-below3>==&#xe012;</note-below3></zh></ib>', },
        {transcription:"F3 A3 C4", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb98;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9a;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9c;&#xe1d5;</note-middle0><br>'+
          '<note-below3>==&#xe012;</note-below3></zh></ib>', },
        {transcription:"G3 H3 D4", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb99;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9b;&#xe1d5;</note-middle0><br>'+
          '<note-below2>==&#xe011;</note-below2></zh></ib>', },
        {transcription:"A3 C4 E4", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb90;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9a;&#xe1d5;</note-middle0><br>'+
          '<note-below2>==&#xe011;</note-below2></zh></ib>', },
        {transcription:"H3 D4 F4", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb91;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb99;&#xe1d5;</note-middle0><br>'+
          '<note-below1>==&#xe010;</note-below1></zh></ib>', },

        {transcription:"C4 E4 G4", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb92;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb90;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d5;</note-middle0><br>'+
          '<note-below1>==&#xe010;</note-below1></zh></ib>', },
        {transcription:"D4 F4 A4", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb93;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb91;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xe1d5;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"E4 G4 H4", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb94;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb92;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb90;&#xe1d5;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"F4 A4 C5", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb95;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb93;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb91;&#xe1d5;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"G4 H4 D5", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb96;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb94;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb92;&#xe1d5;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"A4 C5 E5", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb97;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb95;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb93;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"H4 D5 F5", term:'<ib><zh>'+
          '<note-middle0>===&#xeb98;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb96;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb94;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },

        {transcription:"C5 E5 G5", term:'<ib><zh>'+
          '<note-middle0>===&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb97;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb95;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"D5 F5 A5", term:'<ib><zh>'+
          '<note-above1>==&#xe010;</note-above1><br>'+
          '<note-middle0>===&#xeb90;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb96;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"E5 G5 H5", term:'<ib><zh>'+
          '<note-above1>==&#xe010;</note-above1><br>'+
          '<note-middle0>===&#xeb91;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb97;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"F5 A5 C6", term:'<ib><zh>'+
          '<note-above2>==&#xe011;</note-above2><br>'+
          '<note-middle0>===&#xeb92;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb90;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '</zh></ib>', },
        {transcription:"G5 H5 D6", term:'<ib><zh>'+
          '<note-above2>==&#xe011;</note-above2><br>'+
          '<note-middle0>===&#xeb93;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb91;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '</zh></ib>', },
        {transcription:"A5 C6 E6", term:'<ib><zh>'+
          '<note-above3>==&#xe012;</note-above3><br>'+
          '<note-middle0>===&#xeb94;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb92;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb90;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '</zh></ib>', },
        {transcription:"H5 D6 F6", term:'<ib><zh>'+
          '<note-above3>==&#xe012;</note-above3><br>'+
          '<note-middle0>===&#xeb95;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb93;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb91;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '</zh></ib>', },
      ]
});

a.learnData.add({
    en: "music /notes/3 notes in two",
    ru: "музыка/ноты /3 ноты через две",
    "font-family": "myFontBravuraText",
    "font-size": "40px", //"4em",
    terms: [
        {transcription:"G1 C2 F2", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9a;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9d;&#xe1d5;</note-middle0><br>'+
          '<note-below3>==&#xe012;</note-below3></zh></ib>', },
        {transcription:"A1 D2 G2", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb90;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb99;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9c;&#xe1d5;</note-middle0><br>'+
          '<note-below3>==&#xe012;</note-below3></zh></ib>', },
        {transcription:"H1 E2 A2", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb91;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9b;&#xe1d5;</note-middle0><br>'+
          '<note-below2>==&#xe011;</note-below2></zh></ib>', },

        {transcription:"C2 F2 H2", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb92;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9a;&#xe1d5;</note-middle0><br>'+
          '<note-below2>==&#xe011;</note-below2></zh></ib>', },
        {transcription:"D2 G2 C3", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb93;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb90;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb99;&#xe1d5;</note-middle0><br>'+
          '<note-below1>==&#xe010;</note-below1></zh></ib>', },
        {transcription:"E2 A2 D3", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb94;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb91;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d5;</note-middle0><br>'+
          '<note-below1>==&#xe010;</note-below1></zh></ib>', },
        {transcription:"F2 H2 E3", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb95;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb92;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xe1d5;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"G2 C3 F3", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb96;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb93;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb90;&#xe1d5;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"A2 D3 G3", term:'<ib><zh><note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb97;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb94;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb91;&#xe1d5;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"H2 E3 A3", term:'<ib><zh>'+
          '<note-middle0>===&#xeb98;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb95;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb92;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },

        {transcription:"C3 F3 H3", term:'<ib><zh>'+
          '<note-middle0>===&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb96;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb93;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"D3 G3 C4", term:'<ib><zh>'+
          '<note-above1>==&#xe010;</note-above1><br>'+
          '<note-middle0>===&#xeb90;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb97;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb94;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"E3 A3 D4", term:'<ib><zh>'+
          '<note-above1>==&#xe010;</note-above1><br>'+
          '<note-middle0>===&#xeb91;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb95;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"F3 H3 E4", term:'<ib><zh>'+
          '<note-above2>==&#xe011;</note-above2><br>'+
          '<note-middle0>===&#xeb92;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb96;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"G3 C4 F4", term:'<ib><zh>'+
          '<note-above2>==&#xe011;</note-above2><br>'+
          '<note-middle0>===&#xeb93;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb90;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb97;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"A3 D4 G4", term:'<ib><zh>'+
          '<note-above3>==&#xe012;</note-above3><br>'+
          '<note-middle0>===&#xeb94;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb91;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '</zh></ib>', },
        {transcription:"H3 E4 A4", term:'<ib><zh>'+
          '<note-above3>==&#xe012;</note-above3><br>'+
          '<note-middle0>===&#xeb95;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb92;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe062;&#xe01a;</note-middle><br>'+
          '</zh></ib>', },

        // =====================================================================

        {transcription:"E3 A3 D4", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9a;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9d;&#xe1d5;</note-middle0><br>'+
          '<note-below3>==&#xe012;</note-below3></zh></ib>', },
        {transcription:"F3 H3 E4", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb90;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb99;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9c;&#xe1d5;</note-middle0><br>'+
          '<note-below3>==&#xe012;</note-below3></zh></ib>', },
        {transcription:"G3 C4 F4", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb91;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9b;&#xe1d5;</note-middle0><br>'+
          '<note-below2>==&#xe011;</note-below2></zh></ib>', },
        {transcription:"A3 D4 G4", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb92;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb9a;&#xe1d5;</note-middle0><br>'+
          '<note-below2>==&#xe011;</note-below2></zh></ib>', },
        {transcription:"H3 E4 A4", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb93;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb90;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb99;&#xe1d5;</note-middle0><br>'+
          '<note-below1>==&#xe010;</note-below1></zh></ib>', },

        {transcription:"C4 F4 H4", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb94;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb91;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d5;</note-middle0><br>'+
          '<note-below1>==&#xe010;</note-below1></zh></ib>', },
        {transcription:"D4 G4 C5", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb95;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb92;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xe1d5;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"E4 A5 D5", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb96;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb93;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb90;&#xe1d5;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"F4 H4 E5", term:'<ib><zh><note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb97;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb94;&#xe1d5;</note-middle0><br>'+
          '<note-middle0>===&#xeb91;&#xe1d5;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"G4 C5 F5", term:'<ib><zh>'+
          '<note-middle0>===&#xeb98;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb95;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb92;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"A4 D5 G5", term:'<ib><zh>'+
          '<note-middle0>===&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb96;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb93;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"H4 E5 A5", term:'<ib><zh>'+
          '<note-above1>==&#xe010;</note-above1><br>'+
          '<note-middle0>===&#xeb90;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb97;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb94;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },

        {transcription:"C5 F5 H5", term:'<ib><zh>'+
          '<note-above1>==&#xe010;</note-above1><br>'+
          '<note-middle0>===&#xeb91;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb95;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"D5 G5 C6", term:'<ib><zh>'+
          '<note-above2>==&#xe011;</note-above2><br>'+
          '<note-middle0>===&#xeb92;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb96;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"E5 A5 D6", term:'<ib><zh>'+
          '<note-above2>==&#xe011;</note-above2><br>'+
          '<note-middle0>===&#xeb93;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb90;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '<note-middle0>===&#xeb97;&#xe1d6;</note-middle0><br>'+
          '</zh></ib>', },
        {transcription:"F5 H5 E6", term:'<ib><zh>'+
          '<note-above3>==&#xe012;</note-above3><br>'+
          '<note-middle0>===&#xeb94;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb91;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb98;&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '</zh></ib>', },
        {transcription:"G5 C6 F6", term:'<ib><zh>'+
          '<note-above3>==&#xe012;</note-above3><br>'+
          '<note-middle0>===&#xeb95;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xeb92;&#xe1d6;</note-middle0><br>'+
          '<note-middle0>===&#xe1d6;</note-middle0><br>'+
          '<note-middle>&#xe01a;&#xe050;&#xe01a;</note-middle><br>'+
          '</zh></ib>', },
    ]
});
