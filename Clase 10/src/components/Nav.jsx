import { Link } from 'react-router-dom'
export default function Nav () {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/pokemons'>Pokemons</Link>
          </li>
          <li>
            <Link to='/tipos'>Tipos</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  )
}
