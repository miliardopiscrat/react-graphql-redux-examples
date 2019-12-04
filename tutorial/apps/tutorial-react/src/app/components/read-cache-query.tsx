import React, {} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

type LastBorrowBookStore = {
  lastBorrowBookSuccess: boolean;
}

const cacheQuery = gql`
    query {
        lastBorrowBookSuccess @client
    }
`;

export const ReadCacheComponent = () => {
  const { data } = useQuery<LastBorrowBookStore>(cacheQuery);

  return (<div style={{ paddingTop: 20 }}>
    {!data && 'THERE IS NO VALUE IN CACHE'}
    {data && <span>{JSON.stringify(data)}</span>}
  </div>);
};
