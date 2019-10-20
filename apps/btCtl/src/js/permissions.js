/* jshint quotmark: false, unused: vars, browser: true */
/* global cordova, console, $, bluetoothSerial, _, refreshButton, deviceList, previewColor, red, green, blue, disconnectButton, connectionScreen, colorScreen, rgbText, messageDiv */
'use strict';

var a = a || {};

a.permissions = {
    plugin : cordova.plugins.permissions,
    list : [
        ///permissions.CAMERA,
        //permissions.GET_ACCOUNTS
        a.permissions.plugin.BLUETOOTH,
        a.permissions.plugin.BLUETOOTH_ADMIN,
        a.permissions.plugin.ACCESS_COARSE_LOCATION,
        // a.permissions.plugin.RECORD_AUDIO,
        // a.permissions.plugin.MODIFY_AUDIO_SETTINGS,
        // a.permissions.plugin.WRITE_EXTERNAL_STORAGE,
        // a.permissions.plugin.READ_PHONE_STATE,
    ],
    check: function() {
        this.plugin.hasPermission(this.list, (status) => {
            if( !status.hasPermission ) {
                this.plugin.requestPermissions(
                    this.list,
                    function(status) {
                        if( !status.hasPermission ) this.error();
                    },
                    this.error);
            }
        }, this.error);
    },
    error: function() {
        //console.warn('Camera or Accounts permission is not turned on');
    },
    success: function(status) {
    },
};
