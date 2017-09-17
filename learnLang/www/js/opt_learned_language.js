/**
* a.learnedLanguage
*
* @module www/js/learnedLanguage
* @author Evgeny
*/
"use strict";
var a = a || {};

/** @alias module:www/js/learnedLanguage */
a.learnedLanguage={};

/**
* Current learnedLanguage name.
* @member {string} name
* @author Evgeny
*/
a.learnedLanguage.name=''; // Default value

// Repopulate selectmenu, select current item, return current selection
a.learnedLanguage.repopulate = function() {
  var langs = Object.keys(a.data);
  if (langs.indexOf(a.learnedLanguage.name) < 0)
    a.learnedLanguage.name = langs[0];

  jQuery("#learnedLanguage").html('');
  for(var key in a.data) {
    jQuery("#learnedLanguage").append("<option value='" +key+ "'>" + key + "</option>");
  }
  jQuery('#learnedLanguage').val(a.learnedLanguage.name).selectmenu('refresh');

  a.learnedLanguage.onChange();
};

a.learnedLanguage.onChange = function() {
    a.learnedLanguage.name = jQuery('#learnedLanguage').val();
    a.storage.save('learnedLanguage',a.learnedLanguage.name);

    jQuery(".learnedLanguageName").html(a.learnedLanguage.name);

    a.learnedTopic.repopulate();
}

/**
* Init learnedLanguage component.
* @method init
* @author Evgeny
*/
a.learnedLanguage.init = function() {
    a.learnedLanguage.repopulate();
    jQuery('#learnedLanguage').on('change',a.learnedLanguage.onChange);
};
