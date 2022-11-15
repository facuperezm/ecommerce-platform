import { useContext, useEffect } from "react";
import ProductContext from "../context/Context";
import Item from "./Item";

const ShowItem = () => {
  const { products, getProducts } = useContext(ProductContext);
    
  useEffect(() => {
    getProducts();
  }, []);

    return (
        <div className="px-4 py-10 bg-gray-200 grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-3">
      {products.map((item, index) => <Item {...item} key={index}/>)}
    </div>
    )
}

export default ShowItem