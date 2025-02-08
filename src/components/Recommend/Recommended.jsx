import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchRecommendedBooks } from "../../services/api";
import Dashboard from "../Dashboard/Dashboard";
import css from "./Recommended.module.css";

const Recommended = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    const updatePerPage = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setPerPage(2);
      } else if (width < 1024) {
        setPerPage(8);
      } else {
        setPerPage(10);
      }
    };

    updatePerPage();
    window.addEventListener("resize", updatePerPage);

    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetchRecommendedBooks(page, perPage)
      .then(({ results, totalPages }) => {
        setBooks(results);
        setTotalPages(totalPages);
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          console.error("Error during fetching recommended books:", error);
        }
      });
  }, [page, perPage, navigate]);

  return (
    <div className={css.containerHome}>
      <Dashboard />
      <div className={css.containerRecommended}>
        <div className={css.containerPagination}>
          <h3 className={css.recommendedTitle}>Recommended</h3>
          <ul className={css.paginationList}>
            <li className={css.paginationListItem}>
              <button
                className={css.paginationButton}
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                L
              </button>
            </li>
            <li className={css.paginationListItem}>
              <button
                className={css.paginationButton}
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={page === totalPages}
              >
                R
              </button>
            </li>
          </ul>
        </div>

        <ul className={css.booksList}>
          {books.length > 0 ? (
            books.map((book) => (
              <li key={book._id} className={css.bookListItem}>
                <img
                  className={css.bookImg}
                  src={book.imageUrl}
                  alt={book.title}
                />
                <h4 className={css.bookTitle}>{book.title}</h4>
                <p className={css.bookAuthor}>{book.author}</p>
              </li>
            ))
          ) : (
            <p>Loading books...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Recommended;
