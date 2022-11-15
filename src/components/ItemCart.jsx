import React from "react";
import truncate from "../helpers/truncate";

export default function ItemCart({title, price, image, id, quantity, deleteItem, item}) {
  return (
    <>
      <div className="border border-red-900 m-2">
        <div className="flex justify-between align-center">
          <img src={image} alt={title} className="w-28" />
          <h3 className="text-md">{truncate(title, 40, "...")}</h3>
          <h4 className="font-semibold"> ${(price * quantity).toFixed(2)}</h4>
          <button onClick={() => deleteItem(id)}>DELETE ITEM</button>
          <button onClick={() => deleteItem(id, false)}>DELETE ALL ITEMS</button>
        </div>
      </div>
    </>
  );
}
