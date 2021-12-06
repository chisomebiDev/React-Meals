import Header from "./components/Navbar/Header";
import FoodList from "./components/Food/FoodList";
import Text from "./components/Text";
import CartProvider from "./store/CartProvider";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <main className="App">
        <Header />
        <article>
          <Text />
          <FoodList />
        </article>
      </main>
    </CartProvider>
  );
}

export default App;
