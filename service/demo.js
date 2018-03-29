'use strict';

const PAGE_LENGTH = 10;

const models = require('../model');

const Demo = models.db.Demo;

module.exports = {
    async create(data) {
        const demo = await Demo.create(data);

        return demo.toJSON();
    },
    async update(data) {
        const id = data.id;
        const demo = await Demo.findById(id);

        if (demo) {
            const result = await demo.update(data);

            return result;
        }
        return null;
    },
    async findById(id) {
        const demo = await Demo.findById(id);

        return demo.toJSON();
    },
    async findMany(query){
        query = query || {};

        const users = await Demo.findAll(query);

        return users.map(demo => demo.toJSON());
    },
    async page(where, page) {
        where = where || {};
        page = page || 1;

        const query = {
            where,
            limit: PAGE_LENGTH,
            offset: ((page - 1) * PAGE_LENGTH),
        };
        const result = await Demo.findAndCountAll(query);

        return ({
            page,
            count: result.count,
            rows: result.rows.map(demo => demo.toJSON()),
        });
    },
};
