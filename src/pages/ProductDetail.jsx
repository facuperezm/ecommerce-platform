import React from "react";
import { Link } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

const ProductDetail = () => {
  return (
    <div className="flex flex-col bg-[#ededed] py-5 pt-10 pb-10 my-auto flex-1">
      <ItemDetail />
    </div>
  );
};

export default ProductDetail;
