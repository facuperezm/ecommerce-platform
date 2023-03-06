import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/Context";
import Item from "./Item";

const ShowItem = ({ data }) => {
  const { products, getProducts } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    getProducts();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const renderProducts = currentProducts.map((product) => (
    <Item key={product.id} data={product} />
  ));

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`mx-1 px-2 rounded-lg cursor-pointer hover:bg-blue-600 ${
            currentPage === i
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </li>
      );
    }

    return <ul className="flex justify-center mt-6">{pageNumbers}</ul>;
  };

  return (
    <div className="py-4 px-6">
      <div className="mb-4 flex justify-end">
        <label htmlFor="category" className="mr-2">
          Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="rounded-lg border border-blue-600 px-2 py-1 focus:outline-none"
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <div className="grid lg:px-10 items-center grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] px-6 py-4 gap-8">
        {renderProducts}
      </div>
      {totalPages > 1 && renderPagination()}
    </div>
  );
};

export default ShowItem;
