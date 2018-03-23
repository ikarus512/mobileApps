#!/usr/bin/env bash

echo
echo "########################################"
echo "### copy started"
pushd $APPL_DIR >/dev/null 2>&1
echo "### PWD=$PWD"

# copy/compile files from src to www
cp -frv src www
rm -frv www/fonts/resources
if [ "$OPT2" == "Small" ];then
    rm -frv www/js/data/languages/hindi_oldfont.js
    rm -frv www/js/data/music/notes.js
    rm -frv www/js/data/music/guitar.js
    rm -frv www/js/data/example.js
    cat   src/index.html | grep -vP "data/languages/hindi_oldfont|data/music/notes|data/music/guitar|data/example" >www/index.html
    echo "www/index.html:============"
    cat   www/index.html | grep -P  "data/"
    echo "www/index.html=============EOF"
fi

# Prepare cordova hooks
if [ "$TARGET_OS" == "android" ];then
    mkdir -p $APPL_DIR/hooks/after_prepare
    cp -frv $WORK_DIR/scripts/android_hook_remove_permissions.js $APPL_DIR/hooks/after_prepare/
    cp -frv $WORK_DIR/scripts/android_hook_remove_permissions.js $APPL_DIR/hooks/after_prepare/
    cp -frv $WORK_DIR/scripts/android_check_permissions.sh       $APPL_DIR/hooks/after_prepare/
    chmod -R +x hooks
    ls -hl $APPL_DIR/hooks/after_prepare
fi

popd >/dev/null 2>&1
echo "### copy finished"
echo "########################################"
