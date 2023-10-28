import { useState } from 'react'

export default function CounterFuncional() {
  const [count, setCount] = useState(0)
  const emojis = ['😊', '🚀', '🎉', '❤️', '🌟', '🎁', '🎤']
  const handleIncrement = () => {
    //setCount((prevState) => prevState + 1)
    setCount((count + 1) % emojis.length)
  }

  return (
    <div>
      <h2>CounterFunctional: {count}</h2>
      <p>{emojis[count]}</p>
      <button onClick={() => handleIncrement()}>Incrementar</button>
    </div>
  )
}
