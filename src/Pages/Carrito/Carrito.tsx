import React from 'react';
import { useCart } from '../../Funcionalidad/CarritoCompra/CartContext';
import { Button, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import HeaderBottom from '../Principal/HeaderBottom';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const totalProducts = cart.length;
  const totalPrice = cart.reduce((sum, product) => sum + (product.price || 0), 0).toFixed(2);

  return (
    <div>
      <HeaderBottom/>
      
      {cart.length === 0 ? (
        <div style={{ padding: '20px' ,height:"12vh",width:"80vw",margin:"0 auto",marginTop:"5vh",gap:"2em",alignItems:"center",justifyContent:"center",display:"flex"}}>
          <img style={{height:"10vh"}} src='carrovacio.png' />
          <span style={{width:"15vw"}}>
            <span style={{fontWeight:"bold", color:"#333339",fontSize:"20px"}}>Tu Carro está vacío</span><br/>
            <span style={{ marginTop: "5px", display: "block",fontSize:"16px" }}>¡Aprovecha! Tenemos miles de productos y oportunidades únicas.</span>
          </span>
          
      </div>
      ) : (
        <><div style={{}}>
          <ul style={{ listStyleType: 'none', padding: 0,border:"1px solid",width:"50vw" }}>
            {cart.map(product => (
              <li key={product.id} style={{ marginBottom: '15px',  alignItems: 'center' }}>
                <img
                  src={product.image}
                  alt={`Imagen de ${product.name}`}
                  style={{ width: '100px', height: 'auto', marginRight: '15px' }}
                />
                <span style={{ flex: 1 }}>{product.name}</span>
                <span style={{ marginRight: '15px' }}>
                  {product.price !== undefined ? ` - S/. ${product.price.toFixed(2)}` : ' - Precio no disponible'}
                </span>
                <Button variant="danger" onClick={() => removeFromCart(product.id)}>
                  <FaTrash />
                </Button>
              </li>
            ))}
          </ul>
          </div>

          {/* Tarjeta con resumen del carrito */}
          <Card style={{ marginTop: '20px', padding: '15px' }}>
            <Card.Body>
              <Card.Title>Resumen del Carrito</Card.Title>
              <Card.Text>
                Productos ({totalProducts}): S/. {totalPrice}
              </Card.Text>
              <Card.Text>
                <strong>TOTAL: S/. {totalPrice}</strong>
              </Card.Text>
              <Button variant="primary">Comprar</Button>
              <Link to='/ventas-corporativas'><Button variant="primary">Cotizar</Button></Link>
            </Card.Body>
          </Card>
        </>
      )}
    
    </div>
  );
};

export default CartPage;
