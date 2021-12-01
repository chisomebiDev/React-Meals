import styles from "./Card.module.css";

function Card(props) {
  return (
    <div
      className={`${styles.card} ${props.className}`}
      style={{ backgroundColor: props.color }}
    >
      {props.children}
    </div>
  );
}
export default Card;
