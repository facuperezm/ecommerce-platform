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
    dispatch({
      type: "GETPRODUCTS",
      payload: res.data,
    });
    console.log("se buscaron los datos a la api", res.data);
  };
  const addToCart = (item) => {
    dispatch({ type: "ADDTOCART", payload: item });
  };
  const deleteItem = (item) => {
    dispatch({ type: "DELETEITEM", payload: item });
  };

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
