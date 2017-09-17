/**
* a.learnedTopic
*
* @module www/js/learnedTopic
* @author Evgeny
*/
"use strict";
var a = a || {};

/** @alias module:www/js/learnedTopic */
a.learnedTopic={};

/**
* Current learnedTopic name.
* @member {string} name
* @author Evgeny
*/
a.learnedTopic.name=''; // Default value

// Repopulate selectmenu, select current item, return current selection
a.learnedTopic.repopulate = function() {
  var topics = Object.keys(a.data[a.learnedLanguage.name]);
  if (topics.indexOf(a.learnedTopic.name) < 0)
    a.learnedTopic.name = topics[0];

  jQuery("#learnedTopic").html('');
  for(var i=0; i<topics.length; i++) {
    var key = topics[i];
    jQuery("#learnedTopic").append('<option value="' +key+ '">'
      //+ key
      + a.data[a.learnedLanguage.name][key][a.interfaceLanguage.name]
      + '</option>');
  }
  jQuery('#learnedTopic').val(a.learnedTopic.name).selectmenu('refresh');

  a.learnedTopic.onChange();
};

a.learnedTopic.onChange = function() {
    a.learnedTopic.name = jQuery('#learnedTopic').val();
    a.storage.save('learnedTopic',a.learnedTopic.name);
    // jQuery(".learnedTopicName").html(a.learnedTopic.name);
    jQuery(".learnedTopicName").html(a.data[a.learnedLanguage.name][a.learnedTopic.name][a.interfaceLanguage.name]);
}

/**
* Init learnedTopic component.
* @method init
* @author Evgeny
*/
a.learnedTopic.init = function() {
    //a.learnedTopic.repopulate();
    jQuery('#learnedTopic').on('change',a.learnedTopic.onChange);
};
