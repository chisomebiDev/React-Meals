import Quant from "./Quant";
import FoodDesc from "./FoodDesc";
import styles from "./FoodItem.module.css";

function FoodItem() {
  return (
    <li className={styles.item}>
      <FoodDesc />
      <Quant />
    </li>
  );
}

export default FoodItem;
