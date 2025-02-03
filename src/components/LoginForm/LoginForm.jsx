import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";

import { loginUser } from "../../services/api";
import css from "./LoginForm.module.css";
import { MainLogoIcon } from "../Icons";

export const LoginForm = () => {
  const navigate = useNavigate();
  const schema = Yup.object({
    email: Yup.string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Невірний формат email")
      .required("Обов'язкове поле"),
    password: Yup.string()
      .min(7, "Мінімум 7 символів")
      .required("Обов'язкове поле"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      if (response.token) {
        localStorage.setItem("token", response.token);
        toast.success("Успішний вхід! Ви автоматично авторизовані.");
        navigate("/recommended");
      }
    } catch {
      toast.error("Невірний email або пароль.");
    }
  };

  return (
    <div className={css.loginContainer}>
      <ToastContainer />
      <MainLogoIcon />

      <p className={css.loginHeader}>
        Expand your mind, reading{" "}
        <span className={css.highlighted}>a book</span>
      </p>

      <form className={css.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className={css.loginInput}
            type="email"
            placeholder="Mail:"
            {...register("email")}
          />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </div>

        <div>
          <input
            className={css.loginInput}
            type="password"
            placeholder="Password:"
            {...register("password")}
          />
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}
        </div>

        <div className={css.containerLoginBtn}>
          <button className={css.loginBtn} type="submit">
            Log in
          </button>
          <NavLink className={css.toRegisterLink} to="/register">
            Don’t have an account?
          </NavLink>
        </div>
      </form>
    </div>
  );
};
