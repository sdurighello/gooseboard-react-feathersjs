'use strict';

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const user = hook.params.user;

    hook.data.players = [{
      userId: user._id,
      name: user.name,
      position: 1,
      lastRoll: 0
    }];

  };
};
