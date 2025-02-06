import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import css from "./Recommended.module.css";

const Recommended = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className={css.containerHome}>
      <Dashboard />
      <div className={css.containerRecommended}>Recommended</div>
    </div>
  );
};

export default Recommended;
