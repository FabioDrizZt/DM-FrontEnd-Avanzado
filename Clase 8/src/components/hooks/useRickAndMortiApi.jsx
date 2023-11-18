import { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'

export default function useRickAndMortiApi () {
  const [index, setIndex] = useState(1)
  const [character, setCharacter] = useState(null)
  const url = useMemo(
    () => `https://rickandmortyapi.com/api/character/${index}`,
    [index]
  )

  const handlerClick = useCallback(
    (count) => {
      setIndex((index + count + 826) % 826 || 826)
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
