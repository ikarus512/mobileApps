#!/usr/bin/env bash

cp -frv src www

mkdir -p $APP_DIR/hooks/after_prepare
cp -frv $HOME_DIR/scripts/android_hook_remove_permissions.js $APP_DIR/hooks/after_prepare/
chmod -R +x hooks
ls -hl $APP_DIR/hooks/after_prepare

if [ "$OPT2" != "Full" ];then
    rm -frv www/js/data_hindi_oldfont.js
    rm -frv www/js/data_music.js
    # rm -frv www/js/data_example.js
    cat src/js/data.js | grep -vP "data_hindi_oldfont|data_music" >www/js/data.js
    cat src/index.html | grep -vP "data_hindi_oldfont|data_music" >www/index.html
fi
