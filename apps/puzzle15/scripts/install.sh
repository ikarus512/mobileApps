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

mydo npm i

case $FRM.$TARGET_OS in
cordova.android|cordova-ionic.android)

    mkdir -p hooks
    chmod -R +x hooks
    ls -hl hooks

    if [ ! -e platforms/android -o ! -e plugins ];then

        # echo "### cordova prepare"
        # cordova prepare || exit 1
        # cordova prepare --verbose || exit 1

        mydo cordova platform add android@6.2.3 || exit 1

        # if [ "$DEBUGV" == "yes" ];then
        #     cordova plugin add cordova-plugin-console
        # fi

    fi

    if [ ! -e plugins/cordova-plugin-dialogs ];then cordova plugin add cordova-plugin-dialogs; fi
    if [ ! -e plugins/cordova-plugin-media ];then cordova plugin add cordova-plugin-media; fi ### navigator.notification.alert()
    if [ ! -e plugins/cordova-plugin-crosswalk-webview -a "$DEBUGV" == "yes" ];then
        cordova plugin add cordova-plugin-crosswalk-webview
    fi

    echo "=== android check permissions:"
    . $WORK_DIR/scripts/android_check_permissions.sh

;;
esac

popd >/dev/null 2>&1
echo "### install finished"
echo "########################################"
