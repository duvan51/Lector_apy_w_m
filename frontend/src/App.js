import './App.css';
import  HomeWocomerce  from './pages/Home_Wm'
import { Route, Routes, Navigate } from 'react-router-dom';



const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<HomeWocomerce />} />
        <Route path="/wocommerce" element={<HomeWocomerce />} />
    
      </Routes>
    </div>
  );
};

export default App