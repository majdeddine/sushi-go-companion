import mongoose from 'mongoose';

const { Schema } = mongoose;

const GameSchema = new Schema({
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Player',
      autopopulate: true,
    },
  ],
  createdAt: String,
});

GameSchema.plugin(require('mongoose-autopopulate'));

const GameModel = mongoose.model('Game', GameSchema);

export { GameModel as Game };
