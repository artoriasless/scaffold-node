'use strict';
/**
 * 运行脚本：tnpm run test -- ./test/demo.test.js
 */
module.exports = function log(title, info) {
    console.log('\n======================================');
    console.log('  ' + title);
    console.log('  ' + info);
};
