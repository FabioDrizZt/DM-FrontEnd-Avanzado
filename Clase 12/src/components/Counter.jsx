import React, { useReducer } from 'react'

function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    default:
      throw new Error()
  }
}

export default function Counter () {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <p> Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 2 })}>-2</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>+2</button>
    </div>
  )
}
