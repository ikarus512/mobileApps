// This file will not be used in real mobile app.
// Just stub for testing purpose, used in browser.
var cordova = cordova || {};
cordova.plugins = cordova.plugins || {};
cordova.plugins.permissions = cordova.plugins.permissions || {};

cordova.plugins.permissions.hasPermission = function(list, success, error) {
    console.log("### in function hasPermission, list=", list);
    success(true);
    success(false);
    error();
};

cordova.plugins.permissions.requestPermissions = function(list, success, error) {
    console.log("### in function requestPermissions, list=", list);
    success(true);
    success(false);
    error();
};
