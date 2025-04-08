import React, { useState } from "react"
import Header from "./components/Header"
import Cart from "./components/Cart"
import Order from "./components/Order"
import Footer from "./components/Footer"
import ConfirmedOrder from "./components/ConfirmedOrder"
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
      <ConfirmedOrder cartItems={cartItems} />
      <Footer />
    </>
  )
}

export default App