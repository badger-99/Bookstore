import Book from './Book';
import { useTheme } from './BookContext';

const BookList = () => {
  const { bookCollection } = useTheme();

  return (
    <div>
      {bookCollection.map((item) => (
        <Book key={item.id} id={item.id} author={item.author} title={item.title} />
      ))}
    </div>
  );
};

export default BookList;
