'use strict';
var a = a || {};

// '<fret-number>&luteItalianFret3;&luteGermanFLower;&luteGermanRLower;</fret-number>'+
// '<fret-number>&luteItalianFret1;&luteItalianFret2;&luteGermanFLower;&luteGermanRLower;</fret-number>'+

a.learnData.add({
    en: 'music /guitar/Major',
    ru: 'музыка/гитара/мажорные трезвучия',
    'font-family': 'myFontBravuraText',
    'font-size': '160px',
    terms: [
        {transcription:'C', term:'<fretboard-container><fretboard>&fretboard6StringNut;</fretboard>'+
                '<str3fr0>&fretboardO;</str3fr0>'+
                '<str1fr0>&fretboardO;</str1fr0>'+
                '<str2fr1>&fretboardFilledCircle;</str2fr1>'+
                '<str4fr2>&fretboardFilledCircle;</str4fr2>'+
                '<str6fr3>&fretboardFilledCircle;</str6fr3>'+
                '<str5fr3>&fretboardFilledCircle;</str5fr3>'+
            '</fretboard-container>'},
        {transcription:'D', term:'<fretboard-container><fretboard>&fretboard6StringNut;</fretboard>'+
                '<str6fr0>&fretboardX;</str6fr0>'+
                '<str5fr0>&fretboardO;</str5fr0>'+
                '<str4fr0>&fretboardO;</str4fr0>'+
                '<str6fr2 class="grey">&fretboardFilledCircle;</str6fr2>'+
                '<str3fr2>&fretboardFilledCircle;</str3fr2>'+
                '<str1fr2>&fretboardFilledCircle;</str1fr2>'+
                '<str2fr3>&fretboardFilledCircle;</str2fr3>'+
            '</fretboard-container>'},
        {transcription:'E', term:'<fretboard-container><fretboard>&fretboard6StringNut;</fretboard>'+
                '<str6fr0>&fretboardO;</str6fr0>'+
                '<str2fr0>&fretboardO;</str2fr0>'+
                '<str1fr0>&fretboardO;</str1fr0>'+
                '<str3fr1>&fretboardFilledCircle;</str3fr1>'+
                '<str5fr2>&fretboardFilledCircle;</str5fr2>'+
                '<str4fr2>&fretboardFilledCircle;</str4fr2>'+
            '</fretboard-container>'},
        {transcription:'F', term:'<fretboard-container><fretboard>&fretboard6StringNut;</fretboard>'+
                '<str6fr0>&fretboardX;</str6fr0>'+
                '<str6fr1 class="grey">&fretboardFilledCircle;</str6fr1>'+
                '<str2fr1>&fretboardFilledCircle;</str2fr1>'+
                '<str1fr1>&fretboardFilledCircle;</str1fr1>'+
                '<str3fr2>&fretboardFilledCircle;</str3fr2>'+
                '<str5fr3>&fretboardFilledCircle;</str5fr3>'+
                '<str4fr3>&fretboardFilledCircle;</str4fr3>'+
            '</fretboard-container>'},
        {transcription:'G', term:'<fretboard-container><fretboard>&fretboard6StringNut;</fretboard>'+
                '<str4fr0>&fretboardO;</str4fr0>'+
                '<str3fr0>&fretboardO;</str3fr0>'+
                '<str2fr0>&fretboardO;</str2fr0>'+
                '<str5fr2>&fretboardFilledCircle;</str5fr2>'+
                '<str6fr3>&fretboardFilledCircle;</str6fr3>'+
                '<str2fr3 class="grey">&fretboardFilledCircle;</str2fr3>'+
                '<str1fr3>&fretboardFilledCircle;</str1fr3>'+
            '</fretboard-container>'},
        {transcription:'A', term:'<fretboard-container><fretboard>&fretboard6StringNut;</fretboard>'+
                '<str6fr0>&fretboardO;</str6fr0>'+
                '<str5fr0>&fretboardO;</str5fr0>'+
                '<str1fr0>&fretboardO;</str1fr0>'+
                '<str4fr2>&fretboardFilledCircle;</str4fr2>'+
                '<str3fr2>&fretboardFilledCircle;</str3fr2>'+
                '<str2fr2>&fretboardFilledCircle;</str2fr2>'+
            '</fretboard-container>'},
        {transcription:'H', term:'<fretboard-container><fretboard>&fretboard6StringNut;</fretboard>'+
                '<str6fr0>&fretboardX;</str6fr0>'+
                '<str5fr0>&fretboardX;</str5fr0>'+
                '<str1fr2>&fretboardFilledCircle;</str1fr2>'+
                '<str4fr4>&fretboardFilledCircle;</str4fr4>'+
                '<str3fr4>&fretboardFilledCircle;</str3fr4>'+
                '<str2fr4>&fretboardFilledCircle;</str2fr4>'+
            '</fretboard-container>'},
    ]
}, a.smuflEntitiesConverter);

