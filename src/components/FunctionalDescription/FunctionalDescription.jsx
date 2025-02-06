import { NavLink } from "react-router-dom";
import { ArrowIcon } from "../Icons";
import css from "./FunctionalDescription.module.css";

const FunctionalDescription = () => {
  return (
    <div className={css.functionalDescription}>
      <h3 className={css.functionalDescriptionTitle}>Start your workout</h3>

      <ul className={css.functionalList}>
        <li className={css.functionalListItem}>
          <div className={css.listNumber}>1</div>
          <p className={css.listText}>
            Create a personal library:{" "}
            <span className={css.listTextSpan}>
              add the books you intend to read to it.
            </span>
          </p>
        </li>

        <li className={css.functionalListItem}>
          <div className={css.listNumber}>2</div>
          <p className={css.listText}>
            Create your first workout:{" "}
            <span className={css.listTextSpan}>
              define a goal, choose a period, start training.
            </span>
          </p>
        </li>
      </ul>

      <div className={css.toLibraryContainer}>
        <p className={css.toLibraryText}>My library</p>
        <NavLink to={"/library"}>
          <ArrowIcon />
        </NavLink>
      </div>
    </div>
  );
};

export default FunctionalDescription;
