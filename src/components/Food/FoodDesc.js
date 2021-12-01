import styles from "./FoodDesc.module.css";
function FoodDesc() {
  return (
    <div className={styles.desc}>
      <h3 className={styles.foodName}>Sushi</h3>
      <p className={styles.foodDesc}>Finest fish and veggies</p>
      <p className={styles.price}>$22.99</p>
    </div>
  );
}
export default FoodDesc;
