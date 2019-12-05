import React from 'react';
import { GetBooks } from 'apps/tutorial-react/src/app/components/get-books-query';
import { ReadBooksFromStore } from 'apps/tutorial-react/src/app/components/read-books-from-store';
import { BorrowBooks } from 'apps/tutorial-react/src/app/components/borrow-book-mutation';
import { AxiosExample } from 'apps/tutorial-react/src/app/components/axios-example';

export const App = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <AxiosExample/>
      </div>
    </>
  );
};

export default App;
