import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const { bookArray, isLoading, error } = useSelector((store) => store.book);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (bookArray ? (
    <h2>Bookstore is empty.</h2>
  ) : (
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
  ));
};

export default BookList;
