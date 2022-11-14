import React, { useContext } from "react";
import { toast } from "react-toastify";
import Product from "../pages/Product";
import ProductContext from "../context/Context";
import { Link } from "react-router-dom";
import truncate from "../helpers/truncate";
import { BsFillCartPlusFill } from "react-icons/bs";
const Item = ({ title, price, description, image, id }) => {
  const { addToCart } = useContext(ProductContext);
  return (
    <>
      <article className="flex flex-col justify-between rounded rounded-2xl bg-white rounded-2xl px-2">
        <Link
          to={`/products/${id}`}
          className="group bg-white rounded-lg transition duration-200"
        >
          <img
            src={image}
            alt={title}
            className="rounded-2xl h-56 mx-auto group-hover:scale-95 transition duration-200 object-contain"
          />
        </Link>
        <div className="text-center pt-2 ">
          <h1 className="font-bold text-center">
            {truncate(title, 30, "...")}
          </h1>
          <p className="text-center">${price.toFixed(2)}</p>
          <button
            className="font-bold border mx-auto my-2 p-3 bg-yellow-300 rounded-full z-5"
            onClick={() => {
              addToCart(id);
            }}
          >
            <BsFillCartPlusFill />
          </button>
        </div>
      </article>
    </>
  );
};

export default Item;
