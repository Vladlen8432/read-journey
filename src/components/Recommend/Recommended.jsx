import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

const Recommended = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return <div>
    <Dashboard/>
    Recommended
    </div>;
};

export default Recommended;
