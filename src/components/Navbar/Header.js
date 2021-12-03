import Cart from "./Cart";
import styles from "./Header.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";

function Header() {
  const [showModal, setShowModal] = useState(false);

  function showModalHandler() {
    setShowModal(!showModal);
  }

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.heading}>ReactMeals</h1>
        <Cart onClick={showModalHandler} />
      </header>
      {showModal && <Modal onClick={showModalHandler} />}
    </>
  );
}

export default Header;
