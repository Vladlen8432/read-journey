import booksImg from "../../assets/images/books.png";
import css from "./Slogan.module.css";
const Slogan = () => {
  return (
    <div className={css.containerSlogan}>
      <img className={css.boogsImg} src={booksImg} alt="books" />
      <p className={css.slogan}>
        {'"'}Books are <span className={css.span}>windows</span> to the world,
        and reading is a journey into the unknown.{'"'}
      </p>
    </div>
  );
};

export default Slogan;
