/**
* a.language
*
* @module www/js/language
* @author Evgeny
*/
"use strict";
var a = a || {};

/** @alias module:www/js/language */
a.language={};

/**
* Current language name.
* @member {string} name
* @author Evgeny
*/
a.language.name='en'; // Default value

/**
* Hide all text and show current language text
* @method setVisibility
* @author Evgeny
*/
a.language.setVisibility = function() {
    if (a.language.name == 'en') {
        jQuery('en').css('display','inline');
        jQuery('ru').css('display','none');
    } else {
        jQuery('en').css('display','none');
        jQuery('ru').css('display','inline');
    }
};

/**
* Set radio buttons accordingly current language
* @method setRadioButtons
* @author Evgeny
*/
a.language.setRadioButtons = function() {
    if (a.language.name == 'en') {
        jQuery('input[name=language]#en').prop('checked',true ).checkboxradio('refresh');
        jQuery('input[name=language]#ru').prop('checked',false).checkboxradio('refresh');
    } else {
        jQuery('input[name=language]#en').prop('checked',false).checkboxradio('refresh');
        jQuery('input[name=language]#ru').prop('checked',true ).checkboxradio('refresh');
    }
};

/**
* Init language component.
* @method init
* @author Evgeny
*/
a.language.init = function() {
    // Get current language accordingly storage
    a.language.name = a.storage.load('language',a.language.name);
    a.language.setRadioButtons();
    a.language.setVisibility();

    // Change language handler:
    jQuery('input[name=language]').on('change', function() {
        a.language.name = jQuery('input[name=language]:checked').val();
        a.storage.save('language',a.language.name);
        a.language.setVisibility();
        //a.mydebug('lang='+a.language.name);
    });
};
