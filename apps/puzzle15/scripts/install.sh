#!/usr/bin/env bash

echo
echo "########################################"
echo "### install started"
pushd $APPL_DIR
echo "### PWD=$PWD"

npm i

mkdir -p hooks
chmod -R +x hooks
ls -hl hooks

if [ ! -e platforms/android ];then

    # cordova prepare || exit 1
    # cordova prepare --verbose || exit 1

    # cordova platform add android #--save
    cordova platform add android || exit 1
fi

if [ ! -e plugins/cordova-plugin-dialogs ];then cordova plugin add cordova-plugin-dialogs; fi
if [ ! -e plugins/cordova-plugin-media ];then cordova plugin add cordova-plugin-media; fi ### navigator.notification.alert()

if [ ! -e plugins/cordova-plugin-crosswalk-webview -a "$OPT1" == "debug" ];then
    cordova plugin add cordova-plugin-crosswalk-webview
fi

### remove debug plugins
# cordova plugin add cordova-plugin-console

echo "=== android check permissions:"
source $HOME_DIR/scripts/android_check_permissions.sh

popd
echo "### install finished"
echo "########################################"
