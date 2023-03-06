import React, { useContext } from "react";
import { Link } from "react-router-dom";
import truncate from "../helpers/truncate";

const Item = ({ data }) => {
  let { title, price, image, id } = data;

  return (
    <article className="group rounded-lg overflow-hidden shadow-md transition duration-400 hover:shadow-lg">
      <Link to={`/product/${id}`}>
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover transition duration-200 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-2 bg-white bg-opacity-90 w-full">
            <h1 className="text-sm font-medium truncate">
              {truncate(title, 40, "...")}
            </h1>
            <p className="text-2xl font-bold text-blue-600">
              ${price.toFixed(2)}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Item;
