import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './app/app';
import { createClient } from './app/core/apollo-client';
import { createStore } from 'apps/tutorial-react/src/app/core/redux-store';
import { Provider } from 'react-redux';

const client = createClient();
const store = createStore(client);
ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App/>
    </Provider>
  </ApolloProvider>, document.getElementById('root'));
