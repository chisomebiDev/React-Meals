import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { modalArray } from "../data/config";
import { useEffect, useState } from "react";

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

let total;

function Cart(props) {
  //Calculate total items in cart
  function calculateTotal() {
    total = modalArray.reduce((cum, cur) => {
      return cum + +cur.quantFood;
    }, 0);
    setItemTotal(total);
  }

  const [itemTotal, setItemTotal] = useState(total);

  useEffect(() => {});

  function cartClickHandler() {
    props.onClick();
    calculateTotal();
  }

  return (
    <button className={styles.cart} onClick={cartClickHandler}>
      {cartIcon} Your Cart{" "}
      <span className={styles.items}>{itemTotal || 0}</span>
    </button>
  );
}

export default Cart;