a.learnData.add({
    en: 'music /guitar/minor',
    ru: 'музыка/гитара/минорные трезвучия',
    'font-family': 'myFontBravuraText',
    'font-size': '160px',
    terms: [
        {transcription:'Cm', term:'<fretboard-container><fretboard>&fretboard6StringNut;</fretboard>'+
                '<str6fr0>&fretboardX;</str6fr0>'+
                '<str3fr0>&fretboardO;</str3fr0>'+
                '<str4fr1>&fretboardFilledCircle;</str4fr1>'+
                '<str5fr3>&fretboardFilledCircle;</str5fr3>'+
                '<str1fr3>&fretboardFilledCircle;</str1fr3>'+
                '<str2fr4>&fretboardFilledCircle;</str2fr4>'+
            '</fretboard-container>'},
        {transcription:'Dm', term:'<fretboard-container><fretboard>&fretboard6StringNut;</fretboard>'+
                '<str6fr0>&fretboardX;</str6fr0>'+
                '<str5fr0>&fretboardO;</str5fr0>'+
                '<str4fr0>&fretboardO;</str4fr0>'+
                '<str1fr1>&fretboardFilledCircle;</str1fr1>'+
                '<str3fr2>&fretboardFilledCircle;</str3fr2>'+
                '<str2fr3>&fretboardFilledCircle;</str2fr3>'+
            '</fretboard-container>'},
        {transcription:'Em', term:'<fretboard-container><fretboard>&fretboard6StringNut;</fretboard>'+
                '<str6fr0>&fretboardO;</str6fr0>'+
                '<str3fr0>&fretboardO;</str3fr0>'+
                '<str2fr0>&fretboardO;</str2fr0>'+
                '<str1fr0>&fretboardO;</str1fr0>'+
                '<str5fr2>&fretboardFilledCircle;</str5fr2>'+
                '<str4fr2>&fretboardFilledCircle;</str4fr2>'+
            '</fretboard-container>'},
        {transcription:'Fm', term:'<fretboard-container><fretboard>&fretboard6StringNut;</fretboard>'+
                '<str6fr0>&fretboardX;</str6fr0>'+
                '<str6fr1 class="grey">&fretboardFilledCircle;</str6fr1>'+
                '<str3fr1>&fretboardFilledCircle;</str3fr1>'+
                '<str2fr1>&fretboardFilledCircle;</str2fr1>'+
                '<str1fr1>&fretboardFilledCircle;</str1fr1>'+
                '<str5fr3>&fretboardFilledCircle;</str5fr3>'+
                '<str4fr3>&fretboardFilledCircle;</str4fr3>'+
            '</fretboard-container>'},
        {transcription:'Gm', term:'<fretboard-container><fretboard>&fretboard6StringNut;</fretboard>'+
                '<str4fr0>&fretboardO;</str4fr0>'+
                '<str3fr0>&fretboardO;</str3fr0>'+
                '<str5fr1>&fretboardFilledCircle;</str5fr1>'+
                '<str6fr3>&fretboardFilledCircle;</str6fr3>'+
                '<str2fr3>&fretboardFilledCircle;</str2fr3>'+
                '<str1fr3>&fretboardFilledCircle;</str1fr3>'+
            '</fretboard-container>'},
        {transcription:'Am', term:'<fretboard-container><fretboard>&fretboard6StringNut;</fretboard>'+
                '<str6fr0>&fretboardO;</str6fr0>'+
                '<str5fr0>&fretboardO;</str5fr0>'+
                '<str1fr0>&fretboardO;</str1fr0>'+
                '<str2fr1>&fretboardFilledCircle;</str2fr1>'+
                '<str4fr2>&fretboardFilledCircle;</str4fr2>'+
                '<str3fr2>&fretboardFilledCircle;</str3fr2>'+
            '</fretboard-container>'},
        {transcription:'Hm', term:'<fretboard-container><fretboard>&fretboard6StringNut;</fretboard>'+
                '<str6fr0>&fretboardX;</str6fr0>'+
                '<str5fr0>&fretboardX;</str5fr0>'+
                '<str1fr2>&fretboardFilledCircle;</str1fr2>'+
                '<str2fr3>&fretboardFilledCircle;</str2fr3>'+
                '<str4fr4>&fretboardFilledCircle;</str4fr4>'+
                '<str3fr4>&fretboardFilledCircle;</str3fr4>'+
            '</fretboard-container>'},
    ]
}, a.smuflEntitiesConverter);
