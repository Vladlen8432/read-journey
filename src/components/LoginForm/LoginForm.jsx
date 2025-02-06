import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { loginUser } from "../../services/api";
import css from "./LoginForm.module.css";
import { MainLogoIcon } from "../Icons";

const validationSchema = Yup.object({
  email: Yup.string()
    .matches(/^[\w.-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Невірний формат email")
    .required("Обов'язкове поле"),
  password: Yup.string()
    .min(7, "Мінімум 7 символів")
    .required("Обов'язкове поле"),
});

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await loginUser(values);
      if (response.token) {
        localStorage.setItem("token", response.token);
        toast.success("Успішний вхід! Ви автоматично авторизовані.");
        navigate("/recommended");
      }
    } catch {
      toast.error("Невірний email або пароль.");
    }
    setSubmitting(false);
  };

  return (
    <div className={css.loginContainer}>
      <div className={css.logoContainer}>
        <MainLogoIcon />
        <p className={css.logoText}>read journey</p>
      </div>

      <h1 className={css.loginTitle}>
        Expand your mind, reading{" "}
        <span className={css.highlighted}>a book</span>
      </h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.loginForm}>
            <div>
              <Field
                className={css.loginInput}
                type="email"
                name="email"
                placeholder="Mail:"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <Field
                className={css.loginInput}
                type="password"
                name="password"
                placeholder="Password:"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className={css.containerLoginBtn}>
              <button
                className={css.loginBtn}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Log in"}
              </button>
              <NavLink className={css.toRegisterLink} to="/register">
                Don’t have an account?
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
