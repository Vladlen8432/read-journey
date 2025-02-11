import { useState } from "react";
import css from "./Dropdown.module.css";
import { DropdownBtnIcon } from "../Icons";

const options = ["All books", "Unread", "In progress", "Done"];

export const Dropdown = () => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.dropdownContainer}>
      <button className={css.dropdownButton} onClick={() => setIsOpen(!isOpen)}>
        {selected}
        <DropdownBtnIcon
          className={`${css.dropdownIcon} ${isOpen ? css.open : ""}`}
        />
      </button>

      {isOpen && (
        <ul className={css.dropdownMenu}>
          {options.map((option) => (
            <li
              key={option}
              className={css.dropdownItem}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
