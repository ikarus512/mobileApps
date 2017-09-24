/**
* a.gamesize
*
* @module www/js/gamesize
* @author Evgeny
*/
"use strict";
var a = a || {};

/** @alias module:www/js/gamesize */
a.gamesize={};

/**
* Current gamesize value.
* @member {number} val
* @author Evgeny
*/
a.gamesize.val=2; // Default value
a.gamesize.str="2"; // Default value
a.gamesize.valsAllowed=[2,3,4,5];

/**
* Set radio buttons accordingly current gamesize.val
* @method setRadioButtons
* @author Evgeny
*/
a.gamesize.setRadioButtons = function() {
    // Uncheck all
    a.gamesize.valsAllowed.forEach(function(item,i){
        jQuery('input[name=gamesize]#'+item).prop('checked',false).checkboxradio('refresh');
    });
    // Check radio with id a.gamesize.val
    jQuery('input[name=gamesize]#'+a.gamesize.val).prop('checked',true).checkboxradio('refresh');
};

/**
* Init gamesize component.
* @method init
* @author Evgeny
*/
a.gamesize.init = function() {
    // Get current gamesize accordingly storage
    a.gamesize.str = a.storage.load('gamesize',a.gamesize.str);
    a.gamesize.val = Number(a.gamesize.str);
    a.gamesize.setRadioButtons();

    // Change gamesize handler:
    jQuery('input[name=gamesize]').on('change', function() {
        a.gamesize.str = jQuery('input[name=gamesize]:checked').val();
        a.gamesize.val = Number(a.gamesize.str);
        a.storage.save('gamesize',a.gamesize.str);
        //a.mydebug('lang='+a.language.name);
    });
};
