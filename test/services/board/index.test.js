'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('board service', function() {
  it('registered the boards service', () => {
    assert.ok(app.service('boards'));
  });
});
