import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/modalArrayContext";
import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

function Cart(props) {
  const [btnHighlighted, setBtnHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const btnClass = `${styles.cart} ${btnHighlighted ? styles.bump : ""}`;

  // const order = JSON.parse(localStorage.getItem("order"));
  // if (cartCtx.items?.length === 0) cartCtx.items = order;

  //Calculate total items in cart
  const total = items.reduce((cum, cur) => {
    return cum + +cur.quantFood;
  }, 0);

  //Css animation
  useEffect(() => {
    if (items.length === 0) return;
    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClass} onClick={props.onClick}>
      {cartIcon} Your Cart {"   "}
      <span className={styles.items}>{total || 0}</span>
    </button>
  );
}

export default Cart;
