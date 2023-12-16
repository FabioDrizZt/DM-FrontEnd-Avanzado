import { CartProvider } from './CartContext'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
import './App.css'

function App() {
	return (
		<CartProvider>
			<h1>Shopping Cart 🛒</h1>
      <ProductList />
      <hr />
      <ShoppingCart />
		</CartProvider>
	)
}

export default App
