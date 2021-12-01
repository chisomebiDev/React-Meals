import Cart from "./Cart";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>ReactMeals</h1>
      <Cart />
    </header>
  );
}

export default Header;
