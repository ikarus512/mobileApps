#!/usr/bin/env bash

# file: _github_api.sh
# /*!
#  * Copyright 2017 ikarus512
#  * https://github.com/ikarus512/mobileApps
#  *
#  * DESCRIPTION: Functions to Publish GitHub Release with Binary Assets
#  * AUTHOR: ikarus512
#  * CREATED: 2017/08/07
#  *
#  * MODIFICATION HISTORY
#  *  2017/08/07, ikarus512. Initial version.
#  *
#  */

# sed doc: http://www.grymoire.com/Unix/Sed.html#uh-62f3
# gnu man: https://www.gnu.org/software/sed/manual/sed.txt
# osx man: https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/sed.1.html
#          https://ss64.com/osx/sed.html

# Env from .travis.yml:
if [ -z $APP      ]; then APP=learnLang; fi
if [ -z $DEBUGV   ]; then DEBUGV=; fi
if [ -z $OPT2     ]; then OPT2=; fi
if [ -z $APPNAME  ]; then APPNAME=$APP$OPT2; fi
if [ -z $RELEASES_DIR ]; then RELEASES_DIR=$PWD/../releases; fi
if [ -z $CLONE_DIR    ]; then CLONE_DIR=$PWD/../_tmp/mobileApps; fi

# ==============================================================================

cd $WORK_DIR

function githubReleaseCreate() {

    ### get params
    local REPO=$1; shift
    local tag="$1"; shift
    ### print params
    local func=${FUNCNAME[0]}
    echo "========================================"
    echo "====  function $func(REPO=$REPO, tag=$tag):"
    ### check params
    if [ "$REPO" == "" -o "$tag" == "" ];then
        echo -e "====  Error in $func parameters. Call example: $func username/repository v1.0.0"
        return 1
    fi
    ### global variables
    if [ "$GITHUB_API_TOKEN" == "" ];then echo "Error: GITHUB_API_TOKEN env var not defined."; return 1; fi
    ### local variables
    local URL_API payload res
    URL_API="--silent --location https://api.github.com/repos/$REPO/releases"
    payload=$(printf '{"tag_name": "%s", "target_commitish": "master", "name": "%s", "body": "Release of version %s", "draft": false, "prerelease": false}' $tag $tag $tag)

    echo "====    create release if not exists"
    res=$(curl -X POST --data "$payload" --header "Authorization: token $GITHUB_API_TOKEN" $URL_API)
    echo $res

}

function githubReleaseGetId() {

    ### get params
    local REPO=$1; shift
    local tag="$1"; shift
    ### print params
    local func=${FUNCNAME[0]}
    echo "========================================"
    echo "====  function $func(REPO=$REPO, tag=$tag): returns \$result == release id"
    ### check params
    if [ "$REPO" == "" -o "$tag" == "" ];then
        echo -e "====  Error in $func parameters.\n  Call example: $func username/repository v1.0.0"
        return 1
    fi
    ### global variables
    if [ "$GITHUB_API_TOKEN" == "" ];then echo "Error: GITHUB_API_TOKEN env var not defined."; return 1; fi
    ### local variables
    local URL_API payload res
    URL_API="--silent --location https://api.github.com/repos/$REPO/releases"
    payload=$(printf '{"tag_name": "%s", "target_commitish": "master", "name": "%s", "body": "Release of version %s", "draft": false, "prerelease": false}' $tag $tag $tag)
    ### global output: $result (release id)
    result=undefined

    echo "====    get release id"
    res=$(curl -X GET --data "$payload" --header "Authorization: token $GITHUB_API_TOKEN" $URL_API/tags/$tag)
    echo $res

    result=$(node -pe 'JSON.parse(process.argv[1]).id' "$res")

}

