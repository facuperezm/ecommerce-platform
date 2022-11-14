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
      <div className="flex ">
        <div className="flex flex-col p-4 border-2 border-blue">
          {cart.map((item, i) => (
            <ItemCart {...item} key={i} deleteItem={deleteItem} />
          ))}
        </div>
        <div>
          <h1>Tu carrito de compras es:</h1>
          <button onClick={clearAll} className="border p-4 ">
            CLEAR CART
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
