import { ApolloServer } from 'apollo-server';
import { resolvers } from './app/resolvers/resolvers';
import { gql } from 'apollo-boost';
import { importSchema } from 'graphql-import';

const port = process.env.port || 3333;
const schema = importSchema('./libs/api-interfaces/src/lib/graphql/schema.graphql');

const server = new ApolloServer({ typeDefs: gql(schema), resolvers, tracing: true });

server.listen({ port }).then(({ url, subscriptionsUrl }) => {
  console.log(`🚀  Server ready at ${url}`);
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
});
