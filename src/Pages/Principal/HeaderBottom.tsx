import React, { useEffect, useState } from 'react';
import { IoMenu, IoPersonCircleSharp } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useCart } from '../../Funcionalidad/CarritoCompra/CartContext';
import './HeaderBottom.css'; 
import CerrarSesion from '../InicioSesion/CerrasSesion';
import { FcSalesPerformance } from "react-icons/fc";


const HeaderBottom: React.FC = () => {
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const { cartCount } = useCart();
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > window.innerHeight / 10);
        };

        window.addEventListener('scroll', handleScroll);

        const storedName = localStorage.getItem('name');
        setName(storedName);

        const intervalId = setInterval(() => {
            const newName = localStorage.getItem('name');
            if (newName !== name) {
                setName(newName);
            }
        }, 1000);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        // Actualiza el estado de nombre a null para que muestre "Inicia Sesión"
        setName(null);
    };

    return (
        <div className={`header-bottom ${isSticky ? 'sticky' : ''}`}>
            <a href='/' style={{ textDecoration: "none" }}>
                <span style={{ display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "bold", color: "gray" }}>
                    <IoMenu style={{ fontSize: "3vh" }} /> CATEGORÍAS
                </span>
            </a>
            <input style={{ paddingLeft: "15px" }} className='buscar' placeholder='¿Qué estás buscando?' />
            <div className='iconos'>
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

                <div style={{ display: "flex", height: "6vh", width: "7vw", alignItems: "center",border:"1px transparent" }}>
                    {name ? (
                        <span style={{ display: "flex", flexDirection: "column", color: "green" }}>
                            <span style={{ fontWeight: "bold" }}>Hola</span>
                            <span style={{ fontSize: "12px" }}>{name}</span>
                            <CerrarSesion onLogout={handleLogout} /> 
                        </span>
                    ) : (
                        <span style={{ display: "flex", flexDirection: "column", color: "green" }}>
                            <span style={{ fontWeight: "bold" }}>Hola</span>
                            <span style={{ fontSize: "12px" }}>
                                <Link style={{ textDecoration: "none", color: "green" }} to='/iniciosesion'>Inicia Sesión</Link>
                            </span>
                        </span>
                    )}
                    <IoPersonCircleSharp style={{ fontSize: "5vh", color: "gray" }} />
                </div>

                <div style={{border:"1px transparent",height:"6vh",width:"8vw",display:"flex",flexDirection:"row",marginLeft:"-1vw"}}>
                    <Link style={{textDecoration:"none"}} to='/ventas-corporativas'>
                        <span style={{fontSize:"13px",fontWeight:"bold",color:"green",width:"5vw",
                                height:"6vh",display:"flex",alignItems:"center"}}>
                                    Ventas Corporativas
                        </span>
                    </Link>
                    <Link to='/ventas-corporativas'>
                        <FcSalesPerformance style={{fontSize:"35px"}} />
                    </Link>
                    

                </div>
                
            </div>
        </div>
    );
};

export default HeaderBottom;
