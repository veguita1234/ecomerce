import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FcSalesPerformance } from "react-icons/fc";
import { FaTruck } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";

import { useCart } from '../../Funcionalidad/CarritoCompra/CartContext';

import { IoMenu } from "react-icons/io5";

import './HeaderBottom.css';

interface HeaderBottomProps {
  className?: string;
}

const HeaderBottom: React.FC<HeaderBottomProps> = ({ className }) => {
  const { cartCount } = useCart();
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [razonSocial, setRazonSocial] = useState<string | null>(null);

  useEffect(() => {
    // Obtén los datos del localStorage al iniciar
    const storedName = localStorage.getItem('name');
    const storedRazonSocial = localStorage.getItem('razonSocial');

    console.log('storedName:', storedName); // Verifica que `storedName` es el valor correcto
    console.log('storedRazonSocial:', storedRazonSocial); // Verifica que `storedRazonSocial` es el valor correcto

    // Asigna los valores a los estados correspondientes
    setDisplayName(storedName);
    setRazonSocial(storedRazonSocial);
  }, []);

  const handleLogout = () => {
    // Limpia el localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    localStorage.removeItem('name');
    localStorage.removeItem('razonSocial');

    // Recarga la página
    window.location.reload();
  };

  return (
    <div className={`header-bottom ${className}`}>
      <a href='/' style={{ textDecoration: "none" }}>
                <span style={{ display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "bold", color: "gray" }}>
                    <IoMenu style={{ fontSize: "3vh" }} /> CATEGORÍAS
                </span>
      </a>
            <input style={{ paddingLeft: "15px" }} className='buscar' placeholder='¿Qué estás buscando?' />

      <div className="iconos">
        <FaTruck style={{ fontSize: "5vh", color: "green" }} />
        <div style={{ position: 'relative' }}>
          <Link to='/carrito'>
            <AiOutlineShoppingCart style={{ fontSize: "5vh", color: "green" }} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  background: 'green',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '3px 8px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  }}>
                  {cartCount}
                </span>
              )}
          </Link>
        </div>
        
        <div style={{height:"6vh",width:"8vw",display:"flex",flexDirection:"row"}}>
          <Link style={{textDecoration:"none"}} to='/ventas-corporativas'>
            <span style={{fontSize:"13px",fontWeight:"bold",color:"green",width:"5vw",height:"6vh",display:"flex",alignItems:"center"}}>
              Ventas Corporativas
            </span>
          </Link>
          
          <Link to='/ventas-corporativas'>
            <FcSalesPerformance style={{fontSize:"35px"}} />
          </Link>
                    

        </div>
        <div style={{ display: "flex", alignItems: "center" ,height:"6vh",width:"8vw",marginLeft:"-1vw"}}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          {displayName ? (
            <span style={{ alignItems:"center",display:"flex",flexDirection:"column",textAlign:"center"}}>
              <span style={{color:"green" ,fontWeight:"bold" }}>Hola</span>
              <span style={{fontSize:"12px",color:"green"}}>{displayName}</span>
            </span>
          ) : razonSocial ? (
            <span style={{ alignItems:"center",display:"flex",flexDirection:"column",textAlign:"center"}}>
              <span style={{ color:"green" ,fontWeight:"bold" }}>Hola</span>
              <span style={{fontSize:"10px",color:"green"}}>{razonSocial}</span> 
            </span>
          ) : (
            <span style={{ color: "green" }}>
              <span style={{ color:"green",fontWeight:"bold"}}>Hola </span>
            </span>
          )}
          {/* Enlace de iniciar sesión visible solo cuando no hay datos de sesión */}
          {!displayName && !razonSocial && (
            <Link style={{ textDecoration: "none"}} to='/iniciosesion'>
              <span style={{fontSize:"15px",color:"red"}}>
                Inicia Sesión
              </span>
              
            </Link>
          )}
          {/* Botón de cerrar sesión */}
          {(displayName || razonSocial) && (
            <button
              style={{ fontSize:"10px",backgroundColor: "red", color: "white", border: "none",  borderRadius: "4px", cursor: "pointer" }}
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          )}
          </div>
          <div><IoPersonCircleSharp style={{ fontSize: "5vh", color: "gray" }} /></div>
          
        </div>

        
      </div>
    </div>
  );
};

export default HeaderBottom;
