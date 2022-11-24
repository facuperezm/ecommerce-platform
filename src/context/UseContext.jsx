import axios from "axios";
import ProductContext from "./Context";
import { useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const getLocalCart = () => {
  let localCart = localStorage.getItem("storecart");
  if (localCart == []) {
    return [];
  } else {
    return JSON.parse(localCart);
  }
};

export default function UseProductContext({ children }) {
  const initialState = {
    products: [],
    // cart: [],
    cart: getLocalCart(),
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("storecart", JSON.stringify(state.cart));
  }, [state.cart]);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/");
    dispatch({ type: "GETPRODUCTS", payload: res.data });
  };

  const addToCart = (item) => {
    dispatch({ type: "ADDTOCART", payload: item });
  };

  const deleteItem = (item, all = true) => {
    if (all) {
      dispatch({ type: "DELETEITEM", payload: item });
    } else {
      dispatch({ type: "DELETEALL", payload: item });
    }
  };
  const addOne = (item) => {
    dispatch({ type: "ADDONE", payload: item });
  };
  const clearAll = () => {
    dispatch({ type: "CLEARCART" });
  };

  return (
    <ProductContext.Provider
      value={{
        initialState,
        products: state.products,
        cart: state.cart,
        getProducts,
        addToCart,
        deleteItem,
        addOne,
        clearAll,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
