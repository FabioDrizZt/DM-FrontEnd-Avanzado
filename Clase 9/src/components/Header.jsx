import { Link, useNavigate } from 'react-router-dom'

export default function Header () {
  const navigate = useNavigate()
  const irHaciaAtras = () => {
    if (window.confirm('Desea volver hacia atras?')) navigate('/')
  }
  return (
    <header>
      <button onClick={irHaciaAtras}>Back</button>
      <img
        src='https://ijudicial.gob.ar/wp-content/uploads/2018/06/MercadoLibre-logo-1-420x470.png'
        alt='Logo del e-commerce'
        style={{ width: 200, height: 200 }}
      />
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
