import React, { useState } from "react"
import Header from "./components/Header"
import Cart from "./components/Cart"
import Order from "./components/Order"
import Footer from "./components/Footer"
import ConfirmedOrder from "./components/ConfirmedOrder"
import "./style.css"

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showConfirmedOrder, setShowConfirmedOrder] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const resetCart = () => {
    setCartItems([]);
    setShowConfirmedOrder(false);
    document.body.classList.remove('show-confirmed');
    setIsActive(false);
  };

  const confirmOrder = () => {
    setShowConfirmedOrder(true);
    document.body.classList.add('show-confirmed');
  };

  return (
    <>
      <Header />
      <span className="shopping-cart">
        <Cart cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} />
        <Order
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          confirmOrder={confirmOrder}
        />
      </span>
      {showConfirmedOrder && (
        <>
          <div className="backdrop" onClick={resetCart}></div>
          <ConfirmedOrder cartItems={cartItems} resetCart={resetCart} />
        </>
      )}
      <Footer />
    </>
  )
}

export default App