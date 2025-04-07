import React from 'react'
import orderConfirmed from '../assets/images/icon-order-confirmed.svg'

const ConfirmedOrder = ({ cartItems }) => {
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
                    {/* <img src={item.image} alt /> */}
                    {cartItems.map(item => (
                        <span key={item.id} id='order-checkout' className='order--confirmed'>

                            <h4 style={{ color: 'black', textAlign: 'left' }}>{item.name}</h4>
                            <div id='item-checkout'>
                                <span style={{ color: 'hsl(14, 86%, 42%)' }}>{item.quantity}x </span>   <span style={{ fontWeight: '400', color: 'hsl(7, 20%, 60%)' }}> @${item.price} </span>
                            </div>

                            <span id='total-item-worth' style={{ fontWeight: '700' }}>
                                ${item.price * item.quantity}
                            </span>

                            < hr style={{ border: '1px solid hsl(13, 31%, 94%)', width: '470px' }} />
                        </span>
                    ))}
                    <div id='cart-total'>
                        <span style={{ display: 'inline' }}> Order Total</span>
                        <span style={{ display: 'inline', fontSize: '18pt', fontWeight: '900' }}>
                            ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                        </span>
                    </div>
                </div>
                <button className='start-new-order'>Start New Order</button>
            </div >
        </>
    )
}

export default ConfirmedOrder;
