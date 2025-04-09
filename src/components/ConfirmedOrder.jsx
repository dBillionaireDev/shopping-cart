import React from 'react'
import orderConfirmed from '../assets/images/icon-order-confirmed.svg'

const ConfirmedOrder = ({ cartItems, resetCart }) => {
    return (
        <>
            <div className='confirmedOrderContainer'>
                <img src={orderConfirmed} alt='order-confirmed icon' style={{ maxWidth: '40px', maxHeight: '40px' }} />

                <span id='confirmed--heading'>
                    <h1 style={{
                        fontSize: '30pt', marginBottom: '5px'
                    }} >Order Confirmed</h1>
                    <small style={{ color: 'hsl(7, 20%, 60%)' }}>We hope you enjoy your food!</small>
                </span>
                <div className="cartedItems">
                    {cartItems.map(item => (
                        <span key={item.id} id='order-confirmed' className='order--confirmed'>

                            <div id='checkout-item'>

                                <div id='item-ordered'>
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                objectFit: 'cover',
                                                borderRadius: '5px',
                                                position: 'relative',
                                                top: '18px',
                                                left: '-20px'
                                            }}
                                        />
                                    )}
                                    <section id='item--checkout'>
                                        <h4 style={{ color: 'black', textAlign: 'left' }}>{item.name}</h4>
                                        <div id='item-checkout'>
                                            <span style={{ color: 'hsl(14, 86%, 42%)' }}>{item.quantity}x </span>
                                            <span style={{ fontWeight: '400', color: 'hsl(7, 20%, 60%)' }}> @${item.price} </span>
                                        </div>
                                    </section>
                                </div>
                            </div>

                            <div id='total-item-worth' style={{ fontWeight: '700' }}>
                                ${item.price * item.quantity}
                            </div>

                            <hr />
                        </span>
                    ))}
                    <div id='cart-total'>
                        <span style={{ display: 'inline' }}> Order Total</span>
                        <span style={{ display: 'inline', fontSize: '18pt', fontWeight: '900' }}>
                            ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                        </span>
                    </div>
                </div>
                <button
                    className='start-new-order'
                    onClick={resetCart}
                >
                    Start New Order
                </button>
            </div >
        </>
    )
}

export default ConfirmedOrder;