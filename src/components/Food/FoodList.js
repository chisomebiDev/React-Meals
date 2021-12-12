import FoodItem from "./FoodItem";
import Card from "../UI/Card";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

function FoodList() {
  const [meals, setMeals] = useState([]);

  async function fetchMeals() {
    try {
      const meals = await fetch(
        "https://react-http-ab6b1-default-rtdb.firebaseio.com/reactmeals.json"
      );

      const mealsObject = await meals.json();

      const mealsArray = Object.keys(mealsObject).map((key) => {
        return mealsObject[key];
      });

      const DUMMY_MEALS = mealsArray.flat();

      setMeals(DUMMY_MEALS);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <Card color="white">
      <ul>
        {meals.map((meal) => (
          <FoodItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </Card>
  );
}

export default FoodList;
