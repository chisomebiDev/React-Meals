import styles from "./Modal.module.css";
import Card from "../UI/Card";
import ModalItem from "./ModalItem";
import ReactDOM from "react-dom";
import Order from "./Order";
import CartContext from "../../store/modalArrayContext";
import { useState, useEffect, useContext } from "react";
import ModalTotal from "./ModalTotal";

function Overlay(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return <div className={styles.overlay} onClick={props.onClick}></div>;
}

function Modal(props) {
  const cartCtx = useContext(CartContext);
  const modalArray = cartCtx.items;
  //check if quantity of food is zero so that it can be removed
  modalArray.forEach((foodItem, i, arr) => {
    if (foodItem.quantFood === "0") {
      modalArray.splice(i, 1);
    }
  });

  const [checkOut, setCheckOut] = useState(modalArray);
  const [ordered, setOrdered] = useState(false);

  const total = checkOut.reduce((cum, cur) => {
    return cum + +cur.price * +cur.quantFood;
  }, 0);

  const [totalAmt, setTotalAmt] = useState(total);

  function deleteItemHandler(id) {
    const newList = checkOut.filter((item) => item.id !== id);
    setCheckOut(newList);
  }

  let content = (
    <>
      {checkOut.length === 0 ? (
        <p>Please Add Items to your Cart 🛒</p>
      ) : (
        checkOut.map((food) => (
          <ModalItem
            key={food.id}
            food={food}
            onAddItems={{ setCheckOut, checkOut, deleteItemHandler }}
            onIncrement={{ setTotalAmt, total }}
          />
        ))
      )}
      <ModalTotal
        onClick={props.onClick}
        total={totalAmt}
        onOrder={setOrdered}
      />
    </>
  );

  if (ordered) content = <Order onClick={props.onClick} />;

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Card className={styles.modal} color="white">
            {content}
          </Card>
          <Overlay onClick={props.onClick} />
        </>,
        document.getElementById("modal")
      )}
    </>
  );
}
export default Modal;
