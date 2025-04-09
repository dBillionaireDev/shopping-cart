import React, { useState } from 'react'
import cartEmpty from '../assets/images/illustration-empty-cart.svg'
import clearCart from '../assets/images/icon-remove-item.svg'
import carbonNeutral from '../assets/images/icon-carbon-neutral.svg'

const Order = ({ cartItems, removeFromCart, confirmOrder }) => {

  return (
    <div id="order">
      {cartItems.length === 0 ? (
        <>
          <h1 style={{ color: 'hsl(14, 86%, 42%)' }}>Your Cart (0)</h1>
          <img src={cartEmpty} alt="cart-empty" id='empty-cart' />
          <p>Your added items will appear here</p>
        </>
      ) : (
        <section id="content">
          <h1 style={{ color: 'hsl(14, 86%, 42%)' }}>
            Your Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
          </h1>
          {cartItems.map(item => (
            <span key={item.id} id='order-checkout'>

              <h4 style={{ color: 'black', textAlign: 'left' }}>{item.name}</h4>
              <div id='item-check'><span style={{ color: 'hsl(14, 86%, 42%)' }}>{item.quantity}x </span>   <span style={{ fontWeight: '400' }}> @${item.price} </span> <span style={{ fontWeight: '700' }}>${item.price * item.quantity}</span></div>

              {cartItems.some(cartItem => cartItem.id === item.id) ? (
                <button id="clear-cart" onClick={() => removeFromCart(item.id)} ><img src={clearCart} alt='Remove Cart Icon' /></button>
              ) : ''}

              < hr style={{ border: '1px solid hsl(13, 31%, 94%)' }} />
            </span>
          ))}
          <div id='cart-total'>
            <span style={{ display: 'inline' }}> Order Total</span>
            <span style={{ display: 'inline', fontSize: '18pt', fontWeight: '900' }}>
              ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
            </span>
          </div>
          <div className="delivery">
            <img src={carbonNeutral} alt='carbon-neutral-icon' /> <small> This is a <strong> carbon-neutral </strong> delivery</small>
          </div>
          <button className='confirm-order' onClick={confirmOrder}>
            Confirm Order
          </button>
        </section>
      )}
    </div>
  );
};

export default Order;