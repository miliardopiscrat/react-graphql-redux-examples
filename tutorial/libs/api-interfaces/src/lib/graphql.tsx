import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Book = {
  __typename?: 'Book',
  id: Scalars['String'],
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
};

export type Mutation = {
  __typename?: 'Mutation',
  borrowBook?: Maybe<Scalars['Boolean']>,
};


export type MutationBorrowBookArgs = {
  id: Scalars['Int']
};

export type Query = {
  __typename?: 'Query',
  books: Array<Book>,
};

export type BorrowBookMutationVariables = {
  id: Scalars['Int']
};


export type BorrowBookMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'borrowBook'>
  );

export type GetBooksQueryVariables = {};


export type GetBooksQuery = (
  { __typename?: 'Query' }
  & {
  books: Array<(
    { __typename?: 'Book' }
    & Pick<Book, 'author' | 'title'>
    )>
}
  );


export const BorrowBookDocument = gql`
    mutation borrowBook($id: Int!) {
        borrowBook(id: $id)
    }
`;
export type BorrowBookMutationFn = ApolloReactCommon.MutationFunction<BorrowBookMutation, BorrowBookMutationVariables>;

/**
 * __useBorrowBookMutation__
 *
 * To run a mutation, you first call `useBorrowBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBorrowBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [borrowBookMutation, { data, loading, error }] = useBorrowBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBorrowBookMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BorrowBookMutation, BorrowBookMutationVariables>) {
  return ApolloReactHooks.useMutation<BorrowBookMutation, BorrowBookMutationVariables>(BorrowBookDocument, baseOptions);
}

export type BorrowBookMutationHookResult = ReturnType<typeof useBorrowBookMutation>;
export type BorrowBookMutationResult = ApolloReactCommon.MutationResult<BorrowBookMutation>;
export type BorrowBookMutationOptions = ApolloReactCommon.BaseMutationOptions<BorrowBookMutation, BorrowBookMutationVariables>;
export const GetBooksDocument = gql`
    query getBooks {
        books {
            author
            title
        }
    }
`;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
  return ApolloReactHooks.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, baseOptions);
}

export function useGetBooksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, baseOptions);
}

export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = ApolloReactCommon.QueryResult<GetBooksQuery, GetBooksQueryVariables>;
