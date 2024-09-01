import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FcSalesPerformance } from "react-icons/fc";
import { FaTruck } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonCircleSharp, IoMenu } from "react-icons/io5";
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../../Funcionalidad/CarritoCompra/CartContext';
import RegistroUsuario from '../Registrarse/RegistroUsuario'; // Ensure correct import path
import IniciarSesion from '../InicioSesion/IniciarSesion';
import './HeaderBottom.css';

interface HeaderBottomProps {
  className?: string;
}

const HeaderBottom: React.FC<HeaderBottomProps> = ({ className }) => {
  const { cartCount } = useCart();
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [razonSocial, setRazonSocial] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedRazonSocial = localStorage.getItem('razonSocial');

    setDisplayName(storedName);
    setRazonSocial(storedRazonSocial);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    localStorage.removeItem('name');
    localStorage.removeItem('razonSocial');
    window.location.reload();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLoginSuccess = () => {
    // Define what should happen on successful login
    // For now, let's just close the dialog
    handleClose();
    // You might want to refresh or update user state here
    const storedName = localStorage.getItem('name');
    const storedRazonSocial = localStorage.getItem('razonSocial');
    setDisplayName(storedName);
    setRazonSocial(storedRazonSocial);
  };

  return (
    <div className={`header-bottom ${className}`}>
      <a href="/" >
        <span style={{ display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "bold", color: "gray" }}>
          <IoMenu style={{ fontSize: "3vh" }} /> CATEGORÍAS
        </span>
      </a>
      <input className='buscar' placeholder='¿Qué estás buscando?' />

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

        <div style={{ height: "6vh", width: "8vw", display: "flex", flexDirection: "row" }}>
          <Link style={{ textDecoration: "none" }} to='/ventas-corporativas'>
            <span style={{ fontSize: "13px", fontWeight: "bold", color: "green", width: "5vw", height: "6vh", display: "flex", alignItems: "center" }}>
              Ventas Corporativas
            </span>
          </Link>
          <Link to='/ventas-corporativas'>
            <FcSalesPerformance style={{ fontSize: "35px" }} />
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", height: "6vh", width: "8vw", marginLeft: "-1vw" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {displayName ? (
              <span style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                <span style={{ color: "green", fontWeight: "bold" }}>Hola</span>
                <span style={{ fontSize: "12px", color: "green" }}>{displayName}</span>
              </span>
            ) : razonSocial ? (
              <span style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                <span style={{ color: "green", fontWeight: "bold" }}>Hola</span>
                <span style={{ fontSize: "10px", color: "green" }}>{razonSocial}</span> 
              </span>
            ) : (
              <span style={{ color: "green" }}>
                <span style={{ color: "green", fontWeight: "bold" }}>Hola </span>
              </span>
            )}
            {!displayName && !razonSocial && (
              <a href='#' onClick={(e) => { e.preventDefault(); handleOpen(); }} style={{ textDecoration: "none" }}>
                <span style={{ fontSize: "15px", color: "red" }}>
                  Inicia Sesión
                </span>
              </a>
            )}
            {(displayName || razonSocial) && (
              <button
                style={{ fontSize: "10px", backgroundColor: "red", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
            )}
          </div>
          <div><IoPersonCircleSharp style={{ fontSize: "5vh", color: "gray" }} /></div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          Registro de Usuario
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            style={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <IniciarSesion
            onClose={handleClose}
            onRegister={() => {}} // If necessary, handle onRegister
            onLoginSuccess={handleLoginSuccess} // Pass the onLoginSuccess handler
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeaderBottom;
