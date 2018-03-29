'use strict';

module.exports = function log(title, info) {
    console.info('\n======================================');    // eslint-disable-line
    console.info('  ' + title);  // eslint-disable-line
    console.info('  ' + info);   // eslint-disable-line
};
