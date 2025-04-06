import React, { useState } from "react"
import Header from "./components/Header"
import Cart from "./components/Cart"
import Order from "./components/Order"
import Footer from "./components/Footer"
import "./style.css"

function App() {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <>
      <Header />
      <span className="shopping-cart">
        <Cart cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} />
        <Order cartItems={cartItems} removeFromCart={removeFromCart} />
      </span>
      <Footer />
    </>
  )
}

export default App