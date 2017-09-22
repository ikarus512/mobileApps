#!/usr/bin/env bash

if [ "$APP"  == "" ]; then APP=learnLang; fi
if [ "$PLAT" == "" ]; then PLAT=android; fi
if [ "$OPT1" == "" ]; then OPT1=debug; fi
if [ "$OPT2" == "" ]; then PLAT=Full; fi

APPNAME=$APP$OPT2
RELEASES_DIR=../releases

mkdir -p $RELEASES_DIR

rm -fv platforms/android/build/outputs/apk/*.apk

if [ "$OPT1" == "debug" ];then

    cordova build android --debug || exit 1 # --verbose

    case "$OPT2" in
    "Full")
        cp -frv platforms/android/build/outputs/apk/android-armv7-debug.apk $RELEASES_DIR/$APPNAME-debug.apk
        cp -frv platforms/android/build/outputs/apk/android-x86-debug.apk   $RELEASES_DIR/$APPNAME-debug-x86.apk
        ;;
    "")
        cp -frv platforms/android/build/outputs/apk/android-debug.apk $RELEASES_DIR/$APPNAME-debug.apk
        ;;
    esac

fi

if [ "$OPT1" == "release" ];then

    # if [ -z $zipalign ];then zipalign=$ANDROID_HOME1/build-tools/25.0.2/zipalign; fi

    ### remove debug plugins
    # cordova plugin rm cordova-plugin-console

    ### build
    cordova build android --release || exit 1

    ### keystore:    CN=Your name, OU=OrgUnit, O=Org, L=city/Locality, S=STate/province, C=Country code
    keystoreFile=ikarus512-$APPNAME.keystore
    keystoreAlias=ikarus512$APPNAME
    storePassword=$(dd if=/dev/urandom bs=32 count=1 2>/dev/null | sha256sum -b | sed 's/ .*//')
    keyPassword=$(dd if=/dev/urandom bs=32 count=1 2>/dev/null | sha256sum -b | sed 's/ .*//')
    keystoreValidity=10000 # days
    rm -f $keystoreFile || exit 1
    keytool -genkey -v -noprompt -alias $keystoreAlias -keystore $keystoreFile -storepass $storePassword -keypass $keyPassword -keyalg RSA -keysize 2048 -validity $keystoreValidity -dname "CN=ikarus512, OU=ikarus512, O=HSH, L=NN, S=RU, C=RU" || exit 1

    # android-armv7-release-unsigned.apk
    # android-x86-release-unsigned.apk
    # android-release-unsigned.apk

    ### sign and copy to $RELEASES_DIR/ for later check-in
    for apkFile in $(ls platforms/android/build/outputs/apk/android*-release-unsigned.apk);do

        plat1=$(echo $apkFile | perl -e '$_=<>; s/^.*\/\w+|-release-unsigned.apk$|-armv7//g; print;')
        apkFileOut=$RELEASES_DIR/$APPNAME$plat1.apk
        unset plat1
        rm -f $apkFileOut || exit 1

        jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $keystoreFile $apkFile $keystoreAlias -storepass $storePassword -keypass $keyPassword || exit 1
        jarsigner -verify $apkFile $keystoreAlias || exit 1

        $zipalign -v 4 $apkFile $apkFileOut || exit 1

    done

fi

rm -fv platforms/android/build/outputs/apk/*.apk
