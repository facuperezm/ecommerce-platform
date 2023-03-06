import React from "react";
import ItemDetail from "../components/ItemDetail";

// Renders the product detail page
const ProductDetail = () => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4 md:px-8 flex-grow">
        <div className="max-w-screen-xl mx-auto">
          <ItemDetail />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
