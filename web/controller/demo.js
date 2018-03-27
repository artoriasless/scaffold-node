'use strict';

const demo = require('../../service').demo;

async function home(ctx, next) {
    const result = await demo.findMany();

    ctx.body = JSON.stringify(result);
}

module.exports = home;
