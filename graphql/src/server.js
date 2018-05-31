var express = require('express');
var graphqlHTTP = require('express-graphql');

const dataloaderHuman = require('./human/dataloader');

const schema = require('./schema');
const root = require('./resolver');

var app = express();
app.use('/graphql', graphqlHTTP(async (request, response, graphQLParams) => {
  const humanLoader = dataloaderHuman.createDataLoader();

  return {
    schema: schema,
    rootValue: root,
    graphiql: true,
    context: {
      request,
      humanLoader,
      foo: 'bar'
    }
  };
}));
app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});