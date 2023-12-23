import { createContext, useContext, useReducer } from 'react'

// crear el context
const CartContext = createContext()

// definimos estado inicial
const initialState = { cart: [] }

// definir las acciones para el reducer
const cartReducer = (state, action) => {
  const prodExistente = state.cart.findIndex((item) => item.id === action.payload.id)
  switch (action.type) {
    case 'ADD_TO_CART':
      if (prodExistente !== -1) {
        // El producto ya está en el carrito, incrementamos la cantidad
        const updatedCart = state.cart.map((item, index) =>
          index === prodExistente ? { ...item, quantity: item.quantity + 1 } : item
        )

        return { ...state, cart: updatedCart }
      } else {
        // El producto no está en el carrito, lo añadimos con cantidad 1
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] }
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload) // el payload sería el id
      }
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, quantity: (item.quantity > 1) ? item.quantity - 1 : item.quantity } : item
        )
      }
    default:
      return state
  }
}

// creamos el provider del contexto
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within the CartProvider')
  }
  return context
}
