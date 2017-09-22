#!/usr/bin/env bash

case $PLAT in
android)
    source ./scripts-main/android_sdk_install.sh
    ;;
esac

case $APP in
learnLang)
    npm install -g cordova
    ;;
*)
    npm install -g gulp bower cordova ionic
    # bower update
    # source ./scripts-main/ionic_cordova_prepare.sh
    ;;
esac
