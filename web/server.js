'use strict';

const config = require('../config');

const Koa = require('koa');
const app = new Koa();

const router = require('./controller/_router');

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(config.port);