function githubReleaseUploadAsset() {

    ### get params
    local REPO=$1; shift
    local tag="$1"; shift
    local aFile="$1"; shift
    ### print params
    local func=${FUNCNAME[0]}
    echo "========================================"
    echo "====  function $func(REPO=$REPO, tag=$tag, file=$aFile):"
    ### check params
    if [ "$REPO" == "" -o "$tag" == "" -o "$aFile" == "" ];then
        echo -e "====  Error in $func parameters. Call example: $func username/repository v1.0.0 filePath"
        return 1
    fi
    if [ ! -e $aFile ];then echo not found $aFile; fi
    ### global variables
    if [ "$GITHUB_API_TOKEN" == "" ];then echo "Error: GITHUB_API_TOKEN env var not defined."; return 1; fi
    ### local variables
    local URL_UPL msg res release_id
    URL_UPL="--silent --location https://uploads.github.com/repos/$REPO/releases"

    ### get release id for the given tag
    githubReleaseGetId $REPO $tag >/dev/null; release_id=$result
    if [ "$release_id" == "" -o "$release_id" == "undefined" ];then
        echo "====  Error: release for tag=$tag not found"
        return 1
    fi
    echo "====  release_id==$release_id"

    # for aFile in $assets;do echo $aFile; errors=$(($errors+1)); done
    # if [ $errors -ne 0 ];then echo "====  Error: uploading assets failed"; return 1; fi

    ### upload asset
    res=$(curl -X POST \
        --header "Authorization: token $GITHUB_API_TOKEN" \
        --header "Content-Type: application/octet-stream" \
        --data-binary @"$aFile" \
        $URL_UPL/$release_id/assets?name=$(basename $aFile))
    echo $res
    msg=$(node -pe 'JSON.parse(process.argv[1]).message' "$res")
    if [ "$msg" != "undefined" ];then echo "Error in $func: could not upload asset $aFile"; return 1; fi

}

function githubReleaseDelete() {

    ### get params
    local REPO=$1; shift
    local tag="$1"; shift
    ### print params
    local func=${FUNCNAME[0]}
    echo "========================================"
    echo "====  function $func(REPO=$REPO, tag=$tag):"
    ### check params
    if [ "$REPO" == "" -o "$tag" == "" ];then
        echo -e "====  Error in $func parameters. Call example: $func username/repository v1.0.0"
        return 1
    fi
    ### global variables
    if [ "$GITHUB_API_TOKEN" == "" ];then echo "Error: GITHUB_API_TOKEN env var not defined."; return 1; fi
    ### local variables
    local URL_API res release_id
    URL_API="--silent --location https://api.github.com/repos/$REPO/releases"

    ### get release id for the given tag
    githubReleaseGetId $REPO $tag >/dev/null; release_id=$result
    if [ "$release_id" == "" -o "$release_id" == "undefined" ];then
        echo "====  Error: release for tag=$tag not found"
        return 1
    fi
    echo "====  release_id==$release_id"

    ### delete release
    res=$(curl -X DELETE --data "$payload" --header "Authorization: token $GITHUB_API_TOKEN" $URL_API/$release_id)
    echo $res code=$?

}

function cloneRepo() {
    local REPO=$1
    local dir=$2
    if [ ! -d $dir ];then
        echo git clone --depth=20 https://ikarus512:$GITHUB_API_TOKEN@github.com/$REPO.git $dir
        git clone --depth=20 https://ikarus512:$GITHUB_API_TOKEN@github.com/$REPO.git $dir
        # pushd $dir
        #     git config --global user.email "travis@travis-ci.org"
        #     git config --global user.name "Travis CI"
        #     git config user.email "$MYEMAIL"
        #     git config user.name "ikarus512"
        #     git remote rm origin
        #     git remote add origin https://ikarus512:${GITHUB_API_TOKEN}@github.com/ikarus512/mobileApps
        #     git remote -v
        # popd
    fi
    pushd $CLONE_DIR >/dev/null
        git fetch
        git pull
    popd >/dev/null
}

function getPackageVersion() {
    result=$(sed -nE 's/^[ \t]*"version": "([0-9]{1,}\.[0-9]{1,}\.[0-9x]{1,})",$/\1/p' $WORK_DIR/package.json)
}

