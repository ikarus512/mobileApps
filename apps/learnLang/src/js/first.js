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
            var my_media = new Media(url);
            my_media.play();
            setTimeout(function () { my_media.release(); }, 1000*3);
        /**/
    } else {
        document.getElementById(id).play();
    }
}

a.playSoundSprite = function(mysndattr) {
  if(mysndattr && a.soundopt.name==="on") {
    // Split into src,start,end
    var args = mysndattr.split('//');
    var src=args[0], start=args[1], end=args[2];

    if(a.cordova) {
      start = Math.floor(start*1000);
      end = Math.floor(end*1000);

      if(a.os==="And") { src = '/android_asset/www/' + src; }

      var audio = new Media(src);
      if(typeof(start)==="undefined" || typeof(end)==="undefined") {
        audio.play();
      } else {
        audio.seekTo(start);
        audio.play();
        var int = setInterval(function() {
          if (audio.currentTime > end) {
            clearInterval(int);
            audio.pause();
            audio.release();
          }
        }, 20);
      }

    } else {

      var audio = new Audio(src);//document.getElementById(id);
      if(typeof(start)==="undefined" || typeof(end)==="undefined") {
        audio.play();
      } else {
        audio.currentTime = start;
        audio.play();
        var int = setInterval(function() {
          if (audio.currentTime > end) {
            clearInterval(int);
            audio.pause();
          }
        }, 10);
      }

    }
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

a.applicationInit=function() {
    if(a.cordova) {
        document.addEventListener("deviceready",function(){
            jQuery(document).ready(function() {
                a.onReady();
                //a.goPage("index.html#optpage");
            });
        }, false);

        document.addEventListener('backbutton', function(event){
            event.preventDefault();
            if(jQuery.mobile.activePage.attr('id') === "optpage") {
                a.exit();
            } else {
                a.previousPage();
            }
        });

    } else {
        // Here if usual browser mode, without cordova API
        jQuery(document).ready(function() {
            a.goPage("index.html#optpage"); // On refresh, always go to first page
            a.onReady();
        });
    }
};
