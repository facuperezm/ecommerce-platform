import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Cart from "../containers/Cart";
import Home from "../containers/Home";
import Product from "../containers/Product";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/products" element={<Product />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
