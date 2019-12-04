import React, { useEffect, useState } from 'react';
import { useBorrowBookMutation } from '@tutorial/api-interfaces';
import { useDispatch } from 'react-redux';
import { borrowBookAction } from 'apps/tutorial-react/src/app/core/books-reducer';

export const BorrowBooks = () => {
  const [borrowId, setBorrowId] = useState('0');
  const [mutationFunction, { data, error, loading, client }] = useBorrowBookMutation({});
  const [result, setResult] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setResult(data.borrowBook);
      client.writeData({ data: { lastBorrowBookSuccess: data.borrowBook } });
    }
  }, [data]);

  return (<>
    <input type="text" value={`${borrowId}`}
           onChange={(event) => setBorrowId(event.target.value)}/>
    <input type="button" title="click me" value="DIRECT CALL"
           onClick={() => mutationFunction({ variables: { id: Number.parseInt(borrowId, 10) } })}/>
    <input type="button" title="click me" value="REDUX ACTION"
           onClick={() => dispatch(borrowBookAction(Number.parseInt(borrowId, 10)))}/>
    {<div>{result ? 'OK' : 'NOK'}</div>}
    {loading && <span>IS LOADING</span>}
    {error && <span>{error.message}</span>}
  </>);
};
