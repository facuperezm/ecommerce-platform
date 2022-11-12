import React, { useContext, useEffect } from "react";
import Item from "../components/Item";
import ProductContext from "../context/Context";

const Home = () => {
  useEffect(() => {
    getProducts();
  }, []);

  const { getProducts, products } = useContext(ProductContext);

  return (
    <div className="bg-gray-200 grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-3">
      {products.map((item) => (
        <Item {...item} key={item.id}></Item>
      ))}
    </div>
  );
};

export default Home;
