import { useEffect, useState } from 'react'
import axios from 'axios'
export default function useTipo () {
  const [tiposList, setTiposList] = useState([])
  const url = 'https://pokeapi.co/api/v2/type/'

  useEffect(() => {
    axios(url).then((res) => setTiposList(res.data.results))
  }, [])

  return { tiposList }
}
