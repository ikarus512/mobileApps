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

wget https://dl.nwjs.io/v$v/nwjs$sdk-v$v-win-ia32.zip
unzip nwjs$sdk-v$v-win-ia32.zip
chmod 777 -R nwjs$sdk-v$v-win-ia32
mv nwjs$sdk-v$v-win-ia32 learnLang-win32
cp -fr ../src ./learnLang-win32/src/
cp -f  ../package.json ./learnLang-win32/
cp -f  learnLang-win32/nw.exe learnLang-win32/learnLang-start.exe
###cd learnLang-win32; nw.exe . # run

### Create NSIS installation
### http://nsis.sourceforge.net/Docs

../node_modules/.bin/makensis-cli compile ./create-installer-win32-nsis-nwjs.nsi >create-installer-win32-nsis-nwjs.out.txt 2>&1
cat create-installer-win32-nsis-nwjs.out.txt
../node_modules/.bin/makensis compile ./create-installer-win32-nsis-nwjs.nsi >create-installer-win32-nsis-nwjs.out.txt 2>&1
cat create-installer-win32-nsis-nwjs.out.txt
makensis compile ./create-installer-win32-nsis-nwjs.nsi >create-installer-win32-nsis-nwjs.out.txt 2>&1
cat create-installer-win32-nsis-nwjs.out.txt
mv learnLang-win32-setup.exe ../../../releases