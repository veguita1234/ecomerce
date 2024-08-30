
import './Principal.css';

import { Link } from 'react-router-dom';

import HeaderBottom from './HeaderBottom';

const PaginaPrincipal: React.FC = () => {

    return (
        <div style={{ height: "60vh" }}>
            <header className="header">
                <div className="header-top">
                    <img src='/' alt='logo'></img>
                </div>
            
                <HeaderBottom />
            </header>

            <main className='main'>
                <br /><br /><span style={{ fontWeight: "bold", fontSize: "4vh" }}>NUESTRAS CATEGORÍAS</span><br/><br/><br/>
                <span style={{fontSize:"1.5em"}}>Tenemos un portafolio muy completo para la atención integral de nuestros clientes</span><br/><br/><br/><br/><br/>
                <ul className='contenedor-circulos'>
                    <li className='circulo'><Link to='/tecnologia'><img className='imagen-categoria' src='tecnologia.jpg' /></Link></li>
                    <li className='circulo'><Link to='/articulos-oficina'><img className='imagen-categoria' src='articulos.jpg' /></Link></li>
                    <li className='circulo'><Link  to='/servicios'><img className='imagen-categoria' src='servicios.jpg' /></Link></li>
                </ul><br/>
                <span style={{display:"flex",flexDirection:"row",justifyContent:"center",gap:"8.5em"}}>
                    <span style={{width:"15vw",position:"relative",fontSize:"18px"}}><Link style={{textDecoration:"none",color:"black"}} to='/tecnologia'>TECNOLOGIA</Link></span>
                    <span style={{width:"15vw",position:"relative",fontSize:"18px"}}><Link style={{textDecoration:"none",color:"black"}} to='/articulos-oficina'>ARTÍCULOS DE OFICINA</Link></span>
                    <span style={{width:"15vw",position:"relative",fontSize:"18px"}}><Link style={{textDecoration:"none",color:"black"}} to='/servicios'>SERVICIOS</Link></span>
                </span>
            </main>
        </div>
    );
};

export default PaginaPrincipal;