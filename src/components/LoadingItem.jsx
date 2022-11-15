import React from "react";
import  {Instagram} from "react-content-loader";

const LoadingProduct = () => {
  return (
    <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Instagram/>
      <Instagram className="hidden sm:block"/>
      <Instagram className="hidden md:block"/>
      <Instagram className="hidden lg:block"/>
      <Instagram className="hidden xl:block"/>
    </div>
  );
};

export default LoadingProduct;