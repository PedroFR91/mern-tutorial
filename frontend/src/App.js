import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Comisiones from './pages/Comisiones';
import Comparador from './pages/Comparador';
import Dashboard from './pages/Dashboard';
import Datos from './pages/Datos';
import Login from './pages/Login';
import Register from './pages/Register';
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
              <Route path='/comparador' element={<Comparador />} />
              <Route path='/comisiones' element={<Comisiones />} />
            </Routes>
          </div>
        </Router>
        <ToastContainer />
      </>
    </div>
  );
}

export default App;
