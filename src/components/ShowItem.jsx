import { useContext, useEffect } from "react";
import ProductContext from "../context/Context";
import Item from "./Item";

const ShowItem = ({ data }) => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="px-2 py-4 bg-[#eeeeee] grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-3">
      {data.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </div>
  );
};
export default ShowItem;
