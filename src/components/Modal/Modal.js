import styles from "./Modal.module.css";
import Card from "../UI/Card";
import ModalItem from "./ModalItem";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import { modalArray } from "../data/config";
import { useState, useEffect } from "react";

function Overlay(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return <div className={styles.overlay} onClick={props.onClick}></div>;
}

function ModalTotal(props) {
  const { total: totalAmt } = props;

  return (
    <div>
      <div className={styles.total}>
        <h3>Total Amount</h3>
        <p className={styles.totalAmt}>${totalAmt.toFixed(2)}</p>
      </div>
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
          Close
        </Button>
        <Button>Order </Button>
      </div>
    </div>
  );
}

function Modal(props) {
  const [checkOut, setCheckOut] = useState(modalArray);

  const total = checkOut.reduce((cum, cur) => {
    return cum + +cur.price * +cur.quantFood;
  }, 0);

  const [totalAmt, setTotalAmt] = useState(total);

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
                  onAddItems={{ setCheckOut, checkOut }}
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
