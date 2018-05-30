var express = require('express');
var graphqlHTTP = require('express-graphql');

const schema = require('./schema');
const root = require('./resolver');

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  context: {
    foo: 'bar'
  }
}));
app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});