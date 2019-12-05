import React, { useEffect } from 'react';
import { Book, useGetBooksQuery } from '@tutorial/api-interfaces';
import { useDispatch } from 'react-redux';
import { loadBooksAction } from 'apps/tutorial-react/src/app/core/books-reducer';

export const GetBooks = () => {
  const { data, loading, error, networkStatus } = useGetBooksQuery({ pollInterval: 100 });
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(loadBooksAction(data.books as Book[]));
    }
  }, [data, dispatch]);

  return (<div style={{ 'display': 'grid', 'gridAutoFlow': 'row' }}>
    {data && data.books.map((book, index) => <div key={index}>{book.title}</div>)}
    {error && <span>{error.message}</span>}
    {loading && <span>IS LOADING...</span>}
    {<span>{'NETWORK status: ' + networkStatus}</span>}
  </div>);
};
