#!/usr/bin/env bash

if [ 1 == 1 ];then

echo
echo "  ####################"
echo "  ### android_check_permissions started"
#pushd $APPL_DIR >/dev/null 2>&1
echo "  ### PWD=$PWD"

echo "=== cordova platforms:"
ls $APPL_DIR/platforms
echo "=== cordova plugins:"
ls $APPL_DIR/plugins
echo "==="

if [ -f $ANDROID_MANIFEST ];then
    echo "=== fix android permissions:"
    mv -fv $ANDROID_MANIFEST $ANDROID_MANIFEST.old
    grep -v permission $ANDROID_MANIFEST.old >$ANDROID_MANIFEST
fi

ANDROID_JSON=$APPL_DIR/platforms/android/android.json
# if [ -f $ANDROID_JSON ];then
#     echo "=== fix android permissions JSON:"
#     mv -fv $ANDROID_JSON $ANDROID_JSON.old
# xed    grep -v permission $ANDROID_JSON.old >$ANDROID_JSON
#     ### "xml": "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
# fi

echo "=== $ANDROID_MANIFEST.old:"
if [ ! -f $ANDROID_MANIFEST.old ];then echo "    file absent"; else
grep permission $ANDROID_MANIFEST.old || echo "    (no matches found)"; fi

echo "=== $ANDROID_MANIFEST:"
if [ ! -f $ANDROID_MANIFEST ];then echo "    file absent"; else
grep permission $ANDROID_MANIFEST || echo "    (no matches found)"; fi

ANDROID_JSON1=$APPL_DIR/plugins/android.json
echo "=== $ANDROID_JSON1:"
if [ ! -f $ANDROID_JSON1 ];then echo "    file absent"; else
grep permission $ANDROID_JSON1 || echo "    (no matches found)"; fi

echo "=== $ANDROID_JSON:"
if [ ! -f $ANDROID_JSON ];then echo "    file absent"; else
grep permission $ANDROID_JSON || echo "    (no matches found)"; fi

rm -frv $ANDROID_MANIFEST.old || echo ""

#popd >/dev/null 2>&1
echo "  ### android_check_permissions finished"
echo "  ####################"

fi
