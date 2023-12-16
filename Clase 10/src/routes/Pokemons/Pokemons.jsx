import { Link, Outlet } from 'react-router-dom'
export default function Pokemons ({ pokeList }) {
  return (
    <div className='container'>
      <aside>
        <h1>Pokemons component</h1>
        <ol>
          {pokeList?.map((poke) => (
            <li key={poke.name}>
              <Link to={poke.name}>{poke.name}</Link>
            </li>
          ))}
        </ol>
      </aside>
      <Outlet className='outlet' />
    </div>
  )
}
