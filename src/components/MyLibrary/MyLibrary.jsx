// import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import {Dropdown} from "../Dropdown/Dropdown";
import css from "./MyLibrary.module.css";

const MyLibrary = () => {
  return (
    <div className={css.containerMyLibrary}>
      <Dashboard />
      <div className={css.myLibrary}>
        <div className={css.containerTitleDropdown}>
          <h3 className={css.myLibraryTitle}>My library</h3>

          <div className={css.dropdownContainer}>
            <Dropdown/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
