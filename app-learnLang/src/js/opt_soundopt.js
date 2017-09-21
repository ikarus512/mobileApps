/**
* a.soundopt
*
* @module www/js/soundopt
* @author Evgeny
*/
"use strict";
var a = a || {};

/** @alias module:www/js/soundopt */
a.soundopt={};

/**
* Current soundopt name.
* @member {string} name
* @author Evgeny
*/
a.soundopt.name='off'; // Default value

/**
* Set radio buttons accordingly current soundopt
* @method setRadioButtons
* @author Evgeny
*/
a.soundopt.setRadioButtons = function() {
  if (a.soundopt.name == 'on') {
    jQuery('input[name=soundopt]#on' ).prop('checked',true ).checkboxradio('refresh');
    jQuery('input[name=soundopt]#off').prop('checked',false).checkboxradio('refresh');
  } else {
    jQuery('input[name=soundopt]#on' ).prop('checked',false).checkboxradio('refresh');
    jQuery('input[name=soundopt]#off').prop('checked',true ).checkboxradio('refresh');
  }
};

/**
* Init soundopt component.
* @method init
* @author Evgeny
*/
a.soundopt.init = function() {
  // Get current soundopt accordingly storage
  a.soundopt.name = a.storage.load('soundopt',a.soundopt.name);
  a.soundopt.setRadioButtons();

  // Change soundopt handler:
  jQuery('input[name=soundopt]').on('change', function() {
    a.soundopt.name = jQuery('input[name=soundopt]:checked').val();
    a.storage.save('soundopt',a.soundopt.name);
  });
};
