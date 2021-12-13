import Header from "./components/Navbar/Header";
import FoodList from "./components/Food/FoodList";
import Text from "./components/Text";
// import CartContext from "./store/modalArrayContext";
import CartProvider from "./store/CartProvider";
import "./App.css";
// import { useContext } from "react";

function App() {
  // const cartCtx = useContext(CartContext);

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
