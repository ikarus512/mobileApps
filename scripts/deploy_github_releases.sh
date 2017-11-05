#!/usr/bin/env bash

echo
echo "########################################"
echo "### deploy_github_releases started"
pushd $WORK_DIR >/dev/null 2>&1
echo "### PWD=$PWD"
echo

. $WORK_DIR/scripts/_github_api.sh

mydo ls -l $RELEASES_DIR
mydo githubTagAndPublishRelease ikarus512/mobileApps

#git fetch origin; git merge --no-edit -m "[ci skip] merge branch 'master' of github.com:ikarus512/mobileApps"; git add -A; git commit -m "deploy experiments: tag"; git push origin master

popd >/dev/null 2>&1
echo "### deploy_github_releases finished"
echo "########################################"
