import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Main from './components/Main'
import Pokemons from './routes/Pokemons'
import Pokemon from './components/Pokemon'
import Tipos from './routes/Tipos'
import Tipo from './components/Tipo'

export default function AppRouter () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Main />} />
          <Route path='/pokemons' element={<Pokemons />}>
            <Route path='/pokemons/:name' element={<Pokemon />} />
          </Route>
          <Route path='tipos' element={<Tipos />}>
            <Route path='/tipos/:tipo' element={<Tipo />}>
              <Route path='/tipos/:tipo/:name' element={<Pokemon />} />
            </Route>
          </Route>
        </Route>
        <Route path='*' element={<h1>Error 404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
