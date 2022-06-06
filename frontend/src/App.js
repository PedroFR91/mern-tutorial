import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Datos from './pages/Datos';
import Detalle from './pages/Detalle';
import Login from './pages/Login';
import Ofertas from './pages/Ofertas';
import Register from './pages/Register';
import Usuarios from './pages/Usuarios';

function App() {
  return (
    <div className='App'>
      <>
        <Router>
          <div className='container'>
            <Header />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/datos' element={<Datos />} />
              <Route path='/usuarios' element={<Usuarios />} />
              <Route path='/ofertas' element={<Ofertas />} />
              <Route path='/detalles' element={<Detalle />} />
            </Routes>
          </div>
        </Router>
        <ToastContainer />
      </>
    </div>
  );
}

export default App;
