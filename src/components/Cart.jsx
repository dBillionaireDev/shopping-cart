import React, { useState } from 'react'
import data from '/home/nexy/React-Projects/Product-Cart-FM/src/data.json';
import cartImg from '../assets/images/icon-add-to-cart.svg';
import decrementIcon from '../assets/images/icon-decrement-quantity.svg';
import incrementIcon from '../assets/images/icon-increment-quantity.svg';

const Cart = () => {
    const [cart, setCart] = useState({});
    const [styles, setStyles] = useState({});

    const updateQuantity = (id, amount) => {
      setCart((prev) => {
        const newQuantity = (prev[id] || 0) + amount;
        const newCart = { ...prev };
  
        if (newQuantity <= 0) {
          delete newCart[id]; 
        } else {
          newCart[id] = newQuantity;
        }
  
        setStyles((prevStyles) => ({
          ...prevStyles,
          [id]: {
            border: newQuantity > 0 ? "3px solid hsl(14, 86%, 42%)" : "",
            boxShadow: newQuantity > 0 ? "0px 4px 10px rgba(0, 0, 255, 0.2)" : "none",
          },
        }));
  
        return newCart;
      });
    };

  return (
    <div id="cart">
        <ul className="product-cart">
        {data.map((item) => (
      
            <section className="cart-item" key={item.id}>
                <li><img className="cart-img" src={item.image.desktop} alt='item.name'  style={{...styles[item.id],}} /></li>
    
                {cart[item.id] ? (
                  <span className="state">
                    <button className='quantity--cart--dec' onClick={() => updateQuantity(item.id, -1)}><img src={decrementIcon} alt='increase item' /></button>
                    <span> {cart[item.id]} </span>
                    <button className='quantity--cart--add' onClick={() => updateQuantity(item.id, 1)}><img src={incrementIcon} alt='increase item' /></button>
                  </span>
                ) : (
                  <button className="submit-btn" onClick={() => updateQuantity(item.id, 1)}><img src={cartImg} alt="cart-icon" /> Add to Cart</button>
                )}
              <span  className='des'>
                <li style={{ color: 'hsl(12, 20%, 44%)'}}>{item.category}</li>
                <li><strong>{item.name}</strong></li>

                <li style={{ color: 'hsl(14, 65%, 38%)', }}><strong>${item.price}</strong></li>

              </span>
            </section>
        ))}
        </ul>
  
    </div>
  )
}

export default Cart
