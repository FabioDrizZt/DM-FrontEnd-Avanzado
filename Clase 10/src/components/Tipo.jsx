import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Outlet, useParams } from 'react-router-dom'
export default function Tipo () {
  const [pokeList, setPokeList] = useState([])
  const { tipo } = useParams()
  const url = `https://pokeapi.co/api/v2/type/${tipo}`

  useEffect(() => {
    axios(url).then((res) => setPokeList(res.data.pokemon))
  }, [tipo])

  return (
    <div className='container'>
      <aside>
        <h1>Pokemons component</h1>
        <ol>
          {pokeList?.map((poke) => (
            <li key={poke.pokemon.name}>
              <Link to={poke.pokemon.name}>{poke.pokemon.name}</Link>
            </li>
          ))}
        </ol>
      </aside>
      <Outlet className='outlet' />
    </div>
  )
}
