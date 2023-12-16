import { useEffect, useState } from 'react'
import axios from 'axios'
import Pokemons from './Pokemons'
export default function index () {
  const [pokeList, setPokeList] = useState([])
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

  useEffect(() => {
    axios(url).then((res) => setPokeList(res.data.results))
  }, [])

  return <Pokemons pokeList={pokeList} />
}
