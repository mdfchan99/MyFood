import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Router>
      <Header cart={cart} setSelectedProduct={setSelectedProduct} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} selectedProduct={selectedProduct} />} />
      </Routes>
    </Router>
  );
};

export default App;
