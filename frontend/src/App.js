import './App.css';
import  Home_Wm  from './pages/wocomerce/Home_Wm'
import Update_wm from './pages/wocomerce/Update_Wm'
import Home_ML from './pages/mercadolibre/Home_ML';
import Dashboard from './pages/Dashboard';

import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute';

import Login from "./pages/login";



const App = () => {
  return (
    <div className="App">
      <Publics />
      <Privadas />
    </div>
  );
};



// Componente que contiene las rutas públicas
const Publics = () => (
  <>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </>
);

// Componente que contiene las rutas públicas
const Privadas = () => (
  <>
    <header><Header /></header> 
    <Routes>
        <Route path='/:id' element={<Dashboard />} />
        <Route path='/:id/wocomerce' element={<Home_Wm />} />
        <Route path="/wocomerce" element={
                  <ProtectedRoute>
                    <Home_Wm />
                </ProtectedRoute>
                } />
       <Route path="/wocomerce/update" element={<Update_wm />} />
       <Route path="/mercadolibre" element={<Home_ML />} />
   </Routes>
  </>
);


export default App