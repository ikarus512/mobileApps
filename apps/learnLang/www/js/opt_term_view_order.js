/**
* a.termViewOrder
*
* @module www/js/termViewOrder
* @author Evgeny
*/
"use strict";
var a = a || {};

/** @alias module:www/js/termViewOrder */
a.termViewOrder={};

/**
* Set radio buttons accordingly current termViewOrder
* @method setRadioButtons
* @author Evgeny
*/
a.termViewOrder.setRadioButtons = function() {
  jQuery('input[name=termViewOrder]').prop('checked',false ).checkboxradio('refresh');
  jQuery('input[name=termViewOrder]#'+a.termViewOrder.name).prop('checked',true ).checkboxradio('refresh');
};

/**
* Init termViewOrder component.
* @method init
* @author Evgeny
*/
a.termViewOrder.init = function() {
  a.termViewOrder.name = 'term-transcr'; // Default value
  a.termViewOrder.name = a.storage.load('termViewOrder',a.termViewOrder.name);
  a.termViewOrder.setRadioButtons();

  // Change termViewOrder handler:
  jQuery('input[name=termViewOrder]').on('change', function() {
    a.termViewOrder.name = jQuery('input[name=termViewOrder]:checked').val();
    a.storage.save('termViewOrder',a.termViewOrder.name);
  });
};
