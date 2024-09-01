import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import HeaderBottom from './HeaderBottom';
import './Principal.css';

const PaginaPrincipal: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const headerBottom = document.querySelector('.header-bottom') as HTMLElement;
      const headerTop = document.querySelector('.header-top') as HTMLElement;

      if (headerTop && window.scrollY > headerTop.offsetHeight) {
        headerBottom?.classList.add('sticky');
      } else {
        headerBottom?.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="header">
        <div className="header-top">
          <img src='/' alt='logo' />
        </div>
        <HeaderBottom />
      </header>
      <main className="main">
        <div style={{ height: '200vh' }}>
          <br /><br />
          <span style={{ fontWeight: "bold", fontSize: "4vh" }}>NUESTRAS CATEGORÍAS</span>
          <br /><br /><br/>
          <span style={{ fontSize: "1.5em" }}>Tenemos un portafolio muy completo para la atención integral de nuestros clientes</span>
          <br/><br/><br/><br/><br/>
          <ul className='contenedor-circulos'>
            <li className='circulo'><Link to='/tecnologia'><img className='imagen-categoria' src='tecnologia.jpg' /></Link></li>
            <li className='circulo'><Link to='/articulos-oficina'><img className='imagen-categoria' src='articulos.jpg' /></Link></li>
            <li className='circulo'><Link to='/servicios'><img className='imagen-categoria' src='servicios.jpg' /></Link></li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default PaginaPrincipal;


// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Principal.css';
// import HeaderBottom from './HeaderBottom';

// const PaginaPrincipal: React.FC = () => {
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';

//   return (
//     <div style={{ height: "200vh" }} className={isHomePage ? 'home-page' : ''}>
//       <header className="header">
//         <div className="header-top">
//           <img src='/' alt='logo' />
//         </div>
//         <HeaderBottom />
//       </header>
//       <main className='main'>
//         <br /><br /><span style={{ fontWeight: "bold", fontSize: "4vh" }}>NUESTRAS CATEGORÍAS</span><br /><br /><br />
//         <span style={{ fontSize: "1.5em" }}>Tenemos un portafolio muy completo para la atención integral de nuestros clientes</span><br /><br /><br /><br /><br />
//         <ul className='contenedor-circulos'>
//           <li className='circulo'><Link to='/tecnologia'><img className='imagen-categoria' src='tecnologia.jpg' /></Link></li>
//           <li className='circulo'><Link to='/articulos-oficina'><img className='imagen-categoria' src='articulos.jpg' /></Link></li>
//           <li className='circulo'><Link to='/servicios'><img className='imagen-categoria' src='servicios.jpg' /></Link></li>
//         </ul><br />
//         <span style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "8.5em" }}>
//           <span style={{ width: "15vw", position: "relative", fontSize: "18px" }}><Link style={{ textDecoration: "none", color: "black" }} to='/tecnologia'>TECNOLOGIA</Link></span>
//           <span style={{ width: "15vw", position: "relative", fontSize: "18px" }}><Link style={{ textDecoration: "none", color: "black" }} to='/articulos-oficina'>ARTÍCULOS DE OFICINA</Link></span>
//           <span style={{ width: "15vw", position: "relative", fontSize: "18px" }}><Link style={{ textDecoration: "none", color: "black" }} to='/servicios'>SERVICIOS</Link></span>
//         </span>
//       </main>
//     </div>
//   );
// };

// export default PaginaPrincipal;
