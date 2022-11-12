import React, { useContext } from "react";
import ItemCart from "../components/ItemCart";
import ProductContext from "../context/Context";

const Cart = () => {
  const { cart, deleteItem } = useContext(ProductContext);
  return (
    <>
      <div className="grid grid-cols-4 gap-10">
        {cart.map((item, i) => (
          <ItemCart {...item} key={i} deleteItem={deleteItem} />
        ))}
      </div>
    </>
  );
};

export default Cart;
