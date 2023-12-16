import { Link, Outlet } from 'react-router-dom'
import useTipo from './useTipo'

export default function Tipos () {
  const { tiposList } = useTipo()

  return (
    <div className='container'>
      <aside>
        <h1>Tipos component</h1>
        <ol>
          {tiposList.map((tipo) => (
            <li key={tipo.name}>
              <Link to={tipo.name}>{tipo.name}</Link>
            </li>
          ))}
        </ol>
      </aside>
      <Outlet className='outlet' />
    </div>
  )
}
