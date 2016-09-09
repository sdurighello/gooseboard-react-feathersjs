'use strict';

// game-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  symbol: { type: String, required: true },
  flipped: { type: Boolean, required: true, 'default': false },
});

const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  color: { type: String, required: false },
  pairs: [String]
});

const gameSchema = new Schema({
  cards: [cardSchema],
  players: [playerSchema],
  started: { type: Boolean, required: true, 'default': false },
  winner: { type: Number, required: false },
  turn: { type: Number, required: true, 'default': 0 },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
