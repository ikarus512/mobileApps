#!/usr/bin/env bash

echo
echo "########################################"
echo "### common_before_install started"
pushd $WORK_DIR >/dev/null 2>&1
echo "### PWD=$PWD"

echo
echo "### TRAVIS_OS_NAME=$TRAVIS_OS_NAME"
echo "### uname=$(uname -a)"
echo

case $TRAVIS_OS_NAME.$FRM.$TARGET_OS in
linux.cordova.android|linux.cordova-ionic.android)
    #sudo apt-get update
    mydo sudo apt-get install g++-4.8 lib32stdc++6 lib32z1 openjdk-7-jdk #default-jdk

    . $WORK_DIR/scripts/android_sdk_install.sh

    mydo npm install -g npm

    cmd="npm install -g cordova"
    if [ $FRM == cordova-ionic ];then cmd="$cmd gulp bower ionic"; fi
    echo "### $cmd"
    $cmd

    #bower update
    #. $WORK_DIR/scripts/ionic_cordova_prepare.sh
;;
linux.nwjs.linux-win)
    mydo sudo apt-get install wine nsis #wine1.6
    mydo npm install -g npm
;;
esac

popd >/dev/null 2>&1
echo "### common_before_install finished"
echo "########################################"
