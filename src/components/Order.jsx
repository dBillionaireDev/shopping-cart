import React, { useState } from 'react'
import cartEmpty from '../assets/images/illustration-empty-cart.svg'

const Order = () => {
  const [cartCount, setCartCount] = useState(0)
  return (
    <div id="order">
      <h1 style={{ color: 'hsl(14, 86%, 42%)'}} id ="h1">Your Cart ({cartCount})</h1>
      <section id="content">
      <img src={cartEmpty} alt="cart-empty" />
      
      <p>Your added items will appear here</p>
      </section>
    </div>
  )
}

export default Order
