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

        if [ "$OPT2" == "Full" ];then
            # cmd="cordova plugin add cordova-plugin-dialogs"; echo "### $cmd"; $cmd || exit 1 ### navigator.notification.alert()
            cmd="cordova plugin add cordova-plugin-crosswalk-webview"; echo "### $cmd"; $cmd || exit 1
        fi

    fi

    echo "=== android check permissions:"
    . $WORK_DIR/scripts/android_check_permissions.sh
fi

popd >/dev/null 2>&1
echo "### install finished"
echo "########################################"
