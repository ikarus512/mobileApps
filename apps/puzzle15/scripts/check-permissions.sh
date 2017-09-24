#!/usr/bin/env bash

ls platforms
ls plugins

mv -fv $ANDROID_MANIFEST $ANDROID_MANIFEST.old
echo "Android app permissions old ($ANDROID_MANIFEST):"
grep    permission $ANDROID_MANIFEST.old || echo "    (no matches found)"
grep -v permission $ANDROID_MANIFEST.old >$ANDROID_MANIFEST
echo "Android app permissions new ($ANDROID_MANIFEST):"
grep    permission $ANDROID_MANIFEST || echo "    (no matches found)"
