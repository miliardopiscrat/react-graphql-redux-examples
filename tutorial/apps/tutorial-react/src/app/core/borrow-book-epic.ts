import { Epic } from 'redux-observable';
import { from } from 'rxjs';
import { filter, ignoreElements, switchMap, tap } from 'rxjs/operators';
import { ApplicationStore, EpicDependencies } from 'apps/tutorial-react/src/app/core/redux-store';
import { borrowBookAction } from 'apps/tutorial-react/src/app/core/books-reducer';
import { BorrowBookDocument, BorrowBookMutationResult } from '@tutorial/api-interfaces';


export const borrowBookEpic: Epic<typeof borrowBookAction, never, ApplicationStore, EpicDependencies> = (action$, store, { apolloClient }) =>
  action$.pipe(
    filter(borrowBookAction.match),
    switchMap(({ payload }) => from(apolloClient.mutate<BorrowBookMutationResult>({
      mutation: BorrowBookDocument,
      variables: { id: payload }
    }))),
    tap((result) => console.log(JSON.stringify(result.data.borrowBook))),
    ignoreElements()
  );
