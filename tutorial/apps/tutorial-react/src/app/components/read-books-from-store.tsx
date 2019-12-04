import React from 'react';
import { selectBooks } from 'apps/tutorial-react/src/app/core/books-reducer';
import { shallowEqual, useSelector } from 'react-redux';

export const ReadBooksFromStore = () => {
  const books = useSelector(selectBooks, shallowEqual);

  return (<div style={{ 'display': 'grid', 'gridAutoFlow': 'row', 'color': 'blue' }}>
    {books.map((book, key) => <span key={key}>{book.title}-{book.author}</span>)}
  </div>);
};
