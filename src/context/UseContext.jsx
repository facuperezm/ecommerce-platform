import axios from "axios";
import ProductContext from "./Context";
import { useReducer } from "react";
import Reducer from "./Reducer";
import { toast } from "react-toastify";

export default function UseProductContext({ children }) {
  const initialState = {
    products: [],
    cart: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/");
    dispatch({ type: "GETPRODUCTS", payload: res.data });
    toast.success("MY SUCCESS");
  };
  const addToCart = (item) => {
    dispatch({ type: "ADDTOCART", payload: item });
    toast.success("MY SUCCESS");
  };
  const deleteItem = (item) => {
    dispatch({ type: "DELETEITEM", payload: item });
    toast.success("MY SUCCESS");
  };
  const clearAll = () => {
    dispatch({ type: "CLEARCART" });
    toast.success("MY SUCCESS");
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
