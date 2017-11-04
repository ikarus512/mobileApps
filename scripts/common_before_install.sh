#!/usr/bin/env bash

echo "########################################"
echo "### $0"
pushd $HOME_DIR
echo "### PWD=$PWD"

cmd="npm install -g cordova"; echo $cmd; $cmd

case $TRAVIS_OS_NAME.$FRM.$TRG_OS in
linux.cordova.android|linux.cordova-ionic.android)
    #sudo apt-get update
    cmd="sudo apt-get install g++-4.8 lib32stdc++6 lib32z1 openjdk-7-jdk"; echo $cmd; $cmd #default-jdk

    cmd="source $HOME_DIR/scripts/android_sdk_install.sh"; echo $cmd; $cmd

    cmd="npm install -g cordova"
    if [ $FRM == cordova-ionic ];then cmd="$cmd gulp bower ionic"; fi
    echo $cmd
    $cmd

    #bower update
    #source $HOME_DIR/scripts/ionic_cordova_prepare.sh
;;
linux.nwjs.linux-win)
    cmd="sudo apt-get install wine nsis"; echo $cmd; $cmd #wine1.6
;;
esac

popd
