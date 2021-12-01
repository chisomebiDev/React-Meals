import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

function Cart() {
  return (
    <div className={styles.cart}>
      {cartIcon} Your Cart <span className={styles.items}>3</span>
    </div>
  );
}

export default Cart;
