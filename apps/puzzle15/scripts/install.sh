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

cmd="npm i"; echo "### $cmd"; $cmd

if [ $FRM.$TRG_OS == cordova.android ];then

    mkdir -p hooks
    chmod -R +x hooks
    ls -hl hooks

    if [ ! -e platforms/android -o ! -e plugins ];then

        # echo "### cordova prepare"
        # cordova prepare || exit 1
        # cordova prepare --verbose || exit 1

        cmd="cordova platform add android"; echo "### $cmd"; $cmd || exit 1

        # if [ "$OPT1" == "debug" ];then
        #     cordova plugin add cordova-plugin-console
        # fi

    fi

    if [ ! -e plugins/cordova-plugin-dialogs ];then cordova plugin add cordova-plugin-dialogs; fi
    if [ ! -e plugins/cordova-plugin-media ];then cordova plugin add cordova-plugin-media; fi ### navigator.notification.alert()
    if [ ! -e plugins/cordova-plugin-crosswalk-webview -a "$OPT1" == "debug" ];then
        cordova plugin add cordova-plugin-crosswalk-webview
    fi

    echo "=== android check permissions:"
    source $WORK_DIR/scripts/android_check_permissions.sh

fi

popd >/dev/null 2>&1
echo "### install finished"
echo "########################################"
