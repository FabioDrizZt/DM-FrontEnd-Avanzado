import { Link, Outlet } from 'react-router-dom'

export default function Shop ({ products }) {
  return (
    <section>
      <h1> Mi pagina del Shop </h1>
      <Outlet />
      <ul>
        {products.map((product) => (
          <Link key={product.id} to={'/shop/' + product.id}>
            <li key={product.id}>
              {product.title} - {product.price}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}
