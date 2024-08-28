import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PaginaPrincipal from './Pages/Principal/Principal'
import Tecnologia from './Pages/Tecnologia/Tecnologia';
import ArticuloOficina from './Pages/ArticulosOficina/ArticuloOficina';
import Servicios from './Pages/Servicios/Servicios';
import InicioSesion from './Pages/InicioSesion/InicisoSesion';
import Carrito from './Pages/Carrito/Carrito';
import VentasCorporativas from './Pages/VentasCorporativas/VentasCorporativas';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/articulos-oficina" element={<ArticuloOficina />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path='/iniciosesion' element={<InicioSesion />} />
          <Route path='/carrito' element={<Carrito />}></Route>
          <Route path='/ventas-corporativas' element={<VentasCorporativas />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
