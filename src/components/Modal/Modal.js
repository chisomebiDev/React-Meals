import styles from "./Modal.module.css";
import Card from "../UI/Card";
import ModalItem from "./ModalItem";

function Modal() {
  return (
    <Card className={styles.modal} color="white">
      Hello
      <ModalItem />
    </Card>
  );
}
export default Modal;
