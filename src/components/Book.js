import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({
  author, title, id,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="bookCard">
      <div className="bookDetails">
        <span className="Text-Style-9 category">Book</span>
        <span className="Text-Style-5">{title}</span>
        <span className="Text-Style-8">{author}</span>
      </div>
      <button type="button" id={id} onClick={() => dispatch(removeBook(id))}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
