import React from "react";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./component/Products";
import Product from "./component/Product";
import Login from "./component/Login";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