function getLatestTag() {
    local REPO=$1
    cloneRepo $REPO $CLONE_DIR
    pushd $CLONE_DIR >/dev/null
        result=$(git describe --tags | sed -E 's/^v([0-9]{1,}\.[0-9]{1,}\.[0-9]{1,}).*$/\1/g')
    popd >/dev/null
}

function getLatestBuildNumber() {
    local REPO=$1
    cloneRepo $REPO $CLONE_DIR
    result=$(sed -nE 's/^[ \t]*"travisBuildNumber": "([0-9]{1,})",$/\1/p' $CLONE_DIR/package.json)
}

function getNewTagBumped() {

    curVer=$1; shift
    tagVer=$1; shift

    ### Create a git tag of the new version to use
    ### http://phdesign.com.au/programming/auto-increment-project-version-from-travis
    # echo "=== Current major/minor version taken from package.json:"
        curMjMn=$(echo $curVer | sed -nE 's/^([0-9]{1,}\.[0-9]{1,}\.)([0-9x]{1,})$/\1/p')
        curPv=$(echo $curVer | sed -nE 's/^([0-9]{1,}\.[0-9]{1,}\.)([0-9x]{1,})$/\2/p')
        # echo curMjMn=$curMjMn
        # echo curPv=$curPv
    # echo "=== Get the latest git tag (e.g. v1.2.43)"
        # echo $tagVer
    # echo "=== Get tag major/minor version and the patch version:"
        tagMjMn=$(echo $tagVer | sed -E 's/^([0-9]{1,}\.[0-9]{1,}\.)([0-9]{1,}).*$/\1/g')
        tagPv=$(echo $tagVer | sed -E 's/^([0-9]{1,}\.[0-9]{1,}\.)([0-9]{1,}).*$/\2/g')
        if [ "$tagMjMn" == "" ];then tagMjMn=$curMjMn; tagPv=$curPv; fi # if current commit not tagged
        # echo tagMjMn=$tagMjMn
        # echo tagPv=$tagPv
    # echo "=== If curMjMn==tagMjMn, increment the patch version, otherwise use major.minor.0:"
        if [ "$curMjMn" == "$tagMjMn" ];then newPv=$(($tagPv+1)); else newPv=0; fi
        newVer=$curMjMn$newPv
        # echo newVer=$newVer
    result=$newVer

}

