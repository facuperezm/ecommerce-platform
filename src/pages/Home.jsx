import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingProduct from "../components/LoadingProduct";
import ShowItem from "../components/ShowItem";

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  // Function to fetch products from the API
  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://fakestoreapi.com/products/");
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products on mount
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="md:px-10 px-2">
      {loading ? <LoadingProduct /> : <ShowItem data={data} />}
    </div>
  );
};

export default Home;
