import PropTypes from 'prop-types';

const Book = ({ author, title, id }) => (
  <div>
    <h3>{title}</h3>
    <h5>{author}</h5>
    <button type="button" id={id}>
      Remove
    </button>
  </div>
);

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Book;
