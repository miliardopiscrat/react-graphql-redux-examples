import * as express from 'express';
import { BorrowBookMutationVariables, typeDefs } from '@tutorial/api-interfaces';
import { json } from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { borrowBook } from './app/mutations/borrow-book';
import { books } from './app/repository/books';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import { gql } from 'apollo-boost';
import { PubSub } from 'graphql-subscriptions';

const port = process.env.port || 3333;
const pubsub = new PubSub();
const resolvers = {
  Query: { books: () => books },
  Mutation: {
    borrowBook: (_: undefined, variables: BorrowBookMutationVariables) => {
      return borrowBook(variables);
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

app.use('/graphql', json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:${port}/subscriptions`
}));


const server = app.listen(port, () => {
  new SubscriptionServer({
    execute,
    subscribe,
    schema: gql(typeDefs)
  }, {
    server: server,
    path: '/subscriptions'
  });

  console.log(`Apollo Server is now running on http://localhost:${port}`);

});
server.on('error', console.error);
