import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductContext from "../context/UseContext";
import ProductDetail from "../pages/ProductDetail";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ProductContext>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/product" element={<Product />}></Route>
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </Layout>
        </ProductContext>
      </BrowserRouter>
    </>
  );
}
