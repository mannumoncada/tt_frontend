// importación de estilos
import './App.css'

// importación de barra de navegación y pie de página
import CompNavBar from './Componentes/CompNavBar'
import CompFooter from './Componentes/CompFooter'

// importación de componentes para Clientes
import CompMostrarClientes from './Componentes/CompMostrarClientes'
import CompCrearClientes from './Componentes/CompCrearCliente'
import CompEditarClientes from './Componentes/CompEditarCliente'

// importación de componentes para Sedes
import CompMostrarSedes from './Componentes/CompMostrarSedes'
import CompCrearSedes from './Componentes/CompCrearSedes'
import CompEditarSedes from './Componentes/CompEditarSedes'

//importación de Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {

  return (
    <div className='App'>
      <header>
      <CompNavBar/>
      </header>
      {/* Rutas para la información en BD*/}
      <BrowserRouter>
      <Routes>
      {/* Rutas para el módulo de Clientes*/}
      <Route path='/clientes' element={<CompMostrarClientes />}/>
      <Route path='/clientes/agregar' element={<CompCrearClientes />}/>
      <Route path='/clientes/editar/:id' element={<CompEditarClientes />}/>
      {/* Rutas para el módulo de Sedes*/}
      <Route path='/sedes' element={<CompMostrarSedes />}/>
      <Route path='/sedes/agregar' element={<CompCrearSedes />}/>
      <Route path='/sedes/editar/:id' element={<CompEditarSedes />}/>
      </Routes>
      </BrowserRouter>
      <footer>
        <CompFooter/>
      </footer>
    </div>
  )
}

export default App
