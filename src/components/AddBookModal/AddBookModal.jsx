import { CloseBtnIcon } from "../Icons";
import css from "./AddBookModal.module.css";
import PropTypes from "prop-types";
import { addBookToLibrary } from "../../services/api";

const AddBookModal = ({ book, onClose, onAddBook }) => {
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
      alert("Book successfully added!");
      onClose();
    } catch {
      alert("Failed to add book. Please try again.");
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
          <p className={css.pages}>{book.totalPages} pages</p>
          <button className={css.addBtn} type="button" onClick={handleAddBook}>
            Add to library
          </button>
        </div>
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

// import { CloseBtnIcon } from "../Icons";
// import css from "./AddBookModal.module.css";
// import PropTypes from "prop-types";
// import { addBookToLibrary } from "../../services/api";

// const AddBookModal = ({ book, onClose }) => {
//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   const handleAddBook = async () => {
//     console.log("Book object:", book);
//     try {
//       await addBookToLibrary(book._id);
//       alert("Book successfully added!");
//       onClose();
//     } catch {
//       alert("Failed to add book. Please try again.");
//     }
//   };

//   return (
//     <div className={css.overlayAddModal} onClick={handleOverlayClick}>
//       <div className={css.modal} onClick={(e) => e.stopPropagation()}>
//         <button className={css.closeButton} onClick={onClose}>
//           <CloseBtnIcon className={css.closeIcon} />
//         </button>
//         <div className={css.containerModalInfo}>
//           <img className={css.bookImg} src={book.imageUrl} alt={book.title} />
//           <h3 className={css.bookTitle}>{book.title}</h3>
//           <p className={css.bookAuthor}>{book.author}</p>
//           <p className={css.pages}>{book.totalPages} pages</p>
//           <button className={css.addBtn} type="button" onClick={handleAddBook}>
//             Add to library
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// AddBookModal.propTypes = {
//   book: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     totalPages: PropTypes.number.isRequired,
//   }).isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// export default AddBookModal;
