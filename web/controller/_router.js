'use strict';

const Router = require('koa-router');
const _router = new Router();

const demo = require('./demo');

_router.get('/demo', demo);

module.exports = _router;
