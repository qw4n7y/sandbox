var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    ip: String
    simpleHuman(id: Int!): Human
    dataloaderHuman(id: Int!): Human
  }
  type Human {
    id: String
    friends: [Human]
  }
`);

module.exports = schema;