import iphone from "../../assets/images/iphone.png";
import css from "./FormImage.module.css";
const FormImage = () => {
  return (
    <div className={css.imageContainer}>
      <img className={css.imageItem} src={iphone} alt="iphone" />
    </div>
  );
};

export default FormImage;
