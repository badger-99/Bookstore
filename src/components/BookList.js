import Book from './Book';
import { useBookContext } from './BookContext';

const BookList = () => {
  const { bookCollection, setBookCollection } = useBookContext();

  const handleRemove = (id) => {
    const newCollection = bookCollection.filter((book) => book.id !== id);
    setBookCollection(newCollection);
  };

  return (
    <div>
      {bookCollection.map((item) => (
        <Book
          key={item.id}
          id={item.id}
          author={item.author}
          title={item.title}
          remove={handleRemove}
        />
      ))}
    </div>
  );
};

export default BookList;
