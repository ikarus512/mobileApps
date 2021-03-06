#!/usr/bin/env bash

echo
echo "########################################"
echo "### install started"
pushd $APPL_DIR >/dev/null 2>&1
echo "### PWD=$PWD"

# case $FRM in
# cordova) cp -frv package.cordova.json package.json ;;
# nwjs)    cp -frv package.nwjs.json    package.json ;;
# esac

if [ $TARGET_OS == linux-win ];then
    mydo npm i
fi

if [ $TARGET_OS == ios ];then
    mydo echo IOS_DEVELOPER_NAME=$IOS_DEVELOPER_NAME
    export IOS_DEVELOPER_NAME="iPhone Distribution: ikarus512@yandex.ru (3UX5BEB7M2)"
    mydo echo IOS_DEVELOPER_NAME=$IOS_DEVELOPER_NAME
    mydo xcodebuild -version
    mydo . $APPL_DIR/scripts/ios-decrypt-key.sh || exit 1
    mydo . $APPL_DIR/scripts/ios-add-key.sh || exit 1

    rvm use system
    mydo npm i
    mydo cordova platform add ios || exit 1
    #mydo cordova plugin add cordova-plugin-crosswalk-webview || exit 1
fi

case $FRM.$TARGET_OS in
cordova.android|cordova-ionic.android)

    mkdir -p hooks
    chmod -R +x hooks
    ls -hl hooks

    if [ ! -e platforms/android -o ! -e plugins ];then

        mydo npm i -g cordova@7 || exit 1
        #mydo cordova platform add android@8.1.0 --save || exit 1

        # echo "### cordova prepare"
        # cordova prepare || exit 1
        # cordova prepare --verbose || exit 1

        #mydo cordova platform rm android || exit 1
        #mydo cordova platform add https://github.com/apache/cordova-android || exit 1
        mydo cordova platform add android@6.2.3 || exit 1
        if [ $LOCAL_RUN == yes ];then
            mydo cordova platform add browser || exit 1
        fi

        # if [ "$DEBUGV" == "yes" ];then
        #     cordova plugin add cordova-plugin-console
        # fi

        if [ "$OPT2" == "Small" -a "$DEBUGV" == "" ];then
            mydo echo "No additional plugins needed."
        else #elif [ "$OPT2" != "Small" -o "$DEBUGV" == "yes" ];then
            # mydo cordova plugin add cordova-plugin-dialogs || exit 1 ### navigator.notification.alert()
            mydo cordova plugin add cordova-plugin-crosswalk-webview || exit 1
            # mydo cordova plugin add cordova-plugin-crosswalk-webview@2.3.0 || exit 1
            echo
        fi
        mydo git diff ./config.xml.old ./config.xml
        mydo git diff ./package.json.old ./package.json


    fi

    echo "=== android check permissions:"
    . $WORK_DIR/scripts/android_check_permissions.sh
;;
esac

popd >/dev/null 2>&1
echo "### install finished"
echo "########################################"
