Since we configured graphqlHTTP with graphiql: true, you can use the GraphiQL tool to manually issue GraphQL queries. If you navigate in a web browser to http://localhost:4000/graphql, you should see an interface that lets you enter queries.

### Queries

query getMyIp {
  ip
}

// N + 1 issue
query getMeTheSimpleHumanAndShowThereIsNPlusOneProblem{
  simpleHuman(id: 1) {
    id,
    friends {
      id,
      friends {
        id
      }
    }
  }
}

// N + 1 problem solved with dataloader

query getMeTheDataloaderHumanAndShowThereIsNoNPlusOneProblem{
  dataloaderHuman(id: 1) {
    id,
    friends {
      id,
      friends {
        id,
        friends {
          id
        }
      }
    }
  }
}