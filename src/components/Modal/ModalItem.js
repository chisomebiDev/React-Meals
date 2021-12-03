import styles from "./ModalItem.module.css";
import ModalBtn from "./ModalBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { modalArray } from "../data/config";

const minus = <FontAwesomeIcon icon={faMinusCircle} />;
const plus = <FontAwesomeIcon icon={faPlusCircle} />;

let newCheckOut;

function ModalItem(props) {
  const { setTotalAmt, total } = props.onIncrement;
  const { name, price, quantFood } = props.food;

  let [foodAmt, setFoodAmt] = useState(+quantFood);

  useEffect(() => {
    newCheckOut = modalArray.map((food) => {
      if (food.name === name) {
        return { ...food, quantFood: `${foodAmt}` };
      } else {
        return food;
      }
    });

    modalArray.forEach((foodItem, i) => {
      foodItem.quantFood = newCheckOut[i].quantFood;
    });

    let sum = modalArray.reduce((cum, cur) => {
      return cum + +cur.price * +cur.quantFood;
    }, 0);

    setTotalAmt(sum);
  }, [foodAmt, name, setTotalAmt]);

  function handleItemDecrease() {
    setTotalAmt(total);
    if (foodAmt >= 1) setFoodAmt((foodAmt -= 1));
  }

  function handleItemIncrease() {
    setTotalAmt(total);
    if (foodAmt > 0) setFoodAmt((foodAmt += 1));
  }

  return (
    <div className={styles.modalItem}>
      <div className={styles.item}>
        <div className={styles.priceName}>
          <h3>{name}</h3>
          <p className={styles.price}>${price}</p>
        </div>
        <p className={styles.itemNumber}>x{` ${foodAmt}`}</p>
      </div>

      <div>
        <ModalBtn onClick={handleItemDecrease}>{minus}</ModalBtn>
        <ModalBtn onClick={handleItemIncrease}>{plus}</ModalBtn>
      </div>
    </div>
  );
}

export default ModalItem;
