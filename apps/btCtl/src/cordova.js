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

cordova.plugins.permissions.BLUETOOTH = "BLUETOOTH";
cordova.plugins.permissions.BLUETOOTH_ADMIN = "BLUETOOTH_ADMIN";
cordova.plugins.permissions.ACCESS_COARSE_LOCATION = "ACCESS_COARSE_LOCATION";
cordova.plugins.permissions.RECORD_AUDIO = "RECORD_AUDIO";
cordova.plugins.permissions.MODIFY_AUDIO_SETTINGS = "MODIFY_AUDIO_SETTINGS";
cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE = "WRITE_EXTERNAL_STORAGE";
cordova.plugins.permissions.READ_PHONE_STATE = "READ_PHONE_STATE";




var bluetoothSerial = {
    list: () => { console.log('### bluetoothSerial.list()'); },
    connect: () => { console.log('### bluetoothSerial.connect()'); },
    write: () => { console.log('### bluetoothSerial.write()'); },
};
