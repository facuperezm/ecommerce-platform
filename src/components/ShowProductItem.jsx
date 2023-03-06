import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../context/Context";

const ShowProductItem = ({ data }) => {
  const { addToCart } = useContext(ProductContext);

  const { title, price, category, description, image, id } = data;

  const installmentPrice = (price / 12).toFixed(2);

  return (
    <div className="px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-3xl rounded-md justify-between bg-white p-2 gap-4">
        <div className="overflow-hidden flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="p-4 max-h-[80%] object-contain"
          />
        </div>

        <div className="p-4 max-w-md border mx-auto rounded-md flex flex-col justify-between">
          <div>
            <h4 className="capitalize text-gray-500 text-sm">
              {category} | Sold 344
            </h4>

            <h1 className="text-2xl font-semibold mt-2">{title}</h1>

            <h3 className="text-3xl mt-2">${price}</h3>

            <p>Pay in 12x ${installmentPrice}</p>
          </div>

          <p className="py-4">{description}</p>

          <div className="flex flex-col space-y-4">
            <button
              className="py-3 px-6 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition duration-400"
              onClick={() => addToCart(id)}
            >
              Add to cart
            </button>

            <Link to={"/cart"}>
              <button className="font-semibold border w-full py-3 bg-[#e3edfb] hover:bg-[#e3edea] transition duration-400 text-[#3483fa] rounded-md z-5">
                Go to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProductItem;
