import { Action, configureStore, getDefaultMiddleware, ReducersMapObject } from '@reduxjs/toolkit';
import { booksReducer, BooksState } from 'apps/tutorial-react/src/app/core/books-reducer';
import { borrowBookEpic } from 'apps/tutorial-react/src/app/core/borrow-book-epic';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import ApolloClient from 'apollo-client';

export type ApplicationStore = {
  booksFeature: BooksState;
}

export type EpicDependencies = {
  apolloClient: ApolloClient<object>;
}


export const createStore = (apolloClient: ApolloClient<object>) => {
  const rootEpic = combineEpics(borrowBookEpic);
  const epicMiddleware = createEpicMiddleware<Action, Action, ApplicationStore>({ dependencies: { apolloClient } });

  const middleware = [...getDefaultMiddleware(), epicMiddleware];
  const reducer: ReducersMapObject<ApplicationStore> = {
    booksFeature: booksReducer
  };

  const store = configureStore<ApplicationStore>({ middleware, devTools: true, reducer });

  epicMiddleware.run(rootEpic);

  return store;
};

