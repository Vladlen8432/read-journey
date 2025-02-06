import { FilterForm } from "../FilterForm/FilterForm";
import FunctionalDescription from "../FunctionalDescription/FunctionalDescription";
import Slogan from "../Slogan/Slogan";
import css from "./Dashboard.module.css";

const Dashboard = () => {
  return <div className={css.containerDashboard}>
    <FilterForm/>
    <FunctionalDescription/>
    <Slogan/>
  </div>;
};

export default Dashboard;
