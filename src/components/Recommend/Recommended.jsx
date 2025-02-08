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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetchRecommendedBooks(1, 10)
      .then((data) => console.log(data))
      .catch((error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      });
  }, [navigate]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchRecommendedBooks(page);
        setBooks(data.results);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error during fetching recommended books:", error);
      }
    };
    loadBooks();
  });

  return (
    <div className={css.containerHome}>
      <Dashboard />
      <div className={css.containerRecommended}>
        <div className={css.containerPagination}>
          <h3 className={css.recommendedTitle}>Recommended</h3>
          <ul className={css.pagnationList}>
            <li className={css.pagnationListItem}>
              <button
                className={css.pagnationButton}
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                L
              </button>
            </li>
            <li className={css.pagnationListItem}>
              <button
                className={css.pagnationButton}
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

        <ul className={css.recommendedList}>
          {books?.length > 0 ? (
            books.map((book) => (
              <li key={book._id} className={css.recommendedListItem}>
                <img
                  className={css.recommendedImg}
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
