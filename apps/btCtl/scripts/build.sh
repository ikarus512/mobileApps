#!/usr/bin/env bash

echo
echo "########################################"
echo "### build started"
pushd $APPL_DIR >/dev/null 2>&1
echo "### PWD=$PWD"

# Env from .travis.yml:
if [ -z $APP      ]; then APP=btCtl; fi
if [ -z $DEBUGV   ]; then DEBUGV=; fi
if [ -z $APPNAME  ]; then APPNAME=$APP; fi

if [ -z $ANDROID_HOME ]; then ANDROID_HOME=$PWD/../android-sdk-linux; fi
if [ -z $ZIPALIGN     ]; then ZIPALIGN=$ANDROID_HOME/build-tools/26.0.1/zipalign; fi
if [ -z $RELEASES_DIR ]; then RELEASES_DIR=$PWD/../releases; fi
if [ -z $CLONE_DIR    ]; then CLONE_DIR=$PWD/../_tmp/mobileApps; fi

if [ -z $WORK_DIR     ]; then WORK_DIR=../../../mobileApps; fi
if [ -z $APPL_DIR     ]; then APPL_DIR=$WORK_DIR/apps/$APP; fi

# ==============================================================================

mkdir -p $RELEASES_DIR

#apkdir=platforms/android/build/outputs/apk
#apkdir=platforms/android/app/build/outputs/apk
#platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk
#platforms/android/app/build/outputs/apk/debug/app-debug.apk
if [ "$DEBUGV" == "yes" ];then apkdir=platforms/android/app/build/outputs/apk/debug
else                           apkdir=platforms/android/app/build/outputs/apk/release
fi

rm -fv $apkdir/*.apk

if [ "$DEBUGV" == "yes" ];then
    mydo cordova build android --debug || exit 1 # --verbose
    ls -lh $apkdir
    #cp -frv $apkdir/android-debug.apk $RELEASES_DIR/$APPNAME-android-debug.apk
    cp -frv $apkdir/app-debug.apk $RELEASES_DIR/$APPNAME-android-debug.apk
    #mydo cp -frv $apkdir/android-armv7-debug.apk $RELEASES_DIR/$APPNAME-android-armv7-debug.apk
    #mydo cp -frv $apkdir/android-x86-debug.apk   $RELEASES_DIR/$APPNAME-android-x86-debug.apk
fi

if [ "$DEBUGV" != "yes" ];then

    ### build
    mydo cordova build android --release || \
    mydo cordova build android --release || \
    mydo cordova build android --release || exit 1

    echo "=== android check permissions:"
    . $WORK_DIR/scripts/android_check_permissions.sh

    ### keystore:    CN=Your name, OU=OrgUnit, O=Org, L=city/Locality, S=STate/province, C=Country code
    keystoreFile=ikarus512-$APPNAME.keystore
    keystoreAlias=ikarus512$APPNAME
    storePassword=$(dd if=/dev/urandom bs=32 count=1 2>/dev/null | sha256sum -b | sed 's/ .*//')
    keyPassword=$(dd if=/dev/urandom bs=32 count=1 2>/dev/null | sha256sum -b | sed 's/ .*//')
    keystoreValidity=10000 # days
    rm -f $keystoreFile || exit 1
    echo "### keytool -genkey -v -noprompt -alias $keystoreAlias -keystore $keystoreFile -storepass $storePassword -keypass $keyPassword -keyalg RSA -keysize 2048 -validity $keystoreValidity -dname \"CN=ikarus512, OU=ikarus512, O=HSH, L=NN, S=RU, C=RU\""
              keytool -genkey -v -noprompt -alias $keystoreAlias -keystore $keystoreFile -storepass $storePassword -keypass $keyPassword -keyalg RSA -keysize 2048 -validity $keystoreValidity -dname "CN=ikarus512, OU=ikarus512, O=HSH, L=NN, S=RU, C=RU" || exit 1

    # android-armv7-release-unsigned.apk
    # android-x86-release-unsigned.apk
    # android-release-unsigned.apk

    ### sign and copy to $RELEASES_DIR/ for later check-in
    #for apkFile in $(ls $apkdir/android*-release-unsigned.apk);do
    for apkFile in $(ls $apkdir/app*-release-unsigned.apk);do
        echo "===== signing apkfile=$apkFile ===================================="

        plat1=$(echo $apkFile | perl -e '$_=<>; s/^.*\/\w+|-release-unsigned.apk$//g; print;')
        apkFileOut=$RELEASES_DIR/$APPNAME-android$plat1.apk
        unset plat1
        rm -f $apkFileOut || exit 1

        jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $keystoreFile $apkFile $keystoreAlias -storepass $storePassword -keypass $keyPassword || exit 1
        jarsigner -verify $apkFile $keystoreAlias || exit 1

        $ZIPALIGN -v 4 $apkFile $apkFileOut || exit 1

    done

fi

mydo rm -fv $apkdir/*.apk
mydo ls -l $RELEASES_DIR

popd >/dev/null 2>&1
echo "### build finished"
echo "########################################"
