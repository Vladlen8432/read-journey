import { useState } from "react";
import { CloseBtnIcon } from "../Icons";
import thumbUpImg from "../../assets/images/thumb-up@2x.png";
import css from "./AddBookModal.module.css";
import PropTypes from "prop-types";
import { addBookToLibrary } from "../../services/api";

const AddBookModal = ({ book, onClose, onAddBook }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAddBook = async () => {
    console.log("Book object:", book);
    try {
      await addBookToLibrary(book._id);
      onAddBook(book);
      setIsSuccess(true);
    } catch {
      alert("Failed to add book. Please try again.");
    }
  };

  return (
    <div className={css.overlayAddModal} onClick={handleOverlayClick}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        {!isSuccess ? (
          <>
            <button className={css.closeButton} onClick={onClose}>
              <CloseBtnIcon className={css.closeIcon} />
            </button>
            <div className={css.containerModalInfo}>
              <img
                className={css.bookImg}
                src={book.imageUrl}
                alt={book.title}
              />
              <h3 className={css.bookTitle}>{book.title}</h3>
              <p className={css.bookAuthor}>{book.author}</p>
              <p className={css.pages}>{book.totalPages} pages</p>
              <button
                className={css.addBtn}
                type="button"
                onClick={handleAddBook}
              >
                Add to library
              </button>
            </div>
          </>
        ) : (
          <div className={css.successfullAdded}>
            <button
              className={css.closeBtnSuccess}
              type="button"
              onClick={onClose}
            >
              <CloseBtnIcon className={css.closeIconSuccess} />
            </button>
            <img className={css.thumbUpImg} src={thumbUpImg} alt="thumbup" />
            <h3 className={css.successfullAddedTitle}>Good job</h3>
            <p className={css.successfullAddedText}>
              Your book is now in{" "}
              <span className={css.successfullTextSpan}>the library!</span> The
              joy knows no bounds and now you can start your training
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

AddBookModal.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    totalPages: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onAddBook: PropTypes.func.isRequired,
};

export default AddBookModal;
