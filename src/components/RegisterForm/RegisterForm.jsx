import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { registerUser } from "../../services/api";
import css from "./RegisterForm.module.css";
import { MainLogoIcon } from "../Icons";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const schema = Yup.object({
    name: Yup.string().required("Обов'язкове поле"),
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
      const response = await registerUser(data);
      if (response.token) {
        localStorage.setItem("token", response.token);
        toast.success("Успішна реєстрація! Ви автоматично авторизовані.");
        navigate("/recommended");
      }
    } catch {
      toast.error("Помилка реєстрації. Спробуйте ще раз.");
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

      <form className={css.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className={css.registerInput}
            type="text"
            placeholder="Name:"
            {...register("name")}
          />
          {errors.name && <div className="error">{errors.name.message}</div>}
        </div>

        <div>
          <input
            className={css.registerInput}
            type="email"
            placeholder="Mail:"
            {...register("email")}
          />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </div>

        <div>
          <input
            className={css.registerInput}
            type="password"
            placeholder="Password:"
            {...register("password")}
          />
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}
        </div>

        <div className={css.containerRegisterBtn}>
          <button className={css.registerBtn} type="submit">
            Registration
          </button>
          <NavLink className={css.toLoginLink} to="/login">
            Already have an account?
          </NavLink>
        </div>
      </form>
    </div>
  );
};
