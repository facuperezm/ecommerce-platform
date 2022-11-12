import React, { useContext } from "react";
import ProductContext from "../context/Context";

const Item = ({ title, price, description, image, id }) => {
  const { addToCart } = useContext(ProductContext);
  return (
    <>
      <article className="flex flex-col align-center justify-center rounded rounded-2xl bg-white rounded-2xl">
        <img src={image} className="rounded-2xl w-1/2 m-auto" />
        <h1 className="font-bold text-center">{title}</h1>
        <p className="text-center">${price}</p>
        <button
          className="font-bold border mx-auto my-2 px-4 py-1 bg-yellow-300 rounded-2xl"
          onClick={() => {
            addToCart(id);
          }}
        >
          ADD TO CART
        </button>
      </article>
    </>
  );
};

export default Item;
