/* file: index.js */
/*!
 * Copyright 2017 ikarus512
 * https://github.com/ikarus512/mobileApps
 *
 * DESCRIPTION: Node Server
 * AUTHOR: ikarus512
 * CREATED: 2017/09/22
 *
 * MODIFICATION HISTORY
 *  2017/09/22, ikarus512. Initial version.
 *
 */

/*jshint node: true*/
'use strict';

var
    express = require('express'),

    app = express(),
    herokuSslRedirect = require('./heroku-ssl-redirect.js'),
    isHeroku = require('./is-heroku.js'),
    http = require('http'),
    path = require('path');

app.set('port', process.env.PORT || 80);
if (isHeroku()) { app.use(herokuSslRedirect()); }
app.use(express.static(path.join(__dirname, '..')));

////////////////////////////////////////////////////////////////
//  Start server
////////////////////////////////////////////////////////////////

var
    server = http.createServer(app),

    boot = function() {
        server.listen(app.get('port'), function () {
            console.log('Listening on port ' + app.get('port') + '.');
        });
    },

    shutdown = function() {
        server.close();
    };

// istanbul ignore if
if (require.main === module) {
    boot();
} else {
    console.info('Running application as a module');
    exports.boot = boot;
    exports.shutdown = shutdown;
    exports.port = app.get('port');
}
