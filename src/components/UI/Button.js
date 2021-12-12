import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      disabled={props.disabled}
      style={props.style}
      className={styles.button}
      onClick={props.onClick}
      form={props.form}
    >
      {props.children}
    </button>
  );
}
export default Button;
