import { useContext } from 'react'
import { CartContext } from '../CartContext'

// crea una lista de objetos producto con id, name, price ?
const products = [
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 200 },
  { id: 3, name: 'Producto 3', price: 300 }
]

export default function ProductList () {
  const { addToCart } = useContext(CartContext)
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
