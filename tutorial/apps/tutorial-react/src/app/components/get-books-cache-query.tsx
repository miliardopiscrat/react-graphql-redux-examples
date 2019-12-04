import React, {} from 'react';
import { useGetBooksQuery } from '@tutorial/api-interfaces';

export const GetBooksCache = () => {
  const cache = useGetBooksQuery({ fetchPolicy: 'cache-only' });

  return (<div style={{ 'display': 'grid', 'gridAutoFlow': 'row' }}>
    {'CACHE:'}
    {cache.data && cache.data.books.map((book, index) => <div key={index}>{book.title}</div>)}
  </div>);
};
