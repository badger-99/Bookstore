import Book from './Book';

const books = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    id: 1,
  },

  {
    title: 'Dune',
    author: 'Frank Herbert',
    id: 2,
  },

  {
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    id: 3,
  },
];

const BookList = () => (
  <div>
    {books.map((book) => (
      <Book key={book.id} author={book.author} title={book.title} />
    ))}
  </div>
);
export default BookList;
