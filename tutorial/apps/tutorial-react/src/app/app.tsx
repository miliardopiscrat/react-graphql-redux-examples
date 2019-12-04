import React, {} from 'react';
import { GetBooks } from 'apps/tutorial-react/src/app/components/get-books-query';
import { BorrowBooks } from 'apps/tutorial-react/src/app/components/borrow-book-mutation';
import { BorrowBocksSubscription } from 'apps/tutorial-react/src/app/components/borrow-books-channel-subscribtion';
import { GetBooksCache } from 'apps/tutorial-react/src/app/components/get-books-cache-query';
import { ReadCacheComponent } from 'apps/tutorial-react/src/app/components/read-cache-query';

export const App = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <GetBooks/>
      </div>
    </>
  );
};

export default App;
