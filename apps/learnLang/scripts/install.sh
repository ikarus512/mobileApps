#!/usr/bin/env bash

npm i

mkdir -p hooks
chmod -R +x hooks
ls -hl hooks

if [ ! -e platforms/android -o ! -e plugins ];then

    # cordova prepare || exit 1
    # cordova prepare --verbose || exit 1

    # cordova platform add android #--save
    cordova platform add android || exit 1

    # if [ "$OPT1" == "debug" ];then
    #     ### remove debug plugins
    #     cordova plugin add cordova-plugin-console
    # fi

    if [ "$OPT2" == "Full" ];then
        # cordova plugin add cordova-plugin-dialogs ### navigator.notification.alert()
        cordova plugin add cordova-plugin-crosswalk-webview
    fi

fi

echo "=== android check permissions:"
source $HOME_DIR/scripts/android_check_permissions.sh
