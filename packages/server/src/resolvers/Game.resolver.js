import { Game, Player } from 'models'

const GameResolver = {
  allGames: async () => {
    const Games = await Game.find()
    return Games
  },
  findGameById: async args => {
    const game = await Game.findById(args._id)
    return game
  },
  addGame: async ({ players }) => {
    let participants = []
    players.forEach(player => {
      Player.create({ ...player, createdAt: new Date() }, (err, savedPlayer) => {
        if (err) {
          console.log(err)
          return err
        }
        participants = [...participants, savedPlayer._id]
      })
    })
    Game.create(
      {
        players: participants,
        createdAt: new Date(),
      },
      (err, savedGame) => savedGame,
    )
  },
  updateGame: async args => {
    const { _id } = args
    delete args._id
    args.updatedAt = new Date()
    const updatedGame = await Game.findByIdAndUpdate(_id, args, { new: true })
    return updatedGame
  },
  deleteGame: async ({ _id }) => {
    const deletedGame = await Game.findByIdAndRemove(_id)
    deletedGame.players.forEach(player => {
      Player.findByIdAndRemove(player._id)
    })
    return deletedGame
  },
}
export { GameResolver }
