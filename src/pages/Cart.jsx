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
    <div className="bg-white h-full">
      {cart.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
          <div className="md:col-span-8 space-y-4">
            {cart.map((item, i) => (
              <ItemCart
                {...item}
                key={i}
                deleteItem={deleteItem}
                addOne={addOne}
              />
            ))}
          </div>
          <div className="md:col-span-4 p-4">
            <div className="bg-gray-100 rounded-md p-4 space-y-4">
              <h1 className="font-bold text-lg">Cart ({totalItems})</h1>
              <p className="text-2xl pt-2 font-bold">
                ${totalPrice.toFixed(2)}
              </p>
              <button
                onClick={clearAll}
                className="bg-red-500 hover:bg-red-600 text-white rounded-md py-3 w-full font-semibold transition duration-400"
              >
                Clear Cart
              </button>
              <Link to="/">
                <button className="bg-gray-200 hover:bg-gray-300 text-blue-500 rounded-md py-3 w-full font-semibold transition duration-400 mt-2">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center m-10 h-96">
          <h3 className="text-center mx-auto font-bold text-2xl mb-4">
            Your cart is empty
          </h3>
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-3 px-6 font-semibold transition duration-400"
          >
            Go Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
