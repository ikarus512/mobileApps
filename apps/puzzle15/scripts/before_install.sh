#!/usr/bin/env bash

if [ $TRAVIS_OS_NAME != $BLD_OS ];then exit 1; fi

case $PLAT in
android) pushd $HOME_DIR; source $HOME_DIR/scripts/android_sdk_install.sh; popd ;;
esac

case $APP in
puzzle15)
    npm install -g cordova
    ;;
*)
    npm install -g gulp bower cordova ionic
    # bower update
    # source $HOME_DIR/scripts/ionic_cordova_prepare.sh
    ;;
esac
