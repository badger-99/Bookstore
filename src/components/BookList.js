import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { getBooks } from '../redux/books/bookSlice';

const BookList = () => {
  const { bookArray, isLoading, error } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [getBooks]);
  console.log(isLoading, error);
  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return bookArray ? (
    <div>
      {bookArray.map((item) => (
        <Book
          key={item.id}
          id={item.id}
          author={item.author}
          title={item.title}
        />
      ))}
    </div>
  ) : (
    <h2>Bookstore is empty.</h2>
  );
};

export default BookList;
