#!/usr/bin/env bash

echo
echo "  ####################"
echo "  ### android_sdk_install started"
#pushd $WORK_DIR >/dev/null 2>&1
mkdir -p $ANDROID_HOME1
pushd $ANDROID_HOME1 >/dev/null 2>&1
echo "  ### PWD=$PWD"


if [ -z $ABTVM ];then export ABTVM=26   ABTVF=26.0.2; fi


#export ANDROID_HOME=$PWD/android-sdk-linux
export ANDROID_SDK=$ANDROID_HOME
export ZIPALIGN=$ANDROID_HOME/build-tools/$ABTVF/zipalign
export PATH=$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/build-tools/23.0.2:${PATH}


if [[ ! -e $ANDROID_HOME/tools/bin ]] || [[ ! -e $ANDROID_HOME/build-tools ]];then
#if [ 1 == 0 ];then
    echo "  ### installing android sdk to ANDROID_HOME=$ANDROID_HOME"

    # # adb
    # sudo apt-get install libc6:i386 libstdc++6:i386
    # # aapt
    # sudo apt-get install zlib1g:i386

    if [ $LOCAL_RUN != yes ];then
        mydo wget --quiet http://dl.google.com/android/android-sdk_r24.4-linux.tgz
        mydo tar -xvf android-sdk_r24.4-linux.tgz --mydo-tail-20
    fi

    if [ $LOCAL_RUN == yes ];then
        mydo sudo apt-get install android-tools-adb android-tools-fastboot

        ### https://androidsdkoffline.blogspot.ru/2016/06/how-to-install-android-sdk-offline.html
        mydo mkdir -p $ANDROID_HOME/temp
        mydo cd $ANDROID_HOME
        l=https://dl.google.com/android/repository/tools_r25.2.5-linux.zip; f=${l/*\/}
        if [ ! -f $f ];then mydo wget --quiet $l; if [ ! -f $f ];then mydo wget $l; fi; fi; mydo unzip -o $f --mydo-tail-5
        mydo cp -fr $f temp/

        #if [ $LOCAL_RUN == yes ];then mydo cp $ANDROID_HOME/../andro-install2/soft/temp/* .; fi

        ### Build-Tools 26.0.2, platform 26 r2
        cd temp
        fs="    https://dl.google.com/android/repository/build-tools_r25.0.2-linux.zip"
        #fs="    https://dl.google.com/android/repository/build-tools_r26.0.2-linux.zip"
        # fs="$fs https://dl.google.com/android/repository/platform-tools_r25.0.4-linux.zip"
        fs="$fs https://dl.google.com/android/repository/platform-tools_r27.0.1-linux.zip"

        fs="$fs https://dl.google.com/android/repository/android-19_r04.zip"
        fs="$fs https://dl.google.com/android/repository/sys-img/android/sysimg_armv7a-19_r03.zip"
        fs="$fs https://dl.google.com/android/repository/sys-img/android/sysimg_x86-19_r05.zip"
        # fs="$fs https://dl.google.com/android/repository/samples-19_r03.zip"
        fs="$fs https://dl.google.com/android/repository/sys-img/google_apis/armeabi-v7a-19_r23.zip"
        fs="$fs https://dl.google.com/android/repository/sys-img/google_apis/x86-19_r23.zip"
        fs="$fs https://dl.google.com/android/repository/google_apis-19_r09.zip"
        fs="$fs https://dl.google.com/android/repository/google_apis-19_r20.zip"
        # fs="$fs https://dl.google.com/android/repository/glass/google-gdk.zip"
        # fs="$fs https://dl.google.com/android/repository/sources-19_r02.zip"
        fs="$fs "
        for l in $fs;do
            f=${l/*\/}; if [ ! -f $f ];then mydo wget --quiet $l; if [ ! -f $f ];then mydo wget $l; fi; fi
        done
        mydo cd $ANDROID_HOME
    fi


    #android list sdk --extended # && android list sdk -a --extended

    # ANDROPACKS=tools,platform-tools,build-tools-$ABTVF,android-16,android-19,android-$ABTVM
    # ANDROPACKS=tools,platform-tools-27.0.1,build-tools-25.0.2,android-19
    ANDROPACKS=tools,platform-tools,build-tools-25.0.2,android-25
    ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | android update sdk -u -a -f -t ${ANDROPACKS}    #>/dev/null 2>&1

    ### Accept licenses:
    # - mkdir $ANDROID_HOME/licenses
    # - echo -e "\n8933bad161af4178b1185d1a37fbf41ea5269c55" > "$ANDROID_HOME/licenses/android-sdk-license"
    # - echo -e "\n84831b9409646a918e30573bab4c9c91346d8abd" > "$ANDROID_HOME/licenses/android-sdk-preview-license"

    # That requests us to accept a license for the sdkmanager, and then
    echo y | sdkmanager --update >/dev/null 2>&1
    # requests us to accept new licenses not previously accepted
    ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done ) | sdkmanager --licenses  >/dev/null 2>&1
else
    echo "  ### android sdk is already installed in ANDROID_HOME=$ANDROID_HOME"
fi

mydo ls $ANDROID_HOME

popd >/dev/null 2>&1
echo "  ### android_sdk_install finished"
echo "  ####################"
