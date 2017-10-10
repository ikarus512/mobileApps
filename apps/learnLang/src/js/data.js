"use strict";
var a = a || {};

// https://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers
//1090 Mandarin Chinese
// 385 Arabic
// 380 Hindi
// 250 Malay (Indonesian, Malaisian)
// 208 Bengali
// 162 Urdu
// 130 Japanese
// 110 Farsi (Persian, Iran)
//  98 Swahili
//  71 Turkish
//  79 Tamil (India, Sri Lanka, Singapore)
//  78 Vietnamese

(function() {

    a.learnData = new LearnData();

    function LearnData() {

        // Singleton pattern implementation
        if (LearnData.prototype._singletonInstance) {
            return LearnData.prototype._singletonInstance;
        } else {
            LearnData.prototype._singletonInstance = this;
        }

        // Private members
        var self = this,
            _currentPath,
            fancytree,
            paths = {en:[], ru:[]},
            tree = [], // tree nodes data (path from root to leaf is key to find data)
            data = {}, // learned data, accessed as data[path]
            //TODO1:
            keys = {}; // used to keep same topic after interface language change

        // Public members
        self.add = add;
        self.repopulate = repopulate;
        self.select = select;
        self.currentPath = function() { return _currentPath; };
        self.currentData = function() { return data[self.currentPath()] };
        self.get = self.currentData; // currently selected data
        init();

        ////////////////////////////////////////////////////////////////////////
        // Implementation

        function init() {

            jQuery('#tree').fancytree({
                activate: onChange,
                source: tree,
                activeVisible: true, // Make sure, active nodes are visible (expanded)
                aria: false, // Enable WAI-ARIA support
                autoActivate: true, // Automatically activate a node when it is focused using keyboard
                autoCollapse: true, // Automatically collapse all siblings, when a node is expanded
                // autoFocus: true, //???
                autoScroll: true, // Automatically scroll nodes into visible area
                clickFolderMode: 3, // 1:activate, 2:expand, 3:activate and expand, 4:activate (dblclick expands)
                checkbox: false, // Show checkboxes
                debugLevel: 1, // 0:quiet, 1:normal, 2:debug
                disabled: false, // Disable control
                focusOnSelect: true, // Set focus when node is checked by a mouse click
                escapeTitles: false, // Escape `node.title` content for display
                generateIds: false, // Generate id attributes like <span id='fancytree-id-KEY'>
                idPrefix: "", // Used to generate node idÂ´s like <span id='fancytree-id-<key>'>
                icon: false, // Display node icons
                keyboard: true, // Support keyboard navigation
                keyPathSeparator: "/", // Used by node.getKeyPath() and tree.loadKeyPath()
                minExpandLevel: 1, // 1: root node is not collapsible
                quicksearch: false, // Navigate to next node by typing the first letters
                rtl: false, // Enable RTL (right-to-left) mode
                selectMode: 1, // 1:single, 2:multi, 3:multi-hier
                tabindex: 0, // Whole tree behaves as one single control
                titlesTabbable: true,//false, // Node titles can receive keyboard focus
                tooltip: false, // Use title as tooltip (also a callback could be specified)
            });

            fancytree = jQuery('#tree').fancytree('getTree');

        } /* function init() */

        function onChange(event, eventData) {
            if (!eventData.node.children) {
                // Here if activated element is a leaf
                _currentPath = nodePath(eventData.node);
                // console.log('onChange: keys[',_currentPath,']=',keys[_currentPath],'=',eventData.node.key);

                a.storage.save('learnedTopic', _currentPath);
                var _curPath = _currentPath.split('/');
                var topicIdx = (1 >= 0) ? 1 : 0;
                var subTopicIdx = (_curPath.length-1 >= 0) ? (_curPath.length-1) : (0);
                jQuery(".learnedTopic").html(_curPath[topicIdx]);
                jQuery(".learnedSubTopic").html(_curPath[subTopicIdx]);
            }

            function nodePath(node) {
                var s = node.title;
                var n = node;
                while(n.parent && n.parent.title && n.parent.title != "root") {
                    s = n.parent.title + "/" + s;
                    n = n.parent;
                }
                return s;
            };
        } /* function onChange(event, eventData) */

        /** Add learned data */
        function add(d) {
            var path_ru = d.ru.split('/').map(function(el){return el.trim()}).join('/'),
                path_en = d.en.split('/').map(function(el){return el.trim()}).join('/');

            paths.en.push(path_en);
            paths.ru.push(path_ru);
            data[path_ru] = d;
            data[path_en] = d;
        } /* function add(d) */

        /** Select */
        function select(path) {

            //fancytree.activateKey(keys[path]);
            //tree.getNodeByKey(keys[path]).setActive(true); node.setSelected(true);

            var subTree = tree,
                i,
                titles = path.split('/');
            for (i=0; i<titles.length; i++) {
                subTree = subTree.filter(function(el) {
                    return el.title===titles[i];
                });
                // console.log(subTree);
                subTree = (subTree[0] && subTree[0].children) ? subTree[0].children : subTree;
            }
            if (subTree[0]) {
                subTree[0].active = true;
                subTree[0].focus = true;
            }

            fancytree.reload(tree);
            // fancytree.focus();
            jQuery('#tree').focus();
            // console.log('focusing');



            _currentPath = path; //nodePath(eventData.node);
            // console.log('onChange: keys[',_currentPath,']=',keys[_currentPath],'=',eventData.node.key);

            a.storage.save('learnedTopic', _currentPath);
            var _curPath = _currentPath.split('/');
            var topicIdx = (1 >= 0) ? 1 : 0;
            var subTopicIdx = (_curPath.length-1 >= 0) ? (_curPath.length-1) : (0);
            jQuery(".learnedTopic").html(_curPath[topicIdx]);
            jQuery(".learnedSubTopic").html(_curPath[subTopicIdx]);

        } /* function select(path) */

        /** repopulate tree accordingly current language */
        function repopulate(interfaceLanguageNew, interfaceLanguageOld) {

            //TODO1:
            // if (interfaceLanguageNew && interfaceLanguageOld) {
            //     var key = keys[_currentPath];
            //     _currentPath = ....[key];
            // }

            var interfaceLanguage = a.interfaceLanguage ? a.interfaceLanguage.name : "en";
            var key = 0;
            tree = [];

            paths[interfaceLanguage].forEach(function(path,idx,arr) {
                var titles = path.split('/').map(function(el){return el.trim()}),
                    i;

                function getElemByTitle(arr, title) {
                    var i;
                    for(i=0; i<arr.length; i++) {
                        if (arr[i].title == title) {
                            return arr[i];
                        }
                    }
                    return null;
                }

                var subTree = tree;
                var elem;
                for(i=0; i<titles.length; i++) {
                    elem = getElemByTitle(subTree, titles[i])
                    if (elem) {
                        subTree = elem.children;
                    } else {
                        if (i<titles.length-1) {
                            elem = {title: titles[i], key: key, folder: true, children: []};
                            subTree.push(elem);
                            subTree = elem.children;
                        } else {
                            elem = {title: titles[i], key: key};
                            subTree.push(elem);
                            keys[path] = key;
                        }
                        key++;
                    }
                }

            });

            fancytree.reload(tree);

        }; /* function repopulate() { */

    }; /* function LearnData() */

})();
