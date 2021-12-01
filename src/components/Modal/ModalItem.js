import styles from "./ModalItem.module.css";
import ModalBtn from "./ModalBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const minus = <FontAwesomeIcon icon={faMinusCircle} />;
const plus = <FontAwesomeIcon icon={faPlusCircle} />;
// import {fa}
// import {}

function ModalItem() {
  return (
    <div className={styles.modalItem}>
      <div className={styles.item}>
        <div className={styles.priceName}>
          <h3>Sushi</h3>
          <p className={styles.price}>$22.99</p>
        </div>
        <p className={styles.itemNumber}>x1</p>
      </div>
      <div>
        <ModalBtn>{minus}</ModalBtn>
        <ModalBtn>{plus}</ModalBtn>
      </div>
    </div>
  );
}
export default ModalItem;
