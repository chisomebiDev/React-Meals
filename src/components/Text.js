import style from "./Text.module.css";
import Card from "./UI/Card";

function Text() {
  return (
    <Card className={style.textContainer} color="rgb(42, 55, 65)">
      <h1>Delicious Food, Delivered To You</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque impedit
        natus ducimus nesciunt reprehenderit eveniet optio saepe, cumque nihil
        perspiciatis!
      </p>
      <p>
        {" "}
        Officia, reprehenderit placeat? Harum debitis dolores aut facilis fugiat
        quam.
      </p>
    </Card>
  );
}

export default Text;
