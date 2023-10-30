import './App.css';
import  Home_Wm  from './pages/wocomerce/Home_Wm'
import Update_wm from './pages/wocomerce/Update_Wm'
import Home_ML from './pages/mercadolibre/Home_ML';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Header from './components/Header'

import Login from "./pages/login"



const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Login />} />
        <Route element={<Header />}>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home_Wm />} />
            <Route path="wocomerce" element={<Home_Wm />} />
            <Route path="wocomerce/update" element={<Update_wm />} />
            <Route path="mercadolibre" element={<Home_ML />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};


/*
// Componente que contiene las rutas públicas
const Wocommerce = () => (
  <>
    <Routes>
      <Route path="/" element={<Home_Wm />} />
      <Route path="/wocomerce/update" element={<Update_wm />} />
    </Routes>
  </>
);

// Componente que contiene las rutas públicas
const Mercadolibre = () => (
  <>
    <Routes>
      <Route path="/" element={<Home_ML />} />
    </Routes>
  </>
);*/


export default App