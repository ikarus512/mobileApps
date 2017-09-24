/**
* First module.
*
* @module www/js/first
*/
"use strict";
var a = a || {};
jQuery.noConflict();


a.os="";
a.cordova=false;
if(window.navigator.appVersion.search(/Android/i)>=0) {
    a.os="And";
}
if(window.navigator.appVersion.search(/Windows/i)>=0) {
    a.os="Win";
}
if(typeof(cordova)==="undefined" || typeof(cordova.version)==="undefined") {
    a.cordova=false;
    a.alert=function(){window.alert(arguments[0],arguments[1],arguments[2],arguments[3]);};
    a.exit =function(){};
    a.previousPage=function(){window.history.back();};
} else {
    a.cordova=true;
    a.alert=function(){navigator.notification.alert(arguments[0],arguments[1],arguments[2],arguments[3]);};
    a.exit =function(){navigator.app.exitApp();};
    a.previousPage=function(){navigator.app.backHistory();};
}

a.goPage=function(page,options) {
    jQuery.mobile.changePage(page,options);//,{role:'dialog', transition:'fade'});
}

a.playSound=function(id) {
    if(a.cordova) {
        /**/
            // Using Media plugin:
            //      cordova plugin add cordova-plugin-media
            // all its permissions seems not needed when we have all files locally
            // and can be removed from android.json and AndroidManifest.xml files.
            // android.json:
            //     "AndroidManifest.xml": { "parents": { "/*": [] } }

            var audioElement = document.getElementById(id+'1');
            var url = audioElement.getAttribute('src');
            if(a.os==="And") { url = '/android_asset/www/' + url; }
            //a.alert(url);
            var my_media = new Media(url,
                    // success callback
                     function () { console.log("playAudio():Audio Success"); },
                    // error callback
                     function (err) { console.log("playAudio():Audio Error: " + err); }
            );
            my_media.play();
            setTimeout(function () { my_media.release(); }, 1000*3);
        /**/
    } else {
        document.getElementById(id).play();
    }
}

a.click = function(elem,func) {
    if(a.os==="And") {
        jQuery(document).on('touchstart', elem, function(event) {func(this,event)});
    } else {
        //jQuery(elem).click(function(event) {func(this,event)});
        jQuery(document).on('click', elem, function(event) {func(this,event)});
    }
};

a.attr=function(elem,attr,newval) {
    if(typeof(newval)==="undefined") {
        return Number(jQuery(elem).attr(attr));
    } else {
        Number(jQuery(elem).attr(attr,newval));
    }
};
a.css=function(elem,cssname,newval) {
    if(typeof(newval)==="undefined") {
        return (jQuery(elem).css(cssname));
    } else {
        (jQuery(elem).css(cssname,newval));
    }
};

a.trunc = function(x) {
    return Math.floor(x);
};
a.rand = function(max) {
    return a.trunc(Math.random() * max);
};
a.min = function() {
    return Math.min.apply(null, Array(arguments));
};

a.init=function() {
    if(a.cordova) {
        document.addEventListener("deviceready",function(){
            jQuery(document).ready(function() {
                a.onReady();
                //a.goPage("index.html#startpage");
            });
        }, false);

        document.addEventListener('backbutton', function(event){
            event.preventDefault();
            if(jQuery.mobile.activePage.attr('id') === "startpage") {
                a.exit();
            } else {
                a.previousPage();
            }
        });

        document.addEventListener('menubutton', function(event){
            event.preventDefault();
            a.goPage('index.html#pageresult');
        });
    } else {
        // Here if usual browser mode, without cordova API
        jQuery(document).ready(function() {
            a.goPage("index.html#startpage"); // On refresh, always go to first page
            a.onReady();
        });
    }
};
