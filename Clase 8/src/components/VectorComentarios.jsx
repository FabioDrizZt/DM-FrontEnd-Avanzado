import { useEffect, useState } from 'react'

function VectorComentarios () {
  const [vector, setVector] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/comments'

  // Función para llamar los datos de la API

  const getDataAsync = async () => {
    const data = await fetch(url)
    const convert = await data.json()
    setVector(convert)
  }

  const getDataPromesa = () => {
    return fetch(url)
      .then((data) => data.json())
      .then((convert) => setVector(convert))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getDataPromesa()
  }, [url])

  return (
    <div>
      <ul>
        {vector.map((object, id) => (
          <li key={id}>{object.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default VectorComentarios
