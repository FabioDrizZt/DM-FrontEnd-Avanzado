import { useCart } from '../context/CartContext'

export default function Cart () {
  const { state, dispatch } = useCart()

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  }
  const incrementQuantity = (id) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: id })
  }
  const decrementQuantity = (id) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: id })
  }
  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} -<button onClick={() => decrementQuantity(item.id)}>-</button>
            Quantity: {item.quantity}
            <button onClick={() => incrementQuantity(item.id)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
