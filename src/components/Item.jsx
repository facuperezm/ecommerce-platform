import React, { useContext } from "react";
import ProductContext from "../context/Context";
import { Link } from "react-router-dom";
import truncate from "../helpers/truncate";

const Item = ({ data }) => {
  let { title, price, image, id } = data;
  const { addToCart } = useContext(ProductContext);
  return (
    <>
      <article className="flex flex-col justify-between rounded rounded-md bg-white rounded-2xl px-2 transition duration-400 hover:shadow-xl">
        <Link
          to={`/product/${id}`}
          className="group bg-white rounded-lg transition duration-200"
        >
          <div className="border-b pb-2">
            <img
              src={image}
              alt={title}
              className="rounded-2xl h-56 mx-auto  transition duration-200 object-contain py-1"
            />
          </div>

          <div className="text-left px-2 py-6">
            <h1 className="text-sm">{truncate(title, 40, "...")}</h1>
            <p className="text-2xl pb-10">$ {price.toFixed(2)}</p>
          </div>
        </Link>
      </article>
    </>
  );
};

export default Item;
