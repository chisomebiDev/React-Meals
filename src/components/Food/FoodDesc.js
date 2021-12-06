import styles from "./FoodDesc.module.css";
function FoodDesc(props) {
  const { name, description, price } = props.meal;

  return (
    <div className={styles.desc}>
      <h3 className={styles.foodName}>{name}</h3>
      <p className={styles.foodDesc}>{description}</p>
      <p className={styles.price}>${`${price.toFixed(2)}`}</p>
    </div>
  );
}
export default FoodDesc;
