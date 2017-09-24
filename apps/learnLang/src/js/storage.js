/**
* a.storage
*
* @module www/js/storage
*/
"use strict";
var a = a || {};
a.storage={};

/**
* Load object from storage if it was saved previously to storage.
* @method load
* @param {string} name - object name,
* @param {object} obj - input object,
* @returns {object} - new object.
* @author Evgeny
*/
a.storage.load = function(name,obj) {
    if(typeof(localStorage) !== "undefined") {
        var it=localStorage.getItem(name);
        if(typeof(it)!="undefined" && typeof(it)!="null" && it!="null" && it!=null) {
            // If object found in storage, return it.
            return JSON.parse(it);
        }
    }
    // Otherwise, return copy of input object.
    //return obj.slice(0);
    return [obj].slice(0)[0];
};

/**
* Save object to storage.
* @method save
* @param {string} name - object name,
* @param {object} obj - input object to save.
* @author Evgeny
*/
a.storage.save = function(name,obj) {
    if(typeof(localStorage) !== "undefined") {
        localStorage.setItem(name,JSON.stringify(obj));
    }
};
