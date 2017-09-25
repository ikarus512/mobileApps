#!/usr/bin/env bash

echo "=== platforms:"
ls $APP_DIR/platforms
echo "=== plugins:"
ls $APP_DIR/plugins
echo "==="

if [ -f $ANDROID_MANIFEST ];then
    echo "=== fix android permissions:"
    mv -fv $ANDROID_MANIFEST $ANDROID_MANIFEST.old
    grep -v permission $ANDROID_MANIFEST.old >$ANDROID_MANIFEST
fi

echo "=== $ANDROID_MANIFEST.old:"
if [ ! -f $ANDROID_MANIFEST.old ];then echo "    file absent"; fi
grep    permission $ANDROID_MANIFEST.old || echo "    (no matches found)"

echo "=== $ANDROID_MANIFEST:"
if [ ! -f $ANDROID_MANIFEST ];then echo "    file absent"; fi
grep    permission $ANDROID_MANIFEST || echo "    (no matches found)"

echo "=== $APP_DIR/plugins/android.json:"
if [ ! -f $APP_DIR/plugins/android.json ];then echo "    file absent"; fi
grep    permission $APP_DIR/plugins/android.json || echo "    (no matches found)"

echo "=== $APP_DIR/platforms/android/android.json:"
if [ ! -f $APP_DIR/platforms/android/android.json ];then echo "    file absent"; fi
grep    permission $APP_DIR/platforms/android/android.json || echo "    (no matches found)"

rm -frv $ANDROID_MANIFEST.old
