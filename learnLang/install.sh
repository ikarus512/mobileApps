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

fi

manifest=platforms/android/AndroidManifest.xml
echo "Android app permissions old ($manifest):"
grep    permission $manifest
grep -v permission $manifest >$manifest
echo "Android app permissions new ($manifest):"
grep    permission $manifest
