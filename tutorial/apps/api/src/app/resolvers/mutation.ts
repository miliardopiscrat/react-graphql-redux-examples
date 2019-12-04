import { BorrowBookMutationVariables, BorrowInfo } from '@tutorial/api-interfaces';
import { borrowBook } from '../mutations/borrow-book';
import { pubSub } from '../pub';

export const mutation = {
  borrowBook: async (_: undefined, variables: BorrowBookMutationVariables) => {
    const result = borrowBook(variables);

    if (result) {
      await pubSub.publish(
        'borrowBooksChannel',
        { borrowBooksChannel: { id: variables.id } as BorrowInfo });
    }
    return result;
  }
};
