'use strict';

// src/services/game/hooks/game-host.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const user = hook.params.user;

    hook.data.players = [{
      userId: user._id,
      color: '#f00',
      pairs: []
    }];

  };
};
