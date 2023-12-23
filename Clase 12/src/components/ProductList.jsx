import { useCart } from '../context/CartContext'
const products = [
  { id: 1, name: 'Producto 1', price: 10 },
  { id: 2, name: 'Producto 2', price: 20 },
  { id: 3, name: 'Producto 3', price: 30 }
]

export default function ProductList () {
  const { dispatch } = useCart()

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}{' '}
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
