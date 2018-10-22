#!/bin/sh

if [[ -z "$IOS_ENCRYPTION_SECRET" ]]; then  
    echo "Error: Missing encryption secret."
    exit 1
fi

if [[ -z "$IOS_PROFILE_NAME" ]]; then  
    echo "Error: Missing provision profile name"
    exit 1
fi

if [[ ! -e "./scripts/ios-certs-profile/$IOS_PROFILE_NAME.mobileprovision.enc" ]]; then  
    echo "Error: Missing encrypted provision profile"
    exit 1
fi

if [[ ! -e "./scripts/ios-certs-profile/dist.cer.enc" ]]; then  
    echo "Error: Missing encrypted distribution cert."
    exit 1
fi

if [[ ! -e "./scripts/ios-certs-profile/dist.p12.enc" ]]; then  
    echo "Error: Missing encrypted private key."
    exit 1
fi

openssl aes-256-cbc \  
-k "$IOS_ENCRYPTION_SECRET" \
-in "./scripts/ios-certs-profile/$IOS_PROFILE_NAME.mobileprovision.enc" -d -a \
-out "./scripts/ios-certs-profile/$IOS_PROFILE_NAME.mobileprovision"

openssl aes-256-cbc \  
-k "$IOS_ENCRYPTION_SECRET" \
-in "./scripts/ios-certs-profile/dist.cer.enc" -d -a \
-out "./scripts/ios-certs-profile/dist.cer"

openssl aes-256-cbc \  
-k "$IOS_ENCRYPTION_SECRET" \
-in "./scripts/ios-certs-profile/dist.p12.enc" -d -a \
-out "./scripts/ios-certs-profile/dist.p12"
