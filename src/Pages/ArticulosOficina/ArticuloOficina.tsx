import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import './ArticuloOficina.css'

const ArticuloOficina: React.FC = () => {
  return (

    <div>
      <div className='Utiles'>
        <br/>
        <div className='titulo'>
          <hr className='linea' />
            <span style={{fontSize:"50px",fontWeight:"bold",color:"#28122A"}}>ÚTILES DE ESCRITORIO</span>
          <hr className='linea' />
        </div>
        <br/>
        <span style={{fontSize:"20px"}}>El complemento perfecto para un día de trabajo efectivo</span><br/><br/><br/><br/>
        
        <div style={{gap:"8em",position:"relative",display:"flex",justifyContent:"center",zIndex:"2"}}>
          <img style={{height:"30vh"}} src='ARCHIVADOR.png'></img>
          <img style={{height:"30vh"}} src='AGENDA.png'></img>
          <img style={{height:"30vh"}} src='LAMPARA.png'></img>
          <div style={{width:"15vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <FaLongArrowAltRight style={{fontSize:"50px",marginBottom:"-14px"}}/><br/>
            <span style={{fontSize:"15px",fontWeight:"bold"}}>Ver más</span>
          </div>
        </div>
        
      </div>

      <div className='Otros'>
        <br/>
        <div className='titulo'>
          <hr className='linea' />
            <span style={{fontSize:"50px",fontWeight:"bold",color:"#28122A"}}>OTROS</span>
          <hr className='linea' />
        </div>
        <br/><br/>
        <span style={{fontSize:"20px"}}>Más allá de lo esencial: descubre nuestros artículos variados</span><br/><br/><br/><br/>
        
        <div style={{gap:"8em",position:"relative",display:"flex",justifyContent:"center",zIndex:"2"}}>
          <img style={{height:"30vh",width:"15vw"}} src='RELOJ.jpg'></img>
          <img style={{height:"30vh",width:"20vw"}} src='CESTO.jpg'></img>
          <img style={{height:"30vh"}} src='SILLA.png'></img>
          <div style={{width:"10vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <FaLongArrowAltRight style={{fontSize:"50px",marginBottom:"-14px"}}/><br/>
            <span style={{fontSize:"15px",fontWeight:"bold"}}>Ver más</span>
          </div>
        </div>
        
      </div>

    </div>

  );
};

export default ArticuloOficina;