function githubTagAndPublishRelease() {

    ### get params
    local REPO=$1; shift
    ### print params
    local func=${FUNCNAME[0]}
    echo "========================================"
    echo "====  function $func(REPO=$REPO):"
    ### check params
    if [ "$REPO" == "" ];then
        echo -e "====  Error in $func parameters. Call example: $func username/repository"
        return 1
    fi
    ### global variables
    if [ "$GITHUB_API_TOKEN" == "" ];then echo "Error: GITHUB_API_TOKEN env var not defined."; return 1; fi
    ### local variables
    local errors res release_id
    errors=0

    ### Running from Travis CI:
    ### if [ "$TRAVIS_BUILD_NUMBER" != "" ];then
    ###     if [ "$TRAVIS_BUILD_NUMBER" != "$latestBuildNumber" ];then
    ###         echo $TRAVIS_BUILD_NUMBER --> package.json
    ###         bump package version
    ###         git tag, commit, push
    ###     getLatestTag
    ###         create github release
    ###         add assets
    ###         ?remove previous release

    if [ "$TRAVIS_BUILD_NUMBER" != "" ];then

        echo "=== thisBuildNumber=$TRAVIS_BUILD_NUMBER"
        getLatestBuildNumber $REPO; latestBuildNumber=$result; echo "=== latestBuildNumber=$latestBuildNumber"

        if [ "$TRAVIS_BUILD_NUMBER" != "$latestBuildNumber" ];then

            echo "### update travisBuildNumber in package.json"
            mydo "pushd $CLONE_DIR"
            mydo echo sed run
            if [ $TRAVIS_OS_NAME == linux ];then
                sed -E --in-place "s#(^\s*\"travisBuildNumber\": \")[0-9]+(\".*$)#\1${TRAVIS_BUILD_NUMBER}\2#" ./package.json
            else # osx
                mydo "echo TRAVIS_BUILD_NUMBER=$TRAVIS_BUILD_NUMBER"
                mydo cat ./package.json --mydo-head-4 --mydo-tail-2

                perl -pe 's/(^ *"travisBuildNumber": ")[0-9]+(".*$)/$1$ENV{"TRAVIS_BUILD_NUMBER"}$2/g;' package.json >package.json.bak
                mydo cat ./package.json.bak --mydo-head-4 --mydo-tail-2
                mydo mv -fv package.json.bak package.json

                mydo cat ./package.json --mydo-head-4 --mydo-tail-2
                mydo git diff ./package.json
                mydo git status
                mydo git diff
                mydo ls -l

                    mydo perl --version
                    mydo perl --help
            fi
            mydo "popd"
            if [ $errors -ne 0 ];then echo "Error in $func"; return 1; fi

            # bump package version
            getPackageVersion; packageVersion=$result; echo "=== packageVersion=$packageVersion"
            getLatestTag $REPO; latestTag=$result; echo "=== latestTag=$latestTag"
            getNewTagBumped $packageVersion $latestTag; newTag=$result; echo "=== newTag=$newTag"

            # git tag, commit, push
            pushd $CLONE_DIR >/dev/null
                ### echo "=== Save newVer into a git tag (e.g. v1.2.44):"
                ###     git tag -a v$newVer -m "[ci skip] (Travis Build #$TRAVIS_BUILD_NUMBER): add tag v$newVer"
                # echo "=== Bump version to $newVer inside package.json, commit, and tag"
                if [ "$TRAVIS_BUILD_NUMBER" == "" ];then
                    npm version $newVer -m "[ci skip]: bumped tag v$newVer" || errors=$(($errors+1))
                else
                    npm version $newVer --force -m "[ci skip] (Travis Build #$TRAVIS_BUILD_NUMBER): bumped tag v$newVer" || errors=$(($errors+1))
                fi
                # echo "=== git push"
                if [ $errors -eq 0 ];then
                    git push origin master --tags || errors=$(($errors+1))
                fi
            popd >/dev/null
            if [ $errors -ne 0 ];then echo "Error in $func"; return 1; fi

        fi

        getLatestTag $REPO; latestTag=$result; echo "=== latestTag=$latestTag"
        githubReleaseCreate $REPO v$latestTag
        mydo echo "APP.TARGET_OS.DEBUGV.OPT2 == $APP.$TARGET_OS.$DEBUGV.$OPT2"
        case $APP.$TARGET_OS.$DEBUGV.$OPT2 in
        learnLang.android.*.*)
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-android-debug.apk # if no crosswalk used (just 1 version produced)
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-android-armv7-debug.apk # if crosswalk used (armv7/x86 versions produced)
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-android-x86-debug.apk   # if crosswalk used (armv7/x86 versions produced)
            #release
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-android.apk
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-android-armv7.apk
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-android-x86.apk
            ;;
        learnLang.linux-win.*.)
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-linux-ia32-debug.tar.gz
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-linux-x64-debug.tar.gz
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-win-ia32-debug-setup.exe
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-win-x64-debug-setup.exe
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-linux-ia32.tar.gz
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-linux-x64.tar.gz
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-win-ia32-setup.exe
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-win-x64-setup.exe
            ;;
        learnLang.osx.*.)
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-osx-x64-debug.tar.gz
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-osx-x64.tar.gz
            ;;

        puzzle15.android.*.)
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-android.apk
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-android-debug.apk
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-android-armv7-debug.apk
            githubReleaseUploadAsset $REPO v$latestTag $RELEASES_DIR/$APPNAME-android-x86-debug.apk
            ;;

        esac

    fi

}
