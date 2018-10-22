#!/bin/sh

if [[ -z "$IOS_KEY_PASSWORD" ]]; then
    echo "Error: Missing password for adding private key"
    exit 1
fi

security create-keychain -p travis ios-build.keychain

security import ./scripts/ios-certs-profile/apple.cer \
-k ~/Library/Keychains/ios-build.keychain \
-T /usr/bin/codesign

security import ./scripts/ios-certs-profile/dist.cer \
-k ~/Library/Keychains/ios-build.keychain \
-T /usr/bin/codesign

security import ./scripts/ios-certs-profile/dist.p12 \
-k ~/Library/Keychains/ios-build.keychain \
-P $IOS_KEY_PASSWORD \
-T /usr/bin/codesign

security set-keychain-settings -t 3600 \  
-l ~/Library/Keychains/ios-build.keychain

security default-keychain -s ios-build.keychain

mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles

cp "./scripts/ios-certs-profile/$IOS_PROFILE_NAME.mobileprovision" ~/Library/MobileDevice/Provisioning\ Profiles/
