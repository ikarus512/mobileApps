
# Cordova, Android platform guide
 https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html

# Install nodejs
 #sudo apt install -y nodejs # get latest from nodejs.org/en/download
 npm i -g npm


# Android distributions dashboard
 http://developer.android.com/about/dashboards/index.html

 Android 2.3.3 (Gingerbread) API 10
 Android 4.1 (Ice Cream sandwich) API 15
 Android 4.4 (KitKat) API 19
 Android 5.0 (Lollipop) API 21
 Android 6.0 (Marshmallow) API 23
 Android 7.0 (Nougat) API 24
 Android 8.0 (Oreo) API 26
 Android 8.1 (Oreo) API 27
 Android 9 (Pie) API 28


# Install Android SDK (now part of Android Studio)
 https://dl.google.com/dl/android/studio/ide-zips/3.5.1.0/android-studio-ide-191.5900203-linux.tar.gz
 and set ANDROID_HOME
 and add SDK Packages to support needed API level.
 Open the Android SDK Manager (Tools > SDK Manager in Android Studio, or sdkmanager on the command line),
 and make sure the following are installed:
    Android Platform SDK for your targeted version of Android
    Android SDK build-tools version 19.1.0 or higher
    Android Support Repository (found under the "SDK Tools" tab)

 See Android's documentation on Installing SDK Packages for more details.

# Install OpenJDK 8 build by AdoprOpenJDK
 https://adoptopenjdk.net (download and set JAVA_HOME)
 Or 'sudo apt install -y openjdk-8-jdk' install to /usr/bin ???

# Install gradle
 sudo apt install -y gradle

# Set environment
    Set the JAVA_HOME environment variable to the location of your JDK installation
    Set the ANDROID_HOME=ANDROID_SDK_ROOT environment variable to the location of your Android SDK installation
    It is also recommended that you add the Android SDK's tools, tools/bin, and platform-tools directories to your PATH


# cordova
 npm i -g cordova
cordova create myMobApp
cordova platform add android ### or cordova platform rm android; cordova platform add android@8
cordova plugin add cordova-plugin-bluetooth-serial
cordova platform add browser
cordova run
cordova run android --debug --device
cordova run browser
cordova build android --release ### run it several times in case of download problems
cordova run --emulator


# debug
  On the phone, enable Developer mode, enable USB debug mode, USB mode = MTP.
  Connect phone by usb, in chrome, open chrome://inspect/#devices
  Run: cordova run android --debug --device


# cordova-android (platform) versions
 cordova               cordova-android -- Android API -- Equivalent Android Version
 9.x.x (2019-Feb)  --  8.X.X           -- 19 - 28     -- 4.4 - 9.0.0
 ?.?.?             --  7.X.X           -- 19 - 27     -- 4.4 - 8.1
 ?.?.?             --  6.X.X           -- 16 - 26     -- 4.1 - 8.0.0
 ?.?.?             --  5.X.X           -- 14 - 23     -- 4.0 - 6.0.1
 ?.?.?             --  4.1.X           -- 14 - 22     -- 4.0 - 5.1
