'use strict';

const defaultTiles = require('./default-tiles');

const addOwnerToPlayers = require('./add-owner-to-players');

const boardOwner = require('./board-owner');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [boardOwner(), addOwnerToPlayers(), defaultTiles()],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
