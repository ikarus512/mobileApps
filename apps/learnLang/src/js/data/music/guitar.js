"use strict";
var a = a || {};

a.learnData.add({
    en: "music /guitar/major",
    ru: "музыка/гитара/мажорные трезвучия",
    "font-family": "myFontBravuraText",
    "font-size": "40px", //"4em",
    terms: [
        {transcription:"C", term:'<ib>&fretboardFilledCircle;.,-&fretboardX;--&fretboardO;<br>'+
            '&fretboard6StringNut;<br>'+
            '&fretboardFilledCircle;&fretboardX;&fretboardO;&tuplet2;</ib>', },
        {transcription:"E3", term:'<ib><zh><note-middle>-&staff5LinesWide;&gClef;&staff5LinesWide;=&staff5LinesWide;</note-middle><br><note-below3>-===&staff3Lines; &staffPosLower3;&note8thUp;</note-below3></zh></ib>', },
    ]
}, a.smuflEntitiesConverter);
