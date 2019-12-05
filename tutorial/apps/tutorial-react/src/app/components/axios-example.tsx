import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

type Book = {
  volumeInfo: {
    title: string;
  }
}

type Books = {
  items: Book[]
}

const output = axios.get<Books>('https://www.googleapis.com/books/v1/volumes?q=harry+potter');

export const AxiosExample: FC = () => {
  const [books, setBooks] = useState({} as Books);

  useEffect(() => {
    if (output) {
      output.then((result) => {
        setBooks(result.data);
      });
    }
  }, []);

  return (<>
    <div style={{ 'display': 'grid', 'gridAutoFlow': 'row' }}>
      {
        books.items ? books.items.map(({volumeInfo: {title}}, key) =>
        <span key={key}>{title}</span>): <span>LOADING...</span>
      }
    </div>
  </>);
};
