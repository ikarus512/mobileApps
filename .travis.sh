#!/usr/bin/env bash
#    - os: linux
#      env: 
#export JB=010 TOS=android   APP=learnLang FRM=cordova OPT2=Small
#    - os: linux
#      env: JB=020 TOS=android   APP=learnLang FRM=cordova OPT2=Small    DEBUGV=yes
#    - os: linux
#      env: JB=030 TOS=android   APP=learnLang FRM=cordova
#    - os: linux
#      env: JB=040 TOS=android   APP=learnLang FRM=cordova               DEBUGV=yes
#    - os: linux
#      env: JB=050 TOS=linux-win APP=learnLang FRM=nwjs
export JB=040 TOS=android   APP=learnLang FRM=cordova               DEBUGV=yes

export APPNAME=$APP$OPT2
export TARGET_OS=$TOS
export WORK_DIR=$PWD
export APPL_DIR=$WORK_DIR/apps/$APP
export RELEASES_DIR=$WORK_DIR/releases
export CLONE_DIR=$WORK_DIR/_tmp/mobileApps
#-export  CXX=g++-4.8 #needed for android???
export  ANDROID_MANIFEST=$APPL_DIR/platforms/android/AndroidManifest.xml
#export  ANDROID_HOME1=$WORK_DIR/_tmp_cached
#export  ANDROID_HOME=$WORK_DIR/_tmp_cached/android-sdk-linux
export ABTVM=27   ABTVF=27.0.3
export  ZIPALIGN=$ANDROID_HOME/build-tools/$ABTVF/zipalign

. $WORK_DIR/scripts/_mydo.sh
#     . $WORK_DIR/scripts/common_before_install.sh
. $APPL_DIR/scripts/before_install.sh
. $APPL_DIR/scripts/copy.sh
. $APPL_DIR/scripts/install.sh

#- wget https://services.gradle.org/distributions/gradle-3.4.1-bin.zip
#- sudo unzip -d /opt/gradle gradle-3.4.1-bin.zip
#- export PATH=/opt/gradle/gradle-3.4.1/bin:$PATH
#- which gradle
#- gradle --version

. $APPL_DIR/scripts/build.sh
#cordova run android --devbug

#script:
ls -lh $RELEASES_DIR || echo 1
