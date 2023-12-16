import { useContext } from 'react'
import { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	const addToCart = (item) => {
		const existingItem = cart.find((cartItem) => cartItem.id === item.id)

		if (existingItem) {
			setCart((prevCart) =>
				prevCart.map((cartItem) =>
					cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
				)
			)
		} else {
			setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }])
		}
	}

	const removeFromCart = (itemId) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
	}

	const clearCart = () => {
		setCart([])
	}

	return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
}

export const UseCartContext = () => useContext(CartContext)
