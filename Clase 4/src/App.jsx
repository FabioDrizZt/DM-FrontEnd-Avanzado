import Footer from './components/Footer/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Main from './components/Main'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar/Navbar'
import StatusTripulante from './components/StatusTripulante'
import { tripulantes } from './tripulantes'

function App () {
  const titulo = 'Clase 4 - Trabajando con componentes'
  return (
    <>
      <Header title={titulo}>
        <Navbar />
      </Header>
      <Main>
        <Home />
        <About />
        <Services />
        <Contact />
        <StatusTripulante tripulantes={tripulantes} />
      </Main>
      <Footer />
    </>
  )
}

export default App
