import { configureStore, getDefaultMiddleware, ReducersMapObject } from '@reduxjs/toolkit';
import { booksReducer, BooksState } from 'apps/tutorial-react/src/app/core/books-reducer';

export type ApplicationStore = {
  booksFeature: BooksState
}

const middleware = [...getDefaultMiddleware()];
const reducer: ReducersMapObject<ApplicationStore> = {
  booksFeature: booksReducer
};

export const store = configureStore<ApplicationStore>({ middleware, devTools: true, reducer });
