import { CloseBtnIcon } from "../Icons";
import css from "./AddBookModal.module.css";
import PropTypes from "prop-types";

const AddBookModal = ({ book, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.overlayAddModal} onClick={handleOverlayClick}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}>
          <CloseBtnIcon className={css.closeIcon} />
        </button>
        <div className={css.containerModalInfo}>
          <img className={css.bookImg} src={book.imageUrl} alt={book.title} />
          <h3 className={css.bookTitle}>{book.title}</h3>
          <p className={css.bookAuthor}>{book.author}</p>
          <p className={css.pages}>{book.pages} pages</p>
          <button className={css.addBtn} type="button">
            Add to library
          </button>
        </div>
      </div>
    </div>
  );
};

AddBookModal.propTypes = {
  book: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddBookModal;
