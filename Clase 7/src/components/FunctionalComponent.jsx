import { useEffect, useState } from 'react'
const names = ['Pedro', 'Juan', 'Maria', 'Patricia', 'Gloria', 'Pancho']

export default function FunctionalComponent () {
  const [name, setName] = useState('fabio')
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hola desde Digital Mind')

  const handleCount = (ind) => {
    setCount(count + ind)
  }
  const handleMessage = () => {
    setMessage(Math.random() * 10)
  }

  useEffect(() => {
    // 1ER METODO DEL CICLO DE VIDA - AL MONTARSE EL COMPONENTE
    console.log('El componente funcional se monto')
    setName('Fabio Funcional')
    setCount(1)
    setMessage('Saludos desde Componente Funcional')
    document.title = 'Titulo del Componente Funcional'
    // Llamados a la API para traer datos que se cargan en el componente
    return () => {
      // 3ER METODO DEL CICLO DE VIDA - AL DESMONTARSE EL COMPONENTE
      console.log('Demontando el componente funcional...')
      document.title = 'Titulo de mi pagina principal'
    }
  }, [])

  useEffect(() => {
    // EJECUTARLO SIN ARRAY HACE QUE SE EJECUTE SIN IMPORTAR
    // QUE PROP O STATE SE ACTUALICE
    console.log('El componente funcional se actualizó')
  })

  useEffect(() => {
    // 2DO METODO DEL CICLO DE VIDA - AL ACTUALIZARSE EL COMPONENTES
    console.log('El componente funcional actualizó su contador')
    // Si se actualiza el estado del contador
    setName(names[count % names.length])
  }, [count])

  useEffect(() => {
    // 2DO METODO DEL CICLO DE VIDA - AL ACTUALIZARSE EL COMPONENTES
    console.log('Cambio el mensaje')
  }, [message])

  return (
    <div>
      <h1>Componente Funcional</h1>
      <h2>El nombre es: {name}</h2>
      <p>La cuenta va en: {count}</p>
      <p>El mensaje es: {message}</p>
      <button onClick={() => handleCount(1)}>Incrementar contador en 1</button>
      <button onClick={() => handleMessage()}>Cambiar Mensaje</button>
    </div>
  )
}
