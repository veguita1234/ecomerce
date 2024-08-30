import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cotizar.css'

const Cotizar: React.FC = () => {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // Obtener la fecha actual y formatearla como dd/mm/yy
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = String(now.getFullYear()).slice(-2);
        setCurrentDate(`${day}/${month}/${year}`);
    }, []);

    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <span style={{position:"absolute",marginTop:"4vh",fontWeight:"bold",fontSize:"30px"}}>COTIZACION</span>
            <div className='pagina-label'>
                <div className='input-container'>
                    <input type="text" id="RUC" className="input" placeholder='RUC' required />
                    <label htmlFor="RUC" className="label">RUC</label>
                </div>
                <div className='input-container'>
                    <input type="text" id="razon" className="input" placeholder='Razón Social' required />
                    <label htmlFor="razon" className="label">Razón Social</label>
                </div>
                <div className='input-container'>
                    <input type="text" id="departamento" className="input" placeholder='Departamento' required />
                    <label htmlFor="departamento" className="label">Departamento</label>
                </div>
                <div className='input-container'>
                    <input type="text" id="provincia" className="input" placeholder='Provincia' required />
                    <label htmlFor="provincia" className="label">Provincia</label>
                </div>
                <div className='input-container'>
                    <input type="text" id="distrito" className="input" placeholder='Distrito' required />
                    <label htmlFor="distrito" className="label">Distrito</label>
                </div>
                <div className='input-container'>
                    <input type="text" id="direccion" className="input" placeholder='Dirección' required />
                    <label htmlFor="direccion" className="label">Dirección</label>
                </div>
                <div className='input-container'>
                    <input type="text" id="telefono" className="input" placeholder='N° Teléfono' required />
                    <label htmlFor="telefono" className="label">N° Teléfono</label>
                </div>
                <div className='input-container'>
                    <input type="text" id="celular" className="input" placeholder='N° Celular' required />
                    <label htmlFor="celular" className="label">N° Celular</label>
                </div>
                <div className="input-container">
                    <input type="text"readOnly value={currentDate} className="input" />
                    <label className="label">Fecha Actual</label>
                </div>
                <Link to='/tecnologia'><Button style={{border:"1px transparent",height:"5vh",width:"5vw",marginLeft:"26vw",backgroundColor:"#2F3842",color:"white",borderRadius:"15px"}}>Enviar</Button></Link>

            </div>
        </div>
    );
};

export default Cotizar;