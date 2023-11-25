import { Outlet, useOutlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home () {
  const outlet = useOutlet()
  return (
    <main>
      <Header />
      <hr />
      {outlet ? <Outlet /> : <h1>Pagina de inicio</h1>}
      <hr />
      <Footer />
    </main>
  )
}
