/**
* a.termOrder
*
* @module www/js/termOrder
* @author Evgeny
*/
"use strict";
var a = a || {};

/** @alias module:www/js/termOrder */
a.termOrder={};

/**
* Current termOrder name.
* @member {string} name
* @author Evgeny
*/
a.termOrder.name='seq'; // Default value

/**
* Set radio buttons accordingly current termOrder
* @method setRadioButtons
* @author Evgeny
*/
a.termOrder.setRadioButtons = function() {
  if (a.termOrder.name == 'seq') {
    jQuery('input[name=termOrder]#seq').prop('checked',true ).checkboxradio('refresh');
    jQuery('input[name=termOrder]#rand').prop('checked',false).checkboxradio('refresh');
  } else {
    jQuery('input[name=termOrder]#seq').prop('checked',false).checkboxradio('refresh');
    jQuery('input[name=termOrder]#rand').prop('checked',true ).checkboxradio('refresh');
  }
};

/**
* Init termOrder component.
* @method init
* @author Evgeny
*/
a.termOrder.init = function() {
  // Get current termOrder accordingly storage
  a.termOrder.name = a.storage.load('termOrder',a.termOrder.name);
  a.termOrder.setRadioButtons();

  // Change termOrder handler:
  jQuery('input[name=termOrder]').on('change', function() {
    a.termOrder.name = jQuery('input[name=termOrder]:checked').val();
    a.storage.save('termOrder',a.termOrder.name);
  });
};
