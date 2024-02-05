import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import Pagination from "./components/Pagination/Pagination";
import Navbar from "./components/Navbar/Navbar";
import { setProducts, selectProducts } from "./redux/productSlice";
import data from "./data/data.json";
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./components/Orders/Order";
import Customers from "./components/Customers/Cutomers";

const productsPerPage = 6;

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    dispatch(setProducts(data.slice(startIndex, endIndex)));
  }, [currentPage, dispatch]);

  const totalPages = Math.ceil(data.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/products"
              element={<ProductList products={products} />}
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
