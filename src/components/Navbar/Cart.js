import { useContext } from "react";
import CartContext from "../../store/modalArrayContext";
import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

function Cart(props) {
  const cartCtx = useContext(CartContext);

  //Calculate total items in cart
  const total = cartCtx.items.reduce((cum, cur) => {
    return cum + +cur.quantFood;
  }, 0);

  return (
    <button className={styles.cart} onClick={props.onClick}>
      {cartIcon} Your Cart {"   "}
      <span className={styles.items}>{total || 0}</span>
    </button>
  );
}

export default Cart;
