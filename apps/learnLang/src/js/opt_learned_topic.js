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
// a.learnedTopic=a.learnData;

/**
* Current learnedTopic name.
* @member {string} name
* @author Evgeny
*/
a.learnedTopic.name=''; // Default value

// Repopulate selectmenu, select current item, return current selection
a.learnedTopic.repopulate = function(interfaceLanguage) {
    a.learnData.repopulate(interfaceLanguage);
    a.learnData.select(a.learnData.getTree(), a.learnedTopic.name, a.learnedTopic.name.split('/'));
};

a.learnedTopic.onChange = function() {
    // a.learnedTopic.name = jQuery('#learnedTopic').val();
    a.storage.save('learnedTopic',a.learnedTopic.name);
}

/**
* Init learnedTopic component.
* @method init
* @author Evgeny
*/
a.learnedTopic.init = function() {
    a.learnedTopic.repopulate(a.interfaceLanguage.name);
};
