/**
* a.language
*
* @module www/js/records
* @author Evgeny
*/
"use strict";
var a = a || {};

/** @alias module:www/js/records */
a.records={};

/**
* Current records array.
* @member {array} arr
* @author Evgeny
*/
a.records.arr={
    '2':[{name:'John Dow',record:  2.002},
         {name:'John Dow',record: 10.000}],
    '3':[{name:'John Dow',record: 50.003},
         {name:'John Dow',record:150.000}],
    '4':[{name:'John Dow',record:150.004},
         {name:'John Dow',record:250.000}],
    '5':[{name:'John Dow',record:750.005},
         {name:'John Dow',record:950.000}],
};

/**
* Get records html text accordingly current game size.
* @method html
* @returns {string} - html text
* @author Evgeny
*/
a.records.html=function() {
    var s='';
    a.records.arr[a.gamesize.str].forEach(function(el,idx) {
        s += '<tr><td>' + (idx+1) + '</td><td>' + el.name + '</td><td>' + el.record + '</td></tr>';
    });
    return s;
};

/**
* Add new record.
* @method add
* @param {object} newRec - new record in form {name: a.user.name, record: time},
* @author Evgeny
*/
a.records.add = function(newRec) {
    a.records.arr[a.gamesize.str].push( newRec );
    a.records.arr[a.gamesize.str].sort(function(a, b){ return (a.record<b.record)?(-1):( (a.record>b.record)?(1):(0) ); });
    a.records.arr[a.gamesize.str] = a.records.arr[a.gamesize.str].slice(0, 10);
    a.storage.save('records',a.records.arr);
};

/**
* Init records component.
* @method init
* @author Evgeny
*/
a.records.init=function(){
    //a.mydebug('records='+JSON.stringify(a.records.arr["2"]));
    a.records.arr = a.storage.load('records',a.records.arr);
    //a.mydebug1('<br><br>records='+JSON.stringify(a.records.arr["2"]));
};
