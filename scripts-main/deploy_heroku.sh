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
REPO=ikarus512/mobileApps

if [ "$EXTRASTEP" == "deploy" ];then

    mkdir -p $HOME_DIR/_tmp
    cd $HOME_DIR/_tmp
    if [ ! -e $CLONE_DIR ];then
        git clone --depth=3 https://ikarus512:$GITHUB_API_TOKEN@github.com/$REPO.git || echo 1
    fi
    cd $CLONE_DIR
    git fetch

    npm install -g heroku-cli
    heroku --version

    echo "Host heroku.com"                 >>~/.ssh/config
    echo "  StrictHostKeyChecking no"     >>~/.ssh/config
    echo "  CheckHostIP no"               >>~/.ssh/config
    echo "  UserKnownHostsFile=/dev/null" >>~/.ssh/config
    # heroku login
    echo -e -n "Host api.heroku.com\n  password $HEROKU_API_TOKEN\n  login $MYEMAIL" >>~/.netrc
    echo -e -n "Host git.heroku.com\n  password $HEROKU_API_TOKEN\n  login $MYEMAIL" >>~/.netrc
    echo -e -n     "Host heroku.com\n  password $HEROKU_API_TOKEN\n  login $MYEMAIL" >>~/.netrc

    git remote add heroku https://git.heroku.com/$HEROKU_APP.git
    git push heroku master
    # git remote add heroku https://git.heroku.com/$HEROKU_APP.git
    git remote add heroku git@heroku.com:$HEROKU_APP.git
    git push heroku master

fi
