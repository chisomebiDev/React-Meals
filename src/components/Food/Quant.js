import styles from "./Quant.module.css";
import Button from "../UI/Button";
import { useState, useContext } from "react";
import CartContext from "../../store/modalArrayContext";
// import { modalArray } from "../data/config";

function Quant(props) {
  const cartCtx = useContext(CartContext);

  const [quantFood, setQuantFood] = useState("0");
  let foodItem = { ...props, quantFood };

  function foodAddHandler(e) {
    e.preventDefault();
    cartCtx.addItem(foodItem);
  }

  function addFoodHandler(e) {
    setQuantFood(e.target.value);
    cartCtx.addItem(foodItem);
  }

  function buttonHandler() {
    setQuantFood(`${+quantFood + 1}`);
    cartCtx.addItem(foodItem);

    // let order = JSON.parse(localStorage.getItem("order"));
    // if (localStorage.order)
    //   localStorage.setItem("order", JSON.stringify(cartCtx.items));

    // //If there is an order it should be the new array and new additions should be made to it
    // let order = localStorage.getItem("order");
    // // if (order) cartCtx.items = JSON.parse(order);

    // localStorage.setItem("order", JSON.stringify(cartCtx.items));

    //set order to this new array

    //else if there is no order a new on should be created
  }

  // if (order) cartCtx.items = order;

  return (
    <form className={styles.amount} onSubmit={foodAddHandler}>
      <div className={styles.desc}>
        <label htmlFor={props.id} className={styles.amt}>
          Amount
        </label>
        <input
          id={props.id}
          type="number"
          className={styles.input}
          min="1"
          step="1"
          value={quantFood}
          onChange={addFoodHandler}
        />
      </div>
      <Button onClick={buttonHandler}>+Add</Button>
    </form>
  );
}
export default Quant;
