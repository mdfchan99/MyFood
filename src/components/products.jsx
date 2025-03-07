import React from 'react';
import "./product.css";

const Products = ({ products, cart, setCart }) => {
  const name = products.NAME.length > 18 ? products.NAME.substring(0, 18) + "..." : products.NAME;

  /* Add and remove cart handler */
  const addCart = () => {
    setCart([...cart, products]);
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.ID !== products.ID));
  };

  return (
    <div className='products'>
      <div className="img">
        <img src={products.PIC} alt={products.NAME} />
      </div>

      <div className="details">
        <h3>{name}</h3>
        <p>Price RS: {products.AMT}</p>

        {cart.includes(products) ? (
          <button className='btnremove' onClick={removeCart}>Remove from cart</button>
        ) : (
          <button className='btnadd' onClick={addCart}>Add to cart</button>
        )}
      </div>
    </div>
  );
};

export default Products;
