import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const newBook = {
    item_id: uuidv4(),
    title,
    author,
    category: 'book',
  };

  // wVuhDZngzRqOjmOnw2vm

  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch(addBook(newBook));
        }}
      >
        Add Book
      </button>
    </form>
  );
};
export default BookForm;
