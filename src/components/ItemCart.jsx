import React from "react";
import truncate from "../helpers/truncate";

export default function ItemCart(props) {
  const { title, price, image, id, quantity, deleteItem } = props;
  const handleBorrar = () => {
    props.deleteItem(id);
  };
  return (
    <>
      <div className="border border-red-900 m-2">
        <div className="flex justify-between align-center">
          <img src={image} alt={title} className="w-28" />
          <h3 className="text-md">{truncate(title, 40, "...")}</h3>
          <h4 className="font-semibold"> ${(price * quantity).toFixed(2)}</h4>
        </div>
      </div>
    </>
  );
}
