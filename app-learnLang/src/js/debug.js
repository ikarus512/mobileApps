/**
* First module.
*
* @module www/js/debug
*/
"use strict";
var a = a || {};

a.mydebug=function(str) {
/**/
    if(typeof(str)==="object") {
        jQuery('div.mydebug').html(JSON.stringify(str));
    } else {
        jQuery('div.mydebug').html(String(str));
    }
/**/
};
a.mydebug1=function(str) {
/**/var str1=jQuery('div.mydebug').html();
    if(typeof(str)==="object") {
        jQuery('div.mydebug').html(str1+', '+JSON.stringify(str));
    } else {
        jQuery('div.mydebug').html(str1+', '+String(str));
    }
/**/
};
