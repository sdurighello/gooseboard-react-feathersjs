'use strict';

const assert = require('assert');
const defaultTiles = require('../../../../src/services/board/hooks/default-tiles.js');

describe('board defaultTiles hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    defaultTiles()(mockHook);

    assert.ok(mockHook.defaultTiles);
  });
});
