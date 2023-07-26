import BookForm from './BookForm';
import BookList from './Booklist';
import BookProvider from './BookContext';

const Books = () => (
  <>
    <BookProvider>
      <h1>Books To Read</h1>
      <BookList />
      <BookForm />
    </BookProvider>
  </>
);
export default Books;
