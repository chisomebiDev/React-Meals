import styles from "./Quant.module.css";
import Button from "../UI/Button";
function Quant() {
  return (
    <div className={styles.amount}>
      <div className={styles.desc}>
        <p className={styles.amt}>Amount</p>
        <input type="number" className={styles.input} min="1" />
      </div>
      <Button>+Add</Button>
    </div>
  );
}
export default Quant;
