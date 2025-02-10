import { NavLink } from "react-router-dom";
import css from "./Modal.module.css";
import { CloseBtnIcon } from "../Icons";

// eslint-disable-next-line react/prop-types
const Modal = ({ onClose }) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose}>
          <CloseBtnIcon />
        </button>
        <ul className={css.modalList}>
          <li className={css.modalListItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.navLink} ${css.active}` : css.navLink
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={css.modalListItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.navLink} ${css.active}` : css.navLink
              }
              to="/library"
            >
              My library
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
