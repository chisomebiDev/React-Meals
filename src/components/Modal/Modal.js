import styles from "./Modal.module.css";
import Card from "../UI/Card";
import ModalItem from "./ModalItem";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import CartContext from "../../store/modalArrayContext";
import { useState, useEffect, useContext, useRef } from "react";

function Overlay(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return <div className={styles.overlay} onClick={props.onClick}></div>;
}

// const formValues = { username: "", street: "", city: "" };

// function emailValuesHandler(state, action) {}

function ModalTotal(props) {
  const { total: totalAmt } = props;

  const [order, setOrder] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const htmlForm = useRef();
  //Name input handler
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameInputIsValid = !nameIsValid && nameIsTouched;

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  // const [formIsValid, setFormIsValid] = useState(false);

  // let formIsValid = false;
  // if (nameIsValid) formIsValid = true;

  // const [formStuff, dispatchFormStuff] = useReducer(
  //   emailValuesHandler,
  //   formValues
  // );

  function showOrderHandler() {
    setOrder(true);
    if (order) setFormOpen(true);
  }

  function formOrderHandler(e) {
    e.preventDefault();

    if (order && formOpen) {
      console.log([...new FormData(e.target)]);

      setNameIsTouched(true);
      if (!nameIsValid) return;

      setName("");
      setStreet("");
      setCity("");

      setNameIsTouched(false);
    }
  }

  function nameChangeHandler(e) {
    setName(e.target.value);
    setNameIsTouched(true);
  }

  function nameBlurHandler() {
    setNameIsTouched(true);
  }

  function streetChangeHandler(e) {
    setStreet(e.target.value);
  }

  function cityChangeHandler(e) {
    setCity(e.target.value);
  }

  const form = (
    <form
      className={styles.form}
      id="checkout-form"
      onSubmit={formOrderHandler}
      ref={htmlForm}
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
        {nameInputIsValid && (
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
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          name="city"
          type="text"
          id="city"
          onChange={cityChangeHandler}
          value={city}
        />
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
