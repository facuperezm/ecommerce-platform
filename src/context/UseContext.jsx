import axios from "axios";
import ProductContext from "./Context";
import { useReducer } from "react";
import Reducer from "./Reducer";

export default function UseProductContext({ children }) {
  const initialState = {
    products: [],
    cart: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  const getProducts = async () => {};
  const addToCart = (product) => {
    const item = cart.find((item) => item.id === product.id);

    if (item) {
      item.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const deleteItem = () => {};
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addToCart,
        deleteItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
