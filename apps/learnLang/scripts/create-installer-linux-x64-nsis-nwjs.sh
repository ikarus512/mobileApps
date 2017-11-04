#!/usr/bin/env bash

### Create NW.JS-based distribution
### http://nwjs.io
### http://docs.nwjs.io/en/latest/For Users/Package and Distribute/

# wget https://dl.nwjs.io/v0.26.2/nwjs-v0.26.2-linux-ia32.tar.gz
# wget https://dl.nwjs.io/v0.26.2/nwjs-v0.26.2-linux-x64.tar.gz
# wget https://dl.nwjs.io/v0.26.2/nwjs-v0.26.2-osx-x64.zip
# wget https://dl.nwjs.io/v0.26.2/nwjs-v0.26.2-win-ia32.zip
# wget https://dl.nwjs.io/v0.26.2/nwjs-v0.26.2-win-x64.zip

v=0.26.2
flavor=release; sdk=
#flavor=debug; sdk=-sdk

if [ ! -f nwjs$sdk-v$v-linux-x64.tar.gz ];then wget --quiet https://dl.nwjs.io/v$v/nwjs$sdk-v$v-linux-x64.tar.gz; fi
tar -xvzf nwjs$sdk-v$v-linux-x64.tar.gz | tail -n 20
chmod 777 -R nwjs$sdk-v$v-linux-x64
mv nwjs$sdk-v$v-linux-x64 learnLang-linux-x64
cp -fr ../www ./learnLang-linux-x64/www/
cp -f  ../package.json ./learnLang-linux-x64/
 echo ls learnLang-linux-x64:
 ls -l learnLang-linux-x64
# cp -f  learnLang-linux-x64/nw.exe learnLang-linux-x64/learnLang-start.exe
###cd learnLang-linux-x64; nw.exe . # run

### Create NSIS installation
### http://nsis.sourceforge.net/Docs

# ../node_modules/.bin/makensis-cli compile ./create-installer-linux-x64-nsis-nwjs.nsi >create-installer-linux-x64-nsis-nwjs.out.txt 2>&1
# cat create-installer-linux-x64-nsis-nwjs.out.txt
tar -zcvf learnLang-linux-x64.tar.gz learnLang-linux-x64 | tail -n 20
mv learnLang-linux-x64.tar.gz $RELEASES_DIR
