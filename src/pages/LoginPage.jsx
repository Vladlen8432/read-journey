import FormImage from "../components/FormImage/FormImage";
import { LoginForm } from "../components/LoginForm/LoginForm";
import "./styles.css";

const LoginPage = () => {
  return (
    <div className="pageContainer">
      <LoginForm />
      <FormImage />
    </div>
  );
};

export default LoginPage;
