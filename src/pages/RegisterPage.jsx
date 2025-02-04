import FormImage from "../components/FormImage/FormImage";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import "./styles.css";

const RegisterPage = () => {
  return (
    <div className="pageContainer">
      <RegisterForm />
      <FormImage />
    </div>
  );
};

export default RegisterPage;
