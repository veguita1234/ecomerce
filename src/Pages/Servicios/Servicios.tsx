import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import './Servicios.css'

const Servicios: React.FC = () => {
  return (

    <div>
      <div className='Digital'>
        <br/>
        <div className='titulo'>
          <hr className='linea' />
            <span style={{fontSize:"50px",fontWeight:"bold",color:"#28122A"}}>TRANSFORMACIÓN DIGITAL</span>
          <hr className='linea' />
        </div>
        <br/>
        <span style={{fontSize:"20px"}}>Aprovecha las oportunidades del mundo digital con nuestra ayuda experta</span><br/><br/><br/><br/>
        
        <div style={{gap:"8em",position:"relative",display:"flex",justifyContent:"center",zIndex:"2"}}>
          <img style={{height:"30vh"}} src='/'></img>
          <img style={{height:"30vh"}} src='/'></img>
          <img style={{height:"30vh"}} src='/'></img>
          <div style={{width:"15vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <FaLongArrowAltRight style={{fontSize:"50px",marginBottom:"-14px"}}/><br/>
            <span style={{fontSize:"15px",fontWeight:"bold"}}>Ver más</span>
          </div>
        </div>
        
      </div>

      <div className='Infraestructura'>
        <br/>
        <div className='titulo'>
          <hr className='linea' />
            <span style={{fontSize:"50px",fontWeight:"bold",color:"#28122A"}}>INFRAESTRUCTURA TI</span>
          <hr className='linea' />
        </div>
        <br/><br/>
        <span style={{fontSize:"20px"}}>Desde redes hasta servidores: soluciones completas para tu infraestructura TI</span><br/><br/><br/><br/>
        
        <div style={{gap:"8em",position:"relative",display:"flex",justifyContent:"center",zIndex:"2"}}>
          <img style={{height:"30vh",width:"15vw"}} src='/'></img>
          <img style={{height:"30vh",width:"20vw"}} src='/'></img>
          <img style={{height:"30vh"}} src='/.png'></img>
          <div style={{width:"10vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <FaLongArrowAltRight style={{fontSize:"50px",marginBottom:"-14px"}}/><br/>
            <span style={{fontSize:"15px",fontWeight:"bold"}}>Ver más</span>
          </div>
        </div>
        
      </div>

    </div>

  );
};

export default Servicios;