import React from "react";
import "./App.css"
import Navbar from "./components/navbar"
import Categories from "./components/categories"
import Products from "./components/products"
import Footer from "./components/footer"

function App() {
  return (
    <>
    <Navbar/>
    <Categories/>
    <Products/>
    <Footer/>
    </>
  );
}

export default App