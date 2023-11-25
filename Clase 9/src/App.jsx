import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Shop from './routes/Shop'
import Card from './components/Card'
import Contact from './routes/Contact'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function App () {
  const [products, setProducts] = useState([])
  const url = 'https://api.mercadolibre.com/sites/MLA/search?q=zapatillas'

  useEffect(() => {
    axios(url).then((response) => setProducts(response.data.results))
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/shop' element={<Shop products={products} />}>
            <Route path='/shop/:id' element={<Card products={products} />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<h1> 404 - Pagina No Encontrada </h1>} />
      </Routes>
    </Router>
  )
}
