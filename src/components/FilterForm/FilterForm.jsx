import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

import css from "./FilterForm.module.css";

export const FilterSchema = Yup.object().shape({
  title: Yup.string().trim(),
  author: Yup.string().trim(),
});

export const FilterForm = ({ onFilter }) => {
  return (
    <Formik
      className={css.filterForm}
      initialValues={{ title: "", author: "" }}
      validationSchema={FilterSchema}
      onSubmit={(values) => {
        onFilter(values);
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
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

          <button className={css.filterBtn} type="submit">
            To apply
          </button>
        </Form>
      )}
    </Formik>
  );
};

FilterForm.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
