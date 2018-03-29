'use strict';
/* global describe it */
const should = require('should');

const demoService = require('../../service').demo;
const log = require('../log');

const timeStamp = Date.parse(new Date());
const randomId = (timeStamp / 1000) % 10000;
const demoData = {
    id: randomId,
    name: 'test demo',
};
const modifyData = {
    id: randomId,
    name: 'modified demo',
};

describe('demo service', function() {
    //  crate demo
    it('', async function () {
        const info = '新增 demo 成功';
        const result = await demoService.create(demoData);

        log('demo service - create', info);
        should(result).be.an.Object();
    });
    //  find by id
    it('查询结果是个对象', async function() {
        const info = 'ID为【' + randomId + '】的 demo ，其 name 为：';
        const demo = await demoService.findById(randomId);

        log('demo service - findById', info + demo.name);
        should(demo).be.an.Object();
    });
    //  find many
    it('查询结果是个数组', async function() {
        const info = '数据库中 demo 数量为：';
        const demos = await demoService.findMany();

        log('demo service - findMany', info + demos.length);
        should(demos).be.an.Array();
    });
    //  update demo
    it('更新结果是个对象', async function() {
        const info = '修改 demo 成功';
        const result = await demoService.update(modifyData);

        log('demo service - update', info);
        should(result).be.an.Object();
    });
});
