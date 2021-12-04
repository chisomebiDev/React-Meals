import style from "./Text.module.css";
import Card from "./UI/Card";

function Text() {
  return (
    <Card className={style.textContainer} color="rgb(42, 55, 65)">
      <section>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
    </Card>
  );
}

export default Text;
