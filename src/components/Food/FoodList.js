import FoodItem from "./FoodItem";
import Card from "../UI/Card";
import DUMMY_MEALS from "../data/config";
// import DUMMY
function FoodList() {
  return (
    <Card color="white">
      {DUMMY_MEALS.map((meal) => (
        <FoodItem key={meal.id} meal={meal} />
      ))}
    </Card>
  );
}

export default FoodList;
