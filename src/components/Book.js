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
      <div className="buttons">
        <button type="button" className="Text-Style-8">Comments</button>
        <button type="button" id={id} onClick={() => dispatch(removeBook(id))} className="Text-Style-8">
          Remove
        </button>
        <button type="button" className="Text-Style-8">Edit</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
