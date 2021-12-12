import styles from "./Modal.module.css";
import Card from "../UI/Card";
import ModalItem from "./ModalItem";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import CartContext from "../../store/modalArrayContext";
import { useState, useEffect, useContext } from "react";
import useInput from "../../hooks/useInput";

function Overlay(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return <div className={styles.overlay} onClick={props.onClick}></div>;
}

function ModalTotal(props) {
  const { total: totalAmt } = props;

  const {
    value: name,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    onSubmit: nameSubmit,
  } = useInput((value) => value.trim() !== "");

  const {
    value: city,
    hasError: cityHasError,
    changeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
    onSubmit: citySubmit,
  } = useInput((value) => value.trim() !== "");

  const {
    value: street,
    hasError: streetHasError,
    changeHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
    onSubmit: streetSubmit,
  } = useInput((value) => value.trim() !== "");

  const [order, setOrder] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  function showOrderHandler() {
    setOrder(true);
    if (order) setFormOpen(true);
  }

  function formOrderHandler(e) {
    e.preventDefault();

    if (order && formOpen) {
      console.log([...new FormData(e.target)]);

      nameSubmit();
      streetSubmit();
      citySubmit();
    }
  }

  const form = (
    <form
      className={styles.form}
      id="checkout-form"
      onSubmit={formOrderHandler}
    >
      <div>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={nameChangeHandler}
          value={name}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className={styles.inValid}>Please enter your name</p>
        )}
      </div>
      <div>
        <label htmlFor="street">Street</label>
        <input
          name="street"
          type="text"
          id="street"
          onChange={streetChangeHandler}
          value={street}
          onBlur={streetBlurHandler}
        />
        {streetHasError && (
          <p className={styles.inValid}>Please enter your street</p>
        )}
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          name="city"
          type="text"
          id="city"
          onChange={cityChangeHandler}
          value={city}
          onBlur={cityBlurHandler}
        />
        {cityHasError && (
          <p className={styles.inValid}>Please enter your city</p>
        )}
      </div>
    </form>
  );

  return (
    <>
      <div>
        <div className={styles.total}>
          <h3>Total Amount</h3>
          <p className={styles.totalAmt}>${totalAmt.toFixed(2)}</p>
        </div>
        {order && form}
        <div className={styles.btnTotal}>
          <Button
            onClick={props.onClick}
            style={{
              backgroundColor: "white",
              color: "var(--color-textInWhite)",
              outline: "1px solid var(--color-textInWhite)",
              padding: "1rem 3rem",
            }}
          >
            {order ? "Cancel" : "Close"}
          </Button>
          <Button onClick={showOrderHandler} form="checkout-form">
            {order ? "Confirm" : "Order"}
          </Button>
        </div>
      </div>
    </>
  );
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

  const total = checkOut.reduce((cum, cur) => {
    return cum + +cur.price * +cur.quantFood;
  }, 0);

  const [totalAmt, setTotalAmt] = useState(total);

  function deleteItemHandler(id) {
    const newList = checkOut.filter((item) => item.id !== id);
    setCheckOut(newList);
  }

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Card className={styles.modal} color="white">
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
            <ModalTotal onClick={props.onClick} total={totalAmt} />
          </Card>
          <Overlay onClick={props.onClick} />
        </>,
        document.getElementById("modal")
      )}
    </>
  );
}
export default Modal;
