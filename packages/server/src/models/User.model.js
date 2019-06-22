import mongoose from 'mongoose'

const { Schema } = mongoose

const UserSchema = new Schema({
  forename: String,
  surname: String,
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  scope: [String],
  avatar: String,
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Game',
      autopopulate: true,
    },
  ],
  participations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Player',
      autopopulate: true,
    },
  ],
  createdAt: String,
  updatedAt: String,
})

UserSchema.plugin(require('mongoose-autopopulate'))

const UserModel = mongoose.model('User', UserSchema)

export { UserModel as User }
