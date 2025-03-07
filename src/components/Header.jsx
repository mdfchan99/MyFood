import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import data from "../assets/products.json"; // Import product data

const Header = ({ cart, setSelectedProduct }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    if (query) {
      const results = data.filter(product =>
        product.NAME.toLowerCase().includes(query)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSelectProduct = (product) => {
    setSearchTerm(product.NAME);
    setSelectedProduct(product);
    setFilteredProducts([]);
  };

  return (
    <div className='navbar'>
      <div className="logo">MyFood</div>

      <div className="searchbar">
        <input 
          type="text"
          placeholder="Search....🔍"
          value={searchTerm}
          onChange={handleSearch}
        />
        {filteredProducts.length > 0 && (
          <ul className="search-results">
            {filteredProducts.map(product => (
              <li key={product.ID} onClick={() => handleSelectProduct(product)}>
                {product.NAME}
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li>
          <Link to={"/viewcart"}>
            <div className='cartCount'><span>{cart.length}</span></div>
            View cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
