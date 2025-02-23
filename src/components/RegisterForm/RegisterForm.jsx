import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { registerThunk } from "../../redux/auth/operations.js";
import css from "./RegisterForm.module.css";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      dispatch(registerThunk(data));
      console.log(data);

      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Registration failed!");
    }
  };

  return (
    <div>
      <form className={css.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input className={css.registerInput} {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <input className={css.registerInput} {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <input
            className={css.registerInput}
            type="password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
          <button type="submit" disabled={isSubmitting}>
            Registration
          </button>
          <NavLink to="/login">Already have an account?</NavLink>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
