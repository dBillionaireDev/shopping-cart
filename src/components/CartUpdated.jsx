import React, { useState } from 'react'
import data from '/home/nexy/React-Projects/Product-Cart-FM/src/data.json';
import cart from '../assets/images/icon-add-to-cart.svg';
import decrementIcon from '../assets/images/icon-decrement-quantity.svg';
import incrementIcon from '../assets/images/icon-increment-quantity.svg';

const CartUpdated = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <div id="cart">
            <ul className="product-cart">
                {data.map((item) => (
                    <section className="cart-item" key={item.id}>
                        <button onClick={handleIncrement}>
                            <img className="cart-img" src={item.image.desktop} alt={item.name} />
                        </button>
                        <button className="submit-btn" type="submit"><img src={cart} alt="cart-icon" /> Add to Cart</button>
                        <button className="state" onClick={handleDecrement}>
                            <img src={decrementIcon} alt='reduce item' className='quantity--cart--dec' />
                            {quantity}
                            <img src={incrementIcon} alt='increase item' className='quantity--cart--add' onClick={handleIncrement} />
                        </button>
                        <span className='des'>
                            <li style={{ color: 'hsl(12, 20%, 44%)'}}>{item.category}</li>
                            <li><strong>{item.name}</strong></li>
                            <li style={{ color: 'hsl(14, 65%, 38%)' }}><strong>${item.price}</strong></li>
                        </span>
                    </section>
                ))}
            </ul>
        </div>
    )
}

export default CartUpdated
