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
oldd=nwjs$sdk-v$v-osx-x64
newd=learnLang-osx-x64

if [ ! -f $oldd.zip ];then mydo wget --quiet https://dl.nwjs.io/v$v/$oldd.zip; fi
mydo unzip $oldd.zip --mydo-tail-20
mydo chmod -R +x $oldd
    mydo ls -l $oldd
mydo mv -v $oldd $newd
mydo cp -fr ../www ./$newd/www/
mydo cp -f  ../package.json ./$newd/
    mydo ls -l
    mydo ls -l $newd
    mydo ls -l $oldd
# cp -f  $newd/nw.exe $newd/learnLang-start.exe
###cd $newd; nw.exe . # run

### Create NSIS installation
### http://nsis.sourceforge.net/Docs

# ../node_modules/.bin/makensis-cli compile ./create-installer-osx-x64-nsis-nwjs.nsi >create-installer-osx-x64-nsis-nwjs.out.txt 2>&1
# cat create-installer-osx-x64-nsis-nwjs.out.txt
mydo tar -zcvf $newd.tar.gz $newd --mydo-tail-20
mydo mv -v $newd.tar.gz $RELEASES_DIR/
