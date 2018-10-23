#!/bin/sh

if [[ -z "$IOS_KEY_PASSWORD" ]]; then
    echo "Error: Missing password for adding private key"
    exit 1
fi

# Create a custom keychain
security create-keychain -p travis ios-build.keychain

    # Make the custom keychain default, so xcodebuild will use it for signing
    security default-keychain -s ios-build.keychain

    # Unlock the keychain
    security unlock-keychain -p travis ios-build.keychain

# Add certificates to keychain and allow codesign to access them
security import ./scripts/ios-certs-profile/AppleWWDRCA.cer \
-k ~/Library/Keychains/ios-build.keychain \
-T /usr/bin/codesign

security import ./scripts/ios-certs-profile/dist.cer \
-k ~/Library/Keychains/ios-build.keychain \
-T /usr/bin/codesign

security import ./scripts/ios-certs-profile/dist.p12 \
-k ~/Library/Keychains/ios-build.keychain \
-P $IOS_KEY_PASSWORD \
-T /usr/bin/codesign

# Set keychain timeout to 1 hour for long builds
# see http://www.egeek.me/2013/02/23/jenkins-and-xcode-user-interaction-is-not-allowed/
security set-keychain-settings -t 3600 \
-l ~/Library/Keychains/ios-build.keychain

security default-keychain -s ios-build.keychain

mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
cp "./scripts/ios-certs-profile/$IOS_PROFILE_NAME.mobileprovision" ~/Library/MobileDevice/Provisioning\ Profiles/
