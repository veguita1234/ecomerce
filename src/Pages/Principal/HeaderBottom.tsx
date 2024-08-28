import React, { useEffect, useState } from 'react';
import { IoMenu, IoPersonCircleSharp } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcSalesPerformance } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useCart } from '../../Funcionalidad/CarritoCompra/CartContext';
import './HeaderBottom.css'; 

const HeaderBottom: React.FC = () => {
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 6 * window.innerHeight / 100); // 6vh
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

                <div style={{ display: "flex", height: "6vh", width: "8vw", alignItems: "center", gap: "1em" }}>
                    <span style={{ display: "flex", flexDirection: "column", color: "green" }}>
                        <span style={{ fontWeight: "bold" }}>Hola</span>
                        <span style={{ fontSize: "12px" }}><Link style={{ textDecoration: "none", color: "green" }} to='/iniciosesion'>Inicia sesión</Link></span>
                    </span>
                    <IoPersonCircleSharp style={{ fontSize: "5vh", color: "gray" }} />
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;