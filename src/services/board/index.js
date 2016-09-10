'use strict';

const service = require('feathers-mongoose');
const board = require('./board-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: board,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/boards', service(options));

  // Get our initialize service to that we can bind hooks
  const boardService = app.service('/boards');

  // Set up our before hooks
  boardService.before(hooks.before);

  // Set up our after hooks
  boardService.after(hooks.after);
};
