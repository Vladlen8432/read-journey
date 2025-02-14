import PropTypes from "prop-types";
import { CloseBtnIcon } from "../Icons";
import css from "./StartReadingModal.module.css";

export const StartReadingModal = ({ book, onClose }) => {
  return (
    <div className={css.startReadingOverlay} onClick={onClose}>
      <div
        className={css.startReadingModal}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={css.closeButton} onClick={onClose}>
          <CloseBtnIcon className={css.closeIcon} />
        </button>
        <img className={css.bookImg} src={book.imageUrl} alt={book.title} />
        <h3 className={css.bookTitle}>{book.title}</h3>
        <p className={css.bookAuthor}>{book.author}</p>
        <p className={css.pages}>{book.pages} pages</p>
        <button className={css.startReadingBtn} type="button">
          Start reading
        </button>
      </div>
    </div>
  );
};

StartReadingModal.propTypes = {
  book: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
