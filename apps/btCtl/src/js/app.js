/* jshint quotmark: false, unused: vars, browser: true */
/* global cordova, console, jQuery, bluetoothSerial, _, refreshButton, deviceList, previewColor, red, green, blue, disconnectButton, connectionScreen, colorScreen, rgbText, messageDiv */
'use strict';
var app = {
    // initialize: function() {
    //     this.bind();
    // },
    // bind: function() {
    //     document.addEventListener('deviceready', this.deviceready, false);
    //     colorScreen.hidden = true;
    // },
    // deviceready: function() {
    initialize: function() {
        console.log('### app.initialize()');
        a.permissions.check();

        jQuery('#colorScreen').hide();// = true;

        // wire buttons to functions
        a.click('#deviceList', app.connect); //deviceList.ontouchstart = app.connect; // assume not scrolling
        a.click('#refreshButton', app.list); //refreshButton.ontouchstart = app.list;
        a.click('#disconnectButton', app.disconnect); //disconnectButton.ontouchstart = app.disconnect;

        // throttle changes
        var throttledOnColorChange = _.throttle(app.onColorChange, 200);
        jQuery('input').on('change', throttledOnColorChange);
        
        app.list();
    },
    list: function(event) {
        console.log('### app.list()');
        deviceList.firstChild.innerHTML = "Discovering...";
        app.setStatus("Looking for Bluetooth Devices...");
        
        bluetoothSerial.list(app.ondevicelist, app.generateFailureFunction("List Failed"));
    },
    connect: function (e) {
        console.log('### app.connect()');
        app.setStatus("Connecting...");
        var device = e.target.getAttribute('deviceId');
        console.log("Requesting connection to " + device);
        bluetoothSerial.connect(device, app.onconnect, app.ondisconnect);        
    },
    disconnect: function(event) {
        console.log('### app.disconnect()');
        if (event) {
            event.preventDefault();
        }

        app.setStatus("Disconnecting...");
        bluetoothSerial.disconnect(app.ondisconnect);
    },
    onconnect: function() {
        console.log('### app.onconnect()');
        jQuery('#connectionScreen').hide(); //connectionScreen.hidden = true;
        jQuery('#colorScreen').show();//colorScreen.hidden = false;
        app.setStatus("Connected.");
    },
    ondisconnect: function() {
        console.log('### app.ondisconnect()');
        jQuery('#connectionScreen').show(); //connectionScreen.hidden = false;
        jQuery('#colorScreen').hide();//colorScreen.hidden = true;
        app.setStatus("Disconnected.");
    },
    onColorChange: function (evt) {
        var c = app.getColor();
        rgbText.innerText = c;
        previewColor.style.backgroundColor = "rgb(" + c + ")";
        app.sendToArduino(c);
    },
    getColor: function () {
        var color = [];
        color.push(red.value);
        color.push(green.value);
        color.push(blue.value);
        return color.join(',');
    },
    sendToArduino: function(c) {
        bluetoothSerial.write("c" + c + "\n");
    },
    timeoutId: 0,
    setStatus: function(status) {
        if (app.timeoutId) {
            clearTimeout(app.timeoutId);
        }
        messageDiv.innerText = status;
        app.timeoutId = setTimeout(function() { messageDiv.innerText = ""; }, 4000);
    },
    ondevicelist: function(devices) {
        var listItem, deviceId;

        // remove existing devices
        deviceList.innerHTML = "";
        app.setStatus("");
        
        devices.forEach(function(device) {
            listItem = document.createElement('li');
            listItem.className = "topcoat-list__item";
            if (device.hasOwnProperty("uuid")) { // TODO https://github.com/don/BluetoothSerial/issues/5
                deviceId = device.uuid;
            } else if (device.hasOwnProperty("address")) {
                deviceId = device.address;
            } else {
                deviceId = "ERROR " + JSON.stringify(device);
            }
            listItem.setAttribute('deviceId', device.address);            
            listItem.innerHTML = device.name + "<br/><i>" + deviceId + "</i>";
            deviceList.appendChild(listItem);
        });

        if (devices.length === 0) {
            
            if (cordova.platformId === "ios") { // BLE
                app.setStatus("No Bluetooth Peripherals Discovered.");
            } else { // Android
                app.setStatus("Please Pair a Bluetooth Device.");
            }

        } else {
            app.setStatus("Found " + devices.length + " device" + (devices.length === 1 ? "." : "s."));
        }
    },
    generateFailureFunction: function(message) {
        var func = function(reason) {
            var details = "";
            if (reason) {
                details += ": " + JSON.stringify(reason);
            }
            app.setStatus(message + details);
        };
        return func;
    }
};
