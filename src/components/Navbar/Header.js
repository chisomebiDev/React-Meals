import Cart from "./Cart";
import styles from "./Header.module.css";
// import Modal from "../Modal/Modal";
function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.heading}>ReactMeals</h1>
        <Cart />
      </header>
      {/* <Modal /> */}
    </>
  );
}

export default Header;
