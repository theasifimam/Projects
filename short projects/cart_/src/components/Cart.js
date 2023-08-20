import ContextCart from "./ContextCart";
import { createContext, useReducer, useEffect } from "react";
import { products } from "./products";
import { reducer } from "./reducer";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItems: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Delete Individual Element
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // Clear the Cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  // increment number of items
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement number of items
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // We will use the useEffect hook update data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}
    >
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
