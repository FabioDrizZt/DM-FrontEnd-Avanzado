import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

export default function useRickAndMortiApi () {
  const [index, setIndex] = useState(1)
  const [character, setCharacter] = useState(null)
  const url = `https://rickandmortyapi.com/api/character/${index}`

  const handlerClick = useCallback(
    (count) => {
      setIndex(
        index + count === 827 ? 1 : index + count === 0 ? 826 : index + count
      )
    },
    [index]
  )

  // Función para llamar los datos de la API
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.error('error en la llamada a la API: ' + err))
  }, [url])

  // Agregamos el return
  return { character, index, handlerClick }
}
