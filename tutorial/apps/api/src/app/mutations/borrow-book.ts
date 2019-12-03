import { BorrowBookMutationVariables } from '@tutorial/api-interfaces';
import { books } from '../repository/books';

export const borrowBook = ({ id }: BorrowBookMutationVariables): boolean => {
  return !!books[id];
};
