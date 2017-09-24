#!/usr/bin/env bash

npm i

mkdir hooks
chmod -R +x hooks

if [ ! -e platforms/android ];then

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

manifest=platforms/android/AndroidManifest.xml
mv -frv $manifest $manifest.old
echo "Android app permissions old ($manifest):"
grep    permission $manifest.old || echo "    (no matches found)"
grep -v permission $manifest.old >$manifest
echo "Android app permissions new ($manifest):"
grep    permission $manifest || echo "    (no matches found)"
