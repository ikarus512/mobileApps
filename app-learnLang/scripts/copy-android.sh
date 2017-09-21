#!/usr/bin/env bash

cp -frv src www

if [ "$BOPT2" != "Full" ];then
    rm -frv www/js/data_hindi_oldfont.js
    rm -frv www/js/data_music.js
    # rm -frv www/js/data_example.js
    cat src/js/data.js | grep -vP "data_hindi_oldfont|data_music" >www/js/data.js
    cat src/index.html | grep -vP "data_hindi_oldfont|data_music" >www/index.html
fi
