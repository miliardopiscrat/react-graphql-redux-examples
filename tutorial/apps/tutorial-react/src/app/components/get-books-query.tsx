import React, {} from 'react';
import { useGetBooksQuery } from '@tutorial/api-interfaces';

export const GetBooks = () => {
  const { data, loading, error, networkStatus  } = useGetBooksQuery({ pollInterval: 100 });

  return (<div style={{ 'display': 'grid', 'gridAutoFlow': 'row' }}>
    {data && data.books.map((book, index) => <div key={index}>{book.title}</div>)}
    {error && <span>{error.message}</span>}
    {loading && <span>IS LOADING...</span>}
    {<span>{'NETWORK status: ' + networkStatus}</span>}
  </div>);
};
