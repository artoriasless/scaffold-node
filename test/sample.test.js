'use strict';
/* global describe it before */
function add(x, y) {
    return x + y;
}

var should = require('should');

describe('add func test', function () {
    before(function beforeTest() {
        console.info('begin demo...');  //  eslint-disable-line
    });

    it('1 + 1 should be 2', function () {
        should(add(1, 1)).be.equal(2);
    });
});
