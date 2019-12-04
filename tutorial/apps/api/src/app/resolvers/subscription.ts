import { pubSub } from '../pub';

export const subscription = {
  borrowBooksChannel: {
    subscribe: () => pubSub.asyncIterator(['borrowBooksChannel'])
  }
};
