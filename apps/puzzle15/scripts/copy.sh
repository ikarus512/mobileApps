#!/usr/bin/env bash

cp -frv src www

mkdir -p $APP_DIR/hooks/after_prepare
cp -frv $HOME_DIR/scripts/android_hook_remove_permissions.js $APP_DIR/hooks/after_prepare/
cp -frv $HOME_DIR/scripts/android_check_permissions.sh       $APP_DIR/hooks/after_prepare/
chmod -R +x hooks
ls -hl $APP_DIR/hooks/after_prepare

rm -frv www/img/11
rm -frv www/img/logo.old.png
rm -frv www/img/logo1.png
rm -frv www/img/logo2.png
rm -frv www/img/logo3.png
