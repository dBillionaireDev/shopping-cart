// import React, { useState } from 'react'
// import cartEmpty from '../assets/images/illustration-empty-cart.svg'

// const Order = ({ cartItems }) => {
//   const [cartCount, setCartCount] = useState(0)
//   return (
//     <div>
//       {cartItems.length === 0 ? (
//         <>
//           <h1 style={{ color: 'hsl(14, 86%, 42%)'}}>Your Cart ({cartCount})</h1>
//           <img src={cartEmpty} alt="cart-empty" />
//           <p>Your added items will appear here</p>
//         </>
//       ) : (
//         <section id="content">
//           {cartItems.map(item => (
//             <div key={item.id}>
//               <img src={item.image} alt={item.name} width="80" />
//               <h4>{item.name}</h4>
//               <p>${item.price} x {item.quantity}</p>
//               <p>Subtotal: ${item.price * item.quantity}</p>
//             </div>
//           ))}
//           <h3>
//             Grand Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
//           </h3>
//         </section>
//       )}
//     </div>
//   );
// };

// export default Order;