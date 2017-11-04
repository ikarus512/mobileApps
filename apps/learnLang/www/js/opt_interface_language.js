/**
* a.interfaceLanguage
*
* @module www/js/interfaceLanguage
* @author Evgeny
*/
"use strict";
var a = a || {};

/** @alias module:www/js/interfaceLanguage */
a.interfaceLanguage={};

/**
* Current interfaceLanguage name.
* @member {string} name
* @author Evgeny
*/
a.interfaceLanguage.name='en'; // Default value

/**
* Hide all text and show current interfaceLanguage text
* @method setVisibility
* @author Evgeny
*/
a.interfaceLanguage.setVisibility = function() {
  if (a.interfaceLanguage.name == 'en') {
    jQuery('en').css('display','inline');
    jQuery('ru').css('display','none');
  } else {
    jQuery('en').css('display','none');
    jQuery('ru').css('display','inline');
  }
};

/**
* Set radio buttons accordingly current interfaceLanguage
* @method setRadioButtons
* @author Evgeny
*/
a.interfaceLanguage.setRadioButtons = function() {
  if (a.interfaceLanguage.name == 'en') {
    jQuery('input[name=interfaceLanguage]#en').prop('checked',true ).checkboxradio('refresh');
    jQuery('input[name=interfaceLanguage]#ru').prop('checked',false).checkboxradio('refresh');
  } else {
    jQuery('input[name=interfaceLanguage]#en').prop('checked',false).checkboxradio('refresh');
    jQuery('input[name=interfaceLanguage]#ru').prop('checked',true ).checkboxradio('refresh');
  }
};

/**
* Init interfaceLanguage component.
* @method init
* @author Evgeny
*/
a.interfaceLanguage.init = function() {
  // Get current interfaceLanguage accordingly storage
  a.interfaceLanguage.name = a.storage.load('interfaceLanguage',a.interfaceLanguage.name);
  a.interfaceLanguage.setRadioButtons();
  a.interfaceLanguage.setVisibility();

  // Change interfaceLanguage handler:
  jQuery('input[name=interfaceLanguage]').on('change', onInterfaceLanguageChange);

  function onInterfaceLanguageChange() {
    var oldActiveTopicKey = a.learnData.getCurrentTopicKey();
    a.interfaceLanguage.name = jQuery('input[name=interfaceLanguage]:checked').val();
    a.storage.save('interfaceLanguage',a.interfaceLanguage.name);
    a.interfaceLanguage.setVisibility();
    a.learnedTopic.repopulate(a.interfaceLanguage.name, oldActiveTopicKey); // calls .select() second time. TODO: fix
  }
};
