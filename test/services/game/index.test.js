'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('game service', function() {
  it('registered the games service', () => {
    assert.ok(app.service('games'));
  });
});
