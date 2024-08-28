import React from 'react';
import './Tecnologia.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useCart } from '../../Funcionalidad/CarritoCompra/CartContext';
import HeaderBottom from '../Principal/HeaderBottom';

const Tecnologia: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: { id: string, name: string, price: number, image: string }) => {
    addToCart(product);
  };

  return (
    <div>
      <HeaderBottom/>
      <div className='tecnologia'>
        <br/>
        <div className='titulo'>
          <hr className='linea' />
          <span style={{fontSize:"50px",fontWeight:"bold",color:"#28122A"}}>COMPUTACIÓN</span>
          <hr className='linea' />
        </div>
        <br/>
        <span style={{fontSize:"20px"}}>La ciencia de hoy es la tecnologia del mañana</span><br/><br/><br/><br/>
        
        <div style={{gap:"5em",position:"relative",display:"flex",justifyContent:"center",zIndex:"2"}}>
          <Card style={{height:"35vh",width:"15vw"}}>
            <Card.Img variant='top' style={{height:"25vh"}} src='lapto.png' />
            <Card.Body>
              <Card.Title>Lapto</Card.Title>
              <Card.Text style={{textAlign:"start",fontWeight:"bold"}}>S/. 2500.00</Card.Text><br/>
              <Button
                style={{fontWeight:"bold",width:"7vw",height:"4vh",fontSize:"13px"}}
                variant='primary'
                onClick={() => handleAddToCart({ id: '1', name: 'Lapto', price: 2500, image: 'lapto.png' })}
              >
                <AiOutlineShoppingCart style={{fontSize:"15px",paddingTop:"2px"}} />Agregar
              </Button>
            </Card.Body>
          </Card>
          
          <Card style={{height:"35vh",width:"15vw"}}>
            <Card.Img variant='top' style={{height:"25vh"}} src='CPU.png' />
            <Card.Body>
              <Card.Title>CPU</Card.Title>
              <Card.Text style={{textAlign:"start",fontWeight:"bold"}}>S/. 1400.00</Card.Text><br/>
              <Button
                style={{fontWeight:"bold",width:"7vw",height:"4vh",fontSize:"13px"}}
                variant='primary'
                onClick={() => handleAddToCart({ id: '2', name: 'CPU', price: 1400, image: 'CPU.png' })}
              >
                <AiOutlineShoppingCart style={{fontSize:"15px",paddingTop:"2px"}} />Agregar
              </Button>
            </Card.Body>
          </Card>

          <Card style={{height:"35vh",width:"15vw"}}>
            <Card.Img variant='top' style={{height:"25vh",width:"16vw"}} src='TECLADO.png' />
            <Card.Body>
              <Card.Title>Teclado</Card.Title>
              <Card.Text style={{textAlign:"start",fontWeight:"bold"}}>S/. 350.00</Card.Text><br/>
              <Button
                style={{fontWeight:"bold",width:"7vw",height:"4vh",fontSize:"13px"}}
                variant='primary'
                onClick={() => handleAddToCart({ id: '3', name: 'Teclado', price: 350, image: 'TECLADO.png' })}
              >
                <AiOutlineShoppingCart style={{fontSize:"15px",paddingTop:"2px"}} />Agregar
              </Button>
            </Card.Body>
          </Card>
          
          <div style={{width:"15vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <FaLongArrowAltRight style={{fontSize:"50px",marginBottom:"-14px"}}/><br/>
            <span style={{fontSize:"15px",fontWeight:"bold"}}>Ver más</span>
          </div>
        </div>
        
      </div>

      <div className='licencias'>
        <br/>
        <div className='titulo'>
          <hr className='linea' />
          <span style={{fontSize:"50px",fontWeight:"bold",color:"#28122A"}}>LICENCIAS Y PROGRAMACIÓN</span>
          <hr className='linea' />
        </div>
        <br/><br/>
        <span style={{fontSize:"20px"}}>Un programador al nacer no llora, dice "HOLA MUNDO"</span><br/><br/><br/>
        
        <div style={{gap:"5em",position:"relative",display:"flex",justifyContent:"center",zIndex:"2"}}>
          
          <Card style={{height:"35vh",width:"15vw"}}>
            <Card.Img variant='top' style={{height:"25vh"}} src='LINUX.png' />
            <Card.Body>
              <Card.Title>LINUX</Card.Title>
              <Card.Text style={{textAlign:"start",fontWeight:"bold"}}>S/. 90.00</Card.Text><br/>
              <Button
                style={{fontWeight:"bold",width:"7vw",height:"4vh",fontSize:"13px"}}
                variant='primary'
                onClick={() => handleAddToCart({ id: '4', name: 'LINUX', price: 90, image: 'LINUX.png' })}
              >
                <AiOutlineShoppingCart style={{fontSize:"15px",paddingTop:"2px"}} />Agregar
              </Button>
            </Card.Body>
          </Card>

          <Card style={{height:"35vh",width:"15vw"}}>
            <Card.Img variant='top' style={{height:"25vh"}} src='WINDOW.png' />
            <Card.Body>
              <Card.Title>WINDOWS</Card.Title>
              <Card.Text style={{textAlign:"start",fontWeight:"bold"}}>S/. 70.00</Card.Text><br/>
              <Button
                style={{fontWeight:"bold",width:"7vw",height:"4vh",fontSize:"13px"}}
                variant='primary'
                onClick={() => handleAddToCart({ id: '5', name: 'WINDOWS', price: 70, image: 'WINDOW.png' })}
              >
                <AiOutlineShoppingCart style={{fontSize:"15px",paddingTop:"2px"}} />Agregar
              </Button>
            </Card.Body>
          </Card>

          <Card style={{height:"35vh",width:"15vw"}}>
            <Card.Img variant='top' style={{height:"25vh"}} src='ANTIVIRUS.png' />
            <Card.Body>
              <Card.Title>ANTIVIRUS</Card.Title>
              <Card.Text style={{textAlign:"start",fontWeight:"bold"}}>S/. 200.00</Card.Text><br/>
              <Button
                style={{fontWeight:"bold",width:"7vw",height:"4vh",fontSize:"13px"}}
                variant='primary'
                onClick={() => handleAddToCart({ id: '6', name: 'ANTIVIRUS', price: 200, image: 'ANTIVIRUS.png' })}
              >
                <AiOutlineShoppingCart style={{fontSize:"15px",paddingTop:"2px"}} />Agregar
              </Button>
            </Card.Body>
          </Card>

          <div style={{width:"15vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <FaLongArrowAltRight style={{fontSize:"50px",marginBottom:"-14px"}}/><br/>
            <span style={{fontSize:"15px",fontWeight:"bold"}}>Ver más</span>
          </div>
        </div>
        
      </div>

      <div className='accesorios'>
        <br/>
        <div className='titulo'>
          <hr className='linea' />
          <span style={{fontSize:"50px",fontWeight:"bold",color:"#28122A"}}>ACCESORIOS</span>
          <hr className='linea' />
        </div>
        <br/>
        <span style={{fontSize:"20px"}}>Potencia tu productividad con accesorios de calidad</span><br/><br/><br/><br/>
        
        <div style={{gap:"7em",position:"relative",display:"flex",justifyContent:"center",zIndex:"2"}}>
          
          <Card style={{height:"35vh",width:"15vw"}}>
            <Card.Img variant='top' style={{height:"25vh"}} src='mouse.png' />
            <Card.Body>
              <Card.Title>Mouse</Card.Title>
              <Card.Text style={{textAlign:"start",fontWeight:"bold"}}>S/. 80.00</Card.Text><br/>
              <Button
                style={{fontWeight:"bold",width:"7vw",height:"4vh",fontSize:"13px"}}
                variant='primary'
                onClick={() => handleAddToCart({ id: '7', name: 'Mouse', price: 80, image: 'mouse.png' })}
              >
                <AiOutlineShoppingCart style={{fontSize:"15px",paddingTop:"2px"}} />Agregar
              </Button>
            </Card.Body>
          </Card>

          <Card style={{height:"35vh",width:"15vw"}}>
            <Card.Img variant='top' style={{height:"25vh"}} src='monitor.png' />
            <Card.Body>
              <Card.Title>Monitor</Card.Title>
              <Card.Text style={{textAlign:"start",fontWeight:"bold"}}>S/. 300.00</Card.Text><br/>
              <Button
                style={{fontWeight:"bold",width:"7vw",height:"4vh",fontSize:"13px"}}
                variant='primary'
                onClick={() => handleAddToCart({ id: '8', name: 'Monitor', price: 300, image: 'monitor.png' })}
              >
                <AiOutlineShoppingCart style={{fontSize:"15px",paddingTop:"2px"}} />Agregar
              </Button>
            </Card.Body>
          </Card>

          <Card style={{height:"35vh",width:"15vw"}}>
            <Card.Img variant='top' style={{height:"25vh"}} src='parlante.png' />
            <Card.Body>
              <Card.Title>Parlante</Card.Title>
              <Card.Text style={{textAlign:"start",fontWeight:"bold"}}>S/. 120.00</Card.Text><br/>
              <Button
                style={{fontWeight:"bold",width:"7vw",height:"4vh",fontSize:"13px"}}
                variant='primary'
                onClick={() => handleAddToCart({ id: '9', name: 'Parlante', price: 120, image: 'parlante.png' })}
              >
                <AiOutlineShoppingCart style={{fontSize:"15px",paddingTop:"2px"}} />Agregar
              </Button>
            </Card.Body>
          </Card>

          <div style={{width:"15vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <FaLongArrowAltRight style={{fontSize:"50px",marginBottom:"-14px"}}/><br/>
            <span style={{fontSize:"15px",fontWeight:"bold"}}>Ver más</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Tecnologia;
