#!/usr/bin/env bash

echo
echo "  ####################"
echo "  ### android_sdk_install started"
#pushd $WORK_DIR >/dev/null 2>&1
mkdir -p $ANDROID_HOME1
pushd $ANDROID_HOME1 >/dev/null 2>&1
echo "  ### PWD=$PWD"


export ABTVF=24.0.0 ABTVM=24 ### ABTVM=26   ABTVF=26.0.1

#export ANDROID_HOME=$PWD/android-sdk-linux
export ANDROID_SDK=$ANDROID_HOME
export ZIPALIGN=$ANDROID_HOME/build-tools/$ABTVF/zipalign
export PATH=$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/build-tools/23.0.2:${PATH}

if [ ! -e $ANDROID_HOME/tools/bin ];then
    echo "  ### installing android sdk to ANDROID_HOME=$ANDROID_HOME"

    # # adb
    # sudo apt-get install libc6:i386 libstdc++6:i386
    # # aapt
    # sudo apt-get install zlib1g:i386

    mydo wget --quiet http://dl.google.com/android/android-sdk_r24.4-linux.tgz
    mydo tar -xvf android-sdk_r24.4-linux.tgz --mydo-tail-20

    #android list sdk --extended # && android list sdk -a --extended

    ANDROPACKS=tools,platform-tools,build-tools-$ABTVF,android-16,android-19,android-$ABTVM
    ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | android update sdk -u -a -f -t ${ANDROPACKS}    >/dev/null 2>&1

    ### Accept licenses:
    # - mkdir $ANDROID_HOME/licenses
    # - echo -e "\n8933bad161af4178b1185d1a37fbf41ea5269c55" > "$ANDROID_HOME/licenses/android-sdk-license"
    # - echo -e "\n84831b9409646a918e30573bab4c9c91346d8abd" > "$ANDROID_HOME/licenses/android-sdk-preview-license"

    # That requests us to accept a license for the sdkmanager, and then
    echo y | sdkmanager --update    >/dev/null 2>&1
    # requests us to accept new licenses not previously accepted
    ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager --licenses    >/dev/null 2>&1
else
    echo "  ### android sdk is already installed in ANDROID_HOME=$ANDROID_HOME"
fi

echo "ls \$ANDROID_HOME1"; ls $ANDROID_HOME1
echo "ls \$ANDROID_HOME"; ls $ANDROID_HOME
echo "ls \$ANDROID_HOME/build-tools"; ls $ANDROID_HOME/build-tools

popd >/dev/null 2>&1
echo "  ### android_sdk_install finished"
echo "  ####################"
