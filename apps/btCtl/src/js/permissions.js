/* jshint quotmark: false, unused: vars, browser: true */
/* global cordova, console, $, bluetoothSerial, _, refreshButton, deviceList, previewColor, red, green, blue, disconnectButton, connectionScreen, colorScreen, rgbText, messageDiv */
'use strict';

var a = a || {};
a.permissions = a.permissions || {};
a.permissions.plugin = a.permissions.plugin ||
    cordova && cordova.plugins && cordova.plugins.permissions ||
    {
        BLUETOOTH: "BLUETOOTH",
        BLUETOOTH_ADMIN: "BLUETOOTH_ADMIN",
        ACCESS_COARSE_LOCATION: "ACCESS_COARSE_LOCATION",
        RECORD_AUDIO: "RECORD_AUDIO",
        MODIFY_AUDIO_SETTINGS: "MODIFY_AUDIO_SETTINGS",
        WRITE_EXTERNAL_STORAGE: "WRITE_EXTERNAL_STORAGE",
        READ_PHONE_STATE: "READ_PHONE_STATE",

        hasPermission: function(list, success, error) {
            console.log("### in function hasPermission, list=", list);
            success(true);
            success(false);
            error();
        },

        requestPermissions: function(list, success, error) {
            console.log("### in function requestPermissions, list=", list);
            success(true);
            success(false);
            error();
        },

        checkPermission: function(list, success, error) {
            console.log("### in function checkPermission, list=", list);
            success(true);
            success(false);
            error();
        },
    
    };

a.permissions.list = [
        ////permissions.CAMERA,
        ////permissions.GET_ACCOUNTS
        // "android.permission.BLUETOOTH",
        // "android.permission.BLUETOOTH_ADMIN",
        // "android.permission.ACCESS_COARSE_LOCATION",
        a.permissions.plugin.BLUETOOTH,
        a.permissions.plugin.BLUETOOTH_ADMIN,
        a.permissions.plugin.ACCESS_COARSE_LOCATION,
        // cordova.plugins.permissions.RECORD_AUDIO,
        // cordova.plugins.permissions.MODIFY_AUDIO_SETTINGS,
        // cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE,
        // cordova.plugins.permissions.READ_PHONE_STATE,
    ];

a.permissions.check = function() {
        console.log("### in function check");
        a.permissions.plugin.checkPermission(a.permissions.list, (status) => {
            if( !status.hasPermission ) {
                a.permissions.plugin.requestPermissions(
                    a.permissions.list,
                    (status) => {
                        if( !status.hasPermission ) a.permissions.error("error requestPermissions hasPermission");
                    },
                    a.permissions.error.bind(null,"requestPermissions failed"));
            }
        }, a.permissions.error.bind(null,"hasPermission failed"));
    };

a.permissions.error = function(str) {
        console.log(str);
};

a.permissions.success = function(status) {
        console.log("status = ", status);
};
