#https://www.objc.io/issues/6-build-tools/travis-ci
openssl aes-256-cbc -k "$IOS_ENCRYPTION_SECRET" -in learnLang.mobileprovision -out learnLang.mobileprovision.enc -a
openssl aes-256-cbc -k "$IOS_ENCRYPTION_SECRET" -in dist.cer -out dist.cer.enc -a
openssl aes-256-cbc -k "$IOS_ENCRYPTION_SECRET" -in dist.p12 -out dist.p12.enc -a
