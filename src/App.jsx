import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {Layout} from "./components/Layout/Layout";
import RecommendPage from "./pages/RecommendedPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Layout />} />
          <Route path="/recommended" element={<RecommendPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
