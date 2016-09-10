'use strict';

// src/services/board/hooks/board-owner.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const user = hook.params.user;

    hook.data.owner = {
      userId: user._id,
      name: user.name,
    };

  };
};
