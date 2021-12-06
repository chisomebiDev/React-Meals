import CartContext from "./modalArrayContext";
import { useState } from "react";

function CartProvider(props) {
  const [itemsCart, setItemsCart] = useState([]);
  function removeItemFomCartHandler() {}

  const cartContext = {
    items: itemsCart,
    totalAmount: () => {},
    addItem: addItemToCartHandler,
    removeItem: removeItemFomCartHandler,
  };

  function addItemToCartHandler(foodItem) {
    if (cartContext.items.length === 0) {
      cartContext.items.push(foodItem);
    }
    //If the food name is not in the array push the food
    const found = cartContext.items.some((food) => food.name === foodItem.name);
    if (!found) cartContext.items.push(foodItem);
    //If the food name is in the array an the value of the quantFood is less or greater update the quantFood
    cartContext.items.forEach((food) => {
      if (
        food.name === foodItem.name &&
        (+food.quantFood < +foodItem.quantFood ||
          +food.quantFood > +foodItem.quantFood)
      ) {
        food.quantFood = foodItem.quantFood;
      }
    });
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
