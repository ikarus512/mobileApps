#!/usr/bin/env bash

echo
echo "########################################"
echo "### copy started"
pushd $APPL_DIR >/dev/null 2>&1
echo "### PWD=$PWD"

# copy/compile files from src to www
cp -frv src www
rm -frv www/img/11
rm -frv www/img/logo.old.png
rm -frv www/img/logo1.png
rm -frv www/img/logo2.png
rm -frv www/img/logo3.png

# Prepare cordova hooks
if [ "$TRG_OS" == "android" ];then
    mkdir -p $APPL_DIR/hooks/after_prepare
    cp -frv $WORK_DIR/scripts/android_hook_remove_permissions.js $APPL_DIR/hooks/after_prepare/
    cp -frv $WORK_DIR/scripts/android_check_permissions.sh       $APPL_DIR/hooks/after_prepare/
    chmod -R +x hooks
    ls -hl $APPL_DIR/hooks/after_prepare
fi

popd >/dev/null 2>&1
echo "### copy finished"
echo "########################################"
