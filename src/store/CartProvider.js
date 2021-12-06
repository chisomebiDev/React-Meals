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
    //if cart is empty
    if (itemsCart.length === 0) {
      const updatesItems = itemsCart.concat(foodItem);
      setItemsCart(updatesItems);
      return;
    }
    //If the food name is not in the array push the food
    const found = itemsCart.some((food) => food.name === foodItem.name);
    if (!found) {
      const updatesItems = itemsCart.concat(foodItem);
      setItemsCart(updatesItems);
      return;
    }
    //If the food name is in the array an the value of the quantFood is less or greater update the quantFood
    const newCart = itemsCart.map((food) => {
      if (
        food.name === foodItem.name &&
        (+food.quantFood < +foodItem.quantFood ||
          +food.quantFood > +foodItem.quantFood)
      ) {
        // food.quantFood = foodItem.quantFood;
        return { ...foodItem, quantFood: foodItem.quantFood };
      } else {
        return food;
      }
    });
    setItemsCart(newCart);
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
