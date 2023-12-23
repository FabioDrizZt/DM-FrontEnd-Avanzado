import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function Pokemon () {
  const [poke, setPoke] = useState({})
  const { name } = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  useEffect(() => {
    axios(url).then((r) => setPoke(r.data))
  }, [name])

  return (
    <div>
      <h2>{poke?.name}</h2>
      <img src={poke?.sprites?.front_default} alt={poke.name} />
    </div>
  )
}
