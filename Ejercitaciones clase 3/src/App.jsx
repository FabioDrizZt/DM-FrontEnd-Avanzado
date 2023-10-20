import './App.css'
import Personajes from './components/Personajes '
import Saludo from './components/Saludo'

function App () {
  const nombre = 'Juan'
  const apellido = 'Albornoz'
  return (
    <>
      <Personajes />
      <Saludo nombre={nombre} apellido={apellido}>
        Hola
      </Saludo>
    </>
  )
}

export default App
