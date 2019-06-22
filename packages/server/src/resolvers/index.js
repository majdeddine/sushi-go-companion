import { UserResolver } from './User.resolver'
import { GameResolver } from './Game.resolver'
import { PlayerResolver } from './Player.resolver'

const Resolvers = {
  ...UserResolver,
  ...GameResolver,
  ...PlayerResolver,
}

export { Resolvers }
