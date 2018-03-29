'use strict';

const config = require('../config');

const Koa = require('koa');
const app = new Koa();

const router = require('./controller/_router');
const globalException = require('./middleware/global-exception');

app.use(router.routes())
    .use(router.allowedMethods())
    .use(globalException);

app.listen(config.port);
