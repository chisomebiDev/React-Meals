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
    >
      {props.children}
    </Button>
  );
}

export default ModalBtn;
