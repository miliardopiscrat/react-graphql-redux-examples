import { Book } from '@tutorial/api-interfaces';

export const books: Book[] = [
  {
    id: '0',
    title: 'Harry Potter and the Sorcerer\'s stone',
    author: 'J.K. Rowling'
  },
  {
    id: '1',
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
];


setInterval((() => {
  let id = 2;
  return () => {
    if(id < 10) {

      books.push({
        id: `${id++}`,
        title: 'OTHER',
        author: 'OTHER'
      });
    }
  }

})(), 5000);
