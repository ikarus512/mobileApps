#!/usr/bin/env bash

echo
echo "########################################"
echo "### deploy_github_releases started"
pushd $WORK_DIR >/dev/null 2>&1
echo "### PWD=$PWD"
echo

source $WORK_DIR/scripts/_github_api.sh

echo "=== ls -l $RELEASES_DIR:"
ls -l $RELEASES_DIR
echo "=== ls"
githubTagAndPublishRelease ikarus512/mobileApps

#git fetch origin; git merge --no-edit -m "[ci skip] merge branch 'master' of github.com:ikarus512/mobileApps"; git add -A; git commit -m "deploy experiments: tag"; git push origin master

popd >/dev/null 2>&1
echo "### deploy_github_releases finished"
echo "########################################"
