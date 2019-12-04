import React, {} from 'react';
import { GetBooks } from 'apps/tutorial-react/src/app/components/get-books-query';
import { BorrowBooks } from 'apps/tutorial-react/src/app/components/borrow-book-mutation';
import { BorrowBocksSubscription } from 'apps/tutorial-react/src/app/components/borrow-books-channel-subscribtion';
import { GetBooksCache } from 'apps/tutorial-react/src/app/components/get-books-cache-query';
import { ReadCacheComponent } from 'apps/tutorial-react/src/app/components/read-cache-query';
import { Provider } from 'react-redux';
import { store } from 'apps/tutorial-react/src/app/core/redux-store';
import { ReadBooksFromStore } from 'apps/tutorial-react/src/app/components/read-books-from-store';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <div style={{ textAlign: 'center' }}>
          <GetBooks/>
          <ReadBooksFromStore/>
        </div>
      </Provider>
    </>
  );
};

export default App;
