import React from "react";
export default function ItemCart(props) {
  const { title, price, image, id, quantity } = props;
  const handleBorrar = () => {
    props.deleteItem(id);
  };
  return (
    <>
      <div className="max-w-sm">
        <div>
          <h1>
            {title} ${price}
          </h1>
          <img src={image} alt="" />
          <h4>Quantity: {quantity}</h4>
          <h3>Total: ${price * quantity}</h3>
          <button onClick={handleBorrar}>borar uno</button>
          <button onClick={handleBorrar}>borra todo</button>
        </div>
      </div>
    </>
  );
}
