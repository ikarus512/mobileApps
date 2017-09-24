/**
* a.user
*
* @module www/js/user
* @author Evgeny
*/
"use strict";
var a = a || {};

/** @alias module:www/js/user */
a.user={};

/**
* Current user name.
* @member {string} name
* @author Evgeny
*/
a.user.name='Unonimous'; // Default value

/**
* Init user component.
* @method init
* @author Evgeny
*/
a.user.init = function() {
    // Get current language accordingly storage
    a.user.name = a.storage.load('username',a.user.name);

    a.storage.save('username',a.user.name);
    jQuery("input[name=username]").val(a.user.name);
    jQuery('#username').html(a.user.name);



    // 'Change user' handler:
    jQuery('input[name=username]').on('change', function() {
        a.user.name=jQuery('input[name=username]').val();
        a.storage.save('username',a.user.name);
        jQuery('#username').html(a.user.name);
        //a.mydebug(String(a.user.name));
    });
};
