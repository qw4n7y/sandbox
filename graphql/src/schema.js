var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    ip: String
    human(id: Int!): Human
  }
  type Human {
    id: String
    friends: [Human]
  }
`);

module.exports = schema;