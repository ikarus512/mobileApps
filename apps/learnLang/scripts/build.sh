#!/usr/bin/env bash

echo
echo "########################################"
echo "### build started"
pushd $APPL_DIR >/dev/null 2>&1
echo "### PWD=$PWD"

# Env from .travis.yml:
if [ -z $APP      ]; then APP=learnLang; fi
if [ -z $DEBUGV   ]; then DEBUGV=; fi
if [ -z $OPT2     ]; then OPT2=; fi
if [ -z $APPNAME  ]; then APPNAME=$APP$OPT2; fi

if [ -z $ANDROID_HOME ]; then ANDROID_HOME=$PWD/../_tmp_cached/android-sdk-linux; fi
if [ -z $ZIPALIGN     ]; then ZIPALIGN=$ANDROID_HOME/build-tools/$ABTVF/zipalign; fi
if [ -z $RELEASES_DIR ]; then RELEASES_DIR=$PWD/../releases; fi
if [ -z $CLONE_DIR    ]; then CLONE_DIR=$PWD/../_tmp/mobileApps; fi

if [ -z $WORK_DIR     ]; then WORK_DIR=../../../mobileApps; fi
if [ -z $APPL_DIR     ]; then APPL_DIR=$WORK_DIR/apps/$APP; fi

# ==============================================================================

mkdir -p $RELEASES_DIR

case $TARGET_OS in
linux-win)
    ### Create installations using nw.js distro and www folder (www compiled from src)
    mydo pushd scripts
        echo "### wget started"
        sdk=; if [ "$DEBUGV" == "yes" ];then sdk="-sdk"; fi
        wget --quiet https://dl.nwjs.io/v0.26.2/nwjs$sdk-v0.26.2-linux-ia32.tar.gz &
        wget --quiet https://dl.nwjs.io/v0.26.2/nwjs$sdk-v0.26.2-linux-x64.tar.gz &
        wget --quiet https://dl.nwjs.io/v0.26.2/nwjs$sdk-v0.26.2-win-ia32.zip &
        wget --quiet https://dl.nwjs.io/v0.26.2/nwjs$sdk-v0.26.2-win-x64.zip &
        wait %1 %2 %3 %4
        echo "### wget finished"
        mydo ls -l
        . ./create-installer-win-ia32-nsis-nwjs.sh
        . ./create-installer-win-x64-nsis-nwjs.sh
        . ./create-installer-linux-ia32-nsis-nwjs.sh
        . ./create-installer-linux-x64-nsis-nwjs.sh
    mydo popd

    mydo ls -l $RELEASES_DIR
;;
osx)
    ### Create installations using nw.js distro and www folder (www compiled from src)
    pushd scripts
    sdk=; if [ "$DEBUGV" == "yes" ];then sdk="-sdk"; fi
    wget --quiet https://dl.nwjs.io/v0.26.2/nwjs$sdk-v0.26.2-osx-x64.zip
    . ./create-installer-osx-x64-nsis-nwjs.sh
    popd

    mydo ls -l $RELEASES_DIR
;;
ios)
    if [ "$DEBUGV" == "yes" ];then  debugOpt=--release; debugSuff=-debug
    else                            debugOpt=--debug  ; debugSuff=         ; fi
    # For Xcode10:   --buildFlag="-UseModernBuildSystem=0"
    echo "### cordova build ios"
    case "$(xcodebuild -version | grep -oE "Xcode \d+")" in
    "Xcode 7")
        #cordova build ios --device $debugOpt --codeSignIdentity="iPhone Developer" --developmentTeam=CU6FE4TYC9 --provisioningProfile=$IOS_PROVISIONING_PROFILE_UUID --packageType=development --automaticProvisioning=false ;;
        #cordova build ios --device $debugOpt --codeSignIdentity="iPhone Developer" --developmentTeam=CU6FE4TYC9 --provisioningProfile=$IOS_PROVISIONING_PROFILE_UUID --packageType=development ;; #--automaticProvisioning=false
        cordova build ios --device $debugOpt --automaticProvisioning=true ;;
    "Xcode 8") ;;
    "Xcode 9")
        # nothing works:
        #cordova build ios --device $debugOpt --codeSignIdentity="iPhone Developer" --developmentTeam=CU6FE4TYC9 --packageType=development --automaticProvisioning=true ;;
        cordova build ios --device $debugOpt --codeSignIdentity="iPhone Developer" --developmentTeam=CU6FE4TYC9 --provisioningProfile=$IOS_PROVISIONING_PROFILE_UUID --packageType=development --automaticProvisioning=false ;;
    "Xcode 10")
        # works only in local build:
        cordova build ios --device $debugOpt --buildFlag="-UseModernBuildSystem=0" --codeSignIdentity="iPhone Developer" --developmentTeam=CU6FE4TYC9 --packageType=development --automaticProvisioning=true ;;
    esac
    # For Xcode10:
    IOS_APP_NAME=LearnLang
    OUTPUTDIR=$PWD/platforms/ios/build/device
    mydo ls -l $OUTPUTDIR
    mydo cp $OUTPUTDIR/$IOS_APP_NAME.ipa $RELEASES_DIR/$APPNAME-ios$debugSuff.ipa
;;
android)
    apkdir=platforms/android/build/outputs/apk
    # if [ "$DEBUGV" == "yes" ];then apkdir=platforms/android/build/outputs/apk/debug
    # else                           apkdir=platforms/android/build/outputs/apk/release
    # fi
    rm -fv platforms/android/build/outputs/apk/*.apk
    rm -fv platforms/android/build/outputs/apk/debug/*.apk
    rm -fv platforms/android/build/outputs/apk/release/*.apk
    rm -fv $apkdir/*.apk

    if [ "$DEBUGV" == "yes" ];then

        mydo cordova requirements
        mydo which java
        mydo echo $JAVA_PATH

        mydo cordova build android --debug --verbose || exit 1

        mydo ls -lh $apkdir

        case "$OPT2" in
        "Small")
            mydo cp -frv $apkdir/android-debug.apk $RELEASES_DIR/$APPNAME-android-debug.apk
            ;;
        *)
            mydo cp -frv $apkdir/android-armv7-debug.apk $RELEASES_DIR/$APPNAME-android-armv7-debug.apk
            mydo cp -frv $apkdir/android-x86-debug.apk   $RELEASES_DIR/$APPNAME-android-x86-debug.apk
            ;;
        esac

    else # elif [ "$DEBUGV" != "yes" ];then

        mydo cordova requirements

        ### build
        mydo cordova build android --release --verbose || exit 1

        echo "=== android check permissions:"
        . $WORK_DIR/scripts/android_check_permissions.sh

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

        mydo ls -l $apkdir/*

        ### sign and copy to $RELEASES_DIR/ for later check-in
        for apkFile in $(ls $apkdir/android*-release-unsigned.apk);do

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
    mydo ls -l $apkdir/*
    mydo ls -l $RELEASES_DIR

    if [ $LOCAL_RUN == yes ];then
        mydo adb kill-server; adb start-server
        mydo cordova run android --debug --device --verbose
        # mydo cordova emulate browser  --verbose
        # mydo adb devices
        echo
    fi

;;
esac

popd >/dev/null 2>&1
echo "### build finished"
echo "########################################"
