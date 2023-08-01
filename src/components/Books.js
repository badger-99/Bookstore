import BookForm from './BookForm';
import BookList from './BookList';
import BookProvider from './BookContext';

const Books = () => (
  <>
    <BookProvider>
      <BookList />
      <BookForm />
    </BookProvider>
  </>
);
export default Books;
