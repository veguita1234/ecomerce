import HeaderBottom from "../../Principal/HeaderBottom";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import './ConocenosCorporativa.css';

const ConocenosCorporativa: React.FC = () => {

    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",height:"150vh",position:"relative"}}>
            <HeaderBottom />

            <div style={{width:"100%",height:"50vh",display:"flex",flexDirection:"row",alignItems:"center"}}>
                <div style={{height:"30vh",width:"25vw",display:"flex",justifyContent:"end",alignItems:"center"}}>
                    <span style={{fontSize:"45px",fontWeight:"bold",width:"20vw",border:"1px solid #009450",padding:"10px",textAlign:"center",
                        backgroundColor:"#009450",color:"white",borderRadius:"40px"
                    }}>
                        CONÓCENOS
                    </span>
                </div>

                <div style={{height:"35vh",width:"75vw"}}>
                    {/*IMAGEN AL LADO  */}
                </div>
            </div>

            <div style={{width:"75vw",height:"10vh",display:"flex",alignItems:"center"}}>
                <Link style={{display:"flex",alignItems:"center",textDecoration:"none"}} 
                to='/ventas-corporativas'>
                    <IoIosArrowRoundBack style={{fontSize:"25px",color:"#009450"}}/>
                    <span style={{color:"#009450",fontSize:"18px"}}>Volver atrás</span>
                </Link>
                
            </div>

            <div style={{width:"80vw"}}>
                <span style={{display:"flex",flexDirection:"column",gap:"0.5em"}}>
                    <span style={{fontSize:"22px"}}>Somos la empresa peruana líder en la comercialización de útiles y juguetes con más de 55 años de experiencia en el mercado.</span>
                    <span style={{fontSize:"22px"}}>Manejamos un portafolio amplio de productos para empresas a los mejores precios del mercado.</span>
                    <span style={{fontSize:"22px"}}>Realiza tus pedidos consultando con tu ejecutivo de ventas o ahorra tiempo con nuestra plataforma para Clientes con Contrato.</span>
                </span>
            </div><br/><br/><br/><br/>

            <div className='categorias'>
                <span style={{ fontWeight: "bold", fontSize: "4vh" }}>NUESTRAS CATEGORÍAS</span><br/><br/><br/>
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
            </div>
        </div>
    );
};

export default ConocenosCorporativa;