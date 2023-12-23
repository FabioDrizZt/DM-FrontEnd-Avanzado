import React from 'react'
import { UseCartContext } from '../CartContext'

export default function ShoppingCart () {
  const { cart, removeFromCart, clearCart } = UseCartContext()
  return (
    <div>
      <h2>Shopping Cart 🛒</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove From Cart</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}> Clear Cart </button>
    </div>
  )
}
