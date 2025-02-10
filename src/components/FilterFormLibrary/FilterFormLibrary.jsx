import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

import css from "./FilterFormLibrary.module.css";

export const FilterSchema = Yup.object().shape({
  title: Yup.string().trim(),
  author: Yup.string().trim(),
});

export const FilterFormLibrary = ({ onFilter }) => {
  return (
    <Formik
      initialValues={{ title: "", author: "" }}
      validationSchema={FilterSchema}
      onSubmit={(values) => {
        onFilter(values);
      }}
    >
      {({ handleSubmit }) => (
        <Form className={css.filterForm} onSubmit={handleSubmit}>
          <p className={css.filter}>Filter:</p>
          <label>
            <Field
              className={css.input}
              type="text"
              name="title"
              placeholder="Book title:"
            />
          </label>

          <label>
            <Field
              className={css.input}
              type="text"
              name="author"
              placeholder="The author:"
            />
          </label>

          <label>
            <Field
              className={css.input}
              type="text"
              name="author"
              placeholder="Number of pages:"
            />
          </label>

          <button className={css.filterBtn} type="submit">
            Add book
          </button>
        </Form>
      )}
    </Formik>
  );
};

FilterFormLibrary.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
