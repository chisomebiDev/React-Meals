import styles from "./Modal.module.css";
import Card from "../UI/Card";
import ModalItem from "./ModalItem";
import ReactDOM from "react-dom";
import Button from "../UI/Button";

function ModalTotal() {
  return (
    <div>
      <div className={styles.total}>
        <h3>Total Amount</h3>
        <p className={styles.totalAmt}>$88.99</p>
      </div>
      <div className={styles.btnTotal}>
        <Button
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

function Overlay() {
  return <div className={styles.overlay}></div>;
}

const InnerModal = (
  <>
    <Card className={styles.modal} color="white">
      <ModalItem />
      <ModalItem />
      <ModalItem />
      <ModalTotal />
    </Card>
    <Overlay />
  </>
);

function Modal() {
  return (
    <>{ReactDOM.createPortal(InnerModal, document.getElementById("modal"))}</>
  );
}
export default Modal;
