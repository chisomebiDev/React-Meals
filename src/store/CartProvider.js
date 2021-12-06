import CartContext from "./modalArrayContext";

function CartProvider(props) {
  function addItemToCartHandler() {}
  function removeItemFomCartHandler() {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFomCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
