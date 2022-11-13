import React, { useContext } from "react";
import ItemCart from "../components/ItemCart";
import ProductContext from "../context/Context";

const Cart = () => {
  const { cart, deleteItem, clearAll } = useContext(ProductContext);
  // const clearCart = () => {
  //   dispatch({ type: TYPES.CLEARCART });
  // };

  return (
    <>
      <div className="grid grid-cols-4 gap-10">
        {cart.map((item, i) => (
          <ItemCart {...item} key={i} deleteItem={deleteItem} />
        ))}
      </div>
      <button onClick={clearAll} className="border p-4 ">
        CLEAR CART
      </button>
    </>
  );
};

export default Cart;
