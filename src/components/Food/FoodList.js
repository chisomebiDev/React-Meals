import FoodItem from "./FoodItem";
import Card from "../UI/Card";
// import { useState } from "react/cjs/react.development";
// import { useEffect } from "react";

function FoodList() {
  // const [meals, setMeals] = useState([]);

  // async function fetchMeals() {
  //   try {
  //     const ReactMeals = await fetch(
  //       "https://react-http-ab6b1-default-rtdb.firebaseio.com/reactmeals.json"
  //     );

  //     const mealsObject = await ReactMeals.json();

  //     const mealsArray = Object.keys(mealsObject).map((key) => {
  //       return mealsObject[key];
  //     });

  //     const DUMMY_MEALS = mealsArray.flat();

  //     setMeals(DUMMY_MEALS);
  //     console.log(meals);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const DUMMY_MEALS = [
    {
      description: "Finest fish and veggies",
      id: "m1",
      name: "Sushi",
      price: 22.99,
    },
    {
      description: "A german specialty!",
      id: "m2",
      name: "Schnitzel",
      price: 16.5,
    },
    {
      description: "American, raw, meaty",
      id: "m3",
      name: "Barbecue Burger",
      price: 12.99,
    },
    {
      description: "Healthy...and green...",
      id: "m4",
      name: "Green Bowl",
      price: 18.99,
    },
  ];

  // useEffect(() => {
  //   fetchMeals();
  // }, []);

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
