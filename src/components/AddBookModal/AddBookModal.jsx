import { CloseBtnIcon } from "../Icons";
import css from "./AddBookModal.module.css";

// eslint-disable-next-line react/prop-types
const AddBookModal = ({ onClose }) => {
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
          <img className={css.bookImg} src="{book.imageUrl}" alt="book" />
          <h3 className={css.bookTitle}>Book title</h3>
          <p className={css.bookAuthor}>Book Author</p>
          <p className={css.pages}>pages</p>
          <button className={css.addBtn} type="button">
            Add to library
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBookModal;

// import { CloseBtnIcon } from "../Icons";
// import css from "./AddBookModal.module.css";

// const AddBookModal = () => {
//   return (
//     <div className={css.overlayAddModal}>
//       <div className={css.modal} onClick={(e) => e.stopPropagation()}>
//         <button className={css.closeButton}>
//           <CloseBtnIcon className={css.closeIcon} />
//         </button>
//         <div className={css.containerModalInfo}>
//           <img className={css.bookImg} src="{book.imageUrl}" alt="book" />
//           <h3 className={css.bookTitle}>Book title</h3>
//           <p className={css.bookAuthor}>Book Author</p>
//           <p className={css.pages}>pages</p>
//           <button className={css.addBtn} type="button">Add to library</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddBookModal;
