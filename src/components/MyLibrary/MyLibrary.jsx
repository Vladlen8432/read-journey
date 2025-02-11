import Dashboard from "../Dashboard/Dashboard";
import { Dropdown } from "../Dropdown/Dropdown";
import books from "../../assets/images/books@2x.png";
import css from "./MyLibrary.module.css";
import { DeleteBtnIcon } from "../Icons";

const MyLibrary = () => {
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

        <div className={css.containerBooks}>
          <div className={css.subcontainerBooks}>
            <img className={css.booksImg} src={books} alt="books" />
          </div>

          <p className={css.booksText}>
            To start training, add{" "}
            <span className={css.booksTextSpan}>some of your books</span> or
            from the recommended ones
          </p>
        </div>

        <ul className={css.addedBooksList}>
          <li className={css.addedBooksItem}>
            <img src="" alt="book" />
            <div className={css.containerBookInfo}>
              <div className={css.subcontainerBookInfo}>
                <p className={css.bookInfoTitle}>Book title</p>
                <p className={css.bookInfoAuthor}>Author</p>
              </div>

              <button type="button" className={css.deleteBtnContainer}>
                <DeleteBtnIcon />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyLibrary;
