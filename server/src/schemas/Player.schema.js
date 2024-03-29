const Player = `
  type Player {
    _id: ID!
    score: Int!
    user: User!
  }
`;

const PlayerQueries = `
  allPlayers: [Player]!
  
  findPlayerById(_id: ID!): Player
`;

const PlayerMutations = '';

const PlayerSchema = {
  Player,
  PlayerQueries,
  PlayerMutations,
};

export { PlayerSchema };
