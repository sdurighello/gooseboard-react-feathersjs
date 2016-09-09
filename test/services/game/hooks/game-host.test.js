'use strict';

const assert = require('assert');
const gameHost = require('../../../../src/services/game/hooks/game-host.js');

describe('game gameHost hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    gameHost()(mockHook);

    assert.ok(mockHook.gameHost);
  });
});
