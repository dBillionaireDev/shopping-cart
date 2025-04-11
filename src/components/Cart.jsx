import React, { useState } from 'react';
import data from '../data.json';
import cartImg from '../assets/images/icon-add-to-cart.svg';
import decrementIcon from '../assets/images/icon-decrement-quantity.svg';
import incrementIcon from '../assets/images/icon-increment-quantity.svg';

const Cart = ({ cartItems, setCartItems, removeFromCart }) => {
  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, {
        ...item,
        quantity: 1,
        image: item.image.thumbnail
      }]);
    }
    handleChange(item.id, 1);
  };

  const reduceFromCart = (itemId) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter(item => item.quantity > 0);
      return updatedItems;
    });
  };

  const reduceCart = (item) => {
    reduceFromCart(item.id);
    handleChange(item.id, cartItems.find(c => c.id === item.id)?.quantity - 1 || 0);
  }

  const increaseCart = (item) => {
    addToCart(item);
    handleChange(item.id, cartItems.find(c => c.id === item.id)?.quantity + 1 || 1);
  }

  const [activeItems, setActiveItems] = useState({});

  function handleChange(itemId, quantity) {
    setActiveItems(prev => ({
      ...prev,
      [itemId]: quantity > 0
    }));
    return quantity > 0;
  }

  return (
    <div id="cart">
      <ul className="product-cart">

        {data.map((item) => (
          <section className="cart-item" key={item.id}>
            <li>
              <img
                className="cart-img"
                src={item.image.desktop}
                alt={item.name}
                style={{
                  border: activeItems[item.id] ? '3px solid hsl(14, 86%, 42%)' : 'none'
                }}
              />
            </li>
            <span className='des'>
              <li style={{ color: 'hsl(12, 20%, 44%)' }}>{item.category}</li>
              <li><strong>{item.name}</strong></li>
              <li style={{ color: 'hsl(14, 65%, 38%)' }}>
                <strong>${item.price}</strong>
              </li>
            </span>

            {cartItems.some(cartItem => cartItem.id === item.id) ? (
              <span className="state">
                <button className='quantity--cart--dec' onClick={() => reduceCart(item)}><img src={decrementIcon} alt='increase item' /></button>
                <span> {cartItems.find(c => c.id === item.id)?.quantity || 0} </span>
                <button className='quantity--cart--add' onClick={() => increaseCart(item)}><img src={incrementIcon} alt='increase item' /></button>
              </span>
            ) : (
              <button className="submit-btn" onClick={() => {
                addToCart(item);
                handleChange(item.id, 1);
              }}><img src={cartImg} alt="cart-icon" /> Add to Cart</button>
            )}
          </section>
        ))}
      </ul>
    </div >
  );
};

export default Cart;