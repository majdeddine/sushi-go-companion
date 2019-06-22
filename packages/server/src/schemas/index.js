import { buildSchema } from 'graphql'
import { UserSchema } from './User.schema'
import { GameSchema } from './Game.schema'
import { PlayerSchema } from './Player.schema'

const Schema = buildSchema(`
  ${UserSchema.User}
  ${GameSchema.Game}
  ${PlayerSchema.Player}

  type RootQuery {
    ${UserSchema.UserQueries}
    ${GameSchema.GameQueries}
    ${PlayerSchema.PlayerQueries}
  }

  type RootMutation {
    ${UserSchema.UserMutations}
    ${GameSchema.GameMutations}
    ${PlayerSchema.PlayerMutations}
  }

  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`)

export { Schema }
