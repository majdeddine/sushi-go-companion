import { Player } from 'models'

const PlayerResolver = {
  allPlayers: async () => {
    const Players = await Player.find()
    return Players
  },
  findPlayerById: async args => {
    const player = await Player.findById(args._id)
    return player
  },
}
export { PlayerResolver }
