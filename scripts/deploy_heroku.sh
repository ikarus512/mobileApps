#!/usr/bin/env bash

echo
echo "########################################"
echo "### deploy_heroku started"
pushd $WORK_DIR >/dev/null 2>&1
echo "### PWD=$PWD"
echo

# Env from .travis.yml:
if [ -z $APP      ]; then APP=learnLang; fi
if [ -z $DEBUGV   ]; then DEBUGV=; fi
if [ -z $OPT2     ]; then OPT2=; fi
if [ -z $APPNAME  ]; then APPNAME=$APP$OPT2; fi
if [ -z $RELEASES_DIR ]; then RELEASES_DIR=$PWD/../releases; fi
if [ -z $CLONE_DIR    ]; then CLONE_DIR=$PWD/../_tmp/mobileApps; fi

# ==============================================================================

HEROKU_APP=ikarus512-mobileapps
REPO=ikarus512/mobileApps

#if [ "$EXTRASTEP" == "deploy-heroku" ];then

    mkdir -p $WORK_DIR/_tmp
    cd $WORK_DIR/_tmp
    if [ ! -e $CLONE_DIR ];then
        git clone --depth=3 https://ikarus512:$GITHUB_API_TOKEN@github.com/$REPO.git || echo 1
    fi
    cd $CLONE_DIR
    git fetch

    npm install -g heroku-cli
    heroku --version

    echo "Host heroku.com"                >>~/.ssh/config
    echo "  StrictHostKeyChecking no"     >>~/.ssh/config
    echo "  CheckHostIP no"               >>~/.ssh/config
    echo "  UserKnownHostsFile=/dev/null" >>~/.ssh/config
    # echo "======= cat ~/.ssh/config"
    # cat ~/.ssh/config
    # echo "======="

    # # heroku login
    echo -e "" >~/.netrc
    echo -e -n "machine api.heroku.com\n  password $HEROKU_API_TOKEN\n  login $MYEMAIL\n" >>~/.netrc
    echo -e -n "machine git.heroku.com\n  password $HEROKU_API_TOKEN\n  login $MYEMAIL\n" >>~/.netrc
    # echo "======= cat ~/.netrc"
    # cat ~/.netrc
    # echo "======="

    # git remote add heroku https://git.heroku.com/$HEROKU_APP.git
    # git remote add heroku git@heroku.com:$HEROKU_APP.git
    # heroku keys:clear
    # yes | heroku keys:add
    echo "======= heroku login"
    { echo "$MYEMAIL"; sleep 3; echo "$HEROKU_API_TOKEN"; sleep 3; } | heroku login
    echo "======="

    echo "=======1"
    git remote add heroku https://git.heroku.com/$HEROKU_APP.git
    echo "=======2"
    git push heroku master
    echo "=======3"
    git remote add heroku1 git@heroku.com:$HEROKU_APP.git
    echo "=======4"
    git push heroku1 master
    echo "======="

#fi

popd >/dev/null 2>&1
echo "### deploy_heroku finished"
echo "########################################"
