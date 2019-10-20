/* jshint quotmark: false, unused: vars, browser: true */
/* global cordova, console, $, bluetoothSerial, _, refreshButton, deviceList, previewColor, red, green, blue, disconnectButton, connectionScreen, colorScreen, rgbText, messageDiv */
'use strict';

var a = a || {};

a.permissions = {
    plugin : cordova.plugins.permissions,
    list : [
        ///permissions.CAMERA,
        //permissions.GET_ACCOUNTS
        cordova.plugins.permissions.BLUETOOTH,
        cordova.plugins.permissions.BLUETOOTH_ADMIN,
        cordova.plugins.permissions.ACCESS_COARSE_LOCATION,
        // cordova.plugins.permissions.RECORD_AUDIO,
        // cordova.plugins.permissions.MODIFY_AUDIO_SETTINGS,
        // cordova.plugins.permissions.WRITE_EXTERNAL_STORAGE,
        // cordova.plugins.permissions.READ_PHONE_STATE,
    ],
    check: function() {
        console.log("### in function check");
        this.plugin.hasPermission(this.list, (status) => {
            if( !status.hasPermission ) {
                this.plugin.requestPermissions(
                    this.list,
                    (status) => {
                        if( !status.hasPermission ) this.error("error requestPermissions hasPermission");
                    },
                    this.error.bind(null,"requestPermissions failed"));
            }
        }, this.error.bind(null,"hasPermission failed"));
    },
    error: function(str) {
        console.log(str);
    },
    success: function(status) {
        console.log("status = ", status);
    },
};
