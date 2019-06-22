import mongoose from 'mongoose'

const { Schema } = mongoose

const PlayerSchema = new Schema({
  score: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true,
  },
  color: String,
  createdAt: String,
})

PlayerSchema.plugin(require('mongoose-autopopulate'))

const PlayerModel = mongoose.model('Player', PlayerSchema)

export { PlayerModel as Player }
