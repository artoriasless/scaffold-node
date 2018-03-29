'use strict';
/* global __dirname process */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const config = require('../../config');

const dbconn = `mysql://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.database}`;

const sequelize = new Sequelize(dbconn, config.db.seq_options);

const db = {
    Sequelize,
    sequelize,
};

const models = {};
const filterFunc = fileName => {
    return (path.extname(fileName) === '.js' && fileName !== 'index.js');
};
fs.readdirSync(__dirname).filter(filterFunc)
    .forEach(modelName => {
        const model = sequelize.import(path.join(__dirname, modelName));

        models[model.name] = model;
    });

Object.keys(models).forEach(key => {
    const model = models[key];
    if ('associate' in model) {
        model.associate(models);
    }

    db[key] = model;
});

if (process.env.NODE_ENV === 'development') {
    db.sequelize.sync({
        force: true,
    });
}

module.exports = db;
