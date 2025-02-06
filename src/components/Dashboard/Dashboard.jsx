import { FilterForm } from "../FilterForm/FilterForm";
import FunctionalDescription from "../FunctionalDescription/FunctionalDescription";
import css from "./Dashboard.module.css";

const Dashboard = () => {
  return <div className={css.containerDashboard}>
    <FilterForm/>
    <FunctionalDescription/>
  </div>;
};

export default Dashboard;
