import React, { useEffect, useState } from 'react';
import "./ViewCart.css";
import Footer from './Footer';  
import Products from './products';
import "./viewcart.scss";

const ViewCart = ({ cart, setCart }) => {
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseFloat(curr.AMT) * (curr.QUANTITY || 0), 0));
  }, [cart]);

  const removeItem = (id) => {
    const updatedCart = cart.filter(product => product.ID !== id);
    setCart(updatedCart);
  };

  const updateQuantity = (id, increment) => {
    const updatedCart = cart.map(product => {
      if (product.ID === id) {
        const newQuantity = (product.QUANTITY || 0) + increment;
        if (newQuantity <= 0) return null; // Remove the item if quantity is 0
        return { ...product, QUANTITY: newQuantity };
      }
      return product;
    }).filter(Boolean); // Remove null items

    setCart(updatedCart);
  };

  return (
    <>
      <h1 className='cartheading'>My Cart</h1>
      <div className='cartcontiner'>
        {
          cart.map((product) => (
            <div className="cartproduct" key={product.ID}>
              <div className="cartimage">
                <img src={product.PIC} alt={"myfood"} />
              </div>
              <div className="cartproductdetails">
                <h3>{product.NAME}</h3>
                <p>Price Rs: {parseFloat(product.AMT)}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(product.ID, -1)}>-</button>
                  <span className="quantity">{product.QUANTITY || 0}</span>
                  <button onClick={() => updateQuantity(product.ID, 1)}>+</button>
                </div>
                <p className="item-total">Item Total: Rs {parseFloat(product.AMT) * (product.QUANTITY || 0)}</p>
                <button className="removebtn" onClick={() => removeItem(product.ID)}>Remove</button>
              </div>
            </div>
          ))
        }
        <h2 className='cartamount'>Total Amount Rs: {Total}</h2>
      </div>
      <Footer/>
    </>
  );
};

export default ViewCart;
