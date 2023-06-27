import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./component/Navbar";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Home from "./component/pages/Home";
import Products from "./component/pages/Products";
import AddProduct from "./component/pages/AddProduct";
import ProductDetails from "./component/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
             path="products" 
             element={
            <>
            <Outlet />
            </>
          } 
        > 
            <Route path="" element={<Products />} />
            <Route path="add" element={<AddProduct />} />
            <Route path=":productID" element={<ProductDetails />} />
            </Route>

      </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
