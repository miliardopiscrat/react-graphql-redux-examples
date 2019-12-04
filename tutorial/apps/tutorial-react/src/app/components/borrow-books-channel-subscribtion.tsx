import React, {} from 'react';
import { useSubscribeToBorrowBooksChannelSubscription } from '@tutorial/api-interfaces';

export const BorrowBocksSubscription = () => {
  const { data, loading, error } = useSubscribeToBorrowBooksChannelSubscription({});

  return (<>
    <div style={{ 'paddingTop': 10 }}>
      {'SUBSCRIPTION:'}
      {error && <span>{error.message}</span>}
      {loading && <span>IS LOADING...</span>}
      {data && <span>{data.borrowBooksChannel.id}</span>}
    </div>
  </>);
};
