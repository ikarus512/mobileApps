#!/bin/sh

if [[ -z "$IOS_KEY_PASSWORD" ]]; then
    echo "Error: Missing password for adding private key"
    exit 1
fi

# Create a custom keychain
mydo security create-keychain -p travis ios-build.keychain #|| exit 1

    # Make the custom keychain default, so xcodebuild will use it for signing
    mydo security default-keychain -s ios-build.keychain #|| exit 1

    # Unlock the keychain
    mydo security unlock-keychain -p travis ios-build.keychain #|| exit 1

# Add certificates to keychain and allow codesign to access them
mydo security import ./scripts/ios-certs-profile/AppleWWDRCA.cer \
-k ~/Library/Keychains/ios-build.keychain \
-T /usr/bin/codesign #|| exit 1

mydo security import ./scripts/ios-certs-profile/dist.cer \
-k ~/Library/Keychains/ios-build.keychain \
-T /usr/bin/codesign #|| exit 1

mydo security import ./scripts/ios-certs-profile/dist.p12 \
-k ~/Library/Keychains/ios-build.keychain \
-P $IOS_KEY_PASSWORD \
-T /usr/bin/codesign #|| exit 1

# Set keychain timeout to 1 hour for long builds
# see http://www.egeek.me/2013/02/23/jenkins-and-xcode-user-interaction-is-not-allowed/
mydo security set-keychain-settings -t 3600 \
-l ~/Library/Keychains/ios-build.keychain #|| exit 1

mydo security default-keychain -s ios-build.keychain || exit 1

mydo mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
mydo cp -v "./scripts/ios-certs-profile/$IOS_PROFILE_NAME.mobileprovision" ~/Library/MobileDevice/Provisioning\ Profiles/
