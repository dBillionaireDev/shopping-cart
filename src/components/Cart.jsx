import React, { useState } from 'react'
import data from '/home/nexy/React-Projects/Product-Cart-FM/src/data.json';
import cart from '../assets/images/icon-add-to-cart.svg';
import decrementIcon from '../assets/images/icon-decrement-quantity.svg';
import incrementIcon from '../assets/images/icon-increment-quantity.svg';

const Cart = () => {
    const [count, setCount] = useState('')
    const [quantity, setQuantity] = useState(1)
    function handleSubmit(){

    }
    
  return (
    <div id="cart">
        <ul className="product-cart">
        {data.map((item) => (
            <section className="cart-item">
                <li key={Math.random()}><img className="cart-img" src={item.image.desktop} alt='item.name'/></li>
                <button className="submit-btn" onClick={handleSubmit} type="submit"><img src={cart} alt="cart-icon" /> Add to Cart</button>
                <button className="state"> <button className='quantity--cart--dec' onClick={()=> {setCount(count - 1)}}><img src={decrementIcon} alt='reduce item' /></button> {quantity} <button className='quantity--cart--add' onClick={()=> {setCount(count + 1)}}><img src={incrementIcon} alt='increase item' /></button> </button>
                {/* <button className="state" onClick={()=> {setCount(count - 1)}}>-</button>{count}<button className="state" onClick={() => {setCount(count + 1)}}>+</button> */}
              <span className='des'>
                <li key={Math.random()} style={{ color: 'hsl(12, 20%, 44%)'}}>{item.category}</li><li key={Math.random()}><strong>{item.name}</strong></li>
                <li key={Math.random()} style={{ color: 'hsl(14, 65%, 38%)', }}><strong>${item.price}</strong></li>
              </span>
            </section>
        ))}
        </ul>
  
    </div>
  )
}

export default Cart
