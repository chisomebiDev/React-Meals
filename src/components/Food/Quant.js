import styles from "./Quant.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import { modalArray } from "../data/config";

function Quant(props) {
  const [quantFood, setQuantFood] = useState("0");
  let foodItem = { ...props, quantFood };

  function pushFood() {
    if (modalArray.length === 0) {
      modalArray.push(foodItem);
    }

    //If the food name is not in the array push the food
    const found = modalArray.some((food) => food.name === foodItem.name);
    if (!found) modalArray.push(foodItem);

    //If the food name is in the array an the value of the quantFood is less or greater update the quantFood
    modalArray.forEach((food) => {
      if (
        food.name === foodItem.name &&
        (+food.quantFood < +foodItem.quantFood ||
          +food.quantFood > +foodItem.quantFood)
      ) {
        food.quantFood = foodItem.quantFood;
      }
    });
  }

  function foodAddHandler(e) {
    e.preventDefault();
    pushFood();
  }

  function addFoodHandler(e) {
    setQuantFood(e.target.value);
    pushFood();
  }

  function buttonHandler() {
    setQuantFood(`${+quantFood + 1}`);
    pushFood();
  }

  return (
    <form className={styles.amount} onSubmit={foodAddHandler}>
      <div className={styles.desc}>
        <p className={styles.amt}>Amount</p>
        <input
          type="number"
          className={styles.input}
          min="1"
          value={quantFood}
          onChange={addFoodHandler}
        />
      </div>
      <Button onClick={buttonHandler}>+Add</Button>
    </form>
  );
}
export default Quant;
