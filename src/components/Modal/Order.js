import { useContext } from "react";
import CartContext from "../../store/modalArrayContext";
import styles from "./Modal.module.css";
import Button from "../UI/Button";

function Order(props) {
  const cartCtx = useContext(CartContext);

  const orderNumber = Math.trunc(Math.random() * 1000000000);
  const date = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
    timeStyle: "short",
    hourCycle: "h12",
  }).format(new Date());

  return (
    <div className={styles["order-closed"]}>
      <p>
        Order <span>{orderNumber}</span> Completed on {date} 🎉
      </p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {cartCtx.items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantFood}</td>
                <td>{item.price.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Total</td>
            <td>
              <span>${cartCtx.totalAmount.toFixed(2)}</span>
            </td>
          </tr>
        </tfoot>
      </table>

      <p>
        <span>Address:</span> {cartCtx.orderData.street}
      </p>

      <p>
        <span>{cartCtx.userName},</span> thank you for placing the order. Enjoy
        your <span>ReactMeal!</span> 😋
      </p>
      <Button onClick={props.onClick}>Close</Button>
    </div>
  );
}

export default Order;
