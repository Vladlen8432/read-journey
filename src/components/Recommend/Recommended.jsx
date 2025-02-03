import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Recommended = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return <div>Recommended</div>;
};

export default Recommended;
