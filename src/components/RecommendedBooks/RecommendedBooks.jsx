import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { fetchRecommendedBooks } from "../../services/api";
import { ArrowIcon } from "../Icons";
import css from "./RecommendedBooks.module.css";

const RecommendedBooks = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const perPage = 3;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchBooks = async () => {
      try {
        const { results } = await fetchRecommendedBooks(1, perPage);
        setBooks(results);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          console.error("Error fetching recommended books:", error);
        }
      }
    };

    fetchBooks();
  }, [navigate]);

  return (
    <div className={css.containerRecommendedBooks}>
      <h3 className={css.recommendedBooksTitle}>Recommended books</h3>
      <ul className={css.recommendedBooksList}>
        {books.map((book) => (
          <li key={book._id} className={css.recommendedBooksItem}>
            <div className={css.booksContainerInfo}>
              <img
                className={css.bookImg}
                src={book.imageUrl}
                alt={book.title}
              />
              <h4 className={css.bookTitle}>{book.title}</h4>
              <p className={css.bookAuthor}>{book.author}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={css.toHomeContainer}>
        <NavLink to="/">
          <p className={css.toHomeText}>Home</p>
        </NavLink>
        <NavLink to="/">
          <ArrowIcon width={20} height={20} />
        </NavLink>
      </div>
    </div>
  );
};

export default RecommendedBooks;
