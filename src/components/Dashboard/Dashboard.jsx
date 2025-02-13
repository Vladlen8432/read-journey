import { useLocation } from "react-router-dom";
import { FilterForm } from "../FilterForm/FilterForm";
import { FilterFormLibrary } from "../FilterFormLibrary/FilterFormLibrary";
import FunctionalDescription from "../FunctionalDescription/FunctionalDescription";
import Slogan from "../Slogan/Slogan";
import css from "./Dashboard.module.css";
import RecommendedBooks from "../RecommendedBooks/RecommendedBooks";

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className={css.containerDashboard}>
      {location.pathname === "/" && <FilterForm />}
      {location.pathname === "/library" && <FilterFormLibrary />}
      {location.pathname === "/" && <FunctionalDescription />}
      {location.pathname === "/library" && <RecommendedBooks />}

      {location.pathname === "/" && <Slogan style={{ display: "block" }} />}
      {location.pathname === "/recommended" && (
        <Slogan style={{ display: "none" }} />
      )}
    </div>
  );
};

export default Dashboard;
