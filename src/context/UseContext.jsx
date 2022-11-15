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
        clearAll,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
