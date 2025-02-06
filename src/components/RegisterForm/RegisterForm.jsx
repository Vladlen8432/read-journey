import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { registerUser } from "../../services/api";
import css from "./RegisterForm.module.css";
import { MainLogoIcon } from "../Icons";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const schema = Yup.object({
    name: Yup.string().required("Обов'язкове поле"),
    email: Yup.string()
      .matches(/^[\w.-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Невірний формат email")
      .required("Обов'язкове поле"),
    password: Yup.string()
      .min(7, "Мінімум 7 символів")
      .required("Обов'язкове поле"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await registerUser(values);
      if (response.token) {
        localStorage.setItem("token", response.token);
        toast.success("Успішна реєстрація! Ви автоматично авторизовані.");
        navigate("/recommended");
      }
    } catch {
      toast.error("Помилка реєстрації. Спробуйте ще раз.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={css.registerContainer}>
      <div className={css.logoContainer}>
        <MainLogoIcon />
        <p className={css.logoText}>read journey</p>
      </div>

      <h1 className={css.registerTitle}>
        Expand your mind, reading{" "}
        <span className={css.highlighted}>a book</span>
      </h1>

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.registerForm}>
            <div>
              <Field
                className={css.registerInput}
                type="text"
                name="name"
                placeholder="Name:"
              />
              <ErrorMessage className="error" name="name" component="div" />
            </div>

            <div>
              <Field
                className={css.registerInput}
                type="email"
                name="email"
                placeholder="Mail:"
              />
              <ErrorMessage className="error" name="email" component="div" />
            </div>

            <div>
              <Field
                className={css.registerInput}
                type="password"
                name="password"
                placeholder="Password:"
              />
              <ErrorMessage className="error" name="password" component="div" />
            </div>

            <div className={css.containerRegisterBtn}>
              <button
                className={css.registerBtn}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Registration"}
              </button>
              <NavLink className={css.toLoginLink} to="/login">
                Already have an account?
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
