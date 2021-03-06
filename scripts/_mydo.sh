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
  local acmd=$*
  local head_n=$(echo $acmd|perl -e '$_=<>; if(m/^.*--mydo-head-(\d+).*$/) { print $1; }')
  local tail_n=$(echo $acmd|perl -e '$_=<>; if(m/^.*--mydo-tail-(\d+).*$/) { print $1; }')
  local cmd=$(echo $acmd|perl -e '$_=<>; s/--mydo-(head|tail)-\d+//g; print;')
  local head_then_tail=$(echo $acmd|perl -e '$_=<>; if(m/^.*--mydo-head-(\d+).*--mydo-tail-(\d+).*$/) { print $1; }')
  local exitcode
  if [ "$tail_n" == "" -a "$head_n" == "" ];then
    echo "### $cmd"
    $cmd
    return $?
  elif [ "$head_n" == "" ];then
    echo "### $cmd | tail -n $tail_n"
   #$cmd | tail -n $tail_n                                      # It does not catch STDERR
    $cmd >mydo.tmp.log 2>&1; exitcode=$?; cat mydo.tmp.log | tail -n $tail_n  # It catches STDERR
    return $exitcode
  elif [ "$tail_n" == "" ];then
    echo "### $cmd | head -n $head_n"
    $cmd >mydo.tmp.log 2>&1; exitcode=$?; cat mydo.tmp.log | head -n $head_n
    return $exitcode
  elif [ "$head_then_tail" != "" ];then
    echo "### $cmd | head -n $head_n | tail -n $tail_n"
    $cmd >mydo.tmp.log 2>&1; exitcode=$?; cat mydo.tmp.log | head -n $head_n | tail -n $tail_n
    return $exitcode
  else #elif [ "$head_then_tail" == "" ];then
    echo "### $cmd | tail -n $tail_n | head -n $head_n"
    $cmd >mydo.tmp.log 2>&1; exitcode=$?; cat mydo.tmp.log | tail -n $tail_n | head -n $head_n
    return $exitcode
  fi
}
