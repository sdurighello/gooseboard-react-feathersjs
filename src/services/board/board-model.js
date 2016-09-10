'use strict';

// board-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  name: { type: String, default: null },
  position: { type: Number, default: 1 },
  lastRoll: { type: Number, default: 0 }
});

const tileSchema = new Schema({
  position: { type: Number, required: true },
  cellNumber: { type: Number, required: true },
  players: [playerSchema],
  image: {type: String, default: null},
  borderwidth: {type: String, default: null},
  borderradius: {type: String, default: null}
});

const boardSchema = new Schema({
  owner: {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    name: { type: String, default: null }
  },
  winner: {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    name: { type: String, default: null }
  },
  whoIsPlaying: {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    name: { type: String, default: null }
  },
  tiles: [tileSchema],
  players: [playerSchema],
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const boardModel = mongoose.model('board', boardSchema);

module.exports = boardModel;
