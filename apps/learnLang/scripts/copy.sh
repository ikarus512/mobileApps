#!/usr/bin/env bash

cp -frv src www

rm -frv www/fonts/resources

mkdir -p $APP_DIR/hooks/after_prepare
cp -frv $HOME_DIR/scripts/android_hook_remove_permissions.js $APP_DIR/hooks/after_prepare/
cp -frv $HOME_DIR/scripts/android_check_permissions.sh       $APP_DIR/hooks/after_prepare/
chmod -R +x hooks
ls -hl $APP_DIR/hooks/after_prepare

if [ "$OPT2" != "Full" ];then
    rm -frv www/js/data/languages/hindi_oldfont.js
    rm -frv www/js/data/music/notes.js
    rm -frv www/js/data/music/guitar.js
    rm -frv www/js/data/example.js
    cat   src/index.html | grep -vP "data/languages/hindi_oldfont|data/music/notes|data/music/guitar|data/example" >www/index.html
    echo "www/index.html:============"
    cat   www/index.html | grep -P  "data/"
    echo "www/index.html=============EOF"
fi
