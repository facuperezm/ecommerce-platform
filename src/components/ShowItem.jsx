import { useContext, useEffect } from "react";
import ProductContext from "../context/Context";
import Item from "./Item";

const ShowItem = ({ data }) => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid lg:px-10 items-center grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] px-6 py-4 bg-[#eeeeee] gap-8">
      {data.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </div>
  );
};
export default ShowItem;
