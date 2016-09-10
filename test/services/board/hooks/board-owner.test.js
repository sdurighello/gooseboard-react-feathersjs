'use strict';

const assert = require('assert');
const boardOwner = require('../../../../src/services/board/hooks/board-owner.js');

describe('board boardOwner hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    boardOwner()(mockHook);

    assert.ok(mockHook.boardOwner);
  });
});
