import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCart from "../components/ItemCart";
import ProductContext from "../context/Context";

const Cart = () => {
  const { cart, deleteItem, clearAll, deleteAll, addOne } =
    useContext(ProductContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.price;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice]);

  return (
    <>
      {cart.length !== 0 ? (
        <div className="md:grid md:grid-cols-3 flex flex-col pt-8 h-96">
          <div className="flex flex-col p-4  border-blue col-span-2 rounded-xl h-full">
            {cart.map((item, i) => (
              <ItemCart
                {...item}
                key={i}
                deleteItem={deleteItem}
                addOne={addOne}
              />
            ))}
          </div>
          <div className="col-start-3 p-4">
            <h1 className="font-semibold text-md">Cart ({totalItems})</h1>{" "}
            <p className="text-2xl pt-2">Total ${totalPrice.toFixed(2)}</p>
            <button
              onClick={clearAll}
              className="font-semibold border w-full py-3 bg-[#3483fa] hover:bg-[#2968c8] transition duration-400 text-white rounded-md z-5 mt-4"
            >
              Clear cart
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center m-10 h-96">
          <h3 className="text-center mx-auto font-bold text-2xl">
            Your cart is empty
          </h3>
          <div className="py-5">
            <Link
              to="/"
              className="bg-[#3483fa] hover:bg-[#2968c8] text-white px-5 py-2 rounded font-semibold h-11 w-26"
            >
              Go shop now
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
