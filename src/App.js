import Header from "./components/Navbar/Header";
import FoodItem from "./components/Food/FoodItem";
import "./App.css";
import Card from "./components/UI/Card";

function App() {
  return (
    <>
      <Header />
      <Card>
        <FoodItem />
        <FoodItem />
      </Card>
    </>
  );
}

export default App;
