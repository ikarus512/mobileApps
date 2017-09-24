#!/usr/bin/env bash

echo "=== platforms:"
ls $APP_DIR/platforms
echo "=== plugins:"
ls $APP_DIR/plugins
echo "==="

# mv -fv $ANDROID_MANIFEST $ANDROID_MANIFEST.old
# echo "Android app permissions old ($ANDROID_MANIFEST):"
# grep    permission $ANDROID_MANIFEST.old || echo "    (no matches found)"
# grep -v permission $ANDROID_MANIFEST.old >$ANDROID_MANIFEST
# echo "Android app permissions new ($ANDROID_MANIFEST):"
# grep    permission $ANDROID_MANIFEST || echo "    (no matches found)"

echo "Android app permissions ($ANDROID_MANIFEST):"
grep    permission $ANDROID_MANIFEST || echo "    (no matches found)"
