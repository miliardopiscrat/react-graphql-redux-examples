import { Book } from '@tutorial/api-interfaces';
import { createEntityAdapter, EntityState } from 'redux-ngrx-entity';
import { createAction, createReducer, createSelector } from '@reduxjs/toolkit';
import { ApplicationStore } from 'apps/tutorial-react/src/app/core/redux-store';

export const loadBooksAction = createAction<Book[]>('LOAD_BOOKS');

export interface BooksState extends EntityState<Book> {
  loaded: boolean;
}

const adapter = createEntityAdapter<Book>({ sortComparer: false, selectId: (book) => book.id });
const { selectAll } = adapter.getSelectors();
const initialState = adapter.getInitialState({ loaded: false });
const selectBooks = createSelector((state: ApplicationStore) => state.booksFeature, selectAll);

export const booksReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadBooksAction, (state: BooksState, { payload }): BooksState => {
    return adapter.addAll(payload, { ...state, loaded: true });
  });
});

export { selectBooks };



