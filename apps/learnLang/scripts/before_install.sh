#!/usr/bin/env bash

case $PLAT in
android) pushd $HOME_DIR; source $HOME_DIR/scripts/android_sdk_install.sh; popd ;;
#win32) sudo apt-get install wine nsis;;
#nwjs) sudo apt-get install wine nsis;;
esac

case $APP in
learnLang)
    npm install -g cordova
    ;;
*)
    npm install -g gulp bower cordova ionic
    # bower update
    # source $HOME_DIR/scripts/ionic_cordova_prepare.sh
    ;;
esac
