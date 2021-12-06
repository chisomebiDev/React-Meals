import FoodItem from "./FoodItem";
import Card from "../UI/Card";
import DUMMY_MEALS from "../data/config";

function FoodList() {
  return (
    <Card color="white">
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <FoodItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </Card>
  );
}

export default FoodList;
