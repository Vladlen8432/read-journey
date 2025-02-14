import { useSelector, useDispatch } from "react-redux";
import Dashboard from "../Dashboard/Dashboard";
import { Dropdown } from "../Dropdown/Dropdown";
import booksImg from "../../assets/images/books@2x.png";
import css from "./MyLibrary.module.css";
import { DeleteBtnIcon } from "../Icons";
import { removeBook } from "../../redux/books/booksSlice";

const MyLibrary = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <div className={css.containerMyLibrary}>
      <Dashboard />
      <div className={css.myLibrary}>
        <div className={css.containerTitleDropdown}>
          <h3 className={css.myLibraryTitle}>My library</h3>
          <div className={css.dropdownContainer}>
            <Dropdown />
          </div>
        </div>

        <ul className={css.addedBooksList}>
          {books.length === 0 ? (
            <div className={css.containerEmptyLibrary}>
              <div className={css.subcontainerBooks}>
                <img className={css.booksImg} src={booksImg} alt="books" />
              </div>
              <p className={css.booksText}>
                To start training, add{" "}
                <span className={css.booksTextSpan}>some of your books </span>or
                from the recommended ones
              </p>
            </div>
          ) : (
            books.map((book) => (
              <li key={book._id} className={css.addedBooksItem}>
                <img
                  className={css.bookImg}
                  src={book.imageUrl}
                  alt={book.title}
                />
                <div className={css.containerBookInfo}>
                  <div className={css.subcontainerBookInfo}>
                    <h3 className={css.bookInfoTitle}>{book.title}</h3>
                    <p className={css.bookInfoAuthor}>{book.author}</p>
                  </div>
                  <button
                    type="button"
                    className={css.deleteBtnContainer}
                    onClick={() => dispatch(removeBook(book._id))}
                  >
                    <DeleteBtnIcon />
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyLibrary;
