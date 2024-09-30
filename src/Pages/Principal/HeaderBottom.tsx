import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FcSalesPerformance } from "react-icons/fc";
import { FaTruck } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { IoPersonCircleSharp, IoMenu } from "react-icons/io5";
import { Dialog, DialogContent } from '@mui/material';
import { useCart } from '../../Funcionalidad/CarritoCompra/CartContext';
import RegistroUsuario from '../Registrarse/RegistroUsuario';
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
  const [isRegister, setIsRegister] = useState(false);
  const iconSize = 40
  const [dialogSize, setDialogSize] = useState<{ width: string, height: string }>({
    width: '300px',
    height: '400px'
  });

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

  const handleOpen = (isRegisterPage: boolean = false) => {
    setIsRegister(isRegisterPage);
    if (isRegisterPage) {
      setDialogSize({ width: '50vw', height: '40vh' });
    } else {
      setDialogSize({ width: '40vw', height: '60vh' });
    }
    setOpen(true);
  };
  
  const handleClose = () => setOpen(false);

  const handleLoginSuccess = () => {
    handleClose();
    const storedName = localStorage.getItem('name');
    const storedRazonSocial = localStorage.getItem('razonSocial');
    setDisplayName(storedName);
    setRazonSocial(storedRazonSocial);
  };

  return (
    <div className={`header-bottom ${className}`}>
      <a href="" >
        <span style={{ display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "bold", color: "gray" }}>
          <IoMenu style={{ fontSize: "3vh" }} /> CATEGORÍAS
        </span>
      </a>
      <input className='buscar' placeholder='¿Qué estás buscando?' />

      <div className="iconos">
        {razonSocial && (
          <Link to="/dashboard" style={{ textDecoration: "none", display: "flex", flexDirection: "row", height: "6vh", alignItems: "center", gap: "0.2em" }}>
            <MdSpaceDashboard style={{ fontSize: "30px" }} />
            <span style={{ fontSize: "15px", color: "green", fontWeight: "bold" }}>Dashboard</span>
          </Link>
        )}

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
              <a href='#' onClick={(e) => { e.preventDefault(); handleOpen(false); }} style={{ textDecoration: "none" }}>
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
          <div style={{borderRadius:"50%",width:`${iconSize}px`,height: `${iconSize}px`, display:"flex",
            alignItems:"center",justifyContent:"center"}}>
              <IoPersonCircleSharp style={{ fontSize: `${iconSize}px`, color: "gray" }} />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "1vw",
            height: "1vh",
            justifyContent:"center",
            textAlign:"center",
            alignItems:"center"
          },
        }}
      >
        <DialogContent>
          {isRegister ? (
            <RegistroUsuario onClose={handleClose} />
          ) : (
            <IniciarSesion
              onClose={handleClose}
              onRegister={() => handleOpen(true)} // Abre el modal de registro
              onLoginSuccess={handleLoginSuccess} // Pasar el controlador onLoginSuccess
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeaderBottom;
