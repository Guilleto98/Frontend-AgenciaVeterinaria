import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AuthLayout from './layout/AuthLayout';
import RutaProtegida from './layout/RutaProtegida';

import Login from './paginas/Login';
import Registrar from './paginas/Registrar';
import OlvidePassword from './paginas/OlvidePassword';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';
import NuevoPassword from './paginas/NuevoPassword';
import AdministrarPacientes from './paginas/AdministrarPacientes';

import { AuthProvider } from './context/AuthProvider';
import { PacientesProvider } from './context/PacienteProvider';

function App() {

  return (
  <BrowserRouter>
    <AuthProvider>
      <PacientesProvider>

        {/* Rutas Publicas */}
        <Routes>
            <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Login/>}/>
              <Route path='registrar' element={<Registrar/>}/>
              <Route path='olvide-password' element={<OlvidePassword/>}/>
              <Route path='olvide-password/:token' element={<NuevoPassword/>}/>
              <Route path='confirmar/:id' element={<ConfirmarCuenta/>}/>
            </Route>

            {/* Rutas Privadas */}
            <Route path='/admin' element={<RutaProtegida/>}>
              <Route index element={<AdministrarPacientes/>}/>
            </Route>
        </Routes>
        
      </PacientesProvider>
    </AuthProvider>
  </BrowserRouter>
  )
}

export default App;
