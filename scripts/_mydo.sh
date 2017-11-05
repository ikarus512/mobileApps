# file: _mydo.sh
#/*
# Copyright 2017 ikarus512
# https://github.com/ikarus512/mobileApps
#
# DESCRIPTION: Definition of command-echo-and-run function
# AUTHOR: ikarus512
# CREATED: 2017/11/05
#
# MODIFICATION HISTORY
#  2017/11/05, ikarus512. Initial version.
#
#*/

#/**
# Function mydo
#
# Description
#   echo the given command
#   and run it
#
##########
#
# Usage example
#   mydo pwd; mydo tar -zcvf scripts.tar.gz ./scripts/ --mydo-tail-3
#
# Example output
#   ### pwd
#   /cygdrive/c/1/p/mobileApps
#   ### tar -zcvf scripts.tar.gz ./scripts/  | tail -n 3
#   ./scripts/deploy_heroku.sh
#   ./scripts/_github_api.sh
#   ./scripts/_mydo.sh
#
#*/
mydo () {
  local   n=$(echo $*|perl -e '$_=<>; if(m/^.*--mydo-tail-(\d*).*$/) { print $1; }')
  local cmd=$(echo $*|perl -e '$_=<>; s/--mydo-tail-\d*//g; print;')
  local exitcode
  if [ "$n" == "" ];then
    echo "### $cmd"
    $cmd
    return $?
  else
    echo "### $cmd | tail -n $n"
    #$cmd | tail -n $n                                      # It does not catch STDERR
    $cmd >mydo.tmp.log 2>&1; exitcode=$?; cat mydo.tmp.log | tail -n $n  # It catches STDERR
    return $exitcode
  fi
}
