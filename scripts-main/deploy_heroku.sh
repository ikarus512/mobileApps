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

cd $CLONE_DIR

# # Pushes to Heroku. This is forced so it will work even if the app is running.
# yes | git push heroku master -f

#git clone --depth=20 https://ikarus512:$GITHUB_API_TOKEN@github.com/$REPO.git $dir
#git remote add heroku git@heroku.com:$HEROKU_APP.git
#git remote add heroku https://ikarus512:$HEROKU_API_TOKEN@heroku.com:$HEROKU_APP.git
git remote add heroku https://ikarus512:$HEROKU_API_TOKEN@git.heroku.com/$HEROKU_APP.git
git push heroku master
