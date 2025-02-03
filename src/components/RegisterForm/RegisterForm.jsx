import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { registerUser } from "../../services/api";
import { toast, ToastContainer } from "react-toastify";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Невірний формат email")
      .required("Обов'язкове поле"),
    password: Yup.string()
      .min(6, "Мінімум 6 символів")
      .required("Обов'язкове поле"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Паролі повинні збігатися")
      .required("Обов'язкове поле"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const data = await registerUser(values);

      if (data.token) {
        localStorage.setItem("token", data.token);
        toast.success("Реєстрація успішна! Ви автоматично авторизовані.");
        navigate("/recommended");
      }
    } catch {
      toast.error("Сталася помилка при реєстрації. Спробуйте ще раз.");
      setErrors({ email: "Щось пішло не так, спробуйте ще раз." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="register-container">
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="register-form">
            <div>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div>
              <Field type="password" name="confirmPassword" />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Sign up
            </button>
            <NavLink to={"/login"}>Already have an account?</NavLink>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { NavLink } from "react-router-dom";
// import * as Yup from "yup";

// const RegisterForm = () => {
//   const initialValues = {
//     email: "",
//     password: "",
//     confirmPassword: "",
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email("Невірний формат email")
//       .required("Обов'язкове поле"),
//     password: Yup.string()
//       .min(6, "Мінімум 6 символів")
//       .required("Обов'язкове поле"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Паролі повинні збігатися")
//       .required("Обов'язкове поле"),
//   });

//   const handleSubmit = (values, { setSubmitting }) => {
//     console.log("Реєстрація: ", values);
//     setTimeout(() => {
//       setSubmitting(false);
//     }, 1000);
//   };

//   return (
//     <div className="register-container">
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form className="register-form">
//             <div>
//               <Field type="email" name="email" />
//               <ErrorMessage name="email" component="div" className="error" />
//             </div>

//             <div>
//               <Field type="password" name="password" />
//               <ErrorMessage name="password" component="div" className="error" />
//             </div>

//             <div>
//               <Field type="password" name="confirmPassword" />
//               <ErrorMessage
//                 name="confirmPassword"
//                 component="div"
//                 className="error"
//               />
//             </div>

//             <button type="submit" disabled={isSubmitting}>
//               Sign up
//             </button>
//             <NavLink to={"/login"}>Already have an account?</NavLink>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default RegisterForm;
