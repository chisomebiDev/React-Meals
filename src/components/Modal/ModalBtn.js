import Button from "../UI/Button";

function ModalBtn(props) {
  return (
    <Button
      style={{
        backgroundColor: "transparent",
        color: "var(--color-textInWhite)",
        fontSize: "20px",
        textAlign: "center",
      }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

export default ModalBtn;
