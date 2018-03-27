'use strict';

const models = require('../model');

const Demo = models.db.Demo;

module.exports = {
    async findMany(){
        const result = await Demo.findAll();

        return result.map(item => item.toJSON());
    },
};
