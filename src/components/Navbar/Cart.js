import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { modalArray } from "../data/config";

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

const total =
  modalArray.length === 0
    ? 0
    : modalArray.reduce((cum, cur) => {
        return cum + +cur.quantFood;
      }, 0);

function Cart(props) {
  return (
    <button className={styles.cart} onClick={props.onClick}>
      {cartIcon} Your Cart <span className={styles.items}>{total}</span>
    </button>
  );
}

export default Cart;
