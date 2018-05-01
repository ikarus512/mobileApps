#!/usr/bin/env bash

echo
echo "########################################"
echo "### before_install started"
pushd $APPL_DIR >/dev/null 2>&1
echo "### PWD=$PWD"

#mydo ls -l
rm -fr platforms plugins www

popd >/dev/null 2>&1
echo "### before_install finished"
echo "########################################"
