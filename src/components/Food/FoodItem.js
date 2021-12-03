import Quant from "./Quant";
import FoodDesc from "./FoodDesc";
import styles from "./FoodItem.module.css";

function FoodItem(props) {
  const { name, price, id } = props.meal;
  return (
    <li className={styles.item}>
      <FoodDesc meal={props.meal} />
      <Quant name={name} price={price} id={id} />
    </li>
  );
}

export default FoodItem;
