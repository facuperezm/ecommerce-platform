import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Item from "./Item";
import LoadingDetail from "./LoadingDetail";
import ShowProductItem from "./ShowProductItem";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.data);
      const wait = await setLoading(false);
    };
    getProduct();
  }, []);

  return (
    <div className="bg-[#ededed]">
      {loading ? <LoadingDetail /> : <ShowProductItem data={product} />}
    </div>
  );
};

export default ItemDetail;
