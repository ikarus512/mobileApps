#!/usr/bin/env bash

echo "=== platforms:"
ls $APP_DIR/platforms
echo "=== plugins:"
ls $APP_DIR/plugins
echo "==="

if [ ! -f $ANDROID_MANIFEST.old ];then
    mv -fv $ANDROID_MANIFEST $ANDROID_MANIFEST.old
    grep -v permission $ANDROID_MANIFEST.old >$ANDROID_MANIFEST
fi

if [ -f $ANDROID_MANIFEST.old ];then
    echo "=== $ANDROID_MANIFEST.old:"
    grep    permission $ANDROID_MANIFEST.old || echo "    (no matches found)"

    echo "=== $ANDROID_MANIFEST:"
    grep    permission $ANDROID_MANIFEST || echo "    (no matches found)"
fi

if [ -f $APP_DIR/plugins/android.json ];then
    echo "=== $APP_DIR/plugins/android.json:"
    grep    permission $APP_DIR/plugins/android.json -C 2 || echo "    (no matches found)"
fi

if [ -f $APP_DIR/platforms/android/android.json ];then
    echo "=== $APP_DIR/platforms/android/android.json:"
    grep    permission $APP_DIR/platforms/android/android.json -C 2 || echo "    (no matches found)"
fi
