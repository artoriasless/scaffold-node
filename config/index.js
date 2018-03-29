'use strict';

const _ = require('lodash');

const commonConfig = require('./env/common');

let envConfig;

if (commonConfig.env === 'development') {
    envConfig = require('./env/development');
} else {
    envConfig = require(`./env/${commonConfig.env}`);
}

module.exports = _.merge(commonConfig, envConfig);
