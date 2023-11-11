import { useState } from 'react'
import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import { pokemons } from './datos.json'
import { results as pokekonsJS } from './datos.js'

function App () {
  const [mostrar, setMostrar] = useState(false)
  console.log(pokemons)
  console.log(pokekonsJS)

  return (
    <>
      <h1>Ciclo de vida en componentes</h1>
      <button onClick={() => setMostrar(!mostrar)}> Cambiar a componente {mostrar ? 'Funcional' : 'de Clase'}  </button>
      {mostrar ? <ClassComponent /> : <FunctionalComponent />}
    </>
  )
}

export default App
