import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";

export const LoginForm = () => {
  const navigate = useNavigate(); // Для переадресації
  const schema = Yup.object({
    email: Yup.string()
      .matches(
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        "Невірний формат email"
      )
      .required("Обов'язкове поле"),
    password: Yup.string()
      .min(7, "Мінімум 7 символів")
      .required("Обов'язкове поле"),
  });

  // Використовуємо react-hook-form для обробки форми
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Обробка відправки форми
  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      if (response.token) {
        // Якщо є токен, зберігаємо його в localStorage
        localStorage.setItem("token", response.token);
        toast.success("Успішний вхід! Ви автоматично авторизовані.");
        // Переадресовуємо на приватну сторінку
        navigate("/recommended");
      }
    } catch {
      // Якщо виникла помилка від backend
      toast.error("Невірний email або пароль.");
    }
  };

  return (
    <div className="login-container">
      <ToastContainer /> {/* Контейнер для сповіщень */}

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}
        </div>

        <button type="submit">Log in</button>
        <NavLink to="/register">Don’t have an account?</NavLink>
      </form>
    </div>
  );
};


// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { NavLink } from "react-router-dom";
// import * as Yup from "yup";
// import { loginUser } from "../../services/api";

// export const LoginForm = () => {
//   const initialValues = {
//     email: "",
//     password: "",
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email("Невірний формат email")
//       .required("Обов'язкове поле"),
//     password: Yup.string()
//       .min(6, "Мінімум 6 символів")
//       .required("Обов'язкове поле"),
//   });

//   const handleSubmit = async (values, { setSubmitting, setErrors }) => {
//     try {
//       const userData = await loginUser(values);
//       console.log("Успішний вхід:", userData);
//     } catch {
//       setErrors({ email: "Невірний email або пароль" });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form className="login-form">
//             <div>
//               <Field type="email" name="email" placeholder="Email" />
//               <ErrorMessage name="email" component="div" className="error" />
//             </div>

//             <div>
//               <Field type="password" name="password" placeholder="Password" />
//               <ErrorMessage name="password" component="div" className="error" />
//             </div>

//             <button type="submit" disabled={isSubmitting}>
//               {isSubmitting ? "Signing in..." : "Sign in"}
//             </button>
//             <NavLink to="/register">Don’t have an account?</NavLink>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };
