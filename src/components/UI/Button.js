import styles from "./Button.module.css";

function Button(props) {
  return (
    <button style={props.style} className={styles.button}>
      {props.children}
    </button>
  );
}
export default Button;
