import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Layout } from "./components/Layout/Layout";
import RecommendPage from "./pages/RecommendedPage";
import MyLibraryPage from "./pages/MyLibraryPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<RecommendPage />} />
          <Route path="/recommended" element={<RecommendPage />} />
          <Route path="/library" element={<MyLibraryPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
