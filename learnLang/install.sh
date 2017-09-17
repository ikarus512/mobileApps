#!/usr/bin/env bash

npm i

chmod -R +x hooks

if [ ! -e platforms/android ];then

    cordova prepare || exit 1
    # cordova prepare --verbose || exit 1

    cordova platform add android || exit 1

fi
