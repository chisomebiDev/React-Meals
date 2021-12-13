import styles from "./Modal.module.css";
import Button from "../UI/Button";
import CartContext from "../../store/modalArrayContext";
import { useState, useContext } from "react";
import useInput from "../../hooks/useInput";

function ModalTotal(props) {
  const cartCtx = useContext(CartContext);

  const { total: totalAmt, onOrder: setOrdered } = props;
  cartCtx.totalAmount = +totalAmt;

  const {
    value: name,
    valueIsTouched: nameTouched,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    onSubmit: nameSubmit,
  } = useInput((value) => value.trim() !== "");

  const {
    value: street,
    hasError: streetHasError,
    changeHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
    onSubmit: streetSubmit,
  } = useInput((value) => value.trim() !== "");

  const {
    value: city,
    hasError: cityHasError,
    changeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
    onSubmit: citySubmit,
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
      nameSubmit();
      streetSubmit();
      citySubmit();

      if (!nameHasError && nameTouched) {
        cartCtx.orderData = Object.fromEntries([...new FormData(e.target)]);
        const usersName = cartCtx.orderData.name.split(" ")[0];

        cartCtx.userName = usersName;
        setOrdered(true);
        console.log(cartCtx.orderData, cartCtx.items, usersName);
      }
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
          className={`${nameHasError && styles.invalid}`}
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
          className={`${streetHasError && styles.invalid}`}
        />
        {streetHasError && (
          <p className={styles.inValid}>Street address required</p>
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
          className={`${cityHasError && styles.invalid}`}
        />
        {cityHasError && (
          <p className={styles.inValid}>Please enter your city</p>
        )}
      </div>
    </form>
  );

  const orderReady = order && +totalAmt > 0;

  return (
    <>
      <div>
        <div className={styles.total}>
          <h3>Total Amount</h3>
          <p className={styles.totalAmt}>${totalAmt.toFixed(2)}</p>
        </div>
        {orderReady > 0 && form}
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
            {orderReady > 0 ? "Cancel" : "Close"}
          </Button>
          <Button onClick={showOrderHandler} form="checkout-form">
            {orderReady > 0 ? "Confirm" : "Order"}
          </Button>
        </div>
      </div>
    </>
  );
}

export default ModalTotal;
