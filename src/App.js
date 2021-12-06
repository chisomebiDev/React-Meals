import Header from "./components/Navbar/Header";
import FoodList from "./components/Food/FoodList";
import Text from "./components/Text";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Header />
      <article>
        <Text />
        <FoodList />
      </article>
    </main>
  );
}

export default App;
