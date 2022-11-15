import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "../components/Item";
import LoadingProduct from "../components/LoadingItem";
import ShowItem from "../components/ShowItem";
import ProductContext from "../context/Context";

const Home = () => {
  const [data, setData] = useState();
  const [filter, setFilter] = useState();
  const [loading, setLoading] = useState(true);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products", {mode: 'cors'});
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);


  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products", {mode: 'cors'});
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);


  return (
   
    <div className="bg-white pt-20">
    <div className="grid">
      <div className=" auto-rows-auto justify-center">
        {loading ? <LoadingProduct /> : <ShowItem/>}
      </div>
    </div>
  </div>
   
  );
};

export default Home;
