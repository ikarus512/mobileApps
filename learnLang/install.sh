#!/usr/bin/env bash

npm i

chmod -R +x hooks

if [ ! -e platforms/android ];then

    # cordova prepare || exit 1
    # cordova prepare --verbose || exit 1

    # cordova platform add android #--save
    cordova platform add android || exit 1

    if [ "$BOPT2" == "Full" ];then
        # cordova plugin add cordova-plugin-dialogs      ## navigator.notification.alert()
        cordova plugin add cordova-plugin-crosswalk-webview
        # cordova-plugin-console
    fi

    echo "Android app permissions (platforms/android/AndroidManifest.xml):"
    cat platforms/android/AndroidManifest.xml | grep permission

fi
