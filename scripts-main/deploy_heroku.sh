#!/usr/bin/env bash

# Env from .travis.yml:
if [ -z $APP      ]; then APP=learnLang; fi
if [ -z $PLAT     ]; then PLAT=android; fi
if [ -z $OPT1     ]; then OPT1=debug; fi
if [ -z $OPT2     ]; then PLAT=Full; fi
if [ -z $APPNAME  ]; then APPNAME=$APP$OPT2; fi
if [ -z $RELEASES_DIR ]; then RELEASES_DIR=$PWD/../releases; fi
if [ -z $CLONE_DIR    ]; then CLONE_DIR=$PWD/../_tmp/mobileApps; fi

# ==============================================================================

HEROKU_APP=ikarus512-mobileApps

if [ $APP == deploy ];then
    cd $HOME_DIR
    mkdir -p _tmp
    cd _tmp
    git clone --depth=3 https://ikarus512:$GITHUB_API_TOKEN@github.com/$REPO.git
    cd $CLONE_DIR

    echo "Host git.heroku.com"           >>~/.netrc
    echo "   password $HEROKU_API_TOKEN" >>~/.netrc
    echo "   login $MYEMAIL"             >>~/.netrc

    git remote add heroku https://git.heroku.com/$HEROKU_APP.git
    git push heroku master
fi
