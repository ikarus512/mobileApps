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

echo TRAVIS_OS_NAME.FRM.TARGET_OS=$TRAVIS_OS_NAME.$FRM.$TARGET_OS
case $TRAVIS_OS_NAME.$FRM.$TARGET_OS in
linux.cordova.android|linux.cordova-ionic.android)
    if [ $LOCAL_RUN != yes ];then
        mydo sudo apt-get update -y
    fi

    if [ "$(java -version 2>&1| grep jdk)" == "" ];then
        mydo sudo apt-get install -y g++-4.8 lib32stdc++6 lib32z1 openjdk-8-jdk #default-jdk
    fi

    . $WORK_DIR/scripts/android_sdk_install.sh

    if [ $LOCAL_RUN != yes ];then
        mydo npm install -g npm
    fi

    if [ "$(cordova --version|grep 6.)" == "" ];then
        mydo npm install -g cordova@6
    fi

    if [ $FRM == cordova-ionic ];then
        mydo npm i -g gulp bower ionic
        bower update
        . $WORK_DIR/scripts/ionic_cordova_prepare.sh
    fi

;;
osx.cordova.ios)
    mydo npm install -g npm
    mydo npm install -g cordova
;;
linux.nwjs.linux-win)
    mydo sudo apt-get update -y
    mydo sudo apt-get install -y wine nsis #wine1.6
    mydo npm install -g npm
;;
esac

popd >/dev/null 2>&1
echo "### common_before_install finished"
echo "########################################"
