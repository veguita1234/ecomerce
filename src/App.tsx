import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PaginaPrincipal from './Pages/Principal/Principal'
import Tecnologia from './Pages/Tecnologia/Tecnologia';
import ArticuloOficina from './Pages/ArticulosOficina/ArticuloOficina';
import Servicios from './Pages/Servicios/Servicios';
import InicioSesion from './Pages/InicioSesion/InicisoSesion';
import Carrito from './Pages/Carrito/Carrito';
import Cotizar from './Pages/VentasCorporativas/Cotizar/Cotizar';
import Registrarse from './Pages/Registrarse/Registrarse';
import VentasCorporativas from './Pages/VentasCorporativas/VentaCorporativa/VentasCorporativas';
import ConocenosCorporativa from './Pages/VentasCorporativas/Conocenos-VentasCorporativas/ConocenosCorporativa';
import ContactenosCorporativa from './Pages/VentasCorporativas/Contactenos-VentasCorporativas/ContactenosCorporativa';
import CatalogoCorporativo from './Pages/VentasCorporativas/Catalogo-VentasCorporativas/CatalogoCorporativo';


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
          <Route path='/cotizar' element={<Cotizar />}></Route>
          <Route path='/registrarse' element={<Registrarse />}></Route>
          <Route path='/ventas-corporativas' element={<VentasCorporativas />}></Route>
          <Route path='/conocenos-ventascorporativas' element={<ConocenosCorporativa />}></Route>
          <Route path='/contactenos-ventascorporativas' element={<ContactenosCorporativa />}></Route>
          <Route path='/catalogo-ventascorporativas' element={<CatalogoCorporativo />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
