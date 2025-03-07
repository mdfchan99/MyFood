import React, { useState } from "react";
import data from "../assets/products.json";
import Products from "./products";
import Footer from "./Footer";
import "./Home.css";

const Home = ({ cart, setCart, selectedProduct }) => {
  const [products] = useState(data);

  // Filter related products based on category or name similarity
  const relatedProducts = selectedProduct
    ? products.filter(
        (product) =>
          product.CATEGORY === selectedProduct.CATEGORY && product.ID !== selectedProduct.ID
      )
    : products;

  return (
    <div className="home-container">
      <div className="products-container">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product) => (
            <div key={product.ID}>
              <Products products={product} cart={cart} setCart={setCart} />
            </div>
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
