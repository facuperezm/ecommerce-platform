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
    <>
      <nav className="flex flex-row items-center justify-between bg-[#fff159] w-full py-5">
        <Link to="/">
          <h1 className="self-center text-2xl font-black whitespace-nowrap text-black px-10">
            e-Store
          </h1>
        </Link>
        <div className="flex items-center">
          <Link to="/">
            <h1 className="font-bold">Products</h1>
          </Link>
          <Link to="/Cart">
            <h1 className="font-bold text px-10 flex items-center gap-2">
              <BsCart2 /> Cart ({totalItems})
            </h1>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
