import Header from "./components/Header"
import Cart from "./components/Cart"
import Order from "./components/Order"
import Footer from "./components/Footer"
import "./style.css"

function App() {

  return (
    <>
      <Header />
      <span className="shopping-cart">
        <Cart />
         <Order />
      </span>
      <Footer />
    </>
  )
}

export default App
