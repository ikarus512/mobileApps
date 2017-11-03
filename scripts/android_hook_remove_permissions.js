#!/usr/bin/env node

if [ $TRAVIS_OS_NAME != $BLD_OS ];then exit 1; fi

//
// This hook removes specific permissions from the AndroidManifest.xml
// The AndroidManifest is re-generated during the prepare stage,
// so this must be run on the "after_prepare" hook.
//


// Configure the permissions to be forcefully removed.
// NOTE: These permissions will be removed regardless of how many plugins
//       require the permission. You can check the permission is only required
//       by the plugin you *think* needs it, by looking at the "count" shown in
//       your /plugins/android.json file.
//       If the count is more than 1, you should search through
//       the /plugins/<plugin-name>/plugin.xml files for <uses-permission> tags.

var permissionsToRemove = [
    "ACCESS_COARSE_LOCATION",
    "ACCESS_FINE_LOCATION",
    "CAMERA",
    "INTERNET",
    "MODIFY_AUDIO_SETTINGS",
    "READ_PHONE_STATE",
    "RECORD_AUDIO",
    "WRITE_EXTERNAL_STORAGE",
];


var fs = require('fs');
var path = require('path');
var rootdir = process.env.APP_DIR;
var manifestFile = path.join(rootdir, "platforms/android/AndroidManifest.xml");
var androidJsonFile = path.join(rootdir, "platforms/android/android.json");

console.log('=== Inside hook ' + process.argv[0] + ':');

fs.readFile( manifestFile, "utf8", function( err, data ) {
    if (err) { return console.log( err ); }

    var result = data;
    for (var i=0; i<permissionsToRemove.length; i++) {
        // <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
        var re_str = '<uses-permission android:name=\\"android.permission.' + permissionsToRemove[i] + '\\" />';
        var re = RegExp(re_str, 'g');
        if (result.search(re)) {
            console.log('    found:');
            console.log('        ' + re_str);
            console.log('        replacing...');
            result = result.replace(re, '');
        }
        if (result.search(re)) {
            console.log('        FAIL replacing failed');
        } else {
            console.log('        OK replacing passed');
        }
    }

    fs.writeFile( manifestFile, result, "utf8", function( err ) {
        if (err) { return console.log( err ); }
    });
});

////

fs.readFile( androidJsonFile, "utf8", function( err, data ) {
    if (err) { return console.log( err ); }

    var result = data;
    for (var i=0; i<permissionsToRemove.length; i++) {
        // <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
        // var re_str = '<uses-permission android:name=\\"android.permission.' + permissionsToRemove[i] + '\\" />';
        // "xml": "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
        var re_str = '<uses-permission android:name=\\"android.permission.' + permissionsToRemove[i] + '\\" />';

        var re = RegExp(re_str, 'g');
        if (result.search(re)) {
            console.log('    found:');
            console.log('        ' + re_str);
            console.log('        replacing...');
            result = result.replace(re, '');
        }
        if (result.search(re)) {
            console.log('        FAIL replacing failed');
        } else {
            console.log('        OK replacing passed');
        }
    }

    fs.writeFile( androidJsonFile, result, "utf8", function( err ) {
        if (err) { return console.log( err ); }
    });
});
