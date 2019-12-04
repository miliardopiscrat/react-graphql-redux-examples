import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { createHttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import ApolloClient from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { schema } from '@tutorial/api-interfaces';

export const createClient = (): ApolloClient<NormalizedCacheObject> => {
  const wsLink = new WebSocketLink(new SubscriptionClient(`ws://${window.location.hostname}:3333/graphql`, {
    reconnect: true
  }));

  const httpLink = createHttpLink({ uri: `http://${window.location.hostname}:3333/graphql` });

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink
  );

  return new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
    resolvers: {
    },
    connectToDevTools: true,
    typeDefs: schema
  });
};
