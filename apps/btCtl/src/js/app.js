/* jshint quotmark: false, unused: vars, browser: true */
/* global cordova, console, jQuery, bluetoothSerial, _,
refreshButton, deviceList, previewColor, red, green, blue, disconnectButton,
connectionScreen, colorScreen, rgbText, messageDiv */
'use strict';

var app = app || {};

app.initialize = function() {
    console.log('### app.initialize()');
    a.permissions.check();

    jQuery('#colorScreen').hide();//colorScreen.hidden = true;

    // wire buttons to functions
    a.click('#deviceList', app.connect); //deviceList.ontouchstart = app.connect; // assume not scrolling
    a.click('#refreshButton', app.refresh); //refreshButton.ontouchstart = app.refresh;
    a.click('#disconnectButton', app.disconnect); //disconnectButton.ontouchstart = app.disconnect;
    a.click('#ledOn', app.onLedOn);
    a.click('#ledOff', app.onLedOff);

    // throttle changes
    var throttledOnColorChange = _.throttle(app.onColorChange, 200);
    jQuery('input').on('change', throttledOnColorChange);
    
    app.refresh();

    setInterval(function() {
        bluetoothSerial.read(
            function onSuccess(data) {
                jQuery("#btDataDiv").text(
                    jQuery("#btDataDiv").text() + data.toString(0)
                );
            }
        );
    }, 4000);
};
app.refresh = function(event) {
    console.log('### app.refresh()');
    jQuery("#deviceList:first-child").html("Discovering...");//deviceList.firstChild.innerHTML = "Discovering...";
    app.setStatus("Looking for Bluetooth Devices...");

    bluetoothSerial.list(app.ondevicelist, app.generateFailureFunction("List Failed"));
};
app.connect = function (e) {
    // console.log('### app.connect(e), e=',JSON.stringify(e));
    // app.setStatus("Connecting...");
    // var device = e && e.target && e.target.getAttribute && e.target.getAttribute('deviceId');
    // console.log("Requesting connection to " + device);
    // console.log('### e.target=',e.target);
    // bluetoothSerial.connect(device, app.onconnect, app.ondisconnect);
    app.setStatus("Connecting...");
    bluetoothSerial.connect("98:D3:61:F9:34:FE", app.onconnect, app.ondisconnect);
};
app.disconnect = function(event) {
    console.log('### app.disconnect()');
    if (event && event.preventDefault ) {
        event.preventDefault();
    }

    app.setStatus("Disconnecting...");
    bluetoothSerial.disconnect(app.ondisconnect);
};
app.onconnect = function() {
    console.log('### app.onconnect()');
    jQuery('#connectionScreen').hide(); //connectionScreen.hidden = true;
    jQuery('#colorScreen').show();//colorScreen.hidden = false;
    app.setStatus("Connected.");
};
app.ondisconnect = function() {
    console.log('### app.ondisconnect()');
    jQuery('#connectionScreen').show(); //connectionScreen.hidden = false;
    jQuery('#colorScreen').hide();//colorScreen.hidden = true;
    app.setStatus("Disconnected.");
};
app.onColorChange = function (evt) {
    var c = app.getColor();
    jQuery("#rgbText").text(c);//rgbText.innerText = c;
    jQuery("#previewColor").css('background-color', "rgb(" + c + ")");//previewColor.style.backgroundColor = "rgb(" + c + ")";
    app.sendToArduino(c);
};
app.getColor = function () {
    var color = [];
    try {
        color.push(jQuery("#red").value());//color.push(red.value);
        color.push(jQuery("#green").value());//color.push(green.value);
        color.push(jQuery("#blue").value());//color.push(blue.value);
    }
    catch (e) {
        console.log('e=',e);
    }
    return color.join(',');
};
app.sendToArduino = function(c) {
    bluetoothSerial.write("c" + c + "\n");
    bluetoothSerial.read(
        function onSuccess(data) { console.log(data); }
    );
};
app.onLedOn = function() {
    bluetoothSerial.write("1");
};
app.onLedOff = function() {
    bluetoothSerial.write("0");
};
app.timeoutId = 0;
app.setStatus = function(status) {
    if (app.timeoutId) {
        clearTimeout(app.timeoutId);
    }
    jQuery("#messageDiv").text(status);//messageDiv.innerText = status;
    app.timeoutId = setTimeout(function() { jQuery("#messageDiv").text(status); }, 4000);
};
app.ondevicelist = function(devices) {
    console.log('### ondevicelist(devices=',devices);

    // remove existing devices
    jQuery("#deviceList").html('');//deviceList.innerHTML = "";
    app.setStatus("");
    
    devices.forEach(function(device) {
        let listItem;
        // listItem = document.createElement('li');
        // listItem.className = "topcoat-list__item";
        let deviceId;
        if (device.hasOwnProperty("uuid")) { // TODO https://github.com/don/BluetoothSerial/issues/5
            deviceId = device.uuid;
        } else if (device.hasOwnProperty("address")) {
            deviceId = device.address;
        } else {
            deviceId = "ERROR " + JSON.stringify(device);
        }
        // listItem.setAttribute('deviceId', device.address);            
        listItem = '<li deviceId="' + device.address+'">' +
                device.name + "<br/><i>" + deviceId + "</i>" +
            '</li>';//listItem.innerHTML = device.name + "<br/><i>" + deviceId + "</i>";
        jQuery("#deviceList").append(listItem);//deviceList.appendChild(listItem);
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
};
app.generateFailureFunction = function(message) {
    var func = function(reason) {
        console.log('### generateFailureFunction(',message,reason,');');
        var details = "";
        if (reason) {
            details += ": " + JSON.stringify(reason);
        }
        app.setStatus(message + details);
    };
    return func;
};
