#!/usr/bin/env bash

echo
echo "########################################"
echo "### create-installer-osx-x64 started"
echo "### PWD=$PWD"

### Create NW.JS-based distribution
### http://nwjs.io
### http://docs.nwjs.io/en/latest/For Users/Package and Distribute/

# wget https://dl.nwjs.io/v0.26.2/nwjs-v0.26.2-linux-ia32.tar.gz
# wget https://dl.nwjs.io/v0.26.2/nwjs-v0.26.2-linux-x64.tar.gz
# wget https://dl.nwjs.io/v0.26.2/nwjs-v0.26.2-osx-x64.zip
# wget https://dl.nwjs.io/v0.26.2/nwjs-v0.26.2-win-ia32.zip
# wget https://dl.nwjs.io/v0.26.2/nwjs-v0.26.2-win-x64.zip

v=0.26.2
sdk=; debug=; if [ "$DEBUGV" == "yes" ];then sdk="-sdk"; debug="-debug"; fi
oldd=nwjs$sdk-v$v-osx-x64
newd=learnLang-osx-x64$debug

if [ ! -f $oldd.zip ];then mydo wget --quiet https://dl.nwjs.io/v$v/$oldd.zip; fi
mydo unzip $oldd.zip --mydo-tail-20
mydo chmod -R +x $oldd
mydo mv -v $oldd $newd
    mydo echo Copy app files to nw folder
    mydo mkdir -p $newd/nwjs.app/Contents/Resources/app.nw
    mydo cp -fr ../www ./$newd/nwjs.app/Contents/Resources/app.nw/www/
    mydo cp -f  ../package.json ./$newd/nwjs.app/Contents/Resources/app.nw/
    mydo cp -f ../src/img/icon.icns ./$newd/nwjs.app/Contents/Resources/nw.icns
    #about panel:
    #Contents/Info.plist

    #mydo cp -f  $newd/nw.exe $newd/learnLang-start.exe


mydo ls -l $newd
###cd $newd; nw.exe . # run

### Create NSIS installation
### http://nsis.sourceforge.net/Docs

mydo tar -zcvf $newd.tar.gz $newd --mydo-tail-20

mydo mv -v $newd.tar.gz $RELEASES_DIR/

echo "### finished"
echo "########################################"
