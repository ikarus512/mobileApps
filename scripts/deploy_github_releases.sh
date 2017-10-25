#!/usr/bin/env bash

cd $HOME_DIR
source $HOME_DIR/scripts/_github_api.sh

echo "=== ls -l $RELEASES_DIR:"
ls -l $RELEASES_DIR
echo "=== ls"
githubTagAndPublishRelease ikarus512/mobileApps

#git fetch origin; git merge --no-edit -m "[ci skip] merge branch 'master' of github.com:ikarus512/mobileApps"; git add -A; git commit -m "deploy experiments: tag"; git push origin master
