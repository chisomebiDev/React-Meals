import Cart from "./Cart";
import styles from "./Header.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import mealsImage from "../../assets/meals.jpg";

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
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
      {showModal && <Modal onClick={showModalHandler} />}
    </>
  );
}

export default Header;
