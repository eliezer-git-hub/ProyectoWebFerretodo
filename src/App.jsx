import { Route, Routes } from 'react-router-dom'
import { Index } from './page/Index'
import { Categorias } from './page/Categorias'
import { CategoriasPintura } from './page/CategoriasPintura'
import { CategoriasCables } from './page/CategoriasCables'
import { CategoriasHerramienta } from './page/CategoriasHerramienta'
import { Contactenos } from './page/Contactenos'
import { Nosotros } from './page/Nosotros'

import { UsarContex } from './components/UsarContex'

function App() {
  return (
    <div>
    <UsarContex>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/categorias' element={<Categorias/>}/>
        <Route path='/categorias/pintura' element={<CategoriasPintura/>}/>
        <Route path='/categorias/cables' element={<CategoriasCables/>}/>
        <Route path='/categorias/herramienta' element={<CategoriasHerramienta/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/contactenos' element={<Contactenos/>}/>
      </Routes>
    </UsarContex>
    </div>
  )
}

export default App
