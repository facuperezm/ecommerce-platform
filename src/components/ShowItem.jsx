import { useContext, useEffect } from "react";
import ProductContext from "../context/Context";
import Item from "./Item";

const ShowItem = ({ data }) => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="px-6 xl:px-56 md:px-20 sm:px-10 py-4 bg-[#eeeeee] grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-8">
      {data.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </div>
  );
};
export default ShowItem;
