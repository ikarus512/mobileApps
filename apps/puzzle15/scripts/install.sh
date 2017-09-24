#!/usr/bin/env bash

npm i

#mkdir hooks
chmod -R +x hooks
ls -hl hooks/after_prepare

if [ ! -e platforms/android -o ! -e plugins ];then

    # cordova prepare || exit 1
    # cordova prepare --verbose || exit 1

    # cordova platform add android #--save
    cordova platform add android || exit 1

    # if [ "$OPT1" == "debug" ];then
    #     ### remove debug plugins
    #     cordova plugin add cordova-plugin-console
    # fi

fi

mv -fv $ANDROID_MANIFEST $ANDROID_MANIFEST.old
echo "Android app permissions old ($ANDROID_MANIFEST):"
grep    permission $ANDROID_MANIFEST.old || echo "    (no matches found)"
grep -v permission $ANDROID_MANIFEST.old >$ANDROID_MANIFEST
echo "Android app permissions new ($ANDROID_MANIFEST):"
grep    permission $ANDROID_MANIFEST || echo "    (no matches found)"
