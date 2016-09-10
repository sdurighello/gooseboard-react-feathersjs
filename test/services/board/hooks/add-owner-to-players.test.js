'use strict';

const assert = require('assert');
const addOwnerToPlayers = require('../../../../src/services/board/hooks/add-owner-to-players.js');

describe('board addOwnerToPlayers hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    addOwnerToPlayers()(mockHook);

    assert.ok(mockHook.addOwnerToPlayers);
  });
});
