import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../context/Context";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  const { cart } = useContext(ProductContext);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;

    cart.forEach((item) => {
      items += item.quantity;
    });

    setTotalItems(items);
  }, [cart]);

  return (
    <nav className="flex items-center justify-between bg-yellow-300 px-5 py-3">
      <Link to="/">
        <h1 className="text-2xl font-bold text-gray-800">e-Store</h1>
      </Link>
      <div className="flex items-center">
        <Link
          to="/"
          className="mr-6 text-lg font-medium text-gray-800 hover:text-gray-900"
        >
          Products
        </Link>
        <Link
          to="/Cart"
          className="flex items-center text-lg font-medium text-gray-800 hover:text-gray-900"
        >
          <BsCart2 className="mr-2" />
          Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
};

export default Header;
