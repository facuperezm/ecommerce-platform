import React from "react";
import truncate from "../helpers/truncate";

export default function ItemCart({
  title,
  price,
  image,
  id,
  quantity,
  deleteItem,
  addOne,
  item,
}) {
  return (
    <>
      <div className="flex justify-between border-b m-2 h-40 items-center">
        <div className="flex flex justify-betwee align-center w-1/4">
          <img src={image} alt={title} className="w-28 p-2 my-auto" />
        </div>
        <div className="w-1/3">
          <h3 className="text-md">{truncate(title, 40, "...")}</h3>

          <button
            className="text-blue-900 font-semi-bold text-sm"
            onClick={() => deleteItem(id, false)}
          >
            Delete
          </button>
        </div>
        <div className="flex border my-auto rounded-full items-center ">
          <button
            className="py-2 px-4 hover:bg-gray-200 hover:rounded-l-full active:bg-gray-300"
            onClick={() => deleteItem(id)}
          >
            -
          </button>
          <p className="items-center text-center">{quantity}</p>
          <button
            className="py-2 px-4  hover:bg-gray-200 hover:rounded-r-full active:bg-gray-300"
            onClick={() => addOne(id)}
          >
            +
          </button>
        </div>
        <h1 className="font-semibold text-xl">
          ${(price * quantity).toFixed(2)}
        </h1>
      </div>
    </>
  );
}
